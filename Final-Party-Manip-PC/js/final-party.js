#/**
# * This code was converted from code originally created by pingval for PS
# * then modified by awesomeWaves for FF8 2013 FR on PC.
# */
#
# let textbox = document.getElementById('tilts');
# let hardreset = document.getElementById('reset');
#
#/*****************************/
#/********* CONSTANTS *********/
#/*****************************/
#// Target party. Multiple settings are possible.
#const targets = [
#        ["irvine", "squall", "zell"],
#        ["irvine", "squall", "selphie"],
#        ["irvine", "squall", "rinoa"],
#        ["irvine", "zell", "selphie"],
#        ["irvine", "zell", "rinoa"],
#        ["irvine", "selphie", "rinoa"]
#    ];
#
#// Index used as a search reference
#const base = 2800;
#
#// Search for this width with base as the center
#const width = 2000;
#
#// 検索順 反転:reverse, 降順:ascending, 昇順:descending, 通常:other than that
#const search_order = "reverse";
#
#// Perform a hard reset immediately before (DISC4 start data)
#const hardware_reset = false;
#
#// Use movie random number counter after Adele
#const adel_rnd_counter = true;
#
#// Use the final map random number counter
#const last_map_rnd_counter = true;
#
#// Idling duration when traveling the final map at the fastest speed
#// ps2fast_ja:22.0, ps2fast_na:22.7?, pc-fr-2013:21.5,
#const last_map_duration = 21.5;
#
#// Characters that can be used for input. Numeric keypad / wasd / ijkl can be used by default
#const input = {
#    up: ["8", "w", "i"],
#    down: ["2", "s", "k"],
#    left: ["4", "a", "j"],
#    right: ["6", "d", "l"],
#
#    // Wildcard. If [] is specified, everything except ↑ will be treated as a wildcard.
#    any: []
#};
#
#// Squall movement upper limit
#const movements_size = 12;
#
#// Heading width
#const left_width = 40;
#
#// fps
#const console_fps = 60;
#const debug = false;
#const fallback_language = "en";
#
#
#
#
#
#
#
#// Functions
#function Calculate () {
#    // Convert the input string to a regex pattern.
#    let pattern = str2pattern(textbox.value);
#
#    let r = search_last_party(pattern);
#    if (r.empty) return;
#    
#}
#
#// Converts string to input value
#function str2pattern(s) {
#    let pat = [...s].map((c) => {
#        if (input.up.includes(c)) {
#            return 8;
#        } else if (input.down.includes(c)) {
#            return 2;
#        } else if (input.left.includes(c)) {
#            return 4;
#        } else if (input.right.includes(c)) {
#            return 6;
#        } else {
#            return ".";
#        }
#    }).filter((el) => { return el != null; }).join("") + "$";
#    return new RegExp(pat)
#};
#
#// Explore the target party
#function search_last_party(pattern) {
#    // Search start point
#    let start_index = base;
#
#    // Search order (array of indexes)
#    let order = [];
#    for (i = start_index; i < start_index + (options.width / 2); i++) {
#        result.push([start_index + i, start_index - i])
#    }
#    order.flat().filter(idx => idx >= 0);
#
#    // Why do we do this?
#    if (isEven(width)) {
#        var max = Math.max(...order);
#        return order.filter(e => e != max);
#    }
#
#    switch (search_order) {
#        case "reverse":
#            order.reverse();
#            break;
#
#        case "ascending":
#            order.sort();
#            break;
#
#        case "descending":
#            order.sort().reverse();
#    };
#
#    // TODO: //////////////////////////////////////////////////////////////////////////
#    // Build as many tables as you need
#    let table = make_last_party_table(Math.min(...order), Math.max(...order));
#
#    // search
#    return order.map((idx) => {
#        let data = table[idx];
#
#        if (last_party_match(pattern, data)) {
#            return { 'diff': idx - start_index, 'index': idx, data }
#        }
#    }).filter(n => n);  //.filter(n => n) removes null elements
#};
#
#function isEven(value) {
#	if (value%2 == 0)
#		return true;
#	else
#		return false;
#}
#
#/**
# * Listen for text box changes to determine when to calculate.
# */
# textbox.addEventListener('input', function (e) {
#    // We expect exactly 12 inputs.
#    // Don't waste processing power otherwise.
#    if (textbox.value.length == 12) {
#        Calculate();
#    }
#});
#
#/**
#* Listen for reset checkbox changes
#*/
#hardreset.addEventListener('change', function () {
#   if (this.checked) {
#       options.base = 15;
#     } else {
#       options.base = 2800;
#     }
#});