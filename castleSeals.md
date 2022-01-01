# Ultemecia Castle Seals
1. FF8_EN.exe+18FE73F / FF8_FR.exe+18FE417 (Locked options - In Map; e.g. controls what's unavailable when menuing outside of battle)
2. FF8_EN.exe+18FEB06 / FF8_FR.exe+18FF3C0 (Locked options - In Battle; Seems to be checked at the beginning of the battle only)
3. FF8_EN.exe+18FF6E8 / FF8_FR.exe+18FE7DE (Unlocked Options - Controls post-battle choice list)

Examples:
* 3 = Item(1) + Magic(2) locked. Everything else unlocked.
* 77 = Item(1) + GF(4) + Draw(8) + Resurrection(64) locked. Everything else unlocked.

To save anywhere in the castle, Address #1's value must be less than 128 (you still need to enable the save-anywhere option as well) (Credit: [AwesomeWaves](https://twitch.tv/awesomewaves)).


|Seal|Description|
|-------|-----------|
|+1|Item Locked|
|+2|Magic Locked|
|+4|GF Locked|
|+8|Draw Locked|
|+16|Command Ability Locked|
|+32|Limit Break Locked|
|+64|Resurrection Locked|
|+128|Save Locked|

## Raw Data table
By converting the value to binary, you can see directly which bits are set to true.

In this specific case, "true" or 1 means that particular function is LOCKED. "False" or 0 means it is NOT LOCKED.

|Index|Item|Magic|GF|Draw|Command Ability|Limit Break|Resurrection|Save|WHAT'S LOCKED?|
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|-|
|1|1|0|0|0|0|0|0|0|Item|
|2|0|1|0|0|0|0|0|0|Magic|
|3|1|1|0|0|0|0|0|0|Item, Magic|
|4|0|0|1|0|0|0|0|0|GF|
|5|1|0|1|0|0|0|0|0|Item, GF|
|6|0|1|1|0|0|0|0|0|Magic, GF|
|7|1|1|1|0|0|0|0|0|Item, Magic, GF|
|8|0|0|0|1|0|0|0|0|Draw|
|9|1|0|0|1|0|0|0|0|Item, Draw|
|10|0|1|0|1|0|0|0|0|Magic, Draw|
|11|1|1|0|1|0|0|0|0|Item, Magic, Draw|
|12|0|0|1|1|0|0|0|0|GF, Draw|
|13|1|0|1|1|0|0|0|0|Item, GF, Draw|
|14|0|1|1|1|0|0|0|0|Magic, GF, Draw|
|15|1|1|1|1|0|0|0|0|Item, Magic, GF, Draw|
|16|0|0|0|0|1|0|0|0|Command Ability|
|17|1|0|0|0|1|0|0|0|Item, Command Ability|
|18|0|1|0|0|1|0|0|0|Magic, Command Ability|
|19|1|1|0|0|1|0|0|0|Item, Magic, Command Ability|
|20|0|0|1|0|1|0|0|0|GF, Command Ability|
|21|1|0|1|0|1|0|0|0|Item, GF, Command Ability|
|22|0|1|1|0|1|0|0|0|Magic, GF, Command Ability|
|23|1|1|1|0|1|0|0|0|Item, Magic, GF, Command Ability|
|24|0|0|0|1|1|0|0|0|Draw, Command Ability|
|25|1|0|0|1|1|0|0|0|Item, Draw, Command Ability|
|26|0|1|0|1|1|0|0|0|Magic, Draw, Command Ability|
|27|1|1|0|1|1|0|0|0|Item, Magic, Draw, Command Ability|
|28|0|0|1|1|1|0|0|0|GF, Draw, Command Ability|
|29|1|0|1|1|1|0|0|0|Item, GF, Draw, Command Ability|
|30|0|1|1|1|1|0|0|0|Magic, GF, Draw, Command Ability|
|31|1|1|1|1|1|0|0|0|Item, Magic, GF, Draw, Command Ability|
|32|0|0|0|0|0|1|0|0|Limit Break|
|33|1|0|0|0|0|1|0|0|Item, Limit Break|
|34|0|1|0|0|0|1|0|0|Magic, Limit Break|
|35|1|1|0|0|0|1|0|0|Item, Magic, Limit Break|
|36|0|0|1|0|0|1|0|0|GF, Limit Break|
|37|1|0|1|0|0|1|0|0|Item, GF, Limit Break|
|38|0|1|1|0|0|1|0|0|Magic, GF, Limit Break|
|39|1|1|1|0|0|1|0|0|Item, Magic, GF, Limit Break|
|40|0|0|0|1|0|1|0|0|Draw, Limit Break|
|41|1|0|0|1|0|1|0|0|Item, Draw, Limit Break|
|42|0|1|0|1|0|1|0|0|Magic, Draw, Limit Break|
|43|1|1|0|1|0|1|0|0|Item, Magic, Draw, Limit Break|
|44|0|0|1|1|0|1|0|0|GF, Draw, Limit Break|
|45|1|0|1|1|0|1|0|0|Item, GF, Draw, Limit Break|
|46|0|1|1|1|0|1|0|0|Magic, GF, Draw, Limit Break|
|47|1|1|1|1|0|1|0|0|Item, Magic, GF, Draw, Limit Break|
|48|0|0|0|0|1|1|0|0|Command Ability, Limit Break|
|49|1|0|0|0|1|1|0|0|Item, Command Ability, Limit Break|
|50|0|1|0|0|1|1|0|0|Magic, Command Ability, Limit Break|
|51|1|1|0|0|1|1|0|0|Item, Magic, Command Ability, Limit Break|
|52|0|0|1|0|1|1|0|0|GF, Command Ability, Limit Break|
|53|1|0|1|0|1|1|0|0|Item, GF, Command Ability, Limit Break|
|54|0|1|1|0|1|1|0|0|Magic, GF, Command Ability, Limit Break|
|55|1|1|1|0|1|1|0|0|Item, Magic, GF, Command Ability, Limit Break|
|56|0|0|0|1|1|1|0|0|Draw, Command Ability, Limit Break|
|57|1|0|0|1|1|1|0|0|Item, Draw, Command Ability, Limit Break|
|58|0|1|0|1|1|1|0|0|Magic, Draw, Command Ability, Limit Break|
|59|1|1|0|1|1|1|0|0|Item, Magic, Draw, Command Ability, Limit Break|
|60|0|0|1|1|1|1|0|0|GF, Draw, Command Ability, Limit Break|
|61|1|0|1|1|1|1|0|0|Item, GF, Draw, Command Ability, Limit Break|
|62|0|1|1|1|1|1|0|0|Magic, GF, Draw, Command Ability, Limit Break|
|63|1|1|1|1|1|1|0|0|Item, Magic, GF, Draw, Command Ability, Limit Break|
|64|0|0|0|0|0|0|1|0|Resurrection|
|65|1|0|0|0|0|0|1|0|Item, Resurrection|
|66|0|1|0|0|0|0|1|0|Magic, Resurrection|
|67|1|1|0|0|0|0|1|0|Item, Magic, Resurrection|
|68|0|0|1|0|0|0|1|0|GF, Resurrection|
|69|1|0|1|0|0|0|1|0|Item, GF, Resurrection|
|70|0|1|1|0|0|0|1|0|Magic, GF, Resurrection|
|71|1|1|1|0|0|0|1|0|Item, Magic, GF, Resurrection|
|72|0|0|0|1|0|0|1|0|Draw, Resurrection|
|73|1|0|0|1|0|0|1|0|Item, Draw, Resurrection|
|74|0|1|0|1|0|0|1|0|Magic, Draw, Resurrection|
|75|1|1|0|1|0|0|1|0|Item, Magic, Draw, Resurrection|
|76|0|0|1|1|0|0|1|0|GF, Draw, Resurrection|
|77|1|0|1|1|0|0|1|0|Item, GF, Draw, Resurrection|
|78|0|1|1|1|0|0|1|0|Magic, GF, Draw, Resurrection|
|79|1|1|1|1|0|0|1|0|Item, Magic, GF, Draw, Resurrection|
|80|0|0|0|0|1|0|1|0|Command Ability, Resurrection|
|81|1|0|0|0|1|0|1|0|Item, Command Ability, Resurrection|
|82|0|1|0|0|1|0|1|0|Magic, Command Ability, Resurrection|
|83|1|1|0|0|1|0|1|0|Item, Magic, Command Ability, Resurrection|
|84|0|0|1|0|1|0|1|0|GF, Command Ability, Resurrection|
|85|1|0|1|0|1|0|1|0|Item, GF, Command Ability, Resurrection|
|86|0|1|1|0|1|0|1|0|Magic, GF, Command Ability, Resurrection|
|87|1|1|1|0|1|0|1|0|Item, Magic, GF, Command Ability, Resurrection|
|88|0|0|0|1|1|0|1|0|Draw, Command Ability, Resurrection|
|89|1|0|0|1|1|0|1|0|Item, Draw, Command Ability, Resurrection|
|90|0|1|0|1|1|0|1|0|Magic, Draw, Command Ability, Resurrection|
|91|1|1|0|1|1|0|1|0|Item, Magic, Draw, Command Ability, Resurrection|
|92|0|0|1|1|1|0|1|0|GF, Draw, Command Ability, Resurrection|
|93|1|0|1|1|1|0|1|0|Item, GF, Draw, Command Ability, Resurrection|
|94|0|1|1|1|1|0|1|0|Magic, GF, Draw, Command Ability, Resurrection|
|95|1|1|1|1|1|0|1|0|Item, Magic, GF, Draw, Command Ability, Resurrection|
|96|0|0|0|0|0|1|1|0|Limit Break, Resurrection|
|97|1|0|0|0|0|1|1|0|Item, Limit Break, Resurrection|
|98|0|1|0|0|0|1|1|0|Magic, Limit Break, Resurrection|
|99|1|1|0|0|0|1|1|0|Item, Magic, Limit Break, Resurrection|
|100|0|0|1|0|0|1|1|0|GF, Limit Break, Resurrection|
|101|1|0|1|0|0|1|1|0|Item, GF, Limit Break, Resurrection|
|102|0|1|1|0|0|1|1|0|Magic, GF, Limit Break, Resurrection|
|103|1|1|1|0|0|1|1|0|Item, Magic, GF, Limit Break, Resurrection|
|104|0|0|0|1|0|1|1|0|Draw, Limit Break, Resurrection|
|105|1|0|0|1|0|1|1|0|Item, Draw, Limit Break, Resurrection|
|106|0|1|0|1|0|1|1|0|Magic, Draw, Limit Break, Resurrection|
|107|1|1|0|1|0|1|1|0|Item, Magic, Draw, Limit Break, Resurrection|
|108|0|0|1|1|0|1|1|0|GF, Draw, Limit Break, Resurrection|
|109|1|0|1|1|0|1|1|0|Item, GF, Draw, Limit Break, Resurrection|
|110|0|1|1|1|0|1|1|0|Magic, GF, Draw, Limit Break, Resurrection|
|111|1|1|1|1|0|1|1|0|Item, Magic, GF, Draw, Limit Break, Resurrection|
|112|0|0|0|0|1|1|1|0|Command Ability, Limit Break, Resurrection|
|113|1|0|0|0|1|1|1|0|Item, Command Ability, Limit Break, Resurrection|
|114|0|1|0|0|1|1|1|0|Magic, Command Ability, Limit Break, Resurrection|
|115|1|1|0|0|1|1|1|0|Item, Magic, Command Ability, Limit Break, Resurrection|
|116|0|0|1|0|1|1|1|0|GF, Command Ability, Limit Break, Resurrection|
|117|1|0|1|0|1|1|1|0|Item, GF, Command Ability, Limit Break, Resurrection|
|118|0|1|1|0|1|1|1|0|Magic, GF, Command Ability, Limit Break, Resurrection|
|119|1|1|1|0|1|1|1|0|Item, Magic, GF, Command Ability, Limit Break, Resurrection|
|120|0|0|0|1|1|1|1|0|Draw, Command Ability, Limit Break, Resurrection|
|121|1|0|0|1|1|1|1|0|Item, Draw, Command Ability, Limit Break, Resurrection|
|122|0|1|0|1|1|1|1|0|Magic, Draw, Command Ability, Limit Break, Resurrection|
|123|1|1|0|1|1|1|1|0|Item, Magic, Draw, Command Ability, Limit Break, Resurrection|
|124|0|0|1|1|1|1|1|0|GF, Draw, Command Ability, Limit Break, Resurrection|
|125|1|0|1|1|1|1|1|0|Item, GF, Draw, Command Ability, Limit Break, Resurrection|
|126|0|1|1|1|1|1|1|0|Magic, GF, Draw, Command Ability, Limit Break, Resurrection|
|127|1|1|1|1|1|1|1|0|Item, Magic, GF, Draw, Command Ability, Limit Break, Resurrection|
|128|0|0|0|0|0|0|0|1|Save|
|129|1|0|0|0|0|0|0|1|Item, Save|
|130|0|1|0|0|0|0|0|1|Magic, Save|
|131|1|1|0|0|0|0|0|1|Item, Magic, Save|
|132|0|0|1|0|0|0|0|1|GF, Save|
|133|1|0|1|0|0|0|0|1|Item, GF, Save|
|134|0|1|1|0|0|0|0|1|Magic, GF, Save|
|135|1|1|1|0|0|0|0|1|Item, Magic, GF, Save|
|136|0|0|0|1|0|0|0|1|Draw, Save|
|137|1|0|0|1|0|0|0|1|Item, Draw, Save|
|138|0|1|0|1|0|0|0|1|Magic, Draw, Save|
|139|1|1|0|1|0|0|0|1|Item, Magic, Draw, Save|
|140|0|0|1|1|0|0|0|1|GF, Draw, Save|
|141|1|0|1|1|0|0|0|1|Item, GF, Draw, Save|
|142|0|1|1|1|0|0|0|1|Magic, GF, Draw, Save|
|143|1|1|1|1|0|0|0|1|Item, Magic, GF, Draw, Save|
|144|0|0|0|0|1|0|0|1|Command Ability, Save|
|145|1|0|0|0|1|0|0|1|Item, Command Ability, Save|
|146|0|1|0|0|1|0|0|1|Magic, Command Ability, Save|
|147|1|1|0|0|1|0|0|1|Item, Magic, Command Ability, Save|
|148|0|0|1|0|1|0|0|1|GF, Command Ability, Save|
|149|1|0|1|0|1|0|0|1|Item, GF, Command Ability, Save|
|150|0|1|1|0|1|0|0|1|Magic, GF, Command Ability, Save|
|151|1|1|1|0|1|0|0|1|Item, Magic, GF, Command Ability, Save|
|152|0|0|0|1|1|0|0|1|Draw, Command Ability, Save|
|153|1|0|0|1|1|0|0|1|Item, Draw, Command Ability, Save|
|154|0|1|0|1|1|0|0|1|Magic, Draw, Command Ability, Save|
|155|1|1|0|1|1|0|0|1|Item, Magic, Draw, Command Ability, Save|
|156|0|0|1|1|1|0|0|1|GF, Draw, Command Ability, Save|
|157|1|0|1|1|1|0|0|1|Item, GF, Draw, Command Ability, Save|
|158|0|1|1|1|1|0|0|1|Magic, GF, Draw, Command Ability, Save|
|159|1|1|1|1|1|0|0|1|Item, Magic, GF, Draw, Command Ability, Save|
|160|0|0|0|0|0|1|0|1|Limit Break, Save|
|161|1|0|0|0|0|1|0|1|Item, Limit Break, Save|
|162|0|1|0|0|0|1|0|1|Magic, Limit Break, Save|
|163|1|1|0|0|0|1|0|1|Item, Magic, Limit Break, Save|
|164|0|0|1|0|0|1|0|1|GF, Limit Break, Save|
|165|1|0|1|0|0|1|0|1|Item, GF, Limit Break, Save|
|166|0|1|1|0|0|1|0|1|Magic, GF, Limit Break, Save|
|167|1|1|1|0|0|1|0|1|Item, Magic, GF, Limit Break, Save|
|168|0|0|0|1|0|1|0|1|Draw, Limit Break, Save|
|169|1|0|0|1|0|1|0|1|Item, Draw, Limit Break, Save|
|170|0|1|0|1|0|1|0|1|Magic, Draw, Limit Break, Save|
|171|1|1|0|1|0|1|0|1|Item, Magic, Draw, Limit Break, Save|
|172|0|0|1|1|0|1|0|1|GF, Draw, Limit Break, Save|
|173|1|0|1|1|0|1|0|1|Item, GF, Draw, Limit Break, Save|
|174|0|1|1|1|0|1|0|1|Magic, GF, Draw, Limit Break, Save|
|175|1|1|1|1|0|1|0|1|Item, Magic, GF, Draw, Limit Break, Save|
|176|0|0|0|0|1|1|0|1|Command Ability, Limit Break, Save|
|177|1|0|0|0|1|1|0|1|Item, Command Ability, Limit Break, Save|
|178|0|1|0|0|1|1|0|1|Magic, Command Ability, Limit Break, Save|
|179|1|1|0|0|1|1|0|1|Item, Magic, Command Ability, Limit Break, Save|
|180|0|0|1|0|1|1|0|1|GF, Command Ability, Limit Break, Save|
|181|1|0|1|0|1|1|0|1|Item, GF, Command Ability, Limit Break, Save|
|182|0|1|1|0|1|1|0|1|Magic, GF, Command Ability, Limit Break, Save|
|183|1|1|1|0|1|1|0|1|Item, Magic, GF, Command Ability, Limit Break, Save|
|184|0|0|0|1|1|1|0|1|Draw, Command Ability, Limit Break, Save|
|185|1|0|0|1|1|1|0|1|Item, Draw, Command Ability, Limit Break, Save|
|186|0|1|0|1|1|1|0|1|Magic, Draw, Command Ability, Limit Break, Save|
|187|1|1|0|1|1|1|0|1|Item, Magic, Draw, Command Ability, Limit Break, Save|
|188|0|0|1|1|1|1|0|1|GF, Draw, Command Ability, Limit Break, Save|
|189|1|0|1|1|1|1|0|1|Item, GF, Draw, Command Ability, Limit Break, Save|
|190|0|1|1|1|1|1|0|1|Magic, GF, Draw, Command Ability, Limit Break, Save|
|191|1|1|1|1|1|1|0|1|Item, Magic, GF, Draw, Command Ability, Limit Break, Save|
|192|0|0|0|0|0|0|1|1|Resurrection, Save|
|193|1|0|0|0|0|0|1|1|Item, Resurrection, Save|
|194|0|1|0|0|0|0|1|1|Magic, Resurrection, Save|
|195|1|1|0|0|0|0|1|1|Item, Magic, Resurrection, Save|
|196|0|0|1|0|0|0|1|1|GF, Resurrection, Save|
|197|1|0|1|0|0|0|1|1|Item, GF, Resurrection, Save|
|198|0|1|1|0|0|0|1|1|Magic, GF, Resurrection, Save|
|199|1|1|1|0|0|0|1|1|Item, Magic, GF, Resurrection, Save|
|200|0|0|0|1|0|0|1|1|Draw, Resurrection, Save|
|201|1|0|0|1|0|0|1|1|Item, Draw, Resurrection, Save|
|202|0|1|0|1|0|0|1|1|Magic, Draw, Resurrection, Save|
|203|1|1|0|1|0|0|1|1|Item, Magic, Draw, Resurrection, Save|
|204|0|0|1|1|0|0|1|1|GF, Draw, Resurrection, Save|
|205|1|0|1|1|0|0|1|1|Item, GF, Draw, Resurrection, Save|
|206|0|1|1|1|0|0|1|1|Magic, GF, Draw, Resurrection, Save|
|207|1|1|1|1|0|0|1|1|Item, Magic, GF, Draw, Resurrection, Save|
|208|0|0|0|0|1|0|1|1|Command Ability, Resurrection, Save|
|209|1|0|0|0|1|0|1|1|Item, Command Ability, Resurrection, Save|
|210|0|1|0|0|1|0|1|1|Magic, Command Ability, Resurrection, Save|
|211|1|1|0|0|1|0|1|1|Item, Magic, Command Ability, Resurrection, Save|
|212|0|0|1|0|1|0|1|1|GF, Command Ability, Resurrection, Save|
|213|1|0|1|0|1|0|1|1|Item, GF, Command Ability, Resurrection, Save|
|214|0|1|1|0|1|0|1|1|Magic, GF, Command Ability, Resurrection, Save|
|215|1|1|1|0|1|0|1|1|Item, Magic, GF, Command Ability, Resurrection, Save|
|216|0|0|0|1|1|0|1|1|Draw, Command Ability, Resurrection, Save|
|217|1|0|0|1|1|0|1|1|Item, Draw, Command Ability, Resurrection, Save|
|218|0|1|0|1|1|0|1|1|Magic, Draw, Command Ability, Resurrection, Save|
|219|1|1|0|1|1|0|1|1|Item, Magic, Draw, Command Ability, Resurrection, Save|
|220|0|0|1|1|1|0|1|1|GF, Draw, Command Ability, Resurrection, Save|
|221|1|0|1|1|1|0|1|1|Item, GF, Draw, Command Ability, Resurrection, Save|
|222|0|1|1|1|1|0|1|1|Magic, GF, Draw, Command Ability, Resurrection, Save|
|223|1|1|1|1|1|0|1|1|Item, Magic, GF, Draw, Command Ability, Resurrection, Save|
|224|0|0|0|0|0|1|1|1|Limit Break, Resurrection, Save|
|225|1|0|0|0|0|1|1|1|Item, Limit Break, Resurrection, Save|
|226|0|1|0|0|0|1|1|1|Magic, Limit Break, Resurrection, Save|
|227|1|1|0|0|0|1|1|1|Item, Magic, Limit Break, Resurrection, Save|
|228|0|0|1|0|0|1|1|1|GF, Limit Break, Resurrection, Save|
|229|1|0|1|0|0|1|1|1|Item, GF, Limit Break, Resurrection, Save|
|230|0|1|1|0|0|1|1|1|Magic, GF, Limit Break, Resurrection, Save|
|231|1|1|1|0|0|1|1|1|Item, Magic, GF, Limit Break, Resurrection, Save|
|232|0|0|0|1|0|1|1|1|Draw, Limit Break, Resurrection, Save|
|233|1|0|0|1|0|1|1|1|Item, Draw, Limit Break, Resurrection, Save|
|234|0|1|0|1|0|1|1|1|Magic, Draw, Limit Break, Resurrection, Save|
|235|1|1|0|1|0|1|1|1|Item, Magic, Draw, Limit Break, Resurrection, Save|
|236|0|0|1|1|0|1|1|1|GF, Draw, Limit Break, Resurrection, Save|
|237|1|0|1|1|0|1|1|1|Item, GF, Draw, Limit Break, Resurrection, Save|
|238|0|1|1|1|0|1|1|1|Magic, GF, Draw, Limit Break, Resurrection, Save|
|239|1|1|1|1|0|1|1|1|Item, Magic, GF, Draw, Limit Break, Resurrection, Save|
|240|0|0|0|0|1|1|1|1|Command Ability, Limit Break, Resurrection, Save|
|241|1|0|0|0|1|1|1|1|Item, Command Ability, Limit Break, Resurrection, Save|
|242|0|1|0|0|1|1|1|1|Magic, Command Ability, Limit Break, Resurrection, Save|
|243|1|1|0|0|1|1|1|1|Item, Magic, Command Ability, Limit Break, Resurrection, Save|
|244|0|0|1|0|1|1|1|1|GF, Command Ability, Limit Break, Resurrection, Save|
|245|1|0|1|0|1|1|1|1|Item, GF, Command Ability, Limit Break, Resurrection, Save|
|246|0|1|1|0|1|1|1|1|Magic, GF, Command Ability, Limit Break, Resurrection, Save|
|247|1|1|1|0|1|1|1|1|Item, Magic, GF, Command Ability, Limit Break, Resurrection, Save|
|248|0|0|0|1|1|1|1|1|Draw, Command Ability, Limit Break, Resurrection, Save|
|249|1|0|0|1|1|1|1|1|Item, Draw, Command Ability, Limit Break, Resurrection, Save|
|250|0|1|0|1|1|1|1|1|Magic, Draw, Command Ability, Limit Break, Resurrection, Save|
|251|1|1|0|1|1|1|1|1|Item, Magic, Draw, Command Ability, Limit Break, Resurrection, Save|
|252|0|0|1|1|1|1|1|1|GF, Draw, Command Ability, Limit Break, Resurrection, Save|
|253|1|0|1|1|1|1|1|1|Item, GF, Draw, Command Ability, Limit Break, Resurrection, Save|
|254|0|1|1|1|1|1|1|1|Magic, GF, Draw, Command Ability, Limit Break, Resurrection, Save|
|255|1|1|1|1|1|1|1|1|Item, Magic, GF, Draw, Command Ability, Limit Break, Resurrection, Save|
