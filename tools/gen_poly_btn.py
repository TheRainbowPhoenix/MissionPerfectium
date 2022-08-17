
"""
hack is to generate two, to emulate the 2px border

menu btn:
350 x 45, 13, 4
354 x 49, 14, 5

"""




w = 360
h = 55

large_slice = 17
small_slice = 8

"""
Button : 
 ____________________,
/                    |
|                    /
|___________________/
"""
poly = [
    0, 16+small_slice,
    0, h,
    w - large_slice, h,
    w, h-large_slice,
    w, 16,
    small_slice, 16
]

print(' '.join([str(i) for i in poly]))