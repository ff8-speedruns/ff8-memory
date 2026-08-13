# FF8 Memory Map (EN / FR)

Module-relative offsets for `FF8_EN.exe` / `FF8_FR.exe` (Steam 2013). Add the live module base; these are not absolute. Repeated structures are shown once as an array (`count × stride`); struct-relative fields show their derivation (`base+field`, or `[ptr]+field` for a pointer base). Generated from `addresses.toml` by `generate.py` — do not edit by hand.

**Categories:** [Running](#running) · [RNG](#rng) · [General](#general) · [Experimental](#experimental) · [Battle - Ally Slots](#battle---ally-slots) · [Battle - Counters](#battle---counters) · [Battle - Enemy Slots](#battle---enemy-slots) · [Battle - Escape](#battle---escape) · [Battle - GF Rewards](#battle---gf-rewards) · [Battle - Limit Breaks](#battle---limit-breaks) · [Battle - Rewards](#battle---rewards) · [Battle - State](#battle---state) · [Castle Seals](#castle-seals) · [Character - Junctions](#character---junctions) · [Character - Party Struct](#character---party-struct) · [Engine - Game State](#engine---game-state) · [Engine - Module Dispatch](#engine---module-dispatch) · [Field - Draw Points](#field---draw-points) · [Field - Entities](#field---entities) · [GF - Roster](#gf---roster) · [Items](#items) · [Misc - Controller Button Map](#misc---controller-button-map) · [Triple Triad - Rules](#triple-triad---rules) · [Triple Triad - Stats](#triple-triad---stats) · [World Map - Camera](#world-map---camera) · [World Map - Encounters](#world-map---encounters) · [World State](#world-state)

## Running

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Stepcount Offset | `18DC748` | `18DC420` | 1 Byte |  |
| Step Fraction | `18DC740` | `18DC418` | 1 Byte | When step count is active |
| Step ID | `18D2FB8` | `18D2C90` | 1 Byte |  |
| Step ID - Danger Limit | `18D2FB8` | `18D2C90` | 1 Byte | Step ID using danger limit table. |
| Danger Value | `18DC74A` | `18DC422` | 1 Byte | When step count is active |
| Encounter Count | `18DBFEC` | `18DBCC4` | 2 Bytes | Resets to 0 on hard reset. |
| Can Save | `18E490B` | `18E45E3` | 1 Byte | Set to 1 to save anywhere.<br />Save points (on PC) set this to 3. |
| Caraway Code (on map 761) | `18FEC90` | `18FE968` | 1 Byte | Accurate only when on map id 761. |
| Encounter ID | `1996DA8` | `1996A80` | 2 Bytes | For the current/most recent encounter. [RE CONFIRMED] also ENCOUNTER_ID: updates ~50-100ms after encounter transition |
| WM_ENC_METER | `1C40A5C` | — | 2 Bytes | [RE CONFIRMED] corrected (was WM Step Fraction (1 Byte)) -> WM_ENC_METER: fast accumulator +=16 per tick while moving (or 16>>shift for Enc-Half) |
| WM Danger Value | `1C40A5E` | — | 1 Byte |  |
| WM Danger Limit | `1C3FD3C` | — | 1 Byte |  |
| Ifrit Punch Counter | `1927DA4` | `1927A7C` | 1 Byte |  |
| Zell Duel Timer | `1976750` | `1976428` | 2 Bytes | [RE CONFIRMED] also RENZOKUKEN_STATE: state-machine index (4=lead-in, 6=active window); shared with DUEL_TIMER/SHOT structs [RE CONFIRMED] also DUEL_TIMER: Zell Duel per-attempt countdown, resets to 720 (12s); shares RENZOKUKEN_STATE offset |
| Movement Frame | `18E475C` | `18E4434` | 1 Byte |  |

## RNG

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Field RNG | `78EEA0` | `78EDC8` | 4 Bytes | The pseudo RNG values used for many things throughout the game. |
| Card RNG | `18FEFB4` | `18FEC8C` | 4 Bytes | Hex Value |
| RNG 1 | `78EEA0` | — | 1 Byte |  |
| RNG 2 | `78EEA1` | — | 1 Byte |  |
| RNG 2 | `78EEA2` | — | 1 Byte |  |
| RNG 4 | `78EEA3` | — | 1 Byte |  |
| CARD_RNG_GENERATOR | `134AA0` | — | array of bytes | CONFIRMED · function: sole writer of CARD_RNG; 38 call sites in card-game module (static/abs 0x534AA0) |
| FIELD_RNG_GENERATOR_NXT | `12D210` | — | array of bytes | CONFIRMED · function: reads/steps/writes FIELD_RNG (seed*0x41C64E6D+0x3039), returns (seed>>16)&0x7FFF (static/abs 0x52D210) |
| FIELD_RNG_TABLE_VARIANT | `12D1F0` | — | array of bytes | PROBABLY OK · function: table-based variant reading seed byte 18FE73A, table at 78EE94; not fully understood (static/abs 0x52D1F0) |
| FIELD_RNG_VARIANT_SEED | `18FE73A` | `18FE412` | 1 Byte | PROBABLY OK · savemap-region seed/index used by 52D1F0 |
| FIELD_RNG_WORD_TABLE | `78EE94` | — | array of bytes | PROBABLY OK · 12-byte word table just before FIELD_RNG, used by table variant |
| BATTLE_CORE_PRNG | `A7080` | — | array of bytes | CONFIRMED · function: 15-bit LCG (seed=seed*125+14), the real battle random primitive; 71 call sites (static/abs 0x4A7080) |
| GetRandomInt | `8F020` | — | array of bytes | CONFIRMED · function: battle random byte [0,255]; wraps 4A7080 (static/abs 0x48F020) |
| isRandomProbaNumDen255 | `8F0F0` | — | array of bytes | CONFIRMED · function: probability wrapper; does NOT drive escape roll (refuted live) (static/abs 0x48F0F0) |
| isRandomNumeratorDenominator | `8F0C0` | — | array of bytes | CONFIRMED · function: probability wrapper (static/abs 0x48F0C0) |
| CRT_RAND_DEAD | `15CBD2` | — | array of bytes | CONFIRMED · function: textbook MSVC rand() but DEAD CODE (zero callers); srand at 55CBC5 (static/abs 0x55CBD2) |
| DANGER_VALUE_WORLD_MAP | `1C409E0` | — | 1 Byte | CONFIRMED · gating mode/state value; routine exits unless 0-9 or 128 |

## General

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Map ID | `18D2FC0` | `18D2C98` | 2 Bytes | [RE CONFIRMED] also CURRENT_FIELD_ID: field to load next / currently loaded (community Map ID) |
| Story Progress | `18FEAB8` | `18FE790` | 2 Bytes |  |
| Timer | `18FE92C` | `18FE604` | 2 Bytes | In seconds, if there's an active timer [RE PROBABLY OK] also TIMER_SECONDS |
| Current Gil | `18FE764` | `18FE43C` | 4 Bytes |  |
| Current BGM | `18D2394` | `18D206C` | 4 Bytes | [RE PROBABLY OK] also CURRENT_BGM |
| Play Time (IGT) | `18FE928` | `18FE600` | 4 Bytes | In seconds [RE PROBABLY OK] also PLAY_TIME_SECONDS |
| Tonberry Kills | `18FE940` | `18FE618` | 1 Byte | In Centra |
| Total Steps | `18FE9BC` | `18FE694` | 4 Bytes | [RE PROBABLY OK] also TOTAL_STEPS |
| SeeD Payout Step Fraction | `18FE9C0` | `18FE698` | 1 Byte | Increments as you step, resets at 255. [RE PROBABLY OK] also SEED_PAYOUT_STEP_FRACTION |
| SeeD Payout Timer | `18FE9C1` | `18FE699` | 1 Byte | Payout when >= 96<br />+1 when SeeD Payout Step Fraction passes 255. [RE PROBABLY OK] also SEED_PAYOUT_TIMER |
| SeeD Pts | `18FE9C8` | `18FE6A0` | 2 Bytes | every 100 = rank up<br />-10 every payout<br />+10 for every won encounter. [RE PROBABLY OK] also SEED_POINTS |
| Previous Map ID | `18FEA0C` | `18FE6E4` | 2 Bytes | MapId of the prevous screen. [RE PROBABLY OK] also PREVIOUS_MAP_ID |
| Centra Ruins Timer | `18FEB32` | `18FE80A` | 1 Byte | In seconds |
| World map camera direction | `1C3ED02` | — | 2 Bytes | Range: 0 (North) - 4095 [RE CONFIRMED] also WM_CAM_TANGENT_Z_ROTATION: confirmed via static disassembly |
| World map camera tilt | `1C3ED08` | — | 2 Bytes | Something to do with camera tilt in world map. |
| Town/battle scene | `1C3ED2C` | — | 2 Bytes | In Town: 0 on world map<br />1 in local/dungeon maps<br />1 in menu<br />1 in battle. [RE GUESS] also TOWN_BATTLE_SCENE_FLAG: REFUTED as a state-detection signal (world-map exit-transition trigger only) |
| Controller Button Presses (Byte 1) | `1C3ED30` | — | 1 Byte | Experimental |
| Controller Button Presses (Byte 2) | `1C3ED31` | — | 1 Byte | Experimental |
| World Map Coord X | `1C3EE80` | — | 4 Bytes | [RE CONFIRMED] also WORLD_MAP_COORD_X: signed i32 (not f32); Squall world-map position |
| World Map Coord Y | `1C3EE84` | — | 4 Bytes | [RE CONFIRMED] also WORLD_MAP_COORD_Y |
| World Map Coord Z | `1C3EE88` | — | 4 Bytes | [RE CONFIRMED] also WORLD_MAP_COORD_Z |
| Field Coord X | `1677238` | — | 4 Bytes | [RE PROBABLY OK] also FIELD_COORD_X: read-only per-frame mirror of player entity pos; repurposed during battle |
| Field Coord Y | `167723C` | — | 4 Bytes | [RE PROBABLY OK] also FIELD_COORD_Y |
| Field Coord Z | `1677240` | — | 4 Bytes | [RE PROBABLY OK] also FIELD_COORD_Z |
| Train Code Digit 1 | `192B530` | `192B208` | 1 Byte |  |
| Train Code Digit 2 | `192B534` | `192B20C` | 1 Byte |  |
| Train Code Digit 3 | `192B538` | `192B210` | 1 Byte |  |
| Train Code Digit 4 | `192B53C` | `192B214` | 1 Byte |  |
| Locomotion Method (WM) | `1C40A5E` | — | 1 Byte | [RE CONFIRMED] also WM_DANGER_VALUE_LOCOMOTION: slow step accumulator feeding the roll; dual-purpose (vehicle id when in vehicle) |
| Squall's Name | `18FDC70` | `18FD948` | String | Characters are offset |
| Rinoa's Name | `18FDC7C` | `18FD954` | String | Characters are offset |
| Angelo's Name | `18FDC88` | `18FD960` | String | Characters are offset |
| Boko's Name | `18FDC94` | `18FD96C` | String | Characters are offset |
| Current Disc | `18FDCA0` | `18FD978` | String | Characters are offset |
| Griever's Name | `18FE754` | `18FE42C` | String | Characters are offset |
| Countdown Timer Enabled | `192B813` | `192B4EB` | 1 Byte |  |

## Experimental

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| No Encounters (set to 8) | `18FF6D8` | `18FF3B0` | 1 Byte | Enc-Half sets to 4; Enc-None sets to 8 |

## Battle - Ally Slots

### Ally slot — 3× array (stride 0xD0)

Base (EN) `1927B18` · Base (FR) `19277F0`

Elements: Ally 1 `@1927B18`, Ally 2 `@1927BE8`, Ally 3 `@1927CB8`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| Current ATB | `+C` | 2 Bytes |  |
| Max ATB | `+8` | 2 Bytes |  |
| Current HP | `+10` | 2 Bytes |  |
| Max HP | `+14` | 2 Bytes |  |
| Sleep | `+0` | binary (bit 0) |  |
| Haste | `+0` | binary (bit 1) |  |
| Slow | `+0` | binary (bit 2) |  |
| Stop | `+0` | binary (bit 3) |  |
| Regen | `+0` | binary (bit 4) |  |
| Protect | `+0` | binary (bit 5) |  |
| Shell | `+0` | binary (bit 6) |  |
| Reflect | `+0` | binary (bit 7) |  |
| Aura | `+1` | binary (bit 0) |  |
| Curse | `+1` | binary (bit 1) |  |
| Doom | `+1` | binary (bit 2) |  |
| Invincible | `+1` | binary (bit 3) |  |
| Gradual Petrify | `+1` | binary (bit 4) |  |
| Float | `+1` | binary (bit 5) |  |
| Confuse | `+1` | binary (bit 6) |  |
| Eject? | `+2` | binary (bit 0) |  |
| Double | `+2` | binary (bit 1) |  |
| Triple | `+2` | binary (bit 2) |  |
| Defend | `+2` | binary (bit 3) |  |
| Retribution? | `+2` | binary (bit 6) |  |
| Vit 0 | `+3` | binary (bit 0) |  |
| Angel Wing | `+3` | binary (bit 1) |  |
| KO | `+78` | binary (bit 0) |  |
| Poison | `+78` | binary (bit 1) |  |
| Petrify | `+78` | binary (bit 2) |  |
| Darkness | `+78` | binary (bit 3) |  |
| Silence | `+78` | binary (bit 4) |  |
| Berserk | `+78` | binary (bit 5) |  |
| Zombie | `+78` | binary (bit 6) |  |
| Sleep Timer (64425 when not active) | `+4C` | 2 Bytes |  |
| Haste Timer (64425 when not active) | `+4E` | 2 Bytes |  |
| Slow Timer (64425 when not active) | `+50` | 2 Bytes |  |
| Stop Timer (64425 when not active) | `+52` | 2 Bytes |  |
| Regen Timer (64425 when not active) | `+54` | 2 Bytes |  |
| Protect Timer (64425 when not active) | `+56` | 2 Bytes |  |
| Shell Timer (64425 when not active) | `+58` | 2 Bytes |  |
| Reflect Timer (64425 when not active) | `+5A` | 2 Bytes |  |
| Aura Timer (64425 when not active) | `+5C` | 2 Bytes |  |
| Curse Timer (64425 when not active) | `+5E` | 2 Bytes |  |
| Doom Timer (64425 when not active) | `+60` | 2 Bytes |  |
| Hero Timer (64425 when not active) | `+62` | 2 Bytes |  |
| Petrify Timer (64425 when not active) | `+64` | 2 Bytes |  |
| Float Timer (64425 when not active) | `+66` | 2 Bytes |  |
| UNKNOWN 1 Timer (64425 when not active) | `+68` | 2 Bytes |  |
| UNKNOWN 2 Timer (64425 when not active) | `+6A` | 2 Bytes |  |
| Level | `+B4` | 1 Byte |  |
| Battle - Status | `+4` | 1 Byte |  |
| Battle - Strength | `+B5` | 1 Byte |  |
| Battle - Vitality | `+B6` | 1 Byte |  |
| Battle - Magic | `+B7` | 1 Byte |  |
| Battle - Spirit | `+B8` | 1 Byte |  |
| Battle - Speed | `+B9` | 1 Byte |  |
| Battle - Luck | `+BA` | 1 Byte |  |
| Battle - Evasion | `+BB` | 1 Byte |  |
| Battle - Hit% | `+BC` | 1 Byte |  |
| Battle - Crisis Level | `+C2` | 1 Byte |  |
| Battle - Elemental Resistance - Fire | `+3C` | 2 Bytes |  |
| Battle - Elemental Resistance - Ice | `+3E` | 2 Bytes |  |
| Battle - Elemental Resistance - Thunder | `+40` | 2 Bytes |  |
| Battle - Elemental Resistance - Earth | `+42` | 2 Bytes |  |
| Battle - Elemental Resistance - Poison | `+44` | 2 Bytes |  |
| Battle - Elemental Resistance - Wind | `+46` | 2 Bytes |  |
| Battle - Elemental Resistance - Water | `+48` | 2 Bytes |  |
| Battle - Elemental Resistance - Holy | `+4A` | 2 Bytes |  |
| Battle - Last Attacker | `+80` | 1 Byte |  |

## Battle - Counters

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Ultimecia Death Animation | `1927F58` | `1927C30` | 1 Byte | 0 -> 1 when Ultimecia takes final hit [RE PROBABLY OK] also ULTIMECIA_DEATH_ANIMATION |
| Battles Won | `18FE9CC` | `18FE6A4` | 2 Bytes | [RE PROBABLY OK] also BATTLES_WON: live-update behavior for normal win still unverified |
| Battles Escaped | `18FE9D2` | `18FE6AA` | 2 Bytes | [RE GUESS] also BATTLE_COUNTER_18FE9D2: previously mislabeled BATTLES_ESCAPED; REFUTED, unidentified |
| Squall's Kill Count | `18FE9D4` | `18FE6AC` | 2 Bytes | [RE PROBABLY OK] also KILL_COUNT_BASE: stride 2, Squall/Zell/Irvine/Quistis/Rinoa/Selphie |
| Zell's Kill Count | `18FE9D6` | `18FE6AE` | 2 Bytes |  |
| Irvine's Kill Count | `18FE9D8` | `18FE6B0` | 2 Bytes |  |
| Quistis's Kill Count | `18FE9DA` | `18FE6B2` | 2 Bytes |  |
| Rinoa's Kill Count | `18FE9DC` | `18FE6B4` | 2 Bytes |  |
| Selphie's Kill Count | `18FE9DE` | `18FE6B6` | 2 Bytes |  |
| Squall's Death Count | `18FE9E4` | `18FE6BC` | 2 Bytes | [RE PROBABLY OK] also DEATH_COUNT_BASE: stride 2, same character order |
| Zell's Death Count | `18FE9E6` | `18FE6BE` | 2 Bytes |  |
| Irvine's Death Count | `18FE9E8` | `18FE6C0` | 2 Bytes |  |
| Quistis's Death Count | `18FE9EA` | `18FE6C2` | 2 Bytes |  |
| Rinoa's Death Count | `18FE9EC` | `18FE6C4` | 2 Bytes |  |
| Selphie's Death Count | `18FE9EE` | `18FE6C6` | 2 Bytes |  |
| Total Enemies Killed | `18FE9FC` | `18FE6D4` | 4 Bytes | [RE PROBABLY OK] also TOTAL_ENEMIES_KILLED |
| Battle Prize #1 | `18FF5E0` | `18FF2B8` | 1 Byte | [RE CONFIRMED] also PRIZE_0_ITEM_ID: prize 1 item id (qty at +1); BATTLE_PRIZE_BASE, populated during fight |
| Battle Prize #1 Qty | `18FF5E1` | `18FF2B9` | 1 Byte |  |
| Battle Prize #2 | `18FF5E2` | `18FF2BA` | 1 Byte | [RE CONFIRMED] also PRIZE_1_ITEM_ID: prize 2 item id (qty at +1) |
| Battle Prize #2 Qty | `18FF5E3` | `18FF2BB` | 1 Byte |  |
| Battle Prize #3 | `18FF5E4` | `18FF2BC` | 1 Byte | [RE CONFIRMED] also PRIZE_2_ITEM_ID: prize 3 item id (qty at +1) |
| Battle Prize #3 Qty | `18FF5E5` | `18FF2BD` | 1 Byte |  |
| Battle Prize #4 | `18FF5E6` | `18FF2BE` | 1 Byte | [RE CONFIRMED] also PRIZE_3_ITEM_ID: prize 4 item id (qty at +1) |
| Battle Prize #4 Qty | `18FF5E7` | `18FF2BF` | 1 Byte |  |
| Escapes | `18FE93A` | `18FE612` | 2 Bytes | [RE CONFIRMED] also BATTLES_ESCAPED: increments ~0.06s before post-battle pulse; sub-100ms escape-success signal |
| Victories | `18FE934` | `18FE60C` | 2 Bytes | [RE GUESS] also BATTLE_WIN_COUNTER_18FE934: incremented by reason-4 win path; distinct from BATTLES_WON, unreconciled |
| Battle - Current Character | `1976844` | `197651C` | 1 Byte | [RE CONFIRMED] also DISPLAYED_MENU_SLOT_1: party-slot whose menu is displayed; 0xFF sentinel not durable across battles |
| Battle - Next Character | `1976845` | `197651D` | 1 Byte | [RE CONFIRMED] also DISPLAYED_MENU_SLOT_2: redundant copy |

## Battle - Enemy Slots

### Enemy slot — 4× array (stride 0xD0)

Base (EN) `1927D94` · Base (FR) `1927A6C`

Elements: Enemy 1 `@1927D94`, Enemy 2 `@1927E64`, Enemy 3 `@1927F34`, Enemy 4 `@1928004`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| Current ATB | `+0` | 4 Bytes |  |
| Max ATB | `+-4` | 2 Bytes |  |
| Current HP | `+4` | 4 Bytes |  |
| Max HP | `+8` | 4 Bytes |  |
| Level | `+A8` | 1 Byte |  |
| Battle - Status | `+-8` | 1 Byte |  |
| Battle - Strength | `+A9` | 1 Byte |  |
| Battle - Vitality | `+AA` | 1 Byte |  |
| Battle - Magic | `+AB` | 1 Byte |  |
| Battle - Spirit | `+AC` | 1 Byte |  |
| Battle - Speed | `+AD` | 1 Byte |  |
| Battle - Luck | `+AE` | 1 Byte |  |
| Battle - Evasion | `+AF` | 1 Byte |  |
| Battle - Hit% | `+B0` | 1 Byte |  |
| Battle - Crisis Level | `+B6` | 1 Byte |  |
| Battle - Elemental Resistance - Fire | `+30` | 2 Bytes |  |
| Battle - Elemental Resistance - Ice | `+32` | 2 Bytes |  |
| Battle - Elemental Resistance - Thunder | `+34` | 2 Bytes |  |
| Battle - Elemental Resistance - Earth | `+36` | 2 Bytes |  |
| Battle - Elemental Resistance - Poison | `+38` | 2 Bytes |  |
| Battle - Elemental Resistance - Wind | `+3A` | 2 Bytes |  |
| Battle - Elemental Resistance - Water | `+3C` | 2 Bytes |  |
| Battle - Elemental Resistance - Holy | `+3E` | 2 Bytes |  |
| Battle - Last Attacker | `+74` | 1 Byte |  |

### Enemy draw spells — 4× array (stride 0x47)

Base (EN) `1928F18` · Base (FR) `1928BF0` · per-enemy stride 0x47; 4 draw ids at +0/+4/+8/+C. Community DB had Enemy 4 Draw 4 at 1928FFF; strided grid gives 1928FF9 (15/16 draws fit — likely a community typo, verify live).

Elements: Enemy 1 `@1928F18`, Enemy 2 `@1928F5F`, Enemy 3 `@1928FA6`, Enemy 4 `@1928FED`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| Draw 1 Spell ID | `+0` | 1 Byte |  |
| Draw 2 Spell ID | `+4` | 1 Byte |  |
| Draw 3 Spell ID | `+8` | 1 Byte |  |
| Draw 4 Spell ID | `+C` | 1 Byte |  |

## Battle - Escape

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| ESCAPE_CHECK_GATE | `1928DE8` | `1928AC0` | 4 Bytes | CONFIRMED · ==1 gates the per-ally escape-eligibility loop; observed 0->1->2 during hold |
| ESCAPE_TIMER_CANDIDATE_1928DE4 | `1928DE4` | `1928ABC` | 4 Bytes | GUESS · refuted sawtooth timer candidate; 4 bytes from the gate, worth re-checking |
| BATTLES_LOST_CANDIDATE | `18FE938` | `18FE610` | 2 Bytes | GUESS · incremented by reason 1/3 (game-over) handler, not independently confirmed |
| ESCAPE_PER_SLOT_FLEE_FIELD | `1927B18+74` | — | 4 Bytes | CONFIRMED · stride 0xD0 · bit0=attempting-flee, bit14 clear=escape resolves. base = ALLY_BASE |

## Battle - GF Rewards

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| GF AP Earned | `18FF5C0` | `18FF298` | 2 Bytes | [RE CONFIRMED] also GF_AP_EARNED: AP shown on results screen (only meaningful when GFs junctioned) |

### GF XP earned — 16× array (stride 0x2)

Base (EN) `18FF580` · Base (FR) `18FF258`

Elements: Quetzalcoatl `@18FF580`, Shiva `@18FF582`, Ifrit `@18FF584`, Siren `@18FF586`, Brothers `@18FF588`, Diablos `@18FF58A`, Carbuncle `@18FF58C`, Leviathan `@18FF58E`, Pandemona `@18FF590`, Cerberus `@18FF592`, Alexander `@18FF594`, Doomtrain `@18FF596`, Bahamut `@18FF598`, Cactuar `@18FF59A`, Tonberry `@18FF59C`, Eden `@18FF59E`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| XP Earned | `+0` | 2 Bytes |  |

## Battle - Limit Breaks

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| RENZOKUKEN_BAR_INDEX | `1976794` | `197646C` | 2 Bytes | CONFIRMED · bars presented so far (increments on hit or miss) |
| RENZOKUKEN_HIT_COUNT | `19767A7` | `197647F` | 1 Byte | CONFIRMED · bars hit successfully |
| RENZOKUKEN_DIFF | `197679E` | `1976476` | 2 Bytes | CONFIRMED · per-bar timing progress 0->27; press ~15 for a hit |
| RENZOKUKEN_TARGET | `1976752` | `197642A` | 2 Bytes | CONFIRMED · per-bar configured value array, stride 2, indexed by bar index |
| RENZOKUKEN_ELAPSED_TIMER | `1976798` | `1976470` | 2 Bytes | CONFIRMED · monotonic elapsed-timer pair (also 197679A) feeding DIFF |
| RENZOKUKEN_BAR_COOLDOWN | `197679C` | `1976474` | 2 Bytes | PROBABLY OK · short per-bar lockout at window transition |
| DUEL_INPUT_HISTORY | `1976754` | `197642C` | 2 Bytes | CONFIRMED · 8-slot ring of button bitmasks, stride 2 |
| DUEL_INPUT_WRITE_INDEX | `1976768` | `1976440` | 1 Byte | PROBABLY OK · ring-buffer write cursor (&7) |
| DUEL_STATE | `1976769` | `1976441` | 1 Byte | PROBABLY OK · Duel's own state index (0-0xC) |
| DUEL_CANDIDATE_MOVE_IDS | `197676A` | `1976442` | array of bytes | CONFIRMED · per-window reachable technique ids (low 6 bits); drives the automation |
| DUEL_CANDIDATE_SECONDARY | `197676D` | `1976445` | array of bytes | PROBABLY OK · per-candidate secondary byte (&0x40), purpose unknown |
| DUEL_TECHNIQUE_TABLE_RUNTIME | `1CF8718` | — | array of bytes | PROBABLY OK · runtime kernel Duel ability data, 32-byte stride, indexed by candidate id |
| SHOT_RELOAD_TOGGLE_1 | `197675A` | `1976432` | 1 Byte | CONFIRMED · toggles 5<->7 (7=ready); every hit lands on 5->7 |
| SHOT_RELOAD_TOGGLE_2 | `197675C` | `1976434` | 1 Byte | CONFIRMED · anti-phase partner (1<->0) |
| SLOT_SPELL_ID | `19768DC` | `19765B4` | 1 Byte | CONFIRMED · Selphie Slot currently-rolled magic id |
| SLOT_SPELL_COUNT | `19768DD` | `19765B5` | 1 Byte | CONFIRMED · cast count for the rolled spell |
| LIMIT_MENU_ACTIVE_1 | `1976660` | `1976338` | 1 Byte | CONFIRMED · 255=inactive/2=active; generic 'some non-Attack selection flow open', not Limit-specific |
| LIMIT_MENU_ACTIVE_2 | `1976661` | `1976339` | 1 Byte | CONFIRMED · redundant copy |
| LIMIT_MENU_ACTIVE_3 | `1976663` | `197633B` | 1 Byte | CONFIRMED · redundant copy |
| LIMIT_MENU_ACTIVE_4 | `19766DE` | `19763B6` | 1 Byte | CONFIRMED · redundant copy |
| LIMIT_MENU_ACTIVE_NEARTWIN | `19768EB` | `19765C3` | 1 Byte | CONFIRMED · sentinel 254 instead of 255, otherwise identical |
| QUISTIS_BLUE_MAGIC_KNOWN | `18FE76C` | `18FE444` | 2 Bytes | CONFIRMED · bitmask, bit0=Laser Eye..bit15=Shockwave Pulsar (kernel order) |
| ZELL_DUEL_MOVES_KNOWN | `18FE76E` | `18FE446` | 2 Bytes | PROBABLY OK · bitmask bits 0-9 (savemap-derived, not yet used) |
| IRVINE_AMMO_UNLOCKED | `18FE770` | `18FE448` | 1 Byte | PROBABLY OK · bitmask bits 0-7 (item id 101+i) |
| SELPHIE_SLOT_SPECIALS_UNLOCKED | `18FE771` | `18FE449` | 1 Byte | PROBABLY OK · bitmask bits 0-5 |
| SG_ODIN_ANGEL_GILGA_FLAG | `18FE97A` | `18FE652` | 1 Byte | CONFIRMED · bit0x10 clear=Angelo shown, bit0x20 set=Angel Wing unlocked |
| ANGELO_COMPLETED | `18FE772` | `18FE44A` | 1 Byte | CONFIRMED · bits 0-7 Angelo abilities; bits 4-7 select Combine tier vs crisis_level |
| ANGELO_KNOWN | `18FE773` | `18FE44B` | 1 Byte | CONFIRMED · same bit order as ANGELO_COMPLETED |
| SLOT_CRISIS_LEVEL | `1927B10+CA` | — | 1 Byte | CONFIRMED · stride 0xD0 · 0-4 Limit availability (Limit selectable when >0) |

## Battle - Rewards

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| XP_EARNED_TOTAL_BASE | `1678EC8` | — | 4 Bytes | CONFIRMED · Ally 1/2/3 at +0/+4/+8; drives on-screen XP tick-down animation |
| Ally 1 XP Earned | `18FF574` | `18FF24C` | 2 Bytes | [RE CONFIRMED] also XP_EARNED_BASE: Ally 1/2/3 at +0/+2/+4 (u16 each) |
| Ally 1 XP Earned Extra | `18FF57A` | `18FF252` | 2 Bytes | [RE CONFIRMED] also XP_EARNED_EXTRA_BASE: Ally 1/2/3 at +0/+2/+4 |
| Ally 2 XP Earned | `18FF576` | `18FF24E` | 2 Bytes |  |
| Ally 2 XP Earned Extra | `18FF57C` | `18FF254` | 2 Bytes |  |
| Ally 3 XP Earned | `18FF578` | `18FF250` | 2 Bytes |  |
| Ally 3 XP Earned Extra | `18FF57E` | `18FF256` | 2 Bytes |  |

## Battle - State

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| CHOICE_CURSOR_INDEX_TRANSPARENT | `192B44B` | `192B123` | 1 Byte | CONFIRMED · raw 0-based choice index; transparent (monologue) windows only |
| CHOICE_CURSOR_INDEX_PACKED_1 | `18D301A` | `18D2CF2` | 1 Byte | CONFIRMED · (index<<4)\|0x5; generalizes across window types |
| CHOICE_CURSOR_INDEX_PACKED_2 | `18D601A` | `18D5CF2` | 1 Byte | CONFIRMED · redundant copy of PACKED_1 |
| CONTROL_LOCK_FLAG_1 | `18D0B80` | `18D0858` | 1 Byte | CONFIRMED · rising edge = encounter/battle transition; forced-control-seized pulse |
| CONTROL_LOCK_FLAG_2 | `18D0BE0` | `18D08B8` | 1 Byte | CONFIRMED · tight pair with FLAG_1 |
| CONTROL_LOCK_FLAG_3 | `18D0EE0` | `18D0BB8` | 1 Byte | PROBABLY OK |
| CONTROL_LOCK_FLAG_4 | `18D0F40` | `18D0C18` | 1 Byte | PROBABLY OK |
| CONTROL_LOCK_FLAG_5 | `18D0FA0` | `18D0C78` | 1 Byte | PROBABLY OK |
| CONTROL_LOCK_FLAG_6 | `18D1000` | `18D0CD8` | 1 Byte | PROBABLY OK |
| CONTROL_LOCK_FLAG_7 | `18D1420` | `18D10F8` | 1 Byte | PROBABLY OK |
| REASON_BYTE | `18FF6E7` | `18FF3BF` | 1 Byte | CONFIRMED · battle-end reason: 1/3 gameover, 2 escape, 4 victory, 5 other; 0->4 = victory decided |
| ALLY_BASE | `1927B18` | `19277F0` | array of bytes | CONFIRMED · party ally-slot struct base, stride 0xD0 |
| BATTLE_SLOT_DATA_BASE | `1927B10` | `19277E8` | array of bytes | CONFIRMED · unified 11-slot struct (0-2 party, 3-7 enemy, 8-10 GF), base+slot*0xD0 |
| BATTLE_CMD_CURSOR_INDEX | `1976843` | `197651B` | 1 Byte | CONFIRMED · single global command-menu cursor, wraps, not per-character |
| MAGIC_GF_ITEM_CURSOR | `19768EC` | `19765C4` | 1 Byte | CONFIRMED · shared continuous list-cursor for Magic/GF/Item/Quistis/Rinoa lists; 0xFF when Draw open |
| DRAW_SUBMENU_CURSOR_INDEX_1 | `19768D8` | `19765B0` | 1 Byte | CONFIRMED · Draw list index (also Selphie Slot Do-Over/Cast cursor) |
| DRAW_SUBMENU_CURSOR_INDEX_2 | `197698C` | `1976664` | 1 Byte | CONFIRMED · redundant copy of DRAW cursor 1 |
| DRAW_STOCK_CAST_CURSOR_1 | `19768D9` | `19765B1` | 1 Byte | CONFIRMED · 0=Stock, 1=Cast |
| DRAW_STOCK_CAST_CURSOR_2 | `19769ED` | `19766C5` | 1 Byte | CONFIRMED · redundant copy |
| TARGET_SELECT_BITMASK | `1976884` | `197655C` | 4 Bytes | CONFIRMED · one-hot target = BATTLE_SLOT_DATA slot index; works list-mode AND free-form 3D |
| TARGET_PANEL_FOCUS | `1679071` | — | 1 Byte | CONFIRMED · 0=ally panel focused, 1=enemy panel focused |
| TARGET_LIST_CURSOR_LINEAR | `167907A` | — | 1 Byte | CONFIRMED · list-mode linear cursor (step 13, base per list length); list-render only |
| TARGET_LIST_CURSOR_LINEAR_2 | `1679082` | — | 1 Byte | CONFIRMED · redundant copy of 167907A |
| TARGET_LIST_CURSOR_ENEMY | `1976860` | `1976538` | 1 Byte | PROBABLY OK · clean for enemy list only (step 32); unreliable on ally list |
| LIVE_ITEM_QTY_BASE | `1928E79` | `1928B51` | 1 Byte | CONFIRMED · battle-live qty: addr = 1928E79 + ITEM_BATTLE_ORDER[item_id-1]*5 |
| SLOT_MONSTER_INFO_SECTION | `1927B10+0` | — | 4 Bytes | CONFIRMED · stride 0xD0 · enemy only; double-deref for 24-byte name string. slots 0-2 party, 3-7 enemy, 8-10 GF |
| SLOT_STATUS | `1927B10+C` | — | 2 Bytes | PROBABLY OK · stride 0xD0 |
| SLOT_MAX_ATB | `1927B10+10` | — | 4 Bytes | PROBABLY OK · stride 0xD0 |
| SLOT_CURRENT_ATB | `1927B10+14` | — | 4 Bytes | PROBABLY OK · stride 0xD0 |
| SLOT_CURRENT_HP | `1927B10+18` | — | 4 Bytes | CONFIRMED · stride 0xD0 |
| SLOT_MAX_HP | `1927B10+1C` | — | 4 Bytes | CONFIRMED · stride 0xD0 |
| SLOT_FLAG_DATA | `1927B10+7C` | — | 2 Bytes | CONFIRMED · stride 0xD0 · bit 0x0008 = slot ready/awaiting command |
| SLOT_COM_FILE_ID | `1927B10+BB` | — | 1 Byte | CONFIRMED · stride 0xD0 · character ordinal (Squall=0..Ward=10); 0xFF=empty |
| SLOT_LEVEL | `1927B10+BC` | — | 1 Byte | CONFIRMED · stride 0xD0 |
| Current GF Boost (0-255) | `1C9CEF0` | — | 1 Byte |  |

## Castle Seals

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Item Locked (Map) | `18FE73F` | `18FE417` | binary (bit 0) |  |
| Magic Locked (Map) | `18FE73F` | `18FE417` | binary (bit 1) |  |
| GF Locked (Map) | `18FE73F` | `18FE417` | binary (bit 2) |  |
| Draw Locked (Map) | `18FE73F` | `18FE417` | binary (bit 3) |  |
| Command Ability Locked (Map) | `18FE73F` | `18FE417` | binary (bit 4) |  |
| Limit Break Locked (Map) | `18FE73F` | `18FE417` | binary (bit 5) |  |
| Resurrection Locked (Map) | `18FE73F` | `18FE417` | binary (bit 6) |  |
| Save Locked (Map) | `18FE73F` | `18FE417` | binary (bit 7) |  |
| Item Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 0) |  |
| Magic Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 1) |  |
| GF Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 2) |  |
| Draw Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 3) |  |
| Command Ability Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 4) |  |
| Limit Break Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 5) |  |
| Resurrection Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 6) |  |
| Save Locked (Battle) | `18FF6E8` | `18FE7DE` | binary (bit 7) |  |
| Item Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 0) | Used in Post-Battle Unlock List |
| Magic Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 1) | Used in Post-Battle Unlock List |
| GF Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 2) | Used in Post-Battle Unlock List |
| Draw Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 3) | Used in Post-Battle Unlock List |
| Command Ability Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 4) | Used in Post-Battle Unlock List |
| Limit Break Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 5) | Used in Post-Battle Unlock List |
| Resurrection Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 6) | Used in Post-Battle Unlock List |
| Save Locked (Unlocked) | `18FEB06` | `18FF3C0` | binary (bit 7) | Used in Post-Battle Unlock List |

