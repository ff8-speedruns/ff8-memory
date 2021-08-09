/**
 * This code was converted from code originally created by pingval for PS
 * then modified by awesomeWaves for FF8 2013 FR on PC.
 */

/**
 * Listen for text box changes to determine when to calculate.
 */
let textbox = document.getElementById('tilts');
textbox.addEventListener('input', function (e) {
    // We expect exactly 12 inputs.
    // Don't waste processing power otherwise.
    if (textbox.value.length == 12) {
        //Calculate();
    }
});


const options = {
    language: "en",

    // Target party. Multiple settings are possible.
    targets: [
        ["irvine", "squall", "zell"],
        ["irvine", "squall", "selphie"],
        ["irvine", "squall", "rinoa"],
        ["irvine", "zell", "selphie"],
        ["irvine", "zell", "rinoa"],
        ["irvine", "selphie", "rinoa"]
    ],

    // Index used as a search reference
    base: 2800,

    // Search for this width with base as the center
    width: 2000,

    // 検索順 反転:reverse, 降順:ascending, 昇順:descending, 通常:other than that
    order: "reverse",

    // Perform a hard reset immediately before (DISC4 start data)
    hardware_reset: false,

    // Use movie random number counter after Adele
    adel_rnd_counter: true,

    // Use the final map random number counter
    last_map_rnd_counter: true,

    // Idling duration when traveling the final map at the fastest speed
    // ps2fast_ja:22.0, ps2fast_na:22.7?, pc-fr-2013:21.5,
    last_map_duration: 21.5,

    // Characters that can be used for input. Numeric keypad / wasd / ijkl can be used by default
    input: {
        up: ["8", "w", "i"],
        down: ["2", "s", "k"],
        left: ["4", "a", "j"],
        right: ["6", "d", "l"],

        // Wildcard. If [] is specified, everything except ↑ will be treated as a wildcard.
        any: []
    },

    // Squall movement upper limit
    movements_size: 12,

    // Heading width
    left_width: 40,

    // fps
    console_fps: 60,
    debug: false,
    fallback_language: "en"
}
static class Field_RNG {
    //let enum_method, seed, state, true_rand;

    // include Enumerable
    static Initial_State = 0x00000001;

    get state() {
        return this.state
    };

    get seed() {
        return this.seed
    };

    get true_rand() {
        return this.true_rand
    };

    set true_rand(true_rand) {
        this.true_rand = true_rand
    };

    get enum_method() {
        return this.enum_method
    };

    set enum_method(enum_method) {
        this.enum_method = enum_method
    };

    constructor(seed = Field_RNG.Initial_State, enum_method = "get", true_rand = false) {
        this.init(seed);
        this.enum_method = enum_method;
        this.true_rand = true_rand
    };

    init(seed = null) {
        // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        let seed = seed ?? Math.floor(Math.random() * (0xffffffff + 1));
        this.state = seed
    };

    get shuffle() {
        return this.init.bind(this)
    };

    // Brodone
    get next_state() {
        /**
         * FF8's Field RNG is an LCR with:
         * a = 0x41C64E6D = 1103515245
         * b = 0x3039     = 12345
         * m = 0xffffffff = 2^32
         * NewRNG = (OldRNG * a + b) mod m
         **/ 

        this.state = (this.state * 0x41C64E6D + 0x3039) % 0xffffffff;
        return this.state;
    };

    // Brodone
    // Random number generation rand(0..32767)
    get nxt() {
        // >> is the bitwise right shift operator.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift
        return (this.next_state >> 16) % 0x00ff
    };

    // Returns the upper 2nd byte of the random number state rand(0..255)
    get next_1b() {
        return this.nxt() & 255
    };

    get each(_implicitBlockYield = null) {
        if (!block_given) return to_enum;

        return new Enumerator(y => loop(() => y << this.send(this.#enum_method))).each((rnd, _implicitBlockYield = null) => {
            _implicitBlockYield(rnd)
        })
    };

    get peek() {
        let _state = this.state;

        return this.send(this.enum_method).tap(() => {
            this.state = _state
        })
    };

    get size() {
        return Float.INFINITY
    };

    get rewind() {
        this.state = this.seed;
        return this.state
    }
};

// Field random numbers
Field_RNG.prototype.get = Field_RNG.prototype.next_1b;

// Party
class Party extends Set {
    static Char_Str_Table = {
        squall: "Sq",
        zell: "Ze",
        irvine: "Ir",
        quistis: "Qu",
        rinoa: "Ri",
        selphie: "Se"
    };

