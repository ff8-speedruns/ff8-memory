This is my list of known RAM offsets for FFVIII, compiled from [various sources](credits.md) and my own research.

Game details: Steam 2013 PC version (English)

## Table of Contents
- [General Memory](#general-memory)
- [Draw Points](#draw-points)
- Reference Material
    + [Locations Reference](locations.md)
    + [Magic Reference](magic.md)
    + [Maps Reference](maps.md)
    + [Story Progress Reference](story-progress.md)
    + [Triple Triad Reference](triple-triad.md)

# General Memory

It looks like the FR offsets are ( EN Offset - 328). Needs verification, however.

|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18D2FC0|FF8_FR.exe+18D2C98|2 Bytes|Current [Map ID](maps.md)|
|FF8_EN.exe+18DC74A||1 Byte|Danger Value (except World Map)|
|FF8_EN.exe+18E490B||1 Byte|Game is Savable (i.e. save anywhere). Lock to 1 to save anywhere. Save points set this value to 3.|
|FF8_EN.exe+18FDCB9||1 Byte|Quezacotl Unlocked|
|FF8_EN.exe+18FDCE8||1 Byte|Quezacotl [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDCFD||1 Byte|Shiva Unlocked|
|FF8_EN.exe+18FDD2C||1 Byte|Shiva [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDD41||1 Byte|Ifrit Unlocked|
|FF8_EN.exe+18FDD70||1 Byte|Ifrit [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDD85||1 Byte|Siren Unlocked|
|FF8_EN.exe+18FDDB4||1 Byte|Siren [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDDC9||1 Byte|Brothers Unlocked|
|FF8_EN.exe+18FDDF8||1 Byte|Brothers [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDE0D||1 Byte|Diablos Unlocked|
|FF8_EN.exe+18FDE3C||1 Byte|Diablos [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDE51||1 Byte|Carbuncle Unlocked|
|FF8_EN.exe+18FDE80||1 Byte|Carbuncle [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDE95||1 Byte|Leviathan Unlocked|
|FF8_EN.exe+18FDEC4||1 Byte|Leviathan [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDED9||1 Byte|Pandemona Unlocked|
|FF8_EN.exe+18FDF08||1 Byte|Pandemona [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDF1D||1 Byte|Cerberus Unlocked|
|FF8_EN.exe+18FDF4C||1 Byte|Cerberus [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDF61||1 Byte|Alexander Unlocked|
|FF8_EN.exe+18FDF90||1 Byte|Alexander [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDFA5||1 Byte|Doomtrain Unlocked|
|FF8_EN.exe+18FDFD4||1 Byte|Doomtrain [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FDFE9||1 Byte|Bahamut Unlocked|
|FF8_EN.exe+18FE018||1 Byte|Bahamut [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FE02D||1 Byte|Cactaur Unlocked|
|FF8_EN.exe+18FE05C||1 Byte|Cactaur [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FE071||1 Byte|Tonberry Unlocked|
|FF8_EN.exe+18FE071||1 Byte|Eden Unlocked|
|FF8_EN.exe+18FE0A0||1 Byte|Tonberry [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FE0E4||1 Byte|Eden [Skill](skills.md) Selected to Learn|
|FF8_EN.exe+18FE0E8||2 Bytes|Squall Current HP|
|FF8_EN.exe+18FE0EA||2 Bytes|Squall HP Modifier|
|FF8_EN.exe+18FE0EC||4 Bytes|Squall EXP Earned (Affects Level)|
|FF8_EN.exe+18FE0F2||1 Byte|Squall STR Modifier|
|FF8_EN.exe+18FE0F3||1 Byte|Squall VIT Modifier|
|FF8_EN.exe+18FE0F4||1 Byte|Squall MAG Modifier|
|FF8_EN.exe+18FE0F5||1 Byte|Squall SPR Modifier|
|FF8_EN.exe+18FE0F6||1 Byte|Squall SPD Modifier|
|FF8_EN.exe+18FE0F7||1 Byte|Squall LCK Modifier|
|FF8_EN.exe+18FE0F8||1 Byte|Squall Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE0F9||1 Byte|Squall Magic Slot 1 Quantity|
|FF8_EN.exe+18FE0FA||1 Byte|Squall Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE0FB||1 Byte|Squall Magic Slot 2 Quantity|
|FF8_EN.exe+18FE0FC||1 Byte|Squall Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE0FD||1 Byte|Squall Magic Slot 3 Quantity|
|FF8_EN.exe+18FE0FE||1 Byte|Squall Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE0FF||1 Byte|Squall Magic Slot 4 Quantity|
|FF8_EN.exe+18FE100||1 Byte|Squall Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE101||1 Byte|Squall Magic Slot 5 Quantity|
|FF8_EN.exe+18FE102||1 Byte|Squall Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE103||1 Byte|Squall Magic Slot 6 Quantity|
|FF8_EN.exe+18FE104||1 Byte|Squall Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE105||1 Byte|Squall Magic Slot 7 Quantity|
|FF8_EN.exe+18FE106||1 Byte|Squall Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE107||1 Byte|Squall Magic Slot 8 Quantity|
|FF8_EN.exe+18FE108||1 Byte|Squall Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE109||1 Byte|Squall Magic Slot 9 Quantity|
|FF8_EN.exe+18FE10A||1 Byte|Squall Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE10B||1 Byte|Squall Magic Slot 10 Quantity|
|FF8_EN.exe+18FE10C||1 Byte|Squall Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE10D||1 Byte|Squall Magic Slot 11 Quantity|
|FF8_EN.exe+18FE10E||1 Byte|Squall Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE10F||1 Byte|Squall Magic Slot 12 Quantity|
|FF8_EN.exe+18FE110||1 Byte|Squall Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE111||1 Byte|Squall Magic Slot 13 Quantity|
|FF8_EN.exe+18FE112||1 Byte|Squall Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE113||1 Byte|Squall Magic Slot 14 Quantity|
|FF8_EN.exe+18FE114||1 Byte|Squall Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE115||1 Byte|Squall Magic Slot 15 Quantity|
|FF8_EN.exe+18FE116||1 Byte|Squall Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE117||1 Byte|Squall Magic Slot 16 Quantity|
|FF8_EN.exe+18FE118||1 Byte|Squall Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE119||1 Byte|Squall Magic Slot 17 Quantity|
|FF8_EN.exe+18FE11A||1 Byte|Squall Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE11B||1 Byte|Squall Magic Slot 18 Quantity|
|FF8_EN.exe+18FE11C||1 Byte|Squall Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE11D||1 Byte|Squall Magic Slot 19 Quantity|
|FF8_EN.exe+18FE11E||1 Byte|Squall Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE11F||1 Byte|Squall Magic Slot 20 Quantity|
|FF8_EN.exe+18FE120||1 Byte|Squall Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE121||1 Byte|Squall Magic Slot 21 Quantity|
|FF8_EN.exe+18FE122||1 Byte|Squall Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE123||1 Byte|Squall Magic Slot 22 Quantity|
|FF8_EN.exe+18FE124||1 Byte|Squall Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE125||1 Byte|Squall Magic Slot 23 Quantity|
|FF8_EN.exe+18FE126||1 Byte|Squall Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE127||1 Byte|Squall Magic Slot 24 Quantity|
|FF8_EN.exe+18FE128||1 Byte|Squall Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE129||1 Byte|Squall Magic Slot 25 Quantity|
|FF8_EN.exe+18FE12A||1 Byte|Squall Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE12B||1 Byte|Squall Magic Slot 26 Quantity|
|FF8_EN.exe+18FE12C||1 Byte|Squall Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE12D||1 Byte|Squall Magic Slot 27 Quantity|
|FF8_EN.exe+18FE12E||1 Byte|Squall Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE12F||1 Byte|Squall Magic Slot 28 Quantity|
|FF8_EN.exe+18FE130||1 Byte|Squall Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE131||1 Byte|Squall Magic Slot 29 Quantity|
|FF8_EN.exe+18FE132||1 Byte|Squall Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE133||1 Byte|Squall Magic Slot 30 Quantity|
|FF8_EN.exe+18FE134||1 Byte|Squall Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE135||1 Byte|Squall Magic Slot 31 Quantity|
|FF8_EN.exe+18FE136||1 Byte|Squall Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE137||1 Byte|Squall Magic Slot 32 Quantity|
|FF8_EN.exe+18FE138||1 Byte|Squall Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE139||1 Byte|Squall Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE13A||1 Byte|Squall Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE13B||1 Byte|Squall Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE13C||1 Byte|Squall Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE13D||1 Byte|Squall Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE13E||1 Byte|Squall Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE144||1 Byte|Squall Junction Vitality [Spell](magic.md)|
|FF8_EN.exe+18FE145||1 Byte|Squall Junction Strength [Spell](magic.md)|
|FF8_EN.exe+18FE146||1 Byte|Squall Junction Resistance [Spell](magic.md)|
|FF8_EN.exe+18FE147||1 Byte|Squall Junction Magic Power [Spell](magic.md)|
|FF8_EN.exe+18FE148||1 Byte|Squall Junction Spirit [Spell](magic.md)|
|FF8_EN.exe+18FE14D||1 Byte|Squall Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE14E||1 Byte|Squall Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE14F||1 Byte|Squall Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE150||1 Byte|Squall Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE153||1 Byte|Squall Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE154||1 Byte|Squall Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE155||1 Byte|Squall Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE156||1 Byte|Squall Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE158||2 Bytes|Squall Quezacotl Compatibility|
|FF8_EN.exe+18FE15A||2 Bytes|Squall Shiva Compatibility|
|FF8_EN.exe+18FE15C||2 Bytes|Squall Ifrit Compatibility|
|FF8_EN.exe+18FE15E||2 Bytes|Squall Siren Compatibility|
|FF8_EN.exe+18FE160||2 Bytes|Squall Brothers Compatibility|
|FF8_EN.exe+18FE162||2 Bytes|Squall Diablos Compatibility|
|FF8_EN.exe+18FE164||2 Bytes|Squall Carbuncle Compatibility|
|FF8_EN.exe+18FE166||2 Bytes|Squall Leviathan Compatibility|
|FF8_EN.exe+18FE168||2 Bytes|Squall Pandemona Compatibility|
|FF8_EN.exe+18FE16A||2 Bytes|Squall Cerberus Compatibility|
|FF8_EN.exe+18FE16C||2 Bytes|Squall Alexander Compatibility|
|FF8_EN.exe+18FE16E||2 Bytes|Squall Doomtrain Compatibility|
|FF8_EN.exe+18FE170||2 Bytes|Squall Bahamut Compatibility|
|FF8_EN.exe+18FE172||2 Bytes|Squall Cactuar Compatibility|
|FF8_EN.exe+18FE174||2 Bytes|Squall Tonberry Compatibility|
|FF8_EN.exe+18FE176||2 Bytes|Squall Eden Compatibility|
|FF8_EN.exe+18FE178||2 Bytes|Squall Kill Counter|
|FF8_EN.exe+18FE17A||2 Bytes|Squall KO Counter|
|FF8_EN.exe+18FE180||2 Bytes|Zell Current HP|
|FF8_EN.exe+18FE182||2 Bytes|Zell HP Modifier|
|FF8_EN.exe+18FE184||4 Bytes|Zell EXP Earned (Affects Level)|
|FF8_EN.exe+18FE18A||1 Byte|Zell STR Modifier|
|FF8_EN.exe+18FE18B||1 Byte|Zell VIT Modifier|
|FF8_EN.exe+18FE18C||1 Byte|Zell MAG Modifier|
|FF8_EN.exe+18FE18D||1 Byte|Zell SPR Modifier|
|FF8_EN.exe+18FE18E||1 Byte|Zell SPD Modifier|
|FF8_EN.exe+18FE18F||1 Byte|Zell LCK Modifier|
|FF8_EN.exe+18FE190||1 Byte|Zell Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE191||1 Byte|Zell Magic Slot 1 Quantity|
|FF8_EN.exe+18FE192||1 Byte|Zell Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE193||1 Byte|Zell Magic Slot 2 Quantity|
|FF8_EN.exe+18FE194||1 Byte|Zell Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE195||1 Byte|Zell Magic Slot 3 Quantity|
|FF8_EN.exe+18FE196||1 Byte|Zell Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE197||1 Byte|Zell Magic Slot 4 Quantity|
|FF8_EN.exe+18FE198||1 Byte|Zell Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE199||1 Byte|Zell Magic Slot 5 Quantity|
|FF8_EN.exe+18FE19A||1 Byte|Zell Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE19B||1 Byte|Zell Magic Slot 6 Quantity|
|FF8_EN.exe+18FE19C||1 Byte|Zell Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE19D||1 Byte|Zell Magic Slot 7 Quantity|
|FF8_EN.exe+18FE19E||1 Byte|Zell Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE19F||1 Byte|Zell Magic Slot 8 Quantity|
|FF8_EN.exe+18FE1A0||1 Byte|Zell Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1A1||1 Byte|Zell Magic Slot 9 Quantity|
|FF8_EN.exe+18FE1A2||1 Byte|Zell Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1A3||1 Byte|Zell Magic Slot 10 Quantity|
|FF8_EN.exe+18FE1A4||1 Byte|Zell Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1A5||1 Byte|Zell Magic Slot 11 Quantity|
|FF8_EN.exe+18FE1A6||1 Byte|Zell Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1A7||1 Byte|Zell Magic Slot 12 Quantity|
|FF8_EN.exe+18FE1A8||1 Byte|Zell Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1A9||1 Byte|Zell Magic Slot 13 Quantity|
|FF8_EN.exe+18FE1AA||1 Byte|Zell Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1AB||1 Byte|Zell Magic Slot 14 Quantity|
|FF8_EN.exe+18FE1AC||1 Byte|Zell Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1AD||1 Byte|Zell Magic Slot 15 Quantity|
|FF8_EN.exe+18FE1AE||1 Byte|Zell Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1AF||1 Byte|Zell Magic Slot 16 Quantity|
|FF8_EN.exe+18FE1B0||1 Byte|Zell Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1B1||1 Byte|Zell Magic Slot 17 Quantity|
|FF8_EN.exe+18FE1B2||1 Byte|Zell Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1B3||1 Byte|Zell Magic Slot 18 Quantity|
|FF8_EN.exe+18FE1B4||1 Byte|Zell Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1B5||1 Byte|Zell Magic Slot 19 Quantity|
|FF8_EN.exe+18FE1B6||1 Byte|Zell Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1B7||1 Byte|Zell Magic Slot 20 Quantity|
|FF8_EN.exe+18FE1B8||1 Byte|Zell Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1B9||1 Byte|Zell Magic Slot 21 Quantity|
|FF8_EN.exe+18FE1BA||1 Byte|Zell Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1BB||1 Byte|Zell Magic Slot 22 Quantity|
|FF8_EN.exe+18FE1BC||1 Byte|Zell Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1BD||1 Byte|Zell Magic Slot 23 Quantity|
|FF8_EN.exe+18FE1BE||1 Byte|Zell Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1BF||1 Byte|Zell Magic Slot 24 Quantity|
|FF8_EN.exe+18FE1C0||1 Byte|Zell Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1C1||1 Byte|Zell Magic Slot 25 Quantity|
|FF8_EN.exe+18FE1C2||1 Byte|Zell Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1C3||1 Byte|Zell Magic Slot 26 Quantity|
|FF8_EN.exe+18FE1C4||1 Byte|Zell Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1C5||1 Byte|Zell Magic Slot 27 Quantity|
|FF8_EN.exe+18FE1C6||1 Byte|Zell Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1C7||1 Byte|Zell Magic Slot 28 Quantity|
|FF8_EN.exe+18FE1C8||1 Byte|Zell Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1C9||1 Byte|Zell Magic Slot 29 Quantity|
|FF8_EN.exe+18FE1CA||1 Byte|Zell Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1CB||1 Byte|Zell Magic Slot 30 Quantity|
|FF8_EN.exe+18FE1CC||1 Byte|Zell Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1CD||1 Byte|Zell Magic Slot 31 Quantity|
|FF8_EN.exe+18FE1CE||1 Byte|Zell Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE1CF||1 Byte|Zell Magic Slot 32 Quantity|
|FF8_EN.exe+18FE1D0||1 Byte|Zell Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE1D1||1 Byte|Zell Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE1D2||1 Byte|Zell Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE1D3||1 Byte|Zell Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE1D4||1 Byte|Zell Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE1D5||1 Byte|Zell Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE1D6||1 Byte|Zell Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE1DC||1 Byte|Zell Junction Vitality|
|FF8_EN.exe+18FE1DD||1 Byte|Zell Junction Strength|
|FF8_EN.exe+18FE1DE||1 Byte|Zell Junction Resistance|
|FF8_EN.exe+18FE1DF||1 Byte|Zell Junction Magic Power|
|FF8_EN.exe+18FE1E0||1 Byte|Zell Junction Spirit|
|FF8_EN.exe+18FE1E5||1 Byte|Zell Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE1E6||1 Byte|Zell Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE1E7||1 Byte|Zell Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE1E8||1 Byte|Zell Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE1EB||1 Byte|Zell Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE1EC||1 Byte|Zell Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE1EE||1 Byte|Zell Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE1EF||1 Byte|Zell Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE1F0||2 Bytes|Zell Quezacotl Compatibility|
|FF8_EN.exe+18FE1F2||2 Bytes|Zell Shiva Compatibility|
|FF8_EN.exe+18FE1F4||2 Bytes|Zell Ifrit Compatibility|
|FF8_EN.exe+18FE1F6||2 Bytes|Zell Siren Compatibility|
|FF8_EN.exe+18FE1F8||2 Bytes|Zell Brothers Compatibility|
|FF8_EN.exe+18FE1FA||2 Bytes|Zell Diablos Compatibility|
|FF8_EN.exe+18FE1FC||2 Bytes|Zell Carbuncle Compatibility|
|FF8_EN.exe+18FE1FE||2 Bytes|Zell Leviathan Compatibility|
|FF8_EN.exe+18FE200||2 Bytes|Zell Pandemona Compatibility|
|FF8_EN.exe+18FE202||2 Bytes|Zell Cerberus Compatibility|
|FF8_EN.exe+18FE204||2 Bytes|Zell Alexander Compatibility|
|FF8_EN.exe+18FE206||2 Bytes|Zell Doomtrain Compatibility|
|FF8_EN.exe+18FE208||2 Bytes|Zell Bahamut Compatibility|
|FF8_EN.exe+18FE20A||2 Bytes|Zell Cactuar Compatibility|
|FF8_EN.exe+18FE20C||2 Bytes|Zell Tonberry Compatibility|
|FF8_EN.exe+18FE20E||2 Bytes|Zell Eden Compatibility|
|FF8_EN.exe+18FE210||2 Bytes|Zell Kill Counter|
|FF8_EN.exe+18FE212||2 Bytes|Zell KO Counter|
|FF8_EN.exe+18FE218||2 Bytes|Irvine Current HP|
|FF8_EN.exe+18FE21A||2 Bytes|Irvine HP Modifier|
|FF8_EN.exe+18FE21C||4 Bytes|Irvine EXP Earned (Affects Level)|
|FF8_EN.exe+18FE222||1 Byte|Irvine STR Modifier|
|FF8_EN.exe+18FE223||1 Byte|Irvine VIT Modifier|
|FF8_EN.exe+18FE224||1 Byte|Irvine MAG Modifier|
|FF8_EN.exe+18FE225||1 Byte|Irvine SPR Modifier|
|FF8_EN.exe+18FE226||1 Byte|Irvine SPD Modifier|
|FF8_EN.exe+18FE227||1 Byte|Irvine LCK Modifier|
|FF8_EN.exe+18FE228||1 Byte|Irvine Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE229||1 Byte|Irvine Magic Slot 1 Quantity|
|FF8_EN.exe+18FE22A||1 Byte|Irvine Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE22B||1 Byte|Irvine Magic Slot 2 Quantity|
|FF8_EN.exe+18FE22C||1 Byte|Irvine Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE22D||1 Byte|Irvine Magic Slot 3 Quantity|
|FF8_EN.exe+18FE22E||1 Byte|Irvine Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE22F||1 Byte|Irvine Magic Slot 4 Quantity|
|FF8_EN.exe+18FE230||1 Byte|Irvine Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE231||1 Byte|Irvine Magic Slot 5 Quantity|
|FF8_EN.exe+18FE232||1 Byte|Irvine Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE233||1 Byte|Irvine Magic Slot 6 Quantity|
|FF8_EN.exe+18FE234||1 Byte|Irvine Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE235||1 Byte|Irvine Magic Slot 7 Quantity|
|FF8_EN.exe+18FE236||1 Byte|Irvine Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE237||1 Byte|Irvine Magic Slot 8 Quantity|
|FF8_EN.exe+18FE238||1 Byte|Irvine Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE239||1 Byte|Irvine Magic Slot 9 Quantity|
|FF8_EN.exe+18FE23A||1 Byte|Irvine Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE23B||1 Byte|Irvine Magic Slot 10 Quantity|
|FF8_EN.exe+18FE23C||1 Byte|Irvine Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE23D||1 Byte|Irvine Magic Slot 11 Quantity|
|FF8_EN.exe+18FE23E||1 Byte|Irvine Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE23F||1 Byte|Irvine Magic Slot 12 Quantity|
|FF8_EN.exe+18FE240||1 Byte|Irvine Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE241||1 Byte|Irvine Magic Slot 13 Quantity|
|FF8_EN.exe+18FE242||1 Byte|Irvine Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE243||1 Byte|Irvine Magic Slot 14 Quantity|
|FF8_EN.exe+18FE244||1 Byte|Irvine Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE245||1 Byte|Irvine Magic Slot 15 Quantity|
|FF8_EN.exe+18FE246||1 Byte|Irvine Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE247||1 Byte|Irvine Magic Slot 16 Quantity|
|FF8_EN.exe+18FE248||1 Byte|Irvine Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE249||1 Byte|Irvine Magic Slot 17 Quantity|
|FF8_EN.exe+18FE24A||1 Byte|Irvine Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE24B||1 Byte|Irvine Magic Slot 18 Quantity|
|FF8_EN.exe+18FE24C||1 Byte|Irvine Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE24D||1 Byte|Irvine Magic Slot 19 Quantity|
|FF8_EN.exe+18FE24E||1 Byte|Irvine Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE24F||1 Byte|Irvine Magic Slot 20 Quantity|
|FF8_EN.exe+18FE250||1 Byte|Irvine Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE251||1 Byte|Irvine Magic Slot 21 Quantity|
|FF8_EN.exe+18FE252||1 Byte|Irvine Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE253||1 Byte|Irvine Magic Slot 22 Quantity|
|FF8_EN.exe+18FE254||1 Byte|Irvine Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE255||1 Byte|Irvine Magic Slot 23 Quantity|
|FF8_EN.exe+18FE256||1 Byte|Irvine Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE257||1 Byte|Irvine Magic Slot 24 Quantity|
|FF8_EN.exe+18FE258||1 Byte|Irvine Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE259||1 Byte|Irvine Magic Slot 25 Quantity|
|FF8_EN.exe+18FE25A||1 Byte|Irvine Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE25B||1 Byte|Irvine Magic Slot 26 Quantity|
|FF8_EN.exe+18FE25C||1 Byte|Irvine Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE25D||1 Byte|Irvine Magic Slot 27 Quantity|
|FF8_EN.exe+18FE25E||1 Byte|Irvine Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE25F||1 Byte|Irvine Magic Slot 28 Quantity|
|FF8_EN.exe+18FE260||1 Byte|Irvine Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE261||1 Byte|Irvine Magic Slot 29 Quantity|
|FF8_EN.exe+18FE262||1 Byte|Irvine Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE263||1 Byte|Irvine Magic Slot 30 Quantity|
|FF8_EN.exe+18FE264||1 Byte|Irvine Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE265||1 Byte|Irvine Magic Slot 31 Quantity|
|FF8_EN.exe+18FE266||1 Byte|Irvine Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE267||1 Byte|Irvine Magic Slot 32 Quantity|
|FF8_EN.exe+18FE268||1 Byte|Irvine Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE269||1 Byte|Irvine Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE26A||1 Byte|Irvine Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE26B||1 Byte|Irvine Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE26C||1 Byte|Irvine Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE26D||1 Byte|Irvine Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE26E||1 Byte|Irvine Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE274||1 Byte|Irvine Junction Vitality|
|FF8_EN.exe+18FE275||1 Byte|Irvine Junction Strength|
|FF8_EN.exe+18FE276||1 Byte|Irvine Junction Resistance|
|FF8_EN.exe+18FE277||1 Byte|Irvine Junction Magic Power|
|FF8_EN.exe+18FE278||1 Byte|Irvine Junction Spirit|
|FF8_EN.exe+18FE27D||1 Byte|Irvine Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE27E||1 Byte|Irvine Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE27F||1 Byte|Irvine Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE280||1 Byte|Irvine Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE283||1 Byte|Irvine Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE284||1 Byte|Irvine Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE285||1 Byte|Irvine Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE286||1 Byte|Irvine Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE288||2 Bytes|Irvine Quezacotl Compatibility|
|FF8_EN.exe+18FE28A||2 Bytes|Irvine Shiva Compatibility|
|FF8_EN.exe+18FE28C||2 Bytes|Irvine Ifrit Compatibility|
|FF8_EN.exe+18FE28E||2 Bytes|Irvine Siren Compatibility|
|FF8_EN.exe+18FE290||2 Bytes|Irvine Brothers Compatibility|
|FF8_EN.exe+18FE292||2 Bytes|Irvine Diablos Compatibility|
|FF8_EN.exe+18FE294||2 Bytes|Irvine Carbuncle Compatibility|
|FF8_EN.exe+18FE296||2 Bytes|Irvine Leviathan Compatibility|
|FF8_EN.exe+18FE298||2 Bytes|Irvine Pandemona Compatibility|
|FF8_EN.exe+18FE29A||2 Bytes|Irvine Cerberus Compatibility|
|FF8_EN.exe+18FE29C||2 Bytes|Irvine Alexander Compatibility|
|FF8_EN.exe+18FE29E||2 Bytes|Irvine Doomtrain Compatibility|
|FF8_EN.exe+18FE2A0||2 Bytes|Irvine Bahamut Compatibility|
|FF8_EN.exe+18FE2A2||2 Bytes|Irvine Cactuar Compatibility|
|FF8_EN.exe+18FE2A4||2 Bytes|Irvine Tonberry Compatibility|
|FF8_EN.exe+18FE2A6||2 Bytes|Irvine Eden Compatibility|
|FF8_EN.exe+18FE2A8||2 Bytes|Irvine Kill Counter|
|FF8_EN.exe+18FE2AA||2 Bytes|Irvine KO Counter|
|FF8_EN.exe+18FE2B0||2 Bytes|Quistis Current HP|
|FF8_EN.exe+18FE2B2||2 Bytes|Quistis HP Modifier|
|FF8_EN.exe+18FE2B4||4 Bytes|Quistis EXP Earned (Affects Level)|
|FF8_EN.exe+18FE2BA||1 Byte|Quistis STR Modifier|
|FF8_EN.exe+18FE2BB||1 Byte|Quistis VIT Modifier|
|FF8_EN.exe+18FE2BC||1 Byte|Quistis MAG Modifier|
|FF8_EN.exe+18FE2BD||1 Byte|Quistis SPR Modifier|
|FF8_EN.exe+18FE2BE||1 Byte|Quistis SPD Modifier|
|FF8_EN.exe+18FE2BF||1 Byte|Quistis LCK Modifier|
|FF8_EN.exe+18FE2C0||1 Byte|Quistis Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2C1||1 Byte|Quistis Magic Slot 1 Quantity|
|FF8_EN.exe+18FE2C2||1 Byte|Quistis Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2C3||1 Byte|Quistis Magic Slot 2 Quantity|
|FF8_EN.exe+18FE2C4||1 Byte|Quistis Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2C5||1 Byte|Quistis Magic Slot 3 Quantity|
|FF8_EN.exe+18FE2C6||1 Byte|Quistis Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2C7||1 Byte|Quistis Magic Slot 4 Quantity|
|FF8_EN.exe+18FE2C8||1 Byte|Quistis Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2C9||1 Byte|Quistis Magic Slot 5 Quantity|
|FF8_EN.exe+18FE2CA||1 Byte|Quistis Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2CB||1 Byte|Quistis Magic Slot 6 Quantity|
|FF8_EN.exe+18FE2CC||1 Byte|Quistis Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2CD||1 Byte|Quistis Magic Slot 7 Quantity|
|FF8_EN.exe+18FE2CE||1 Byte|Quistis Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2CF||1 Byte|Quistis Magic Slot 8 Quantity|
|FF8_EN.exe+18FE2D0||1 Byte|Quistis Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2D1||1 Byte|Quistis Magic Slot 9 Quantity|
|FF8_EN.exe+18FE2D2||1 Byte|Quistis Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2D3||1 Byte|Quistis Magic Slot 10 Quantity|
|FF8_EN.exe+18FE2D4||1 Byte|Quistis Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2D5||1 Byte|Quistis Magic Slot 11 Quantity|
|FF8_EN.exe+18FE2D6||1 Byte|Quistis Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2D7||1 Byte|Quistis Magic Slot 12 Quantity|
|FF8_EN.exe+18FE2D8||1 Byte|Quistis Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2D9||1 Byte|Quistis Magic Slot 13 Quantity|
|FF8_EN.exe+18FE2DA||1 Byte|Quistis Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2DB||1 Byte|Quistis Magic Slot 14 Quantity|
|FF8_EN.exe+18FE2DC||1 Byte|Quistis Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2DD||1 Byte|Quistis Magic Slot 15 Quantity|
|FF8_EN.exe+18FE2DE||1 Byte|Quistis Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2DF||1 Byte|Quistis Magic Slot 16 Quantity|
|FF8_EN.exe+18FE2E0||1 Byte|Quistis Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2E1||1 Byte|Quistis Magic Slot 17 Quantity|
|FF8_EN.exe+18FE2E2||1 Byte|Quistis Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2E3||1 Byte|Quistis Magic Slot 18 Quantity|
|FF8_EN.exe+18FE2E4||1 Byte|Quistis Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2E5||1 Byte|Quistis Magic Slot 19 Quantity|
|FF8_EN.exe+18FE2E6||1 Byte|Quistis Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2E7||1 Byte|Quistis Magic Slot 20 Quantity|
|FF8_EN.exe+18FE2E8||1 Byte|Quistis Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2E9||1 Byte|Quistis Magic Slot 21 Quantity|
|FF8_EN.exe+18FE2EA||1 Byte|Quistis Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2EB||1 Byte|Quistis Magic Slot 22 Quantity|
|FF8_EN.exe+18FE2EC||1 Byte|Quistis Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2ED||1 Byte|Quistis Magic Slot 23 Quantity|
|FF8_EN.exe+18FE2EE||1 Byte|Quistis Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2EF||1 Byte|Quistis Magic Slot 24 Quantity|
|FF8_EN.exe+18FE2F0||1 Byte|Quistis Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2F1||1 Byte|Quistis Magic Slot 25 Quantity|
|FF8_EN.exe+18FE2F2||1 Byte|Quistis Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2F3||1 Byte|Quistis Magic Slot 26 Quantity|
|FF8_EN.exe+18FE2F4||1 Byte|Quistis Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2F5||1 Byte|Quistis Magic Slot 27 Quantity|
|FF8_EN.exe+18FE2F6||1 Byte|Quistis Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2F7||1 Byte|Quistis Magic Slot 28 Quantity|
|FF8_EN.exe+18FE2F8||1 Byte|Quistis Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2F9||1 Byte|Quistis Magic Slot 29 Quantity|
|FF8_EN.exe+18FE2FA||1 Byte|Quistis Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2FB||1 Byte|Quistis Magic Slot 30 Quantity|
|FF8_EN.exe+18FE2FC||1 Byte|Quistis Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2FD||1 Byte|Quistis Magic Slot 31 Quantity|
|FF8_EN.exe+18FE2FE||1 Byte|Quistis Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE2FF||1 Byte|Quistis Magic Slot 32 Quantity|
|FF8_EN.exe+18FE300||1 Byte|Quistis Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE301||1 Byte|Quistis Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE302||1 Byte|Quistis Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE303||1 Byte|Quistis Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE304||1 Byte|Quistis Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE305||1 Byte|Quistis Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE306||1 Byte|Quistis Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE30C||1 Byte|Quistis Junction Vitality|
|FF8_EN.exe+18FE30D||1 Byte|Quistis Junction Strength|
|FF8_EN.exe+18FE30E||1 Byte|Quistis Junction Resistance|
|FF8_EN.exe+18FE30F||1 Byte|Quistis Junction Magic Power|
|FF8_EN.exe+18FE310||1 Byte|Quistis Junction Spirit|
|FF8_EN.exe+18FE315||1 Byte|Quistis Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE316||1 Byte|Quistis Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE317||1 Byte|Quistis Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE318||1 Byte|Quistis Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE31B||1 Byte|Quistis Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE31C||1 Byte|Quistis Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE31D||1 Byte|Quistis Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE31E||1 Byte|Quistis Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE320||2 Bytes|Quistis Quezacotl Compatibility|
|FF8_EN.exe+18FE322||2 Bytes|Quistis Shiva Compatibility|
|FF8_EN.exe+18FE324||2 Bytes|Quistis Ifrit Compatibility|
|FF8_EN.exe+18FE326||2 Bytes|Quistis Siren Compatibility|
|FF8_EN.exe+18FE328||2 Bytes|Quistis Brothers Compatibility|
|FF8_EN.exe+18FE32A||2 Bytes|Quistis Diablos Compatibility|
|FF8_EN.exe+18FE32C||2 Bytes|Quistis Carbuncle Compatibility|
|FF8_EN.exe+18FE32E||2 Bytes|Quistis Leviathan Compatibility|
|FF8_EN.exe+18FE330||2 Bytes|Quistis Pandemona Compatibility|
|FF8_EN.exe+18FE332||2 Bytes|Quistis Cerberus Compatibility|
|FF8_EN.exe+18FE334||2 Bytes|Quistis Alexander Compatibility|
|FF8_EN.exe+18FE336||2 Bytes|Quistis Doomtrain Compatibility|
|FF8_EN.exe+18FE338||2 Bytes|Quistis Bahamut Compatibility|
|FF8_EN.exe+18FE33A||2 Bytes|Quistis Cactuar Compatibility|
|FF8_EN.exe+18FE33C||2 Bytes|Quistis Tonberry Compatibility|
|FF8_EN.exe+18FE33E||2 Bytes|Quistis Eden Compatibility|
|FF8_EN.exe+18FE340||2 Bytes|Quistis Kill Counter|
|FF8_EN.exe+18FE342||2 Bytes|Quistis KO Counter|
|FF8_EN.exe+18FE348||2 Bytes|Rinoa Current HP|
|FF8_EN.exe+18FE34A||2 Bytes|Rinoa HP Modifier|
|FF8_EN.exe+18FE34C||4 Bytes|Rinoa EXP Earned (Affects Level)|
|FF8_EN.exe+18FE352||1 Byte|Rinoa STR Modifier|
|FF8_EN.exe+18FE353||1 Byte|Rinoa VIT Modifier|
|FF8_EN.exe+18FE354||1 Byte|Rinoa MAG Modifier|
|FF8_EN.exe+18FE355||1 Byte|Rinoa SPR Modifier|
|FF8_EN.exe+18FE356||1 Byte|Rinoa SPD Modifier|
|FF8_EN.exe+18FE357||1 Byte|Rinoa LCK Modifier|
|FF8_EN.exe+18FE358||1 Byte|Rinoa Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE359||1 Byte|Rinoa Magic Slot 1 Quantity|
|FF8_EN.exe+18FE35A||1 Byte|Rinoa Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE35B||1 Byte|Rinoa Magic Slot 2 Quantity|
|FF8_EN.exe+18FE35C||1 Byte|Rinoa Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE35D||1 Byte|Rinoa Magic Slot 3 Quantity|
|FF8_EN.exe+18FE35E||1 Byte|Rinoa Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE35F||1 Byte|Rinoa Magic Slot 4 Quantity|
|FF8_EN.exe+18FE360||1 Byte|Rinoa Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE361||1 Byte|Rinoa Magic Slot 5 Quantity|
|FF8_EN.exe+18FE362||1 Byte|Rinoa Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE363||1 Byte|Rinoa Magic Slot 6 Quantity|
|FF8_EN.exe+18FE364||1 Byte|Rinoa Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE365||1 Byte|Rinoa Magic Slot 7 Quantity|
|FF8_EN.exe+18FE366||1 Byte|Rinoa Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE367||1 Byte|Rinoa Magic Slot 8 Quantity|
|FF8_EN.exe+18FE368||1 Byte|Rinoa Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE369||1 Byte|Rinoa Magic Slot 9 Quantity|
|FF8_EN.exe+18FE36A||1 Byte|Rinoa Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE36B||1 Byte|Rinoa Magic Slot 10 Quantity|
|FF8_EN.exe+18FE36C||1 Byte|Rinoa Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE36D||1 Byte|Rinoa Magic Slot 11 Quantity|
|FF8_EN.exe+18FE36E||1 Byte|Rinoa Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE36F||1 Byte|Rinoa Magic Slot 12 Quantity|
|FF8_EN.exe+18FE370||1 Byte|Rinoa Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE371||1 Byte|Rinoa Magic Slot 13 Quantity|
|FF8_EN.exe+18FE372||1 Byte|Rinoa Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE373||1 Byte|Rinoa Magic Slot 14 Quantity|
|FF8_EN.exe+18FE374||1 Byte|Rinoa Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE375||1 Byte|Rinoa Magic Slot 15 Quantity|
|FF8_EN.exe+18FE376||1 Byte|Rinoa Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE377||1 Byte|Rinoa Magic Slot 16 Quantity|
|FF8_EN.exe+18FE378||1 Byte|Rinoa Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE379||1 Byte|Rinoa Magic Slot 17 Quantity|
|FF8_EN.exe+18FE37A||1 Byte|Rinoa Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE37B||1 Byte|Rinoa Magic Slot 18 Quantity|
|FF8_EN.exe+18FE37C||1 Byte|Rinoa Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE37D||1 Byte|Rinoa Magic Slot 19 Quantity|
|FF8_EN.exe+18FE37E||1 Byte|Rinoa Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE37F||1 Byte|Rinoa Magic Slot 20 Quantity|
|FF8_EN.exe+18FE380||1 Byte|Rinoa Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE381||1 Byte|Rinoa Magic Slot 21 Quantity|
|FF8_EN.exe+18FE382||1 Byte|Rinoa Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE383||1 Byte|Rinoa Magic Slot 22 Quantity|
|FF8_EN.exe+18FE384||1 Byte|Rinoa Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE385||1 Byte|Rinoa Magic Slot 23 Quantity|
|FF8_EN.exe+18FE386||1 Byte|Rinoa Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE387||1 Byte|Rinoa Magic Slot 24 Quantity|
|FF8_EN.exe+18FE388||1 Byte|Rinoa Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE389||1 Byte|Rinoa Magic Slot 25 Quantity|
|FF8_EN.exe+18FE38A||1 Byte|Rinoa Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE38B||1 Byte|Rinoa Magic Slot 26 Quantity|
|FF8_EN.exe+18FE38C||1 Byte|Rinoa Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE38D||1 Byte|Rinoa Magic Slot 27 Quantity|
|FF8_EN.exe+18FE38E||1 Byte|Rinoa Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE38F||1 Byte|Rinoa Magic Slot 28 Quantity|
|FF8_EN.exe+18FE390||1 Byte|Rinoa Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE391||1 Byte|Rinoa Magic Slot 29 Quantity|
|FF8_EN.exe+18FE392||1 Byte|Rinoa Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE393||1 Byte|Rinoa Magic Slot 30 Quantity|
|FF8_EN.exe+18FE394||1 Byte|Rinoa Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE395||1 Byte|Rinoa Magic Slot 31 Quantity|
|FF8_EN.exe+18FE396||1 Byte|Rinoa Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE397||1 Byte|Rinoa Magic Slot 32 Quantity|
|FF8_EN.exe+18FE398||1 Byte|Rinoa Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE399||1 Byte|Rinoa Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE39A||1 Byte|Rinoa Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE39B||1 Byte|Rinoa Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE39C||1 Byte|Rinoa Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE39D||1 Byte|Rinoa Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE39E||1 Byte|Rinoa Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE3A4||1 Byte|Rinoa Junction Vitality|
|FF8_EN.exe+18FE3A5||1 Byte|Rinoa Junction Strength|
|FF8_EN.exe+18FE3A6||1 Byte|Rinoa Junction Resistance|
|FF8_EN.exe+18FE3A7||1 Byte|Rinoa Junction Magic Power|
|FF8_EN.exe+18FE3A8||1 Byte|Rinoa Junction Spirit|
|FF8_EN.exe+18FE3AD||1 Byte|Rinoa Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE3AE||1 Byte|Rinoa Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE3AF||1 Byte|Rinoa Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE3B0||1 Byte|Rinoa Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE3B3||1 Byte|Rinoa Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE3B4||1 Byte|Rinoa Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE3B5||1 Byte|Rinoa Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE3B6||1 Byte|Rinoa Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE3B8||2 Bytes|Rinoa Quezacotl Compatibility|
|FF8_EN.exe+18FE3BA||2 Bytes|Rinoa Shiva Compatibility|
|FF8_EN.exe+18FE3BC||2 Bytes|Rinoa Ifrit Compatibility|
|FF8_EN.exe+18FE3BE||2 Bytes|Rinoa Siren Compatibility|
|FF8_EN.exe+18FE3C0||2 Bytes|Rinoa Brothers Compatibility|
|FF8_EN.exe+18FE3C2||2 Bytes|Rinoa Diablos Compatibility|
|FF8_EN.exe+18FE3C4||2 Bytes|Rinoa Carbuncle Compatibility|
|FF8_EN.exe+18FE3C6||2 Bytes|Rinoa Leviathan Compatibility|
|FF8_EN.exe+18FE3C8||2 Bytes|Rinoa Pandemona Compatibility|
|FF8_EN.exe+18FE3CA||2 Bytes|Rinoa Cerberus Compatibility|
|FF8_EN.exe+18FE3CC||2 Bytes|Rinoa Alexander Compatibility|
|FF8_EN.exe+18FE3CE||2 Bytes|Rinoa Doomtrain Compatibility|
|FF8_EN.exe+18FE3D0||2 Bytes|Rinoa Bahamut Compatibility|
|FF8_EN.exe+18FE3D2||2 Bytes|Rinoa Cactuar Compatibility|
|FF8_EN.exe+18FE3D4||2 Bytes|Rinoa Tonberry Compatibility|
|FF8_EN.exe+18FE3D6||2 Bytes|Rinoa Eden Compatibility|
|FF8_EN.exe+18FE3D8||2 Bytes|Rinoa Kill Counter|
|FF8_EN.exe+18FE3DA||2 Bytes|Rinoa KO Counter|
|FF8_EN.exe+18FE3E0||2 Bytes|Selphie Current HP|
|FF8_EN.exe+18FE3E2||2 Bytes|Selphie HP Modifier|
|FF8_EN.exe+18FE3E4||4 Bytes|Selphie EXP Earned (Affects Level)|
|FF8_EN.exe+18FE3EA||1 Byte|Selphie STR Modifier|
|FF8_EN.exe+18FE3EB||1 Byte|Selphie VIT Modifier|
|FF8_EN.exe+18FE3EC||1 Byte|Selphie MAG Modifier|
|FF8_EN.exe+18FE3ED||1 Byte|Selphie SPR Modifier|
|FF8_EN.exe+18FE3EE||1 Byte|Selphie SPD Modifier|
|FF8_EN.exe+18FE3EF||1 Byte|Selphie LCK Modifier|
|FF8_EN.exe+18FE3F0||1 Byte|Selphie Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3F1||1 Byte|Selphie Magic Slot 1 Quantity|
|FF8_EN.exe+18FE3F2||1 Byte|Selphie Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3F3||1 Byte|Selphie Magic Slot 2 Quantity|
|FF8_EN.exe+18FE3F4||1 Byte|Selphie Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3F5||1 Byte|Selphie Magic Slot 3 Quantity|
|FF8_EN.exe+18FE3F6||1 Byte|Selphie Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3F7||1 Byte|Selphie Magic Slot 4 Quantity|
|FF8_EN.exe+18FE3F8||1 Byte|Selphie Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3F9||1 Byte|Selphie Magic Slot 5 Quantity|
|FF8_EN.exe+18FE3FA||1 Byte|Selphie Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3FB||1 Byte|Selphie Magic Slot 6 Quantity|
|FF8_EN.exe+18FE3FC||1 Byte|Selphie Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3FD||1 Byte|Selphie Magic Slot 7 Quantity|
|FF8_EN.exe+18FE3FE||1 Byte|Selphie Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE3FF||1 Byte|Selphie Magic Slot 8 Quantity|
|FF8_EN.exe+18FE400||1 Byte|Selphie Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE401||1 Byte|Selphie Magic Slot 9 Quantity|
|FF8_EN.exe+18FE402||1 Byte|Selphie Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE403||1 Byte|Selphie Magic Slot 10 Quantity|
|FF8_EN.exe+18FE404||1 Byte|Selphie Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE405||1 Byte|Selphie Magic Slot 11 Quantity|
|FF8_EN.exe+18FE406||1 Byte|Selphie Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE407||1 Byte|Selphie Magic Slot 12 Quantity|
|FF8_EN.exe+18FE408||1 Byte|Selphie Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE409||1 Byte|Selphie Magic Slot 13 Quantity|
|FF8_EN.exe+18FE40A||1 Byte|Selphie Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE40B||1 Byte|Selphie Magic Slot 14 Quantity|
|FF8_EN.exe+18FE40C||1 Byte|Selphie Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE40D||1 Byte|Selphie Magic Slot 15 Quantity|
|FF8_EN.exe+18FE40E||1 Byte|Selphie Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE40F||1 Byte|Selphie Magic Slot 16 Quantity|
|FF8_EN.exe+18FE410||1 Byte|Selphie Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE411||1 Byte|Selphie Magic Slot 17 Quantity|
|FF8_EN.exe+18FE412||1 Byte|Selphie Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE413||1 Byte|Selphie Magic Slot 18 Quantity|
|FF8_EN.exe+18FE414||1 Byte|Selphie Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE415||1 Byte|Selphie Magic Slot 19 Quantity|
|FF8_EN.exe+18FE416||1 Byte|Selphie Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE417||1 Byte|Selphie Magic Slot 20 Quantity|
|FF8_EN.exe+18FE418||1 Byte|Selphie Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE419||1 Byte|Selphie Magic Slot 21 Quantity|
|FF8_EN.exe+18FE41A||1 Byte|Selphie Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE41B||1 Byte|Selphie Magic Slot 22 Quantity|
|FF8_EN.exe+18FE41C||1 Byte|Selphie Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE41D||1 Byte|Selphie Magic Slot 23 Quantity|
|FF8_EN.exe+18FE41E||1 Byte|Selphie Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE41F||1 Byte|Selphie Magic Slot 24 Quantity|
|FF8_EN.exe+18FE420||1 Byte|Selphie Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE421||1 Byte|Selphie Magic Slot 25 Quantity|
|FF8_EN.exe+18FE422||1 Byte|Selphie Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE423||1 Byte|Selphie Magic Slot 26 Quantity|
|FF8_EN.exe+18FE424||1 Byte|Selphie Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE425||1 Byte|Selphie Magic Slot 27 Quantity|
|FF8_EN.exe+18FE426||1 Byte|Selphie Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE427||1 Byte|Selphie Magic Slot 28 Quantity|
|FF8_EN.exe+18FE428||1 Byte|Selphie Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE429||1 Byte|Selphie Magic Slot 29 Quantity|
|FF8_EN.exe+18FE42A||1 Byte|Selphie Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE42B||1 Byte|Selphie Magic Slot 30 Quantity|
|FF8_EN.exe+18FE42C||1 Byte|Selphie Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE42D||1 Byte|Selphie Magic Slot 31 Quantity|
|FF8_EN.exe+18FE42E||1 Byte|Selphie Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE42F||1 Byte|Selphie Magic Slot 32 Quantity|
|FF8_EN.exe+18FE430||1 Byte|Selphie Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE431||1 Byte|Selphie Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE432||1 Byte|Selphie Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE433||1 Byte|Selphie Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE434||1 Byte|Selphie Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE435||1 Byte|Selphie Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE436||1 Byte|Selphie Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE43C||1 Byte|Selphie Junction Vitality|
|FF8_EN.exe+18FE43D||1 Byte|Selphie Junction Strength|
|FF8_EN.exe+18FE43E||1 Byte|Selphie Junction Resistance|
|FF8_EN.exe+18FE43F||1 Byte|Selphie Junction Magic Power|
|FF8_EN.exe+18FE440||1 Byte|Selphie Junction Spirit|
|FF8_EN.exe+18FE445||1 Byte|Selphie Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE446||1 Byte|Selphie Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE447||1 Byte|Selphie Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE448||1 Byte|Selphie Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE44B||1 Byte|Selphie Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE44C||1 Byte|Selphie Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE44D||1 Byte|Selphie Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE44E||1 Byte|Selphie Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE450||2 Bytes|Selphie Quezacotl Compatibility|
|FF8_EN.exe+18FE452||2 Bytes|Selphie Shiva Compatibility|
|FF8_EN.exe+18FE454||2 Bytes|Selphie Ifrit Compatibility|
|FF8_EN.exe+18FE456||2 Bytes|Selphie Siren Compatibility|
|FF8_EN.exe+18FE458||2 Bytes|Selphie Brothers Compatibility|
|FF8_EN.exe+18FE45A||2 Bytes|Selphie Diablos Compatibility|
|FF8_EN.exe+18FE45C||2 Bytes|Selphie Carbuncle Compatibility|
|FF8_EN.exe+18FE45E||2 Bytes|Selphie Leviathan Compatibility|
|FF8_EN.exe+18FE460||2 Bytes|Selphie Pandemona Compatibility|
|FF8_EN.exe+18FE462||2 Bytes|Selphie Cerberus Compatibility|
|FF8_EN.exe+18FE464||2 Bytes|Selphie Alexander Compatibility|
|FF8_EN.exe+18FE466||2 Bytes|Selphie Doomtrain Compatibility|
|FF8_EN.exe+18FE468||2 Bytes|Selphie Bahamut Compatibility|
|FF8_EN.exe+18FE46A||2 Bytes|Selphie Cactuar Compatibility|
|FF8_EN.exe+18FE46C||2 Bytes|Selphie Tonberry Compatibility|
|FF8_EN.exe+18FE46E||2 Bytes|Selphie Eden Compatibility|
|FF8_EN.exe+18FE470||2 Bytes|Selphie Kill Counter|
|FF8_EN.exe+18FE472||2 Bytes|Selphie KO Counter|
|FF8_EN.exe+18FE478||2 Bytes|Seifer Current HP|
|FF8_EN.exe+18FE47A||2 Bytes|Seifer HP Modifier|
|FF8_EN.exe+18FE47C||4 Bytes|Seifer EXP Earned (Affects Level)|
|FF8_EN.exe+18FE482||1 Byte|Seifer STR Modifier|
|FF8_EN.exe+18FE483||1 Byte|Seifer VIT Modifier|
|FF8_EN.exe+18FE484||1 Byte|Seifer MAG Modifier|
|FF8_EN.exe+18FE485||1 Byte|Seifer SPR Modifier|
|FF8_EN.exe+18FE486||1 Byte|Seifer SPD Modifier|
|FF8_EN.exe+18FE487||1 Byte|Seifer LCK Modifier|
|FF8_EN.exe+18FE488||1 Byte|Seifer Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE489||1 Byte|Seifer Magic Slot 1 Quantity|
|FF8_EN.exe+18FE48A||1 Byte|Seifer Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE48B||1 Byte|Seifer Magic Slot 2 Quantity|
|FF8_EN.exe+18FE48C||1 Byte|Seifer Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE48D||1 Byte|Seifer Magic Slot 3 Quantity|
|FF8_EN.exe+18FE48E||1 Byte|Seifer Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE48F||1 Byte|Seifer Magic Slot 4 Quantity|
|FF8_EN.exe+18FE490||1 Byte|Seifer Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE491||1 Byte|Seifer Magic Slot 5 Quantity|
|FF8_EN.exe+18FE492||1 Byte|Seifer Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE493||1 Byte|Seifer Magic Slot 6 Quantity|
|FF8_EN.exe+18FE494||1 Byte|Seifer Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE495||1 Byte|Seifer Magic Slot 7 Quantity|
|FF8_EN.exe+18FE496||1 Byte|Seifer Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE497||1 Byte|Seifer Magic Slot 8 Quantity|
|FF8_EN.exe+18FE498||1 Byte|Seifer Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE499||1 Byte|Seifer Magic Slot 9 Quantity|
|FF8_EN.exe+18FE49A||1 Byte|Seifer Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE49B||1 Byte|Seifer Magic Slot 10 Quantity|
|FF8_EN.exe+18FE49C||1 Byte|Seifer Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE49D||1 Byte|Seifer Magic Slot 11 Quantity|
|FF8_EN.exe+18FE49E||1 Byte|Seifer Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE49F||1 Byte|Seifer Magic Slot 12 Quantity|
|FF8_EN.exe+18FE4A0||1 Byte|Seifer Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4A1||1 Byte|Seifer Magic Slot 13 Quantity|
|FF8_EN.exe+18FE4A2||1 Byte|Seifer Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4A3||1 Byte|Seifer Magic Slot 14 Quantity|
|FF8_EN.exe+18FE4A4||1 Byte|Seifer Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4A5||1 Byte|Seifer Magic Slot 15 Quantity|
|FF8_EN.exe+18FE4A6||1 Byte|Seifer Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4A7||1 Byte|Seifer Magic Slot 16 Quantity|
|FF8_EN.exe+18FE4A8||1 Byte|Seifer Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4A9||1 Byte|Seifer Magic Slot 17 Quantity|
|FF8_EN.exe+18FE4AA||1 Byte|Seifer Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4AB||1 Byte|Seifer Magic Slot 18 Quantity|
|FF8_EN.exe+18FE4AC||1 Byte|Seifer Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4AD||1 Byte|Seifer Magic Slot 19 Quantity|
|FF8_EN.exe+18FE4AE||1 Byte|Seifer Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4AF||1 Byte|Seifer Magic Slot 20 Quantity|
|FF8_EN.exe+18FE4B0||1 Byte|Seifer Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4B1||1 Byte|Seifer Magic Slot 21 Quantity|
|FF8_EN.exe+18FE4B2||1 Byte|Seifer Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4B3||1 Byte|Seifer Magic Slot 22 Quantity|
|FF8_EN.exe+18FE4B4||1 Byte|Seifer Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4B5||1 Byte|Seifer Magic Slot 23 Quantity|
|FF8_EN.exe+18FE4B6||1 Byte|Seifer Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4B7||1 Byte|Seifer Magic Slot 24 Quantity|
|FF8_EN.exe+18FE4B8||1 Byte|Seifer Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4B9||1 Byte|Seifer Magic Slot 25 Quantity|
|FF8_EN.exe+18FE4BA||1 Byte|Seifer Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4BB||1 Byte|Seifer Magic Slot 26 Quantity|
|FF8_EN.exe+18FE4BC||1 Byte|Seifer Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4BD||1 Byte|Seifer Magic Slot 27 Quantity|
|FF8_EN.exe+18FE4BE||1 Byte|Seifer Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4BF||1 Byte|Seifer Magic Slot 28 Quantity|
|FF8_EN.exe+18FE4C0||1 Byte|Seifer Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4C1||1 Byte|Seifer Magic Slot 29 Quantity|
|FF8_EN.exe+18FE4C2||1 Byte|Seifer Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4C3||1 Byte|Seifer Magic Slot 30 Quantity|
|FF8_EN.exe+18FE4C4||1 Byte|Seifer Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4C5||1 Byte|Seifer Magic Slot 31 Quantity|
|FF8_EN.exe+18FE4C6||1 Byte|Seifer Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE4C7||1 Byte|Seifer Magic Slot 32 Quantity|
|FF8_EN.exe+18FE4C8||1 Byte|Seifer Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE4C9||1 Byte|Seifer Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE4CA||1 Byte|Seifer Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE4CB||1 Byte|Seifer Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE4CC||1 Byte|Seifer Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE4CD||1 Byte|Seifer Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE4CE||1 Byte|Seifer Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE4D4||1 Byte|Seifer Junction Vitality|
|FF8_EN.exe+18FE4D5||1 Byte|Seifer Junction Strength|
|FF8_EN.exe+18FE4D6||1 Byte|Seifer Junction Resistance|
|FF8_EN.exe+18FE4D7||1 Byte|Seifer Junction Magic Power|
|FF8_EN.exe+18FE4D8||1 Byte|Seifer Junction Spirit|
|FF8_EN.exe+18FE4DD||1 Byte|Seifer Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE4DE||1 Byte|Seifer Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE4DF||1 Byte|Seifer Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE4E0||1 Byte|Seifer Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE4E3||1 Byte|Seifer Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE4E4||1 Byte|Seifer Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE4E5||1 Byte|Seifer Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE4E6||1 Byte|Seifer Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE4E8||2 Bytes|Seifer Quezacotl Compatibility|
|FF8_EN.exe+18FE4EA||2 Bytes|Seifer Shiva Compatibility|
|FF8_EN.exe+18FE4EC||2 Bytes|Seifer Ifrit Compatibility|
|FF8_EN.exe+18FE4EE||2 Bytes|Seifer Siren Compatibility|
|FF8_EN.exe+18FE4F0||2 Bytes|Seifer Brothers Compatibility|
|FF8_EN.exe+18FE4F2||2 Bytes|Seifer Diablos Compatibility|
|FF8_EN.exe+18FE4F4||2 Bytes|Seifer Carbuncle Compatibility|
|FF8_EN.exe+18FE4F6||2 Bytes|Seifer Leviathan Compatibility|
|FF8_EN.exe+18FE4F8||2 Bytes|Seifer Pandemona Compatibility|
|FF8_EN.exe+18FE4FA||2 Bytes|Seifer Cerberus Compatibility|
|FF8_EN.exe+18FE4FC||2 Bytes|Seifer Alexander Compatibility|
|FF8_EN.exe+18FE4FE||2 Bytes|Seifer Doomtrain Compatibility|
|FF8_EN.exe+18FE500||2 Bytes|Seifer Bahamut Compatibility|
|FF8_EN.exe+18FE502||2 Bytes|Seifer Cactuar Compatibility|
|FF8_EN.exe+18FE504||2 Bytes|Seifer Tonberry Compatibility|
|FF8_EN.exe+18FE506||2 Bytes|Seifer Eden Compatibility|
|FF8_EN.exe+18FE508||2 Bytes|Seifer Kill Counter|
|FF8_EN.exe+18FE50A||2 Bytes|Seifer KO Counter|
|FF8_EN.exe+18FE510||2 Bytes|Edea Current HP|
|FF8_EN.exe+18FE512||2 Bytes|Edea HP Modifier|
|FF8_EN.exe+18FE514||4 Bytes|Edea EXP Earned (Affects Level)|
|FF8_EN.exe+18FE51A||1 Byte|Edea STR Modifier|
|FF8_EN.exe+18FE51B||1 Byte|Edea VIT Modifier|
|FF8_EN.exe+18FE51C||1 Byte|Edea MAG Modifier|
|FF8_EN.exe+18FE51D||1 Byte|Edea SPR Modifier|
|FF8_EN.exe+18FE51E||1 Byte|Edea SPD Modifier|
|FF8_EN.exe+18FE51F||1 Byte|Edea LCK Modifier|
|FF8_EN.exe+18FE520||1 Byte|Edea Magic Slot 1 [Spell ID](magic.md)|
|FF8_EN.exe+18FE521||1 Byte|Edea Magic Slot 1 Quantity|
|FF8_EN.exe+18FE522||1 Byte|Edea Magic Slot 2 [Spell ID](magic.md)|
|FF8_EN.exe+18FE523||1 Byte|Edea Magic Slot 2 Quantity|
|FF8_EN.exe+18FE524||1 Byte|Edea Magic Slot 3 [Spell ID](magic.md)|
|FF8_EN.exe+18FE525||1 Byte|Edea Magic Slot 3 Quantity|
|FF8_EN.exe+18FE526||1 Byte|Edea Magic Slot 4 [Spell ID](magic.md)|
|FF8_EN.exe+18FE527||1 Byte|Edea Magic Slot 4 Quantity|
|FF8_EN.exe+18FE528||1 Byte|Edea Magic Slot 5 [Spell ID](magic.md)|
|FF8_EN.exe+18FE529||1 Byte|Edea Magic Slot 5 Quantity|
|FF8_EN.exe+18FE52A||1 Byte|Edea Magic Slot 6 [Spell ID](magic.md)|
|FF8_EN.exe+18FE52B||1 Byte|Edea Magic Slot 6 Quantity|
|FF8_EN.exe+18FE52C||1 Byte|Edea Magic Slot 7 [Spell ID](magic.md)|
|FF8_EN.exe+18FE52D||1 Byte|Edea Magic Slot 7 Quantity|
|FF8_EN.exe+18FE52E||1 Byte|Edea Magic Slot 8 [Spell ID](magic.md)|
|FF8_EN.exe+18FE52F||1 Byte|Edea Magic Slot 8 Quantity|
|FF8_EN.exe+18FE530||1 Byte|Edea Magic Slot 9 [Spell ID](magic.md)|
|FF8_EN.exe+18FE531||1 Byte|Edea Magic Slot 9 Quantity|
|FF8_EN.exe+18FE532||1 Byte|Edea Magic Slot 10 [Spell ID](magic.md)|
|FF8_EN.exe+18FE533||1 Byte|Edea Magic Slot 10 Quantity|
|FF8_EN.exe+18FE534||1 Byte|Edea Magic Slot 11 [Spell ID](magic.md)|
|FF8_EN.exe+18FE535||1 Byte|Edea Magic Slot 11 Quantity|
|FF8_EN.exe+18FE536||1 Byte|Edea Magic Slot 12 [Spell ID](magic.md)|
|FF8_EN.exe+18FE537||1 Byte|Edea Magic Slot 12 Quantity|
|FF8_EN.exe+18FE538||1 Byte|Edea Magic Slot 13 [Spell ID](magic.md)|
|FF8_EN.exe+18FE539||1 Byte|Edea Magic Slot 13 Quantity|
|FF8_EN.exe+18FE53A||1 Byte|Edea Magic Slot 14 [Spell ID](magic.md)|
|FF8_EN.exe+18FE53B||1 Byte|Edea Magic Slot 14 Quantity|
|FF8_EN.exe+18FE53C||1 Byte|Edea Magic Slot 15 [Spell ID](magic.md)|
|FF8_EN.exe+18FE53D||1 Byte|Edea Magic Slot 15 Quantity|
|FF8_EN.exe+18FE53E||1 Byte|Edea Magic Slot 16 [Spell ID](magic.md)|
|FF8_EN.exe+18FE53F||1 Byte|Edea Magic Slot 16 Quantity|
|FF8_EN.exe+18FE540||1 Byte|Edea Magic Slot 17 [Spell ID](magic.md)|
|FF8_EN.exe+18FE541||1 Byte|Edea Magic Slot 17 Quantity|
|FF8_EN.exe+18FE542||1 Byte|Edea Magic Slot 18 [Spell ID](magic.md)|
|FF8_EN.exe+18FE543||1 Byte|Edea Magic Slot 18 Quantity|
|FF8_EN.exe+18FE544||1 Byte|Edea Magic Slot 19 [Spell ID](magic.md)|
|FF8_EN.exe+18FE545||1 Byte|Edea Magic Slot 19 Quantity|
|FF8_EN.exe+18FE546||1 Byte|Edea Magic Slot 20 [Spell ID](magic.md)|
|FF8_EN.exe+18FE547||1 Byte|Edea Magic Slot 20 Quantity|
|FF8_EN.exe+18FE548||1 Byte|Edea Magic Slot 21 [Spell ID](magic.md)|
|FF8_EN.exe+18FE549||1 Byte|Edea Magic Slot 21 Quantity|
|FF8_EN.exe+18FE54A||1 Byte|Edea Magic Slot 22 [Spell ID](magic.md)|
|FF8_EN.exe+18FE54B||1 Byte|Edea Magic Slot 22 Quantity|
|FF8_EN.exe+18FE54C||1 Byte|Edea Magic Slot 23 [Spell ID](magic.md)|
|FF8_EN.exe+18FE54D||1 Byte|Edea Magic Slot 23 Quantity|
|FF8_EN.exe+18FE54E||1 Byte|Edea Magic Slot 24 [Spell ID](magic.md)|
|FF8_EN.exe+18FE54F||1 Byte|Edea Magic Slot 24 Quantity|
|FF8_EN.exe+18FE550||1 Byte|Edea Magic Slot 25 [Spell ID](magic.md)|
|FF8_EN.exe+18FE551||1 Byte|Edea Magic Slot 25 Quantity|
|FF8_EN.exe+18FE552||1 Byte|Edea Magic Slot 26 [Spell ID](magic.md)|
|FF8_EN.exe+18FE553||1 Byte|Edea Magic Slot 26 Quantity|
|FF8_EN.exe+18FE554||1 Byte|Edea Magic Slot 27 [Spell ID](magic.md)|
|FF8_EN.exe+18FE555||1 Byte|Edea Magic Slot 27 Quantity|
|FF8_EN.exe+18FE556||1 Byte|Edea Magic Slot 28 [Spell ID](magic.md)|
|FF8_EN.exe+18FE557||1 Byte|Edea Magic Slot 28 Quantity|
|FF8_EN.exe+18FE558||1 Byte|Edea Magic Slot 29 [Spell ID](magic.md)|
|FF8_EN.exe+18FE559||1 Byte|Edea Magic Slot 29 Quantity|
|FF8_EN.exe+18FE55A||1 Byte|Edea Magic Slot 30 [Spell ID](magic.md)|
|FF8_EN.exe+18FE55B||1 Byte|Edea Magic Slot 30 Quantity|
|FF8_EN.exe+18FE55C||1 Byte|Edea Magic Slot 31 [Spell ID](magic.md)|
|FF8_EN.exe+18FE55D||1 Byte|Edea Magic Slot 31 Quantity|
|FF8_EN.exe+18FE55E||1 Byte|Edea Magic Slot 32 [Spell ID](magic.md)|
|FF8_EN.exe+18FE55F||1 Byte|Edea Magic Slot 32 Quantity|
|FF8_EN.exe+18FE560||1 Byte|Edea Equipped [Command](skills.md) 1|
|FF8_EN.exe+18FE561||1 Byte|Edea Equipped [Command](skills.md) 2|
|FF8_EN.exe+18FE562||1 Byte|Edea Equipped [Command](skills.md) 3|
|FF8_EN.exe+18FE563||1 Byte|Edea Equipped [Command](skills.md) 4|
|FF8_EN.exe+18FE564||1 Byte|Edea Equipped [Skill](skills.md) 1|
|FF8_EN.exe+18FE565||1 Byte|Edea Equipped [Skill](skills.md) 2|
|FF8_EN.exe+18FE566||1 Byte|Edea Equipped [Skill](skills.md) 3|
|FF8_EN.exe+18FE56C||1 Byte|Edea Junction Vitality|
|FF8_EN.exe+18FE56D||1 Byte|Edea Junction Strength|
|FF8_EN.exe+18FE56E||1 Byte|Edea Junction Resistance|
|FF8_EN.exe+18FE56F||1 Byte|Edea Junction Magic Power|
|FF8_EN.exe+18FE570||1 Byte|Edea Junction Spirit|
|FF8_EN.exe+18FE575||1 Byte|Edea Junction [Elm. Atk.](magic.md)|
|FF8_EN.exe+18FE576||1 Byte|Edea Junction [St. Atk.](magic.md)|
|FF8_EN.exe+18FE577||1 Byte|Edea Junction [Elm. Def.](magic.md) 1|
|FF8_EN.exe+18FE578||1 Byte|Edea Junction [Elm. Def.](magic.md) 2|
|FF8_EN.exe+18FE57B||1 Byte|Edea Junction [St. Def.](magic.md) 1|
|FF8_EN.exe+18FE57C||1 Byte|Edea Junction [St. Def.](magic.md) 2|
|FF8_EN.exe+18FE57D||1 Byte|Edea Junction [St. Def.](magic.md) 3|
|FF8_EN.exe+18FE57E||1 Byte|Edea Junction [St. Def.](magic.md) 4|
|FF8_EN.exe+18FE580||2 Bytes|Edea Quezacotl Compatibility|
|FF8_EN.exe+18FE582||2 Bytes|Edea Shiva Compatibility|
|FF8_EN.exe+18FE584||2 Bytes|Edea Ifrit Compatibility|
|FF8_EN.exe+18FE586||2 Bytes|Edea Siren Compatibility|
|FF8_EN.exe+18FE588||2 Bytes|Edea Brothers Compatibility|
|FF8_EN.exe+18FE58A||2 Bytes|Edea Diablos Compatibility|
|FF8_EN.exe+18FE58C||2 Bytes|Edea Carbuncle Compatibility|
|FF8_EN.exe+18FE58E||2 Bytes|Edea Leviathan Compatibility|
|FF8_EN.exe+18FE590||2 Bytes|Edea Pandemona Compatibility|
|FF8_EN.exe+18FE592||2 Bytes|Edea Cerberus Compatibility|
|FF8_EN.exe+18FE594||2 Bytes|Edea Alexander Compatibility|
|FF8_EN.exe+18FE596||2 Bytes|Edea Doomtrain Compatibility|
|FF8_EN.exe+18FE598||2 Bytes|Edea Bahamut Compatibility|
|FF8_EN.exe+18FE59A||2 Bytes|Edea Cactuar Compatibility|
|FF8_EN.exe+18FE59C||2 Bytes|Edea Tonberry Compatibility|
|FF8_EN.exe+18FE59E||2 Bytes|Edea Eden Compatibility|
|FF8_EN.exe+18FE5A0||2 Bytes|Edea Kill Counter|
|FF8_EN.exe+18FE5A2||2 Bytes|Edea KO Counter|
|FF8_EN.exe+18FE764||4 Bytes|Current Gil|
|FF8_EN.exe+18FE79C||1 Byte|[Item ID](items.md) in Slot 1 (Page 1, Slot 1)|
|FF8_EN.exe+18FE79D||1 Byte|Item Slot 1 Quantity|
|FF8_EN.exe+18FE79E||1 Byte|[Item ID](items.md) in Slot 2 (Page 1, Slot 2)|
|FF8_EN.exe+18FE79F||1 Byte|Item Slot 2 Quantity|
|FF8_EN.exe+18FE7A0||1 Byte|[Item ID](items.md) in Slot 3 (Page 1, Slot 3)|
|FF8_EN.exe+18FE7A1||1 Byte|Item Slot 3 Quantity|
|FF8_EN.exe+18FE7A2||1 Byte|[Item ID](items.md) in Slot 4 (Page 1, Slot 4)|
|FF8_EN.exe+18FE7A3||1 Byte|Item Slot 4 Quantity|
|FF8_EN.exe+18FE7A4||1 Byte|[Item ID](items.md) in Slot 5 (Page 1, Slot 5)|
|FF8_EN.exe+18FE7A5||1 Byte|Item Slot 5 Quantity|
|FF8_EN.exe+18FE7A6||1 Byte|[Item ID](items.md) in Slot 6 (Page 1, Slot 6)|
|FF8_EN.exe+18FE7A7||1 Byte|Item Slot 6 Quantity|
|FF8_EN.exe+18FE7A8||1 Byte|[Item ID](items.md) in Slot 7 (Page 1, Slot 7)|
|FF8_EN.exe+18FE7A9||1 Byte|Item Slot 7 Quantity|
|FF8_EN.exe+18FE7AA||1 Byte|[Item ID](items.md) in Slot 8 (Page 1, Slot 8)|
|FF8_EN.exe+18FE7AB||1 Byte|Item Slot 8 Quantity|
|FF8_EN.exe+18FE7AC||1 Byte|[Item ID](items.md) in Slot 9 (Page 1, Slot 9)|
|FF8_EN.exe+18FE7AD||1 Byte|Item Slot 9 Quantity|
|FF8_EN.exe+18FE7AE||1 Byte|[Item ID](items.md) in Slot 10 (Page 1, Slot 10)|
|FF8_EN.exe+18FE7AF||1 Byte|Item Slot 10 Quantity|
|FF8_EN.exe+18FE7B0||1 Byte|[Item ID](items.md) in Slot 11 (Page 1, Slot 11)|
|FF8_EN.exe+18FE7B1||1 Byte|Item Slot 11 Quantity|
|FF8_EN.exe+18FE7B2||1 Byte|[Item ID](items.md) in Slot 12 (Page 2, Slot 1)|
|FF8_EN.exe+18FE7B3||1 Byte|Item Slot 12 Quantity|
|FF8_EN.exe+18FE7B4||1 Byte|[Item ID](items.md) in Slot 13 (Page 2, Slot 2)|
|FF8_EN.exe+18FE7B5||1 Byte|Item Slot 13 Quantity|
|FF8_EN.exe+18FE7B6||1 Byte|[Item ID](items.md) in Slot 14 (Page 2, Slot 3)|
|FF8_EN.exe+18FE7B7||1 Byte|Item Slot 14 Quantity|
|FF8_EN.exe+18FE7B8||1 Byte|[Item ID](items.md) in Slot 15 (Page 2, Slot 4)|
|FF8_EN.exe+18FE7B9||1 Byte|Item Slot 15 Quantity|
|FF8_EN.exe+18FE7BA||1 Byte|[Item ID](items.md) in Slot 16 (Page 2, Slot 5)|
|FF8_EN.exe+18FE7BB||1 Byte|Item Slot 16 Quantity|
|FF8_EN.exe+18FE7BC||1 Byte|[Item ID](items.md) in Slot 17 (Page 2, Slot 6)|
|FF8_EN.exe+18FE7BD||1 Byte|Item Slot 17 Quantity|
|FF8_EN.exe+18FE7BE||1 Byte|[Item ID](items.md) in Slot 18 (Page 2, Slot 7)|
|FF8_EN.exe+18FE7BF||1 Byte|Item Slot 18 Quantity|
|FF8_EN.exe+18FE7C0||1 Byte|[Item ID](items.md) in Slot 19 (Page 2, Slot 8)|
|FF8_EN.exe+18FE7C1||1 Byte|Item Slot 19 Quantity|
|FF8_EN.exe+18FE7C2||1 Byte|[Item ID](items.md) in Slot 20 (Page 2, Slot 9)|
|FF8_EN.exe+18FE7C3||1 Byte|Item Slot 20 Quantity|
|FF8_EN.exe+18FE7C4||1 Byte|[Item ID](items.md) in Slot 21 (Page 2, Slot 10)|
|FF8_EN.exe+18FE7C5||1 Byte|Item Slot 21 Quantity|
|FF8_EN.exe+18FE7C6||1 Byte|[Item ID](items.md) in Slot 22 (Page 2, Slot 11)|
|FF8_EN.exe+18FE7C7||1 Byte|Item Slot 22 Quantity|
|FF8_EN.exe+18FE7C8||1 Byte|[Item ID](items.md) in Slot 23 (Page 3, Slot 1)|
|FF8_EN.exe+18FE7C9||1 Byte|Item Slot 23 Quantity|
|FF8_EN.exe+18FE7CA||1 Byte|[Item ID](items.md) in Slot 24 (Page 3, Slot 2)|
|FF8_EN.exe+18FE7CB||1 Byte|Item Slot 24 Quantity|
|FF8_EN.exe+18FE7CC||1 Byte|[Item ID](items.md) in Slot 25 (Page 3, Slot 3)|
|FF8_EN.exe+18FE7CD||1 Byte|Item Slot 25 Quantity|
|FF8_EN.exe+18FE7CE||1 Byte|[Item ID](items.md) in Slot 26 (Page 3, Slot 4)|
|FF8_EN.exe+18FE7CF||1 Byte|Item Slot 26 Quantity|
|FF8_EN.exe+18FE7D0||1 Byte|[Item ID](items.md) in Slot 27 (Page 3, Slot 5)|
|FF8_EN.exe+18FE7D1||1 Byte|Item Slot 27 Quantity|
|FF8_EN.exe+18FE7D2||1 Byte|[Item ID](items.md) in Slot 28 (Page 3, Slot 6)|
|FF8_EN.exe+18FE7D3||1 Byte|Item Slot 28 Quantity|
|FF8_EN.exe+18FE7D4||1 Byte|[Item ID](items.md) in Slot 29 (Page 3, Slot 7)|
|FF8_EN.exe+18FE7D5||1 Byte|Item Slot 29 Quantity|
|FF8_EN.exe+18FE7D6||1 Byte|[Item ID](items.md) in Slot 30 (Page 3, Slot 8)|
|FF8_EN.exe+18FE7D7||1 Byte|Item Slot 30 Quantity|
|FF8_EN.exe+18FE7D8||1 Byte|[Item ID](items.md) in Slot 31 (Page 3, Slot 9)|
|FF8_EN.exe+18FE7D9||1 Byte|Item Slot 31 Quantity|
|FF8_EN.exe+18FE7DA||1 Byte|[Item ID](items.md) in Slot 32 (Page 3, Slot 10)|
|FF8_EN.exe+18FE7DB||1 Byte|Item Slot 32 Quantity|
|FF8_EN.exe+18FE7DC||1 Byte|[Item ID](items.md) in Slot 33 (Page 3, Slot 11)|
|FF8_EN.exe+18FE7DD||1 Byte|Item Slot 33 Quantity|
|FF8_EN.exe+18FE7DE||1 Byte|[Item ID](items.md) in Slot 34 (Page 4, Slot 1)|
|FF8_EN.exe+18FE7DF||1 Byte|Item Slot 34 Quantity|
|FF8_EN.exe+18FE7E0||1 Byte|[Item ID](items.md) in Slot 35 (Page 4, Slot 2)|
|FF8_EN.exe+18FE7E1||1 Byte|Item Slot 35 Quantity|
|FF8_EN.exe+18FE7E2||1 Byte|[Item ID](items.md) in Slot 36 (Page 4, Slot 3)|
|FF8_EN.exe+18FE7E3||1 Byte|Item Slot 36 Quantity|
|FF8_EN.exe+18FE7E4||1 Byte|[Item ID](items.md) in Slot 37 (Page 4, Slot 4)|
|FF8_EN.exe+18FE7E5||1 Byte|Item Slot 37 Quantity|
|FF8_EN.exe+18FE7E6||1 Byte|[Item ID](items.md) in Slot 38 (Page 4, Slot 5)|
|FF8_EN.exe+18FE7E7||1 Byte|Item Slot 38 Quantity|
|FF8_EN.exe+18FE7E8||1 Byte|[Item ID](items.md) in Slot 39 (Page 4, Slot 6)|
|FF8_EN.exe+18FE7E9||1 Byte|Item Slot 39 Quantity|
|FF8_EN.exe+18FE7EA||1 Byte|[Item ID](items.md) in Slot 40 (Page 4, Slot 7)|
|FF8_EN.exe+18FE7EB||1 Byte|Item Slot 40 Quantity|
|FF8_EN.exe+18FE7EC||1 Byte|[Item ID](items.md) in Slot 41 (Page 4, Slot 8)|
|FF8_EN.exe+18FE7ED||1 Byte|Item Slot 41 Quantity|
|FF8_EN.exe+18FE7EE||1 Byte|[Item ID](items.md) in Slot 42 (Page 4, Slot 9)|
|FF8_EN.exe+18FE7EF||1 Byte|Item Slot 42 Quantity|
|FF8_EN.exe+18FE7F0||1 Byte|[Item ID](items.md) in Slot 43 (Page 4, Slot 10)|
|FF8_EN.exe+18FE7F1||1 Byte|Item Slot 43 Quantity|
|FF8_EN.exe+18FE7F2||1 Byte|[Item ID](items.md) in Slot 44 (Page 4, Slot 11)|
|FF8_EN.exe+18FE7F3||1 Byte|Item Slot 44 Quantity|
|FF8_EN.exe+18FE7F4||1 Byte|[Item ID](items.md) in Slot 45 (Page 5, Slot 1)|
|FF8_EN.exe+18FE7F5||1 Byte|Item Slot 45 Quantity|
|FF8_EN.exe+18FE7F6||1 Byte|[Item ID](items.md) in Slot 46 (Page 5, Slot 2)|
|FF8_EN.exe+18FE7F7||1 Byte|Item Slot 46 Quantity|
|FF8_EN.exe+18FE7F8||1 Byte|[Item ID](items.md) in Slot 47 (Page 5, Slot 3)|
|FF8_EN.exe+18FE7F9||1 Byte|Item Slot 47 Quantity|
|FF8_EN.exe+18FE7FA||1 Byte|[Item ID](items.md) in Slot 48 (Page 5, Slot 4)|
|FF8_EN.exe+18FE7FB||1 Byte|Item Slot 48 Quantity|
|FF8_EN.exe+18FE7FC||1 Byte|[Item ID](items.md) in Slot 49 (Page 5, Slot 5)|
|FF8_EN.exe+18FE7FD||1 Byte|Item Slot 49 Quantity|
|FF8_EN.exe+18FE7FE||1 Byte|[Item ID](items.md) in Slot 50 (Page 5, Slot 6)|
|FF8_EN.exe+18FE7FF||1 Byte|Item Slot 50 Quantity|
|FF8_EN.exe+18FE800||1 Byte|[Item ID](items.md) in Slot 51 (Page 5, Slot 7)|
|FF8_EN.exe+18FE801||1 Byte|Item Slot 51 Quantity|
|FF8_EN.exe+18FE802||1 Byte|[Item ID](items.md) in Slot 52 (Page 5, Slot 8)|
|FF8_EN.exe+18FE803||1 Byte|Item Slot 52 Quantity|
|FF8_EN.exe+18FE804||1 Byte|[Item ID](items.md) in Slot 53 (Page 5, Slot 9)|
|FF8_EN.exe+18FE805||1 Byte|Item Slot 53 Quantity|
|FF8_EN.exe+18FE806||1 Byte|[Item ID](items.md) in Slot 54 (Page 5, Slot 10)|
|FF8_EN.exe+18FE807||1 Byte|Item Slot 54 Quantity|
|FF8_EN.exe+18FE808||1 Byte|[Item ID](items.md) in Slot 55 (Page 5, Slot 11)|
|FF8_EN.exe+18FE809||1 Byte|Item Slot 55 Quantity|
|FF8_EN.exe+18FE80A||1 Byte|[Item ID](items.md) in Slot 56 (Page 6, Slot 1)|
|FF8_EN.exe+18FE80B||1 Byte|Item Slot 56 Quantity|
|FF8_EN.exe+18FE80C||1 Byte|[Item ID](items.md) in Slot 57 (Page 6, Slot 2)|
|FF8_EN.exe+18FE80D||1 Byte|Item Slot 57 Quantity|
|FF8_EN.exe+18FE80E||1 Byte|[Item ID](items.md) in Slot 58 (Page 6, Slot 3)|
|FF8_EN.exe+18FE80F||1 Byte|Item Slot 58 Quantity|
|FF8_EN.exe+18FE810||1 Byte|[Item ID](items.md) in Slot 59 (Page 6, Slot 4)|
|FF8_EN.exe+18FE811||1 Byte|Item Slot 59 Quantity|
|FF8_EN.exe+18FE812||1 Byte|[Item ID](items.md) in Slot 60 (Page 6, Slot 5)|
|FF8_EN.exe+18FE813||1 Byte|Item Slot 60 Quantity|
|FF8_EN.exe+18FE814||1 Byte|[Item ID](items.md) in Slot 61 (Page 6, Slot 6)|
|FF8_EN.exe+18FE815||1 Byte|Item Slot 61 Quantity|
|FF8_EN.exe+18FE816||1 Byte|[Item ID](items.md) in Slot 62 (Page 6, Slot 7)|
|FF8_EN.exe+18FE817||1 Byte|Item Slot 62 Quantity|
|FF8_EN.exe+18FE818||1 Byte|[Item ID](items.md) in Slot 63 (Page 6, Slot 8)|
|FF8_EN.exe+18FE819||1 Byte|Item Slot 63 Quantity|
|FF8_EN.exe+18FE81A||1 Byte|[Item ID](items.md) in Slot 64 (Page 6, Slot 9)|
|FF8_EN.exe+18FE81B||1 Byte|Item Slot 64 Quantity|
|FF8_EN.exe+18FE81C||1 Byte|[Item ID](items.md) in Slot 65 (Page 6, Slot 10)|
|FF8_EN.exe+18FE81D||1 Byte|Item Slot 65 Quantity|
|FF8_EN.exe+18FE81E||1 Byte|[Item ID](items.md) in Slot 66 (Page 6, Slot 11)|
|FF8_EN.exe+18FE81F||1 Byte|Item Slot 66 Quantity|
|FF8_EN.exe+18FE820||1 Byte|[Item ID](items.md) in Slot 67 (Page 7, Slot 1)|
|FF8_EN.exe+18FE821||1 Byte|Item Slot 67 Quantity|
|FF8_EN.exe+18FE822||1 Byte|[Item ID](items.md) in Slot 68 (Page 7, Slot 2)|
|FF8_EN.exe+18FE823||1 Byte|Item Slot 68 Quantity|
|FF8_EN.exe+18FE824||1 Byte|[Item ID](items.md) in Slot 69 (Page 7, Slot 3)|
|FF8_EN.exe+18FE825||1 Byte|Item Slot 69 Quantity|
|FF8_EN.exe+18FE826||1 Byte|[Item ID](items.md) in Slot 70 (Page 7, Slot 4)|
|FF8_EN.exe+18FE827||1 Byte|Item Slot 70 Quantity|
|FF8_EN.exe+18FE828||1 Byte|[Item ID](items.md) in Slot 71 (Page 7, Slot 5)|
|FF8_EN.exe+18FE829||1 Byte|Item Slot 71 Quantity|
|FF8_EN.exe+18FE82A||1 Byte|[Item ID](items.md) in Slot 72 (Page 7, Slot 6)|
|FF8_EN.exe+18FE82B||1 Byte|Item Slot 72 Quantity|
|FF8_EN.exe+18FE82C||1 Byte|[Item ID](items.md) in Slot 73 (Page 7, Slot 7)|
|FF8_EN.exe+18FE82D||1 Byte|Item Slot 73 Quantity|
|FF8_EN.exe+18FE82E||1 Byte|[Item ID](items.md) in Slot 74 (Page 7, Slot 8)|
|FF8_EN.exe+18FE82F||1 Byte|Item Slot 74 Quantity|
|FF8_EN.exe+18FE830||1 Byte|[Item ID](items.md) in Slot 75 (Page 7, Slot 9)|
|FF8_EN.exe+18FE831||1 Byte|Item Slot 75 Quantity|
|FF8_EN.exe+18FE832||1 Byte|[Item ID](items.md) in Slot 76 (Page 7, Slot 10)|
|FF8_EN.exe+18FE833||1 Byte|Item Slot 76 Quantity|
|FF8_EN.exe+18FE834||1 Byte|[Item ID](items.md) in Slot 77 (Page 7, Slot 11)|
|FF8_EN.exe+18FE835||1 Byte|Item Slot 77 Quantity|
|FF8_EN.exe+18FE836||1 Byte|[Item ID](items.md) in Slot 78 (Page 8, Slot 1)|
|FF8_EN.exe+18FE837||1 Byte|Item Slot 78 Quantity|
|FF8_EN.exe+18FE838||1 Byte|[Item ID](items.md) in Slot 79 (Page 8, Slot 2)|
|FF8_EN.exe+18FE839||1 Byte|Item Slot 79 Quantity|
|FF8_EN.exe+18FE83A||1 Byte|[Item ID](items.md) in Slot 80 (Page 8, Slot 3)|
|FF8_EN.exe+18FE83B||1 Byte|Item Slot 80 Quantity|
|FF8_EN.exe+18FE83C||1 Byte|[Item ID](items.md) in Slot 81 (Page 8, Slot 4)|
|FF8_EN.exe+18FE83D||1 Byte|Item Slot 81 Quantity|
|FF8_EN.exe+18FE83E||1 Byte|[Item ID](items.md) in Slot 82 (Page 8, Slot 5)|
|FF8_EN.exe+18FE83F||1 Byte|Item Slot 82 Quantity|
|FF8_EN.exe+18FE840||1 Byte|[Item ID](items.md) in Slot 83 (Page 8, Slot 6)|
|FF8_EN.exe+18FE841||1 Byte|Item Slot 83 Quantity|
|FF8_EN.exe+18FE842||1 Byte|[Item ID](items.md) in Slot 84 (Page 8, Slot 7)|
|FF8_EN.exe+18FE843||1 Byte|Item Slot 84 Quantity|
|FF8_EN.exe+18FE844||1 Byte|[Item ID](items.md) in Slot 85 (Page 8, Slot 8)|
|FF8_EN.exe+18FE845||1 Byte|Item Slot 85 Quantity|
|FF8_EN.exe+18FE846||1 Byte|[Item ID](items.md) in Slot 86 (Page 8, Slot 9)|
|FF8_EN.exe+18FE847||1 Byte|Item Slot 86 Quantity|
|FF8_EN.exe+18FE848||1 Byte|[Item ID](items.md) in Slot 87 (Page 8, Slot 10)|
|FF8_EN.exe+18FE849||1 Byte|Item Slot 87 Quantity|
|FF8_EN.exe+18FE84A||1 Byte|[Item ID](items.md) in Slot 88 (Page 8, Slot 11)|
|FF8_EN.exe+18FE84B||1 Byte|Item Slot 88 Quantity|
|FF8_EN.exe+18FE84C||1 Byte|[Item ID](items.md) in Slot 89 (Page 9, Slot 1)|
|FF8_EN.exe+18FE84D||1 Byte|Item Slot 89 Quantity|
|FF8_EN.exe+18FE84E||1 Byte|[Item ID](items.md) in Slot 90 (Page 9, Slot 2)|
|FF8_EN.exe+18FE84F||1 Byte|Item Slot 90 Quantity|
|FF8_EN.exe+18FE850||1 Byte|[Item ID](items.md) in Slot 91 (Page 9, Slot 3)|
|FF8_EN.exe+18FE851||1 Byte|Item Slot 91 Quantity|
|FF8_EN.exe+18FE852||1 Byte|[Item ID](items.md) in Slot 92 (Page 9, Slot 4)|
|FF8_EN.exe+18FE853||1 Byte|Item Slot 92 Quantity|
|FF8_EN.exe+18FE854||1 Byte|[Item ID](items.md) in Slot 93 (Page 9, Slot 5)|
|FF8_EN.exe+18FE855||1 Byte|Item Slot 93 Quantity|
|FF8_EN.exe+18FE856||1 Byte|[Item ID](items.md) in Slot 94 (Page 9, Slot 6)|
|FF8_EN.exe+18FE857||1 Byte|Item Slot 94 Quantity|
|FF8_EN.exe+18FE858||1 Byte|[Item ID](items.md) in Slot 95 (Page 9, Slot 7)|
|FF8_EN.exe+18FE859||1 Byte|Item Slot 95 Quantity|
|FF8_EN.exe+18FE85A||1 Byte|[Item ID](items.md) in Slot 96 (Page 9, Slot 8)|
|FF8_EN.exe+18FE85B||1 Byte|Item Slot 96 Quantity|
|FF8_EN.exe+18FE85C||1 Byte|[Item ID](items.md) in Slot 97 (Page 9, Slot 9)|
|FF8_EN.exe+18FE85D||1 Byte|Item Slot 97 Quantity|
|FF8_EN.exe+18FE85E||1 Byte|[Item ID](items.md) in Slot 98 (Page 9, Slot 10)|
|FF8_EN.exe+18FE85F||1 Byte|Item Slot 98 Quantity|
|FF8_EN.exe+18FE860||1 Byte|[Item ID](items.md) in Slot 99 (Page 9, Slot 11)|
|FF8_EN.exe+18FE861||1 Byte|Item Slot 99 Quantity|
|FF8_EN.exe+18FE862||1 Byte|[Item ID](items.md) in Slot 100 (Page 10, Slot 1)|
|FF8_EN.exe+18FE863||1 Byte|Item Slot 100 Quantity|
|FF8_EN.exe+18FE864||1 Byte|[Item ID](items.md) in Slot 101 (Page 10, Slot 2)|
|FF8_EN.exe+18FE865||1 Byte|Item Slot 101 Quantity|
|FF8_EN.exe+18FE866||1 Byte|[Item ID](items.md) in Slot 102 (Page 10, Slot 3)|
|FF8_EN.exe+18FE867||1 Byte|Item Slot 102 Quantity|
|FF8_EN.exe+18FE868||1 Byte|[Item ID](items.md) in Slot 103 (Page 10, Slot 4)|
|FF8_EN.exe+18FE869||1 Byte|Item Slot 103 Quantity|
|FF8_EN.exe+18FE86A||1 Byte|[Item ID](items.md) in Slot 104 (Page 10, Slot 5)|
|FF8_EN.exe+18FE86B||1 Byte|Item Slot 104 Quantity|
|FF8_EN.exe+18FE86C||1 Byte|[Item ID](items.md) in Slot 105 (Page 10, Slot 6)|
|FF8_EN.exe+18FE86D||1 Byte|Item Slot 105 Quantity|
|FF8_EN.exe+18FE86E||1 Byte|[Item ID](items.md) in Slot 106 (Page 10, Slot 7)|
|FF8_EN.exe+18FE86F||1 Byte|Item Slot 106 Quantity|
|FF8_EN.exe+18FE870||1 Byte|[Item ID](items.md) in Slot 107 (Page 10, Slot 8)|
|FF8_EN.exe+18FE871||1 Byte|Item Slot 107 Quantity|
|FF8_EN.exe+18FE872||1 Byte|[Item ID](items.md) in Slot 108 (Page 10, Slot 9)|
|FF8_EN.exe+18FE873||1 Byte|Item Slot 108 Quantity|
|FF8_EN.exe+18FE874||1 Byte|[Item ID](items.md) in Slot 109 (Page 10, Slot 10)|
|FF8_EN.exe+18FE875||1 Byte|Item Slot 109 Quantity|
|FF8_EN.exe+18FE876||1 Byte|[Item ID](items.md) in Slot 110 (Page 10, Slot 11)|
|FF8_EN.exe+18FE877||1 Byte|Item Slot 110 Quantity|
|FF8_EN.exe+18FE878||1 Byte|[Item ID](items.md) in Slot 111 (Page 11, Slot 1)|
|FF8_EN.exe+18FE879||1 Byte|Item Slot 111 Quantity|
|FF8_EN.exe+18FE87A||1 Byte|[Item ID](items.md) in Slot 112 (Page 11, Slot 2)|
|FF8_EN.exe+18FE87B||1 Byte|Item Slot 112 Quantity|
|FF8_EN.exe+18FE87C||1 Byte|[Item ID](items.md) in Slot 113 (Page 11, Slot 3)|
|FF8_EN.exe+18FE87D||1 Byte|Item Slot 113 Quantity|
|FF8_EN.exe+18FE87E||1 Byte|[Item ID](items.md) in Slot 114 (Page 11, Slot 4)|
|FF8_EN.exe+18FE87F||1 Byte|Item Slot 114 Quantity|
|FF8_EN.exe+18FE880||1 Byte|[Item ID](items.md) in Slot 115 (Page 11, Slot 5)|
|FF8_EN.exe+18FE881||1 Byte|Item Slot 115 Quantity|
|FF8_EN.exe+18FE882||1 Byte|[Item ID](items.md) in Slot 116 (Page 11, Slot 6)|
|FF8_EN.exe+18FE883||1 Byte|Item Slot 116 Quantity|
|FF8_EN.exe+18FE884||1 Byte|[Item ID](items.md) in Slot 117 (Page 11, Slot 7)|
|FF8_EN.exe+18FE885||1 Byte|Item Slot 117 Quantity|
|FF8_EN.exe+18FE886||1 Byte|[Item ID](items.md) in Slot 118 (Page 11, Slot 8)|
|FF8_EN.exe+18FE887||1 Byte|Item Slot 118 Quantity|
|FF8_EN.exe+18FE888||1 Byte|[Item ID](items.md) in Slot 119 (Page 11, Slot 9)|
|FF8_EN.exe+18FE889||1 Byte|Item Slot 119 Quantity|
|FF8_EN.exe+18FE88A||1 Byte|[Item ID](items.md) in Slot 120 (Page 11, Slot 10)|
|FF8_EN.exe+18FE88B||1 Byte|Item Slot 120 Quantity|
|FF8_EN.exe+18FE88C||1 Byte|[Item ID](items.md) in Slot 121 (Page 11, Slot 11)|
|FF8_EN.exe+18FE88D||1 Byte|Item Slot 121 Quantity|
|FF8_EN.exe+18FE88E||1 Byte|[Item ID](items.md) in Slot 122 (Page 12, Slot 1)|
|FF8_EN.exe+18FE88F||1 Byte|Item Slot 122 Quantity|
|FF8_EN.exe+18FE890||1 Byte|[Item ID](items.md) in Slot 123 (Page 12, Slot 2)|
|FF8_EN.exe+18FE891||1 Byte|Item Slot 123 Quantity|
|FF8_EN.exe+18FE892||1 Byte|[Item ID](items.md) in Slot 124 (Page 12, Slot 3)|
|FF8_EN.exe+18FE893||1 Byte|Item Slot 124 Quantity|
|FF8_EN.exe+18FE894||1 Byte|[Item ID](items.md) in Slot 125 (Page 12, Slot 4)|
|FF8_EN.exe+18FE895||1 Byte|Item Slot 125 Quantity|
|FF8_EN.exe+18FE896||1 Byte|[Item ID](items.md) in Slot 126 (Page 12, Slot 5)|
|FF8_EN.exe+18FE897||1 Byte|Item Slot 126 Quantity|
|FF8_EN.exe+18FE898||1 Byte|[Item ID](items.md) in Slot 127 (Page 12, Slot 6)|
|FF8_EN.exe+18FE899||1 Byte|Item Slot 127 Quantity|
|FF8_EN.exe+18FE89A||1 Byte|[Item ID](items.md) in Slot 128 (Page 12, Slot 7)|
|FF8_EN.exe+18FE89B||1 Byte|Item Slot 128 Quantity|
|FF8_EN.exe+18FE89C||1 Byte|[Item ID](items.md) in Slot 129 (Page 12, Slot 8)|
|FF8_EN.exe+18FE89D||1 Byte|Item Slot 129 Quantity|
|FF8_EN.exe+18FE89E||1 Byte|[Item ID](items.md) in Slot 130 (Page 12, Slot 9)|
|FF8_EN.exe+18FE89F||1 Byte|Item Slot 130 Quantity|
|FF8_EN.exe+18FE8A0||1 Byte|[Item ID](items.md) in Slot 131 (Page 12, Slot 10)|
|FF8_EN.exe+18FE8A1||1 Byte|Item Slot 131 Quantity|
|FF8_EN.exe+18FE8A2||1 Byte|[Item ID](items.md) in Slot 132 (Page 12, Slot 11)|
|FF8_EN.exe+18FE8A3||1 Byte|Item Slot 132 Quantity|
|FF8_EN.exe+18FE8A4||1 Byte|[Item ID](items.md) in Slot 133 (Page 13, Slot 1)|
|FF8_EN.exe+18FE8A5||1 Byte|Item Slot 133 Quantity|
|FF8_EN.exe+18FE8A6||1 Byte|[Item ID](items.md) in Slot 134 (Page 13, Slot 2)|
|FF8_EN.exe+18FE8A7||1 Byte|Item Slot 134 Quantity|
|FF8_EN.exe+18FE8A8||1 Byte|[Item ID](items.md) in Slot 135 (Page 13, Slot 3)|
|FF8_EN.exe+18FE8A9||1 Byte|Item Slot 135 Quantity|
|FF8_EN.exe+18FE8AA||1 Byte|[Item ID](items.md) in Slot 136 (Page 13, Slot 4)|
|FF8_EN.exe+18FE8AB||1 Byte|Item Slot 136 Quantity|
|FF8_EN.exe+18FE8AC||1 Byte|[Item ID](items.md) in Slot 137 (Page 13, Slot 5)|
|FF8_EN.exe+18FE8AD||1 Byte|Item Slot 137 Quantity|
|FF8_EN.exe+18FE8AE||1 Byte|[Item ID](items.md) in Slot 138 (Page 13, Slot 6)|
|FF8_EN.exe+18FE8AF||1 Byte|Item Slot 138 Quantity|
|FF8_EN.exe+18FE8B0||1 Byte|[Item ID](items.md) in Slot 139 (Page 13, Slot 7)|
|FF8_EN.exe+18FE8B1||1 Byte|Item Slot 139 Quantity|
|FF8_EN.exe+18FE8B2||1 Byte|[Item ID](items.md) in Slot 140 (Page 13, Slot 8)|
|FF8_EN.exe+18FE8B3||1 Byte|Item Slot 140 Quantity|
|FF8_EN.exe+18FE8B4||1 Byte|[Item ID](items.md) in Slot 141 (Page 13, Slot 9)|
|FF8_EN.exe+18FE8B5||1 Byte|Item Slot 141 Quantity|
|FF8_EN.exe+18FE8B6||1 Byte|[Item ID](items.md) in Slot 142 (Page 13, Slot 10)|
|FF8_EN.exe+18FE8B7||1 Byte|Item Slot 142 Quantity|
|FF8_EN.exe+18FE8B8||1 Byte|[Item ID](items.md) in Slot 143 (Page 13, Slot 11)|
|FF8_EN.exe+18FE8B9||1 Byte|Item Slot 143 Quantity|
|FF8_EN.exe+18FE8BA||1 Byte|[Item ID](items.md) in Slot 144 (Page 14, Slot 1)|
|FF8_EN.exe+18FE8BB||1 Byte|Item Slot 144 Quantity|
|FF8_EN.exe+18FE8BC||1 Byte|[Item ID](items.md) in Slot 145 (Page 14, Slot 2)|
|FF8_EN.exe+18FE8BD||1 Byte|Item Slot 145 Quantity|
|FF8_EN.exe+18FE8BE||1 Byte|[Item ID](items.md) in Slot 146 (Page 14, Slot 3)|
|FF8_EN.exe+18FE8BF||1 Byte|Item Slot 146 Quantity|
|FF8_EN.exe+18FE8C0||1 Byte|[Item ID](items.md) in Slot 147 (Page 14, Slot 4)|
|FF8_EN.exe+18FE8C1||1 Byte|Item Slot 147 Quantity|
|FF8_EN.exe+18FE8C2||1 Byte|[Item ID](items.md) in Slot 148 (Page 14, Slot 5)|
|FF8_EN.exe+18FE8C3||1 Byte|Item Slot 148 Quantity|
|FF8_EN.exe+18FE8C4||1 Byte|[Item ID](items.md) in Slot 149 (Page 14, Slot 6)|
|FF8_EN.exe+18FE8C5||1 Byte|Item Slot 149 Quantity|
|FF8_EN.exe+18FE8C6||1 Byte|[Item ID](items.md) in Slot 150 (Page 14, Slot 7)|
|FF8_EN.exe+18FE8C7||1 Byte|Item Slot 150 Quantity|
|FF8_EN.exe+18FE8C8||1 Byte|[Item ID](items.md) in Slot 151 (Page 14, Slot 8)|
|FF8_EN.exe+18FE8C9||1 Byte|Item Slot 151 Quantity|
|FF8_EN.exe+18FE8CA||1 Byte|[Item ID](items.md) in Slot 152 (Page 14, Slot 9)|
|FF8_EN.exe+18FE8CB||1 Byte|Item Slot 152 Quantity|
|FF8_EN.exe+18FE8CC||1 Byte|[Item ID](items.md) in Slot 153 (Page 14, Slot 10)|
|FF8_EN.exe+18FE8CD||1 Byte|Item Slot 153 Quantity|
|FF8_EN.exe+18FE8CE||1 Byte|[Item ID](items.md) in Slot 154 (Page 14, Slot 11)|
|FF8_EN.exe+18FE8CF||1 Byte|Item Slot 154 Quantity|
|FF8_EN.exe+18FE8D0||1 Byte|[Item ID](items.md) in Slot 155 (Page 15, Slot 1)|
|FF8_EN.exe+18FE8D1||1 Byte|Item Slot 155 Quantity|
|FF8_EN.exe+18FE8D2||1 Byte|[Item ID](items.md) in Slot 156 (Page 15, Slot 2)|
|FF8_EN.exe+18FE8D3||1 Byte|Item Slot 156 Quantity|
|FF8_EN.exe+18FE8D4||1 Byte|[Item ID](items.md) in Slot 157 (Page 15, Slot 3)|
|FF8_EN.exe+18FE8D5||1 Byte|Item Slot 157 Quantity|
|FF8_EN.exe+18FE8D6||1 Byte|[Item ID](items.md) in Slot 158 (Page 15, Slot 4)|
|FF8_EN.exe+18FE8D7||1 Byte|Item Slot 158 Quantity|
|FF8_EN.exe+18FE8D8||1 Byte|[Item ID](items.md) in Slot 159 (Page 15, Slot 5)|
|FF8_EN.exe+18FE8D9||1 Byte|Item Slot 159 Quantity|
|FF8_EN.exe+18FE8DA||1 Byte|[Item ID](items.md) in Slot 160 (Page 15, Slot 6)|
|FF8_EN.exe+18FE8DB||1 Byte|Item Slot 160 Quantity|
|FF8_EN.exe+18FE8DC||1 Byte|[Item ID](items.md) in Slot 161 (Page 15, Slot 7)|
|FF8_EN.exe+18FE8DD||1 Byte|Item Slot 161 Quantity|
|FF8_EN.exe+18FE8DE||1 Byte|[Item ID](items.md) in Slot 162 (Page 15, Slot 8)|
|FF8_EN.exe+18FE8DF||1 Byte|Item Slot 162 Quantity|
|FF8_EN.exe+18FE8E0||1 Byte|[Item ID](items.md) in Slot 163 (Page 15, Slot 9)|
|FF8_EN.exe+18FE8E1||1 Byte|Item Slot 163 Quantity|
|FF8_EN.exe+18FE8E2||1 Byte|[Item ID](items.md) in Slot 164 (Page 15, Slot 10)|
|FF8_EN.exe+18FE8E3||1 Byte|Item Slot 164 Quantity|
|FF8_EN.exe+18FE8E4||1 Byte|[Item ID](items.md) in Slot 165 (Page 15, Slot 11)|
|FF8_EN.exe+18FE8E5||1 Byte|Item Slot 165 Quantity|
|FF8_EN.exe+18FE8E6||1 Byte|[Item ID](items.md) in Slot 166 (Page 16, Slot 1)|
|FF8_EN.exe+18FE8E7||1 Byte|Item Slot 166 Quantity|
|FF8_EN.exe+18FE8E8||1 Byte|[Item ID](items.md) in Slot 167 (Page 16, Slot 2)|
|FF8_EN.exe+18FE8E9||1 Byte|Item Slot 167 Quantity|
|FF8_EN.exe+18FE8EA||1 Byte|[Item ID](items.md) in Slot 168 (Page 16, Slot 3)|
|FF8_EN.exe+18FE8EB||1 Byte|Item Slot 168 Quantity|
|FF8_EN.exe+18FE8EC||1 Byte|[Item ID](items.md) in Slot 169 (Page 16, Slot 4)|
|FF8_EN.exe+18FE8ED||1 Byte|Item Slot 169 Quantity|
|FF8_EN.exe+18FE8EE||1 Byte|[Item ID](items.md) in Slot 170 (Page 16, Slot 5)|
|FF8_EN.exe+18FE8EF||1 Byte|Item Slot 170 Quantity|
|FF8_EN.exe+18FE8F0||1 Byte|[Item ID](items.md) in Slot 171 (Page 16, Slot 6)|
|FF8_EN.exe+18FE8F1||1 Byte|Item Slot 171 Quantity|
|FF8_EN.exe+18FE8F2||1 Byte|[Item ID](items.md) in Slot 172 (Page 16, Slot 7)|
|FF8_EN.exe+18FE8F3||1 Byte|Item Slot 172 Quantity|
|FF8_EN.exe+18FE8F4||1 Byte|[Item ID](items.md) in Slot 173 (Page 16, Slot 8)|
|FF8_EN.exe+18FE8F5||1 Byte|Item Slot 173 Quantity|
|FF8_EN.exe+18FE8F6||1 Byte|[Item ID](items.md) in Slot 174 (Page 16, Slot 9)|
|FF8_EN.exe+18FE8F7||1 Byte|Item Slot 174 Quantity|
|FF8_EN.exe+18FE8F8||1 Byte|[Item ID](items.md) in Slot 175 (Page 16, Slot 10)|
|FF8_EN.exe+18FE8F9||1 Byte|Item Slot 175 Quantity|
|FF8_EN.exe+18FE8FA||1 Byte|[Item ID](items.md) in Slot 176 (Page 16, Slot 11)|
|FF8_EN.exe+18FE8FB||1 Byte|Item Slot 176 Quantity|
|FF8_EN.exe+18FE8FC||1 Byte|[Item ID](items.md) in Slot 177 (Page 17, Slot 1)|
|FF8_EN.exe+18FE8FD||1 Byte|Item Slot 177 Quantity|
|FF8_EN.exe+18FE8FE||1 Byte|[Item ID](items.md) in Slot 178 (Page 17, Slot 2)|
|FF8_EN.exe+18FE8FF||1 Byte|Item Slot 178 Quantity|
|FF8_EN.exe+18FE900||1 Byte|[Item ID](items.md) in Slot 179 (Page 17, Slot 3)|
|FF8_EN.exe+18FE901||1 Byte|Item Slot 179 Quantity|
|FF8_EN.exe+18FE902||1 Byte|[Item ID](items.md) in Slot 180 (Page 17, Slot 4)|
|FF8_EN.exe+18FE903||1 Byte|Item Slot 180 Quantity|
|FF8_EN.exe+18FE904||1 Byte|[Item ID](items.md) in Slot 181 (Page 17, Slot 5)|
|FF8_EN.exe+18FE905||1 Byte|Item Slot 181 Quantity|
|FF8_EN.exe+18FE906||1 Byte|[Item ID](items.md) in Slot 182 (Page 17, Slot 6)|
|FF8_EN.exe+18FE907||1 Byte|Item Slot 182 Quantity|
|FF8_EN.exe+18FE908||1 Byte|[Item ID](items.md) in Slot 183 (Page 17, Slot 7)|
|FF8_EN.exe+18FE909||1 Byte|Item Slot 183 Quantity|
|FF8_EN.exe+18FE90A||1 Byte|[Item ID](items.md) in Slot 184 (Page 17, Slot 8)|
|FF8_EN.exe+18FE90B||1 Byte|Item Slot 184 Quantity|
|FF8_EN.exe+18FE90C||1 Byte|[Item ID](items.md) in Slot 185 (Page 17, Slot 9)|
|FF8_EN.exe+18FE90D||1 Byte|Item Slot 185 Quantity|
|FF8_EN.exe+18FE90E||1 Byte|[Item ID](items.md) in Slot 186 (Page 17, Slot 10)|
|FF8_EN.exe+18FE90F||1 Byte|Item Slot 186 Quantity|
|FF8_EN.exe+18FE910||1 Byte|[Item ID](items.md) in Slot 187 (Page 17, Slot 11)|
|FF8_EN.exe+18FE911||1 Byte|Item Slot 187 Quantity|
|FF8_EN.exe+18FE912||1 Byte|[Item ID](items.md) in Slot 188 (Page 18, Slot 1)|
|FF8_EN.exe+18FE913||1 Byte|Item Slot 188 Quantity|
|FF8_EN.exe+18FE914||1 Byte|[Item ID](items.md) in Slot 189 (Page 18, Slot 2)|
|FF8_EN.exe+18FE915||1 Byte|Item Slot 189 Quantity|
|FF8_EN.exe+18FE916||1 Byte|[Item ID](items.md) in Slot 190 (Page 18, Slot 3)|
|FF8_EN.exe+18FE917||1 Byte|Item Slot 190 Quantity|
|FF8_EN.exe+18FE918||1 Byte|[Item ID](items.md) in Slot 191 (Page 18, Slot 4)|
|FF8_EN.exe+18FE919||1 Byte|Item Slot 191 Quantity|
|FF8_EN.exe+18FE91A||1 Byte|[Item ID](items.md) in Slot 192 (Page 18, Slot 5)|
|FF8_EN.exe+18FE91B||1 Byte|Item Slot 192 Quantity|
|FF8_EN.exe+18FE91C||1 Byte|[Item ID](items.md) in Slot 193 (Page 18, Slot 6)|
|FF8_EN.exe+18FE91D||1 Byte|Item Slot 193 Quantity|
|FF8_EN.exe+18FE91E||1 Byte|[Item ID](items.md) in Slot 194 (Page 18, Slot 7)|
|FF8_EN.exe+18FE91F||1 Byte|Item Slot 194 Quantity|
|FF8_EN.exe+18FE920||1 Byte|[Item ID](items.md) in Slot 195 (Page 18, Slot 8)|
|FF8_EN.exe+18FE921||1 Byte|Item Slot 195 Quantity|
|FF8_EN.exe+18FE922||1 Byte|[Item ID](items.md) in Slot 196 (Page 18, Slot 9)|
|FF8_EN.exe+18FE923||1 Byte|Item Slot 196 Quantity|
|FF8_EN.exe+18FE924||1 Byte|[Item ID](items.md) in Slot 197 (Page 18, Slot 10)|
|FF8_EN.exe+18FE925||1 Byte|Item Slot 197 Quantity|
|FF8_EN.exe+18FE926||1 Byte|[Item ID](items.md) in Slot 198 (Page 18, Slot 11)|
|FF8_EN.exe+18FE927||1 Byte|Item Slot 198 Quantity|
|FF8_EN.exe+18FE928||4 Bytes|Play Time (Seconds)|
|FF8_EN.exe+18FE92C||2 Bytes|Time remaining (seconds)|
|FF8_EN.exe+18FE940||1 Byte|Centra Tonberry Kills|
|FF8_EN.exe+18FE9BC||4 Bytes|Total steps taken|
|FF8_EN.exe+18FE9C0||1 Byte|SeeD Payout RNG (changes every step; more research needed)|
|FF8_EN.exe+18FE9C1||1 Byte|SeeD Payout Timer (increments every ~6 running steps; more research needed)|
|FF8_EN.exe+18FE9C8||2 Bytes|SeeD Pts (every 100 = rank up)|
|FF8_EN.exe+18FE9CC||2 Bytes|Battles Won|
|FF8_EN.exe+18FE9D2||2 Bytes|Battles Escaped|
|FF8_EN.exe+18FE9D4||2 Bytes|Squall's Kill Count|
|FF8_EN.exe+18FE9D6||2 Bytes|Zell's Kill Count|
|FF8_EN.exe+18FE9D8||2 Bytes|Irvine's Kill Count|
|FF8_EN.exe+18FE9DA||2 Bytes|Quistis's Kill Count|
|FF8_EN.exe+18FE9DC||2 Bytes|Rinoa's Kill Count|
|FF8_EN.exe+18FE9DE||2 Bytes|Selphie's Kill Count|
|FF8_EN.exe+18FE9E4||2 Bytes|Squall's Death Count|
|FF8_EN.exe+18FE9E6||2 Bytes|Zell's Death Count|
|FF8_EN.exe+18FE9E8||2 Bytes|Irvine's Death Count|
|FF8_EN.exe+18FE9EA||2 Bytes|Quistis's Death Count|
|FF8_EN.exe+18FE9EC||2 Bytes|Rinoa's Death Count|
|FF8_EN.exe+18FE9EE||2 Bytes|Selphie's Death Count|
|FF8_EN.exe+18FE9FC||4 Bytes|Total Enemies Killed|
|FF8_EN.exe+18FEA0C||2 Bytes|Previous Screen's [Map ID](maps.md)|
|FF8_EN.exe+18FEAB8|FF8_FR.exe+18FE790|2 Bytes|[Story Progress](story-progress.md)|
|FF8_EN.exe+18FEAC8||1 Byte|Triple Triad: Balamb [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEAC9||1 Byte|Triple Triad: Galbadia [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACA||1 Byte|Triple Triad: Trabia [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACB||1 Byte|Triple Triad: Centra [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACC||1 Byte|Triple Triad: Dollet [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACD||1 Byte|Triple Triad: FH [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACE||1 Byte|Triple Triad: Space [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEACF||1 Byte|Triple Triad: Esthar [Play Rules](triple-triad.md)|
|FF8_EN.exe+18FEAD0||1 Byte|Triple Triad: Balamb [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD1||1 Byte|Triple Triad: Galbadia [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD2||1 Byte|Triple Triad: Trabia [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD3||1 Byte|Triple Triad: Centra [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD4||1 Byte|Triple Triad: Dollet [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD5||1 Byte|Triple Triad: FH [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD6||1 Byte|Triple Triad: Space [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEAD7||1 Byte|Triple Triad: Esthar [Trade Rule](triple-triad.md)|
|FF8_EN.exe+18FEADA||1 Byte|Triple Triad: Last Region Played|
|FF8_EN.exe+18FEADB||1 Byte|Triple Triad: Second Last Region Played|
|FF8_EN.exe+18FEB32||1 Byte|Centra Ruins Timer|
|FF8_EN.exe+18FEC90|FF8_FR.exe+18FE968|1 Byte|Caraway Mansion Code (correct only when on the map with the soldier)|
|FF8_EN.exe+18FEFAC||1 Byte|Triple Triad: Total Wins|
|FF8_EN.exe+18FEFAE||1 Byte|Triple Triad: Total Losses|
|FF8_EN.exe+18FEFB0||1 Byte|Triple Triad: Total Draws|
|FF8_EN.exe+18FF574||2 Bytes|In Battle: XP Earned|
|FF8_EN.exe+18FF576||2 Bytes|In Battle: XP Earned 2|
|FF8_EN.exe+18FF578||2 Bytes|In Battle: XP Earned 3|
|FF8_EN.exe+18FF57A||2 Bytes|In Battle: XP Earned 1 Extra|
|FF8_EN.exe+18FF57C||2 Bytes|In Battle: XP Earned 2 Extra|
|FF8_EN.exe+18FF57E||2 Bytes|In Battle: XP Earned 3 Extra|
|FF8_EN.exe+18FF580||2 Bytes|In Battle: XP Earned GF 1|
|FF8_EN.exe+18FF582||2 Bytes|In Battle: XP Earned GF 2|
|FF8_EN.exe+18FF584||2 Bytes|In Battle: XP Earned GF 3|
|FF8_EN.exe+18FF586||2 Bytes|In Battle: XP Earned GF 4|
|FF8_EN.exe+18FF588||2 Bytes|In Battle: XP Earned GF 5|
|FF8_EN.exe+18FF58A||2 Bytes|In Battle: XP Earned GF 6|
|FF8_EN.exe+18FF58C||2 Bytes|In Battle: XP Earned GF 7|
|FF8_EN.exe+18FF58E||2 Bytes|In Battle: XP Earned GF 8|
|FF8_EN.exe+18FF590||2 Bytes|In Battle: XP Earned GF 9|
|FF8_EN.exe+18FF592||2 Bytes|In Battle: XP Earned GF 10|
|FF8_EN.exe+18FF594||2 Bytes|In Battle: XP Earned GF 11|
|FF8_EN.exe+18FF596||2 Bytes|In Battle: XP Earned GF 12|
|FF8_EN.exe+18FF598||2 Bytes|In Battle: XP Earned GF 13|
|FF8_EN.exe+18FF59A||2 Bytes|In Battle: XP Earned GF 14|
|FF8_EN.exe+18FF59C||2 Bytes|In Battle: XP Earned GF 15|
|FF8_EN.exe+18FF59E||2 Bytes|In Battle: XP Earned GF 16|
|FF8_EN.exe+18FF5C0||2 Bytes|In Battle: AP Earned|
|FF8_EN.exe+18FF618||2 Bytes|Quezacotl Current HP|
|FF8_EN.exe+18FF61A||2 Bytes|Quezacotl Max HP|
|FF8_EN.exe+18FF61C||4 Bytes|Quezacotl EXP Earned|
|FF8_EN.exe+18FF624||2 Bytes|Shiva Current HP|
|FF8_EN.exe+18FF626||2 Bytes|Shiva Max HP|
|FF8_EN.exe+18FF628||4 Bytes|Shiva EXP Earned|
|FF8_EN.exe+18FF630||2 Bytes|Ifrit Current HP|
|FF8_EN.exe+18FF632||2 Bytes|Ifrit Max HP|
|FF8_EN.exe+18FF634||4 Bytes|Ifrit EXP Earned|
|FF8_EN.exe+18FF63C||2 Bytes|Siren Current HP|
|FF8_EN.exe+18FF63E||2 Bytes|Siren Max HP|
|FF8_EN.exe+18FF640||4 Bytes|Siren EXP Earned|
|FF8_EN.exe+18FF648||2 Bytes|Brothers Current HP|
|FF8_EN.exe+18FF64A||2 Bytes|Brothers Max HP|
|FF8_EN.exe+18FF64C||4 Bytes|Brothers EXP Earned|
|FF8_EN.exe+18FF654||2 Bytes|Diablos Current HP|
|FF8_EN.exe+18FF656||2 Bytes|Diablos Max HP|
|FF8_EN.exe+18FF658||4 Bytes|Diablos EXP Earned|
|FF8_EN.exe+18FF660||2 Bytes|Carbuncle Current HP|
|FF8_EN.exe+18FF662||2 Bytes|Carbuncle Max HP|
|FF8_EN.exe+18FF664||4 Bytes|Carbuncle EXP Earned|
|FF8_EN.exe+18FF66C||2 Bytes|Leviathan Current HP|
|FF8_EN.exe+18FF66E||2 Bytes|Leviathan Max HP|
|FF8_EN.exe+18FF670||4 Bytes|Leviathan EXP Earned|
|FF8_EN.exe+18FF678||2 Bytes|Pandemona Current HP|
|FF8_EN.exe+18FF67A||2 Bytes|Pandemona Max HP|
|FF8_EN.exe+18FF67C||4 Bytes|Pandemona EXP Earned|
|FF8_EN.exe+18FF684||2 Bytes|Cerberus Current HP|
|FF8_EN.exe+18FF686||2 Bytes|Cerberus Max HP|
|FF8_EN.exe+18FF688||4 Bytes|Cerberus EXP Earned|
|FF8_EN.exe+18FF690||2 Bytes|Alexander Current HP|
|FF8_EN.exe+18FF692||2 Bytes|Alexander Max HP|
|FF8_EN.exe+18FF694||4 Bytes|Alexander EXP Earned|
|FF8_EN.exe+18FF69C||2 Bytes|Doomtrain Current HP|
|FF8_EN.exe+18FF69E||2 Bytes|Doomtrain Max HP|
|FF8_EN.exe+18FF6A0||4 Bytes|Doomtrain EXP Earned|
|FF8_EN.exe+18FF6A8||2 Bytes|Bahamut Current HP|
|FF8_EN.exe+18FF6AA||2 Bytes|Bahamut Max HP|
|FF8_EN.exe+18FF6AC||4 Bytes|Bahamut EXP Earned|
|FF8_EN.exe+18FF6B4||2 Bytes|Cactaur Current HP|
|FF8_EN.exe+18FF6B6||2 Bytes|Cactaur Max HP|
|FF8_EN.exe+18FF6B8||4 Bytes|Cactaur EXP Earned|
|FF8_EN.exe+18FF6C0||2 Bytes|Tonberry Current HP|
|FF8_EN.exe+18FF6C2||2 Bytes|Tonberry Max HP|
|FF8_EN.exe+18FF6C4||4 Bytes|Tonberry EXP Earned|
|FF8_EN.exe+18FF6CC||2 Bytes|Eden Current HP|
|FF8_EN.exe+18FF6CE||2 Bytes|Eden Max HP|
|FF8_EN.exe+18FF6D0||4 Bytes|Eden EXP Earned|
|FF8_EN.exe+1927B24||2 Bytes|In Battle: Party Slot 1 Current ATB Value|
|FF8_EN.exe+1927B28||2 Bytes|In Battle: Party Slot 1 Current HP|
|FF8_EN.exe+1927B2C||2 Bytes|In Battle: Party Slot 1 Max HP|
|FF8_EN.exe+1927BF4||2 Bytes|In Battle: Party Slot 2 Current ATB Value|
|FF8_EN.exe+1927BF8||2 Bytes|In Battle: Party Slot 2 Current HP|
|FF8_EN.exe+1927BFC||2 Bytes|In Battle: Party Slot 2 Max HP|
|FF8_EN.exe+1927CC4||2 Bytes|In Battle: Party Slot 3 Current ATB Value|
|FF8_EN.exe+1927CC8||2 Bytes|In Battle: Party Slot 3 Current HP|
|FF8_EN.exe+1927CCC||2 Bytes|In Battle: Party Slot 3 Max HP|
|FF8_EN.exe+1927D90||2 Bytes|In Battle: Enemy Slot 1 Max ATB|
|FF8_EN.exe+1927D94||4 Bytes|In Battle: Enemy Slot 1 Current ATB|
|FF8_EN.exe+1927D98||4 Bytes|In Battle: Enemy Slot 1 Current HP|
|FF8_EN.exe+1927D9C||4 Bytes|In Battle: Enemy Slot 1 Max HP|
|FF8_EN.exe+1927E60||4 Bytes|In Battle: Enemy Slot 2 Max ATB|
|FF8_EN.exe+1927E64||4 Bytes|In Battle: Enemy Slot 2 Current ATB|
|FF8_EN.exe+1927E68||4 Bytes|In Battle: Enemy Slot 2 Current HP|
|FF8_EN.exe+1927E6C||4 Bytes|In Battle: Enemy Slot 2 Max HP|
|FF8_EN.exe+1927F30||4 Bytes|In Battle: Enemy Slot 3 Max ATB|
|FF8_EN.exe+1927F34||4 Bytes|In Battle: Enemy Slot 3 Current ATB|
|FF8_EN.exe+1927F38||4 Bytes|In Battle: Enemy Slot 3 Current HP|
|FF8_EN.exe+1927F3C||4 Bytes|In Battle: Enemy Slot 3 Max HP|
|FF8_EN.exe+1927F58||1 Byte |Ultimecia Death Animation - changes from 0 to 1 when Ultimecia receives final hit|
|FF8_EN.exe+1928000||4 Bytes|In Battle: Enemy Slot 4 Max ATB|
|FF8_EN.exe+1928004||4 Bytes|In Battle: Enemy Slot 4 Current ATB|
|FF8_EN.exe+1928008||4 Bytes|In Battle: Enemy Slot 4 Current HP|
|FF8_EN.exe+192800C||4 Bytes|In Battle: Enemy Slot 4 Max HP|
|FF8_EN.exe+1928F18||1 Byte |In Battle: Enemy 1 Draw 1 [Spell ID](magic.md)|
|FF8_EN.exe+1928F1C||1 Byte |In Battle: Enemy 1 Draw 2 [Spell ID](magic.md)|
|FF8_EN.exe+1928F20||1 Byte |In Battle: Enemy 1 Draw 3 [Spell ID](magic.md)|
|FF8_EN.exe+1928F24||1 Byte |In Battle: Enemy 1 Draw 4 [Spell ID](magic.md)|
|FF8_EN.exe+1928F5F||1 Byte |In Battle: Enemy 2 Draw 1 [Spell ID](magic.md)|
|FF8_EN.exe+1928F63||1 Byte |In Battle: Enemy 2 Draw 2 [Spell ID](magic.md)|
|FF8_EN.exe+1928F67||1 Byte |In Battle: Enemy 2 Draw 3 [Spell ID](magic.md)|
|FF8_EN.exe+1928F6B||1 Byte |In Battle: Enemy 2 Draw 4 [Spell ID](magic.md)|
|FF8_EN.exe+1928FA6||1 Byte |In Battle: Enemy 3 Draw 1 [Spell ID](magic.md)|
|FF8_EN.exe+1928FAA||1 Byte |In Battle: Enemy 3 Draw 2 [Spell ID](magic.md)|
|FF8_EN.exe+1928FAE||1 Byte |In Battle: Enemy 3 Draw 3 [Spell ID](magic.md)|
|FF8_EN.exe+1928FB2||1 Byte |In Battle: Enemy 3 Draw 4 [Spell ID](magic.md)|
|FF8_EN.exe+1928FED||1 Byte |In Battle: Enemy 4 Draw 1 [Spell ID](magic.md)|
|FF8_EN.exe+1928FF1||1 Byte |In Battle: Enemy 4 Draw 2 [Spell ID](magic.md)|
|FF8_EN.exe+1928FF5||1 Byte |In Battle: Enemy 4 Draw 3 [Spell ID](magic.md)|
|FF8_EN.exe+1928FFF||1 Byte |In Battle: Enemy 4 Draw 4 [Spell ID](magic.md)|
|FF8_EN.exe+1996DA8||2 Bytes|Current/Most Recent [Encounter ID](encounter-ids.md)|
|FF8_EN.exe+19CD798||1 Byte|Triple Triad - In Game: 1 yes; 0 no|
|FF8_EN.exe+1C3ED02||2 Bytes|Camera direction in World Map (0/North - 4095)|
|FF8_EN.exe+1C3ED08||2 Bytes|Something to do with Camera Tilt in World Map|
|FF8_EN.exe+1C3ED2C||2 Bytes|In Town: 0 on world map; 1 in local/dungeon maps; 1 in menu; 1 in battle.|
|FF8_EN.exe+1C3ED30||1 Byte|[Button Presses](buttons.md) (Byte 1)|
|FF8_EN.exe+1C3ED31||1 Byte|[Button Presses](buttons.md) (Byte 2)|
|FF8_EN.exe+1C3EE80||4 Bytes|World Map Coord X|
|FF8_EN.exe+1C3EE84||4 Bytes|World Map Coord Y|
|FF8_EN.exe+1C3EE88||4 Bytes|World Map Coord Z|
|FF8_EN.exe+1C40A5E||1 Byte|Danger Value (in World Map) [See section 10.1 here](https://gamefaqs.gamespot.com/ps/197343-final-fantasy-viii/faqs/58936)|
|FF8_EN.exe+1C9CEF0||1 Byte|In Battle: Current GF Boost (0-255)|

# Draw Points
Each draw point byte in the game's memory actually contains information for FOUR distinct draw points.

Essentially the formula is SUM(i x status) from i=1 to i=4
```
          Full    Half    Empty   Exhausted (i.e. will never refill)
1st point: +0     +1      +2      +3   
2nd point: +0     +4      +8      +12  
3rd point: +0     +16     +32     +48  
4th point: +0     +64     +128    +192
```

In other words:
```
Binary: 1 1 0 0 0 0 0 0
   Pt 4 ^ ^
   Pt 3     ^ ^
   Pt 2         ^ ^
   Pt 1             ^ ^
```
|Memory Offset (EN)|Point Numer|Location ID|Location Name|Spell ID|Spell Name|
|----|----|----|----|----|----|
|18FEA2C|1|65|B-Garden - Front Gate|21|Cure|
|18FEA2C|2|78|B-Garden - Training Center|4|Blizzard|
|18FEA2C|3|68|B-Garden - MD Level|25|Full-life|
|18FEA2C|4|64|B-Garden - Library|27|Esuna|
|18FEA2D|1|67|B-Garden - Cafeteria|13|Demi|
|18FEA2D|2|81|B-Garden - Master Room|12|Bio|
|18FEA2D|3|85|Balamb - Town Square|7|Thunder|
|18FEA2D|4|87|Balamb Harbor|21|Cure|
|18FEA2E|1|92|Fire Cavern|1|Fire|
|18FEA2E|2|93|Dollet - Town Square|41|Silence|
|18FEA2E|3|99|Dollet - Comm Tower|38|Blind|
|18FEA2E|4|101|Timber - City Square|50|Scan|
|18FEA2F|1|101|Timber - City Square|21|Cure|
|18FEA2F|2|109|Timber - Editorial Department|6|Blizzaga|
|18FEA2F|3|113|G-Garden - Hall|35|Haste|
|18FEA2F|4|117|G-Garden - Clubroom|24|Life|
|18FEA30|1|122|G-Garden - Athletic Track|30|Shell|
|18FEA30|2|125|G-Garden - Gymnasium|29|Protect|
|18FEA30|3|121|G-Garden - Auditorium|33|Double|
|18FEA30|4|124|G-Garden - Back Entrance|32|Aura|
|18FEA31|1|110|Timber Forest|21|Cure|
|18FEA31|2|110|Timber Forest|10|Water|
|18FEA31|3|129|Deling City - City Square|8|Thundara|
|18FEA31|4|134|Deling City - Sewer|48|Zombie|
|18FEA32|1|134|Deling City - Sewer|27|Esuna|
|18FEA32|2|134|Deling City - Sewer|12|Bio|
|18FEA32|3|-1|???|2|Fira|
|18FEA32|4|135|Galbadia D -District Prison|46|Berserk|
|18FEA33|1|135|Galbadia D -District Prison|9|Thundaga|
|18FEA33|2|136|Desert|11|Aero|
|18FEA33|3|137|Galbadia Missile Base|5|Blizzara|
|18FEA33|4|137|Galbadia Missile Base|38|Blind|
|18FEA34|1|137|Galbadia Missile Base|25|Full-life|
|18FEA34|2|138|Winhill Village|44|Drain|
|18FEA34|3|138|Winhill Village|28|Dispel|
|18FEA34|4|140|Winhill - Vacant House|23|Curaga|
|18FEA35|1|138|Winhill Village|31|Reflect|
|18FEA35|2|145|Tomb of the Unknown King|29|Protect|
|18FEA35|3|145|Tomb of the Unknown King|47|Float|
|18FEA35|4|145|Tomb of the Unknown King|22|Cura|
|18FEA36|1|154|FH - Station Yard|35|Haste|
|18FEA36|2|147|FH - Residential Area|30|Shell|
|18FEA36|3|146|Fishermans Horizon|26|Regen|
|18FEA36|4|150|FH - Factory|25|Full-life|
|18FEA37|1|149|FH - Mayor's Residence|19|Ultima|
|18FEA37|2|157|FH - Great Salt Lake|9|Thundaga|
|18FEA37|3|157|FH - Great Salt Lake|16|Meteor|
|18FEA37|4|159|Esthar - City|23|Curaga|
|18FEA38|1|159|Esthar - City|4|Blizzard|
|18FEA38|2|160|Esthar - Odine's Laboratory|17|Quake|
|18FEA38|3|159|Esthar - City|18|Tornado|
|18FEA38|4|167|Dr. Odine's Laboratory - Lobby|33|Double|
|18FEA39|1|-1|???|45|Pain|
|18FEA39|2|167|Dr. Odine's Laboratory - Lobby|15|Flare|
|18FEA39|3|173|Esthar Sorceress Memorial|37|Stop|
|18FEA39|4|-1|???|37|Stop|
|18FEA3A|1|177|Tears' Point|24|Life|
|18FEA3A|2|177|Tears' Point|31|Reflect|
|18FEA3A|3|178|Lunatic Pandora Laboratory|43|Death|
|18FEA3A|4|182|Centra - Excavation Site|14|Holy|
|18FEA3B|1|182|Centra - Excavation Site|41|Silence|
|18FEA3B|2|182|Centra - Excavation Site|19|Ultima|
|18FEA3B|3|182|Centra - Excavation Site|39|Confuse|
|18FEA3B|4|181|Lunatic Pandora|42|Break|
|18FEA3C|1|181|Lunatic Pandora|16|Meteor|
|18FEA3C|2|181|Lunatic Pandora|23|Curaga|
|18FEA3C|3|-1|???|36|Slow|
|18FEA3C|4|185|Edea's House - Bedroom|23|Curaga|
|18FEA3D|1|-1|???|15|Flare|
|18FEA3D|2|-1|???|14|Holy|
|18FEA3D|3|182|Centra - Excavation Site|40|Sleep|
|18FEA3D|4|182|Centra - Excavation Site|39|Confuse|
|18FEA3E|1|189|Centra Ruins|11|Aero|
|18FEA3E|2|189|Centra Ruins|44|Drain|
|18FEA3E|3|189|Centra Ruins|45|Pain|
|18FEA3E|4|190|Trabia Garden - Front Gate|9|Thundaga|
|18FEA3F|1|191|T-Garden - Cemetery|48|Zombie|
|18FEA3F|2|193|T-Garden - Festival Stage|32|Aura|
|18FEA3F|3|197|Shumi Village - Desert Village|19|Ultima|
|18FEA3F|4|199|Shumi Village - Village|6|Blizzaga|
|18FEA40|1|201|Shumi Village - Residence|3|Firaga|
|18FEA40|2|-1|???|18|Tornado|
|18FEA40|3|207|White SeeD Ship - Cabin|14|Holy|
|18FEA40|4|210|Ragnarok - Aisle|22|Cura|
|18FEA41|1|210|Ragnarok - Aisle|24|Life|
|18FEA41|2|211|Ragnarok - Hangar|25|Full-life|
|18FEA41|3|217|Deep Sea Research Center - Levels|28|Dispel|
|18FEA41|4|217|Deep Sea Research Center - Levels|27|Esuna|
|18FEA42|1|218|Deep Sea Deposit|34|Triple|
|18FEA42|2|218|Deep Sea Deposit|19|Ultima|
|18FEA42|3|221|Lunar Base - Pod|49|Meltdown|
|18FEA42|4|225|Lunar Base - Residential Zone|16|Meteor|
|18FEA43|1|-1|???|35|Haste|
|18FEA43|2|-1|???|36|Slow|
|18FEA43|3|-1|???|23|Curaga|
|18FEA43|4|-1|???|24|Life|
|18FEA44|1|-1|???|37|Stop|
|18FEA44|2|-1|???|26|Regen|
|18FEA44|3|-1|???|33|Double|
|18FEA44|4|228|Wilderness|34|Triple|
|18FEA45|1|248|Ultimecia Castle|15|Flare|
|18FEA45|2|237|Ultimecia Castle - Storage Room|23|Curaga|
|18FEA45|3|233|Ultimecia Castle - Passageway|22|Cura|
|18FEA45|4|-1|???|50|Scan|
|18FEA46|1|-1|???|27|Esuna|
|18FEA46|2|243|Ultimecia Castle - Courtyard|36|Slow|
|18FEA46|3|244|Ultimecia Castle - Chapel|28|Dispel|
|18FEA46|4|245|Ultimecia Castle - Clock Tower|37|Stop|
|18FEA47|1|246|Ultimecia Castle - Master Room|24|Life|
|18FEA47|2|-1|???|15|Flare|
|18FEA47|3|232|Ultimecia Castle - Wine Cellar|32|Aura|
|18FEA47|4|236|Ultimecia Castle - Treasure Rm|14|Holy|
|18FEA48|1|231|Ultimecia Castle - Terrace|16|Meteor|
|18FEA48|2|238|Ultimecia Castle - Art Gallery|49|Meltdown|
|18FEA48|3|240|Ultimecia Castle - Armory|19|Ultima|
|18FEA48|4|241|Ultimecia Castle - Prison Cell|25|Full-life|
|18FEA49|1|245|Ultimecia Castle - Clock Tower|34|Triple|
|18FEA49|2|-1|???|1|Fire|
|18FEA49|3|-1|???|1|Fire|
|18FEA49|4|-1|???|1|Fire|
|18FEA4A|1|-1|???|1|Fire|
|18FEA4A|2|-1|???|1|Fire|
|18FEA4A|3|-1|???|1|Fire|
|18FEA4A|4|-1|???|1|Fire|
|18FEA4B|1|-1|???|1|Fire|
|18FEA4B|2|-1|???|1|Fire|
|18FEA4B|3|-1|???|1|Fire|
|18FEA4B|4|-1|???|1|Fire|
|18FEA4C|1|1|Balamb - Alcauld Plains|21|Cure|
|18FEA4C|2|1|Balamb - Alcauld Plains|27|Esuna|
|18FEA4C|3|6|Timber - Mandy Beach|7|Thunder|
|18FEA4C|4|8|Timber - Lanker Plains|2|Fira|
|18FEA4D|1|17|Timber - Shenand Hill|8|Thundara|
|18FEA4D|2|15|Galbadia - Monterosa Plateau|5|Blizzara|
|18FEA4D|3|10|Timber - Yaulny Canyon|4|Blizzard|
|18FEA4D|4|-1|???|1|Fire|
|18FEA4E|1|11|Dollet - Hasberry Plains|21|Cure|
|18FEA4E|2|14|Dollet - Malgo Peninsula|10|Water|
|18FEA4E|3|11|Dollet - Hasberry Plains|22|Cura|
|18FEA4E|4|20|Great Plains of Galbadia|27|Esuna|
|18FEA4F|1|21|Galbadia - Wilburn Hill|50|Scan|
|18FEA4F|2|15|Galbadia - Monterosa Plateau|30|Shell|
|18FEA4F|3|23|Galbadia - Dingo Desert|35|Haste|
|18FEA4F|4|15|Galbadia - Monterosa Plateau|11|Aero|
|18FEA50|1|15|Galbadia - Monterosa Plateau|12|Bio|
|18FEA50|2|24|Winhill - Winhill Bluffs|24|Life|
|18FEA50|3|62|Centra - Centra Crater|13|Demi|
|18FEA50|4|61|Centra - Nectar Peninsula|29|Protect|
|18FEA51|1|57|Centra - Cape of Good Hope|14|Holy|
|18FEA51|2|55|Centra - Almaj Mountains|9|Thundaga|
|18FEA51|3|53|Esthar - Shalmal Peninsula|37|Stop|
|18FEA51|4|50|Esthar - Kashkabald Desert|3|Firaga|
|18FEA52|1|26|Trabia - Winter Island|26|Regen|
|18FEA52|2|26|Trabia - Winter Island|6|Blizzaga|
|18FEA52|3|30|Trabia - Hawkwind Plains|39|Confuse|
|18FEA52|4|32|Trabia - Bika Snowfield|15|Flare|
|18FEA53|1|32|Trabia - Bika Snowfield|28|Dispel|
|18FEA53|2|32|Trabia - Bika Snowfield|36|Slow|
|18FEA53|3|37|Trabia - Vienne Mountains|17|Quake|
|18FEA53|4|46|Esthar - West Coast|23|Curaga|
|18FEA54|1|39|Esthar - Nortes Mountains|18|Tornado|
|18FEA54|2|39|Esthar - Nortes Mountains|25|Full-life|
|18FEA54|3|25|Winhill - Humphrey Archipelago|31|Reflect|
|18FEA54|4|13|Dollet - Long Horn Island|32|Aura|
|18FEA55|1|12|Dollet - Holy Glory Cape|17|Quake|
|18FEA55|2|-1|???|33|Double|
|18FEA55|3|17|Timber - Shenand Hill|42|Break|
|18FEA55|4|41|Esthar - Grandidi Forest|16|Meteor|
|18FEA56|1|41|Esthar - Grandidi Forest|19|Ultima|
|18FEA56|2|41|Esthar - Grandidi Forest|34|Triple|
|18FEA56|3|42|Esthar - Millefeuille Archipelago|39|Confuse|
|18FEA56|4|41|Esthar - Grandidi Forest|38|Blind|
|18FEA57|1|26|Trabia - Winter Island|17|Quake|
|18FEA57|2|26|Trabia - Winter Island|40|Sleep|
|18FEA57|3|26|Trabia - Winter Island|41|Silence|
|18FEA57|4|32|Trabia - Bika Snowfield|15|Flare|
|18FEA58|1|31|Trabia - Albatross Archipelago|43|Death|
|18FEA58|2|12|Dollet - Holy Glory Cape|44|Drain|
|18FEA58|3|11|Dollet - Hasberry Plains|45|Pain|
|18FEA58|4|15|Galbadia - Monterosa Plateau|46|Berserk|
|18FEA59|1|21|Galbadia - Wilburn Hill|47|Float|
|18FEA59|2|22|Galbadia - Rem Archipelago|48|Zombie|
|18FEA59|3|15|Galbadia - Monterosa Plateau|49|Meltdown|
|18FEA59|4|16|Galbadia - Lallapalooza Canyon|48|Zombie|
|18FEA5A|1|51|Island Closest to Heaven|18|Tornado|
|18FEA5A|2|51|Island Closest to Heaven|17|Quake|
|18FEA5A|3|51|Island Closest to Heaven|16|Meteor|
|18FEA5A|4|51|Island Closest to Heaven|14|Holy|
|18FEA5B|1|51|Island Closest to Heaven|15|Flare|
|18FEA5B|2|51|Island Closest to Heaven|32|Aura|
|18FEA5B|3|51|Island Closest to Heaven|19|Ultima|
|18FEA5B|4|51|Island Closest to Heaven|34|Triple|
|18FEA5C|1|51|Island Closest to Heaven|24|Life|
|18FEA5C|2|51|Island Closest to Heaven|18|Tornado|
|18FEA5C|3|51|Island Closest to Heaven|17|Quake|
|18FEA5C|4|51|Island Closest to Heaven|16|Meteor|
|18FEA5D|1|51|Island Closest to Heaven|14|Holy|
|18FEA5D|2|51|Island Closest to Heaven|15|Flare|
|18FEA5D|3|51|Island Closest to Heaven|32|Aura|
|18FEA5D|4|51|Island Closest to Heaven|19|Ultima|
|18FEA5E|1|51|Island Closest to Heaven|34|Triple|
|18FEA5E|2|51|Island Closest to Heaven|24|Life|
|18FEA5E|3|51|Island Closest to Heaven|18|Tornado|
|18FEA5E|4|51|Island Closest to Heaven|17|Quake|
|18FEA5F|1|51|Island Closest to Heaven|16|Meteor|
|18FEA5F|2|51|Island Closest to Heaven|14|Holy|
|18FEA5F|3|51|Island Closest to Heaven|15|Flare|
|18FEA5F|4|51|Island Closest to Heaven|32|Aura|
|18FEA60|1|51|Island Closest to Heaven|19|Ultima|
|18FEA60|2|51|Island Closest to Heaven|34|Triple|
|18FEA60|3|51|Island Closest to Heaven|24|Life|
|18FEA60|4|51|Island Closest to Heaven|19|Ultima|
|18FEA61|1|19|Island Closest to Hell|16|Meteor|
|18FEA61|2|19|Island Closest to Hell|14|Holy|
|18FEA61|3|19|Island Closest to Hell|15|Flare|
|18FEA61|4|19|Island Closest to Hell|32|Aura|
|18FEA62|1|19|Island Closest to Hell|19|Ultima|
|18FEA62|2|19|Island Closest to Hell|34|Triple|
|18FEA62|3|19|Island Closest to Hell|24|Life|
|18FEA62|4|19|Island Closest to Hell|16|Meteor|
|18FEA63|1|19|Island Closest to Hell|14|Holy|
|18FEA63|2|19|Island Closest to Hell|34|Triple|
|18FEA63|3|19|Island Closest to Hell|32|Aura|
|18FEA63|4|19|Island Closest to Hell|19|Ultima|
|18FEA64|1|19|Island Closest to Hell|34|Triple|
|18FEA64|2|19|Island Closest to Hell|24|Life|
|18FEA64|3|19|Island Closest to Hell|16|Meteor|
|18FEA64|4|19|Island Closest to Hell|14|Holy|
|18FEA65|1|19|Island Closest to Hell|15|Flare|
|18FEA65|2|19|Island Closest to Hell|32|Aura|
|18FEA65|3|19|Island Closest to Hell|19|Ultima|
|18FEA65|4|19|Island Closest to Hell|34|Triple|
|18FEA66|1|19|Island Closest to Hell|24|Life|
|18FEA66|2|19|Island Closest to Hell|16|Meteor|
|18FEA66|3|19|Island Closest to Hell|34|Triple|
|18FEA66|4|19|Island Closest to Hell|15|Flare|
|18FEA67|1|19|Island Closest to Hell|32|Aura|
|18FEA67|2|19|Island Closest to Hell|19|Ultima|
|18FEA67|3|19|Island Closest to Hell|34|Triple|
|18FEA67|4|19|Island Closest to Hell|24|Life|
|18FEA68|1|19|Island Closest to Hell|16|Meteor|
|18FEA68|2|19|Island Closest to Hell|14|Holy|
|18FEA68|3|19|Island Closest to Hell|15|Flare|
|18FEA68|4|19|Island Closest to Hell|32|Aura|
|18FEA69|1|19|Island Closest to Hell|19|Ultima|
|18FEA69|2|1|Balamb - Alcauld Plains|4|Blizzard|
|18FEA69|3|1|Balamb - Alcauld Plains|21|Cure|
|18FEA69|4|15|Galbadia - Monterosa Plateau|28|Dispel|
|18FEA6A|1|20|Great Plains of Galbadia|39|Confuse|
|18FEA6A|2|43|Great Plains of Esthar|16|Meteor|
|18FEA6A|3|43|Great Plains of Esthar|33|Double|
|18FEA6A|4|43|Great Plains of Esthar|33|Double|
|18FEA6B|1|43|Great Plains of Esthar|14|Holy|
|18FEA6B|2|47|Esthar - Sollet Mountains|15|Flare|
|18FEA6B|3|48|Esthar - Abadan Plains|19|Ultima|
|18FEA6B|4|-1|???|50|Scan|