## Character - Junctions

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Squall Junction St. Def. 3 | `18FE155` | `18FDE2D` | 1 Byte |  |
| Squall Junction St. Def. 4 | `18FE156` | `18FDE2E` | 1 Byte |  |
| Zell Junction St. Def. 3 | `18FE1EE` | `18FDEC6` | 1 Byte |  |
| Zell Junction St. Def. 4 | `18FE1EF` | `18FDEC7` | 1 Byte |  |
| Irvine Junction St. Def. 3 | `18FE285` | `18FDF5D` | 1 Byte |  |
| Irvine Junction St. Def. 4 | `18FE286` | `18FDF5E` | 1 Byte |  |
| Quistis Junction St. Def. 3 | `18FE31D` | `18FDFF5` | 1 Byte |  |
| Quistis Junction St. Def. 4 | `18FE31E` | `18FDFF6` | 1 Byte |  |
| Rinoa Junction St. Def. 3 | `18FE3B5` | `18FE08D` | 1 Byte |  |
| Rinoa Junction St. Def. 4 | `18FE3B6` | `18FE08E` | 1 Byte |  |
| Selphie Junction St. Def. 3 | `18FE44D` | `18FE125` | 1 Byte |  |
| Selphie Junction St. Def. 4 | `18FE44E` | `18FE126` | 1 Byte |  |
| Seifer Junction St. Def. 3 | `18FE4E5` | `18FE1BD` | 1 Byte |  |
| Seifer Junction St. Def. 4 | `18FE4E6` | `18FE1BE` | 1 Byte |  |
| Edea Junction St. Def. 3 | `18FE57D` | `18FE255` | 1 Byte |  |
| Edea Junction St. Def. 4 | `18FE57E` | `18FE256` | 1 Byte |  |