    static x2char(x) {
        switch (x) {
            case 0:
            case "sq":
            case "squall":
                "squall";
                break;

            case 1:
            case "ze":
            case "zell":
                "zell";
                break;

            case 2:
            case "ir":
            case "irvine":
                "irvine";
                break;

            case 3:
            case "qu":
            case "quistis":
                "quistis";
                break;

            case 4:
            case "ri":
            case "rinoa":
                "rinoa";
                break;

            case 5:
            case "se":
            case "selphie":
                "selphie"
        }
    };

    static char2str(c) {
        Party.Char_Str_Table[c]
    };

    constructor(str_or_arr = null, block) {
        let party = (() => {
            switch (str_or_arr) {
                case String:

                    return str_or_arr.scan(/Sq|ス|Ze|ゼ|Ir|ア|Qu|キ|Ri|リ|Se|セ/i).map(s => (
                        Party.x2char(s)
                    ));

                case Array:
                    return str_or_arr.map(x => Party.x2char(x));

                default:
                    return null
            }
        })();

        if (party.nil) return;
        super(party.compact.first(3), block)
    };

    get inspect() {
        return to_a.sort_by(c => (
            ["squall", "zell", "irvine", "rinoa", "selphie", "quistis"].index(c)
        )).values_at(1, 0, 2).map(c => c.nil ? "__" : Party.char2str(c)).join(",")
    };

    include(x) {
        super.include(Party.x2char(x))
    };

    add(x) {
        super.add(Party.x2char(x))
    };

