# Reckoner

Reckoner is a device which is used for mathematical calculation.

## Prerequisite
- HTML5
- CSS3
- JavaScript

## Brief Description
Here is a Reckoner which can perform different type of mathematical Calculations like Arithmetic Operations, Trigonometric, factorial, etc.

## Overview
### Before Entering Values
![](https://github.com/ShwetaDhame/Reckoner.git.io/blob/main/Capture.JPG)
### After Entering Values
![](https://github.com/ShwetaDhame/Reckoner.git.io/blob/main/Capture1.JPG)
### Result
![](https://github.com/ShwetaDhame/Reckoner.git.io/blob/main/Capture2.JPG)

## HTML5 Code
```bash
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Scientific Calculator</title>
</head>
<body>
    
      <div class="container">
        <h2>Scientific Calculator</h2>
            <div class="display">
                <input id="screen" type="text" placeholder="0">
            </div>
            <div class="btns">
                <div class="row">
                    <button onclick="backspc()">CE</button>
                    <button onclick="fact()">x!</button>
                    <button class="btn">(</button>
                    <button class="btn">)</button>
                    <button class="btn">%</button>
                    <button onclick="screen.value=''" style="color: red;">AC</button>
                </div>
                <div class="row">
                    <button onclick="sin()">sin</button>
                    <button onclick="pi()">𝝅</button>
                    <button class="btn">7</button>
                    <button class="btn">8</button>
                    <button class="btn">9</button>
                    <button class="btn">/</button>
                </div>
                <div class="row">
                    <button onclick="cos()">cos</button>
                    <button onclick="log()">log</button>
                    <button class="btn">4</button>
                    <button class="btn">5</button>
                    <button class="btn">6</button>
                    <button class="btn">*</button>
                </div>
                <div class="row">
                    <button onclick="tan()">tan</button>
                    <button onclick="sqrt()">√</button>
                    <button class="btn">1</button>
                    <button class="btn">2</button>
                    <button class="btn">3</button>
                    <button class="btn">-</button>
                </div>
                <div class="row">
                    <button onclick="e()">e</button>
                    <button class="btn">X<span style="position: relative; bottom: .4em;">y</span></button>
                    <button class="btn">0</button>
                    <button class="btn">.</button>
                    <button onclick="screen.value=eval(screen.value)">=</button>
                    <button class="btn">+</button>
                </div>
            </div>
      </div>
<script src="script.js"></script>
</body>
</html>
```

## CSS3 File

```
body{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f5f5f5;
}
.container{
    width: 45%;
    height: vh;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 12px 12px 20px hsl(180, 1%, 67%),
                -12px -12px 20px #cccaca;
}
h2{
    text-align: center;
    align-items: center;
    color: rgb(73, 72, 72);
}
.display #screen{
    width: 97%;
    height: 70px;
    font-size: 35px;
    outline: none;
    border: none;
    text-align: right;
    padding: .5rem;
    background: #ecf0f3;
    border-radius: 6px;
    box-shadow: inset 8px 8px 8px #7b7d7e,
                inset -8px -8px 8px #ffffff;
}
.btns{
    width: 100%;
    margin-top: 1.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.btns .row button{
    width: 80px;
    height: 30px;
    font-size: 16px;
    border: none;
    outline: none;
    margin: 5px;
    border-radius: 4px;
    box-shadow: 5px 5px 8px #00000020,
                -5px -5px 8px #ffffff;
    transition: 0.1s;
}
.btns .row button:hover{
    box-shadow: inset 5px 5px 8px rgba(16,16,16,.1),
                inset -5px -5px 8px #ffffff;
    background: #fff;
}
```
## JavaScript
```
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext = e.target.innerText;
        screen.value+=btntext;
    });
}
function sin()
{
    screen.value = Math.sin(screen.value);
}
function cos()
{
    screen.value = Math.cos(screen.value);
}
function tan()
{
    screen.value = Math.tan(screen.value);
}
function pow()
{
    screen.value = Math.pow(screen.value);
}
function sqrt()
{
    screen.value = Math.sqrt(screen.value);
}
function log()
{
    screen.value = Math.log(screen.value);
}
function pi()
{
    screen.value = 3.14159265359;
}
function e()
{
    screen.value = 2.71828182846;
}
function fact()
{
    var i,num,f;
    f=1
    num=sreen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
function backspc()
{
    screen.value = screen.value.substr(0,screen.value.length-1);
}
```

## Thanking You!!
