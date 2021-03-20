# Button Byte Map
This is a representation of which button is pressed on a controller/keyboard. The keys are split into 2 bytes.

## Byte 1
|Bit value|Button|
|----|----|
|+1|L3 
|+2|R3|
|+4|L1|
|+8|R1|
|+16|Circle|
|+32|Triangle|
|+64|X|
|+128|Square|

## Byte 2
|Bit value|Button|
|----|----|
|+1|Select|
|+8|Start|
|+16|Up|
|+32|Right|
|+48|Up Right|
|+64|Down|
|+96|Down Right|
|+128|Left|
|+144|Up Left|
|+192|Down Left|