    delete(x) {
        super.delete(Party.x2char(x))
    }
};

Party.prototype.to_s = Party.prototype.inspect;

// Brodone
// Final party selection
function last_party(rnd) {
    /**
     * 0:squall
     * 1:zell
     * 2:irvine
     * 3:quistis
     * 4:rinoa
     * 5:selphie
     */
    let tbl = [
        [0, 1, 2],
        [0, 1, 4],
        [0, 1, 5],
        [0, 1, 3],
        [0, 2, 4],
        [0, 2, 5],
        [0, 2, 3],
        [0, 4, 5],
        [0, 4, 3],
        [0, 5, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 2, 3],
        [1, 4, 5],
        [1, 4, 3],
        [1, 5, 3],
        [2, 4, 5],
        [2, 4, 3],
        [2, 5, 3],
        [4, 5, 3]
    ];

    let idx = rnd.floor / 13;
    return new Party(tbl[idx])
}

function make_last_party_table(from, to) {
    // Take a good margin
    let margin = 250;
    let size = to + margin;

    // Random number state
    let rng_state_arr = new Field_RNG({ enum_method: "next_state" }).first(size);

    // Random numbers actually used (0..255)
    let source_arr = (new Field_RNG).first(size);

    // Direction of movement of squall
    let direction_arr = source_arr.map(v => ["8", "2", "4", "6"][v & 3]);

    // Party when you go the fastest on the final map
    let party_arr = new Array(size - options.party_rnd_offset, i => (
        last_party(source_arr[i + options.party_rnd_offset])
    ));

    // Array of offset tables to the nearest target
    let target_offset_tbl_arr = ((arr) => {
        let r = [];

        arr.reverse.each_with_index((curr_party, i) => {
            r[i] = i.zero ? {} : Hash[r[i - 1].map((k, v) => [k, v + 1])];
            if (options.targets.include(curr_party)) r[i][curr_party] = 0
        });

        return r.reverse
    })(party_arr);

    // (0..to).map{|idx|
    if (!idx.between(from, to)) return null;

    let r = {
        index: idx,

        // source
        source: source_arr[idx],

        // Random number state
        rng_state: "%08x" % [rng_state_arr[idx]],

        // party
        party: party_arr[idx],

        // movements
        movements: ((arr) => {
            let first = [0, idx - (options.movements_size - 1)].max;
            let last = idx;
            return last
        })(direction_arr),

        // Offset to the target party
        target_offset_tbl: Hash[options.targets.map(target_party => (
            [target_party, target_offset_tbl_arr[idx][target_party]]
        ))]
    };

    r.nearest_target = r.target_offset_tbl.min_by((k, v) => v).first;
    return r;
}
// Match using regular expressions
function last_party_match(pattern, data) {
    let matchp = pattern.test(data.movements);

    matchp.tap(() => {
        if (matchp || options.debug) {
            let rng_state = options.debug ? "%s " % [data.rng_state] : "";

            puts("%s\t[%04d] %s\"%s\" %s" % [
                matchp ? "*match*" : "",
                data.index,
                rng_state,
                data.movements,
                data.target_offset_tbl
            ])
        }
    })
}
// Explore the target party
function search_last_party(pattern) {
    // Search start point
    let start_index = options.base;

    // Search order (array of indexes)
    let order = ([start_index] + (1).upto(options.width / 2).map(offset => (
        [start_index + offset, start_index - offset]
    ))).flatten.select(idx => idx >= 0);

    if (options.width.even) order.delete(order.max);

    switch (options.order) {
        case "reverse":
            order.reverse;
            break;

        case "ascending":
            order.sort;
            break;

        case "descending":
            order.sort.reverse
    };

    // Build as many tables as you need
    let table = make_last_party_table(order.min, order.max);

    // search
    order.map((idx) => {
        let data = table[idx];

        if (last_party_match(pattern, data)) {
            { diff: idx - start_index, index: idx, data }
        }
    }).compact
};

// Use regular expressions
// Brodone
function str2pattern(s) {
    let pat = [...s].map((c) => {
        if (options.input.up.includes(c)) {
            return 8;
        } else if (options.input.down.includes(c)) {
            return 2;
        } else if (options.input.left.includes(c)) {
            return 4;
        } else if (options.input.right.includes(c)) {
            return 6;
        } else {
            return ".";
        }
    }).filter((el) => { return el != null; }).join("") + "$";

    return new RegExp(pat)
};

// Play with options
function modify_options() {
    // If the argument is 2 or more, a hard reset shall be performed.
    if (ARGV.size > 1) {
        ARGV.shift;
        options.hardware_reset = true
    };

    // Random numbers are initialized when a hard reset is performed
    if (options.hardware_reset) options.base = 15;

    // Goal party
    options.targets.map(x => new Party(x)).uniq;
    let rem = options.last_map_duration % 0.5;

    // Time to extend on the final map
    options.last_map_extra = options.last_map_safe_range.cover(rem) ? 0 : rem < options.last_map_safe_range.min ? 0.25 - rem : 0.75 - rem;

    // Offset from the last random number to the random number applied to the final party selection
    options.party_rnd_offset = ((options.last_map_duration + options.last_map_extra) / 0.5).floor + 1
};

// Frame counter
function frame_counter(period = 60, { max = null, fps = 30 } = {}) {
    let start = Time.now.to_f;
    puts("count\tframe");

    let f = () => {
        let duration = Time.now.to_f - start;
        let frame = (duration * 60).floor;
        let count = frame.quo(period).floor;
        let curr_frame = (frame % period).floor;
        print("%d\t%3d/%d\r" % [count, curr_frame, period]);

        // break if count >= max
        if (!max.nil) null
    };

    loop(() => {
        f.call();
        sleep((1).quo(fps))
    })
};

// Movie after adel random number counter
function adel_rnd_counter(max = 45) {
    frame_counter(101, { max, fps: options.console_fps })
};

// Final map random number counter
function last_map_rnd_counter() {
    // Including extension time. Is the accuracy okay?
    print("(wait %.2fs)\r" % [options.last_map_extra]);
    sleep(options.last_map_extra);
    frame_counter(30, { fps: options.console_fps })
};

function main() {

    modify_options();
    let pattern = str2pattern(ARGV.shift);

    // That's what I'm recalculating
    let from = [0, options.base - options.width / 2].max;
    let to = [0, options.base + (options.width.fdiv(2)).ceil - 1].max;
    let width = options.left_width;

    let r = search_last_party(pattern);
    if (r.empty) return;

    // Index closest to the starting point Younger if the absolute values ​​are equal
    let nearest_index = r.min_by(v => [v.diff.abs, v.diff]).index;

    // Make headers for targets
    let offsets_header = r.first.data.target_offset_tbl.keys.map(k => "%10s" % [k]).join("");

    r.each((v) => {
        let [diff, idx, data] = v.values;
        let nearestp = idx == nearest_index;
        let idx_str = (nearestp ? "*[%04d]" : "[%04d]") % [idx];

        let offsets = data.target_offset_tbl.map((k, v) => {
            // p data[:nearest_target]
            let fmt = k == data.nearest_target ? "* %+d *" : "%+d  ";
            r = fmt % [v];
            " " * (10 - r.size) + r
        }).join("");

        puts("%+4d\t%s\t%s" % [diff, idx_str, offsets])
    });

    let extra_s = options.last_map_extra.zero ? "none" : "%.2fs" % [options.last_map_extra];
    puts("%s = %s" % [t("extra_last_map"), extra_s]);

    if (options.adel_rnd_counter) {
        print(t("prompt.adel_rng_counter"));
        STDIN.gets && t = new Thread(() => adel_rnd_counter(26));
        STDIN.gets && t.kill;
        puts("")
    };

    if (options.last_map_rnd_counter) {
        print(t("prompt.last_map_rng_counter"));
        STDIN.gets && t = new Thread(() => last_map_rnd_counter());
        STDIN.gets && t.kill
    }
}

main();