# The Crater Programming Language & Interpeter
Crater is my personal research for a team research project. The goal of this project was to create a simple programming langauge which will allow for SVG animation. As a team of four, we all made seperate languages and interpeters in order to gain more knowledge in these areas. Crater will be able to support exporting and importing code as well as exporting animations created within the program. Not only will Crater allow for animations, but drawing as well. It will allow for exact meseaurements and creation of shapes. Crater will animate on a fixed-frame basis. 
## To Do List
- [x] Remove SMIL-based animations.
- [x] Add recursive mathamatical expressions (Allow for order of operations rather than evaluating from left to right)
- [x] Allow for variables to be used in statements.
- [ ] Make error handling more useful. Also, I need to catch more errors and handle them.

## Documentation
Here are some simple commands for basic shape drawing,
```
var box >> rectangle (x, y, width, height, red, green, blue);
var circ >> circle (cx, cy, radius, red, green, blue);
var line >> line (x1, y1, x2, y2, red, green, blue, stroke-width);
```

Crater even offers printing out statements and values held in objects,
```
var bird = "Bird";
var cat = "Cat";
print cat + " " + bird;
```
The above statement would print as such,
```
Bird Cat
```

Here is a more advance example of a drawing,
```
var r >> rectangle (0,0,600,450,255,255,255);

var shade >> 25.50;
var color >> 7 * shade;
print "Color: " + color;

var c1 >> circle (375,175,60,color,0,0);
var c2 >> circle (225,175,60,color,0,0);
var c3>> circle (300,275,60,0,0,color);
var cBlack >> circle (300,200,75,0,0,0);
var cWhite >> circle (300,200,50,255,255,255);


var cLeft >> circle (150,175,60,0,0,0);
var cRight >> circle (450,175,60,0,0,0);
var cBottom >> circle (300,350,60,0,0,0);

var head >> circle (300,100,60,0,0,0);
var leftEye >> circle (275,100,10,255,255,255);
var rightEye >> circle (325,100,10,255,255,255);
var mouth >> rectangle (275,115,50,20,255,255,255);
```
