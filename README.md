
# Running
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+78EEA0|FF8_FR.exe+78EB78|4 Bytes|Field RNG|
|FF8_EN.exe+18DC748|FF8_FR.exe+18DC420|1 Byte|Stepcount Offset|
|FF8_EN.exe+18DC740|FF8_FR.exe+18DC418|1 Byte|Step Fraction<br />----<br />When step count is active|
|FF8_EN.exe+18D2FB8|FF8_FR.exe+18D2C90|1 Byte|Step ID|
|FF8_EN.exe+18DC74A|FF8_FR.exe+18DC422|1 Byte|Danger Value<br />----<br />When step count is active|
|FF8_EN.exe+18FEFB4|FF8_FR.exe+18FEC8C|4 Bytes|Card RNG<br />----<br />Hex Value|
|FF8_EN.exe+18DBFEC|FF8_FR.exe+18DBCC4|2 Bytes|Encounter Count<br />----<br />Current session<br />Resets on game restart|
|FF8_EN.exe+18E490B|FF8_FR.exe+18E45E3|1 Byte|Can Save<br />----<br />Set to 1 to save anywhere.<br />Save points set this to 3.|
|FF8_EN.exe+18FEC90|FF8_FR.exe+18FE968|1 Byte|Caraway Mansion Code<br />----<br />Accurate only when on map id 761.|
|FF8_EN.exe+1996DA8|FF8_FR.exe+1996A80|2 Bytes|[Encounter ID](encounterId.md)<br />----<br />For the current/most recent encounter.|
|FF8_EN.exe+1C40A5E|FF8_FR.exe+1C40736|1 Byte|Danger Value? (in World Map)|
|FF8_EN.exe+18DBFEC|FF8_FR.exe+18DBCC4|2 Bytes|Total Encounters<br />----<br />Resets to 0 on hard reset.|
|FF8_EN.exe+1927DA4|FF8_FR.exe+1927A7C|1 Byte|Ifrit Punch Counter|
|FF8_EN.exe+1976750|FF8_FR.exe+1976428|2 Bytes|Zell Duel Timer|
# General
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18D2FC0|FF8_FR.exe+18D2C98|2 Bytes|[Map ID](mapId.md)|
|FF8_EN.exe+18FEAB8|FF8_FR.exe+18FE790|2 Bytes|Story Progress|
|FF8_EN.exe+18FE92C|FF8_FR.exe+18FE604|2 Bytes|Time remaining<br />----<br />In seconds, if there's an active timer|
|FF8_EN.exe+18FE764|FF8_FR.exe+18FE43C|4 Bytes|Current Gil|
|FF8_EN.exe+18FE928|FF8_FR.exe+18FE600|4 Bytes|Play Time<br />----<br />In seconds|
|FF8_EN.exe+18FE940|FF8_FR.exe+18FE618|1 Byte|Tonberry Kills<br />----<br />In Centra|
|FF8_EN.exe+18FE9BC|FF8_FR.exe+18FE694|4 Bytes|Total Steps|
|FF8_EN.exe+18FE9C0|FF8_FR.exe+18FE698|1 Byte|SeeD Payout Step Fraction<br />----<br />Increments as you step, resets at 255.|
|FF8_EN.exe+18FE9C1|FF8_FR.exe+18FE699|1 Byte|SeeD Payout Timer<br />----<br />Payout when >= 96<br />+1 when SeeD Payout Step Fraction passes 255.|
|FF8_EN.exe+18FE9C8|FF8_FR.exe+18FE6A0|2 Bytes|SeeD Pts<br />----<br />every 100 = rank up<br />-10 every payout<br />+10 for every won encounter.|
|FF8_EN.exe+18FEA0C|FF8_FR.exe+18FE6E4|2 Bytes|[Previous Map ID](mapId.md)<br />----<br />MapId of the prevous screen.|
|FF8_EN.exe+18FEB32|FF8_FR.exe+18FE80A|1 Byte|Centra Ruins Timer<br />----<br />In seconds|
|FF8_EN.exe+1C3ED02|FF8_FR.exe+1C3E9DA|2 Bytes|World map camera direction<br />----<br />Range: 0 (North) - 4095|
|FF8_EN.exe+1C3ED08|FF8_FR.exe+1C3E9E0|2 Bytes|World map camera tilt<br />----<br />Something to do with camera tilt in world map.|
|FF8_EN.exe+1C3ED2C|FF8_FR.exe+1C3EA04|2 Bytes|Town/battle scene<br />----<br />In Town: 0 on world map<br />1 in local/dungeon maps<br />1 in menu<br />1 in battle.|
|FF8_EN.exe+1C3ED30|FF8_FR.exe+1C3EA08|1 Byte|Controller Button Presses (Byte 1)<br />----<br />Experimental|
|FF8_EN.exe+1C3ED31|FF8_FR.exe+1C3EA09|1 Byte|Controller Button Presses (Byte 2)<br />----<br />Experimental|
|FF8_EN.exe+1C3EE80|FF8_FR.exe+1C3EB58|4 Bytes|World Map Coord X|
|FF8_EN.exe+1C3EE84|FF8_FR.exe+1C3EB5C|4 Bytes|World Map Coord Y|
|FF8_EN.exe+1C3EE88|FF8_FR.exe+1C3EB60|4 Bytes|World Map Coord Z|
|FF8_EN.exe+1677238|FF8_FR.exe+1676F10|4 Bytes|Field Coord X|
|FF8_EN.exe+167723C|FF8_FR.exe+1676F14|4 Bytes|Field Coord Y|
|FF8_EN.exe+1677240|FF8_FR.exe+1676F18|4 Bytes|Field Coord Z|
# Seals (Map)
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 0; Length: 1)|Item Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 1; Length: 1)|Magic Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 2; Length: 1)|GF Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 3; Length: 1)|Draw Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 4; Length: 1)|Command Ability Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 5; Length: 1)|Limit Break Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 6; Length: 1)|Resurrection Locked|
|FF8_EN.exe+18FE73F|FF8_FR.exe+18FE417|Binary (Bit 7; Length: 1)|Save Locked|
# Seals (Battle)
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 0; Length: 1)|Item Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 1; Length: 1)|Magic Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 2; Length: 1)|GF Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 3; Length: 1)|Draw Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 4; Length: 1)|Command Ability Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 5; Length: 1)|Limit Break Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 6; Length: 1)|Resurrection Locked|
|FF8_EN.exe+18FF6E8|FF8_FR.exe+18FF3C0|Binary (Bit 7; Length: 1)|Save Locked|
# Unlocked Abilities
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 0; Length: 1)|Item Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 1; Length: 1)|Magic Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 2; Length: 1)|GF Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 3; Length: 1)|Draw Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 4; Length: 1)|Command Ability Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 5; Length: 1)|Limit Break Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 6; Length: 1)|Resurrection Locked<br />----<br />Used in Post-Battle Unlock List|
|FF8_EN.exe+18FEB06|FF8_FR.exe+18FE7DE|Binary (Bit 7; Length: 1)|Save Locked<br />----<br />Used in Post-Battle Unlock List|
# Battle
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+1927F58|FF8_FR.exe+1927C30|1 Byte|Ultimecia Death Animation<br />----<br />0 -> 1 when Ultimecia takes final hit|
|FF8_EN.exe+18FE9CC|FF8_FR.exe+18FE6A4|2 Bytes|Battles Won|
|FF8_EN.exe+18FE9D2|FF8_FR.exe+18FE6AA|2 Bytes|Battles Escaped|
|FF8_EN.exe+18FE9D4|FF8_FR.exe+18FE6AC|2 Bytes|Squall's Kill Count|
|FF8_EN.exe+18FE9D6|FF8_FR.exe+18FE6AE|2 Bytes|Zell's Kill Count|
|FF8_EN.exe+18FE9D8|FF8_FR.exe+18FE6B0|2 Bytes|Irvine's Kill Count|
|FF8_EN.exe+18FE9DA|FF8_FR.exe+18FE6B2|2 Bytes|Quistis's Kill Count|
|FF8_EN.exe+18FE9DC|FF8_FR.exe+18FE6B4|2 Bytes|Rinoa's Kill Count|
|FF8_EN.exe+18FE9DE|FF8_FR.exe+18FE6B6|2 Bytes|Selphie's Kill Count|
|FF8_EN.exe+18FE9E4|FF8_FR.exe+18FE6BC|2 Bytes|Squall's Death Count|
|FF8_EN.exe+18FE9E6|FF8_FR.exe+18FE6BE|2 Bytes|Zell's Death Count|
|FF8_EN.exe+18FE9E8|FF8_FR.exe+18FE6C0|2 Bytes|Irvine's Death Count|
|FF8_EN.exe+18FE9EA|FF8_FR.exe+18FE6C2|2 Bytes|Quistis's Death Count|
|FF8_EN.exe+18FE9EC|FF8_FR.exe+18FE6C4|2 Bytes|Rinoa's Death Count|
|FF8_EN.exe+18FE9EE|FF8_FR.exe+18FE6C6|2 Bytes|Selphie's Death Count|
|FF8_EN.exe+18FE9FC|FF8_FR.exe+18FE6D4|4 Bytes|Total Enemies Killed|
# Ally 1
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FF574|FF8_FR.exe+18FF24C|2 Bytes|XP Earned|
|FF8_EN.exe+18FF57A|FF8_FR.exe+18FF252|2 Bytes|XP Earned Extra|
|FF8_EN.exe+1927B24|FF8_FR.exe+19277FC|2 Bytes|Current ATB|
|FF8_EN.exe+1927B20|FF8_FR.exe+19277F8|2 Bytes|Max ATB|
|FF8_EN.exe+1927B28|FF8_FR.exe+1927800|2 Bytes|Current HP|
|FF8_EN.exe+1927B2C|FF8_FR.exe+1927804|2 Bytes|Max HP|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 0; Length: 1)|Sleep|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 1; Length: 1)|Haste|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 2; Length: 1)|Slow|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 3; Length: 1)|Stop|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 4; Length: 1)|Regen|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 5; Length: 1)|Protect|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 6; Length: 1)|Shell|
|FF8_EN.exe+1927B18|FF8_FR.exe+19277F0|Binary (Bit 7; Length: 1)|Reflect|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 0; Length: 1)|Aura|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 1; Length: 1)|Curse|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 2; Length: 1)|Doom|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 3; Length: 1)|Invincible|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 4; Length: 1)|Gradual Petrify|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 5; Length: 1)|Float|
|FF8_EN.exe+1927B19|FF8_FR.exe+19277F1|Binary (Bit 6; Length: 1)|Confuse|
|FF8_EN.exe+1927B1A|FF8_FR.exe+19277F2|Binary (Bit 0; Length: 1)|Eject?|
|FF8_EN.exe+1927B1A|FF8_FR.exe+19277F2|Binary (Bit 1; Length: 1)|Double|
|FF8_EN.exe+1927B1A|FF8_FR.exe+19277F2|Binary (Bit 2; Length: 1)|Triple|
|FF8_EN.exe+1927B1A|FF8_FR.exe+19277F2|Binary (Bit 3; Length: 1)|Defend|
|FF8_EN.exe+1927B1A|FF8_FR.exe+19277F2|Binary (Bit 6; Length: 1)|Retribution?|
|FF8_EN.exe+1927B1B|FF8_FR.exe+19277F3|Binary (Bit 0; Length: 1)|Vit 0|
|FF8_EN.exe+1927B1B|FF8_FR.exe+19277F3|Binary (Bit 1; Length: 1)|Angel Wing|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 0; Length: 1)|KO|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 1; Length: 1)|Poison|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 2; Length: 1)|Petrify|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 3; Length: 1)|Darkness|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 4; Length: 1)|Silence|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 5; Length: 1)|Berserk|
|FF8_EN.exe+1927B90|FF8_FR.exe+1927868|Binary (Bit 6; Length: 1)|Zombie|
|FF8_EN.exe+1927B64|FF8_FR.exe+192783C|2 Bytes|Sleep Timer (64425 when not active)|
|FF8_EN.exe+1927B66|FF8_FR.exe+192783E|2 Bytes|Haste Timer (64425 when not active)|
|FF8_EN.exe+1927B68|FF8_FR.exe+1927840|2 Bytes|Slow Timer (64425 when not active)|
|FF8_EN.exe+1927B6A|FF8_FR.exe+1927842|2 Bytes|Stop Timer (64425 when not active)|
|FF8_EN.exe+1927B6C|FF8_FR.exe+1927844|2 Bytes|Regen Timer (64425 when not active)|
|FF8_EN.exe+1927B6E|FF8_FR.exe+1927846|2 Bytes|Protect Timer (64425 when not active)|
|FF8_EN.exe+1927B70|FF8_FR.exe+1927848|2 Bytes|Shell Timer (64425 when not active)|
|FF8_EN.exe+1927B72|FF8_FR.exe+192784A|2 Bytes|Reflect Timer (64425 when not active)|
|FF8_EN.exe+1927B74|FF8_FR.exe+192784C|2 Bytes|Aura Timer (64425 when not active)|
|FF8_EN.exe+1927B76|FF8_FR.exe+192784E|2 Bytes|Curse Timer (64425 when not active)|
|FF8_EN.exe+1927B78|FF8_FR.exe+1927850|2 Bytes|Doom Timer (64425 when not active)|
|FF8_EN.exe+1927B7A|FF8_FR.exe+1927852|2 Bytes|Hero Timer (64425 when not active)|
|FF8_EN.exe+1927B7C|FF8_FR.exe+1927854|2 Bytes|Petrify Timer (64425 when not active)|
|FF8_EN.exe+1927B7E|FF8_FR.exe+1927856|2 Bytes|Float Timer (64425 when not active)|
|FF8_EN.exe+1927B80|FF8_FR.exe+1927858|2 Bytes|UNKNOWN 1 Timer (64425 when not active)|
|FF8_EN.exe+1927B82|FF8_FR.exe+192785A|2 Bytes|UNKNOWN 2 Timer (64425 when not active)|
# Ally 2
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FF576|FF8_FR.exe+18FF24E|2 Bytes|XP Earned|
|FF8_EN.exe+18FF57C|FF8_FR.exe+18FF254|2 Bytes|XP Earned Extra|
|FF8_EN.exe+1927BF4|FF8_FR.exe+19278CC|2 Bytes|Current ATB|
|FF8_EN.exe+1927BF0|FF8_FR.exe+19278C8|2 Bytes|Max ATB|
|FF8_EN.exe+1927BF8|FF8_FR.exe+19278D0|2 Bytes|Current HP|
|FF8_EN.exe+1927BFC|FF8_FR.exe+19278D4|2 Bytes|Max HP|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 0; Length: 1)|Sleep|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 1; Length: 1)|Haste|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 2; Length: 1)|Slow|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 3; Length: 1)|Stop|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 4; Length: 1)|Regen|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 5; Length: 1)|Protect|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 6; Length: 1)|Shell|
|FF8_EN.exe+1927BE8|FF8_FR.exe+19278C0|Binary (Bit 7; Length: 1)|Reflect|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 0; Length: 1)|Aura|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 1; Length: 1)|Curse|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 2; Length: 1)|Doom|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 3; Length: 1)|Invincible|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 4; Length: 1)|Gradual Petrify|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 5; Length: 1)|Float|
|FF8_EN.exe+1927BE9|FF8_FR.exe+19278C1|Binary (Bit 6; Length: 1)|Confuse|
|FF8_EN.exe+1927BEA|FF8_FR.exe+19278C2|Binary (Bit 0; Length: 1)|Eject?|
|FF8_EN.exe+1927BEA|FF8_FR.exe+19278C2|Binary (Bit 1; Length: 1)|Double|
|FF8_EN.exe+1927BEA|FF8_FR.exe+19278C2|Binary (Bit 2; Length: 1)|Triple|
|FF8_EN.exe+1927BEA|FF8_FR.exe+19278C2|Binary (Bit 3; Length: 1)|Defend|
|FF8_EN.exe+1927BEA|FF8_FR.exe+19278C2|Binary (Bit 6; Length: 1)|Retribution?|
|FF8_EN.exe+1927BEB|FF8_FR.exe+19278C3|Binary (Bit 0; Length: 1)|Vit 0|
|FF8_EN.exe+1927BEB|FF8_FR.exe+19278C3|Binary (Bit 1; Length: 1)|Angel Wing|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 0; Length: 1)|KO|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 1; Length: 1)|Poison|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 2; Length: 1)|Petrify|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 3; Length: 1)|Darkness|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 4; Length: 1)|Silence|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 5; Length: 1)|Berserk|
|FF8_EN.exe+1927C60|FF8_FR.exe+1927938|Binary (Bit 6; Length: 1)|Zombie|
|FF8_EN.exe+1927C34|FF8_FR.exe+192790C|2 Bytes|Sleep Timer (64425 when not active)|
|FF8_EN.exe+1927C36|FF8_FR.exe+192790E|2 Bytes|Haste Timer (64425 when not active)|
|FF8_EN.exe+1927C38|FF8_FR.exe+1927910|2 Bytes|Slow Timer (64425 when not active)|
|FF8_EN.exe+1927C3A|FF8_FR.exe+1927912|2 Bytes|Stop Timer (64425 when not active)|
|FF8_EN.exe+1927C3C|FF8_FR.exe+1927914|2 Bytes|Regen Timer (64425 when not active)|
|FF8_EN.exe+1927C3E|FF8_FR.exe+1927916|2 Bytes|Protect Timer (64425 when not active)|
|FF8_EN.exe+1927C40|FF8_FR.exe+1927918|2 Bytes|Shell Timer (64425 when not active)|
|FF8_EN.exe+1927C42|FF8_FR.exe+192791A|2 Bytes|Reflect Timer (64425 when not active)|
|FF8_EN.exe+1927C44|FF8_FR.exe+192791C|2 Bytes|Aura Timer (64425 when not active)|
|FF8_EN.exe+1927C46|FF8_FR.exe+192791E|2 Bytes|Curse Timer (64425 when not active)|
|FF8_EN.exe+1927C48|FF8_FR.exe+1927920|2 Bytes|Doom Timer (64425 when not active)|
|FF8_EN.exe+1927C4A|FF8_FR.exe+1927922|2 Bytes|Hero Timer (64425 when not active)|
|FF8_EN.exe+1927C4C|FF8_FR.exe+1927924|2 Bytes|Petrify Timer (64425 when not active)|
|FF8_EN.exe+1927C4E|FF8_FR.exe+1927926|2 Bytes|Float Timer (64425 when not active)|
|FF8_EN.exe+1927C50|FF8_FR.exe+1927928|2 Bytes|UNKNOWN 1 Timer (64425 when not active)|
|FF8_EN.exe+1927C52|FF8_FR.exe+192792A|2 Bytes|UNKNOWN 2 Timer (64425 when not active)|
# Ally 3
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FF578|FF8_FR.exe+18FF250|2 Bytes|XP Earned|
|FF8_EN.exe+18FF57E|FF8_FR.exe+18FF256|2 Bytes|XP Earned Extra|
|FF8_EN.exe+1927CC4|FF8_FR.exe+192799C|2 Bytes|Current ATB|
|FF8_EN.exe+1927CC0|FF8_FR.exe+1927998|2 Bytes|Max ATB|
|FF8_EN.exe+1927CC8|FF8_FR.exe+19279A0|2 Bytes|Current HP|
|FF8_EN.exe+1927CCC|FF8_FR.exe+19279A4|2 Bytes|Max HP|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 0; Length: 1)|Sleep|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 1; Length: 1)|Haste|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 2; Length: 1)|Slow|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 3; Length: 1)|Stop|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 4; Length: 1)|Regen|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 5; Length: 1)|Protect|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 6; Length: 1)|Shell|
|FF8_EN.exe+1927CB8|FF8_FR.exe+1927990|Binary (Bit 7; Length: 1)|Reflect|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 0; Length: 1)|Aura|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 1; Length: 1)|Curse|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 2; Length: 1)|Doom|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 3; Length: 1)|Invincible|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 4; Length: 1)|Gradual Petrify|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 5; Length: 1)|Float|
|FF8_EN.exe+1927CB9|FF8_FR.exe+1927991|Binary (Bit 6; Length: 1)|Confuse|
|FF8_EN.exe+1927CBA|FF8_FR.exe+1927992|Binary (Bit 0; Length: 1)|Eject?|
|FF8_EN.exe+1927CBA|FF8_FR.exe+1927992|Binary (Bit 1; Length: 1)|Double|
|FF8_EN.exe+1927CBA|FF8_FR.exe+1927992|Binary (Bit 2; Length: 1)|Triple|
|FF8_EN.exe+1927CBA|FF8_FR.exe+1927992|Binary (Bit 3; Length: 1)|Defend|
|FF8_EN.exe+1927CBA|FF8_FR.exe+1927992|Binary (Bit 6; Length: 1)|Retribution?|
|FF8_EN.exe+1927CBB|FF8_FR.exe+1927993|Binary (Bit 0; Length: 1)|Vit 0|
|FF8_EN.exe+1927CBB|FF8_FR.exe+1927993|Binary (Bit 1; Length: 1)|Angel Wing|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 0; Length: 1)|KO|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 1; Length: 1)|Poison|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 2; Length: 1)|Petrify|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 3; Length: 1)|Darkness|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 4; Length: 1)|Silence|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 5; Length: 1)|Berserk|
|FF8_EN.exe+1927D30|FF8_FR.exe+1927A08|Binary (Bit 6; Length: 1)|Zombie|
|FF8_EN.exe+1927D04|FF8_FR.exe+19279DC|2 Bytes|Sleep Timer (64425 when not active)|
|FF8_EN.exe+1927D06|FF8_FR.exe+19279DE|2 Bytes|Haste Timer (64425 when not active)|
|FF8_EN.exe+1927D08|FF8_FR.exe+19279E0|2 Bytes|Slow Timer (64425 when not active)|
|FF8_EN.exe+1927D0A|FF8_FR.exe+19279E2|2 Bytes|Stop Timer (64425 when not active)|
|FF8_EN.exe+1927D0C|FF8_FR.exe+19279E4|2 Bytes|Regen Timer (64425 when not active)|
|FF8_EN.exe+1927D0E|FF8_FR.exe+19279E6|2 Bytes|Protect Timer (64425 when not active)|
|FF8_EN.exe+1927D10|FF8_FR.exe+19279E8|2 Bytes|Shell Timer (64425 when not active)|
|FF8_EN.exe+1927D12|FF8_FR.exe+19279EA|2 Bytes|Reflect Timer (64425 when not active)|
|FF8_EN.exe+1927D14|FF8_FR.exe+19279EC|2 Bytes|Aura Timer (64425 when not active)|
|FF8_EN.exe+1927D16|FF8_FR.exe+19279EE|2 Bytes|Curse Timer (64425 when not active)|
|FF8_EN.exe+1927D18|FF8_FR.exe+19279F0|2 Bytes|Doom Timer (64425 when not active)|
|FF8_EN.exe+1927D1A|FF8_FR.exe+19279F2|2 Bytes|Hero Timer (64425 when not active)|
|FF8_EN.exe+1927D1C|FF8_FR.exe+19279F4|2 Bytes|Petrify Timer (64425 when not active)|
|FF8_EN.exe+1927D1E|FF8_FR.exe+19279F6|2 Bytes|Float Timer (64425 when not active)|
|FF8_EN.exe+1927D20|FF8_FR.exe+19279F8|2 Bytes|UNKNOWN 1 Timer (64425 when not active)|
|FF8_EN.exe+1927D22|FF8_FR.exe+19279FA|2 Bytes|UNKNOWN 2 Timer (64425 when not active)|
# GF
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FF5C0|FF8_FR.exe+18FF298|2 Bytes|GF AP Earned|
|FF8_EN.exe+1C9CEF0|FF8_FR.exe+1C9CBC8|1 Byte|Current GF Boost (0-255)|
|FF8_EN.exe+18FF580|FF8_FR.exe+18FF258|2 Bytes|XP Earned GF 1|
|FF8_EN.exe+18FF582|FF8_FR.exe+18FF25A|2 Bytes|XP Earned GF 2|
|FF8_EN.exe+18FF584|FF8_FR.exe+18FF25C|2 Bytes|XP Earned GF 3|
|FF8_EN.exe+18FF586|FF8_FR.exe+18FF25E|2 Bytes|XP Earned GF 4|
|FF8_EN.exe+18FF588|FF8_FR.exe+18FF260|2 Bytes|XP Earned GF 5|
|FF8_EN.exe+18FF58A|FF8_FR.exe+18FF262|2 Bytes|XP Earned GF 6|
|FF8_EN.exe+18FF58C|FF8_FR.exe+18FF264|2 Bytes|XP Earned GF 7|
|FF8_EN.exe+18FF58E|FF8_FR.exe+18FF266|2 Bytes|XP Earned GF 8|
|FF8_EN.exe+18FF590|FF8_FR.exe+18FF268|2 Bytes|XP Earned GF 9|
|FF8_EN.exe+18FF592|FF8_FR.exe+18FF26A|2 Bytes|XP Earned GF 10|
|FF8_EN.exe+18FF594|FF8_FR.exe+18FF26C|2 Bytes|XP Earned GF 11|
|FF8_EN.exe+18FF596|FF8_FR.exe+18FF26E|2 Bytes|XP Earned GF 12|
|FF8_EN.exe+18FF598|FF8_FR.exe+18FF270|2 Bytes|XP Earned GF 13|
|FF8_EN.exe+18FF59A|FF8_FR.exe+18FF272|2 Bytes|XP Earned GF 14|
|FF8_EN.exe+18FF59C|FF8_FR.exe+18FF274|2 Bytes|XP Earned GF 15|
|FF8_EN.exe+18FF59E|FF8_FR.exe+18FF276|2 Bytes|XP Earned GF 16|
# Enemy 1
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+1927D94|FF8_FR.exe+1927A6C|4 Bytes|Current ATB|
|FF8_EN.exe+1927D90|FF8_FR.exe+1927A68|2 Bytes|Max ATB|
|FF8_EN.exe+1927D98|FF8_FR.exe+1927A70|4 Bytes|Current HP|
|FF8_EN.exe+1927D9C|FF8_FR.exe+1927A74|4 Bytes|Max HP|
|FF8_EN.exe+1928F18|FF8_FR.exe+1928BF0|1 Byte|[Draw 1 Spell ID](magicId.md)|
|FF8_EN.exe+1928F1C|FF8_FR.exe+1928BF4|1 Byte|[Draw 2 Spell ID](magicId.md)|
|FF8_EN.exe+1928F20|FF8_FR.exe+1928BF8|1 Byte|[Draw 3 Spell ID](magicId.md)|
|FF8_EN.exe+1928F24|FF8_FR.exe+1928BFC|1 Byte|[Draw 4 Spell ID](magicId.md)|
# Enemy 2
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+1927E64|FF8_FR.exe+1927B3C|4 Bytes|Current ATB|
|FF8_EN.exe+1927E60|FF8_FR.exe+1927B38|4 Bytes|Max ATB|
|FF8_EN.exe+1927E68|FF8_FR.exe+1927B40|4 Bytes|Current HP|
|FF8_EN.exe+1927E6C|FF8_FR.exe+1927B44|4 Bytes|Max HP|
|FF8_EN.exe+1928F5F|FF8_FR.exe+1928C37|1 Byte|[Draw 1 Spell ID](magicId.md)|
|FF8_EN.exe+1928F63|FF8_FR.exe+1928C3B|1 Byte|[Draw 2 Spell ID](magicId.md)|
|FF8_EN.exe+1928F67|FF8_FR.exe+1928C3F|1 Byte|[Draw 3 Spell ID](magicId.md)|
|FF8_EN.exe+1928F6B|FF8_FR.exe+1928C43|1 Byte|[Draw 4 Spell ID](magicId.md)|
# Enemy 3
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+1927F34|FF8_FR.exe+1927C0C|4 Bytes|Current ATB|
|FF8_EN.exe+1927F30|FF8_FR.exe+1927C08|4 Bytes|Max ATB|
|FF8_EN.exe+1927F38|FF8_FR.exe+1927C10|4 Bytes|Current HP|
|FF8_EN.exe+1927F3C|FF8_FR.exe+1927C14|4 Bytes|Max HP|
|FF8_EN.exe+1928FA6|FF8_FR.exe+1928C7E|1 Byte|[Draw 1 Spell ID](magicId.md)|
|FF8_EN.exe+1928FAA|FF8_FR.exe+1928C82|1 Byte|[Draw 2 Spell ID](magicId.md)|
|FF8_EN.exe+1928FAE|FF8_FR.exe+1928C86|1 Byte|[Draw 3 Spell ID](magicId.md)|
|FF8_EN.exe+1928FB2|FF8_FR.exe+1928C8A|1 Byte|[Draw 4 Spell ID](magicId.md)|
# Enemy 4
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+1928004|FF8_FR.exe+1927CDC|4 Bytes|Current ATB|
|FF8_EN.exe+1928000|FF8_FR.exe+1927CD8|4 Bytes|Max ATB|
|FF8_EN.exe+1928008|FF8_FR.exe+1927CE0|4 Bytes|Current HP|
|FF8_EN.exe+192800C|FF8_FR.exe+1927CE4|4 Bytes|Max HP|
|FF8_EN.exe+1928FED|FF8_FR.exe+1928CC5|1 Byte|[Draw 1 Spell ID](magicId.md)|
|FF8_EN.exe+1928FF1|FF8_FR.exe+1928CC9|1 Byte|[Draw 2 Spell ID](magicId.md)|
|FF8_EN.exe+1928FF5|FF8_FR.exe+1928CCD|1 Byte|[Draw 3 Spell ID](magicId.md)|
|FF8_EN.exe+1928FFF|FF8_FR.exe+1928CD7|1 Byte|[Draw 4 Spell ID](magicId.md)|
# Squall
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE0E8|FF8_FR.exe+18FDDC0|2 Bytes|HP|
|FF8_EN.exe+18FE0EA|FF8_FR.exe+18FDDC2|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE0EC|FF8_FR.exe+18FDDC4|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE0F2|FF8_FR.exe+18FDDCA|1 Byte|STR Modifier|
|FF8_EN.exe+18FE0F3|FF8_FR.exe+18FDDCB|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE0F4|FF8_FR.exe+18FDDCC|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE0F5|FF8_FR.exe+18FDDCD|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE0F6|FF8_FR.exe+18FDDCE|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE0F7|FF8_FR.exe+18FDDCF|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE138|FF8_FR.exe+18FDE10|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE139|FF8_FR.exe+18FDE11|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE13A|FF8_FR.exe+18FDE12|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE13B|FF8_FR.exe+18FDE13|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE13C|FF8_FR.exe+18FDE14|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE13D|FF8_FR.exe+18FDE15|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE13E|FF8_FR.exe+18FDE16|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE144|FF8_FR.exe+18FDE1C|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE145|FF8_FR.exe+18FDE1D|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE146|FF8_FR.exe+18FDE1E|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE147|FF8_FR.exe+18FDE1F|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE148|FF8_FR.exe+18FDE20|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE149|FF8_FR.exe+18FDE21|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE14A|FF8_FR.exe+18FDE22|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE14B|FF8_FR.exe+18FDE23|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE14C|FF8_FR.exe+18FDE24|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE14D|FF8_FR.exe+18FDE25|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE14E|FF8_FR.exe+18FDE26|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE14F|FF8_FR.exe+18FDE27|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE150|FF8_FR.exe+18FDE28|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE153|FF8_FR.exe+18FDE2B|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE154|FF8_FR.exe+18FDE2C|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE155|FF8_FR.exe+18FDE2D|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE156|FF8_FR.exe+18FDE2E|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE158|FF8_FR.exe+18FDE30|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE15A|FF8_FR.exe+18FDE32|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE15C|FF8_FR.exe+18FDE34|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE15E|FF8_FR.exe+18FDE36|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE160|FF8_FR.exe+18FDE38|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE162|FF8_FR.exe+18FDE3A|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE164|FF8_FR.exe+18FDE3C|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE166|FF8_FR.exe+18FDE3E|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE168|FF8_FR.exe+18FDE40|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE16A|FF8_FR.exe+18FDE42|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE16C|FF8_FR.exe+18FDE44|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE16E|FF8_FR.exe+18FDE46|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE170|FF8_FR.exe+18FDE48|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE172|FF8_FR.exe+18FDE4A|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE174|FF8_FR.exe+18FDE4C|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE176|FF8_FR.exe+18FDE4E|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE178|FF8_FR.exe+18FDE50|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE17A|FF8_FR.exe+18FDE52|2 Bytes|KO Counter|
# Zell
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE180|FF8_FR.exe+18FDE58|2 Bytes|HP|
|FF8_EN.exe+18FE182|FF8_FR.exe+18FDE5A|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE184|FF8_FR.exe+18FDE5C|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE18A|FF8_FR.exe+18FDE62|1 Byte|STR Modifier|
|FF8_EN.exe+18FE18B|FF8_FR.exe+18FDE63|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE18C|FF8_FR.exe+18FDE64|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE18D|FF8_FR.exe+18FDE65|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE18E|FF8_FR.exe+18FDE66|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE18F|FF8_FR.exe+18FDE67|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE1D0|FF8_FR.exe+18FDEA8|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE1D1|FF8_FR.exe+18FDEA9|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE1D2|FF8_FR.exe+18FDEAA|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE1D3|FF8_FR.exe+18FDEAB|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE1D4|FF8_FR.exe+18FDEAC|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE1D5|FF8_FR.exe+18FDEAD|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE1D6|FF8_FR.exe+18FDEAE|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE1DC|FF8_FR.exe+18FDEB4|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1DD|FF8_FR.exe+18FDEB5|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1DE|FF8_FR.exe+18FDEB6|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1DF|FF8_FR.exe+18FDEB7|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E0|FF8_FR.exe+18FDEB8|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E1|FF8_FR.exe+18FDEB9|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E2|FF8_FR.exe+18FDEBA|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E3|FF8_FR.exe+18FDEBB|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E4|FF8_FR.exe+18FDEBC|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE1E5|FF8_FR.exe+18FDEBD|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE1E6|FF8_FR.exe+18FDEBE|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE1E7|FF8_FR.exe+18FDEBF|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE1E8|FF8_FR.exe+18FDEC0|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE1EB|FF8_FR.exe+18FDEC3|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE1EC|FF8_FR.exe+18FDEC4|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE1EE|FF8_FR.exe+18FDEC6|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE1EF|FF8_FR.exe+18FDEC7|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE1F0|FF8_FR.exe+18FDEC8|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE1F2|FF8_FR.exe+18FDECA|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE1F4|FF8_FR.exe+18FDECC|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE1F6|FF8_FR.exe+18FDECE|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE1F8|FF8_FR.exe+18FDED0|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE1FA|FF8_FR.exe+18FDED2|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE1FC|FF8_FR.exe+18FDED4|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE1FE|FF8_FR.exe+18FDED6|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE200|FF8_FR.exe+18FDED8|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE202|FF8_FR.exe+18FDEDA|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE204|FF8_FR.exe+18FDEDC|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE206|FF8_FR.exe+18FDEDE|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE208|FF8_FR.exe+18FDEE0|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE20A|FF8_FR.exe+18FDEE2|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE20C|FF8_FR.exe+18FDEE4|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE20E|FF8_FR.exe+18FDEE6|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE210|FF8_FR.exe+18FDEE8|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE212|FF8_FR.exe+18FDEEA|2 Bytes|KO Counter|
# Irvine
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE218|FF8_FR.exe+18FDEF0|2 Bytes|HP|
|FF8_EN.exe+18FE21A|FF8_FR.exe+18FDEF2|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE21C|FF8_FR.exe+18FDEF4|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE222|FF8_FR.exe+18FDEFA|1 Byte|STR Modifier|
|FF8_EN.exe+18FE223|FF8_FR.exe+18FDEFB|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE224|FF8_FR.exe+18FDEFC|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE225|FF8_FR.exe+18FDEFD|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE226|FF8_FR.exe+18FDEFE|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE227|FF8_FR.exe+18FDEFF|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE268|FF8_FR.exe+18FDF40|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE269|FF8_FR.exe+18FDF41|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE26A|FF8_FR.exe+18FDF42|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE26B|FF8_FR.exe+18FDF43|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE26C|FF8_FR.exe+18FDF44|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE26D|FF8_FR.exe+18FDF45|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE26E|FF8_FR.exe+18FDF46|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE274|FF8_FR.exe+18FDF4C|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE275|FF8_FR.exe+18FDF4D|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE276|FF8_FR.exe+18FDF4E|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE277|FF8_FR.exe+18FDF4F|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE278|FF8_FR.exe+18FDF50|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE279|FF8_FR.exe+18FDF51|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE27A|FF8_FR.exe+18FDF52|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE27B|FF8_FR.exe+18FDF53|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE27C|FF8_FR.exe+18FDF54|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE27D|FF8_FR.exe+18FDF55|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE27E|FF8_FR.exe+18FDF56|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE27F|FF8_FR.exe+18FDF57|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE280|FF8_FR.exe+18FDF58|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE283|FF8_FR.exe+18FDF5B|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE284|FF8_FR.exe+18FDF5C|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE285|FF8_FR.exe+18FDF5D|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE286|FF8_FR.exe+18FDF5E|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE288|FF8_FR.exe+18FDF60|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE28A|FF8_FR.exe+18FDF62|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE28C|FF8_FR.exe+18FDF64|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE28E|FF8_FR.exe+18FDF66|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE290|FF8_FR.exe+18FDF68|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE292|FF8_FR.exe+18FDF6A|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE294|FF8_FR.exe+18FDF6C|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE296|FF8_FR.exe+18FDF6E|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE298|FF8_FR.exe+18FDF70|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE29A|FF8_FR.exe+18FDF72|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE29C|FF8_FR.exe+18FDF74|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE29E|FF8_FR.exe+18FDF76|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE2A0|FF8_FR.exe+18FDF78|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE2A2|FF8_FR.exe+18FDF7A|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE2A4|FF8_FR.exe+18FDF7C|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE2A6|FF8_FR.exe+18FDF7E|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE2A8|FF8_FR.exe+18FDF80|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE2AA|FF8_FR.exe+18FDF82|2 Bytes|KO Counter|
# Quistis
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE2B0|FF8_FR.exe+18FDF88|2 Bytes|HP|
|FF8_EN.exe+18FE2B2|FF8_FR.exe+18FDF8A|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE2B4|FF8_FR.exe+18FDF8C|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE2BA|FF8_FR.exe+18FDF92|1 Byte|STR Modifier|
|FF8_EN.exe+18FE2BB|FF8_FR.exe+18FDF93|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE2BC|FF8_FR.exe+18FDF94|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE2BD|FF8_FR.exe+18FDF95|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE2BE|FF8_FR.exe+18FDF96|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE2BF|FF8_FR.exe+18FDF97|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE300|FF8_FR.exe+18FDFD8|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE301|FF8_FR.exe+18FDFD9|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE302|FF8_FR.exe+18FDFDA|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE303|FF8_FR.exe+18FDFDB|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE304|FF8_FR.exe+18FDFDC|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE305|FF8_FR.exe+18FDFDD|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE306|FF8_FR.exe+18FDFDE|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE30C|FF8_FR.exe+18FDFE4|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE30D|FF8_FR.exe+18FDFE5|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE30E|FF8_FR.exe+18FDFE6|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE30F|FF8_FR.exe+18FDFE7|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE310|FF8_FR.exe+18FDFE8|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE311|FF8_FR.exe+18FDFE9|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE312|FF8_FR.exe+18FDFEA|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE313|FF8_FR.exe+18FDFEB|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE314|FF8_FR.exe+18FDFEC|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE315|FF8_FR.exe+18FDFED|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE316|FF8_FR.exe+18FDFEE|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE317|FF8_FR.exe+18FDFEF|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE318|FF8_FR.exe+18FDFF0|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE31B|FF8_FR.exe+18FDFF3|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE31C|FF8_FR.exe+18FDFF4|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE31D|FF8_FR.exe+18FDFF5|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE31E|FF8_FR.exe+18FDFF6|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE320|FF8_FR.exe+18FDFF8|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE322|FF8_FR.exe+18FDFFA|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE324|FF8_FR.exe+18FDFFC|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE326|FF8_FR.exe+18FDFFE|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE328|FF8_FR.exe+18FE000|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE32A|FF8_FR.exe+18FE002|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE32C|FF8_FR.exe+18FE004|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE32E|FF8_FR.exe+18FE006|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE330|FF8_FR.exe+18FE008|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE332|FF8_FR.exe+18FE00A|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE334|FF8_FR.exe+18FE00C|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE336|FF8_FR.exe+18FE00E|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE338|FF8_FR.exe+18FE010|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE33A|FF8_FR.exe+18FE012|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE33C|FF8_FR.exe+18FE014|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE33E|FF8_FR.exe+18FE016|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE340|FF8_FR.exe+18FE018|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE342|FF8_FR.exe+18FE01A|2 Bytes|KO Counter|
# Rinoa
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE348|FF8_FR.exe+18FE020|2 Bytes|HP|
|FF8_EN.exe+18FE34A|FF8_FR.exe+18FE022|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE34C|FF8_FR.exe+18FE024|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE352|FF8_FR.exe+18FE02A|1 Byte|STR Modifier|
|FF8_EN.exe+18FE353|FF8_FR.exe+18FE02B|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE354|FF8_FR.exe+18FE02C|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE355|FF8_FR.exe+18FE02D|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE356|FF8_FR.exe+18FE02E|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE357|FF8_FR.exe+18FE02F|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE398|FF8_FR.exe+18FE070|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE399|FF8_FR.exe+18FE071|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE39A|FF8_FR.exe+18FE072|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE39B|FF8_FR.exe+18FE073|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE39C|FF8_FR.exe+18FE074|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE39D|FF8_FR.exe+18FE075|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE39E|FF8_FR.exe+18FE076|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE3A4|FF8_FR.exe+18FE07C|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3A5|FF8_FR.exe+18FE07D|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3A6|FF8_FR.exe+18FE07E|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3A7|FF8_FR.exe+18FE07F|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3A8|FF8_FR.exe+18FE080|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3A9|FF8_FR.exe+18FE081|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3AA|FF8_FR.exe+18FE082|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3AB|FF8_FR.exe+18FE083|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3AC|FF8_FR.exe+18FE084|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE3AD|FF8_FR.exe+18FE085|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE3AE|FF8_FR.exe+18FE086|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE3AF|FF8_FR.exe+18FE087|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE3B0|FF8_FR.exe+18FE088|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE3B3|FF8_FR.exe+18FE08B|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE3B4|FF8_FR.exe+18FE08C|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE3B5|FF8_FR.exe+18FE08D|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE3B6|FF8_FR.exe+18FE08E|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE3B8|FF8_FR.exe+18FE090|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE3BA|FF8_FR.exe+18FE092|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE3BC|FF8_FR.exe+18FE094|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE3BE|FF8_FR.exe+18FE096|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE3C0|FF8_FR.exe+18FE098|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE3C2|FF8_FR.exe+18FE09A|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE3C4|FF8_FR.exe+18FE09C|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE3C6|FF8_FR.exe+18FE09E|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE3C8|FF8_FR.exe+18FE0A0|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE3CA|FF8_FR.exe+18FE0A2|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE3CC|FF8_FR.exe+18FE0A4|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE3CE|FF8_FR.exe+18FE0A6|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE3D0|FF8_FR.exe+18FE0A8|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE3D2|FF8_FR.exe+18FE0AA|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE3D4|FF8_FR.exe+18FE0AC|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE3D6|FF8_FR.exe+18FE0AE|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE3D8|FF8_FR.exe+18FE0B0|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE3DA|FF8_FR.exe+18FE0B2|2 Bytes|KO Counter|
# Selphie
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE3E0|FF8_FR.exe+18FE0B8|2 Bytes|HP|
|FF8_EN.exe+18FE3E2|FF8_FR.exe+18FE0BA|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE3E4|FF8_FR.exe+18FE0BC|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE3EA|FF8_FR.exe+18FE0C2|1 Byte|STR Modifier|
|FF8_EN.exe+18FE3EB|FF8_FR.exe+18FE0C3|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE3EC|FF8_FR.exe+18FE0C4|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE3ED|FF8_FR.exe+18FE0C5|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE3EE|FF8_FR.exe+18FE0C6|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE3EF|FF8_FR.exe+18FE0C7|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE430|FF8_FR.exe+18FE108|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE431|FF8_FR.exe+18FE109|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE432|FF8_FR.exe+18FE10A|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE433|FF8_FR.exe+18FE10B|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE434|FF8_FR.exe+18FE10C|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE435|FF8_FR.exe+18FE10D|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE436|FF8_FR.exe+18FE10E|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE43C|FF8_FR.exe+18FE114|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE43D|FF8_FR.exe+18FE115|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE43E|FF8_FR.exe+18FE116|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE43F|FF8_FR.exe+18FE117|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE440|FF8_FR.exe+18FE118|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE441|FF8_FR.exe+18FE119|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE442|FF8_FR.exe+18FE11A|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE443|FF8_FR.exe+18FE11B|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE444|FF8_FR.exe+18FE11C|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE445|FF8_FR.exe+18FE11D|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE446|FF8_FR.exe+18FE11E|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE447|FF8_FR.exe+18FE11F|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE448|FF8_FR.exe+18FE120|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE44B|FF8_FR.exe+18FE123|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE44C|FF8_FR.exe+18FE124|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE44D|FF8_FR.exe+18FE125|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE44E|FF8_FR.exe+18FE126|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE450|FF8_FR.exe+18FE128|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE452|FF8_FR.exe+18FE12A|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE454|FF8_FR.exe+18FE12C|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE456|FF8_FR.exe+18FE12E|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE458|FF8_FR.exe+18FE130|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE45A|FF8_FR.exe+18FE132|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE45C|FF8_FR.exe+18FE134|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE45E|FF8_FR.exe+18FE136|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE460|FF8_FR.exe+18FE138|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE462|FF8_FR.exe+18FE13A|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE464|FF8_FR.exe+18FE13C|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE466|FF8_FR.exe+18FE13E|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE468|FF8_FR.exe+18FE140|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE46A|FF8_FR.exe+18FE142|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE46C|FF8_FR.exe+18FE144|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE46E|FF8_FR.exe+18FE146|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE470|FF8_FR.exe+18FE148|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE472|FF8_FR.exe+18FE14A|2 Bytes|KO Counter|
# Seifer (In Party)
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE478|FF8_FR.exe+18FE150|2 Bytes|HP|
|FF8_EN.exe+18FE47A|FF8_FR.exe+18FE152|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE47C|FF8_FR.exe+18FE154|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE482|FF8_FR.exe+18FE15A|1 Byte|STR Modifier|
|FF8_EN.exe+18FE483|FF8_FR.exe+18FE15B|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE484|FF8_FR.exe+18FE15C|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE485|FF8_FR.exe+18FE15D|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE486|FF8_FR.exe+18FE15E|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE487|FF8_FR.exe+18FE15F|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE4C8|FF8_FR.exe+18FE1A0|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE4C9|FF8_FR.exe+18FE1A1|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE4CA|FF8_FR.exe+18FE1A2|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE4CB|FF8_FR.exe+18FE1A3|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE4CC|FF8_FR.exe+18FE1A4|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE4CD|FF8_FR.exe+18FE1A5|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE4CE|FF8_FR.exe+18FE1A6|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE4D4|FF8_FR.exe+18FE1AC|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4D5|FF8_FR.exe+18FE1AD|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4D6|FF8_FR.exe+18FE1AE|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4D7|FF8_FR.exe+18FE1AF|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4D8|FF8_FR.exe+18FE1B0|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4D9|FF8_FR.exe+18FE1B1|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4DA|FF8_FR.exe+18FE1B2|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4DB|FF8_FR.exe+18FE1B3|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4DC|FF8_FR.exe+18FE1B4|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE4DD|FF8_FR.exe+18FE1B5|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE4DE|FF8_FR.exe+18FE1B6|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE4DF|FF8_FR.exe+18FE1B7|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE4E0|FF8_FR.exe+18FE1B8|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE4E3|FF8_FR.exe+18FE1BB|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE4E4|FF8_FR.exe+18FE1BC|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE4E5|FF8_FR.exe+18FE1BD|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE4E6|FF8_FR.exe+18FE1BE|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE4E8|FF8_FR.exe+18FE1C0|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE4EA|FF8_FR.exe+18FE1C2|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE4EC|FF8_FR.exe+18FE1C4|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE4EE|FF8_FR.exe+18FE1C6|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE4F0|FF8_FR.exe+18FE1C8|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE4F2|FF8_FR.exe+18FE1CA|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE4F4|FF8_FR.exe+18FE1CC|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE4F6|FF8_FR.exe+18FE1CE|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE4F8|FF8_FR.exe+18FE1D0|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE4FA|FF8_FR.exe+18FE1D2|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE4FC|FF8_FR.exe+18FE1D4|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE4FE|FF8_FR.exe+18FE1D6|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE500|FF8_FR.exe+18FE1D8|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE502|FF8_FR.exe+18FE1DA|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE504|FF8_FR.exe+18FE1DC|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE506|FF8_FR.exe+18FE1DE|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE508|FF8_FR.exe+18FE1E0|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE50A|FF8_FR.exe+18FE1E2|2 Bytes|KO Counter|
# Edea (In Party)
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE510|FF8_FR.exe+18FE1E8|2 Bytes|HP|
|FF8_EN.exe+18FE512|FF8_FR.exe+18FE1EA|2 Bytes|HP Modifier|
|FF8_EN.exe+18FE514|FF8_FR.exe+18FE1EC|4 Bytes|EXP Earned (Affects Level)|
|FF8_EN.exe+18FE51A|FF8_FR.exe+18FE1F2|1 Byte|STR Modifier|
|FF8_EN.exe+18FE51B|FF8_FR.exe+18FE1F3|1 Byte|VIT Modifier|
|FF8_EN.exe+18FE51C|FF8_FR.exe+18FE1F4|1 Byte|MAG Modifier|
|FF8_EN.exe+18FE51D|FF8_FR.exe+18FE1F5|1 Byte|SPR Modifier|
|FF8_EN.exe+18FE51E|FF8_FR.exe+18FE1F6|1 Byte|SPD Modifier|
|FF8_EN.exe+18FE51F|FF8_FR.exe+18FE1F7|1 Byte|LCK Modifier|
|FF8_EN.exe+18FE560|FF8_FR.exe+18FE238|1 Byte|[Equipped Command 1](skillId.md)|
|FF8_EN.exe+18FE561|FF8_FR.exe+18FE239|1 Byte|[Equipped Command 2](skillId.md)|
|FF8_EN.exe+18FE562|FF8_FR.exe+18FE23A|1 Byte|[Equipped Command 3](skillId.md)|
|FF8_EN.exe+18FE563|FF8_FR.exe+18FE23B|1 Byte|[Equipped Command 4](skillId.md)|
|FF8_EN.exe+18FE564|FF8_FR.exe+18FE23C|1 Byte|[Equipped Skill 1](skillId.md)|
|FF8_EN.exe+18FE565|FF8_FR.exe+18FE23D|1 Byte|[Equipped Skill 2](skillId.md)|
|FF8_EN.exe+18FE566|FF8_FR.exe+18FE23E|1 Byte|[Equipped Skill 3](skillId.md)|
|FF8_EN.exe+18FE56C|FF8_FR.exe+18FE244|1 Byte|[HP Junction Spell](magicId.md)|
|FF8_EN.exe+18FE56D|FF8_FR.exe+18FE245|1 Byte|[STR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE56E|FF8_FR.exe+18FE246|1 Byte|[VIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE56F|FF8_FR.exe+18FE247|1 Byte|[MAG Junction Spell](magicId.md)|
|FF8_EN.exe+18FE570|FF8_FR.exe+18FE248|1 Byte|[SPR Junction Spell](magicId.md)|
|FF8_EN.exe+18FE571|FF8_FR.exe+18FE249|1 Byte|[SPD Junction Spell](magicId.md)|
|FF8_EN.exe+18FE572|FF8_FR.exe+18FE24A|1 Byte|[EVA Junction Spell](magicId.md)|
|FF8_EN.exe+18FE573|FF8_FR.exe+18FE24B|1 Byte|[HIT Junction Spell](magicId.md)|
|FF8_EN.exe+18FE574|FF8_FR.exe+18FE24C|1 Byte|[LCK Junction Spell](magicId.md)|
|FF8_EN.exe+18FE575|FF8_FR.exe+18FE24D|1 Byte|[Junction Elm. Atk.](magicId.md)|
|FF8_EN.exe+18FE576|FF8_FR.exe+18FE24E|1 Byte|[Junction St. Atk.](magicId.md)|
|FF8_EN.exe+18FE577|FF8_FR.exe+18FE24F|1 Byte|[Junction Elm. Def. 1](magicId.md)|
|FF8_EN.exe+18FE578|FF8_FR.exe+18FE250|1 Byte|[Junction Elm. Def. 2](magicId.md)|
|FF8_EN.exe+18FE57B|FF8_FR.exe+18FE253|1 Byte|[Junction St. Def. 1](magicId.md)|
|FF8_EN.exe+18FE57C|FF8_FR.exe+18FE254|1 Byte|[Junction St. Def. 2](magicId.md)|
|FF8_EN.exe+18FE57D|FF8_FR.exe+18FE255|1 Byte|[Junction St. Def. 3](magicId.md)|
|FF8_EN.exe+18FE57E|FF8_FR.exe+18FE256|1 Byte|[Junction St. Def. 4](magicId.md)|
|FF8_EN.exe+18FE580|FF8_FR.exe+18FE258|2 Bytes|Quezacotl Compatibility|
|FF8_EN.exe+18FE582|FF8_FR.exe+18FE25A|2 Bytes|Shiva Compatibility|
|FF8_EN.exe+18FE584|FF8_FR.exe+18FE25C|2 Bytes|Ifrit Compatibility|
|FF8_EN.exe+18FE586|FF8_FR.exe+18FE25E|2 Bytes|Siren Compatibility|
|FF8_EN.exe+18FE588|FF8_FR.exe+18FE260|2 Bytes|Brothers Compatibility|
|FF8_EN.exe+18FE58A|FF8_FR.exe+18FE262|2 Bytes|Diablos Compatibility|
|FF8_EN.exe+18FE58C|FF8_FR.exe+18FE264|2 Bytes|Carbuncle Compatibility|
|FF8_EN.exe+18FE58E|FF8_FR.exe+18FE266|2 Bytes|Leviathan Compatibility|
|FF8_EN.exe+18FE590|FF8_FR.exe+18FE268|2 Bytes|Pandemona Compatibility|
|FF8_EN.exe+18FE592|FF8_FR.exe+18FE26A|2 Bytes|Cerberus Compatibility|
|FF8_EN.exe+18FE594|FF8_FR.exe+18FE26C|2 Bytes|Alexander Compatibility|
|FF8_EN.exe+18FE596|FF8_FR.exe+18FE26E|2 Bytes|Doomtrain Compatibility|
|FF8_EN.exe+18FE598|FF8_FR.exe+18FE270|2 Bytes|Bahamut Compatibility|
|FF8_EN.exe+18FE59A|FF8_FR.exe+18FE272|2 Bytes|Cactuar Compatibility|
|FF8_EN.exe+18FE59C|FF8_FR.exe+18FE274|2 Bytes|Tonberry Compatibility|
|FF8_EN.exe+18FE59E|FF8_FR.exe+18FE276|2 Bytes|Eden Compatibility|
|FF8_EN.exe+18FE5A0|FF8_FR.exe+18FE278|2 Bytes|Kill Counter|
|FF8_EN.exe+18FE5A2|FF8_FR.exe+18FE27A|2 Bytes|KO Counter|
# Magic - Squall
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE0F8|FF8_FR.exe+18FDDD0|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE0F9|FF8_FR.exe+18FDDD1|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE0FA|FF8_FR.exe+18FDDD2|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE0FB|FF8_FR.exe+18FDDD3|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE0FC|FF8_FR.exe+18FDDD4|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE0FD|FF8_FR.exe+18FDDD5|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE0FE|FF8_FR.exe+18FDDD6|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE0FF|FF8_FR.exe+18FDDD7|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE100|FF8_FR.exe+18FDDD8|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE101|FF8_FR.exe+18FDDD9|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE102|FF8_FR.exe+18FDDDA|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE103|FF8_FR.exe+18FDDDB|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE104|FF8_FR.exe+18FDDDC|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE105|FF8_FR.exe+18FDDDD|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE106|FF8_FR.exe+18FDDDE|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE107|FF8_FR.exe+18FDDDF|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE108|FF8_FR.exe+18FDDE0|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE109|FF8_FR.exe+18FDDE1|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE10A|FF8_FR.exe+18FDDE2|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE10B|FF8_FR.exe+18FDDE3|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE10C|FF8_FR.exe+18FDDE4|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE10D|FF8_FR.exe+18FDDE5|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE10E|FF8_FR.exe+18FDDE6|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE10F|FF8_FR.exe+18FDDE7|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE110|FF8_FR.exe+18FDDE8|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE111|FF8_FR.exe+18FDDE9|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE112|FF8_FR.exe+18FDDEA|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE113|FF8_FR.exe+18FDDEB|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE114|FF8_FR.exe+18FDDEC|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE115|FF8_FR.exe+18FDDED|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE116|FF8_FR.exe+18FDDEE|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE117|FF8_FR.exe+18FDDEF|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE118|FF8_FR.exe+18FDDF0|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE119|FF8_FR.exe+18FDDF1|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE11A|FF8_FR.exe+18FDDF2|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE11B|FF8_FR.exe+18FDDF3|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE11C|FF8_FR.exe+18FDDF4|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE11D|FF8_FR.exe+18FDDF5|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE11E|FF8_FR.exe+18FDDF6|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE11F|FF8_FR.exe+18FDDF7|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE120|FF8_FR.exe+18FDDF8|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE121|FF8_FR.exe+18FDDF9|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE122|FF8_FR.exe+18FDDFA|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE123|FF8_FR.exe+18FDDFB|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE124|FF8_FR.exe+18FDDFC|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE125|FF8_FR.exe+18FDDFD|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE126|FF8_FR.exe+18FDDFE|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE127|FF8_FR.exe+18FDDFF|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE128|FF8_FR.exe+18FDE00|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE129|FF8_FR.exe+18FDE01|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE12A|FF8_FR.exe+18FDE02|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE12B|FF8_FR.exe+18FDE03|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE12C|FF8_FR.exe+18FDE04|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE12D|FF8_FR.exe+18FDE05|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE12E|FF8_FR.exe+18FDE06|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE12F|FF8_FR.exe+18FDE07|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE130|FF8_FR.exe+18FDE08|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE131|FF8_FR.exe+18FDE09|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE132|FF8_FR.exe+18FDE0A|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE133|FF8_FR.exe+18FDE0B|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE134|FF8_FR.exe+18FDE0C|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE135|FF8_FR.exe+18FDE0D|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE136|FF8_FR.exe+18FDE0E|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE137|FF8_FR.exe+18FDE0F|1 Byte|Magic Slot 32 Quantity|
# Magic - Zell
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE190|FF8_FR.exe+18FDE68|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE191|FF8_FR.exe+18FDE69|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE192|FF8_FR.exe+18FDE6A|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE193|FF8_FR.exe+18FDE6B|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE194|FF8_FR.exe+18FDE6C|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE195|FF8_FR.exe+18FDE6D|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE196|FF8_FR.exe+18FDE6E|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE197|FF8_FR.exe+18FDE6F|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE198|FF8_FR.exe+18FDE70|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE199|FF8_FR.exe+18FDE71|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE19A|FF8_FR.exe+18FDE72|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE19B|FF8_FR.exe+18FDE73|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE19C|FF8_FR.exe+18FDE74|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE19D|FF8_FR.exe+18FDE75|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE19E|FF8_FR.exe+18FDE76|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE19F|FF8_FR.exe+18FDE77|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE1A0|FF8_FR.exe+18FDE78|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1A1|FF8_FR.exe+18FDE79|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE1A2|FF8_FR.exe+18FDE7A|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1A3|FF8_FR.exe+18FDE7B|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE1A4|FF8_FR.exe+18FDE7C|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1A5|FF8_FR.exe+18FDE7D|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE1A6|FF8_FR.exe+18FDE7E|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1A7|FF8_FR.exe+18FDE7F|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE1A8|FF8_FR.exe+18FDE80|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1A9|FF8_FR.exe+18FDE81|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE1AA|FF8_FR.exe+18FDE82|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1AB|FF8_FR.exe+18FDE83|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE1AC|FF8_FR.exe+18FDE84|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1AD|FF8_FR.exe+18FDE85|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE1AE|FF8_FR.exe+18FDE86|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1AF|FF8_FR.exe+18FDE87|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE1B0|FF8_FR.exe+18FDE88|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1B1|FF8_FR.exe+18FDE89|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE1B2|FF8_FR.exe+18FDE8A|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1B3|FF8_FR.exe+18FDE8B|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE1B4|FF8_FR.exe+18FDE8C|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1B5|FF8_FR.exe+18FDE8D|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE1B6|FF8_FR.exe+18FDE8E|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1B7|FF8_FR.exe+18FDE8F|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE1B8|FF8_FR.exe+18FDE90|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1B9|FF8_FR.exe+18FDE91|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE1BA|FF8_FR.exe+18FDE92|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1BB|FF8_FR.exe+18FDE93|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE1BC|FF8_FR.exe+18FDE94|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1BD|FF8_FR.exe+18FDE95|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE1BE|FF8_FR.exe+18FDE96|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1BF|FF8_FR.exe+18FDE97|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE1C0|FF8_FR.exe+18FDE98|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1C1|FF8_FR.exe+18FDE99|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE1C2|FF8_FR.exe+18FDE9A|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1C3|FF8_FR.exe+18FDE9B|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE1C4|FF8_FR.exe+18FDE9C|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1C5|FF8_FR.exe+18FDE9D|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE1C6|FF8_FR.exe+18FDE9E|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1C7|FF8_FR.exe+18FDE9F|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE1C8|FF8_FR.exe+18FDEA0|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1C9|FF8_FR.exe+18FDEA1|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE1CA|FF8_FR.exe+18FDEA2|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1CB|FF8_FR.exe+18FDEA3|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE1CC|FF8_FR.exe+18FDEA4|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1CD|FF8_FR.exe+18FDEA5|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE1CE|FF8_FR.exe+18FDEA6|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE1CF|FF8_FR.exe+18FDEA7|1 Byte|Magic Slot 32 Quantity|
# Magic - Irvine
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE228|FF8_FR.exe+18FDF00|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE229|FF8_FR.exe+18FDF01|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE22A|FF8_FR.exe+18FDF02|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE22B|FF8_FR.exe+18FDF03|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE22C|FF8_FR.exe+18FDF04|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE22D|FF8_FR.exe+18FDF05|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE22E|FF8_FR.exe+18FDF06|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE22F|FF8_FR.exe+18FDF07|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE230|FF8_FR.exe+18FDF08|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE231|FF8_FR.exe+18FDF09|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE232|FF8_FR.exe+18FDF0A|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE233|FF8_FR.exe+18FDF0B|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE234|FF8_FR.exe+18FDF0C|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE235|FF8_FR.exe+18FDF0D|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE236|FF8_FR.exe+18FDF0E|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE237|FF8_FR.exe+18FDF0F|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE238|FF8_FR.exe+18FDF10|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE239|FF8_FR.exe+18FDF11|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE23A|FF8_FR.exe+18FDF12|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE23B|FF8_FR.exe+18FDF13|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE23C|FF8_FR.exe+18FDF14|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE23D|FF8_FR.exe+18FDF15|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE23E|FF8_FR.exe+18FDF16|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE23F|FF8_FR.exe+18FDF17|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE240|FF8_FR.exe+18FDF18|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE241|FF8_FR.exe+18FDF19|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE242|FF8_FR.exe+18FDF1A|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE243|FF8_FR.exe+18FDF1B|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE244|FF8_FR.exe+18FDF1C|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE245|FF8_FR.exe+18FDF1D|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE246|FF8_FR.exe+18FDF1E|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE247|FF8_FR.exe+18FDF1F|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE248|FF8_FR.exe+18FDF20|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE249|FF8_FR.exe+18FDF21|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE24A|FF8_FR.exe+18FDF22|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE24B|FF8_FR.exe+18FDF23|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE24C|FF8_FR.exe+18FDF24|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE24D|FF8_FR.exe+18FDF25|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE24E|FF8_FR.exe+18FDF26|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE24F|FF8_FR.exe+18FDF27|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE250|FF8_FR.exe+18FDF28|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE251|FF8_FR.exe+18FDF29|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE252|FF8_FR.exe+18FDF2A|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE253|FF8_FR.exe+18FDF2B|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE254|FF8_FR.exe+18FDF2C|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE255|FF8_FR.exe+18FDF2D|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE256|FF8_FR.exe+18FDF2E|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE257|FF8_FR.exe+18FDF2F|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE258|FF8_FR.exe+18FDF30|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE259|FF8_FR.exe+18FDF31|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE25A|FF8_FR.exe+18FDF32|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE25B|FF8_FR.exe+18FDF33|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE25C|FF8_FR.exe+18FDF34|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE25D|FF8_FR.exe+18FDF35|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE25E|FF8_FR.exe+18FDF36|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE25F|FF8_FR.exe+18FDF37|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE260|FF8_FR.exe+18FDF38|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE261|FF8_FR.exe+18FDF39|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE262|FF8_FR.exe+18FDF3A|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE263|FF8_FR.exe+18FDF3B|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE264|FF8_FR.exe+18FDF3C|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE265|FF8_FR.exe+18FDF3D|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE266|FF8_FR.exe+18FDF3E|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE267|FF8_FR.exe+18FDF3F|1 Byte|Magic Slot 32 Quantity|
# Magic - Quistis
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE2C0|FF8_FR.exe+18FDF98|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2C1|FF8_FR.exe+18FDF99|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE2C2|FF8_FR.exe+18FDF9A|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2C3|FF8_FR.exe+18FDF9B|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE2C4|FF8_FR.exe+18FDF9C|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2C5|FF8_FR.exe+18FDF9D|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE2C6|FF8_FR.exe+18FDF9E|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2C7|FF8_FR.exe+18FDF9F|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE2C8|FF8_FR.exe+18FDFA0|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2C9|FF8_FR.exe+18FDFA1|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE2CA|FF8_FR.exe+18FDFA2|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2CB|FF8_FR.exe+18FDFA3|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE2CC|FF8_FR.exe+18FDFA4|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2CD|FF8_FR.exe+18FDFA5|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE2CE|FF8_FR.exe+18FDFA6|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2CF|FF8_FR.exe+18FDFA7|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE2D0|FF8_FR.exe+18FDFA8|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2D1|FF8_FR.exe+18FDFA9|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE2D2|FF8_FR.exe+18FDFAA|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2D3|FF8_FR.exe+18FDFAB|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE2D4|FF8_FR.exe+18FDFAC|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2D5|FF8_FR.exe+18FDFAD|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE2D6|FF8_FR.exe+18FDFAE|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2D7|FF8_FR.exe+18FDFAF|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE2D8|FF8_FR.exe+18FDFB0|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2D9|FF8_FR.exe+18FDFB1|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE2DA|FF8_FR.exe+18FDFB2|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2DB|FF8_FR.exe+18FDFB3|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE2DC|FF8_FR.exe+18FDFB4|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2DD|FF8_FR.exe+18FDFB5|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE2DE|FF8_FR.exe+18FDFB6|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2DF|FF8_FR.exe+18FDFB7|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE2E0|FF8_FR.exe+18FDFB8|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2E1|FF8_FR.exe+18FDFB9|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE2E2|FF8_FR.exe+18FDFBA|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2E3|FF8_FR.exe+18FDFBB|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE2E4|FF8_FR.exe+18FDFBC|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2E5|FF8_FR.exe+18FDFBD|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE2E6|FF8_FR.exe+18FDFBE|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2E7|FF8_FR.exe+18FDFBF|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE2E8|FF8_FR.exe+18FDFC0|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2E9|FF8_FR.exe+18FDFC1|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE2EA|FF8_FR.exe+18FDFC2|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2EB|FF8_FR.exe+18FDFC3|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE2EC|FF8_FR.exe+18FDFC4|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2ED|FF8_FR.exe+18FDFC5|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE2EE|FF8_FR.exe+18FDFC6|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2EF|FF8_FR.exe+18FDFC7|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE2F0|FF8_FR.exe+18FDFC8|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2F1|FF8_FR.exe+18FDFC9|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE2F2|FF8_FR.exe+18FDFCA|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2F3|FF8_FR.exe+18FDFCB|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE2F4|FF8_FR.exe+18FDFCC|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2F5|FF8_FR.exe+18FDFCD|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE2F6|FF8_FR.exe+18FDFCE|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2F7|FF8_FR.exe+18FDFCF|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE2F8|FF8_FR.exe+18FDFD0|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2F9|FF8_FR.exe+18FDFD1|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE2FA|FF8_FR.exe+18FDFD2|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2FB|FF8_FR.exe+18FDFD3|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE2FC|FF8_FR.exe+18FDFD4|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2FD|FF8_FR.exe+18FDFD5|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE2FE|FF8_FR.exe+18FDFD6|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE2FF|FF8_FR.exe+18FDFD7|1 Byte|Magic Slot 32 Quantity|
# Magic - Rinoa
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE358|FF8_FR.exe+18FE030|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE359|FF8_FR.exe+18FE031|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE35A|FF8_FR.exe+18FE032|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE35B|FF8_FR.exe+18FE033|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE35C|FF8_FR.exe+18FE034|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE35D|FF8_FR.exe+18FE035|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE35E|FF8_FR.exe+18FE036|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE35F|FF8_FR.exe+18FE037|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE360|FF8_FR.exe+18FE038|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE361|FF8_FR.exe+18FE039|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE362|FF8_FR.exe+18FE03A|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE363|FF8_FR.exe+18FE03B|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE364|FF8_FR.exe+18FE03C|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE365|FF8_FR.exe+18FE03D|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE366|FF8_FR.exe+18FE03E|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE367|FF8_FR.exe+18FE03F|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE368|FF8_FR.exe+18FE040|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE369|FF8_FR.exe+18FE041|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE36A|FF8_FR.exe+18FE042|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE36B|FF8_FR.exe+18FE043|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE36C|FF8_FR.exe+18FE044|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE36D|FF8_FR.exe+18FE045|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE36E|FF8_FR.exe+18FE046|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE36F|FF8_FR.exe+18FE047|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE370|FF8_FR.exe+18FE048|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE371|FF8_FR.exe+18FE049|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE372|FF8_FR.exe+18FE04A|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE373|FF8_FR.exe+18FE04B|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE374|FF8_FR.exe+18FE04C|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE375|FF8_FR.exe+18FE04D|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE376|FF8_FR.exe+18FE04E|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE377|FF8_FR.exe+18FE04F|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE378|FF8_FR.exe+18FE050|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE379|FF8_FR.exe+18FE051|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE37A|FF8_FR.exe+18FE052|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE37B|FF8_FR.exe+18FE053|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE37C|FF8_FR.exe+18FE054|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE37D|FF8_FR.exe+18FE055|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE37E|FF8_FR.exe+18FE056|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE37F|FF8_FR.exe+18FE057|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE380|FF8_FR.exe+18FE058|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE381|FF8_FR.exe+18FE059|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE382|FF8_FR.exe+18FE05A|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE383|FF8_FR.exe+18FE05B|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE384|FF8_FR.exe+18FE05C|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE385|FF8_FR.exe+18FE05D|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE386|FF8_FR.exe+18FE05E|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE387|FF8_FR.exe+18FE05F|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE388|FF8_FR.exe+18FE060|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE389|FF8_FR.exe+18FE061|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE38A|FF8_FR.exe+18FE062|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE38B|FF8_FR.exe+18FE063|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE38C|FF8_FR.exe+18FE064|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE38D|FF8_FR.exe+18FE065|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE38E|FF8_FR.exe+18FE066|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE38F|FF8_FR.exe+18FE067|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE390|FF8_FR.exe+18FE068|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE391|FF8_FR.exe+18FE069|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE392|FF8_FR.exe+18FE06A|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE393|FF8_FR.exe+18FE06B|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE394|FF8_FR.exe+18FE06C|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE395|FF8_FR.exe+18FE06D|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE396|FF8_FR.exe+18FE06E|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE397|FF8_FR.exe+18FE06F|1 Byte|Magic Slot 32 Quantity|
# Magic - Selphie
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE3F0|FF8_FR.exe+18FE0C8|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3F1|FF8_FR.exe+18FE0C9|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE3F2|FF8_FR.exe+18FE0CA|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3F3|FF8_FR.exe+18FE0CB|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE3F4|FF8_FR.exe+18FE0CC|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3F5|FF8_FR.exe+18FE0CD|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE3F6|FF8_FR.exe+18FE0CE|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3F7|FF8_FR.exe+18FE0CF|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE3F8|FF8_FR.exe+18FE0D0|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3F9|FF8_FR.exe+18FE0D1|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE3FA|FF8_FR.exe+18FE0D2|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3FB|FF8_FR.exe+18FE0D3|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE3FC|FF8_FR.exe+18FE0D4|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3FD|FF8_FR.exe+18FE0D5|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE3FE|FF8_FR.exe+18FE0D6|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE3FF|FF8_FR.exe+18FE0D7|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE400|FF8_FR.exe+18FE0D8|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE401|FF8_FR.exe+18FE0D9|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE402|FF8_FR.exe+18FE0DA|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE403|FF8_FR.exe+18FE0DB|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE404|FF8_FR.exe+18FE0DC|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE405|FF8_FR.exe+18FE0DD|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE406|FF8_FR.exe+18FE0DE|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE407|FF8_FR.exe+18FE0DF|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE408|FF8_FR.exe+18FE0E0|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE409|FF8_FR.exe+18FE0E1|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE40A|FF8_FR.exe+18FE0E2|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE40B|FF8_FR.exe+18FE0E3|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE40C|FF8_FR.exe+18FE0E4|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE40D|FF8_FR.exe+18FE0E5|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE40E|FF8_FR.exe+18FE0E6|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE40F|FF8_FR.exe+18FE0E7|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE410|FF8_FR.exe+18FE0E8|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE411|FF8_FR.exe+18FE0E9|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE412|FF8_FR.exe+18FE0EA|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE413|FF8_FR.exe+18FE0EB|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE414|FF8_FR.exe+18FE0EC|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE415|FF8_FR.exe+18FE0ED|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE416|FF8_FR.exe+18FE0EE|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE417|FF8_FR.exe+18FE0EF|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE418|FF8_FR.exe+18FE0F0|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE419|FF8_FR.exe+18FE0F1|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE41A|FF8_FR.exe+18FE0F2|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE41B|FF8_FR.exe+18FE0F3|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE41C|FF8_FR.exe+18FE0F4|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE41D|FF8_FR.exe+18FE0F5|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE41E|FF8_FR.exe+18FE0F6|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE41F|FF8_FR.exe+18FE0F7|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE420|FF8_FR.exe+18FE0F8|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE421|FF8_FR.exe+18FE0F9|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE422|FF8_FR.exe+18FE0FA|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE423|FF8_FR.exe+18FE0FB|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE424|FF8_FR.exe+18FE0FC|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE425|FF8_FR.exe+18FE0FD|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE426|FF8_FR.exe+18FE0FE|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE427|FF8_FR.exe+18FE0FF|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE428|FF8_FR.exe+18FE100|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE429|FF8_FR.exe+18FE101|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE42A|FF8_FR.exe+18FE102|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE42B|FF8_FR.exe+18FE103|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE42C|FF8_FR.exe+18FE104|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE42D|FF8_FR.exe+18FE105|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE42E|FF8_FR.exe+18FE106|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE42F|FF8_FR.exe+18FE107|1 Byte|Magic Slot 32 Quantity|
# Magic - Seifer
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE488|FF8_FR.exe+18FE160|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE489|FF8_FR.exe+18FE161|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE48A|FF8_FR.exe+18FE162|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE48B|FF8_FR.exe+18FE163|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE48C|FF8_FR.exe+18FE164|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE48D|FF8_FR.exe+18FE165|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE48E|FF8_FR.exe+18FE166|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE48F|FF8_FR.exe+18FE167|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE490|FF8_FR.exe+18FE168|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE491|FF8_FR.exe+18FE169|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE492|FF8_FR.exe+18FE16A|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE493|FF8_FR.exe+18FE16B|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE494|FF8_FR.exe+18FE16C|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE495|FF8_FR.exe+18FE16D|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE496|FF8_FR.exe+18FE16E|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE497|FF8_FR.exe+18FE16F|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE498|FF8_FR.exe+18FE170|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE499|FF8_FR.exe+18FE171|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE49A|FF8_FR.exe+18FE172|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE49B|FF8_FR.exe+18FE173|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE49C|FF8_FR.exe+18FE174|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE49D|FF8_FR.exe+18FE175|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE49E|FF8_FR.exe+18FE176|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE49F|FF8_FR.exe+18FE177|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE4A0|FF8_FR.exe+18FE178|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4A1|FF8_FR.exe+18FE179|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE4A2|FF8_FR.exe+18FE17A|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4A3|FF8_FR.exe+18FE17B|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE4A4|FF8_FR.exe+18FE17C|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4A5|FF8_FR.exe+18FE17D|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE4A6|FF8_FR.exe+18FE17E|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4A7|FF8_FR.exe+18FE17F|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE4A8|FF8_FR.exe+18FE180|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4A9|FF8_FR.exe+18FE181|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE4AA|FF8_FR.exe+18FE182|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4AB|FF8_FR.exe+18FE183|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE4AC|FF8_FR.exe+18FE184|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4AD|FF8_FR.exe+18FE185|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE4AE|FF8_FR.exe+18FE186|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4AF|FF8_FR.exe+18FE187|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE4B0|FF8_FR.exe+18FE188|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4B1|FF8_FR.exe+18FE189|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE4B2|FF8_FR.exe+18FE18A|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4B3|FF8_FR.exe+18FE18B|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE4B4|FF8_FR.exe+18FE18C|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4B5|FF8_FR.exe+18FE18D|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE4B6|FF8_FR.exe+18FE18E|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4B7|FF8_FR.exe+18FE18F|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE4B8|FF8_FR.exe+18FE190|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4B9|FF8_FR.exe+18FE191|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE4BA|FF8_FR.exe+18FE192|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4BB|FF8_FR.exe+18FE193|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE4BC|FF8_FR.exe+18FE194|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4BD|FF8_FR.exe+18FE195|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE4BE|FF8_FR.exe+18FE196|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4BF|FF8_FR.exe+18FE197|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE4C0|FF8_FR.exe+18FE198|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4C1|FF8_FR.exe+18FE199|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE4C2|FF8_FR.exe+18FE19A|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4C3|FF8_FR.exe+18FE19B|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE4C4|FF8_FR.exe+18FE19C|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4C5|FF8_FR.exe+18FE19D|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE4C6|FF8_FR.exe+18FE19E|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE4C7|FF8_FR.exe+18FE19F|1 Byte|Magic Slot 32 Quantity|
# Magic - Edea
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE520|FF8_FR.exe+18FE1F8|1 Byte|[Magic Slot 1 Spell ID](magicId.md)|
|FF8_EN.exe+18FE521|FF8_FR.exe+18FE1F9|1 Byte|Magic Slot 1 Quantity|
|FF8_EN.exe+18FE522|FF8_FR.exe+18FE1FA|1 Byte|[Magic Slot 2 Spell ID](magicId.md)|
|FF8_EN.exe+18FE523|FF8_FR.exe+18FE1FB|1 Byte|Magic Slot 2 Quantity|
|FF8_EN.exe+18FE524|FF8_FR.exe+18FE1FC|1 Byte|[Magic Slot 3 Spell ID](magicId.md)|
|FF8_EN.exe+18FE525|FF8_FR.exe+18FE1FD|1 Byte|Magic Slot 3 Quantity|
|FF8_EN.exe+18FE526|FF8_FR.exe+18FE1FE|1 Byte|[Magic Slot 4 Spell ID](magicId.md)|
|FF8_EN.exe+18FE527|FF8_FR.exe+18FE1FF|1 Byte|Magic Slot 4 Quantity|
|FF8_EN.exe+18FE528|FF8_FR.exe+18FE200|1 Byte|[Magic Slot 5 Spell ID](magicId.md)|
|FF8_EN.exe+18FE529|FF8_FR.exe+18FE201|1 Byte|Magic Slot 5 Quantity|
|FF8_EN.exe+18FE52A|FF8_FR.exe+18FE202|1 Byte|[Magic Slot 6 Spell ID](magicId.md)|
|FF8_EN.exe+18FE52B|FF8_FR.exe+18FE203|1 Byte|Magic Slot 6 Quantity|
|FF8_EN.exe+18FE52C|FF8_FR.exe+18FE204|1 Byte|[Magic Slot 7 Spell ID](magicId.md)|
|FF8_EN.exe+18FE52D|FF8_FR.exe+18FE205|1 Byte|Magic Slot 7 Quantity|
|FF8_EN.exe+18FE52E|FF8_FR.exe+18FE206|1 Byte|[Magic Slot 8 Spell ID](magicId.md)|
|FF8_EN.exe+18FE52F|FF8_FR.exe+18FE207|1 Byte|Magic Slot 8 Quantity|
|FF8_EN.exe+18FE530|FF8_FR.exe+18FE208|1 Byte|[Magic Slot 9 Spell ID](magicId.md)|
|FF8_EN.exe+18FE531|FF8_FR.exe+18FE209|1 Byte|Magic Slot 9 Quantity|
|FF8_EN.exe+18FE532|FF8_FR.exe+18FE20A|1 Byte|[Magic Slot 10 Spell ID](magicId.md)|
|FF8_EN.exe+18FE533|FF8_FR.exe+18FE20B|1 Byte|Magic Slot 10 Quantity|
|FF8_EN.exe+18FE534|FF8_FR.exe+18FE20C|1 Byte|[Magic Slot 11 Spell ID](magicId.md)|
|FF8_EN.exe+18FE535|FF8_FR.exe+18FE20D|1 Byte|Magic Slot 11 Quantity|
|FF8_EN.exe+18FE536|FF8_FR.exe+18FE20E|1 Byte|[Magic Slot 12 Spell ID](magicId.md)|
|FF8_EN.exe+18FE537|FF8_FR.exe+18FE20F|1 Byte|Magic Slot 12 Quantity|
|FF8_EN.exe+18FE538|FF8_FR.exe+18FE210|1 Byte|[Magic Slot 13 Spell ID](magicId.md)|
|FF8_EN.exe+18FE539|FF8_FR.exe+18FE211|1 Byte|Magic Slot 13 Quantity|
|FF8_EN.exe+18FE53A|FF8_FR.exe+18FE212|1 Byte|[Magic Slot 14 Spell ID](magicId.md)|
|FF8_EN.exe+18FE53B|FF8_FR.exe+18FE213|1 Byte|Magic Slot 14 Quantity|
|FF8_EN.exe+18FE53C|FF8_FR.exe+18FE214|1 Byte|[Magic Slot 15 Spell ID](magicId.md)|
|FF8_EN.exe+18FE53D|FF8_FR.exe+18FE215|1 Byte|Magic Slot 15 Quantity|
|FF8_EN.exe+18FE53E|FF8_FR.exe+18FE216|1 Byte|[Magic Slot 16 Spell ID](magicId.md)|
|FF8_EN.exe+18FE53F|FF8_FR.exe+18FE217|1 Byte|Magic Slot 16 Quantity|
|FF8_EN.exe+18FE540|FF8_FR.exe+18FE218|1 Byte|[Magic Slot 17 Spell ID](magicId.md)|
|FF8_EN.exe+18FE541|FF8_FR.exe+18FE219|1 Byte|Magic Slot 17 Quantity|
|FF8_EN.exe+18FE542|FF8_FR.exe+18FE21A|1 Byte|[Magic Slot 18 Spell ID](magicId.md)|
|FF8_EN.exe+18FE543|FF8_FR.exe+18FE21B|1 Byte|Magic Slot 18 Quantity|
|FF8_EN.exe+18FE544|FF8_FR.exe+18FE21C|1 Byte|[Magic Slot 19 Spell ID](magicId.md)|
|FF8_EN.exe+18FE545|FF8_FR.exe+18FE21D|1 Byte|Magic Slot 19 Quantity|
|FF8_EN.exe+18FE546|FF8_FR.exe+18FE21E|1 Byte|[Magic Slot 20 Spell ID](magicId.md)|
|FF8_EN.exe+18FE547|FF8_FR.exe+18FE21F|1 Byte|Magic Slot 20 Quantity|
|FF8_EN.exe+18FE548|FF8_FR.exe+18FE220|1 Byte|[Magic Slot 21 Spell ID](magicId.md)|
|FF8_EN.exe+18FE549|FF8_FR.exe+18FE221|1 Byte|Magic Slot 21 Quantity|
|FF8_EN.exe+18FE54A|FF8_FR.exe+18FE222|1 Byte|[Magic Slot 22 Spell ID](magicId.md)|
|FF8_EN.exe+18FE54B|FF8_FR.exe+18FE223|1 Byte|Magic Slot 22 Quantity|
|FF8_EN.exe+18FE54C|FF8_FR.exe+18FE224|1 Byte|[Magic Slot 23 Spell ID](magicId.md)|
|FF8_EN.exe+18FE54D|FF8_FR.exe+18FE225|1 Byte|Magic Slot 23 Quantity|
|FF8_EN.exe+18FE54E|FF8_FR.exe+18FE226|1 Byte|[Magic Slot 24 Spell ID](magicId.md)|
|FF8_EN.exe+18FE54F|FF8_FR.exe+18FE227|1 Byte|Magic Slot 24 Quantity|
|FF8_EN.exe+18FE550|FF8_FR.exe+18FE228|1 Byte|[Magic Slot 25 Spell ID](magicId.md)|
|FF8_EN.exe+18FE551|FF8_FR.exe+18FE229|1 Byte|Magic Slot 25 Quantity|
|FF8_EN.exe+18FE552|FF8_FR.exe+18FE22A|1 Byte|[Magic Slot 26 Spell ID](magicId.md)|
|FF8_EN.exe+18FE553|FF8_FR.exe+18FE22B|1 Byte|Magic Slot 26 Quantity|
|FF8_EN.exe+18FE554|FF8_FR.exe+18FE22C|1 Byte|[Magic Slot 27 Spell ID](magicId.md)|
|FF8_EN.exe+18FE555|FF8_FR.exe+18FE22D|1 Byte|Magic Slot 27 Quantity|
|FF8_EN.exe+18FE556|FF8_FR.exe+18FE22E|1 Byte|[Magic Slot 28 Spell ID](magicId.md)|
|FF8_EN.exe+18FE557|FF8_FR.exe+18FE22F|1 Byte|Magic Slot 28 Quantity|
|FF8_EN.exe+18FE558|FF8_FR.exe+18FE230|1 Byte|[Magic Slot 29 Spell ID](magicId.md)|
|FF8_EN.exe+18FE559|FF8_FR.exe+18FE231|1 Byte|Magic Slot 29 Quantity|
|FF8_EN.exe+18FE55A|FF8_FR.exe+18FE232|1 Byte|[Magic Slot 30 Spell ID](magicId.md)|
|FF8_EN.exe+18FE55B|FF8_FR.exe+18FE233|1 Byte|Magic Slot 30 Quantity|
|FF8_EN.exe+18FE55C|FF8_FR.exe+18FE234|1 Byte|[Magic Slot 31 Spell ID](magicId.md)|
|FF8_EN.exe+18FE55D|FF8_FR.exe+18FE235|1 Byte|Magic Slot 31 Quantity|
|FF8_EN.exe+18FE55E|FF8_FR.exe+18FE236|1 Byte|[Magic Slot 32 Spell ID](magicId.md)|
|FF8_EN.exe+18FE55F|FF8_FR.exe+18FE237|1 Byte|Magic Slot 32 Quantity|
# Items
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FE79C|FF8_FR.exe+18FE474|1 Byte|[Item ID in Slot 1 (Page 1, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE79D|FF8_FR.exe+18FE475|1 Byte|Item Slot 1 Quantity|
|FF8_EN.exe+18FE79E|FF8_FR.exe+18FE476|1 Byte|[Item ID in Slot 2 (Page 1, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE79F|FF8_FR.exe+18FE477|1 Byte|Item Slot 2 Quantity|
|FF8_EN.exe+18FE7A0|FF8_FR.exe+18FE478|1 Byte|[Item ID in Slot 3 (Page 1, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE7A1|FF8_FR.exe+18FE479|1 Byte|Item Slot 3 Quantity|
|FF8_EN.exe+18FE7A2|FF8_FR.exe+18FE47A|1 Byte|[Item ID in Slot 4 (Page 1, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE7A3|FF8_FR.exe+18FE47B|1 Byte|Item Slot 4 Quantity|
|FF8_EN.exe+18FE7A4|FF8_FR.exe+18FE47C|1 Byte|[Item ID in Slot 5 (Page 1, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE7A5|FF8_FR.exe+18FE47D|1 Byte|Item Slot 5 Quantity|
|FF8_EN.exe+18FE7A6|FF8_FR.exe+18FE47E|1 Byte|[Item ID in Slot 6 (Page 1, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE7A7|FF8_FR.exe+18FE47F|1 Byte|Item Slot 6 Quantity|
|FF8_EN.exe+18FE7A8|FF8_FR.exe+18FE480|1 Byte|[Item ID in Slot 7 (Page 1, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE7A9|FF8_FR.exe+18FE481|1 Byte|Item Slot 7 Quantity|
|FF8_EN.exe+18FE7AA|FF8_FR.exe+18FE482|1 Byte|[Item ID in Slot 8 (Page 1, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE7AB|FF8_FR.exe+18FE483|1 Byte|Item Slot 8 Quantity|
|FF8_EN.exe+18FE7AC|FF8_FR.exe+18FE484|1 Byte|[Item ID in Slot 9 (Page 1, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE7AD|FF8_FR.exe+18FE485|1 Byte|Item Slot 9 Quantity|
|FF8_EN.exe+18FE7AE|FF8_FR.exe+18FE486|1 Byte|[Item ID in Slot 10 (Page 1, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE7AF|FF8_FR.exe+18FE487|1 Byte|Item Slot 10 Quantity|
|FF8_EN.exe+18FE7B0|FF8_FR.exe+18FE488|1 Byte|[Item ID in Slot 11 (Page 1, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE7B1|FF8_FR.exe+18FE489|1 Byte|Item Slot 11 Quantity|
|FF8_EN.exe+18FE7B2|FF8_FR.exe+18FE48A|1 Byte|[Item ID in Slot 12 (Page 2, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE7B3|FF8_FR.exe+18FE48B|1 Byte|Item Slot 12 Quantity|
|FF8_EN.exe+18FE7B4|FF8_FR.exe+18FE48C|1 Byte|[Item ID in Slot 13 (Page 2, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE7B5|FF8_FR.exe+18FE48D|1 Byte|Item Slot 13 Quantity|
|FF8_EN.exe+18FE7B6|FF8_FR.exe+18FE48E|1 Byte|[Item ID in Slot 14 (Page 2, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE7B7|FF8_FR.exe+18FE48F|1 Byte|Item Slot 14 Quantity|
|FF8_EN.exe+18FE7B8|FF8_FR.exe+18FE490|1 Byte|[Item ID in Slot 15 (Page 2, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE7B9|FF8_FR.exe+18FE491|1 Byte|Item Slot 15 Quantity|
|FF8_EN.exe+18FE7BA|FF8_FR.exe+18FE492|1 Byte|[Item ID in Slot 16 (Page 2, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE7BB|FF8_FR.exe+18FE493|1 Byte|Item Slot 16 Quantity|
|FF8_EN.exe+18FE7BC|FF8_FR.exe+18FE494|1 Byte|[Item ID in Slot 17 (Page 2, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE7BD|FF8_FR.exe+18FE495|1 Byte|Item Slot 17 Quantity|
|FF8_EN.exe+18FE7BE|FF8_FR.exe+18FE496|1 Byte|[Item ID in Slot 18 (Page 2, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE7BF|FF8_FR.exe+18FE497|1 Byte|Item Slot 18 Quantity|
|FF8_EN.exe+18FE7C0|FF8_FR.exe+18FE498|1 Byte|[Item ID in Slot 19 (Page 2, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE7C1|FF8_FR.exe+18FE499|1 Byte|Item Slot 19 Quantity|
|FF8_EN.exe+18FE7C2|FF8_FR.exe+18FE49A|1 Byte|[Item ID in Slot 20 (Page 2, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE7C3|FF8_FR.exe+18FE49B|1 Byte|Item Slot 20 Quantity|
|FF8_EN.exe+18FE7C4|FF8_FR.exe+18FE49C|1 Byte|[Item ID in Slot 21 (Page 2, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE7C5|FF8_FR.exe+18FE49D|1 Byte|Item Slot 21 Quantity|
|FF8_EN.exe+18FE7C6|FF8_FR.exe+18FE49E|1 Byte|[Item ID in Slot 22 (Page 2, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE7C7|FF8_FR.exe+18FE49F|1 Byte|Item Slot 22 Quantity|
|FF8_EN.exe+18FE7C8|FF8_FR.exe+18FE4A0|1 Byte|[Item ID in Slot 23 (Page 3, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE7C9|FF8_FR.exe+18FE4A1|1 Byte|Item Slot 23 Quantity|
|FF8_EN.exe+18FE7CA|FF8_FR.exe+18FE4A2|1 Byte|[Item ID in Slot 24 (Page 3, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE7CB|FF8_FR.exe+18FE4A3|1 Byte|Item Slot 24 Quantity|
|FF8_EN.exe+18FE7CC|FF8_FR.exe+18FE4A4|1 Byte|[Item ID in Slot 25 (Page 3, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE7CD|FF8_FR.exe+18FE4A5|1 Byte|Item Slot 25 Quantity|
|FF8_EN.exe+18FE7CE|FF8_FR.exe+18FE4A6|1 Byte|[Item ID in Slot 26 (Page 3, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE7CF|FF8_FR.exe+18FE4A7|1 Byte|Item Slot 26 Quantity|
|FF8_EN.exe+18FE7D0|FF8_FR.exe+18FE4A8|1 Byte|[Item ID in Slot 27 (Page 3, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE7D1|FF8_FR.exe+18FE4A9|1 Byte|Item Slot 27 Quantity|
|FF8_EN.exe+18FE7D2|FF8_FR.exe+18FE4AA|1 Byte|[Item ID in Slot 28 (Page 3, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE7D3|FF8_FR.exe+18FE4AB|1 Byte|Item Slot 28 Quantity|
|FF8_EN.exe+18FE7D4|FF8_FR.exe+18FE4AC|1 Byte|[Item ID in Slot 29 (Page 3, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE7D5|FF8_FR.exe+18FE4AD|1 Byte|Item Slot 29 Quantity|
|FF8_EN.exe+18FE7D6|FF8_FR.exe+18FE4AE|1 Byte|[Item ID in Slot 30 (Page 3, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE7D7|FF8_FR.exe+18FE4AF|1 Byte|Item Slot 30 Quantity|
|FF8_EN.exe+18FE7D8|FF8_FR.exe+18FE4B0|1 Byte|[Item ID in Slot 31 (Page 3, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE7D9|FF8_FR.exe+18FE4B1|1 Byte|Item Slot 31 Quantity|
|FF8_EN.exe+18FE7DA|FF8_FR.exe+18FE4B2|1 Byte|[Item ID in Slot 32 (Page 3, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE7DB|FF8_FR.exe+18FE4B3|1 Byte|Item Slot 32 Quantity|
|FF8_EN.exe+18FE7DC|FF8_FR.exe+18FE4B4|1 Byte|[Item ID in Slot 33 (Page 3, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE7DD|FF8_FR.exe+18FE4B5|1 Byte|Item Slot 33 Quantity|
|FF8_EN.exe+18FE7DE|FF8_FR.exe+18FE4B6|1 Byte|[Item ID in Slot 34 (Page 4, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE7DF|FF8_FR.exe+18FE4B7|1 Byte|Item Slot 34 Quantity|
|FF8_EN.exe+18FE7E0|FF8_FR.exe+18FE4B8|1 Byte|[Item ID in Slot 35 (Page 4, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE7E1|FF8_FR.exe+18FE4B9|1 Byte|Item Slot 35 Quantity|
|FF8_EN.exe+18FE7E2|FF8_FR.exe+18FE4BA|1 Byte|[Item ID in Slot 36 (Page 4, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE7E3|FF8_FR.exe+18FE4BB|1 Byte|Item Slot 36 Quantity|
|FF8_EN.exe+18FE7E4|FF8_FR.exe+18FE4BC|1 Byte|[Item ID in Slot 37 (Page 4, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE7E5|FF8_FR.exe+18FE4BD|1 Byte|Item Slot 37 Quantity|
|FF8_EN.exe+18FE7E6|FF8_FR.exe+18FE4BE|1 Byte|[Item ID in Slot 38 (Page 4, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE7E7|FF8_FR.exe+18FE4BF|1 Byte|Item Slot 38 Quantity|
|FF8_EN.exe+18FE7E8|FF8_FR.exe+18FE4C0|1 Byte|[Item ID in Slot 39 (Page 4, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE7E9|FF8_FR.exe+18FE4C1|1 Byte|Item Slot 39 Quantity|
|FF8_EN.exe+18FE7EA|FF8_FR.exe+18FE4C2|1 Byte|[Item ID in Slot 40 (Page 4, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE7EB|FF8_FR.exe+18FE4C3|1 Byte|Item Slot 40 Quantity|
|FF8_EN.exe+18FE7EC|FF8_FR.exe+18FE4C4|1 Byte|[Item ID in Slot 41 (Page 4, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE7ED|FF8_FR.exe+18FE4C5|1 Byte|Item Slot 41 Quantity|
|FF8_EN.exe+18FE7EE|FF8_FR.exe+18FE4C6|1 Byte|[Item ID in Slot 42 (Page 4, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE7EF|FF8_FR.exe+18FE4C7|1 Byte|Item Slot 42 Quantity|
|FF8_EN.exe+18FE7F0|FF8_FR.exe+18FE4C8|1 Byte|[Item ID in Slot 43 (Page 4, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE7F1|FF8_FR.exe+18FE4C9|1 Byte|Item Slot 43 Quantity|
|FF8_EN.exe+18FE7F2|FF8_FR.exe+18FE4CA|1 Byte|[Item ID in Slot 44 (Page 4, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE7F3|FF8_FR.exe+18FE4CB|1 Byte|Item Slot 44 Quantity|
|FF8_EN.exe+18FE7F4|FF8_FR.exe+18FE4CC|1 Byte|[Item ID in Slot 45 (Page 5, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE7F5|FF8_FR.exe+18FE4CD|1 Byte|Item Slot 45 Quantity|
|FF8_EN.exe+18FE7F6|FF8_FR.exe+18FE4CE|1 Byte|[Item ID in Slot 46 (Page 5, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE7F7|FF8_FR.exe+18FE4CF|1 Byte|Item Slot 46 Quantity|
|FF8_EN.exe+18FE7F8|FF8_FR.exe+18FE4D0|1 Byte|[Item ID in Slot 47 (Page 5, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE7F9|FF8_FR.exe+18FE4D1|1 Byte|Item Slot 47 Quantity|
|FF8_EN.exe+18FE7FA|FF8_FR.exe+18FE4D2|1 Byte|[Item ID in Slot 48 (Page 5, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE7FB|FF8_FR.exe+18FE4D3|1 Byte|Item Slot 48 Quantity|
|FF8_EN.exe+18FE7FC|FF8_FR.exe+18FE4D4|1 Byte|[Item ID in Slot 49 (Page 5, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE7FD|FF8_FR.exe+18FE4D5|1 Byte|Item Slot 49 Quantity|
|FF8_EN.exe+18FE7FE|FF8_FR.exe+18FE4D6|1 Byte|[Item ID in Slot 50 (Page 5, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE7FF|FF8_FR.exe+18FE4D7|1 Byte|Item Slot 50 Quantity|
|FF8_EN.exe+18FE800|FF8_FR.exe+18FE4D8|1 Byte|[Item ID in Slot 51 (Page 5, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE801|FF8_FR.exe+18FE4D9|1 Byte|Item Slot 51 Quantity|
|FF8_EN.exe+18FE802|FF8_FR.exe+18FE4DA|1 Byte|[Item ID in Slot 52 (Page 5, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE803|FF8_FR.exe+18FE4DB|1 Byte|Item Slot 52 Quantity|
|FF8_EN.exe+18FE804|FF8_FR.exe+18FE4DC|1 Byte|[Item ID in Slot 53 (Page 5, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE805|FF8_FR.exe+18FE4DD|1 Byte|Item Slot 53 Quantity|
|FF8_EN.exe+18FE806|FF8_FR.exe+18FE4DE|1 Byte|[Item ID in Slot 54 (Page 5, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE807|FF8_FR.exe+18FE4DF|1 Byte|Item Slot 54 Quantity|
|FF8_EN.exe+18FE808|FF8_FR.exe+18FE4E0|1 Byte|[Item ID in Slot 55 (Page 5, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE809|FF8_FR.exe+18FE4E1|1 Byte|Item Slot 55 Quantity|
|FF8_EN.exe+18FE80A|FF8_FR.exe+18FE4E2|1 Byte|[Item ID in Slot 56 (Page 6, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE80B|FF8_FR.exe+18FE4E3|1 Byte|Item Slot 56 Quantity|
|FF8_EN.exe+18FE80C|FF8_FR.exe+18FE4E4|1 Byte|[Item ID in Slot 57 (Page 6, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE80D|FF8_FR.exe+18FE4E5|1 Byte|Item Slot 57 Quantity|
|FF8_EN.exe+18FE80E|FF8_FR.exe+18FE4E6|1 Byte|[Item ID in Slot 58 (Page 6, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE80F|FF8_FR.exe+18FE4E7|1 Byte|Item Slot 58 Quantity|
|FF8_EN.exe+18FE810|FF8_FR.exe+18FE4E8|1 Byte|[Item ID in Slot 59 (Page 6, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE811|FF8_FR.exe+18FE4E9|1 Byte|Item Slot 59 Quantity|
|FF8_EN.exe+18FE812|FF8_FR.exe+18FE4EA|1 Byte|[Item ID in Slot 60 (Page 6, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE813|FF8_FR.exe+18FE4EB|1 Byte|Item Slot 60 Quantity|
|FF8_EN.exe+18FE814|FF8_FR.exe+18FE4EC|1 Byte|[Item ID in Slot 61 (Page 6, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE815|FF8_FR.exe+18FE4ED|1 Byte|Item Slot 61 Quantity|
|FF8_EN.exe+18FE816|FF8_FR.exe+18FE4EE|1 Byte|[Item ID in Slot 62 (Page 6, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE817|FF8_FR.exe+18FE4EF|1 Byte|Item Slot 62 Quantity|
|FF8_EN.exe+18FE818|FF8_FR.exe+18FE4F0|1 Byte|[Item ID in Slot 63 (Page 6, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE819|FF8_FR.exe+18FE4F1|1 Byte|Item Slot 63 Quantity|
|FF8_EN.exe+18FE81A|FF8_FR.exe+18FE4F2|1 Byte|[Item ID in Slot 64 (Page 6, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE81B|FF8_FR.exe+18FE4F3|1 Byte|Item Slot 64 Quantity|
|FF8_EN.exe+18FE81C|FF8_FR.exe+18FE4F4|1 Byte|[Item ID in Slot 65 (Page 6, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE81D|FF8_FR.exe+18FE4F5|1 Byte|Item Slot 65 Quantity|
|FF8_EN.exe+18FE81E|FF8_FR.exe+18FE4F6|1 Byte|[Item ID in Slot 66 (Page 6, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE81F|FF8_FR.exe+18FE4F7|1 Byte|Item Slot 66 Quantity|
|FF8_EN.exe+18FE820|FF8_FR.exe+18FE4F8|1 Byte|[Item ID in Slot 67 (Page 7, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE821|FF8_FR.exe+18FE4F9|1 Byte|Item Slot 67 Quantity|
|FF8_EN.exe+18FE822|FF8_FR.exe+18FE4FA|1 Byte|[Item ID in Slot 68 (Page 7, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE823|FF8_FR.exe+18FE4FB|1 Byte|Item Slot 68 Quantity|
|FF8_EN.exe+18FE824|FF8_FR.exe+18FE4FC|1 Byte|[Item ID in Slot 69 (Page 7, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE825|FF8_FR.exe+18FE4FD|1 Byte|Item Slot 69 Quantity|
|FF8_EN.exe+18FE826|FF8_FR.exe+18FE4FE|1 Byte|[Item ID in Slot 70 (Page 7, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE827|FF8_FR.exe+18FE4FF|1 Byte|Item Slot 70 Quantity|
|FF8_EN.exe+18FE828|FF8_FR.exe+18FE500|1 Byte|[Item ID in Slot 71 (Page 7, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE829|FF8_FR.exe+18FE501|1 Byte|Item Slot 71 Quantity|
|FF8_EN.exe+18FE82A|FF8_FR.exe+18FE502|1 Byte|[Item ID in Slot 72 (Page 7, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE82B|FF8_FR.exe+18FE503|1 Byte|Item Slot 72 Quantity|
|FF8_EN.exe+18FE82C|FF8_FR.exe+18FE504|1 Byte|[Item ID in Slot 73 (Page 7, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE82D|FF8_FR.exe+18FE505|1 Byte|Item Slot 73 Quantity|
|FF8_EN.exe+18FE82E|FF8_FR.exe+18FE506|1 Byte|[Item ID in Slot 74 (Page 7, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE82F|FF8_FR.exe+18FE507|1 Byte|Item Slot 74 Quantity|
|FF8_EN.exe+18FE830|FF8_FR.exe+18FE508|1 Byte|[Item ID in Slot 75 (Page 7, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE831|FF8_FR.exe+18FE509|1 Byte|Item Slot 75 Quantity|
|FF8_EN.exe+18FE832|FF8_FR.exe+18FE50A|1 Byte|[Item ID in Slot 76 (Page 7, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE833|FF8_FR.exe+18FE50B|1 Byte|Item Slot 76 Quantity|
|FF8_EN.exe+18FE834|FF8_FR.exe+18FE50C|1 Byte|[Item ID in Slot 77 (Page 7, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE835|FF8_FR.exe+18FE50D|1 Byte|Item Slot 77 Quantity|
|FF8_EN.exe+18FE836|FF8_FR.exe+18FE50E|1 Byte|[Item ID in Slot 78 (Page 8, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE837|FF8_FR.exe+18FE50F|1 Byte|Item Slot 78 Quantity|
|FF8_EN.exe+18FE838|FF8_FR.exe+18FE510|1 Byte|[Item ID in Slot 79 (Page 8, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE839|FF8_FR.exe+18FE511|1 Byte|Item Slot 79 Quantity|
|FF8_EN.exe+18FE83A|FF8_FR.exe+18FE512|1 Byte|[Item ID in Slot 80 (Page 8, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE83B|FF8_FR.exe+18FE513|1 Byte|Item Slot 80 Quantity|
|FF8_EN.exe+18FE83C|FF8_FR.exe+18FE514|1 Byte|[Item ID in Slot 81 (Page 8, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE83D|FF8_FR.exe+18FE515|1 Byte|Item Slot 81 Quantity|
|FF8_EN.exe+18FE83E|FF8_FR.exe+18FE516|1 Byte|[Item ID in Slot 82 (Page 8, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE83F|FF8_FR.exe+18FE517|1 Byte|Item Slot 82 Quantity|
|FF8_EN.exe+18FE840|FF8_FR.exe+18FE518|1 Byte|[Item ID in Slot 83 (Page 8, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE841|FF8_FR.exe+18FE519|1 Byte|Item Slot 83 Quantity|
|FF8_EN.exe+18FE842|FF8_FR.exe+18FE51A|1 Byte|[Item ID in Slot 84 (Page 8, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE843|FF8_FR.exe+18FE51B|1 Byte|Item Slot 84 Quantity|
|FF8_EN.exe+18FE844|FF8_FR.exe+18FE51C|1 Byte|[Item ID in Slot 85 (Page 8, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE845|FF8_FR.exe+18FE51D|1 Byte|Item Slot 85 Quantity|
|FF8_EN.exe+18FE846|FF8_FR.exe+18FE51E|1 Byte|[Item ID in Slot 86 (Page 8, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE847|FF8_FR.exe+18FE51F|1 Byte|Item Slot 86 Quantity|
|FF8_EN.exe+18FE848|FF8_FR.exe+18FE520|1 Byte|[Item ID in Slot 87 (Page 8, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE849|FF8_FR.exe+18FE521|1 Byte|Item Slot 87 Quantity|
|FF8_EN.exe+18FE84A|FF8_FR.exe+18FE522|1 Byte|[Item ID in Slot 88 (Page 8, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE84B|FF8_FR.exe+18FE523|1 Byte|Item Slot 88 Quantity|
|FF8_EN.exe+18FE84C|FF8_FR.exe+18FE524|1 Byte|[Item ID in Slot 89 (Page 9, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE84D|FF8_FR.exe+18FE525|1 Byte|Item Slot 89 Quantity|
|FF8_EN.exe+18FE84E|FF8_FR.exe+18FE526|1 Byte|[Item ID in Slot 90 (Page 9, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE84F|FF8_FR.exe+18FE527|1 Byte|Item Slot 90 Quantity|
|FF8_EN.exe+18FE850|FF8_FR.exe+18FE528|1 Byte|[Item ID in Slot 91 (Page 9, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE851|FF8_FR.exe+18FE529|1 Byte|Item Slot 91 Quantity|
|FF8_EN.exe+18FE852|FF8_FR.exe+18FE52A|1 Byte|[Item ID in Slot 92 (Page 9, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE853|FF8_FR.exe+18FE52B|1 Byte|Item Slot 92 Quantity|
|FF8_EN.exe+18FE854|FF8_FR.exe+18FE52C|1 Byte|[Item ID in Slot 93 (Page 9, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE855|FF8_FR.exe+18FE52D|1 Byte|Item Slot 93 Quantity|
|FF8_EN.exe+18FE856|FF8_FR.exe+18FE52E|1 Byte|[Item ID in Slot 94 (Page 9, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE857|FF8_FR.exe+18FE52F|1 Byte|Item Slot 94 Quantity|
|FF8_EN.exe+18FE858|FF8_FR.exe+18FE530|1 Byte|[Item ID in Slot 95 (Page 9, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE859|FF8_FR.exe+18FE531|1 Byte|Item Slot 95 Quantity|
|FF8_EN.exe+18FE85A|FF8_FR.exe+18FE532|1 Byte|[Item ID in Slot 96 (Page 9, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE85B|FF8_FR.exe+18FE533|1 Byte|Item Slot 96 Quantity|
|FF8_EN.exe+18FE85C|FF8_FR.exe+18FE534|1 Byte|[Item ID in Slot 97 (Page 9, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE85D|FF8_FR.exe+18FE535|1 Byte|Item Slot 97 Quantity|
|FF8_EN.exe+18FE85E|FF8_FR.exe+18FE536|1 Byte|[Item ID in Slot 98 (Page 9, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE85F|FF8_FR.exe+18FE537|1 Byte|Item Slot 98 Quantity|
|FF8_EN.exe+18FE860|FF8_FR.exe+18FE538|1 Byte|[Item ID in Slot 99 (Page 9, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE861|FF8_FR.exe+18FE539|1 Byte|Item Slot 99 Quantity|
|FF8_EN.exe+18FE862|FF8_FR.exe+18FE53A|1 Byte|[Item ID in Slot 100 (Page 10, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE863|FF8_FR.exe+18FE53B|1 Byte|Item Slot 100 Quantity|
|FF8_EN.exe+18FE864|FF8_FR.exe+18FE53C|1 Byte|[Item ID in Slot 101 (Page 10, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE865|FF8_FR.exe+18FE53D|1 Byte|Item Slot 101 Quantity|
|FF8_EN.exe+18FE866|FF8_FR.exe+18FE53E|1 Byte|[Item ID in Slot 102 (Page 10, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE867|FF8_FR.exe+18FE53F|1 Byte|Item Slot 102 Quantity|
|FF8_EN.exe+18FE868|FF8_FR.exe+18FE540|1 Byte|[Item ID in Slot 103 (Page 10, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE869|FF8_FR.exe+18FE541|1 Byte|Item Slot 103 Quantity|
|FF8_EN.exe+18FE86A|FF8_FR.exe+18FE542|1 Byte|[Item ID in Slot 104 (Page 10, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE86B|FF8_FR.exe+18FE543|1 Byte|Item Slot 104 Quantity|
|FF8_EN.exe+18FE86C|FF8_FR.exe+18FE544|1 Byte|[Item ID in Slot 105 (Page 10, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE86D|FF8_FR.exe+18FE545|1 Byte|Item Slot 105 Quantity|
|FF8_EN.exe+18FE86E|FF8_FR.exe+18FE546|1 Byte|[Item ID in Slot 106 (Page 10, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE86F|FF8_FR.exe+18FE547|1 Byte|Item Slot 106 Quantity|
|FF8_EN.exe+18FE870|FF8_FR.exe+18FE548|1 Byte|[Item ID in Slot 107 (Page 10, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE871|FF8_FR.exe+18FE549|1 Byte|Item Slot 107 Quantity|
|FF8_EN.exe+18FE872|FF8_FR.exe+18FE54A|1 Byte|[Item ID in Slot 108 (Page 10, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE873|FF8_FR.exe+18FE54B|1 Byte|Item Slot 108 Quantity|
|FF8_EN.exe+18FE874|FF8_FR.exe+18FE54C|1 Byte|[Item ID in Slot 109 (Page 10, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE875|FF8_FR.exe+18FE54D|1 Byte|Item Slot 109 Quantity|
|FF8_EN.exe+18FE876|FF8_FR.exe+18FE54E|1 Byte|[Item ID in Slot 110 (Page 10, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE877|FF8_FR.exe+18FE54F|1 Byte|Item Slot 110 Quantity|
|FF8_EN.exe+18FE878|FF8_FR.exe+18FE550|1 Byte|[Item ID in Slot 111 (Page 11, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE879|FF8_FR.exe+18FE551|1 Byte|Item Slot 111 Quantity|
|FF8_EN.exe+18FE87A|FF8_FR.exe+18FE552|1 Byte|[Item ID in Slot 112 (Page 11, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE87B|FF8_FR.exe+18FE553|1 Byte|Item Slot 112 Quantity|
|FF8_EN.exe+18FE87C|FF8_FR.exe+18FE554|1 Byte|[Item ID in Slot 113 (Page 11, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE87D|FF8_FR.exe+18FE555|1 Byte|Item Slot 113 Quantity|
|FF8_EN.exe+18FE87E|FF8_FR.exe+18FE556|1 Byte|[Item ID in Slot 114 (Page 11, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE87F|FF8_FR.exe+18FE557|1 Byte|Item Slot 114 Quantity|
|FF8_EN.exe+18FE880|FF8_FR.exe+18FE558|1 Byte|[Item ID in Slot 115 (Page 11, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE881|FF8_FR.exe+18FE559|1 Byte|Item Slot 115 Quantity|
|FF8_EN.exe+18FE882|FF8_FR.exe+18FE55A|1 Byte|[Item ID in Slot 116 (Page 11, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE883|FF8_FR.exe+18FE55B|1 Byte|Item Slot 116 Quantity|
|FF8_EN.exe+18FE884|FF8_FR.exe+18FE55C|1 Byte|[Item ID in Slot 117 (Page 11, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE885|FF8_FR.exe+18FE55D|1 Byte|Item Slot 117 Quantity|
|FF8_EN.exe+18FE886|FF8_FR.exe+18FE55E|1 Byte|[Item ID in Slot 118 (Page 11, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE887|FF8_FR.exe+18FE55F|1 Byte|Item Slot 118 Quantity|
|FF8_EN.exe+18FE888|FF8_FR.exe+18FE560|1 Byte|[Item ID in Slot 119 (Page 11, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE889|FF8_FR.exe+18FE561|1 Byte|Item Slot 119 Quantity|
|FF8_EN.exe+18FE88A|FF8_FR.exe+18FE562|1 Byte|[Item ID in Slot 120 (Page 11, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE88B|FF8_FR.exe+18FE563|1 Byte|Item Slot 120 Quantity|
|FF8_EN.exe+18FE88C|FF8_FR.exe+18FE564|1 Byte|[Item ID in Slot 121 (Page 11, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE88D|FF8_FR.exe+18FE565|1 Byte|Item Slot 121 Quantity|
|FF8_EN.exe+18FE88E|FF8_FR.exe+18FE566|1 Byte|[Item ID in Slot 122 (Page 12, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE88F|FF8_FR.exe+18FE567|1 Byte|Item Slot 122 Quantity|
|FF8_EN.exe+18FE890|FF8_FR.exe+18FE568|1 Byte|[Item ID in Slot 123 (Page 12, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE891|FF8_FR.exe+18FE569|1 Byte|Item Slot 123 Quantity|
|FF8_EN.exe+18FE892|FF8_FR.exe+18FE56A|1 Byte|[Item ID in Slot 124 (Page 12, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE893|FF8_FR.exe+18FE56B|1 Byte|Item Slot 124 Quantity|
|FF8_EN.exe+18FE894|FF8_FR.exe+18FE56C|1 Byte|[Item ID in Slot 125 (Page 12, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE895|FF8_FR.exe+18FE56D|1 Byte|Item Slot 125 Quantity|
|FF8_EN.exe+18FE896|FF8_FR.exe+18FE56E|1 Byte|[Item ID in Slot 126 (Page 12, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE897|FF8_FR.exe+18FE56F|1 Byte|Item Slot 126 Quantity|
|FF8_EN.exe+18FE898|FF8_FR.exe+18FE570|1 Byte|[Item ID in Slot 127 (Page 12, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE899|FF8_FR.exe+18FE571|1 Byte|Item Slot 127 Quantity|
|FF8_EN.exe+18FE89A|FF8_FR.exe+18FE572|1 Byte|[Item ID in Slot 128 (Page 12, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE89B|FF8_FR.exe+18FE573|1 Byte|Item Slot 128 Quantity|
|FF8_EN.exe+18FE89C|FF8_FR.exe+18FE574|1 Byte|[Item ID in Slot 129 (Page 12, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE89D|FF8_FR.exe+18FE575|1 Byte|Item Slot 129 Quantity|
|FF8_EN.exe+18FE89E|FF8_FR.exe+18FE576|1 Byte|[Item ID in Slot 130 (Page 12, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE89F|FF8_FR.exe+18FE577|1 Byte|Item Slot 130 Quantity|
|FF8_EN.exe+18FE8A0|FF8_FR.exe+18FE578|1 Byte|[Item ID in Slot 131 (Page 12, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE8A1|FF8_FR.exe+18FE579|1 Byte|Item Slot 131 Quantity|
|FF8_EN.exe+18FE8A2|FF8_FR.exe+18FE57A|1 Byte|[Item ID in Slot 132 (Page 12, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE8A3|FF8_FR.exe+18FE57B|1 Byte|Item Slot 132 Quantity|
|FF8_EN.exe+18FE8A4|FF8_FR.exe+18FE57C|1 Byte|[Item ID in Slot 133 (Page 13, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE8A5|FF8_FR.exe+18FE57D|1 Byte|Item Slot 133 Quantity|
|FF8_EN.exe+18FE8A6|FF8_FR.exe+18FE57E|1 Byte|[Item ID in Slot 134 (Page 13, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE8A7|FF8_FR.exe+18FE57F|1 Byte|Item Slot 134 Quantity|
|FF8_EN.exe+18FE8A8|FF8_FR.exe+18FE580|1 Byte|[Item ID in Slot 135 (Page 13, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE8A9|FF8_FR.exe+18FE581|1 Byte|Item Slot 135 Quantity|
|FF8_EN.exe+18FE8AA|FF8_FR.exe+18FE582|1 Byte|[Item ID in Slot 136 (Page 13, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE8AB|FF8_FR.exe+18FE583|1 Byte|Item Slot 136 Quantity|
|FF8_EN.exe+18FE8AC|FF8_FR.exe+18FE584|1 Byte|[Item ID in Slot 137 (Page 13, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE8AD|FF8_FR.exe+18FE585|1 Byte|Item Slot 137 Quantity|
|FF8_EN.exe+18FE8AE|FF8_FR.exe+18FE586|1 Byte|[Item ID in Slot 138 (Page 13, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE8AF|FF8_FR.exe+18FE587|1 Byte|Item Slot 138 Quantity|
|FF8_EN.exe+18FE8B0|FF8_FR.exe+18FE588|1 Byte|[Item ID in Slot 139 (Page 13, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE8B1|FF8_FR.exe+18FE589|1 Byte|Item Slot 139 Quantity|
|FF8_EN.exe+18FE8B2|FF8_FR.exe+18FE58A|1 Byte|[Item ID in Slot 140 (Page 13, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE8B3|FF8_FR.exe+18FE58B|1 Byte|Item Slot 140 Quantity|
|FF8_EN.exe+18FE8B4|FF8_FR.exe+18FE58C|1 Byte|[Item ID in Slot 141 (Page 13, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE8B5|FF8_FR.exe+18FE58D|1 Byte|Item Slot 141 Quantity|
|FF8_EN.exe+18FE8B6|FF8_FR.exe+18FE58E|1 Byte|[Item ID in Slot 142 (Page 13, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE8B7|FF8_FR.exe+18FE58F|1 Byte|Item Slot 142 Quantity|
|FF8_EN.exe+18FE8B8|FF8_FR.exe+18FE590|1 Byte|[Item ID in Slot 143 (Page 13, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE8B9|FF8_FR.exe+18FE591|1 Byte|Item Slot 143 Quantity|
|FF8_EN.exe+18FE8BA|FF8_FR.exe+18FE592|1 Byte|[Item ID in Slot 144 (Page 14, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE8BB|FF8_FR.exe+18FE593|1 Byte|Item Slot 144 Quantity|
|FF8_EN.exe+18FE8BC|FF8_FR.exe+18FE594|1 Byte|[Item ID in Slot 145 (Page 14, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE8BD|FF8_FR.exe+18FE595|1 Byte|Item Slot 145 Quantity|
|FF8_EN.exe+18FE8BE|FF8_FR.exe+18FE596|1 Byte|[Item ID in Slot 146 (Page 14, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE8BF|FF8_FR.exe+18FE597|1 Byte|Item Slot 146 Quantity|
|FF8_EN.exe+18FE8C0|FF8_FR.exe+18FE598|1 Byte|[Item ID in Slot 147 (Page 14, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE8C1|FF8_FR.exe+18FE599|1 Byte|Item Slot 147 Quantity|
|FF8_EN.exe+18FE8C2|FF8_FR.exe+18FE59A|1 Byte|[Item ID in Slot 148 (Page 14, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE8C3|FF8_FR.exe+18FE59B|1 Byte|Item Slot 148 Quantity|
|FF8_EN.exe+18FE8C4|FF8_FR.exe+18FE59C|1 Byte|[Item ID in Slot 149 (Page 14, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE8C5|FF8_FR.exe+18FE59D|1 Byte|Item Slot 149 Quantity|
|FF8_EN.exe+18FE8C6|FF8_FR.exe+18FE59E|1 Byte|[Item ID in Slot 150 (Page 14, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE8C7|FF8_FR.exe+18FE59F|1 Byte|Item Slot 150 Quantity|
|FF8_EN.exe+18FE8C8|FF8_FR.exe+18FE5A0|1 Byte|[Item ID in Slot 151 (Page 14, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE8C9|FF8_FR.exe+18FE5A1|1 Byte|Item Slot 151 Quantity|
|FF8_EN.exe+18FE8CA|FF8_FR.exe+18FE5A2|1 Byte|[Item ID in Slot 152 (Page 14, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE8CB|FF8_FR.exe+18FE5A3|1 Byte|Item Slot 152 Quantity|
|FF8_EN.exe+18FE8CC|FF8_FR.exe+18FE5A4|1 Byte|[Item ID in Slot 153 (Page 14, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE8CD|FF8_FR.exe+18FE5A5|1 Byte|Item Slot 153 Quantity|
|FF8_EN.exe+18FE8CE|FF8_FR.exe+18FE5A6|1 Byte|[Item ID in Slot 154 (Page 14, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE8CF|FF8_FR.exe+18FE5A7|1 Byte|Item Slot 154 Quantity|
|FF8_EN.exe+18FE8D0|FF8_FR.exe+18FE5A8|1 Byte|[Item ID in Slot 155 (Page 15, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE8D1|FF8_FR.exe+18FE5A9|1 Byte|Item Slot 155 Quantity|
|FF8_EN.exe+18FE8D2|FF8_FR.exe+18FE5AA|1 Byte|[Item ID in Slot 156 (Page 15, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE8D3|FF8_FR.exe+18FE5AB|1 Byte|Item Slot 156 Quantity|
|FF8_EN.exe+18FE8D4|FF8_FR.exe+18FE5AC|1 Byte|[Item ID in Slot 157 (Page 15, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE8D5|FF8_FR.exe+18FE5AD|1 Byte|Item Slot 157 Quantity|
|FF8_EN.exe+18FE8D6|FF8_FR.exe+18FE5AE|1 Byte|[Item ID in Slot 158 (Page 15, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE8D7|FF8_FR.exe+18FE5AF|1 Byte|Item Slot 158 Quantity|
|FF8_EN.exe+18FE8D8|FF8_FR.exe+18FE5B0|1 Byte|[Item ID in Slot 159 (Page 15, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE8D9|FF8_FR.exe+18FE5B1|1 Byte|Item Slot 159 Quantity|
|FF8_EN.exe+18FE8DA|FF8_FR.exe+18FE5B2|1 Byte|[Item ID in Slot 160 (Page 15, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE8DB|FF8_FR.exe+18FE5B3|1 Byte|Item Slot 160 Quantity|
|FF8_EN.exe+18FE8DC|FF8_FR.exe+18FE5B4|1 Byte|[Item ID in Slot 161 (Page 15, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE8DD|FF8_FR.exe+18FE5B5|1 Byte|Item Slot 161 Quantity|
|FF8_EN.exe+18FE8DE|FF8_FR.exe+18FE5B6|1 Byte|[Item ID in Slot 162 (Page 15, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE8DF|FF8_FR.exe+18FE5B7|1 Byte|Item Slot 162 Quantity|
|FF8_EN.exe+18FE8E0|FF8_FR.exe+18FE5B8|1 Byte|[Item ID in Slot 163 (Page 15, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE8E1|FF8_FR.exe+18FE5B9|1 Byte|Item Slot 163 Quantity|
|FF8_EN.exe+18FE8E2|FF8_FR.exe+18FE5BA|1 Byte|[Item ID in Slot 164 (Page 15, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE8E3|FF8_FR.exe+18FE5BB|1 Byte|Item Slot 164 Quantity|
|FF8_EN.exe+18FE8E4|FF8_FR.exe+18FE5BC|1 Byte|[Item ID in Slot 165 (Page 15, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE8E5|FF8_FR.exe+18FE5BD|1 Byte|Item Slot 165 Quantity|
|FF8_EN.exe+18FE8E6|FF8_FR.exe+18FE5BE|1 Byte|[Item ID in Slot 166 (Page 16, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE8E7|FF8_FR.exe+18FE5BF|1 Byte|Item Slot 166 Quantity|
|FF8_EN.exe+18FE8E8|FF8_FR.exe+18FE5C0|1 Byte|[Item ID in Slot 167 (Page 16, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE8E9|FF8_FR.exe+18FE5C1|1 Byte|Item Slot 167 Quantity|
|FF8_EN.exe+18FE8EA|FF8_FR.exe+18FE5C2|1 Byte|[Item ID in Slot 168 (Page 16, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE8EB|FF8_FR.exe+18FE5C3|1 Byte|Item Slot 168 Quantity|
|FF8_EN.exe+18FE8EC|FF8_FR.exe+18FE5C4|1 Byte|[Item ID in Slot 169 (Page 16, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE8ED|FF8_FR.exe+18FE5C5|1 Byte|Item Slot 169 Quantity|
|FF8_EN.exe+18FE8EE|FF8_FR.exe+18FE5C6|1 Byte|[Item ID in Slot 170 (Page 16, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE8EF|FF8_FR.exe+18FE5C7|1 Byte|Item Slot 170 Quantity|
|FF8_EN.exe+18FE8F0|FF8_FR.exe+18FE5C8|1 Byte|[Item ID in Slot 171 (Page 16, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE8F1|FF8_FR.exe+18FE5C9|1 Byte|Item Slot 171 Quantity|
|FF8_EN.exe+18FE8F2|FF8_FR.exe+18FE5CA|1 Byte|[Item ID in Slot 172 (Page 16, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE8F3|FF8_FR.exe+18FE5CB|1 Byte|Item Slot 172 Quantity|
|FF8_EN.exe+18FE8F4|FF8_FR.exe+18FE5CC|1 Byte|[Item ID in Slot 173 (Page 16, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE8F5|FF8_FR.exe+18FE5CD|1 Byte|Item Slot 173 Quantity|
|FF8_EN.exe+18FE8F6|FF8_FR.exe+18FE5CE|1 Byte|[Item ID in Slot 174 (Page 16, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE8F7|FF8_FR.exe+18FE5CF|1 Byte|Item Slot 174 Quantity|
|FF8_EN.exe+18FE8F8|FF8_FR.exe+18FE5D0|1 Byte|[Item ID in Slot 175 (Page 16, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE8F9|FF8_FR.exe+18FE5D1|1 Byte|Item Slot 175 Quantity|
|FF8_EN.exe+18FE8FA|FF8_FR.exe+18FE5D2|1 Byte|[Item ID in Slot 176 (Page 16, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE8FB|FF8_FR.exe+18FE5D3|1 Byte|Item Slot 176 Quantity|
|FF8_EN.exe+18FE8FC|FF8_FR.exe+18FE5D4|1 Byte|[Item ID in Slot 177 (Page 17, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE8FD|FF8_FR.exe+18FE5D5|1 Byte|Item Slot 177 Quantity|
|FF8_EN.exe+18FE8FE|FF8_FR.exe+18FE5D6|1 Byte|[Item ID in Slot 178 (Page 17, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE8FF|FF8_FR.exe+18FE5D7|1 Byte|Item Slot 178 Quantity|
|FF8_EN.exe+18FE900|FF8_FR.exe+18FE5D8|1 Byte|[Item ID in Slot 179 (Page 17, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE901|FF8_FR.exe+18FE5D9|1 Byte|Item Slot 179 Quantity|
|FF8_EN.exe+18FE902|FF8_FR.exe+18FE5DA|1 Byte|[Item ID in Slot 180 (Page 17, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE903|FF8_FR.exe+18FE5DB|1 Byte|Item Slot 180 Quantity|
|FF8_EN.exe+18FE904|FF8_FR.exe+18FE5DC|1 Byte|[Item ID in Slot 181 (Page 17, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE905|FF8_FR.exe+18FE5DD|1 Byte|Item Slot 181 Quantity|
|FF8_EN.exe+18FE906|FF8_FR.exe+18FE5DE|1 Byte|[Item ID in Slot 182 (Page 17, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE907|FF8_FR.exe+18FE5DF|1 Byte|Item Slot 182 Quantity|
|FF8_EN.exe+18FE908|FF8_FR.exe+18FE5E0|1 Byte|[Item ID in Slot 183 (Page 17, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE909|FF8_FR.exe+18FE5E1|1 Byte|Item Slot 183 Quantity|
|FF8_EN.exe+18FE90A|FF8_FR.exe+18FE5E2|1 Byte|[Item ID in Slot 184 (Page 17, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE90B|FF8_FR.exe+18FE5E3|1 Byte|Item Slot 184 Quantity|
|FF8_EN.exe+18FE90C|FF8_FR.exe+18FE5E4|1 Byte|[Item ID in Slot 185 (Page 17, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE90D|FF8_FR.exe+18FE5E5|1 Byte|Item Slot 185 Quantity|
|FF8_EN.exe+18FE90E|FF8_FR.exe+18FE5E6|1 Byte|[Item ID in Slot 186 (Page 17, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE90F|FF8_FR.exe+18FE5E7|1 Byte|Item Slot 186 Quantity|
|FF8_EN.exe+18FE910|FF8_FR.exe+18FE5E8|1 Byte|[Item ID in Slot 187 (Page 17, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE911|FF8_FR.exe+18FE5E9|1 Byte|Item Slot 187 Quantity|
|FF8_EN.exe+18FE912|FF8_FR.exe+18FE5EA|1 Byte|[Item ID in Slot 188 (Page 18, Slot 1)](itemId.md)|
|FF8_EN.exe+18FE913|FF8_FR.exe+18FE5EB|1 Byte|Item Slot 188 Quantity|
|FF8_EN.exe+18FE914|FF8_FR.exe+18FE5EC|1 Byte|[Item ID in Slot 189 (Page 18, Slot 2)](itemId.md)|
|FF8_EN.exe+18FE915|FF8_FR.exe+18FE5ED|1 Byte|Item Slot 189 Quantity|
|FF8_EN.exe+18FE916|FF8_FR.exe+18FE5EE|1 Byte|[Item ID in Slot 190 (Page 18, Slot 3)](itemId.md)|
|FF8_EN.exe+18FE917|FF8_FR.exe+18FE5EF|1 Byte|Item Slot 190 Quantity|
|FF8_EN.exe+18FE918|FF8_FR.exe+18FE5F0|1 Byte|[Item ID in Slot 191 (Page 18, Slot 4)](itemId.md)|
|FF8_EN.exe+18FE919|FF8_FR.exe+18FE5F1|1 Byte|Item Slot 191 Quantity|
|FF8_EN.exe+18FE91A|FF8_FR.exe+18FE5F2|1 Byte|[Item ID in Slot 192 (Page 18, Slot 5)](itemId.md)|
|FF8_EN.exe+18FE91B|FF8_FR.exe+18FE5F3|1 Byte|Item Slot 192 Quantity|
|FF8_EN.exe+18FE91C|FF8_FR.exe+18FE5F4|1 Byte|[Item ID in Slot 193 (Page 18, Slot 6)](itemId.md)|
|FF8_EN.exe+18FE91D|FF8_FR.exe+18FE5F5|1 Byte|Item Slot 193 Quantity|
|FF8_EN.exe+18FE91E|FF8_FR.exe+18FE5F6|1 Byte|[Item ID in Slot 194 (Page 18, Slot 7)](itemId.md)|
|FF8_EN.exe+18FE91F|FF8_FR.exe+18FE5F7|1 Byte|Item Slot 194 Quantity|
|FF8_EN.exe+18FE920|FF8_FR.exe+18FE5F8|1 Byte|[Item ID in Slot 195 (Page 18, Slot 8)](itemId.md)|
|FF8_EN.exe+18FE921|FF8_FR.exe+18FE5F9|1 Byte|Item Slot 195 Quantity|
|FF8_EN.exe+18FE922|FF8_FR.exe+18FE5FA|1 Byte|[Item ID in Slot 196 (Page 18, Slot 9)](itemId.md)|
|FF8_EN.exe+18FE923|FF8_FR.exe+18FE5FB|1 Byte|Item Slot 196 Quantity|
|FF8_EN.exe+18FE924|FF8_FR.exe+18FE5FC|1 Byte|[Item ID in Slot 197 (Page 18, Slot 10)](itemId.md)|
|FF8_EN.exe+18FE925|FF8_FR.exe+18FE5FD|1 Byte|Item Slot 197 Quantity|
|FF8_EN.exe+18FE926|FF8_FR.exe+18FE5FE|1 Byte|[Item ID in Slot 198 (Page 18, Slot 11)](itemId.md)|
|FF8_EN.exe+18FE927|FF8_FR.exe+18FE5FF|1 Byte|Item Slot 198 Quantity|
# Guardian Forces
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FDCB9|FF8_FR.exe+18FD991|1 Byte|Quezacotl Unlocked|
|FF8_EN.exe+18FDCE8|FF8_FR.exe+18FD9C0|1 Byte|[Quezacotl Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDCFD|FF8_FR.exe+18FD9D5|1 Byte|Shiva Unlocked|
|FF8_EN.exe+18FDD2C|FF8_FR.exe+18FDA04|1 Byte|[Shiva Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDD41|FF8_FR.exe+18FDA19|1 Byte|Ifrit Unlocked|
|FF8_EN.exe+18FDD70|FF8_FR.exe+18FDA48|1 Byte|[Ifrit Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDD85|FF8_FR.exe+18FDA5D|1 Byte|Siren Unlocked|
|FF8_EN.exe+18FDDB4|FF8_FR.exe+18FDA8C|1 Byte|[Siren Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDDC9|FF8_FR.exe+18FDAA1|1 Byte|Brothers Unlocked|
|FF8_EN.exe+18FDDF8|FF8_FR.exe+18FDAD0|1 Byte|[Brothers Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDE0D|FF8_FR.exe+18FDAE5|1 Byte|Diablos Unlocked|
|FF8_EN.exe+18FDE3C|FF8_FR.exe+18FDB14|1 Byte|[Diablos Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDE51|FF8_FR.exe+18FDB29|1 Byte|Carbuncle Unlocked|
|FF8_EN.exe+18FDE80|FF8_FR.exe+18FDB58|1 Byte|[Carbuncle Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDE95|FF8_FR.exe+18FDB6D|1 Byte|Leviathan Unlocked|
|FF8_EN.exe+18FDEC4|FF8_FR.exe+18FDB9C|1 Byte|[Leviathan Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDED9|FF8_FR.exe+18FDBB1|1 Byte|Pandemona Unlocked|
|FF8_EN.exe+18FDF08|FF8_FR.exe+18FDBE0|1 Byte|[Pandemona Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDF1D|FF8_FR.exe+18FDBF5|1 Byte|Cerberus Unlocked|
|FF8_EN.exe+18FDF4C|FF8_FR.exe+18FDC24|1 Byte|[Cerberus Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDF61|FF8_FR.exe+18FDC39|1 Byte|Alexander Unlocked|
|FF8_EN.exe+18FDF90|FF8_FR.exe+18FDC68|1 Byte|[Alexander Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDFA5|FF8_FR.exe+18FDC7D|1 Byte|Doomtrain Unlocked|
|FF8_EN.exe+18FDFD4|FF8_FR.exe+18FDCAC|1 Byte|[Doomtrain Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FDFE9|FF8_FR.exe+18FDCC1|1 Byte|Bahamut Unlocked|
|FF8_EN.exe+18FE018|FF8_FR.exe+18FDCF0|1 Byte|[Bahamut Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FE02D|FF8_FR.exe+18FDD05|1 Byte|Cactaur Unlocked|
|FF8_EN.exe+18FE05C|FF8_FR.exe+18FDD34|1 Byte|[Cactaur Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FE071|FF8_FR.exe+18FDD49|1 Byte|Tonberry Unlocked|
|FF8_EN.exe+18FE0A0|FF8_FR.exe+18FDD78|1 Byte|[Tonberry Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FE0B5|FF8_FR.exe+18FDD8D|1 Byte|Eden Unlocked|
|FF8_EN.exe+18FE0E4|FF8_FR.exe+18FDDBC|1 Byte|[Eden Skill Selected to Learn](skillId.md)|
|FF8_EN.exe+18FF618|FF8_FR.exe+18FF2F0|2 Bytes|Quezacotl HP|
|FF8_EN.exe+18FF61A|FF8_FR.exe+18FF2F2|2 Bytes|Quezacotl Max HP|
|FF8_EN.exe+18FF61C|FF8_FR.exe+18FF2F4|4 Bytes|Quezacotl EXP|
|FF8_EN.exe+18FF624|FF8_FR.exe+18FF2FC|2 Bytes|Shiva HP|
|FF8_EN.exe+18FF626|FF8_FR.exe+18FF2FE|2 Bytes|Shiva Max HP|
|FF8_EN.exe+18FF628|FF8_FR.exe+18FF300|4 Bytes|Shiva EXP|
|FF8_EN.exe+18FF630|FF8_FR.exe+18FF308|2 Bytes|Ifrit HP|
|FF8_EN.exe+18FF632|FF8_FR.exe+18FF30A|2 Bytes|Ifrit Max HP|
|FF8_EN.exe+18FF634|FF8_FR.exe+18FF30C|4 Bytes|Ifrit EXP|
|FF8_EN.exe+18FF63C|FF8_FR.exe+18FF314|2 Bytes|Siren HP|
|FF8_EN.exe+18FF63E|FF8_FR.exe+18FF316|2 Bytes|Siren Max HP|
|FF8_EN.exe+18FF640|FF8_FR.exe+18FF318|4 Bytes|Siren EXP|
|FF8_EN.exe+18FF648|FF8_FR.exe+18FF320|2 Bytes|Brothers HP|
|FF8_EN.exe+18FF64A|FF8_FR.exe+18FF322|2 Bytes|Brothers Max HP|
|FF8_EN.exe+18FF64C|FF8_FR.exe+18FF324|4 Bytes|Brothers EXP|
|FF8_EN.exe+18FF654|FF8_FR.exe+18FF32C|2 Bytes|Diablos HP|
|FF8_EN.exe+18FF656|FF8_FR.exe+18FF32E|2 Bytes|Diablos Max HP|
|FF8_EN.exe+18FF658|FF8_FR.exe+18FF330|4 Bytes|Diablos EXP|
|FF8_EN.exe+18FF660|FF8_FR.exe+18FF338|2 Bytes|Carbuncle HP|
|FF8_EN.exe+18FF662|FF8_FR.exe+18FF33A|2 Bytes|Carbuncle Max HP|
|FF8_EN.exe+18FF664|FF8_FR.exe+18FF33C|4 Bytes|Carbuncle EXP|
|FF8_EN.exe+18FF66C|FF8_FR.exe+18FF344|2 Bytes|Leviathan HP|
|FF8_EN.exe+18FF66E|FF8_FR.exe+18FF346|2 Bytes|Leviathan Max HP|
|FF8_EN.exe+18FF670|FF8_FR.exe+18FF348|4 Bytes|Leviathan EXP|
|FF8_EN.exe+18FF678|FF8_FR.exe+18FF350|2 Bytes|Pandemona HP|
|FF8_EN.exe+18FF67A|FF8_FR.exe+18FF352|2 Bytes|Pandemona Max HP|
|FF8_EN.exe+18FF67C|FF8_FR.exe+18FF354|4 Bytes|Pandemona EXP|
|FF8_EN.exe+18FF684|FF8_FR.exe+18FF35C|2 Bytes|Cerberus HP|
|FF8_EN.exe+18FF686|FF8_FR.exe+18FF35E|2 Bytes|Cerberus Max HP|
|FF8_EN.exe+18FF688|FF8_FR.exe+18FF360|4 Bytes|Cerberus EXP|
|FF8_EN.exe+18FF690|FF8_FR.exe+18FF368|2 Bytes|Alexander HP|
|FF8_EN.exe+18FF692|FF8_FR.exe+18FF36A|2 Bytes|Alexander Max HP|
|FF8_EN.exe+18FF694|FF8_FR.exe+18FF36C|4 Bytes|Alexander EXP|
|FF8_EN.exe+18FF69C|FF8_FR.exe+18FF374|2 Bytes|Doomtrain HP|
|FF8_EN.exe+18FF69E|FF8_FR.exe+18FF376|2 Bytes|Doomtrain Max HP|
|FF8_EN.exe+18FF6A0|FF8_FR.exe+18FF378|4 Bytes|Doomtrain EXP|
|FF8_EN.exe+18FF6A8|FF8_FR.exe+18FF380|2 Bytes|Bahamut HP|
|FF8_EN.exe+18FF6AA|FF8_FR.exe+18FF382|2 Bytes|Bahamut Max HP|
|FF8_EN.exe+18FF6AC|FF8_FR.exe+18FF384|4 Bytes|Bahamut EXP|
|FF8_EN.exe+18FF6B4|FF8_FR.exe+18FF38C|2 Bytes|Cactaur HP|
|FF8_EN.exe+18FF6B6|FF8_FR.exe+18FF38E|2 Bytes|Cactaur Max HP|
|FF8_EN.exe+18FF6B8|FF8_FR.exe+18FF390|4 Bytes|Cactaur EXP|
|FF8_EN.exe+18FF6C0|FF8_FR.exe+18FF398|2 Bytes|Tonberry HP|
|FF8_EN.exe+18FF6C2|FF8_FR.exe+18FF39A|2 Bytes|Tonberry Max HP|
|FF8_EN.exe+18FF6C4|FF8_FR.exe+18FF39C|4 Bytes|Tonberry EXP|
|FF8_EN.exe+18FF6CC|FF8_FR.exe+18FF3A4|2 Bytes|Eden HP|
|FF8_EN.exe+18FF6CE|FF8_FR.exe+18FF3A6|2 Bytes|Eden Max HP|
|FF8_EN.exe+18FF6D0|FF8_FR.exe+18FF3A8|4 Bytes|Eden EXP|
# Triple Triad
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEADA|FF8_FR.exe+18FE7B2|1 Byte|[Last Region Played](cardRegion.md)|
|FF8_EN.exe+18FEADB|FF8_FR.exe+18FE7B3|1 Byte|[Second Last Region Played](cardRegion.md)|
|FF8_EN.exe+18FEFAC|FF8_FR.exe+18FEC84|1 Byte|Total Card Wins|
|FF8_EN.exe+18FEFAE|FF8_FR.exe+18FEC86|1 Byte|Total Card Losses|
|FF8_EN.exe+18FEFB0|FF8_FR.exe+18FEC88|1 Byte|Total Card Draws|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
|FF8_EN.exe+19CD798|FF8_FR.exe+19CD470|1 Byte|Triple Triad - In Game|
# Balamb Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEAC8|FF8_FR.exe+18FE7A0|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD0|FF8_FR.exe+18FE7A8|1 Byte|[Balamb Trade Rule](cardTradeRule.md)|
# Galbadia Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEAC9|FF8_FR.exe+18FE7A1|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD1|FF8_FR.exe+18FE7A9|1 Byte|[Galbadia Trade Rule](cardTradeRule.md)|
# Trabia Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACA|FF8_FR.exe+18FE7A2|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD2|FF8_FR.exe+18FE7AA|1 Byte|[Trabia Trade Rule](cardTradeRule.md)|
# Centra Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACB|FF8_FR.exe+18FE7A3|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD3|FF8_FR.exe+18FE7AB|1 Byte|[Centra Trade Rule](cardTradeRule.md)|
# Dollet Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACC|FF8_FR.exe+18FE7A4|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD4|FF8_FR.exe+18FE7AC|1 Byte|[Dollet Trade Rule](cardTradeRule.md)|
# FH Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACD|FF8_FR.exe+18FE7A5|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD5|FF8_FR.exe+18FE7AD|1 Byte|[FH Trade Rule](cardTradeRule.md)|
# Space Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACE|FF8_FR.exe+18FE7A6|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD6|FF8_FR.exe+18FE7AE|1 Byte|[Space Trade Rule](cardTradeRule.md)|
# Esthar Play Rules
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 0; Length: 1)|Open|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 1; Length: 1)|Same|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 2; Length: 1)|Plus|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 3; Length: 1)|Random|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 4; Length: 1)|Sudden Death|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 5; Length: 1)|Retry (Unused)|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 6; Length: 1)|Same Wall|
|FF8_EN.exe+18FEACF|FF8_FR.exe+18FE7A7|Binary (Bit 7; Length: 1)|Elemental|
|FF8_EN.exe+18FEAD7|FF8_FR.exe+18FE7AF|1 Byte|[Esthar Trade Rule](cardTradeRule.md)|
# Misc - Controller Button Map
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18D0228|FF8_FR.exe+18CFF00|1 Byte|[L2](controls.md)|
|FF8_EN.exe+18D0229|FF8_FR.exe+18CFF01|1 Byte|[R2](controls.md)|
|FF8_EN.exe+18D022A|FF8_FR.exe+18CFF02|1 Byte|[L1](controls.md)|
|FF8_EN.exe+18D022B|FF8_FR.exe+18CFF03|1 Byte|[R1](controls.md)|
|FF8_EN.exe+18D022C|FF8_FR.exe+18CFF04|1 Byte|[Walk/Cancel](controls.md)|
|FF8_EN.exe+18D022D|FF8_FR.exe+18CFF05|1 Byte|[Menu](controls.md)|
|FF8_EN.exe+18D022E|FF8_FR.exe+18CFF06|1 Byte|[Talk](controls.md)|
|FF8_EN.exe+18D022F|FF8_FR.exe+18CFF07|1 Byte|[Card Game](controls.md)|
|FF8_EN.exe+18D0234|FF8_FR.exe+18CFF0C|1 Byte|[Up](controls.md)|
|FF8_EN.exe+18D0235|FF8_FR.exe+18CFF0D|1 Byte|[Right](controls.md)|
|FF8_EN.exe+18D0236|FF8_FR.exe+18CFF0E|1 Byte|[Down](controls.md)|
|FF8_EN.exe+18D0237|FF8_FR.exe+18CFF0F|1 Byte|[Left](controls.md)|
# Draw Points
|Offset (EN)|Offset (FR)|Length|Description|
|----|----|----|----|
|FF8_EN.exe+18FEA2C|FF8_FR.exe+18FE704|Binary (Bit 0; Length: 2)|[Cure (21) / B-Garden - Front Gate (65)](drawPoint.md)|
|FF8_EN.exe+18FEA2C|FF8_FR.exe+18FE704|Binary (Bit 2; Length: 2)|[Blizzard (4) / B-Garden - Training Center (78)](drawPoint.md)|
|FF8_EN.exe+18FEA2C|FF8_FR.exe+18FE704|Binary (Bit 4; Length: 2)|[Full-life (25) / B-Garden - MD Level (68)](drawPoint.md)|
|FF8_EN.exe+18FEA2C|FF8_FR.exe+18FE704|Binary (Bit 6; Length: 2)|[Esuna (27) / B-Garden - Library (64)](drawPoint.md)|
|FF8_EN.exe+18FEA2D|FF8_FR.exe+18FE705|Binary (Bit 0; Length: 2)|[Demi (13) / B-Garden - Cafeteria (67)](drawPoint.md)|
|FF8_EN.exe+18FEA2D|FF8_FR.exe+18FE705|Binary (Bit 2; Length: 2)|[Bio (12) / B-Garden - Master Room (81)](drawPoint.md)|
|FF8_EN.exe+18FEA2D|FF8_FR.exe+18FE705|Binary (Bit 4; Length: 2)|[Thunder (7) / Balamb - Town Square (85)](drawPoint.md)|
|FF8_EN.exe+18FEA2D|FF8_FR.exe+18FE705|Binary (Bit 6; Length: 2)|[Cure (21) / Balamb Harbor (87)](drawPoint.md)|
|FF8_EN.exe+18FEA2E|FF8_FR.exe+18FE706|Binary (Bit 0; Length: 2)|[Fire (1) / Fire Cavern (92)](drawPoint.md)|
|FF8_EN.exe+18FEA2E|FF8_FR.exe+18FE706|Binary (Bit 2; Length: 2)|[Silence (41) / Dollet - Town Square (93)](drawPoint.md)|
|FF8_EN.exe+18FEA2E|FF8_FR.exe+18FE706|Binary (Bit 4; Length: 2)|[Blind (38) / Dollet - Comm Tower (99)](drawPoint.md)|
|FF8_EN.exe+18FEA2E|FF8_FR.exe+18FE706|Binary (Bit 6; Length: 2)|[Scan (50) / Timber - City Square (101)](drawPoint.md)|
|FF8_EN.exe+18FEA2F|FF8_FR.exe+18FE707|Binary (Bit 0; Length: 2)|[Cure (21) / Timber - City Square (101)](drawPoint.md)|
|FF8_EN.exe+18FEA2F|FF8_FR.exe+18FE707|Binary (Bit 2; Length: 2)|[Blizzaga (6) / Timber - Editorial Department (109)](drawPoint.md)|
|FF8_EN.exe+18FEA2F|FF8_FR.exe+18FE707|Binary (Bit 4; Length: 2)|[Haste (35) / G-Garden - Hall (113)](drawPoint.md)|
|FF8_EN.exe+18FEA2F|FF8_FR.exe+18FE707|Binary (Bit 6; Length: 2)|[Life (24) / G-Garden - Clubroom (117)](drawPoint.md)|
|FF8_EN.exe+18FEA30|FF8_FR.exe+18FE708|Binary (Bit 0; Length: 2)|[Shell (30) / G-Garden - Athletic Track (122)](drawPoint.md)|
|FF8_EN.exe+18FEA30|FF8_FR.exe+18FE708|Binary (Bit 2; Length: 2)|[Protect (29) / G-Garden - Gymnasium (125)](drawPoint.md)|
|FF8_EN.exe+18FEA30|FF8_FR.exe+18FE708|Binary (Bit 4; Length: 2)|[Double (33) / G-Garden - Auditorium (121)](drawPoint.md)|
|FF8_EN.exe+18FEA30|FF8_FR.exe+18FE708|Binary (Bit 6; Length: 2)|[Aura (32) / G-Garden - Back Entrance (124)](drawPoint.md)|
|FF8_EN.exe+18FEA31|FF8_FR.exe+18FE709|Binary (Bit 0; Length: 2)|[Cure (21) / Timber Forest (110)](drawPoint.md)|
|FF8_EN.exe+18FEA31|FF8_FR.exe+18FE709|Binary (Bit 2; Length: 2)|[Water (10) / Timber Forest (110)](drawPoint.md)|
|FF8_EN.exe+18FEA31|FF8_FR.exe+18FE709|Binary (Bit 4; Length: 2)|[Thundara (8) / Deling City - City Square (129)](drawPoint.md)|
|FF8_EN.exe+18FEA31|FF8_FR.exe+18FE709|Binary (Bit 6; Length: 2)|[Zombie (48) / Deling City - Sewer (134)](drawPoint.md)|
|FF8_EN.exe+18FEA32|FF8_FR.exe+18FE70A|Binary (Bit 0; Length: 2)|[Esuna (27) / Deling City - Sewer (134)](drawPoint.md)|
|FF8_EN.exe+18FEA32|FF8_FR.exe+18FE70A|Binary (Bit 2; Length: 2)|[Bio (12) / Deling City - Sewer (134)](drawPoint.md)|
|FF8_EN.exe+18FEA32|FF8_FR.exe+18FE70A|Binary (Bit 4; Length: 2)|[Fira (2) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA32|FF8_FR.exe+18FE70A|Binary (Bit 6; Length: 2)|[Berserk (46) / Galbadia D -District Prison (135)](drawPoint.md)|
|FF8_EN.exe+18FEA33|FF8_FR.exe+18FE70B|Binary (Bit 0; Length: 2)|[Thundaga (9) / Galbadia D -District Prison (135)](drawPoint.md)|
|FF8_EN.exe+18FEA33|FF8_FR.exe+18FE70B|Binary (Bit 2; Length: 2)|[Aero (11) / Desert (136)](drawPoint.md)|
|FF8_EN.exe+18FEA33|FF8_FR.exe+18FE70B|Binary (Bit 4; Length: 2)|[Blizzara (5) / Galbadia Missile Base (137)](drawPoint.md)|
|FF8_EN.exe+18FEA33|FF8_FR.exe+18FE70B|Binary (Bit 6; Length: 2)|[Blind (38) / Galbadia Missile Base (137)](drawPoint.md)|
|FF8_EN.exe+18FEA34|FF8_FR.exe+18FE70C|Binary (Bit 0; Length: 2)|[Full-life (25) / Galbadia Missile Base (137)](drawPoint.md)|
|FF8_EN.exe+18FEA34|FF8_FR.exe+18FE70C|Binary (Bit 2; Length: 2)|[Drain (44) / Winhill Village (138)](drawPoint.md)|
|FF8_EN.exe+18FEA34|FF8_FR.exe+18FE70C|Binary (Bit 4; Length: 2)|[Dispel (28) / Winhill Village (138)](drawPoint.md)|
|FF8_EN.exe+18FEA34|FF8_FR.exe+18FE70C|Binary (Bit 6; Length: 2)|[Curaga (23) / Winhill - Vacant House (140)](drawPoint.md)|
|FF8_EN.exe+18FEA35|FF8_FR.exe+18FE70D|Binary (Bit 0; Length: 2)|[Reflect (31) / Winhill Village (138)](drawPoint.md)|
|FF8_EN.exe+18FEA35|FF8_FR.exe+18FE70D|Binary (Bit 2; Length: 2)|[Protect (29) / Tomb of the Unknown King (145)](drawPoint.md)|
|FF8_EN.exe+18FEA35|FF8_FR.exe+18FE70D|Binary (Bit 4; Length: 2)|[Float (47) / Tomb of the Unknown King (145)](drawPoint.md)|
|FF8_EN.exe+18FEA35|FF8_FR.exe+18FE70D|Binary (Bit 6; Length: 2)|[Cura (22) / Tomb of the Unknown King (145)](drawPoint.md)|
|FF8_EN.exe+18FEA36|FF8_FR.exe+18FE70E|Binary (Bit 0; Length: 2)|[Haste (35) / FH - Station Yard (154)](drawPoint.md)|
|FF8_EN.exe+18FEA36|FF8_FR.exe+18FE70E|Binary (Bit 2; Length: 2)|[Shell (30) / FH - Residential Area (147)](drawPoint.md)|
|FF8_EN.exe+18FEA36|FF8_FR.exe+18FE70E|Binary (Bit 4; Length: 2)|[Regen (26) / Fishermans Horizon (146)](drawPoint.md)|
|FF8_EN.exe+18FEA36|FF8_FR.exe+18FE70E|Binary (Bit 6; Length: 2)|[Full-life (25) / FH - Factory (150)](drawPoint.md)|
|FF8_EN.exe+18FEA37|FF8_FR.exe+18FE70F|Binary (Bit 0; Length: 2)|[Ultima (19) / FH - Mayor's Residence (149)](drawPoint.md)|
|FF8_EN.exe+18FEA37|FF8_FR.exe+18FE70F|Binary (Bit 2; Length: 2)|[Thundaga (9) / FH - Great Salt Lake (157)](drawPoint.md)|
|FF8_EN.exe+18FEA37|FF8_FR.exe+18FE70F|Binary (Bit 4; Length: 2)|[Meteor (16) / FH - Great Salt Lake (157)](drawPoint.md)|
|FF8_EN.exe+18FEA37|FF8_FR.exe+18FE70F|Binary (Bit 6; Length: 2)|[Curaga (23) / Esthar - City (159)](drawPoint.md)|
|FF8_EN.exe+18FEA38|FF8_FR.exe+18FE710|Binary (Bit 0; Length: 2)|[Blizzard (4) / Esthar - City (159)](drawPoint.md)|
|FF8_EN.exe+18FEA38|FF8_FR.exe+18FE710|Binary (Bit 2; Length: 2)|[Quake (17) / Esthar - Odine's Laboratory (160)](drawPoint.md)|
|FF8_EN.exe+18FEA38|FF8_FR.exe+18FE710|Binary (Bit 4; Length: 2)|[Tornado (18) / Esthar - City (159)](drawPoint.md)|
|FF8_EN.exe+18FEA38|FF8_FR.exe+18FE710|Binary (Bit 6; Length: 2)|[Double (33) / Dr. Odine's Laboratory - Lobby (167)](drawPoint.md)|
|FF8_EN.exe+18FEA39|FF8_FR.exe+18FE711|Binary (Bit 0; Length: 2)|[Pain (45) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA39|FF8_FR.exe+18FE711|Binary (Bit 2; Length: 2)|[Flare (15) / Dr. Odine's Laboratory - Lobby (167)](drawPoint.md)|
|FF8_EN.exe+18FEA39|FF8_FR.exe+18FE711|Binary (Bit 4; Length: 2)|[Stop (37) / Esthar Sorceress Memorial (173)](drawPoint.md)|
|FF8_EN.exe+18FEA39|FF8_FR.exe+18FE711|Binary (Bit 6; Length: 2)|[Stop (37) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA3A|FF8_FR.exe+18FE712|Binary (Bit 0; Length: 2)|[Life (24) / Tears' Point (177)](drawPoint.md)|
|FF8_EN.exe+18FEA3A|FF8_FR.exe+18FE712|Binary (Bit 2; Length: 2)|[Reflect (31) / Tears' Point (177)](drawPoint.md)|
|FF8_EN.exe+18FEA3A|FF8_FR.exe+18FE712|Binary (Bit 4; Length: 2)|[Death (43) / Lunatic Pandora Laboratory (178)](drawPoint.md)|
|FF8_EN.exe+18FEA3A|FF8_FR.exe+18FE712|Binary (Bit 6; Length: 2)|[Holy (14) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3B|FF8_FR.exe+18FE713|Binary (Bit 0; Length: 2)|[Silence (41) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3B|FF8_FR.exe+18FE713|Binary (Bit 2; Length: 2)|[Ultima (19) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3B|FF8_FR.exe+18FE713|Binary (Bit 4; Length: 2)|[Confuse (39) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3B|FF8_FR.exe+18FE713|Binary (Bit 6; Length: 2)|[Break (42) / Lunatic Pandora (181)](drawPoint.md)|
|FF8_EN.exe+18FEA3C|FF8_FR.exe+18FE714|Binary (Bit 0; Length: 2)|[Meteor (16) / Lunatic Pandora (181)](drawPoint.md)|
|FF8_EN.exe+18FEA3C|FF8_FR.exe+18FE714|Binary (Bit 2; Length: 2)|[Curaga (23) / Lunatic Pandora (181)](drawPoint.md)|
|FF8_EN.exe+18FEA3C|FF8_FR.exe+18FE714|Binary (Bit 4; Length: 2)|[Slow (36) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA3C|FF8_FR.exe+18FE714|Binary (Bit 6; Length: 2)|[Curaga (23) / Edea's House - Bedroom (185)](drawPoint.md)|
|FF8_EN.exe+18FEA3D|FF8_FR.exe+18FE715|Binary (Bit 0; Length: 2)|[Flare (15) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA3D|FF8_FR.exe+18FE715|Binary (Bit 2; Length: 2)|[Holy (14) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA3D|FF8_FR.exe+18FE715|Binary (Bit 4; Length: 2)|[Sleep (40) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3D|FF8_FR.exe+18FE715|Binary (Bit 6; Length: 2)|[Confuse (39) / Centra - Excavation Site (182)](drawPoint.md)|
|FF8_EN.exe+18FEA3E|FF8_FR.exe+18FE716|Binary (Bit 0; Length: 2)|[Aero (11) / Centra Ruins (189)](drawPoint.md)|
|FF8_EN.exe+18FEA3E|FF8_FR.exe+18FE716|Binary (Bit 2; Length: 2)|[Drain (44) / Centra Ruins (189)](drawPoint.md)|
|FF8_EN.exe+18FEA3E|FF8_FR.exe+18FE716|Binary (Bit 4; Length: 2)|[Pain (45) / Centra Ruins (189)](drawPoint.md)|
|FF8_EN.exe+18FEA3E|FF8_FR.exe+18FE716|Binary (Bit 6; Length: 2)|[Thundaga (9) / Trabia Garden - Front Gate (190)](drawPoint.md)|
|FF8_EN.exe+18FEA3F|FF8_FR.exe+18FE717|Binary (Bit 0; Length: 2)|[Zombie (48) / T-Garden - Cemetery (191)](drawPoint.md)|
|FF8_EN.exe+18FEA3F|FF8_FR.exe+18FE717|Binary (Bit 2; Length: 2)|[Aura (32) / T-Garden - Festival Stage (193)](drawPoint.md)|
|FF8_EN.exe+18FEA3F|FF8_FR.exe+18FE717|Binary (Bit 4; Length: 2)|[Ultima (19) / Shumi Village - Desert Village (197)](drawPoint.md)|
|FF8_EN.exe+18FEA3F|FF8_FR.exe+18FE717|Binary (Bit 6; Length: 2)|[Blizzaga (6) / Shumi Village - Village (199)](drawPoint.md)|
|FF8_EN.exe+18FEA40|FF8_FR.exe+18FE718|Binary (Bit 0; Length: 2)|[Firaga (3) / Shumi Village - Residence (201)](drawPoint.md)|
|FF8_EN.exe+18FEA40|FF8_FR.exe+18FE718|Binary (Bit 2; Length: 2)|[Tornado (18) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA40|FF8_FR.exe+18FE718|Binary (Bit 4; Length: 2)|[Holy (14) / White SeeD Ship - Cabin (207)](drawPoint.md)|
|FF8_EN.exe+18FEA40|FF8_FR.exe+18FE718|Binary (Bit 6; Length: 2)|[Cura (22) / Ragnarok - Aisle (210)](drawPoint.md)|
|FF8_EN.exe+18FEA41|FF8_FR.exe+18FE719|Binary (Bit 0; Length: 2)|[Life (24) / Ragnarok - Aisle (210)](drawPoint.md)|
|FF8_EN.exe+18FEA41|FF8_FR.exe+18FE719|Binary (Bit 2; Length: 2)|[Full-life (25) / Ragnarok - Hangar (211)](drawPoint.md)|
|FF8_EN.exe+18FEA41|FF8_FR.exe+18FE719|Binary (Bit 4; Length: 2)|[Dispel (28) / Deep Sea Research Center - Levels (217)](drawPoint.md)|
|FF8_EN.exe+18FEA41|FF8_FR.exe+18FE719|Binary (Bit 6; Length: 2)|[Esuna (27) / Deep Sea Research Center - Levels (217)](drawPoint.md)|
|FF8_EN.exe+18FEA42|FF8_FR.exe+18FE71A|Binary (Bit 0; Length: 2)|[Triple (34) / Deep Sea Deposit (218)](drawPoint.md)|
|FF8_EN.exe+18FEA42|FF8_FR.exe+18FE71A|Binary (Bit 2; Length: 2)|[Ultima (19) / Deep Sea Deposit (218)](drawPoint.md)|
|FF8_EN.exe+18FEA42|FF8_FR.exe+18FE71A|Binary (Bit 4; Length: 2)|[Meltdown (49) / Lunar Base - Pod (221)](drawPoint.md)|
|FF8_EN.exe+18FEA42|FF8_FR.exe+18FE71A|Binary (Bit 6; Length: 2)|[Meteor (16) / Lunar Base - Residential Zone (225)](drawPoint.md)|
|FF8_EN.exe+18FEA43|FF8_FR.exe+18FE71B|Binary (Bit 0; Length: 2)|[Haste (35) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA43|FF8_FR.exe+18FE71B|Binary (Bit 2; Length: 2)|[Slow (36) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA43|FF8_FR.exe+18FE71B|Binary (Bit 4; Length: 2)|[Curaga (23) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA43|FF8_FR.exe+18FE71B|Binary (Bit 6; Length: 2)|[Life (24) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA44|FF8_FR.exe+18FE71C|Binary (Bit 0; Length: 2)|[Stop (37) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA44|FF8_FR.exe+18FE71C|Binary (Bit 2; Length: 2)|[Regen (26) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA44|FF8_FR.exe+18FE71C|Binary (Bit 4; Length: 2)|[Double (33) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA44|FF8_FR.exe+18FE71C|Binary (Bit 6; Length: 2)|[Triple (34) / Wilderness (228)](drawPoint.md)|
|FF8_EN.exe+18FEA45|FF8_FR.exe+18FE71D|Binary (Bit 0; Length: 2)|[Flare (15) / Ultimecia Castle (248)](drawPoint.md)|
|FF8_EN.exe+18FEA45|FF8_FR.exe+18FE71D|Binary (Bit 2; Length: 2)|[Curaga (23) / Ultimecia Castle - Storage Room (237)](drawPoint.md)|
|FF8_EN.exe+18FEA45|FF8_FR.exe+18FE71D|Binary (Bit 4; Length: 2)|[Cura (22) / Ultimecia Castle - Passageway (233)](drawPoint.md)|
|FF8_EN.exe+18FEA45|FF8_FR.exe+18FE71D|Binary (Bit 6; Length: 2)|[Scan (50) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA46|FF8_FR.exe+18FE71E|Binary (Bit 0; Length: 2)|[Esuna (27) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA46|FF8_FR.exe+18FE71E|Binary (Bit 2; Length: 2)|[Slow (36) / Ultimecia Castle - Courtyard (243)](drawPoint.md)|
|FF8_EN.exe+18FEA46|FF8_FR.exe+18FE71E|Binary (Bit 4; Length: 2)|[Dispel (28) / Ultimecia Castle - Chapel (244)](drawPoint.md)|
|FF8_EN.exe+18FEA46|FF8_FR.exe+18FE71E|Binary (Bit 6; Length: 2)|[Stop (37) / Ultimecia Castle - Clock Tower (245)](drawPoint.md)|
|FF8_EN.exe+18FEA47|FF8_FR.exe+18FE71F|Binary (Bit 0; Length: 2)|[Life (24) / Ultimecia Castle - Master Room (246)](drawPoint.md)|
|FF8_EN.exe+18FEA47|FF8_FR.exe+18FE71F|Binary (Bit 2; Length: 2)|[Flare (15) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA47|FF8_FR.exe+18FE71F|Binary (Bit 4; Length: 2)|[Aura (32) / Ultimecia Castle - Wine Cellar (232)](drawPoint.md)|
|FF8_EN.exe+18FEA47|FF8_FR.exe+18FE71F|Binary (Bit 6; Length: 2)|[Holy (14) / Ultimecia Castle - Treasure Rm (236)](drawPoint.md)|
|FF8_EN.exe+18FEA48|FF8_FR.exe+18FE720|Binary (Bit 0; Length: 2)|[Meteor (16) / Ultimecia Castle - Terrace (231)](drawPoint.md)|
|FF8_EN.exe+18FEA48|FF8_FR.exe+18FE720|Binary (Bit 2; Length: 2)|[Meltdown (49) / Ultimecia Castle - Art Gallery (238)](drawPoint.md)|
|FF8_EN.exe+18FEA48|FF8_FR.exe+18FE720|Binary (Bit 4; Length: 2)|[Ultima (19) / Ultimecia Castle - Armory (240)](drawPoint.md)|
|FF8_EN.exe+18FEA48|FF8_FR.exe+18FE720|Binary (Bit 6; Length: 2)|[Full-life (25) / Ultimecia Castle - Prison Cell (241)](drawPoint.md)|
|FF8_EN.exe+18FEA49|FF8_FR.exe+18FE721|Binary (Bit 0; Length: 2)|[Triple (34) / Ultimecia Castle - Clock Tower (245)](drawPoint.md)|
|FF8_EN.exe+18FEA49|FF8_FR.exe+18FE721|Binary (Bit 2; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA49|FF8_FR.exe+18FE721|Binary (Bit 4; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA49|FF8_FR.exe+18FE721|Binary (Bit 6; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4A|FF8_FR.exe+18FE722|Binary (Bit 0; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4A|FF8_FR.exe+18FE722|Binary (Bit 2; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4A|FF8_FR.exe+18FE722|Binary (Bit 4; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4A|FF8_FR.exe+18FE722|Binary (Bit 6; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4B|FF8_FR.exe+18FE723|Binary (Bit 0; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4B|FF8_FR.exe+18FE723|Binary (Bit 2; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4B|FF8_FR.exe+18FE723|Binary (Bit 4; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4B|FF8_FR.exe+18FE723|Binary (Bit 6; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4C|FF8_FR.exe+18FE724|Binary (Bit 0; Length: 2)|[Cure (21) / Balamb - Alcauld Plains (1)](drawPoint.md)|
|FF8_EN.exe+18FEA4C|FF8_FR.exe+18FE724|Binary (Bit 2; Length: 2)|[Esuna (27) / Balamb - Alcauld Plains (1)](drawPoint.md)|
|FF8_EN.exe+18FEA4C|FF8_FR.exe+18FE724|Binary (Bit 4; Length: 2)|[Thunder (7) / Timber - Mandy Beach (6)](drawPoint.md)|
|FF8_EN.exe+18FEA4C|FF8_FR.exe+18FE724|Binary (Bit 6; Length: 2)|[Fira (2) / Timber - Lanker Plains (8)](drawPoint.md)|
|FF8_EN.exe+18FEA4D|FF8_FR.exe+18FE725|Binary (Bit 0; Length: 2)|[Thundara (8) / Timber - Shenand Hill (17)](drawPoint.md)|
|FF8_EN.exe+18FEA4D|FF8_FR.exe+18FE725|Binary (Bit 2; Length: 2)|[Blizzara (5) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA4D|FF8_FR.exe+18FE725|Binary (Bit 4; Length: 2)|[Blizzard (4) / Timber - Yaulny Canyon (10)](drawPoint.md)|
|FF8_EN.exe+18FEA4D|FF8_FR.exe+18FE725|Binary (Bit 6; Length: 2)|[Fire (1) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA4E|FF8_FR.exe+18FE726|Binary (Bit 0; Length: 2)|[Cure (21) / Dollet - Hasberry Plains (11)](drawPoint.md)|
|FF8_EN.exe+18FEA4E|FF8_FR.exe+18FE726|Binary (Bit 2; Length: 2)|[Water (10) / Dollet - Malgo Peninsula (14)](drawPoint.md)|
|FF8_EN.exe+18FEA4E|FF8_FR.exe+18FE726|Binary (Bit 4; Length: 2)|[Cura (22) / Dollet - Hasberry Plains (11)](drawPoint.md)|
|FF8_EN.exe+18FEA4E|FF8_FR.exe+18FE726|Binary (Bit 6; Length: 2)|[Esuna (27) / Great Plains of Galbadia (20)](drawPoint.md)|
|FF8_EN.exe+18FEA4F|FF8_FR.exe+18FE727|Binary (Bit 0; Length: 2)|[Scan (50) / Galbadia - Wilburn Hill (21)](drawPoint.md)|
|FF8_EN.exe+18FEA4F|FF8_FR.exe+18FE727|Binary (Bit 2; Length: 2)|[Shell (30) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA4F|FF8_FR.exe+18FE727|Binary (Bit 4; Length: 2)|[Haste (35) / Galbadia - Dingo Desert (23)](drawPoint.md)|
|FF8_EN.exe+18FEA4F|FF8_FR.exe+18FE727|Binary (Bit 6; Length: 2)|[Aero (11) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA50|FF8_FR.exe+18FE728|Binary (Bit 0; Length: 2)|[Bio (12) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA50|FF8_FR.exe+18FE728|Binary (Bit 2; Length: 2)|[Life (24) / Winhill - Winhill Bluffs (24)](drawPoint.md)|
|FF8_EN.exe+18FEA50|FF8_FR.exe+18FE728|Binary (Bit 4; Length: 2)|[Demi (13) / Centra - Centra Crater (62)](drawPoint.md)|
|FF8_EN.exe+18FEA50|FF8_FR.exe+18FE728|Binary (Bit 6; Length: 2)|[Protect (29) / Centra - Nectar Peninsula (61)](drawPoint.md)|
|FF8_EN.exe+18FEA51|FF8_FR.exe+18FE729|Binary (Bit 0; Length: 2)|[Holy (14) / Centra - Cape of Good Hope (57)](drawPoint.md)|
|FF8_EN.exe+18FEA51|FF8_FR.exe+18FE729|Binary (Bit 2; Length: 2)|[Thundaga (9) / Centra - Almaj Mountains (55)](drawPoint.md)|
|FF8_EN.exe+18FEA51|FF8_FR.exe+18FE729|Binary (Bit 4; Length: 2)|[Stop (37) / Esthar - Shalmal Peninsula (53)](drawPoint.md)|
|FF8_EN.exe+18FEA51|FF8_FR.exe+18FE729|Binary (Bit 6; Length: 2)|[Firaga (3) / Esthar - Kashkabald Desert (50)](drawPoint.md)|
|FF8_EN.exe+18FEA52|FF8_FR.exe+18FE72A|Binary (Bit 0; Length: 2)|[Regen (26) / Trabia - Winter Island (26)](drawPoint.md)|
|FF8_EN.exe+18FEA52|FF8_FR.exe+18FE72A|Binary (Bit 2; Length: 2)|[Blizzaga (6) / Trabia - Winter Island (26)](drawPoint.md)|
|FF8_EN.exe+18FEA52|FF8_FR.exe+18FE72A|Binary (Bit 4; Length: 2)|[Confuse (39) / Trabia - Hawkwind Plains (30)](drawPoint.md)|
|FF8_EN.exe+18FEA52|FF8_FR.exe+18FE72A|Binary (Bit 6; Length: 2)|[Flare (15) / Trabia - Bika Snowfield (32)](drawPoint.md)|
|FF8_EN.exe+18FEA53|FF8_FR.exe+18FE72B|Binary (Bit 0; Length: 2)|[Dispel (28) / Trabia - Bika Snowfield (32)](drawPoint.md)|
|FF8_EN.exe+18FEA53|FF8_FR.exe+18FE72B|Binary (Bit 2; Length: 2)|[Slow (36) / Trabia - Bika Snowfield (32)](drawPoint.md)|
|FF8_EN.exe+18FEA53|FF8_FR.exe+18FE72B|Binary (Bit 4; Length: 2)|[Quake (17) / Trabia - Vienne Mountains (37)](drawPoint.md)|
|FF8_EN.exe+18FEA53|FF8_FR.exe+18FE72B|Binary (Bit 6; Length: 2)|[Curaga (23) / Esthar - West Coast (46)](drawPoint.md)|
|FF8_EN.exe+18FEA54|FF8_FR.exe+18FE72C|Binary (Bit 0; Length: 2)|[Tornado (18) / Esthar - Nortes Mountains (39)](drawPoint.md)|
|FF8_EN.exe+18FEA54|FF8_FR.exe+18FE72C|Binary (Bit 2; Length: 2)|[Full-life (25) / Esthar - Nortes Mountains (39)](drawPoint.md)|
|FF8_EN.exe+18FEA54|FF8_FR.exe+18FE72C|Binary (Bit 4; Length: 2)|[Reflect (31) / Winhill - Humphrey Archipelago (25)](drawPoint.md)|
|FF8_EN.exe+18FEA54|FF8_FR.exe+18FE72C|Binary (Bit 6; Length: 2)|[Aura (32) / Dollet - Long Horn Island (13)](drawPoint.md)|
|FF8_EN.exe+18FEA55|FF8_FR.exe+18FE72D|Binary (Bit 0; Length: 2)|[Quake (17) / Dollet - Holy Glory Cape (12)](drawPoint.md)|
|FF8_EN.exe+18FEA55|FF8_FR.exe+18FE72D|Binary (Bit 2; Length: 2)|[Double (33) / ??? (-1)](drawPoint.md)|
|FF8_EN.exe+18FEA55|FF8_FR.exe+18FE72D|Binary (Bit 4; Length: 2)|[Break (42) / Timber - Shenand Hill (17)](drawPoint.md)|
|FF8_EN.exe+18FEA55|FF8_FR.exe+18FE72D|Binary (Bit 6; Length: 2)|[Meteor (16) / Esthar - Grandidi Forest (41)](drawPoint.md)|
|FF8_EN.exe+18FEA56|FF8_FR.exe+18FE72E|Binary (Bit 0; Length: 2)|[Ultima (19) / Esthar - Grandidi Forest (41)](drawPoint.md)|
|FF8_EN.exe+18FEA56|FF8_FR.exe+18FE72E|Binary (Bit 2; Length: 2)|[Triple (34) / Esthar - Grandidi Forest (41)](drawPoint.md)|
|FF8_EN.exe+18FEA56|FF8_FR.exe+18FE72E|Binary (Bit 4; Length: 2)|[Confuse (39) / Esthar - Millefeuille Archipelago (42)](drawPoint.md)|
|FF8_EN.exe+18FEA56|FF8_FR.exe+18FE72E|Binary (Bit 6; Length: 2)|[Blind (38) / Esthar - Grandidi Forest (41)](drawPoint.md)|
|FF8_EN.exe+18FEA57|FF8_FR.exe+18FE72F|Binary (Bit 0; Length: 2)|[Quake (17) / Trabia - Winter Island (26)](drawPoint.md)|
|FF8_EN.exe+18FEA57|FF8_FR.exe+18FE72F|Binary (Bit 2; Length: 2)|[Sleep (40) / Trabia - Winter Island (26)](drawPoint.md)|
|FF8_EN.exe+18FEA57|FF8_FR.exe+18FE72F|Binary (Bit 4; Length: 2)|[Silence (41) / Trabia - Winter Island (26)](drawPoint.md)|
|FF8_EN.exe+18FEA57|FF8_FR.exe+18FE72F|Binary (Bit 6; Length: 2)|[Flare (15) / Trabia - Bika Snowfield (32)](drawPoint.md)|
|FF8_EN.exe+18FEA58|FF8_FR.exe+18FE730|Binary (Bit 0; Length: 2)|[Death (43) / Trabia - Albatross Archipelago (31)](drawPoint.md)|
|FF8_EN.exe+18FEA58|FF8_FR.exe+18FE730|Binary (Bit 2; Length: 2)|[Drain (44) / Dollet - Holy Glory Cape (12)](drawPoint.md)|
|FF8_EN.exe+18FEA58|FF8_FR.exe+18FE730|Binary (Bit 4; Length: 2)|[Pain (45) / Dollet - Hasberry Plains (11)](drawPoint.md)|
|FF8_EN.exe+18FEA58|FF8_FR.exe+18FE730|Binary (Bit 6; Length: 2)|[Berserk (46) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA59|FF8_FR.exe+18FE731|Binary (Bit 0; Length: 2)|[Float (47) / Galbadia - Wilburn Hill (21)](drawPoint.md)|
|FF8_EN.exe+18FEA59|FF8_FR.exe+18FE731|Binary (Bit 2; Length: 2)|[Zombie (48) / Galbadia - Rem Archipelago (22)](drawPoint.md)|
|FF8_EN.exe+18FEA59|FF8_FR.exe+18FE731|Binary (Bit 4; Length: 2)|[Meltdown (49) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA59|FF8_FR.exe+18FE731|Binary (Bit 6; Length: 2)|[Zombie (48) / Galbadia - Lallapalooza Canyon (16)](drawPoint.md)|
|FF8_EN.exe+18FEA5A|FF8_FR.exe+18FE732|Binary (Bit 0; Length: 2)|[Tornado (18) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5A|FF8_FR.exe+18FE732|Binary (Bit 2; Length: 2)|[Quake (17) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5A|FF8_FR.exe+18FE732|Binary (Bit 4; Length: 2)|[Meteor (16) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5A|FF8_FR.exe+18FE732|Binary (Bit 6; Length: 2)|[Holy (14) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5B|FF8_FR.exe+18FE733|Binary (Bit 0; Length: 2)|[Flare (15) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5B|FF8_FR.exe+18FE733|Binary (Bit 2; Length: 2)|[Aura (32) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5B|FF8_FR.exe+18FE733|Binary (Bit 4; Length: 2)|[Ultima (19) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5B|FF8_FR.exe+18FE733|Binary (Bit 6; Length: 2)|[Triple (34) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5C|FF8_FR.exe+18FE734|Binary (Bit 0; Length: 2)|[Life (24) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5C|FF8_FR.exe+18FE734|Binary (Bit 2; Length: 2)|[Tornado (18) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5C|FF8_FR.exe+18FE734|Binary (Bit 4; Length: 2)|[Quake (17) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5C|FF8_FR.exe+18FE734|Binary (Bit 6; Length: 2)|[Meteor (16) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5D|FF8_FR.exe+18FE735|Binary (Bit 0; Length: 2)|[Holy (14) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5D|FF8_FR.exe+18FE735|Binary (Bit 2; Length: 2)|[Flare (15) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5D|FF8_FR.exe+18FE735|Binary (Bit 4; Length: 2)|[Aura (32) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5D|FF8_FR.exe+18FE735|Binary (Bit 6; Length: 2)|[Ultima (19) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5E|FF8_FR.exe+18FE736|Binary (Bit 0; Length: 2)|[Triple (34) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5E|FF8_FR.exe+18FE736|Binary (Bit 2; Length: 2)|[Life (24) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5E|FF8_FR.exe+18FE736|Binary (Bit 4; Length: 2)|[Tornado (18) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5E|FF8_FR.exe+18FE736|Binary (Bit 6; Length: 2)|[Quake (17) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5F|FF8_FR.exe+18FE737|Binary (Bit 0; Length: 2)|[Meteor (16) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5F|FF8_FR.exe+18FE737|Binary (Bit 2; Length: 2)|[Holy (14) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5F|FF8_FR.exe+18FE737|Binary (Bit 4; Length: 2)|[Flare (15) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA5F|FF8_FR.exe+18FE737|Binary (Bit 6; Length: 2)|[Aura (32) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA60|FF8_FR.exe+18FE738|Binary (Bit 0; Length: 2)|[Ultima (19) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA60|FF8_FR.exe+18FE738|Binary (Bit 2; Length: 2)|[Triple (34) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA60|FF8_FR.exe+18FE738|Binary (Bit 4; Length: 2)|[Life (24) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA60|FF8_FR.exe+18FE738|Binary (Bit 6; Length: 2)|[Ultima (19) / Island Closest to Heaven (51)](drawPoint.md)|
|FF8_EN.exe+18FEA61|FF8_FR.exe+18FE739|Binary (Bit 0; Length: 2)|[Meteor (16) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA61|FF8_FR.exe+18FE739|Binary (Bit 2; Length: 2)|[Holy (14) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA61|FF8_FR.exe+18FE739|Binary (Bit 4; Length: 2)|[Flare (15) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA61|FF8_FR.exe+18FE739|Binary (Bit 6; Length: 2)|[Aura (32) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA62|FF8_FR.exe+18FE73A|Binary (Bit 0; Length: 2)|[Ultima (19) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA62|FF8_FR.exe+18FE73A|Binary (Bit 2; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA62|FF8_FR.exe+18FE73A|Binary (Bit 4; Length: 2)|[Life (24) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA62|FF8_FR.exe+18FE73A|Binary (Bit 6; Length: 2)|[Meteor (16) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA63|FF8_FR.exe+18FE73B|Binary (Bit 0; Length: 2)|[Holy (14) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA63|FF8_FR.exe+18FE73B|Binary (Bit 2; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA63|FF8_FR.exe+18FE73B|Binary (Bit 4; Length: 2)|[Aura (32) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA63|FF8_FR.exe+18FE73B|Binary (Bit 6; Length: 2)|[Ultima (19) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA64|FF8_FR.exe+18FE73C|Binary (Bit 0; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA64|FF8_FR.exe+18FE73C|Binary (Bit 2; Length: 2)|[Life (24) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA64|FF8_FR.exe+18FE73C|Binary (Bit 4; Length: 2)|[Meteor (16) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA64|FF8_FR.exe+18FE73C|Binary (Bit 6; Length: 2)|[Holy (14) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA65|FF8_FR.exe+18FE73D|Binary (Bit 0; Length: 2)|[Flare (15) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA65|FF8_FR.exe+18FE73D|Binary (Bit 2; Length: 2)|[Aura (32) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA65|FF8_FR.exe+18FE73D|Binary (Bit 4; Length: 2)|[Ultima (19) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA65|FF8_FR.exe+18FE73D|Binary (Bit 6; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA66|FF8_FR.exe+18FE73E|Binary (Bit 0; Length: 2)|[Life (24) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA66|FF8_FR.exe+18FE73E|Binary (Bit 2; Length: 2)|[Meteor (16) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA66|FF8_FR.exe+18FE73E|Binary (Bit 4; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA66|FF8_FR.exe+18FE73E|Binary (Bit 6; Length: 2)|[Flare (15) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA67|FF8_FR.exe+18FE73F|Binary (Bit 0; Length: 2)|[Aura (32) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA67|FF8_FR.exe+18FE73F|Binary (Bit 2; Length: 2)|[Ultima (19) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA67|FF8_FR.exe+18FE73F|Binary (Bit 4; Length: 2)|[Triple (34) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA67|FF8_FR.exe+18FE73F|Binary (Bit 6; Length: 2)|[Life (24) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA68|FF8_FR.exe+18FE740|Binary (Bit 0; Length: 2)|[Meteor (16) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA68|FF8_FR.exe+18FE740|Binary (Bit 2; Length: 2)|[Holy (14) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA68|FF8_FR.exe+18FE740|Binary (Bit 4; Length: 2)|[Flare (15) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA68|FF8_FR.exe+18FE740|Binary (Bit 6; Length: 2)|[Aura (32) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA69|FF8_FR.exe+18FE741|Binary (Bit 0; Length: 2)|[Ultima (19) / Island Closest to Hell (19)](drawPoint.md)|
|FF8_EN.exe+18FEA69|FF8_FR.exe+18FE741|Binary (Bit 2; Length: 2)|[Blizzard (4) / Balamb - Alcauld Plains (1)](drawPoint.md)|
|FF8_EN.exe+18FEA69|FF8_FR.exe+18FE741|Binary (Bit 4; Length: 2)|[Cure (21) / Balamb - Alcauld Plains (1)](drawPoint.md)|
|FF8_EN.exe+18FEA69|FF8_FR.exe+18FE741|Binary (Bit 6; Length: 2)|[Dispel (28) / Galbadia - Monterosa Plateau (15)](drawPoint.md)|
|FF8_EN.exe+18FEA6A|FF8_FR.exe+18FE742|Binary (Bit 0; Length: 2)|[Confuse (39) / Great Plains of Galbadia (20)](drawPoint.md)|
|FF8_EN.exe+18FEA6A|FF8_FR.exe+18FE742|Binary (Bit 2; Length: 2)|[Meteor (16) / Great Plains of Esthar (43)](drawPoint.md)|
|FF8_EN.exe+18FEA6A|FF8_FR.exe+18FE742|Binary (Bit 4; Length: 2)|[Double (33) / Great Plains of Esthar (43)](drawPoint.md)|
|FF8_EN.exe+18FEA6A|FF8_FR.exe+18FE742|Binary (Bit 6; Length: 2)|[Double (33) / Great Plains of Esthar (43)](drawPoint.md)|
|FF8_EN.exe+18FEA6B|FF8_FR.exe+18FE743|Binary (Bit 0; Length: 2)|[Holy (14) / Great Plains of Esthar (43)](drawPoint.md)|
|FF8_EN.exe+18FEA6B|FF8_FR.exe+18FE743|Binary (Bit 2; Length: 2)|[Flare (15) / Esthar - Sollet Mountains (47)](drawPoint.md)|
|FF8_EN.exe+18FEA6B|FF8_FR.exe+18FE743|Binary (Bit 4; Length: 2)|[Ultima (19) / Esthar - Abadan Plains (48)](drawPoint.md)|
|FF8_EN.exe+18FEA6B|FF8_FR.exe+18FE743|Binary (Bit 6; Length: 2)|[Scan (50) / ??? (-1)](drawPoint.md)|