## Character - Party Struct

### Character — 8× array (stride 0x98)

Base (EN) `18FE0E8` · Base (FR) `18FDDC0` · party roster struct; savemap order Squall..Edea. Includes the 32 magic slots (+0x10).

Elements: Squall `@18FE0E8`, Zell `@18FE180`, Irvine `@18FE218`, Quistis `@18FE2B0`, Rinoa `@18FE348`, Selphie `@18FE3E0`, Seifer `@18FE478`, Edea `@18FE510`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| HP | `+0` | 2 Bytes |  |
| HP Modifier | `+2` | 2 Bytes |  |
| EXP Earned (Affects Level) | `+4` | 4 Bytes |  |
| STR Modifier | `+A` | 1 Byte |  |
| VIT Modifier | `+B` | 1 Byte |  |
| MAG Modifier | `+C` | 1 Byte |  |
| SPR Modifier | `+D` | 1 Byte |  |
| SPD Modifier | `+E` | 1 Byte |  |
| LCK Modifier | `+F` | 1 Byte |  |
| Magic Slot 1 Spell ID | `+10` | 1 Byte |  |
| Magic Slot 1 Quantity | `+11` | 1 Byte |  |
| Magic Slot 2 Spell ID | `+12` | 1 Byte |  |
| Magic Slot 2 Quantity | `+13` | 1 Byte |  |
| Magic Slot 3 Spell ID | `+14` | 1 Byte |  |
| Magic Slot 3 Quantity | `+15` | 1 Byte |  |
| Magic Slot 4 Spell ID | `+16` | 1 Byte |  |
| Magic Slot 4 Quantity | `+17` | 1 Byte |  |
| Magic Slot 5 Spell ID | `+18` | 1 Byte |  |
| Magic Slot 5 Quantity | `+19` | 1 Byte |  |
| Magic Slot 6 Spell ID | `+1A` | 1 Byte |  |
| Magic Slot 6 Quantity | `+1B` | 1 Byte |  |
| Magic Slot 7 Spell ID | `+1C` | 1 Byte |  |
| Magic Slot 7 Quantity | `+1D` | 1 Byte |  |
| Magic Slot 8 Spell ID | `+1E` | 1 Byte |  |
| Magic Slot 8 Quantity | `+1F` | 1 Byte |  |
| Magic Slot 9 Spell ID | `+20` | 1 Byte |  |
| Magic Slot 9 Quantity | `+21` | 1 Byte |  |
| Magic Slot 10 Spell ID | `+22` | 1 Byte |  |
| Magic Slot 10 Quantity | `+23` | 1 Byte |  |
| Magic Slot 11 Spell ID | `+24` | 1 Byte |  |
| Magic Slot 11 Quantity | `+25` | 1 Byte |  |
| Magic Slot 12 Spell ID | `+26` | 1 Byte |  |
| Magic Slot 12 Quantity | `+27` | 1 Byte |  |
| Magic Slot 13 Spell ID | `+28` | 1 Byte |  |
| Magic Slot 13 Quantity | `+29` | 1 Byte |  |
| Magic Slot 14 Spell ID | `+2A` | 1 Byte |  |
| Magic Slot 14 Quantity | `+2B` | 1 Byte |  |
| Magic Slot 15 Spell ID | `+2C` | 1 Byte |  |
| Magic Slot 15 Quantity | `+2D` | 1 Byte |  |
| Magic Slot 16 Spell ID | `+2E` | 1 Byte |  |
| Magic Slot 16 Quantity | `+2F` | 1 Byte |  |
| Magic Slot 17 Spell ID | `+30` | 1 Byte |  |
| Magic Slot 17 Quantity | `+31` | 1 Byte |  |
| Magic Slot 18 Spell ID | `+32` | 1 Byte |  |
| Magic Slot 18 Quantity | `+33` | 1 Byte |  |
| Magic Slot 19 Spell ID | `+34` | 1 Byte |  |
| Magic Slot 19 Quantity | `+35` | 1 Byte |  |
| Magic Slot 20 Spell ID | `+36` | 1 Byte |  |
| Magic Slot 20 Quantity | `+37` | 1 Byte |  |
| Magic Slot 21 Spell ID | `+38` | 1 Byte |  |
| Magic Slot 21 Quantity | `+39` | 1 Byte |  |
| Magic Slot 22 Spell ID | `+3A` | 1 Byte |  |
| Magic Slot 22 Quantity | `+3B` | 1 Byte |  |
| Magic Slot 23 Spell ID | `+3C` | 1 Byte |  |
| Magic Slot 23 Quantity | `+3D` | 1 Byte |  |
| Magic Slot 24 Spell ID | `+3E` | 1 Byte |  |
| Magic Slot 24 Quantity | `+3F` | 1 Byte |  |
| Magic Slot 25 Spell ID | `+40` | 1 Byte |  |
| Magic Slot 25 Quantity | `+41` | 1 Byte |  |
| Magic Slot 26 Spell ID | `+42` | 1 Byte |  |
| Magic Slot 26 Quantity | `+43` | 1 Byte |  |
| Magic Slot 27 Spell ID | `+44` | 1 Byte |  |
| Magic Slot 27 Quantity | `+45` | 1 Byte |  |
| Magic Slot 28 Spell ID | `+46` | 1 Byte |  |
| Magic Slot 28 Quantity | `+47` | 1 Byte |  |
| Magic Slot 29 Spell ID | `+48` | 1 Byte |  |
| Magic Slot 29 Quantity | `+49` | 1 Byte |  |
| Magic Slot 30 Spell ID | `+4A` | 1 Byte |  |
| Magic Slot 30 Quantity | `+4B` | 1 Byte |  |
| Magic Slot 31 Spell ID | `+4C` | 1 Byte |  |
| Magic Slot 31 Quantity | `+4D` | 1 Byte |  |
| Magic Slot 32 Spell ID | `+4E` | 1 Byte |  |
| Magic Slot 32 Quantity | `+4F` | 1 Byte |  |
| Equipped Command 1 | `+50` | 1 Byte |  |
| Equipped Command 2 | `+51` | 1 Byte |  |
| Equipped Command 3 | `+52` | 1 Byte |  |
| Equipped Command 4 | `+53` | 1 Byte |  |
| Equipped Skill 1 | `+54` | 1 Byte |  |
| Equipped Skill 2 | `+55` | 1 Byte |  |
| Equipped Skill 3 | `+56` | 1 Byte |  |
| HP Junction Spell | `+5C` | 1 Byte |  |
| STR Junction Spell | `+5D` | 1 Byte |  |
| VIT Junction Spell | `+5E` | 1 Byte |  |
| MAG Junction Spell | `+5F` | 1 Byte |  |
| SPR Junction Spell | `+60` | 1 Byte |  |
| SPD Junction Spell | `+61` | 1 Byte |  |
| EVA Junction Spell | `+62` | 1 Byte |  |
| HIT Junction Spell | `+63` | 1 Byte |  |
| LCK Junction Spell | `+64` | 1 Byte |  |
| Junction Elm. Atk. | `+65` | 1 Byte |  |
| Junction St. Atk. | `+66` | 1 Byte |  |
| Junction Elm. Def. 1 | `+67` | 1 Byte |  |
| Junction Elm. Def. 2 | `+68` | 1 Byte |  |
| Junction St. Def. 1 | `+6B` | 1 Byte |  |
| Junction St. Def. 2 | `+6C` | 1 Byte |  |
| Quezacotl Compatibility | `+70` | 2 Bytes |  |
| Shiva Compatibility | `+72` | 2 Bytes |  |
| Ifrit Compatibility | `+74` | 2 Bytes |  |
| Siren Compatibility | `+76` | 2 Bytes |  |
| Brothers Compatibility | `+78` | 2 Bytes |  |
| Diablos Compatibility | `+7A` | 2 Bytes |  |
| Carbuncle Compatibility | `+7C` | 2 Bytes |  |
| Leviathan Compatibility | `+7E` | 2 Bytes |  |
| Pandemona Compatibility | `+80` | 2 Bytes |  |
| Cerberus Compatibility | `+82` | 2 Bytes |  |
| Alexander Compatibility | `+84` | 2 Bytes |  |
| Doomtrain Compatibility | `+86` | 2 Bytes |  |
| Bahamut Compatibility | `+88` | 2 Bytes |  |
| Cactuar Compatibility | `+8A` | 2 Bytes |  |
| Tonberry Compatibility | `+8C` | 2 Bytes |  |
| Eden Compatibility | `+8E` | 2 Bytes |  |
| Kill Counter | `+90` | 2 Bytes |  |
| KO Counter | `+92` | 2 Bytes |  |

