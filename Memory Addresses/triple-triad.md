# Triple Triad Rules (Reference)
The card rules for a specific region use bit masking (I think that's what it's called)
In other words, each byte in the address represents whether that specific rule is on or off.

Examples:
* 3 = open(1) + same(2)
* 77 = open(1) + plus(4) + random(8) + same wall(64)

*There's no value for Combo. Any time Same or Plus is active, Combo is also automatically active.*

|Rule ID|Description|
|-------|-----------|
|+1|Open|
|+2|Same|
|+4|Plus|
|+8|Random|
|+16|Sudden death|
|+32|Retry (unused)|
|+64|Same Wall|
|+128|Elemental|



# Triple Triad Trade Rules (Reference)
|Rule ID|Description|
|-------|-----------|
|1|One|
|2|Diff|
|3|Direct|
|4|All|
|5|(empty)|
|6|Used Up (unused)|
