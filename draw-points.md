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
|FF8_EN.exe+18FEA2C|1|65|B-Garden - Front Gate|21|Cure|
|FF8_EN.exe+18FEA2C|2|78|B-Garden - Training Center|4|Blizzard|
|FF8_EN.exe+18FEA2C|3|68|B-Garden - MD Level|25|Full-life|
|FF8_EN.exe+18FEA2C|4|64|B-Garden - Library|27|Esuna|
|FF8_EN.exe+18FEA2D|1|67|B-Garden - Cafeteria|13|Demi|
|FF8_EN.exe+18FEA2D|2|81|B-Garden - Master Room|12|Bio|
|FF8_EN.exe+18FEA2D|3|85|Balamb - Town Square|7|Thunder|
|FF8_EN.exe+18FEA2D|4|87|Balamb Harbor|21|Cure|
|FF8_EN.exe+18FEA2E|1|92|Fire Cavern|1|Fire|
|FF8_EN.exe+18FEA2E|2|93|Dollet - Town Square|41|Silence|
|FF8_EN.exe+18FEA2E|3|99|Dollet - Comm Tower|38|Blind|
|FF8_EN.exe+18FEA2E|4|101|Timber - City Square|50|Scan|
|FF8_EN.exe+18FEA2F|1|101|Timber - City Square|21|Cure|
|FF8_EN.exe+18FEA2F|2|109|Timber - Editorial Department|6|Blizzaga|
|FF8_EN.exe+18FEA2F|3|113|G-Garden - Hall|35|Haste|
|FF8_EN.exe+18FEA2F|4|117|G-Garden - Clubroom|24|Life|
|FF8_EN.exe+18FEA30|1|122|G-Garden - Athletic Track|30|Shell|
|FF8_EN.exe+18FEA30|2|125|G-Garden - Gymnasium|29|Protect|
|FF8_EN.exe+18FEA30|3|121|G-Garden - Auditorium|33|Double|
|FF8_EN.exe+18FEA30|4|124|G-Garden - Back Entrance|32|Aura|
|FF8_EN.exe+18FEA31|1|110|Timber Forest|21|Cure|
|FF8_EN.exe+18FEA31|2|110|Timber Forest|10|Water|
|FF8_EN.exe+18FEA31|3|129|Deling City - City Square|8|Thundara|
|FF8_EN.exe+18FEA31|4|134|Deling City - Sewer|48|Zombie|
|FF8_EN.exe+18FEA32|1|134|Deling City - Sewer|27|Esuna|
|FF8_EN.exe+18FEA32|2|134|Deling City - Sewer|12|Bio|
|FF8_EN.exe+18FEA32|3|-1|???|2|Fira|
|FF8_EN.exe+18FEA32|4|135|Galbadia D -District Prison|46|Berserk|
|FF8_EN.exe+18FEA33|1|135|Galbadia D -District Prison|9|Thundaga|
|FF8_EN.exe+18FEA33|2|136|Desert|11|Aero|
|FF8_EN.exe+18FEA33|3|137|Galbadia Missile Base|5|Blizzara|
|FF8_EN.exe+18FEA33|4|137|Galbadia Missile Base|38|Blind|
|FF8_EN.exe+18FEA34|1|137|Galbadia Missile Base|25|Full-life|
|FF8_EN.exe+18FEA34|2|138|Winhill Village|44|Drain|
|FF8_EN.exe+18FEA34|3|138|Winhill Village|28|Dispel|
|FF8_EN.exe+18FEA34|4|140|Winhill - Vacant House|23|Curaga|
|FF8_EN.exe+18FEA35|1|138|Winhill Village|31|Reflect|
|FF8_EN.exe+18FEA35|2|145|Tomb of the Unknown King|29|Protect|
|FF8_EN.exe+18FEA35|3|145|Tomb of the Unknown King|47|Float|
|FF8_EN.exe+18FEA35|4|145|Tomb of the Unknown King|22|Cura|
|FF8_EN.exe+18FEA36|1|154|FH - Station Yard|35|Haste|
|FF8_EN.exe+18FEA36|2|147|FH - Residential Area|30|Shell|
|FF8_EN.exe+18FEA36|3|146|Fishermans Horizon|26|Regen|
|FF8_EN.exe+18FEA36|4|150|FH - Factory|25|Full-life|
|FF8_EN.exe+18FEA37|1|149|FH - Mayor's Residence|19|Ultima|
|FF8_EN.exe+18FEA37|2|157|FH - Great Salt Lake|9|Thundaga|
|FF8_EN.exe+18FEA37|3|157|FH - Great Salt Lake|16|Meteor|
|FF8_EN.exe+18FEA37|4|159|Esthar - City|23|Curaga|
|FF8_EN.exe+18FEA38|1|159|Esthar - City|4|Blizzard|
|FF8_EN.exe+18FEA38|2|160|Esthar - Odine's Laboratory|17|Quake|
|FF8_EN.exe+18FEA38|3|159|Esthar - City|18|Tornado|
|FF8_EN.exe+18FEA38|4|167|Dr. Odine's Laboratory - Lobby|33|Double|
|FF8_EN.exe+18FEA39|1|-1|???|45|Pain|
|FF8_EN.exe+18FEA39|2|167|Dr. Odine's Laboratory - Lobby|15|Flare|
|FF8_EN.exe+18FEA39|3|173|Esthar Sorceress Memorial|37|Stop|
|FF8_EN.exe+18FEA39|4|-1|???|37|Stop|
|FF8_EN.exe+18FEA3A|1|177|Tears' Point|24|Life|
|FF8_EN.exe+18FEA3A|2|177|Tears' Point|31|Reflect|
|FF8_EN.exe+18FEA3A|3|178|Lunatic Pandora Laboratory|43|Death|
|FF8_EN.exe+18FEA3A|4|182|Centra - Excavation Site|14|Holy|
|FF8_EN.exe+18FEA3B|1|182|Centra - Excavation Site|41|Silence|
|FF8_EN.exe+18FEA3B|2|182|Centra - Excavation Site|19|Ultima|
|FF8_EN.exe+18FEA3B|3|182|Centra - Excavation Site|39|Confuse|
|FF8_EN.exe+18FEA3B|4|181|Lunatic Pandora|42|Break|
|FF8_EN.exe+18FEA3C|1|181|Lunatic Pandora|16|Meteor|
|FF8_EN.exe+18FEA3C|2|181|Lunatic Pandora|23|Curaga|
|FF8_EN.exe+18FEA3C|3|-1|???|36|Slow|
|FF8_EN.exe+18FEA3C|4|185|Edea's House - Bedroom|23|Curaga|
|FF8_EN.exe+18FEA3D|1|-1|???|15|Flare|
|FF8_EN.exe+18FEA3D|2|-1|???|14|Holy|
|FF8_EN.exe+18FEA3D|3|182|Centra - Excavation Site|40|Sleep|
|FF8_EN.exe+18FEA3D|4|182|Centra - Excavation Site|39|Confuse|
|FF8_EN.exe+18FEA3E|1|189|Centra Ruins|11|Aero|
|FF8_EN.exe+18FEA3E|2|189|Centra Ruins|44|Drain|
|FF8_EN.exe+18FEA3E|3|189|Centra Ruins|45|Pain|
|FF8_EN.exe+18FEA3E|4|190|Trabia Garden - Front Gate|9|Thundaga|
|FF8_EN.exe+18FEA3F|1|191|T-Garden - Cemetery|48|Zombie|
|FF8_EN.exe+18FEA3F|2|193|T-Garden - Festival Stage|32|Aura|
|FF8_EN.exe+18FEA3F|3|197|Shumi Village - Desert Village|19|Ultima|
|FF8_EN.exe+18FEA3F|4|199|Shumi Village - Village|6|Blizzaga|
|FF8_EN.exe+18FEA40|1|201|Shumi Village - Residence|3|Firaga|
|FF8_EN.exe+18FEA40|2|-1|???|18|Tornado|
|FF8_EN.exe+18FEA40|3|207|White SeeD Ship - Cabin|14|Holy|
|FF8_EN.exe+18FEA40|4|210|Ragnarok - Aisle|22|Cura|
|FF8_EN.exe+18FEA41|1|210|Ragnarok - Aisle|24|Life|
|FF8_EN.exe+18FEA41|2|211|Ragnarok - Hangar|25|Full-life|
|FF8_EN.exe+18FEA41|3|217|Deep Sea Research Center - Levels|28|Dispel|
|FF8_EN.exe+18FEA41|4|217|Deep Sea Research Center - Levels|27|Esuna|
|FF8_EN.exe+18FEA42|1|218|Deep Sea Deposit|34|Triple|
|FF8_EN.exe+18FEA42|2|218|Deep Sea Deposit|19|Ultima|
|FF8_EN.exe+18FEA42|3|221|Lunar Base - Pod|49|Meltdown|
|FF8_EN.exe+18FEA42|4|225|Lunar Base - Residential Zone|16|Meteor|
|FF8_EN.exe+18FEA43|1|-1|???|35|Haste|
|FF8_EN.exe+18FEA43|2|-1|???|36|Slow|
|FF8_EN.exe+18FEA43|3|-1|???|23|Curaga|
|FF8_EN.exe+18FEA43|4|-1|???|24|Life|
|FF8_EN.exe+18FEA44|1|-1|???|37|Stop|
|FF8_EN.exe+18FEA44|2|-1|???|26|Regen|
|FF8_EN.exe+18FEA44|3|-1|???|33|Double|
|FF8_EN.exe+18FEA44|4|228|Wilderness|34|Triple|
|FF8_EN.exe+18FEA45|1|248|Ultimecia Castle|15|Flare|
|FF8_EN.exe+18FEA45|2|237|Ultimecia Castle - Storage Room|23|Curaga|
|FF8_EN.exe+18FEA45|3|233|Ultimecia Castle - Passageway|22|Cura|
|FF8_EN.exe+18FEA45|4|-1|???|50|Scan|
|FF8_EN.exe+18FEA46|1|-1|???|27|Esuna|
|FF8_EN.exe+18FEA46|2|243|Ultimecia Castle - Courtyard|36|Slow|
|FF8_EN.exe+18FEA46|3|244|Ultimecia Castle - Chapel|28|Dispel|
|FF8_EN.exe+18FEA46|4|245|Ultimecia Castle - Clock Tower|37|Stop|
|FF8_EN.exe+18FEA47|1|246|Ultimecia Castle - Master Room|24|Life|
|FF8_EN.exe+18FEA47|2|-1|???|15|Flare|
|FF8_EN.exe+18FEA47|3|232|Ultimecia Castle - Wine Cellar|32|Aura|
|FF8_EN.exe+18FEA47|4|236|Ultimecia Castle - Treasure Rm|14|Holy|
|FF8_EN.exe+18FEA48|1|231|Ultimecia Castle - Terrace|16|Meteor|
|FF8_EN.exe+18FEA48|2|238|Ultimecia Castle - Art Gallery|49|Meltdown|
|FF8_EN.exe+18FEA48|3|240|Ultimecia Castle - Armory|19|Ultima|
|FF8_EN.exe+18FEA48|4|241|Ultimecia Castle - Prison Cell|25|Full-life|
|FF8_EN.exe+18FEA49|1|245|Ultimecia Castle - Clock Tower|34|Triple|
|FF8_EN.exe+18FEA49|2|-1|???|1|Fire|
|FF8_EN.exe+18FEA49|3|-1|???|1|Fire|
|FF8_EN.exe+18FEA49|4|-1|???|1|Fire|
|FF8_EN.exe+18FEA4A|1|-1|???|1|Fire|
|FF8_EN.exe+18FEA4A|2|-1|???|1|Fire|
|FF8_EN.exe+18FEA4A|3|-1|???|1|Fire|
|FF8_EN.exe+18FEA4A|4|-1|???|1|Fire|
|FF8_EN.exe+18FEA4B|1|-1|???|1|Fire|
|FF8_EN.exe+18FEA4B|2|-1|???|1|Fire|
|FF8_EN.exe+18FEA4B|3|-1|???|1|Fire|
|FF8_EN.exe+18FEA4B|4|-1|???|1|Fire|
|FF8_EN.exe+18FEA4C|1|1|Balamb - Alcauld Plains|21|Cure|
|FF8_EN.exe+18FEA4C|2|1|Balamb - Alcauld Plains|27|Esuna|
|FF8_EN.exe+18FEA4C|3|6|Timber - Mandy Beach|7|Thunder|
|FF8_EN.exe+18FEA4C|4|8|Timber - Lanker Plains|2|Fira|
|FF8_EN.exe+18FEA4D|1|17|Timber - Shenand Hill|8|Thundara|
|FF8_EN.exe+18FEA4D|2|15|Galbadia - Monterosa Plateau|5|Blizzara|
|FF8_EN.exe+18FEA4D|3|10|Timber - Yaulny Canyon|4|Blizzard|
|FF8_EN.exe+18FEA4D|4|-1|???|1|Fire|
|FF8_EN.exe+18FEA4E|1|11|Dollet - Hasberry Plains|21|Cure|
|FF8_EN.exe+18FEA4E|2|14|Dollet - Malgo Peninsula|10|Water|
|FF8_EN.exe+18FEA4E|3|11|Dollet - Hasberry Plains|22|Cura|
|FF8_EN.exe+18FEA4E|4|20|Great Plains of Galbadia|27|Esuna|
|FF8_EN.exe+18FEA4F|1|21|Galbadia - Wilburn Hill|50|Scan|
|FF8_EN.exe+18FEA4F|2|15|Galbadia - Monterosa Plateau|30|Shell|
|FF8_EN.exe+18FEA4F|3|23|Galbadia - Dingo Desert|35|Haste|
|FF8_EN.exe+18FEA4F|4|15|Galbadia - Monterosa Plateau|11|Aero|
|FF8_EN.exe+18FEA50|1|15|Galbadia - Monterosa Plateau|12|Bio|
|FF8_EN.exe+18FEA50|2|24|Winhill - Winhill Bluffs|24|Life|
|FF8_EN.exe+18FEA50|3|62|Centra - Centra Crater|13|Demi|
|FF8_EN.exe+18FEA50|4|61|Centra - Nectar Peninsula|29|Protect|
|FF8_EN.exe+18FEA51|1|57|Centra - Cape of Good Hope|14|Holy|
|FF8_EN.exe+18FEA51|2|55|Centra - Almaj Mountains|9|Thundaga|
|FF8_EN.exe+18FEA51|3|53|Esthar - Shalmal Peninsula|37|Stop|
|FF8_EN.exe+18FEA51|4|50|Esthar - Kashkabald Desert|3|Firaga|
|FF8_EN.exe+18FEA52|1|26|Trabia - Winter Island|26|Regen|
|FF8_EN.exe+18FEA52|2|26|Trabia - Winter Island|6|Blizzaga|
|FF8_EN.exe+18FEA52|3|30|Trabia - Hawkwind Plains|39|Confuse|
|FF8_EN.exe+18FEA52|4|32|Trabia - Bika Snowfield|15|Flare|
|FF8_EN.exe+18FEA53|1|32|Trabia - Bika Snowfield|28|Dispel|
|FF8_EN.exe+18FEA53|2|32|Trabia - Bika Snowfield|36|Slow|
|FF8_EN.exe+18FEA53|3|37|Trabia - Vienne Mountains|17|Quake|
|FF8_EN.exe+18FEA53|4|46|Esthar - West Coast|23|Curaga|
|FF8_EN.exe+18FEA54|1|39|Esthar - Nortes Mountains|18|Tornado|
|FF8_EN.exe+18FEA54|2|39|Esthar - Nortes Mountains|25|Full-life|
|FF8_EN.exe+18FEA54|3|25|Winhill - Humphrey Archipelago|31|Reflect|
|FF8_EN.exe+18FEA54|4|13|Dollet - Long Horn Island|32|Aura|
|FF8_EN.exe+18FEA55|1|12|Dollet - Holy Glory Cape|17|Quake|
|FF8_EN.exe+18FEA55|2|-1|???|33|Double|
|FF8_EN.exe+18FEA55|3|17|Timber - Shenand Hill|42|Break|
|FF8_EN.exe+18FEA55|4|41|Esthar - Grandidi Forest|16|Meteor|
|FF8_EN.exe+18FEA56|1|41|Esthar - Grandidi Forest|19|Ultima|
|FF8_EN.exe+18FEA56|2|41|Esthar - Grandidi Forest|34|Triple|
|FF8_EN.exe+18FEA56|3|42|Esthar - Millefeuille Archipelago|39|Confuse|
|FF8_EN.exe+18FEA56|4|41|Esthar - Grandidi Forest|38|Blind|
|FF8_EN.exe+18FEA57|1|26|Trabia - Winter Island|17|Quake|
|FF8_EN.exe+18FEA57|2|26|Trabia - Winter Island|40|Sleep|
|FF8_EN.exe+18FEA57|3|26|Trabia - Winter Island|41|Silence|
|FF8_EN.exe+18FEA57|4|32|Trabia - Bika Snowfield|15|Flare|
|FF8_EN.exe+18FEA58|1|31|Trabia - Albatross Archipelago|43|Death|
|FF8_EN.exe+18FEA58|2|12|Dollet - Holy Glory Cape|44|Drain|
|FF8_EN.exe+18FEA58|3|11|Dollet - Hasberry Plains|45|Pain|
|FF8_EN.exe+18FEA58|4|15|Galbadia - Monterosa Plateau|46|Berserk|
|FF8_EN.exe+18FEA59|1|21|Galbadia - Wilburn Hill|47|Float|
|FF8_EN.exe+18FEA59|2|22|Galbadia - Rem Archipelago|48|Zombie|
|FF8_EN.exe+18FEA59|3|15|Galbadia - Monterosa Plateau|49|Meltdown|
|FF8_EN.exe+18FEA59|4|16|Galbadia - Lallapalooza Canyon|48|Zombie|
|FF8_EN.exe+18FEA5A|1|51|Island Closest to Heaven|18|Tornado|
|FF8_EN.exe+18FEA5A|2|51|Island Closest to Heaven|17|Quake|
|FF8_EN.exe+18FEA5A|3|51|Island Closest to Heaven|16|Meteor|
|FF8_EN.exe+18FEA5A|4|51|Island Closest to Heaven|14|Holy|
|FF8_EN.exe+18FEA5B|1|51|Island Closest to Heaven|15|Flare|
|FF8_EN.exe+18FEA5B|2|51|Island Closest to Heaven|32|Aura|
|FF8_EN.exe+18FEA5B|3|51|Island Closest to Heaven|19|Ultima|
|FF8_EN.exe+18FEA5B|4|51|Island Closest to Heaven|34|Triple|
|FF8_EN.exe+18FEA5C|1|51|Island Closest to Heaven|24|Life|
|FF8_EN.exe+18FEA5C|2|51|Island Closest to Heaven|18|Tornado|
|FF8_EN.exe+18FEA5C|3|51|Island Closest to Heaven|17|Quake|
|FF8_EN.exe+18FEA5C|4|51|Island Closest to Heaven|16|Meteor|
|FF8_EN.exe+18FEA5D|1|51|Island Closest to Heaven|14|Holy|
|FF8_EN.exe+18FEA5D|2|51|Island Closest to Heaven|15|Flare|
|FF8_EN.exe+18FEA5D|3|51|Island Closest to Heaven|32|Aura|
|FF8_EN.exe+18FEA5D|4|51|Island Closest to Heaven|19|Ultima|
|FF8_EN.exe+18FEA5E|1|51|Island Closest to Heaven|34|Triple|
|FF8_EN.exe+18FEA5E|2|51|Island Closest to Heaven|24|Life|
|FF8_EN.exe+18FEA5E|3|51|Island Closest to Heaven|18|Tornado|
|FF8_EN.exe+18FEA5E|4|51|Island Closest to Heaven|17|Quake|
|FF8_EN.exe+18FEA5F|1|51|Island Closest to Heaven|16|Meteor|
|FF8_EN.exe+18FEA5F|2|51|Island Closest to Heaven|14|Holy|
|FF8_EN.exe+18FEA5F|3|51|Island Closest to Heaven|15|Flare|
|FF8_EN.exe+18FEA5F|4|51|Island Closest to Heaven|32|Aura|
|FF8_EN.exe+18FEA60|1|51|Island Closest to Heaven|19|Ultima|
|FF8_EN.exe+18FEA60|2|51|Island Closest to Heaven|34|Triple|
|FF8_EN.exe+18FEA60|3|51|Island Closest to Heaven|24|Life|
|FF8_EN.exe+18FEA60|4|51|Island Closest to Heaven|19|Ultima|
|FF8_EN.exe+18FEA61|1|19|Island Closest to Hell|16|Meteor|
|FF8_EN.exe+18FEA61|2|19|Island Closest to Hell|14|Holy|
|FF8_EN.exe+18FEA61|3|19|Island Closest to Hell|15|Flare|
|FF8_EN.exe+18FEA61|4|19|Island Closest to Hell|32|Aura|
|FF8_EN.exe+18FEA62|1|19|Island Closest to Hell|19|Ultima|
|FF8_EN.exe+18FEA62|2|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA62|3|19|Island Closest to Hell|24|Life|
|FF8_EN.exe+18FEA62|4|19|Island Closest to Hell|16|Meteor|
|FF8_EN.exe+18FEA63|1|19|Island Closest to Hell|14|Holy|
|FF8_EN.exe+18FEA63|2|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA63|3|19|Island Closest to Hell|32|Aura|
|FF8_EN.exe+18FEA63|4|19|Island Closest to Hell|19|Ultima|
|FF8_EN.exe+18FEA64|1|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA64|2|19|Island Closest to Hell|24|Life|
|FF8_EN.exe+18FEA64|3|19|Island Closest to Hell|16|Meteor|
|FF8_EN.exe+18FEA64|4|19|Island Closest to Hell|14|Holy|
|FF8_EN.exe+18FEA65|1|19|Island Closest to Hell|15|Flare|
|FF8_EN.exe+18FEA65|2|19|Island Closest to Hell|32|Aura|
|FF8_EN.exe+18FEA65|3|19|Island Closest to Hell|19|Ultima|
|FF8_EN.exe+18FEA65|4|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA66|1|19|Island Closest to Hell|24|Life|
|FF8_EN.exe+18FEA66|2|19|Island Closest to Hell|16|Meteor|
|FF8_EN.exe+18FEA66|3|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA66|4|19|Island Closest to Hell|15|Flare|
|FF8_EN.exe+18FEA67|1|19|Island Closest to Hell|32|Aura|
|FF8_EN.exe+18FEA67|2|19|Island Closest to Hell|19|Ultima|
|FF8_EN.exe+18FEA67|3|19|Island Closest to Hell|34|Triple|
|FF8_EN.exe+18FEA67|4|19|Island Closest to Hell|24|Life|
|FF8_EN.exe+18FEA68|1|19|Island Closest to Hell|16|Meteor|
|FF8_EN.exe+18FEA68|2|19|Island Closest to Hell|14|Holy|
|FF8_EN.exe+18FEA68|3|19|Island Closest to Hell|15|Flare|
|FF8_EN.exe+18FEA68|4|19|Island Closest to Hell|32|Aura|
|FF8_EN.exe+18FEA69|1|19|Island Closest to Hell|19|Ultima|
|FF8_EN.exe+18FEA69|2|1|Balamb - Alcauld Plains|4|Blizzard|
|FF8_EN.exe+18FEA69|3|1|Balamb - Alcauld Plains|21|Cure|
|FF8_EN.exe+18FEA69|4|15|Galbadia - Monterosa Plateau|28|Dispel|
|FF8_EN.exe+18FEA6A|1|20|Great Plains of Galbadia|39|Confuse|
|FF8_EN.exe+18FEA6A|2|43|Great Plains of Esthar|16|Meteor|
|FF8_EN.exe+18FEA6A|3|43|Great Plains of Esthar|33|Double|
|FF8_EN.exe+18FEA6A|4|43|Great Plains of Esthar|33|Double|
|FF8_EN.exe+18FEA6B|1|43|Great Plains of Esthar|14|Holy|
|FF8_EN.exe+18FEA6B|2|47|Esthar - Sollet Mountains|15|Flare|
|FF8_EN.exe+18FEA6B|3|48|Esthar - Abadan Plains|19|Ultima|
|FF8_EN.exe+18FEA6B|4|-1|???|50|Scan|


## Draw Map (WM)
![Chocobo Forests](img/wm/draw.png)

<sup>[Source](https://game8.co/games/Final_Fantasy_VIII/archives/270984)</sup>