## Engine - Game State

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| In Menu (or Rename Screen) | `1976358` | `1976030` | 1 Byte | [RE PROBABLY OK] also IN_MENU_OR_RENAME: 0/1 bool, pause menu/rename |
| In Post-Battle Screen | `1678CA4` | — | 1 Byte | [RE CONFIRMED] also IN_POST_BATTLE_SCREEN: spans entire variable-length results sequence; can momentarily drop 0 between stages |
| In FMV | `1C9A7A0` | — | 1 Byte | [RE PROBABLY OK] also IN_FMV |
| Menu Choice | `192B35B` | `192B033` | 1 Byte | A bit inconsistent. Sometimes starts at 0, sometimes starts at nonzero. Maybe it's based on the actual line number of the option. [RE GUESS] also MENU_CHOICE: per-conversation config in transparent windows; tracks cursor in solid windows |
| Train Code Accepting Input? | `192A354` | `192A02C` | 1 Byte | [RE PROBABLY OK] also TRAIN_CODE_ACCEPTING_INPUT |

## Engine - Module Dispatch

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| CURRENT_FIELD_NAME | `18D2DB0` | `18D2A88` | String | CONFIRMED · cstr from maplist |
| ENGINE_STATE | `18E0758` | `18E0430` | 4 Bytes | CONFIRMED · 0=field (idle on ordinary field) |
| mode_StateGlobal | `18D8FC6` | `18D8C9E` | 2 Bytes | CONFIRMED · module dispatch 1-11; battle repurposes as internal sub-state (3=in-battle,8=card/debug) |
| globalFieldNextModuleID | `18E4760` | `18E4438` | 2 Bytes | CONFIRMED · same-module quick-jump request (low byte=1 drives field change) |
| MenuState_opcode_menu_id | `18E4762` | `18E443A` | 2 Bytes | CONFIRMED · destination field ID for a field jump |
| wm2field_FieldX | `18E4764` | `18E443C` | 2 Bytes | CONFIRMED · spawn X; 0x7FFF = keep current position |
| wm2field_FieldY | `18E4766` | `18E443E` | 2 Bytes | CONFIRMED · spawn Y |
| wm2field_EXTRA | `18E4768` | `18E4440` | 2 Bytes | CONFIRMED · likely walkmesh triangle index (wiki guessed facing angle) |
| BOOL_LAUNCH_NEW_GAME | `18D2EC8` | `18D2BA0` | 1 Byte | PROBABLY OK · set from title menu result |
| CAL_DISPATCH_TABLE | `78DE4C` | — | array of bytes | CONFIRMED · 18 u32 fn pointers for field-script CAL sub-ops |
| FIELD_SCRIPT_OPCODE_TABLE | `78DE94` | — | array of bytes | CONFIRMED · 376 opcode handler entries |
| GAME_OBJECT_PTR_SLOT | `1679D88` | — | 4 Bytes | CONFIRMED · deref to get live game-object ptr; then +0xB40 = active module main_loop |
| MODULE_MAINLOOP_INTRO | `12DA20` | — | array of bytes | CONFIRMED · value seen in ACTIVE_MODULE_MAIN_LOOP during logo/intro |
| MODULE_MAINLOOP_TITLE | `A24B0` | — | array of bytes | CONFIRMED · title menu module (controls-confirm prompt AND New Game/Continue) |
| MODULE_MAINLOOP_FIELD | `6FEE0` | — | array of bytes | PROBABLY OK |
| MODULE_MAINLOOP_WORLDMAP | `13F0F0` | — | array of bytes | PROBABLY OK |
| MODULE_MAINLOOP_BATTLE | `159890` | — | array of bytes | PROBABLY OK · battle transition + battle |
| MODULE_MAINLOOP_CARDGAME | `7CF60` | — | array of bytes | PROBABLY OK |
| MODULE_MAINLOOP_MENU | `A22C0` | — | array of bytes | PROBABLY OK |
| MODULE_MAINLOOP_HANDLER | `706B0` | — | array of bytes | PROBABLY OK · FFModuleHandler_main_loop dispatcher |
| MODULE_MAINLOOP_CDCHECK | `12DCF0` | — | array of bytes | PROBABLY OK |
| TITLE_SCREEN_STATE | `1976C87` | `197695F` | 1 Byte | CONFIRMED · 0=intro, 1=controls-confirm prompt, 16=title interactive |
| menu_module_substate | `18D2EF0` | `18D2BC8` | 4 Bytes | GUESS · REFUTED for title-screen sub-state (reads 0 during confirm prompt) |
| TITLE_ACTION_ID_BYTE | `1976C50` | `1976928` | 2 Bytes | CONFIRMED · controls-confirm prompt action id (+0x10 in its struct); set to 6 on real keypress |
| FFIntroVideo_FSM_COUNTER | `1DC296C` | — | 4 Bytes | PROBABLY OK · intro video internal FSM counter, jump table at 52F924 |
| ACTIVE_MODULE_MAIN_LOOP | `[1679D88]+B40` | — | 4 Bytes | CONFIRMED · fn ptr of module running this frame (intro/title incl.). base is a pointer (game object) |
| ACTIVE_MODULE_ENTER_MAIN | `[1679D88]+B38` | — | 4 Bytes | CONFIRMED · called once on module install |
| ACTIVE_MODULE_EXIT_MAIN | `[1679D88]+B3C` | — | 4 Bytes | CONFIRMED · called once on teardown |
| MODULE_SWITCH_PENDING_FLAG | `[1679D88]+A64` | — | 4 Bytes | CONFIRMED · set by FFSwitchModule, cleared after swap |

