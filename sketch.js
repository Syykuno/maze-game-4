var bo1,bo2,bo3,bo4,bo5,bo6,bo7,bo8,bo9,bo10,bo11,bo12,bo13,bo14,boinv
var lazer
var code=321
var diamondimg,keyimg,thiefimg
var thief, key, diamond
var button
var randomizer,enter

var num = 0;

var enteredcode = 0;

function preload(){
    diamondimg=loadImage("blue diamond final 2.jfif");
    //thiefimg=loadImage("thief image(flipped).jfif");
    keyimg=loadImage("key-image.jfif");
}

function setup(){
    createCanvas(1000,500);
    thief=createSprite(200,100,35,35)
    bo1=createSprite(500,450,690,15);
    bo2=createSprite(500,50,690,15);
    bo3=createSprite(150,307,15,300);
    bo4=createSprite(840,250,15,415);
    bo5=createSprite(250,245,15,220);
    bo6=createSprite(350,120,15,150);
    bo7=createSprite(392,190,100,15);
    bo8=createSprite(392,300,100,15);
    bo9=createSprite(350,320,15,50);
    bo10=createSprite(538,350,590,15)
    bo11=createSprite(250,400,15,100);
    bo12=createSprite(547,130,15,155);
    bo13=createSprite(490,300,100,15);
    bo14=createSprite(547,257,15,100);
    boinv=createSprite(150,105,15,125);
    lazer=createSprite(350,245,5,100);
    button=createSprite(255,200,10,10);
    button.visible=false
    
    lazer.shapeColor="red";
   
    randomizer=createInput("Put A Combination Of 1,2,3")
    enter=createButton("Enter")

   
   diamond=createSprite(750,400,10,10)
    diamond.addImage(diamondimg);
    diamond.scale=0.1

    key=createSprite(750,100,10,10)
    key.addImage(keyimg)
    key.scale=0.3

   

}

function draw() {
background("black")
thief.bounceOff(bo1)
thief.bounceOff(bo2)
thief.bounceOff(bo3)
thief.bounceOff(bo4)
thief.bounceOff(bo5)
thief.bounceOff(bo6)
thief.bounceOff(bo7)
thief.bounceOff(bo8)
thief.bounceOff(bo9)
thief.bounceOff(bo10)
thief.bounceOff(bo11)
thief.bounceOff(bo12)
thief.bounceOff(bo13)
thief.bounceOff(bo14)


if(keyDown(UP_ARROW)){
    thief.y=thief.y-5
}

if(keyDown(DOWN_ARROW)){
    thief.y=thief.y+5
}

if(keyDown(LEFT_ARROW)){
    thief.x=thief.x-5
}

if(keyDown(RIGHT_ARROW)){
    thief.x=thief.x+5
}

randomizer.position(370,100)
enter.position(400,150)

enteredcode = parseInt(randomizer.input.value)
console.log("",enteredcode)

enter.mousePressed(()=>{
    if(enteredcode==code ){
        bo12.destroy()
        }
})

if(thief.isTouching(lazer)){
thief.x=200
thief.y=100
button.visible=true

}

if(thief.isTouching(button)){
lazer.destroy()
}




drawSprites();
}