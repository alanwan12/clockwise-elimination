# Clockwise Elimination

A small visualization of a counting-out puzzle: numbers 1 to N are arranged in a circle and every other number is erased, going clockwise, until one is left.

## What it does
- Places the numbers `1..13` around a circle on a canvas (`endNum = 13` in `clockwise.js`).
- Precomputes the elimination order, then erases one number per second by painting over it in white.
- Logs the remaining number and the erase order to the browser console.

For 13 numbers, running the same loop gives this erase order: `1, 3, 5, 7, 9, 11, 13, 4, 8, 12, 6, 2`, leaving **10**.

## Run it
Open `clockwise.html` in a browser (open the developer console to see the logged result). Change `endNum` in `clockwise.js` to try other sizes.

## Files
- `clockwise.html` - canvas
- `clockwise.js` - elimination logic and drawing