## Field - Draw Points

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Cure (21) / B-Garden - Front Gate (65) | `18FEA2C` | `18FE704` | binary (bit 0) |  |
| Blizzard (4) / B-Garden - Training Center (78) | `18FEA2C` | `18FE704` | binary (bit 2) |  |
| Full-life (25) / B-Garden - MD Level (68) | `18FEA2C` | `18FE704` | binary (bit 4) |  |
| Esuna (27) / B-Garden - Library (64) | `18FEA2C` | `18FE704` | binary (bit 6) |  |
| Demi (13) / B-Garden - Cafeteria (67) | `18FEA2D` | `18FE705` | binary (bit 0) |  |
| Bio (12) / B-Garden - Master Room (81) | `18FEA2D` | `18FE705` | binary (bit 2) |  |
| Thunder (7) / Balamb - Town Square (85) | `18FEA2D` | `18FE705` | binary (bit 4) |  |
| Cure (21) / Balamb Harbor (87) | `18FEA2D` | `18FE705` | binary (bit 6) |  |
| Fire (1) / Fire Cavern (92) | `18FEA2E` | `18FE706` | binary (bit 0) |  |
| Silence (41) / Dollet - Town Square (93) | `18FEA2E` | `18FE706` | binary (bit 2) |  |
| Blind (38) / Dollet - Comm Tower (99) | `18FEA2E` | `18FE706` | binary (bit 4) |  |
| Scan (50) / Timber - City Square (101) | `18FEA2E` | `18FE706` | binary (bit 6) |  |
| Cure (21) / Timber - City Square (101) | `18FEA2F` | `18FE707` | binary (bit 0) |  |
| Blizzaga (6) / Timber - Editorial Department (109) | `18FEA2F` | `18FE707` | binary (bit 2) |  |
| Haste (35) / G-Garden - Hall (113) | `18FEA2F` | `18FE707` | binary (bit 4) |  |
| Life (24) / G-Garden - Clubroom (117) | `18FEA2F` | `18FE707` | binary (bit 6) |  |
| Shell (30) / G-Garden - Athletic Track (122) | `18FEA30` | `18FE708` | binary (bit 0) |  |
| Protect (29) / G-Garden - Gymnasium (125) | `18FEA30` | `18FE708` | binary (bit 2) |  |
| Double (33) / G-Garden - Auditorium (121) | `18FEA30` | `18FE708` | binary (bit 4) |  |
| Aura (32) / G-Garden - Back Entrance (124) | `18FEA30` | `18FE708` | binary (bit 6) |  |
| Cure (21) / Timber Forest (110) | `18FEA31` | `18FE709` | binary (bit 0) |  |
| Water (10) / Timber Forest (110) | `18FEA31` | `18FE709` | binary (bit 2) |  |
| Thundara (8) / Deling City - City Square (129) | `18FEA31` | `18FE709` | binary (bit 4) |  |
| Zombie (48) / Deling City - Sewer (134) | `18FEA31` | `18FE709` | binary (bit 6) |  |
| Esuna (27) / Deling City - Sewer (134) | `18FEA32` | `18FE70A` | binary (bit 0) |  |
| Bio (12) / Deling City - Sewer (134) | `18FEA32` | `18FE70A` | binary (bit 2) |  |
| Fira (2) / ??? (-1) | `18FEA32` | `18FE70A` | binary (bit 4) |  |
| Berserk (46) / Galbadia D -District Prison (135) | `18FEA32` | `18FE70A` | binary (bit 6) |  |
| Thundaga (9) / Galbadia D -District Prison (135) | `18FEA33` | `18FE70B` | binary (bit 0) |  |
| Aero (11) / Desert (136) | `18FEA33` | `18FE70B` | binary (bit 2) |  |
| Blizzara (5) / Galbadia Missile Base (137) | `18FEA33` | `18FE70B` | binary (bit 4) |  |
| Blind (38) / Galbadia Missile Base (137) | `18FEA33` | `18FE70B` | binary (bit 6) |  |
| Full-life (25) / Galbadia Missile Base (137) | `18FEA34` | `18FE70C` | binary (bit 0) |  |
| Drain (44) / Winhill Village (138) | `18FEA34` | `18FE70C` | binary (bit 2) |  |
| Dispel (28) / Winhill Village (138) | `18FEA34` | `18FE70C` | binary (bit 4) |  |
| Curaga (23) / Winhill - Vacant House (140) | `18FEA34` | `18FE70C` | binary (bit 6) |  |
| Reflect (31) / Winhill Village (138) | `18FEA35` | `18FE70D` | binary (bit 0) |  |
| Protect (29) / Tomb of the Unknown King (145) | `18FEA35` | `18FE70D` | binary (bit 2) |  |
| Float (47) / Tomb of the Unknown King (145) | `18FEA35` | `18FE70D` | binary (bit 4) |  |
| Cura (22) / Tomb of the Unknown King (145) | `18FEA35` | `18FE70D` | binary (bit 6) |  |
| Haste (35) / FH - Station Yard (154) | `18FEA36` | `18FE70E` | binary (bit 0) |  |
| Shell (30) / FH - Residential Area (147) | `18FEA36` | `18FE70E` | binary (bit 2) |  |
| Regen (26) / Fishermans Horizon (146) | `18FEA36` | `18FE70E` | binary (bit 4) |  |
| Full-life (25) / FH - Factory (150) | `18FEA36` | `18FE70E` | binary (bit 6) |  |
| Ultima (19) / FH - Mayor's Residence (149) | `18FEA37` | `18FE70F` | binary (bit 0) |  |
| Thundaga (9) / FH - Great Salt Lake (157) | `18FEA37` | `18FE70F` | binary (bit 2) |  |
| Meteor (16) / FH - Great Salt Lake (157) | `18FEA37` | `18FE70F` | binary (bit 4) |  |
| Curaga (23) / Esthar - City (159) | `18FEA37` | `18FE70F` | binary (bit 6) |  |
| Blizzard (4) / Esthar - City (159) | `18FEA38` | `18FE710` | binary (bit 0) |  |
| Quake (17) / Esthar - Odine's Laboratory (160) | `18FEA38` | `18FE710` | binary (bit 2) |  |
| Tornado (18) / Esthar - City (159) | `18FEA38` | `18FE710` | binary (bit 4) |  |
| Double (33) / Dr. Odine's Laboratory - Lobby (167) | `18FEA38` | `18FE710` | binary (bit 6) |  |
| Pain (45) / ??? (-1) | `18FEA39` | `18FE711` | binary (bit 0) |  |
| Flare (15) / Dr. Odine's Laboratory - Lobby (167) | `18FEA39` | `18FE711` | binary (bit 2) |  |
| Stop (37) / Esthar Sorceress Memorial (173) | `18FEA39` | `18FE711` | binary (bit 4) |  |
| Stop (37) / ??? (-1) | `18FEA39` | `18FE711` | binary (bit 6) |  |
| Life (24) / Tears' Point (177) | `18FEA3A` | `18FE712` | binary (bit 0) |  |
| Reflect (31) / Tears' Point (177) | `18FEA3A` | `18FE712` | binary (bit 2) |  |
| Death (43) / Lunatic Pandora Laboratory (178) | `18FEA3A` | `18FE712` | binary (bit 4) |  |
| Holy (14) / Centra - Excavation Site (182) | `18FEA3A` | `18FE712` | binary (bit 6) |  |
| Silence (41) / Centra - Excavation Site (182) | `18FEA3B` | `18FE713` | binary (bit 0) |  |
| Ultima (19) / Centra - Excavation Site (182) | `18FEA3B` | `18FE713` | binary (bit 2) |  |
| Confuse (39) / Centra - Excavation Site (182) | `18FEA3B` | `18FE713` | binary (bit 4) |  |
| Break (42) / Lunatic Pandora (181) | `18FEA3B` | `18FE713` | binary (bit 6) |  |
| Meteor (16) / Lunatic Pandora (181) | `18FEA3C` | `18FE714` | binary (bit 0) |  |
| Curaga (23) / Lunatic Pandora (181) | `18FEA3C` | `18FE714` | binary (bit 2) |  |
| Slow (36) / ??? (-1) | `18FEA3C` | `18FE714` | binary (bit 4) |  |
| Curaga (23) / Edea's House - Bedroom (185) | `18FEA3C` | `18FE714` | binary (bit 6) |  |
| Flare (15) / ??? (-1) | `18FEA3D` | `18FE715` | binary (bit 0) |  |
| Holy (14) / ??? (-1) | `18FEA3D` | `18FE715` | binary (bit 2) |  |
| Sleep (40) / Centra - Excavation Site (182) | `18FEA3D` | `18FE715` | binary (bit 4) |  |
| Confuse (39) / Centra - Excavation Site (182) | `18FEA3D` | `18FE715` | binary (bit 6) |  |
| Aero (11) / Centra Ruins (189) | `18FEA3E` | `18FE716` | binary (bit 0) |  |
| Drain (44) / Centra Ruins (189) | `18FEA3E` | `18FE716` | binary (bit 2) |  |
| Pain (45) / Centra Ruins (189) | `18FEA3E` | `18FE716` | binary (bit 4) |  |
| Thundaga (9) / Trabia Garden - Front Gate (190) | `18FEA3E` | `18FE716` | binary (bit 6) |  |
| Zombie (48) / T-Garden - Cemetery (191) | `18FEA3F` | `18FE717` | binary (bit 0) |  |
| Aura (32) / T-Garden - Festival Stage (193) | `18FEA3F` | `18FE717` | binary (bit 2) |  |
| Ultima (19) / Shumi Village - Desert Village (197) | `18FEA3F` | `18FE717` | binary (bit 4) |  |
| Blizzaga (6) / Shumi Village - Village (199) | `18FEA3F` | `18FE717` | binary (bit 6) |  |
| Firaga (3) / Shumi Village - Residence (201) | `18FEA40` | `18FE718` | binary (bit 0) |  |
| Tornado (18) / ??? (-1) | `18FEA40` | `18FE718` | binary (bit 2) |  |
| Holy (14) / White SeeD Ship - Cabin (207) | `18FEA40` | `18FE718` | binary (bit 4) |  |
| Cura (22) / Ragnarok - Aisle (210) | `18FEA40` | `18FE718` | binary (bit 6) |  |
| Life (24) / Ragnarok - Aisle (210) | `18FEA41` | `18FE719` | binary (bit 0) |  |
| Full-life (25) / Ragnarok - Hangar (211) | `18FEA41` | `18FE719` | binary (bit 2) |  |
| Dispel (28) / Deep Sea Research Center - Levels (217) | `18FEA41` | `18FE719` | binary (bit 4) |  |
| Esuna (27) / Deep Sea Research Center - Levels (217) | `18FEA41` | `18FE719` | binary (bit 6) |  |
| Triple (34) / Deep Sea Deposit (218) | `18FEA42` | `18FE71A` | binary (bit 0) |  |
| Ultima (19) / Deep Sea Deposit (218) | `18FEA42` | `18FE71A` | binary (bit 2) |  |
| Meltdown (49) / Lunar Base - Pod (221) | `18FEA42` | `18FE71A` | binary (bit 4) |  |
| Meteor (16) / Lunar Base - Residential Zone (225) | `18FEA42` | `18FE71A` | binary (bit 6) |  |
| Haste (35) / ??? (-1) | `18FEA43` | `18FE71B` | binary (bit 0) |  |
| Slow (36) / ??? (-1) | `18FEA43` | `18FE71B` | binary (bit 2) |  |
| Curaga (23) / ??? (-1) | `18FEA43` | `18FE71B` | binary (bit 4) |  |
| Life (24) / ??? (-1) | `18FEA43` | `18FE71B` | binary (bit 6) |  |
| Stop (37) / ??? (-1) | `18FEA44` | `18FE71C` | binary (bit 0) |  |
| Regen (26) / ??? (-1) | `18FEA44` | `18FE71C` | binary (bit 2) |  |
| Double (33) / ??? (-1) | `18FEA44` | `18FE71C` | binary (bit 4) |  |
| Triple (34) / Wilderness (228) | `18FEA44` | `18FE71C` | binary (bit 6) |  |
| Flare (15) / Ultimecia Castle (248) | `18FEA45` | `18FE71D` | binary (bit 0) |  |
| Curaga (23) / Ultimecia Castle - Storage Room (237) | `18FEA45` | `18FE71D` | binary (bit 2) |  |
| Cura (22) / Ultimecia Castle - Passageway (233) | `18FEA45` | `18FE71D` | binary (bit 4) |  |
| Scan (50) / ??? (-1) | `18FEA45` | `18FE71D` | binary (bit 6) |  |
| Esuna (27) / ??? (-1) | `18FEA46` | `18FE71E` | binary (bit 0) |  |
| Slow (36) / Ultimecia Castle - Courtyard (243) | `18FEA46` | `18FE71E` | binary (bit 2) |  |
| Dispel (28) / Ultimecia Castle - Chapel (244) | `18FEA46` | `18FE71E` | binary (bit 4) |  |
| Stop (37) / Ultimecia Castle - Clock Tower (245) | `18FEA46` | `18FE71E` | binary (bit 6) |  |
| Life (24) / Ultimecia Castle - Master Room (246) | `18FEA47` | `18FE71F` | binary (bit 0) |  |
| Flare (15) / ??? (-1) | `18FEA47` | `18FE71F` | binary (bit 2) |  |
| Aura (32) / Ultimecia Castle - Wine Cellar (232) | `18FEA47` | `18FE71F` | binary (bit 4) |  |
| Holy (14) / Ultimecia Castle - Treasure Rm (236) | `18FEA47` | `18FE71F` | binary (bit 6) |  |
| Meteor (16) / Ultimecia Castle - Terrace (231) | `18FEA48` | `18FE720` | binary (bit 0) |  |
| Meltdown (49) / Ultimecia Castle - Art Gallery (238) | `18FEA48` | `18FE720` | binary (bit 2) |  |
| Ultima (19) / Ultimecia Castle - Armory (240) | `18FEA48` | `18FE720` | binary (bit 4) |  |
| Full-life (25) / Ultimecia Castle - Prison Cell (241) | `18FEA48` | `18FE720` | binary (bit 6) |  |
| Triple (34) / Ultimecia Castle - Clock Tower (245) | `18FEA49` | `18FE721` | binary (bit 0) |  |
| Fire (1) / ??? (-1) | `18FEA49` | `18FE721` | binary (bit 2) |  |
| Fire (1) / ??? (-1) | `18FEA49` | `18FE721` | binary (bit 4) |  |
| Fire (1) / ??? (-1) | `18FEA49` | `18FE721` | binary (bit 6) |  |
| Fire (1) / ??? (-1) | `18FEA4A` | `18FE722` | binary (bit 0) |  |
| Fire (1) / ??? (-1) | `18FEA4A` | `18FE722` | binary (bit 2) |  |
| Fire (1) / ??? (-1) | `18FEA4A` | `18FE722` | binary (bit 4) |  |
| Fire (1) / ??? (-1) | `18FEA4A` | `18FE722` | binary (bit 6) |  |
| Fire (1) / ??? (-1) | `18FEA4B` | `18FE723` | binary (bit 0) |  |
| Fire (1) / ??? (-1) | `18FEA4B` | `18FE723` | binary (bit 2) |  |
| Fire (1) / ??? (-1) | `18FEA4B` | `18FE723` | binary (bit 4) |  |
| Fire (1) / ??? (-1) | `18FEA4B` | `18FE723` | binary (bit 6) |  |
| Cure (21) / Balamb - Alcauld Plains (1) | `18FEA4C` | `18FE724` | binary (bit 0) |  |
| Esuna (27) / Balamb - Alcauld Plains (1) | `18FEA4C` | `18FE724` | binary (bit 2) |  |
| Thunder (7) / Timber - Mandy Beach (6) | `18FEA4C` | `18FE724` | binary (bit 4) |  |
| Fira (2) / Timber - Lanker Plains (8) | `18FEA4C` | `18FE724` | binary (bit 6) |  |
| Thundara (8) / Timber - Shenand Hill (17) | `18FEA4D` | `18FE725` | binary (bit 0) |  |
| Blizzara (5) / Galbadia - Monterosa Plateau (15) | `18FEA4D` | `18FE725` | binary (bit 2) |  |
| Blizzard (4) / Timber - Yaulny Canyon (10) | `18FEA4D` | `18FE725` | binary (bit 4) |  |
| Fire (1) / ??? (-1) | `18FEA4D` | `18FE725` | binary (bit 6) |  |
| Cure (21) / Dollet - Hasberry Plains (11) | `18FEA4E` | `18FE726` | binary (bit 0) |  |
| Water (10) / Dollet - Malgo Peninsula (14) | `18FEA4E` | `18FE726` | binary (bit 2) |  |
| Cura (22) / Dollet - Hasberry Plains (11) | `18FEA4E` | `18FE726` | binary (bit 4) |  |
| Esuna (27) / Great Plains of Galbadia (20) | `18FEA4E` | `18FE726` | binary (bit 6) |  |
| Scan (50) / Galbadia - Wilburn Hill (21) | `18FEA4F` | `18FE727` | binary (bit 0) |  |
| Shell (30) / Galbadia - Monterosa Plateau (15) | `18FEA4F` | `18FE727` | binary (bit 2) |  |
| Haste (35) / Galbadia - Dingo Desert (23) | `18FEA4F` | `18FE727` | binary (bit 4) |  |
| Aero (11) / Galbadia - Monterosa Plateau (15) | `18FEA4F` | `18FE727` | binary (bit 6) |  |
| Bio (12) / Galbadia - Monterosa Plateau (15) | `18FEA50` | `18FE728` | binary (bit 0) |  |
| Life (24) / Winhill - Winhill Bluffs (24) | `18FEA50` | `18FE728` | binary (bit 2) |  |
| Demi (13) / Centra - Centra Crater (62) | `18FEA50` | `18FE728` | binary (bit 4) |  |
| Protect (29) / Centra - Nectar Peninsula (61) | `18FEA50` | `18FE728` | binary (bit 6) |  |
| Holy (14) / Centra - Cape of Good Hope (57) | `18FEA51` | `18FE729` | binary (bit 0) |  |
| Thundaga (9) / Centra - Almaj Mountains (55) | `18FEA51` | `18FE729` | binary (bit 2) |  |
| Stop (37) / Esthar - Shalmal Peninsula (53) | `18FEA51` | `18FE729` | binary (bit 4) |  |
| Firaga (3) / Esthar - Kashkabald Desert (50) | `18FEA51` | `18FE729` | binary (bit 6) |  |
| Regen (26) / Trabia - Winter Island (26) | `18FEA52` | `18FE72A` | binary (bit 0) |  |
| Blizzaga (6) / Trabia - Winter Island (26) | `18FEA52` | `18FE72A` | binary (bit 2) |  |
| Confuse (39) / Trabia - Hawkwind Plains (30) | `18FEA52` | `18FE72A` | binary (bit 4) |  |
| Flare (15) / Trabia - Bika Snowfield (32) | `18FEA52` | `18FE72A` | binary (bit 6) |  |
| Dispel (28) / Trabia - Bika Snowfield (32) | `18FEA53` | `18FE72B` | binary (bit 0) |  |
| Slow (36) / Trabia - Bika Snowfield (32) | `18FEA53` | `18FE72B` | binary (bit 2) |  |
| Quake (17) / Trabia - Vienne Mountains (37) | `18FEA53` | `18FE72B` | binary (bit 4) |  |
| Curaga (23) / Esthar - West Coast (46) | `18FEA53` | `18FE72B` | binary (bit 6) |  |
| Tornado (18) / Esthar - Nortes Mountains (39) | `18FEA54` | `18FE72C` | binary (bit 0) |  |
| Full-life (25) / Esthar - Nortes Mountains (39) | `18FEA54` | `18FE72C` | binary (bit 2) |  |
| Reflect (31) / Winhill - Humphrey Archipelago (25) | `18FEA54` | `18FE72C` | binary (bit 4) |  |
| Aura (32) / Dollet - Long Horn Island (13) | `18FEA54` | `18FE72C` | binary (bit 6) |  |
| Quake (17) / Dollet - Holy Glory Cape (12) | `18FEA55` | `18FE72D` | binary (bit 0) |  |
| Double (33) / ??? (-1) | `18FEA55` | `18FE72D` | binary (bit 2) |  |
| Break (42) / Timber - Shenand Hill (17) | `18FEA55` | `18FE72D` | binary (bit 4) |  |
| Meteor (16) / Esthar - Grandidi Forest (41) | `18FEA55` | `18FE72D` | binary (bit 6) |  |
| Ultima (19) / Esthar - Grandidi Forest (41) | `18FEA56` | `18FE72E` | binary (bit 0) |  |
| Triple (34) / Esthar - Grandidi Forest (41) | `18FEA56` | `18FE72E` | binary (bit 2) |  |
| Confuse (39) / Esthar - Millefeuille Archipelago (42) | `18FEA56` | `18FE72E` | binary (bit 4) |  |
| Blind (38) / Esthar - Grandidi Forest (41) | `18FEA56` | `18FE72E` | binary (bit 6) |  |
| Quake (17) / Trabia - Winter Island (26) | `18FEA57` | `18FE72F` | binary (bit 0) |  |
| Sleep (40) / Trabia - Winter Island (26) | `18FEA57` | `18FE72F` | binary (bit 2) |  |
| Silence (41) / Trabia - Winter Island (26) | `18FEA57` | `18FE72F` | binary (bit 4) |  |
| Flare (15) / Trabia - Bika Snowfield (32) | `18FEA57` | `18FE72F` | binary (bit 6) |  |
| Death (43) / Trabia - Albatross Archipelago (31) | `18FEA58` | `18FE730` | binary (bit 0) |  |
| Drain (44) / Dollet - Holy Glory Cape (12) | `18FEA58` | `18FE730` | binary (bit 2) |  |
| Pain (45) / Dollet - Hasberry Plains (11) | `18FEA58` | `18FE730` | binary (bit 4) |  |
| Berserk (46) / Galbadia - Monterosa Plateau (15) | `18FEA58` | `18FE730` | binary (bit 6) |  |
| Float (47) / Galbadia - Wilburn Hill (21) | `18FEA59` | `18FE731` | binary (bit 0) |  |
| Zombie (48) / Galbadia - Rem Archipelago (22) | `18FEA59` | `18FE731` | binary (bit 2) |  |
| Meltdown (49) / Galbadia - Monterosa Plateau (15) | `18FEA59` | `18FE731` | binary (bit 4) |  |
| Zombie (48) / Galbadia - Lallapalooza Canyon (16) | `18FEA59` | `18FE731` | binary (bit 6) |  |
| Tornado (18) / Island Closest to Heaven (51) | `18FEA5A` | `18FE732` | binary (bit 0) |  |
| Quake (17) / Island Closest to Heaven (51) | `18FEA5A` | `18FE732` | binary (bit 2) |  |
| Meteor (16) / Island Closest to Heaven (51) | `18FEA5A` | `18FE732` | binary (bit 4) |  |
| Holy (14) / Island Closest to Heaven (51) | `18FEA5A` | `18FE732` | binary (bit 6) |  |
| Flare (15) / Island Closest to Heaven (51) | `18FEA5B` | `18FE733` | binary (bit 0) |  |
| Aura (32) / Island Closest to Heaven (51) | `18FEA5B` | `18FE733` | binary (bit 2) |  |
| Ultima (19) / Island Closest to Heaven (51) | `18FEA5B` | `18FE733` | binary (bit 4) |  |
| Triple (34) / Island Closest to Heaven (51) | `18FEA5B` | `18FE733` | binary (bit 6) |  |
| Life (24) / Island Closest to Heaven (51) | `18FEA5C` | `18FE734` | binary (bit 0) |  |
| Tornado (18) / Island Closest to Heaven (51) | `18FEA5C` | `18FE734` | binary (bit 2) |  |
| Quake (17) / Island Closest to Heaven (51) | `18FEA5C` | `18FE734` | binary (bit 4) |  |
| Meteor (16) / Island Closest to Heaven (51) | `18FEA5C` | `18FE734` | binary (bit 6) |  |
| Holy (14) / Island Closest to Heaven (51) | `18FEA5D` | `18FE735` | binary (bit 0) |  |
| Flare (15) / Island Closest to Heaven (51) | `18FEA5D` | `18FE735` | binary (bit 2) |  |
| Aura (32) / Island Closest to Heaven (51) | `18FEA5D` | `18FE735` | binary (bit 4) |  |
| Ultima (19) / Island Closest to Heaven (51) | `18FEA5D` | `18FE735` | binary (bit 6) |  |
| Triple (34) / Island Closest to Heaven (51) | `18FEA5E` | `18FE736` | binary (bit 0) |  |
| Life (24) / Island Closest to Heaven (51) | `18FEA5E` | `18FE736` | binary (bit 2) |  |
| Tornado (18) / Island Closest to Heaven (51) | `18FEA5E` | `18FE736` | binary (bit 4) |  |
| Quake (17) / Island Closest to Heaven (51) | `18FEA5E` | `18FE736` | binary (bit 6) |  |
| Meteor (16) / Island Closest to Heaven (51) | `18FEA5F` | `18FE737` | binary (bit 0) |  |
| Holy (14) / Island Closest to Heaven (51) | `18FEA5F` | `18FE737` | binary (bit 2) |  |
| Flare (15) / Island Closest to Heaven (51) | `18FEA5F` | `18FE737` | binary (bit 4) |  |
| Aura (32) / Island Closest to Heaven (51) | `18FEA5F` | `18FE737` | binary (bit 6) |  |
| Ultima (19) / Island Closest to Heaven (51) | `18FEA60` | `18FE738` | binary (bit 0) |  |
| Triple (34) / Island Closest to Heaven (51) | `18FEA60` | `18FE738` | binary (bit 2) |  |
| Life (24) / Island Closest to Heaven (51) | `18FEA60` | `18FE738` | binary (bit 4) |  |
| Ultima (19) / Island Closest to Heaven (51) | `18FEA60` | `18FE738` | binary (bit 6) |  |
| Meteor (16) / Island Closest to Hell (19) | `18FEA61` | `18FE739` | binary (bit 0) |  |
| Holy (14) / Island Closest to Hell (19) | `18FEA61` | `18FE739` | binary (bit 2) |  |
| Flare (15) / Island Closest to Hell (19) | `18FEA61` | `18FE739` | binary (bit 4) |  |
| Aura (32) / Island Closest to Hell (19) | `18FEA61` | `18FE739` | binary (bit 6) |  |
| Ultima (19) / Island Closest to Hell (19) | `18FEA62` | `18FE73A` | binary (bit 0) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA62` | `18FE73A` | binary (bit 2) |  |
| Life (24) / Island Closest to Hell (19) | `18FEA62` | `18FE73A` | binary (bit 4) |  |
| Meteor (16) / Island Closest to Hell (19) | `18FEA62` | `18FE73A` | binary (bit 6) |  |
| Holy (14) / Island Closest to Hell (19) | `18FEA63` | `18FE73B` | binary (bit 0) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA63` | `18FE73B` | binary (bit 2) |  |
| Aura (32) / Island Closest to Hell (19) | `18FEA63` | `18FE73B` | binary (bit 4) |  |
| Ultima (19) / Island Closest to Hell (19) | `18FEA63` | `18FE73B` | binary (bit 6) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA64` | `18FE73C` | binary (bit 0) |  |
| Life (24) / Island Closest to Hell (19) | `18FEA64` | `18FE73C` | binary (bit 2) |  |
| Meteor (16) / Island Closest to Hell (19) | `18FEA64` | `18FE73C` | binary (bit 4) |  |
| Holy (14) / Island Closest to Hell (19) | `18FEA64` | `18FE73C` | binary (bit 6) |  |
| Flare (15) / Island Closest to Hell (19) | `18FEA65` | `18FE73D` | binary (bit 0) |  |
| Aura (32) / Island Closest to Hell (19) | `18FEA65` | `18FE73D` | binary (bit 2) |  |
| Ultima (19) / Island Closest to Hell (19) | `18FEA65` | `18FE73D` | binary (bit 4) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA65` | `18FE73D` | binary (bit 6) |  |
| Life (24) / Island Closest to Hell (19) | `18FEA66` | `18FE73E` | binary (bit 0) |  |
| Meteor (16) / Island Closest to Hell (19) | `18FEA66` | `18FE73E` | binary (bit 2) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA66` | `18FE73E` | binary (bit 4) |  |
| Flare (15) / Island Closest to Hell (19) | `18FEA66` | `18FE73E` | binary (bit 6) |  |
| Aura (32) / Island Closest to Hell (19) | `18FEA67` | `18FE73F` | binary (bit 0) |  |
| Ultima (19) / Island Closest to Hell (19) | `18FEA67` | `18FE73F` | binary (bit 2) |  |
| Triple (34) / Island Closest to Hell (19) | `18FEA67` | `18FE73F` | binary (bit 4) |  |
| Life (24) / Island Closest to Hell (19) | `18FEA67` | `18FE73F` | binary (bit 6) |  |
| Meteor (16) / Island Closest to Hell (19) | `18FEA68` | `18FE740` | binary (bit 0) |  |
| Holy (14) / Island Closest to Hell (19) | `18FEA68` | `18FE740` | binary (bit 2) |  |
| Flare (15) / Island Closest to Hell (19) | `18FEA68` | `18FE740` | binary (bit 4) |  |
| Aura (32) / Island Closest to Hell (19) | `18FEA68` | `18FE740` | binary (bit 6) |  |
| Ultima (19) / Island Closest to Hell (19) | `18FEA69` | `18FE741` | binary (bit 0) |  |
| Blizzard (4) / Balamb - Alcauld Plains (1) | `18FEA69` | `18FE741` | binary (bit 2) |  |
| Cure (21) / Balamb - Alcauld Plains (1) | `18FEA69` | `18FE741` | binary (bit 4) |  |
| Dispel (28) / Galbadia - Monterosa Plateau (15) | `18FEA69` | `18FE741` | binary (bit 6) |  |
| Confuse (39) / Great Plains of Galbadia (20) | `18FEA6A` | `18FE742` | binary (bit 0) |  |
| Meteor (16) / Great Plains of Esthar (43) | `18FEA6A` | `18FE742` | binary (bit 2) |  |
| Double (33) / Great Plains of Esthar (43) | `18FEA6A` | `18FE742` | binary (bit 4) |  |
| Double (33) / Great Plains of Esthar (43) | `18FEA6A` | `18FE742` | binary (bit 6) |  |
| Holy (14) / Great Plains of Esthar (43) | `18FEA6B` | `18FE743` | binary (bit 0) |  |
| Flare (15) / Esthar - Sollet Mountains (47) | `18FEA6B` | `18FE743` | binary (bit 2) |  |
| Ultima (19) / Esthar - Abadan Plains (48) | `18FEA6B` | `18FE743` | binary (bit 4) |  |
| Scan (50) / ??? (-1) | `18FEA6B` | `18FE743` | binary (bit 6) |  |

## Field - Entities

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| FIELD_ENTITY_EXECFLAG_1 | `18E4775` | `18E444D` | 1 Byte | CONFIRMED · 0=controllable / 1=frozen (UCOFF/UCON control-lock) |
| FIELD_ENTITY_EXECFLAG_2 | `18E4903` | `18E45DB` | 1 Byte | CONFIRMED |
| FIELD_ENTITY_EXECFLAG_3 | `199D018` | `199CCF0` | 1 Byte | CONFIRMED |
| DIALOGUE_OPEN_CANDIDATE_1 | `192B382` | `192B05A` | 1 Byte | GUESS · best dialogue-window-busy candidate, moves in lockstep with 192B5C5 |
| DIALOGUE_OPEN_CANDIDATE_2 | `192B5C5` | `192B29D` | 1 Byte | GUESS |
| DIALOGUE_OPEN_CANDIDATE_3 | `18FEA8B` | `18FE763` | 1 Byte | GUESS · 0->2->0 in lockstep with the pair above |
| CHARA_FIELD_ENTITY612_PTR | `1D9CF88` | — | 4 Bytes | CONFIRMED · pointer to 612-byte field character entity array |
| CHARA612_ENTITY_COUNT | `1D9D019` | — | 1 Byte | CONFIRMED |
| FIELD_PLAYER_ENTITY_INDEX | `1CD8FD0` | — | 4 Bytes | CONFIRMED · which entity is player-controlled; re-read, don't assume 0 |
| FIELD_ENTITY_POS | `[1D9CF88]+190` | — | 4 Bytes | CONFIRMED · stride 0x264 · s32 x3 fixed-point walkmesh pos, writable. base is a pointer; stride 612 |
| FIELD_ENTITY_COLLISION_RADIUS | `[1D9CF88]+1F6` | — | 2 Bytes | CONFIRMED · stride 0x264 · default 48 |
| FIELD_ENTITY_CURRENT_TRIANGLE | `[1D9CF88]+1FA` | — | 2 Bytes | CONFIRMED · stride 0x264 · walkmesh triangle index |
| FIELD_ENTITY_PC_ID | `[1D9CF88]+255` | — | 1 Byte | CONFIRMED · stride 0x264 · 0=Squall.., 254=NPC |

## GF - Roster

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Quezacotl Unlocked | `18FDCB9` | `18FD991` | 1 Byte |  |
| Quezacotl Skill Selected to Learn | `18FDCE8` | `18FD9C0` | 1 Byte |  |
| Shiva Unlocked | `18FDCFD` | `18FD9D5` | 1 Byte |  |
| Shiva Skill Selected to Learn | `18FDD2C` | `18FDA04` | 1 Byte |  |
| Ifrit Unlocked | `18FDD41` | `18FDA19` | 1 Byte |  |
| Ifrit Skill Selected to Learn | `18FDD70` | `18FDA48` | 1 Byte |  |
| Siren Unlocked | `18FDD85` | `18FDA5D` | 1 Byte |  |
| Siren Skill Selected to Learn | `18FDDB4` | `18FDA8C` | 1 Byte |  |
| Brothers Unlocked | `18FDDC9` | `18FDAA1` | 1 Byte |  |
| Brothers Skill Selected to Learn | `18FDDF8` | `18FDAD0` | 1 Byte |  |
| Diablos Unlocked | `18FDE0D` | `18FDAE5` | 1 Byte |  |
| Diablos Skill Selected to Learn | `18FDE3C` | `18FDB14` | 1 Byte |  |
| Carbuncle Unlocked | `18FDE51` | `18FDB29` | 1 Byte |  |
| Carbuncle Skill Selected to Learn | `18FDE80` | `18FDB58` | 1 Byte |  |
| Leviathan Unlocked | `18FDE95` | `18FDB6D` | 1 Byte |  |
| Leviathan Skill Selected to Learn | `18FDEC4` | `18FDB9C` | 1 Byte |  |
| Pandemona Unlocked | `18FDED9` | `18FDBB1` | 1 Byte |  |
| Pandemona Skill Selected to Learn | `18FDF08` | `18FDBE0` | 1 Byte |  |
| Cerberus Unlocked | `18FDF1D` | `18FDBF5` | 1 Byte |  |
| Cerberus Skill Selected to Learn | `18FDF4C` | `18FDC24` | 1 Byte |  |
| Alexander Unlocked | `18FDF61` | `18FDC39` | 1 Byte |  |
| Alexander Skill Selected to Learn | `18FDF90` | `18FDC68` | 1 Byte |  |
| Doomtrain Unlocked | `18FDFA5` | `18FDC7D` | 1 Byte |  |
| Doomtrain Skill Selected to Learn | `18FDFD4` | `18FDCAC` | 1 Byte |  |
| Bahamut Unlocked | `18FDFE9` | `18FDCC1` | 1 Byte |  |
| Bahamut Skill Selected to Learn | `18FE018` | `18FDCF0` | 1 Byte |  |
| Cactaur Unlocked | `18FE02D` | `18FDD05` | 1 Byte |  |
| Cactaur Skill Selected to Learn | `18FE05C` | `18FDD34` | 1 Byte |  |
| Tonberry Unlocked | `18FE071` | `18FDD49` | 1 Byte |  |
| Tonberry Skill Selected to Learn | `18FE0A0` | `18FDD78` | 1 Byte |  |
| Eden Unlocked | `18FE0B5` | `18FDD8D` | 1 Byte |  |
| Eden Skill Selected to Learn | `18FE0E4` | `18FDDBC` | 1 Byte |  |
| Quezacotl HP | `18FF618` | `18FF2F0` | 2 Bytes |  |
| Quezacotl Max HP | `18FF61A` | `18FF2F2` | 2 Bytes |  |
| Quezacotl EXP | `18FF61C` | `18FF2F4` | 4 Bytes |  |
| Shiva HP | `18FF624` | `18FF2FC` | 2 Bytes |  |
| Shiva Max HP | `18FF626` | `18FF2FE` | 2 Bytes |  |
| Shiva EXP | `18FF628` | `18FF300` | 4 Bytes |  |
| Ifrit HP | `18FF630` | `18FF308` | 2 Bytes |  |
| Ifrit Max HP | `18FF632` | `18FF30A` | 2 Bytes |  |
| Ifrit EXP | `18FF634` | `18FF30C` | 4 Bytes |  |
| Siren HP | `18FF63C` | `18FF314` | 2 Bytes |  |
| Siren Max HP | `18FF63E` | `18FF316` | 2 Bytes |  |
| Siren EXP | `18FF640` | `18FF318` | 4 Bytes |  |
| Brothers HP | `18FF648` | `18FF320` | 2 Bytes |  |
| Brothers Max HP | `18FF64A` | `18FF322` | 2 Bytes |  |
| Brothers EXP | `18FF64C` | `18FF324` | 4 Bytes |  |
| Diablos HP | `18FF654` | `18FF32C` | 2 Bytes |  |
| Diablos Max HP | `18FF656` | `18FF32E` | 2 Bytes |  |
| Diablos EXP | `18FF658` | `18FF330` | 4 Bytes |  |
| Carbuncle HP | `18FF660` | `18FF338` | 2 Bytes |  |
| Carbuncle Max HP | `18FF662` | `18FF33A` | 2 Bytes |  |
| Carbuncle EXP | `18FF664` | `18FF33C` | 4 Bytes |  |
| Leviathan HP | `18FF66C` | `18FF344` | 2 Bytes |  |
| Leviathan Max HP | `18FF66E` | `18FF346` | 2 Bytes |  |
| Leviathan EXP | `18FF670` | `18FF348` | 4 Bytes |  |
| Pandemona HP | `18FF678` | `18FF350` | 2 Bytes |  |
| Pandemona Max HP | `18FF67A` | `18FF352` | 2 Bytes |  |
| Pandemona EXP | `18FF67C` | `18FF354` | 4 Bytes |  |
| Cerberus HP | `18FF684` | `18FF35C` | 2 Bytes |  |
| Cerberus Max HP | `18FF686` | `18FF35E` | 2 Bytes |  |
| Cerberus EXP | `18FF688` | `18FF360` | 4 Bytes |  |
| Alexander HP | `18FF690` | `18FF368` | 2 Bytes |  |
| Alexander Max HP | `18FF692` | `18FF36A` | 2 Bytes |  |
| Alexander EXP | `18FF694` | `18FF36C` | 4 Bytes |  |
| Doomtrain HP | `18FF69C` | `18FF374` | 2 Bytes |  |
| Doomtrain Max HP | `18FF69E` | `18FF376` | 2 Bytes |  |
| Doomtrain EXP | `18FF6A0` | `18FF378` | 4 Bytes |  |
| Bahamut HP | `18FF6A8` | `18FF380` | 2 Bytes |  |
| Bahamut Max HP | `18FF6AA` | `18FF382` | 2 Bytes |  |
| Bahamut EXP | `18FF6AC` | `18FF384` | 4 Bytes |  |
| Cactaur HP | `18FF6B4` | `18FF38C` | 2 Bytes |  |
| Cactaur Max HP | `18FF6B6` | `18FF38E` | 2 Bytes |  |
| Cactaur EXP | `18FF6B8` | `18FF390` | 4 Bytes |  |
| Tonberry HP | `18FF6C0` | `18FF398` | 2 Bytes |  |
| Tonberry Max HP | `18FF6C2` | `18FF39A` | 2 Bytes |  |
| Tonberry EXP | `18FF6C4` | `18FF39C` | 4 Bytes |  |
| Eden HP | `18FF6CC` | `18FF3A4` | 2 Bytes |  |
| Eden Max HP | `18FF6CE` | `18FF3A6` | 2 Bytes |  |
| Eden EXP | `18FF6D0` | `18FF3A8` | 4 Bytes |  |

## Items

### Inventory item — 198× array (stride 0x2)

Base (EN) `18FE79C` · Base (FR) `18FE474`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| Item ID | `+0` | 1 Byte |  |
| Quantity | `+1` | 1 Byte |  |

## Misc - Controller Button Map

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| L2 | `18D0228` | `18CFF00` | 1 Byte |  |
| R2 | `18D0229` | `18CFF01` | 1 Byte |  |
| L1 | `18D022A` | `18CFF02` | 1 Byte |  |
| R1 | `18D022B` | `18CFF03` | 1 Byte |  |
| Walk/Cancel | `18D022C` | `18CFF04` | 1 Byte |  |
| Menu | `18D022D` | `18CFF05` | 1 Byte |  |
| Talk | `18D022E` | `18CFF06` | 1 Byte |  |
| Card Game | `18D022F` | `18CFF07` | 1 Byte |  |
| Up | `18D0234` | `18CFF0C` | 1 Byte |  |
| Right | `18D0235` | `18CFF0D` | 1 Byte |  |
| Down | `18D0236` | `18CFF0E` | 1 Byte |  |
| Left | `18D0237` | `18CFF0F` | 1 Byte |  |

## Triple Triad - Rules

### Card rules by region — 8× array (stride 0x1)

Base (EN) `18FEAC8` · Base (FR) `18FE7A0` · pick a region to see its rules: 8 rule flags (bits of the byte at base+region) + Trade Rule (next byte).

Elements: Balamb `@18FEAC8`, Galbadia `@18FEAC9`, Trabia `@18FEACA`, Centra `@18FEACB`, Dollet `@18FEACC`, FH `@18FEACD`, Space `@18FEACE`, Esthar `@18FEACF`

| Field | +Offset | Length | Notes |
|---|---|---|---|
| Open | `+0` | binary (bit 0) |  |
| Same | `+0` | binary (bit 1) |  |
| Plus | `+0` | binary (bit 2) |  |
| Random | `+0` | binary (bit 3) |  |
| Sudden Death | `+0` | binary (bit 4) |  |
| Retry (Unused) | `+0` | binary (bit 5) |  |
| Same Wall | `+0` | binary (bit 6) |  |
| Elemental | `+0` | binary (bit 7) |  |
| Trade Rule | `+8` | 1 Byte |  |

## Triple Triad - Stats

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| Last Region Played | `18FEADA` | `18FE7B2` | 1 Byte |  |
| Second Last Region Played | `18FEADB` | `18FE7B3` | 1 Byte |  |
| Total Card Wins | `18FEFAC` | `18FEC84` | 1 Byte |  |
| Total Card Losses | `18FEFAE` | `18FEC86` | 1 Byte |  |
| Total Card Draws | `18FEFB0` | `18FEC88` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |
| Triple Triad - In Game | `19CD798` | `19CD470` | 1 Byte |  |

## World Map - Camera

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| WM_CAM_Y_TRANSLATION | `1C3ECF8` | — | 2 Bytes | PROBABLY OK |
| WM_CAM_X_TRANSLATION | `1C3ECFA` | — | 2 Bytes | PROBABLY OK |
| WM_CAM_DISTANCE | `1C3ECFC` | — | 2 Bytes | PROBABLY OK |
| WM_CAM_TANGENT_Y | `1C3ED00` | — | 2 Bytes | PROBABLY OK |
| WM_CAM_ROOT_ROTATION | `1C3ED04` | — | 2 Bytes | PROBABLY OK |

## World Map - Encounters

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| WM_ENC_CYCLE_BONUS | `1C40A5F` | — | 1 Byte | CONFIRMED · +13 every 256 steps (pity bonus, time-driven) |
| WM_ENC_STEP_INDEX | `1C40A60` | — | 1 Byte | CONFIRMED · free-running per-frame counter, indexes Encounter_RandomRollArray |
| WM_FORMATION_ROLL_CARRY | `1C40A61` | — | 1 Byte | CONFIRMED · formation-roll carry byte (+13 per wrap) |
| WM_FORMATION_ROLL_STEP_INDEX | `1C40A62` | — | 1 Byte | CONFIRMED · second free-running counter for the tier/formation weight roll |
| WM_AREA_DENSITY | `1C409F4` | — | 4 Bytes | CONFIRMED · low byte meaningful; ==0 gates whole routine off (no encounters) |
| WM_PER_TERRAIN_RATE_CACHED | `1C409C4` | — | 4 Bytes | CONFIRMED · game-cached looked-up per-terrain rate byte; read directly instead of recomputing |
| WM_RATE_SELECTOR_FLAG | `1C36BD8` | — | 1 Byte | CONFIRMED · masked &0x1F, compared to 4 to select rate table A vs B |
| WM_RATE_TABLE_A | `1C3ED40` | — | 4 Bytes | CONFIRMED · heap pointer; offset-indexed from entry_word-0x51 when selector==4 |
| WM_RATE_TABLE_B | `1C40090` | — | 4 Bytes | CONFIRMED · heap pointer; direct-indexed by entry_word otherwise |
| WM_TERRAIN_MATCH_TABLE_PTR | `1C40068` | — | 4 Bytes | CONFIRMED · pointer to 96 {u8 region,u8 terrain,u16 entry_word} entries; re-read live |
| WM_REGION_TABLE_PTR | `1C40330` | — | 4 Bytes | CONFIRMED · pointer to live 32x24 region-id grid (768 bytes); region_id = *(ptr+grid_index) |
| WORLDMAP_LOCATION_DRAW_PTR | `1C409FC` | — | 4 Bytes | CONFIRMED · pointer; terrain_id = *(ptr+0xD) (u8) |
| WM_ENC_HALF_FLAG_BYTE | `1CFF6D8` | — | 1 Byte | CONFIRMED · bit2 = Enc-Half (shift 2), bit3 gates whole routine off (likely Enc-None) |
| WM_LAST_FORMATION_ID | `1C400A0` | — | 2 Bytes | CONFIRMED · re-roll (up to twice) applies to whole tier+slot pick |
| Encounter_RandomRollArray | `875D20` | — | array of bytes | CONFIRMED · static 256-byte fixed permutation of 0-255 (static/abs 0xC75D20) |
| WM_FORMATION_WEIGHT_TABLE | `875F10` | — | array of bytes | CONFIRMED · static 8-byte tier weights 37,37,37,37,36,36,24,12 (sum 256) (static/abs 0xC75F10) |
| WM_Encounter_wm123456 | `141C80` | — | array of bytes | CONFIRMED · function (abs 541C80): the encounter roll + formation-select routine |
| wm_GetRegionNumber | `153910` | — | array of bytes | CONFIRMED · function: maps world X/Y to region/terrain id (static/abs 0x553910) |

## World State

| Name | Offset (EN) | Offset (FR) | Length | Notes |
|---|---|---|---|---|
| MAP_ID | `18FDFC0` | `18FDC98` | 2 Bytes | PROBABLY OK |
| CHARACTER_BASE | `18FE0E8` | `18FDDC0` | array of bytes | CONFIRMED · party roster savemap, stride 0x98, fixed order Squall..Edea; Magics field at +0x10 |
| ITEM_SLOT_BASE | `18FE79C` | `18FE474` | array of bytes | PROBABLY OK · party inventory [id,qty] pairs stride 2; savemap-accurate, NOT battle-live |
| ITEM_BATTLE_ORDER | `18FE77C` | `18FE454` | array of bytes | CONFIRMED · 32 bytes, item_id-1 -> battle-menu display slot (permutation of 0-31) |
| SAVEMAP_STORY_VARIABLE_BASE | `18FE9B8` | `18FE690` | array of bytes | CONFIRMED · savemap/story-variable block base; var 256 = Main Story quest progress |
