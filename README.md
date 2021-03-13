This is my list of known RAM offsets for FFVIII, compiled from various sources and my own research.

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

|Offset (EN)|Offset (FR)|Length |Description|
|-----------|-----------|-------|-----------|
|19CD798  |           |1 Byte |Triple Triad - In Game? (0/1)|
|18FEA0C  |           |2 Bytes|Last Map ID (i.e. the map/screen you were on just before where you are now)|
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
|1927B24  |           |2 Bytes|In Battle: Party Slot 1 Current ATB Value (Max = [BattleSpeed * 4000](https://gamefaqs.gamespot.com/ps/197343-final-fantasy-viii/faqs/58936))|
|1927B28  |           |2 Bytes|In Battle: Party Slot 1 Current HP|
|1927B2C  |           |2 Bytes|In Battle: Party Slot 1 Max HP|
|1927BF4  |           |2 Bytes|In Battle: Party Slot 2 Current ATB Value (Max = [BattleSpeed * 4000](https://gamefaqs.gamespot.com/ps/197343-final-fantasy-viii/faqs/58936))|
|1927BF8  |           |2 Bytes|In Battle: Party Slot 2 Current HP|
|1927BFC  |           |2 Bytes|In Battle: Party Slot 2 Max HP|
|1927CC4  |           |2 Bytes|In Battle: Party Slot 3 Current ATB Value (Max = [BattleSpeed * 4000](https://gamefaqs.gamespot.com/ps/197343-final-fantasy-viii/faqs/58936))|
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
|1C3ED2C  |           |2 Bytes|In Town: This will be 0 on world map and 1 in local/dungeon maps EXCEPT, it will also be 1 when in menu.|
|18D2FC0  |           |2 Bytes|Current [Map ID](maps.md)|
|18E490B  |           |1 Byte |Game is Savable (i.e. save anywhere). Lock to 1 to save anywhere. Save points set this value to 3.|
|1996DA8  |           |2 Bytes|Current/Most Recent [Encounter ID](encounter-ids.md)|

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
