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

|Offset (EN)|Offset (FR)|Length |Description|
|-----------|-----------|-------|-----------|
|19CD798  |           |1 Byte |Triple Triad - In Game: 1 yes; 0 no|
|18FEA0C  |           |2 Bytes|Previous Screen's [Map ID](maps.md)|
|1927D90  |           |2 Bytes|In Battle: Enemy (Position 1) Max ATB|
|1927D94  |           |4 Bytes|In Battle: Enemy (Position 1) Current ATB|
|1927D98  |           |4 Bytes|In Battle: Enemy (Position 1) Current HP|
|1927D9C  |           |4 Bytes|In Battle: Enemy (Position 1) Max HP|
|1927E60  |           |4 Bytes|In Battle: Enemy (Position 2) Max ATB|
|1927E64  |           |4 Bytes|In Battle: Enemy (Position 2) Current ATB|
|1927E68  |           |4 Bytes|In Battle: Enemy (Position 2) Current HP|
|1927E6C  |           |4 Bytes|In Battle: Enemy (Position 2) Max HP|
|1927F30  |           |4 Bytes|In Battle: Enemy (Position 3) Max ATB|
|1927F34  |           |4 Bytes|In Battle: Enemy (Position 3) Current ATB|
|1927F38  |           |4 Bytes|In Battle: Enemy (Position 3) Current HP|
|1927F3C  |           |4 Bytes|In Battle: Enemy (Position 3) Max HP|
|1928000  |           |4 Bytes|In Battle: Enemy (Position 4) Max ATB|
|1928004  |           |4 Bytes|In Battle: Enemy (Position 4) Current ATB|
|1928008  |           |4 Bytes|In Battle: Enemy (Position 4) Current HP|
|192800C  |           |4 Bytes|In Battle: Enemy (Position 4) Max HP|
|18FF5C0  |           |2 Bytes|In Battle: AP Earned|
|18FF574  |           |2 Bytes|In Battle: XP Earned|
|1928F18  |           |4 Bytes|In Battle: Enemy 1 Draw 1 [Spell ID](magic.md)|
|1928F1C  |           |4 Bytes|In Battle: Enemy 1 Draw 2 [Spell ID](magic.md)|
|1928F20  |           |4 Bytes|In Battle: Enemy 1 Draw 3 [Spell ID](magic.md)|
|1928F24  |           |4 Bytes|In Battle: Enemy 1 Draw 4 [Spell ID](magic.md)|
|1928F5F  |           |4 Bytes|In Battle: Enemy 2 Draw 1 [Spell ID](magic.md)|
|1928F63  |           |4 Bytes|In Battle: Enemy 2 Draw 2 [Spell ID](magic.md)|
|1928F67  |           |4 Bytes|In Battle: Enemy 2 Draw 3 [Spell ID](magic.md)|
|1928F6B  |           |4 Bytes|In Battle: Enemy 2 Draw 4 [Spell ID](magic.md)|
|1928FA6  |           |4 Bytes|In Battle: Enemy 3 Draw 1 [Spell ID](magic.md)|
|1928FAA  |           |4 Bytes|In Battle: Enemy 3 Draw 2 [Spell ID](magic.md)|
|1928FAE  |           |4 Bytes|In Battle: Enemy 3 Draw 3 [Spell ID](magic.md)|
|1928FB2  |           |4 Bytes|In Battle: Enemy 3 Draw 4 [Spell ID](magic.md)|
|1928FED  |           |4 Bytes|In Battle: Enemy 4 Draw 1 [Spell ID](magic.md)|
|1928FF1  |           |4 Bytes|In Battle: Enemy 4 Draw 2 [Spell ID](magic.md)|
|1928FF5  |           |4 Bytes|In Battle: Enemy 4 Draw 3 [Spell ID](magic.md)|
|1928FFF  |           |4 Bytes|In Battle: Enemy 4 Draw 4 [Spell ID](magic.md)|
|1927B24  |           |2 Bytes|In Battle: Party Slot 1 Current ATB Value|
|1927B28  |           |2 Bytes|In Battle: Party Slot 1 Current HP|
|1927B2C  |           |2 Bytes|In Battle: Party Slot 1 Max HP|
|1927BF4  |           |2 Bytes|In Battle: Party Slot 2 Current ATB Value|
|1927BF8  |           |2 Bytes|In Battle: Party Slot 2 Current HP|
|1927BFC  |           |2 Bytes|In Battle: Party Slot 2 Max HP|
|1927CC4  |           |2 Bytes|In Battle: Party Slot 3 Current ATB Value|
|1927CC8  |           |2 Bytes|In Battle: Party Slot 3 Current HP|
|1927CCC  |           |2 Bytes|In Battle: Party Slot 3 Max HP|
|1C9CEF0  |           |1 Byte |In Battle: Current GF Boost (0-255)|
|18FEAC8  |           |1 Byte |Triple Triad: Balamb [Play Rules](triple-triad.md)|
|18FEAC9  |           |1 Byte |Triple Triad: Galbadia [Play Rules](triple-triad.md)|
|18FEACA  |           |1 Byte |Triple Triad: Trabia [Play Rules](triple-triad.md)|
|18FEACB  |           |1 Byte |Triple Triad: Centra [Play Rules](triple-triad.md)|
|18FEACC  |           |1 Byte |Triple Triad: Dollet [Play Rules](triple-triad.md)|
|18FEACD  |           |1 Byte |Triple Triad: FH [Play Rules](triple-triad.md)|
|18FEACE  |           |1 Byte |Triple Triad: Space [Play Rules](triple-triad.md)|
|18FEACF  |           |1 Byte |Triple Triad: Esthar [Play Rules](triple-triad.md)|
|18FEAD0  |           |1 Byte |Triple Triad: Balamb [Trade Rule](triple-triad.md)|
|18FEAD1  |           |1 Byte |Triple Triad: Galbadia [Trade Rule](triple-triad.md)|
|18FEAD2  |           |1 Byte |Triple Triad: Trabia [Trade Rule](triple-triad.md)|
|18FEAD3  |           |1 Byte |Triple Triad: Centra [Trade Rule](triple-triad.md)|
|18FEAD4  |           |1 Byte |Triple Triad: Dollet [Trade Rule](triple-triad.md)|
|18FEAD5  |           |1 Byte |Triple Triad: FH [Trade Rule](triple-triad.md)|
|18FEAD6  |           |1 Byte |Triple Triad: Space [Trade Rule](triple-triad.md)|
|18FEAD7  |           |1 Byte |Triple Triad: Esthar [Trade Rule](triple-triad.md)|
|18FEADA  |           |1 Byte |Triple Triad: Last Region Played|
|18FEADB  |           |1 Byte |Triple Triad: Second Last Region Played|
|18FEFAC  |           |1 Byte |Triple Triad: Total Wins|
|18FEFAE  |           |1 Byte |Triple Triad: Total Losses|
|18FEFB0  |           |1 Byte |Triple Triad: Total Draws|
|18FE9C8  |           |2 Bytes|SeeD Pts (every 100 = rank up)|
|18FE764  |           |4 Bytes|Current Gil|
|18FE9CC  |           |2 Bytes|Battles Won|
|18FE9D2  |           |2 Bytes|Battles Escaped|
|18FE928  |           |4 Bytes|Play Time (Seconds)|
|18FEAB8  |           |2 Bytes|[Story Progress](story-progress.md)|
|18FE940  |           |1 Byte |Centra Tonberry Kills|
|1C3ED2C  |           |2 Bytes|In Town: 0 on world map; 1 in local/dungeon maps; 1 in menu; 1 in battle.|
|18D2FC0  |           |2 Bytes|Current [Map ID](maps.md)|
|18E490B  |           |1 Byte |Game is Savable (i.e. save anywhere). Lock to 1 to save anywhere. Save points set this value to 3.|
|1996DA8  |           |2 Bytes|Current/Most Recent [Encounter ID](encounter-ids.md)|
|18DC74A  |           |1 Byte |Danger Value (except World Map)|
|1C40A5E  |           |1 Byte |Danger Value (in World Map) [See section 10.1 here](https://gamefaqs.gamespot.com/ps/197343-final-fantasy-viii/faqs/58936)|
|18FE9BC  |           |4 Bytes|Total steps taken|
|18FE9C1  |           |1 Byte |SeeD Payout Timer (increments every ~6 running steps; more research needed) |
|18FE9C0  |           |1 Byte |SeeD Payout RNG (changes every step; more research needed)|
|18FE9D4  |           |2 Bytes|Squall's Kill Count|
|18FE9D6  |           |2 Bytes|Zell's Kill Count|
|18FE9D8  |           |2 Bytes|Irvine's Kill Count|
|18FE9DA  |           |2 Bytes|Quistis's Kill Count|
|18FE9DC  |           |2 Bytes|Rinoa's Kill Count|
|18FE9DE  |           |2 Bytes|Selphie's Kill Count|
|18FE9E4  |           |2 Bytes|Squall's Death Count|
|18FE9E6  |           |2 Bytes|Zell's Death Count|
|18FE9E8  |           |2 Bytes|Irvine's Death Count|
|18FE9EA  |           |2 Bytes|Quistis's Death Count|
|18FE9EC  |           |2 Bytes|Rinoa's Death Count|
|18FE9EE  |           |2 Bytes|Selphie's Death Count|
|18FE9FC  |           |4 Bytes|Total Enemies Killed|
|18FEB32  |           |1 Byte |Centra Ruins Timer|
|1C3ED02  |           |2 Bytes|Camera direction in World Map (0/North - 4095)|
|1C3ED08  |           |2 Bytes|Something to do with Camera Tilt in World Map
|1C3ED30  |           |1 Byte |[Button Presses](buttons.md) (Byte 1)
|1C3ED31  |           |1 Byte |[Button Presses](buttons.md) (Byte 2)
|18FE79C  |           |1 Byte |[Item ID](items.md) in Slot 1|
|18FE79D  |           |1 Byte |Item Slot 1 Quantity|
|18FE79E  |           |1 Byte |[Item ID](items.md) in Slot 2|
|18FE79F  |           |1 Byte |Item Slot 2 Quantity|
|18FE7A0  |           |1 Byte |[Item ID](items.md) in Slot 3|
|18FE7A1  |           |1 Byte |Item Slot 3 Quantity|
|18FE7A2  |           |1 Byte |[Item ID](items.md) in Slot 4|
|18FE7A3  |           |1 Byte |Item Slot 4 Quantity|
|18FE7A4  |           |1 Byte |[Item ID](items.md) in Slot 5|
|18FE7A5  |           |1 Byte |Item Slot 5 Quantity|
|18FE7A6  |           |1 Byte |[Item ID](items.md) in Slot 6|
|18FE7A7  |           |1 Byte |Item Slot 6 Quantity|
|18FE7A8  |           |1 Byte |[Item ID](items.md) in Slot 7|
|18FE7A9  |           |1 Byte |Item Slot 7 Quantity|
|18FE7AA  |           |1 Byte |[Item ID](items.md) in Slot 8|
|18FE7AB  |           |1 Byte |Item Slot 8 Quantity|
|18FE7AC  |           |1 Byte |[Item ID](items.md) in Slot 9|
|18FE7AD  |           |1 Byte |Item Slot 9 Quantity|
|18FE7AE  |           |1 Byte |[Item ID](items.md) in Slot 10|
|18FE7AF  |           |1 Byte |Item Slot 10 Quantity|
|18FE7B0  |           |1 Byte |[Item ID](items.md) in Slot 11|
|18FE7B1  |           |1 Byte |Item Slot 11 Quantity|
|18FE7B2  |           |1 Byte |[Item ID](items.md) in Slot 12|
|18FE7B3  |           |1 Byte |Item Slot 12 Quantity|
|18FE7B4  |           |1 Byte |[Item ID](items.md) in Slot 13|
|18FE7B5  |           |1 Byte |Item Slot 13 Quantity|
|18FE7B6  |           |1 Byte |[Item ID](items.md) in Slot 14|
|18FE7B7  |           |1 Byte |Item Slot 14 Quantity|
|18FE7B8  |           |1 Byte |[Item ID](items.md) in Slot 15|
|18FE7B9  |           |1 Byte |Item Slot 15 Quantity|
|18FE7BA  |           |1 Byte |[Item ID](items.md) in Slot 16|
|18FE7BB  |           |1 Byte |Item Slot 16 Quantity|
|18FE7BC  |           |1 Byte |[Item ID](items.md) in Slot 17|
|18FE7BD  |           |1 Byte |Item Slot 17 Quantity|
|18FE7BE  |           |1 Byte |[Item ID](items.md) in Slot 18|
|18FE7BF  |           |1 Byte |Item Slot 18 Quantity|
|18FE7C0  |           |1 Byte |[Item ID](items.md) in Slot 19|
|18FE7C1  |           |1 Byte |Item Slot 19 Quantity|
|18FE7C2  |           |1 Byte |[Item ID](items.md) in Slot 20|
|18FE7C3  |           |1 Byte |Item Slot 20 Quantity|
|18FE7C4  |           |1 Byte |[Item ID](items.md) in Slot 21|
|18FE7C5  |           |1 Byte |Item Slot 21 Quantity|
|18FE7C6  |           |1 Byte |[Item ID](items.md) in Slot 22|
|18FE7C7  |           |1 Byte |Item Slot 22 Quantity|
|18FE7C8  |           |1 Byte |[Item ID](items.md) in Slot 23|
|18FE7C9  |           |1 Byte |Item Slot 23 Quantity|
|18FE7CA  |           |1 Byte |[Item ID](items.md) in Slot 24|
|18FE7CB  |           |1 Byte |Item Slot 24 Quantity|
|18FE7CC  |           |1 Byte |[Item ID](items.md) in Slot 25|
|18FE7CD  |           |1 Byte |Item Slot 25 Quantity|
|18FE7CE  |           |1 Byte |[Item ID](items.md) in Slot 26|
|18FE7CF  |           |1 Byte |Item Slot 26 Quantity|
|18FE7D0  |           |1 Byte |[Item ID](items.md) in Slot 27|
|18FE7D1  |           |1 Byte |Item Slot 27 Quantity|
|18FE7D2  |           |1 Byte |[Item ID](items.md) in Slot 28|
|18FE7D3  |           |1 Byte |Item Slot 28 Quantity|
|18FE7D4  |           |1 Byte |[Item ID](items.md) in Slot 29|
|18FE7D5  |           |1 Byte |Item Slot 29 Quantity|
|18FE7D6  |           |1 Byte |[Item ID](items.md) in Slot 30|
|18FE7D7  |           |1 Byte |Item Slot 30 Quantity|
|18FE7D8  |           |1 Byte |[Item ID](items.md) in Slot 31|
|18FE7D9  |           |1 Byte |Item Slot 31 Quantity|
|18FE7DA  |           |1 Byte |[Item ID](items.md) in Slot 32|
|18FE7DB  |           |1 Byte |Item Slot 32 Quantity|
|18FE7DC  |           |1 Byte |[Item ID](items.md) in Slot 33|
|18FE7DD  |           |1 Byte |Item Slot 33 Quantity|
|18FE7DE  |           |1 Byte |[Item ID](items.md) in Slot 34|
|18FE7DF  |           |1 Byte |Item Slot 34 Quantity|
|18FE7E0  |           |1 Byte |[Item ID](items.md) in Slot 35|
|18FE7E1  |           |1 Byte |Item Slot 35 Quantity|
|18FE7E2  |           |1 Byte |[Item ID](items.md) in Slot 36|
|18FE7E3  |           |1 Byte |Item Slot 36 Quantity|
|18FE7E4  |           |1 Byte |[Item ID](items.md) in Slot 37|
|18FE7E5  |           |1 Byte |Item Slot 37 Quantity|
|18FE7E6  |           |1 Byte |[Item ID](items.md) in Slot 38|
|18FE7E7  |           |1 Byte |Item Slot 38 Quantity|
|18FE7E8  |           |1 Byte |[Item ID](items.md) in Slot 39|
|18FE7E9  |           |1 Byte |Item Slot 39 Quantity|
|18FE7EA  |           |1 Byte |[Item ID](items.md) in Slot 40|
|18FE7EB  |           |1 Byte |Item Slot 40 Quantity|
|18FE7EC  |           |1 Byte |[Item ID](items.md) in Slot 41|
|18FE7ED  |           |1 Byte |Item Slot 41 Quantity|
|18FE7EE  |           |1 Byte |[Item ID](items.md) in Slot 42|
|18FE7EF  |           |1 Byte |Item Slot 42 Quantity|
|18FE7F0  |           |1 Byte |[Item ID](items.md) in Slot 43|
|18FE7F1  |           |1 Byte |Item Slot 43 Quantity|
|18FE7F2  |           |1 Byte |[Item ID](items.md) in Slot 44|
|18FE7F3  |           |1 Byte |Item Slot 44 Quantity|
|18FE7F4  |           |1 Byte |[Item ID](items.md) in Slot 45|
|18FE7F5  |           |1 Byte |Item Slot 45 Quantity|
|18FE7F6  |           |1 Byte |[Item ID](items.md) in Slot 46|
|18FE7F7  |           |1 Byte |Item Slot 46 Quantity|
|18FE7F8  |           |1 Byte |[Item ID](items.md) in Slot 47|
|18FE7F9  |           |1 Byte |Item Slot 47 Quantity|
|18FE7FA  |           |1 Byte |[Item ID](items.md) in Slot 48|
|18FE7FB  |           |1 Byte |Item Slot 48 Quantity|
|18FE7FC  |           |1 Byte |[Item ID](items.md) in Slot 49|
|18FE7FD  |           |1 Byte |Item Slot 49 Quantity|
|18FE7FE  |           |1 Byte |[Item ID](items.md) in Slot 50|
|18FE7FF  |           |1 Byte |Item Slot 50 Quantity|
|18FE800  |           |1 Byte |[Item ID](items.md) in Slot 51|
|18FE801  |           |1 Byte |Item Slot 51 Quantity|
|18FE802  |           |1 Byte |[Item ID](items.md) in Slot 52|
|18FE803  |           |1 Byte |Item Slot 52 Quantity|
|18FE804  |           |1 Byte |[Item ID](items.md) in Slot 53|
|18FE805  |           |1 Byte |Item Slot 53 Quantity|
|18FE806  |           |1 Byte |[Item ID](items.md) in Slot 54|
|18FE807  |           |1 Byte |Item Slot 54 Quantity|
|18FE808  |           |1 Byte |[Item ID](items.md) in Slot 55|
|18FE809  |           |1 Byte |Item Slot 55 Quantity|
|18FE80A  |           |1 Byte |[Item ID](items.md) in Slot 56|
|18FE80B  |           |1 Byte |Item Slot 56 Quantity|
|18FE80C  |           |1 Byte |[Item ID](items.md) in Slot 57|
|18FE80D  |           |1 Byte |Item Slot 57 Quantity|
|18FE80E  |           |1 Byte |[Item ID](items.md) in Slot 58|
|18FE80F  |           |1 Byte |Item Slot 58 Quantity|
|18FE810  |           |1 Byte |[Item ID](items.md) in Slot 59|
|18FE811  |           |1 Byte |Item Slot 59 Quantity|
|18FE812  |           |1 Byte |[Item ID](items.md) in Slot 60|
|18FE813  |           |1 Byte |Item Slot 60 Quantity|
|18FE814  |           |1 Byte |[Item ID](items.md) in Slot 61|
|18FE815  |           |1 Byte |Item Slot 61 Quantity|
|18FE816  |           |1 Byte |[Item ID](items.md) in Slot 62|
|18FE817  |           |1 Byte |Item Slot 62 Quantity|
|18FE818  |           |1 Byte |[Item ID](items.md) in Slot 63|
|18FE819  |           |1 Byte |Item Slot 63 Quantity|
|18FE81A  |           |1 Byte |[Item ID](items.md) in Slot 64|
|18FE81B  |           |1 Byte |Item Slot 64 Quantity|
|18FE81C  |           |1 Byte |[Item ID](items.md) in Slot 65|
|18FE81D  |           |1 Byte |Item Slot 65 Quantity|
|18FE81E  |           |1 Byte |[Item ID](items.md) in Slot 66|
|18FE81F  |           |1 Byte |Item Slot 66 Quantity|
|18FE820  |           |1 Byte |[Item ID](items.md) in Slot 67|
|18FE821  |           |1 Byte |Item Slot 67 Quantity|
|18FE822  |           |1 Byte |[Item ID](items.md) in Slot 68|
|18FE823  |           |1 Byte |Item Slot 68 Quantity|
|18FE824  |           |1 Byte |[Item ID](items.md) in Slot 69|
|18FE825  |           |1 Byte |Item Slot 69 Quantity|
|18FE826  |           |1 Byte |[Item ID](items.md) in Slot 70|
|18FE827  |           |1 Byte |Item Slot 70 Quantity|
|18FE828  |           |1 Byte |[Item ID](items.md) in Slot 71|
|18FE829  |           |1 Byte |Item Slot 71 Quantity|
|18FE82A  |           |1 Byte |[Item ID](items.md) in Slot 72|
|18FE82B  |           |1 Byte |Item Slot 72 Quantity|
|18FE82C  |           |1 Byte |[Item ID](items.md) in Slot 73|
|18FE82D  |           |1 Byte |Item Slot 73 Quantity|
|18FE82E  |           |1 Byte |[Item ID](items.md) in Slot 74|
|18FE82F  |           |1 Byte |Item Slot 74 Quantity|
|18FE830  |           |1 Byte |[Item ID](items.md) in Slot 75|
|18FE831  |           |1 Byte |Item Slot 75 Quantity|
|18FE832  |           |1 Byte |[Item ID](items.md) in Slot 76|
|18FE833  |           |1 Byte |Item Slot 76 Quantity|
|18FE834  |           |1 Byte |[Item ID](items.md) in Slot 77|
|18FE835  |           |1 Byte |Item Slot 77 Quantity|
|18FE836  |           |1 Byte |[Item ID](items.md) in Slot 78|
|18FE837  |           |1 Byte |Item Slot 78 Quantity|
|18FE838  |           |1 Byte |[Item ID](items.md) in Slot 79|
|18FE839  |           |1 Byte |Item Slot 79 Quantity|
|18FE83A  |           |1 Byte |[Item ID](items.md) in Slot 80|
|18FE83B  |           |1 Byte |Item Slot 80 Quantity|
|18FE83C  |           |1 Byte |[Item ID](items.md) in Slot 81|
|18FE83D  |           |1 Byte |Item Slot 81 Quantity|
|18FE83E  |           |1 Byte |[Item ID](items.md) in Slot 82|
|18FE83F  |           |1 Byte |Item Slot 82 Quantity|
|18FE840  |           |1 Byte |[Item ID](items.md) in Slot 83|
|18FE841  |           |1 Byte |Item Slot 83 Quantity|
|18FE842  |           |1 Byte |[Item ID](items.md) in Slot 84|
|18FE843  |           |1 Byte |Item Slot 84 Quantity|
|18FE844  |           |1 Byte |[Item ID](items.md) in Slot 85|
|18FE845  |           |1 Byte |Item Slot 85 Quantity|
|18FE846  |           |1 Byte |[Item ID](items.md) in Slot 86|
|18FE847  |           |1 Byte |Item Slot 86 Quantity|
|18FE848  |           |1 Byte |[Item ID](items.md) in Slot 87|
|18FE849  |           |1 Byte |Item Slot 87 Quantity|
|18FE84A  |           |1 Byte |[Item ID](items.md) in Slot 88|
|18FE84B  |           |1 Byte |Item Slot 88 Quantity|
|18FE84C  |           |1 Byte |[Item ID](items.md) in Slot 89|
|18FE84D  |           |1 Byte |Item Slot 89 Quantity|
|18FE84E  |           |1 Byte |[Item ID](items.md) in Slot 90|
|18FE84F  |           |1 Byte |Item Slot 90 Quantity|
|18FE850  |           |1 Byte |[Item ID](items.md) in Slot 91|
|18FE851  |           |1 Byte |Item Slot 91 Quantity|
|18FE852  |           |1 Byte |[Item ID](items.md) in Slot 92|
|18FE853  |           |1 Byte |Item Slot 92 Quantity|
|18FE854  |           |1 Byte |[Item ID](items.md) in Slot 93|
|18FE855  |           |1 Byte |Item Slot 93 Quantity|
|18FE856  |           |1 Byte |[Item ID](items.md) in Slot 94|
|18FE857  |           |1 Byte |Item Slot 94 Quantity|
|18FE858  |           |1 Byte |[Item ID](items.md) in Slot 95|
|18FE859  |           |1 Byte |Item Slot 95 Quantity|
|18FE85A  |           |1 Byte |[Item ID](items.md) in Slot 96|
|18FE85B  |           |1 Byte |Item Slot 96 Quantity|
|18FE85C  |           |1 Byte |[Item ID](items.md) in Slot 97|
|18FE85D  |           |1 Byte |Item Slot 97 Quantity|
|18FE85E  |           |1 Byte |[Item ID](items.md) in Slot 98|
|18FE85F  |           |1 Byte |Item Slot 98 Quantity|
|18FE860  |           |1 Byte |[Item ID](items.md) in Slot 99|
|18FE861  |           |1 Byte |Item Slot 99 Quantity|
|18FE862  |           |1 Byte |[Item ID](items.md) in Slot 100|
|18FE863  |           |1 Byte |Item Slot 100 Quantity|
|18FE864  |           |1 Byte |[Item ID](items.md) in Slot 101|
|18FE865  |           |1 Byte |Item Slot 101 Quantity|
|18FE866  |           |1 Byte |[Item ID](items.md) in Slot 102|
|18FE867  |           |1 Byte |Item Slot 102 Quantity|
|18FE868  |           |1 Byte |[Item ID](items.md) in Slot 103|
|18FE869  |           |1 Byte |Item Slot 103 Quantity|
|18FE86A  |           |1 Byte |[Item ID](items.md) in Slot 104|
|18FE86B  |           |1 Byte |Item Slot 104 Quantity|
|18FE86C  |           |1 Byte |[Item ID](items.md) in Slot 105|
|18FE86D  |           |1 Byte |Item Slot 105 Quantity|
|18FE86E  |           |1 Byte |[Item ID](items.md) in Slot 106|
|18FE86F  |           |1 Byte |Item Slot 106 Quantity|
|18FE870  |           |1 Byte |[Item ID](items.md) in Slot 107|
|18FE871  |           |1 Byte |Item Slot 107 Quantity|
|18FE872  |           |1 Byte |[Item ID](items.md) in Slot 108|
|18FE873  |           |1 Byte |Item Slot 108 Quantity|
|18FE874  |           |1 Byte |[Item ID](items.md) in Slot 109|
|18FE875  |           |1 Byte |Item Slot 109 Quantity|
|18FE876  |           |1 Byte |[Item ID](items.md) in Slot 110|
|18FE877  |           |1 Byte |Item Slot 110 Quantity|
|18FE878  |           |1 Byte |[Item ID](items.md) in Slot 111|
|18FE879  |           |1 Byte |Item Slot 111 Quantity|
|18FE87A  |           |1 Byte |[Item ID](items.md) in Slot 112|
|18FE87B  |           |1 Byte |Item Slot 112 Quantity|
|18FE87C  |           |1 Byte |[Item ID](items.md) in Slot 113|
|18FE87D  |           |1 Byte |Item Slot 113 Quantity|
|18FE87E  |           |1 Byte |[Item ID](items.md) in Slot 114|
|18FE87F  |           |1 Byte |Item Slot 114 Quantity|
|18FE880  |           |1 Byte |[Item ID](items.md) in Slot 115|
|18FE881  |           |1 Byte |Item Slot 115 Quantity|
|18FE882  |           |1 Byte |[Item ID](items.md) in Slot 116|
|18FE883  |           |1 Byte |Item Slot 116 Quantity|
|18FE884  |           |1 Byte |[Item ID](items.md) in Slot 117|
|18FE885  |           |1 Byte |Item Slot 117 Quantity|
|18FE886  |           |1 Byte |[Item ID](items.md) in Slot 118|
|18FE887  |           |1 Byte |Item Slot 118 Quantity|
|18FE888  |           |1 Byte |[Item ID](items.md) in Slot 119|
|18FE889  |           |1 Byte |Item Slot 119 Quantity|
|18FE88A  |           |1 Byte |[Item ID](items.md) in Slot 120|
|18FE88B  |           |1 Byte |Item Slot 120 Quantity|
|18FE88C  |           |1 Byte |[Item ID](items.md) in Slot 121|
|18FE88D  |           |1 Byte |Item Slot 121 Quantity|
|18FE88E  |           |1 Byte |[Item ID](items.md) in Slot 122|
|18FE88F  |           |1 Byte |Item Slot 122 Quantity|
|18FE890  |           |1 Byte |[Item ID](items.md) in Slot 123|
|18FE891  |           |1 Byte |Item Slot 123 Quantity|
|18FE892  |           |1 Byte |[Item ID](items.md) in Slot 124|
|18FE893  |           |1 Byte |Item Slot 124 Quantity|
|18FE894  |           |1 Byte |[Item ID](items.md) in Slot 125|
|18FE895  |           |1 Byte |Item Slot 125 Quantity|
|18FE896  |           |1 Byte |[Item ID](items.md) in Slot 126|
|18FE897  |           |1 Byte |Item Slot 126 Quantity|
|18FE898  |           |1 Byte |[Item ID](items.md) in Slot 127|
|18FE899  |           |1 Byte |Item Slot 127 Quantity|
|18FE89A  |           |1 Byte |[Item ID](items.md) in Slot 128|
|18FE89B  |           |1 Byte |Item Slot 128 Quantity|
|18FE89C  |           |1 Byte |[Item ID](items.md) in Slot 129|
|18FE89D  |           |1 Byte |Item Slot 129 Quantity|
|18FE89E  |           |1 Byte |[Item ID](items.md) in Slot 130|
|18FE89F  |           |1 Byte |Item Slot 130 Quantity|
|18FE8A0  |           |1 Byte |[Item ID](items.md) in Slot 131|
|18FE8A1  |           |1 Byte |Item Slot 131 Quantity|
|18FE8A2  |           |1 Byte |[Item ID](items.md) in Slot 132|
|18FE8A3  |           |1 Byte |Item Slot 132 Quantity|
|18FE8A4  |           |1 Byte |[Item ID](items.md) in Slot 133|
|18FE8A5  |           |1 Byte |Item Slot 133 Quantity|
|18FE8A6  |           |1 Byte |[Item ID](items.md) in Slot 134|
|18FE8A7  |           |1 Byte |Item Slot 134 Quantity|
|18FE8A8  |           |1 Byte |[Item ID](items.md) in Slot 135|
|18FE8A9  |           |1 Byte |Item Slot 135 Quantity|
|18FE8AA  |           |1 Byte |[Item ID](items.md) in Slot 136|
|18FE8AB  |           |1 Byte |Item Slot 136 Quantity|
|18FE8AC  |           |1 Byte |[Item ID](items.md) in Slot 137|
|18FE8AD  |           |1 Byte |Item Slot 137 Quantity|
|18FE8AE  |           |1 Byte |[Item ID](items.md) in Slot 138|
|18FE8AF  |           |1 Byte |Item Slot 138 Quantity|
|18FE8B0  |           |1 Byte |[Item ID](items.md) in Slot 139|
|18FE8B1  |           |1 Byte |Item Slot 139 Quantity|
|18FE8B2  |           |1 Byte |[Item ID](items.md) in Slot 140|
|18FE8B3  |           |1 Byte |Item Slot 140 Quantity|
|18FE8B4  |           |1 Byte |[Item ID](items.md) in Slot 141|
|18FE8B5  |           |1 Byte |Item Slot 141 Quantity|
|18FE8B6  |           |1 Byte |[Item ID](items.md) in Slot 142|
|18FE8B7  |           |1 Byte |Item Slot 142 Quantity|
|18FE8B8  |           |1 Byte |[Item ID](items.md) in Slot 143|
|18FE8B9  |           |1 Byte |Item Slot 143 Quantity|
|18FE8BA  |           |1 Byte |[Item ID](items.md) in Slot 144|
|18FE8BB  |           |1 Byte |Item Slot 144 Quantity|
|18FE8BC  |           |1 Byte |[Item ID](items.md) in Slot 145|
|18FE8BD  |           |1 Byte |Item Slot 145 Quantity|
|18FE8BE  |           |1 Byte |[Item ID](items.md) in Slot 146|
|18FE8BF  |           |1 Byte |Item Slot 146 Quantity|
|18FE8C0  |           |1 Byte |[Item ID](items.md) in Slot 147|
|18FE8C1  |           |1 Byte |Item Slot 147 Quantity|
|18FE8C2  |           |1 Byte |[Item ID](items.md) in Slot 148|
|18FE8C3  |           |1 Byte |Item Slot 148 Quantity|
|18FE8C4  |           |1 Byte |[Item ID](items.md) in Slot 149|
|18FE8C5  |           |1 Byte |Item Slot 149 Quantity|
|18FE8C6  |           |1 Byte |[Item ID](items.md) in Slot 150|
|18FE8C7  |           |1 Byte |Item Slot 150 Quantity|
|18FE8C8  |           |1 Byte |[Item ID](items.md) in Slot 151|
|18FE8C9  |           |1 Byte |Item Slot 151 Quantity|
|18FE8CA  |           |1 Byte |[Item ID](items.md) in Slot 152|
|18FE8CB  |           |1 Byte |Item Slot 152 Quantity|
|18FE8CC  |           |1 Byte |[Item ID](items.md) in Slot 153|
|18FE8CD  |           |1 Byte |Item Slot 153 Quantity|
|18FE8CE  |           |1 Byte |[Item ID](items.md) in Slot 154|
|18FE8CF  |           |1 Byte |Item Slot 154 Quantity|
|18FE8D0  |           |1 Byte |[Item ID](items.md) in Slot 155|
|18FE8D1  |           |1 Byte |Item Slot 155 Quantity|
|18FE8D2  |           |1 Byte |[Item ID](items.md) in Slot 156|
|18FE8D3  |           |1 Byte |Item Slot 156 Quantity|
|18FE8D4  |           |1 Byte |[Item ID](items.md) in Slot 157|
|18FE8D5  |           |1 Byte |Item Slot 157 Quantity|
|18FE8D6  |           |1 Byte |[Item ID](items.md) in Slot 158|
|18FE8D7  |           |1 Byte |Item Slot 158 Quantity|
|18FE8D8  |           |1 Byte |[Item ID](items.md) in Slot 159|
|18FE8D9  |           |1 Byte |Item Slot 159 Quantity|
|18FE8DA  |           |1 Byte |[Item ID](items.md) in Slot 160|
|18FE8DB  |           |1 Byte |Item Slot 160 Quantity|
|18FE8DC  |           |1 Byte |[Item ID](items.md) in Slot 161|
|18FE8DD  |           |1 Byte |Item Slot 161 Quantity|
|18FE8DE  |           |1 Byte |[Item ID](items.md) in Slot 162|
|18FE8DF  |           |1 Byte |Item Slot 162 Quantity|
|18FE8E0  |           |1 Byte |[Item ID](items.md) in Slot 163|
|18FE8E1  |           |1 Byte |Item Slot 163 Quantity|
|18FE8E2  |           |1 Byte |[Item ID](items.md) in Slot 164|
|18FE8E3  |           |1 Byte |Item Slot 164 Quantity|
|18FE8E4  |           |1 Byte |[Item ID](items.md) in Slot 165|
|18FE8E5  |           |1 Byte |Item Slot 165 Quantity|
|18FE8E6  |           |1 Byte |[Item ID](items.md) in Slot 166|
|18FE8E7  |           |1 Byte |Item Slot 166 Quantity|
|18FE8E8  |           |1 Byte |[Item ID](items.md) in Slot 167|
|18FE8E9  |           |1 Byte |Item Slot 167 Quantity|
|18FE8EA  |           |1 Byte |[Item ID](items.md) in Slot 168|
|18FE8EB  |           |1 Byte |Item Slot 168 Quantity|
|18FE8EC  |           |1 Byte |[Item ID](items.md) in Slot 169|
|18FE8ED  |           |1 Byte |Item Slot 169 Quantity|
|18FE8EE  |           |1 Byte |[Item ID](items.md) in Slot 170|
|18FE8EF  |           |1 Byte |Item Slot 170 Quantity|
|18FE8F0  |           |1 Byte |[Item ID](items.md) in Slot 171|
|18FE8F1  |           |1 Byte |Item Slot 171 Quantity|
|18FE8F2  |           |1 Byte |[Item ID](items.md) in Slot 172|
|18FE8F3  |           |1 Byte |Item Slot 172 Quantity|
|18FE8F4  |           |1 Byte |[Item ID](items.md) in Slot 173|
|18FE8F5  |           |1 Byte |Item Slot 173 Quantity|
|18FE8F6  |           |1 Byte |[Item ID](items.md) in Slot 174|
|18FE8F7  |           |1 Byte |Item Slot 174 Quantity|
|18FE8F8  |           |1 Byte |[Item ID](items.md) in Slot 175|
|18FE8F9  |           |1 Byte |Item Slot 175 Quantity|
|18FE8FA  |           |1 Byte |[Item ID](items.md) in Slot 176|
|18FE8FB  |           |1 Byte |Item Slot 176 Quantity|
|18FE8FC  |           |1 Byte |[Item ID](items.md) in Slot 177|
|18FE8FD  |           |1 Byte |Item Slot 177 Quantity|
|18FE8FE  |           |1 Byte |[Item ID](items.md) in Slot 178|
|18FE8FF  |           |1 Byte |Item Slot 178 Quantity|
|18FE900  |           |1 Byte |[Item ID](items.md) in Slot 179|
|18FE901  |           |1 Byte |Item Slot 179 Quantity|
|18FE902  |           |1 Byte |[Item ID](items.md) in Slot 180|
|18FE903  |           |1 Byte |Item Slot 180 Quantity|
|18FE904  |           |1 Byte |[Item ID](items.md) in Slot 181|
|18FE905  |           |1 Byte |Item Slot 181 Quantity|
|18FE906  |           |1 Byte |[Item ID](items.md) in Slot 182|
|18FE907  |           |1 Byte |Item Slot 182 Quantity|
|18FE908  |           |1 Byte |[Item ID](items.md) in Slot 183|
|18FE909  |           |1 Byte |Item Slot 183 Quantity|
|18FE90A  |           |1 Byte |[Item ID](items.md) in Slot 184|
|18FE90B  |           |1 Byte |Item Slot 184 Quantity|
|18FE90C  |           |1 Byte |[Item ID](items.md) in Slot 185|
|18FE90D  |           |1 Byte |Item Slot 185 Quantity|
|18FE90E  |           |1 Byte |[Item ID](items.md) in Slot 186|
|18FE90F  |           |1 Byte |Item Slot 186 Quantity|
|18FE910  |           |1 Byte |[Item ID](items.md) in Slot 187|
|18FE911  |           |1 Byte |Item Slot 187 Quantity|
|18FE912  |           |1 Byte |[Item ID](items.md) in Slot 188|
|18FE913  |           |1 Byte |Item Slot 188 Quantity|
|18FE914  |           |1 Byte |[Item ID](items.md) in Slot 189|
|18FE915  |           |1 Byte |Item Slot 189 Quantity|
|18FE916  |           |1 Byte |[Item ID](items.md) in Slot 190|
|18FE917  |           |1 Byte |Item Slot 190 Quantity|
|18FE918  |           |1 Byte |[Item ID](items.md) in Slot 191|
|18FE919  |           |1 Byte |Item Slot 191 Quantity|
|18FE91A  |           |1 Byte |[Item ID](items.md) in Slot 192|
|18FE91B  |           |1 Byte |Item Slot 192 Quantity|
|18FE91C  |           |1 Byte |[Item ID](items.md) in Slot 193|
|18FE91D  |           |1 Byte |Item Slot 193 Quantity|
|18FE91E  |           |1 Byte |[Item ID](items.md) in Slot 194|
|18FE91F  |           |1 Byte |Item Slot 194 Quantity|
|18FE920  |           |1 Byte |[Item ID](items.md) in Slot 195|
|18FE921  |           |1 Byte |Item Slot 195 Quantity|
|18FE922  |           |1 Byte |[Item ID](items.md) in Slot 196|
|18FE923  |           |1 Byte |Item Slot 196 Quantity|
|18FE924  |           |1 Byte |[Item ID](items.md) in Slot 197|
|18FE925  |           |1 Byte |Item Slot 197 Quantity|
|18FE926  |           |1 Byte |[Item ID](items.md) in Slot 198|
|18FE927  |           |1 Byte |Item Slot 198 Quantity|
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
