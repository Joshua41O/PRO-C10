var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var calle1=createSprite(190,120,420,3);
var calle2=createSprite(190,260,420,3);
var car1=createSprite(100,130,10,10);
var car2=createSprite(215,130,10,10);
var car3=createSprite(165,250,10,10);
var car4=createSprite(270,250,10,10);
var car5=createSprite(310,130,10,10);
var comienzo=createSprite(20,190,90,140);
var lentes=createSprite(380,190,80,140);
var sam=createSprite(20,190,10,10);


car1.shapeColor="cyan";
car2.shapeColor="cyan";
car3.shapeColor="cyan";
car4.shapeColor="cyan";
car5.shapeColor="cyan";
comienzo.shapeColor="cyan";
lentes.shapeColor="yellow";
sam.shapeColor="red";

car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;
car5.velocityY=8;

function draw() {
  background("white")
    car1.bounceOff(calle1);
  car1.bounceOff(calle2);
  car2.bounceOff(calle1);
  car2.bounceOff(calle2);
  car3.bounceOff(calle1);
  car3.bounceOff(calle2);
  car4.bounceOff(calle1);
  car4.bounceOff(calle2);
  car5.bounceOff(calle1);
  car5.bounceOff(calle2);
 
  if (keyDown(RIGHT_ARROW)){
   sam.x=sam.x+2;
  }
   if (keyDown(LEFT_ARROW)){
   sam.x=sam.x-2;
  }
  if (sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)|| sam.isTouching(car4)|| sam.isTouching(car5)){
    sam.x=20;
    sam.y-190;
  }
  

  
  drawSprites()
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
