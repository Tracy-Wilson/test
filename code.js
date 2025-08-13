

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["64cc40c3-8add-4630-b450-921a74d2e3a0","52a9f013-882c-42b8-b6db-92bd72b715c8","4e833cf8-a30d-4141-87ae-d0e27fdbb2a4","1485d84e-ce12-42b3-bdd0-dd9826a6bf87","2466eb12-e292-4771-8834-44dca5f11b07","ddc448b4-ff5d-4870-8e20-54e848b461ab","4cd92343-2443-4e19-9326-d42f42d5258e","5137542c-03ee-422c-8f1d-48bf802337ed","b0a15b95-5314-4e9d-853c-9f2a725f4485","e052f9f3-f64b-4658-8aea-d603cac34321","10aaa642-90b4-430a-ba46-5a51ceaefb1e","3ed7033b-5cce-46f1-b5d8-dadb16091c3b","c39c09df-0469-42ff-8a4c-7150c48abbb6","79cba443-e451-45b6-a3c3-5b48a5cff9cb","29ac1f0c-7a20-49b8-ad4d-7bb8a2dce22b","15c1a37e-fd20-495d-8a42-e1accfbe0218","e8d938aa-0426-44d7-a7da-b26d1c79d782","0b1ae55b-510c-4e71-afc0-560193935e2e","960884fe-70a5-4fb9-9c2d-a98232b94aac","7e8975c9-9a80-401c-8c99-028e62de4c1f"],"propsByKey":{"64cc40c3-8add-4630-b450-921a74d2e3a0":{"name":"player","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":4,"looping":true,"frameDelay":12,"version":"I.lW5S2jBeehUir.m8lN_PGeiSaTldP1","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/64cc40c3-8add-4630-b450-921a74d2e3a0.png"},"52a9f013-882c-42b8-b6db-92bd72b715c8":{"name":"zombie","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":4,"looping":true,"frameDelay":12,"version":"9m3iwSSdXbyX.6idyhjYP5XoZ0iKmnMa","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/52a9f013-882c-42b8-b6db-92bd72b715c8.png"},"4e833cf8-a30d-4141-87ae-d0e27fdbb2a4":{"name":"skeleton","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":4,"looping":true,"frameDelay":12,"version":"jVewrg1i1IKjJT2xjTTVx8tifYpuGQxF","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/4e833cf8-a30d-4141-87ae-d0e27fdbb2a4.png"},"1485d84e-ce12-42b3-bdd0-dd9826a6bf87":{"name":"pumpkin","sourceUrl":null,"frameSize":{"x":32,"y":32},"frameCount":4,"looping":true,"frameDelay":12,"version":"o4IGeivhh_93gMqBfDP7iqvASvF6Puse","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/1485d84e-ce12-42b3-bdd0-dd9826a6bf87.png"},"2466eb12-e292-4771-8834-44dca5f11b07":{"name":"title","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"W.y6oS6vxjDY3tpjQkCTPKdxkJ9Eptv4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2466eb12-e292-4771-8834-44dca5f11b07.png"},"ddc448b4-ff5d-4870-8e20-54e848b461ab":{"name":"Pistol","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"v6xpujQo4xOtbTd5I7IuO9pkd.sCUGYk","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/ddc448b4-ff5d-4870-8e20-54e848b461ab.png"},"4cd92343-2443-4e19-9326-d42f42d5258e":{"name":"TacticalPistol","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"7KEpujrGIRfPdUxtdLguCXYUsRWqbLWy","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/4cd92343-2443-4e19-9326-d42f42d5258e.png"},"5137542c-03ee-422c-8f1d-48bf802337ed":{"name":"SMG","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"NUNVJBTJ0X_nnRmbINpdQrFOartgSHgT","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/5137542c-03ee-422c-8f1d-48bf802337ed.png"},"b0a15b95-5314-4e9d-853c-9f2a725f4485":{"name":"DrumGun","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"PTtjV8VdEU5VKQs.JdamMyYk_GVduihY","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/b0a15b95-5314-4e9d-853c-9f2a725f4485.png"},"e052f9f3-f64b-4658-8aea-d603cac34321":{"name":"ScrappyRifle","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"5GG1VT6a5q9UoS04Rm475tFkHSUbla4k","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/e052f9f3-f64b-4658-8aea-d603cac34321.png"},"10aaa642-90b4-430a-ba46-5a51ceaefb1e":{"name":"InfantryRifle","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"1ZQ7mvm8RID7SSwbLo_YKpIOxjqYqxeX","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/10aaa642-90b4-430a-ba46-5a51ceaefb1e.png"},"3ed7033b-5cce-46f1-b5d8-dadb16091c3b":{"name":"AssaultRifle","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"Yqneg_XuXDcC2uL87NsU41nkQiPKW6wQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/3ed7033b-5cce-46f1-b5d8-dadb16091c3b.png"},"c39c09df-0469-42ff-8a4c-7150c48abbb6":{"name":"Minigun","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"yPskczU59xfplO9QGFctbuN7tiM6lXNj","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/c39c09df-0469-42ff-8a4c-7150c48abbb6.png"},"79cba443-e451-45b6-a3c3-5b48a5cff9cb":{"name":"SniperRifle","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"giTw6QQdamPK_GPZObkJmivM3PA7kol_","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/79cba443-e451-45b6-a3c3-5b48a5cff9cb.png"},"29ac1f0c-7a20-49b8-ad4d-7bb8a2dce22b":{"name":"Shotgun","sourceUrl":null,"frameSize":{"x":16,"y":8},"frameCount":3,"looping":true,"frameDelay":12,"version":"kLpjyRfwUFRP_cxZ0oSc3xJx20jtGhdL","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":24},"rootRelativePath":"assets/29ac1f0c-7a20-49b8-ad4d-7bb8a2dce22b.png"},"15c1a37e-fd20-495d-8a42-e1accfbe0218":{"name":"normalbullet","sourceUrl":null,"frameSize":{"x":4,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"2XyQ0TkXAY.AqcqWuUdwZx8yQIsqtMrj","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":2},"rootRelativePath":"assets/15c1a37e-fd20-495d-8a42-e1accfbe0218.png"},"e8d938aa-0426-44d7-a7da-b26d1c79d782":{"name":"shotgunbullet","sourceUrl":null,"frameSize":{"x":4,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"xgZR23CXzml9NA9ljUqSm1pdnDBd60T8","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":3},"rootRelativePath":"assets/e8d938aa-0426-44d7-a7da-b26d1c79d782.png"},"0b1ae55b-510c-4e71-afc0-560193935e2e":{"name":"betterbullet","sourceUrl":null,"frameSize":{"x":6,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"RPsFpwFih12z9rh9bDZ24Imxm8_VMesX","loadedFromSource":true,"saved":true,"sourceSize":{"x":6,"y":3},"rootRelativePath":"assets/0b1ae55b-510c-4e71-afc0-560193935e2e.png"},"960884fe-70a5-4fb9-9c2d-a98232b94aac":{"name":"evenbetterbullet","sourceUrl":null,"frameSize":{"x":9,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"9QVvoB6skhALhfNAflzWOGbOO.lIeG0.","loadedFromSource":true,"saved":true,"sourceSize":{"x":9,"y":5},"rootRelativePath":"assets/960884fe-70a5-4fb9-9c2d-a98232b94aac.png"},"7e8975c9-9a80-401c-8c99-028e62de4c1f":{"name":"sniperbullet","sourceUrl":null,"frameSize":{"x":15,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"IJGup41L6swNQ82yHA4ugfRRUFx0yiJM","loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":8},"rootRelativePath":"assets/7e8975c9-9a80-401c-8c99-028e62de4c1f.png"}}};
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

//(future name)





//basic vars
var health = 100;
var score = 0;
var money = 0;
//var speed = 2; figured out its harder with movement controls for player so no speed needed
var cw = 0;
var time = 0;
var ft = 0;
var zt = 0;
var inventory = 0;
var si = 0;
var st = 0;
var pt = 0;
var multiplier = 1;

//group vars
var bullets = createGroup();
var normalbullets = createGroup();
var betterbullets = createGroup();
var evenbetterbullets = createGroup();
var sniperbullets = createGroup();
var shotgunbullets = createGroup();
var enemies = createGroup();
var zombies = createGroup();
var skeletons = createGroup();
var pumpkins = createGroup();
var rightzombies = createGroup();
var leftzombies = createGroup();
var upzombies = createGroup();
var downzombies = createGroup();
var rightskeletons = createGroup();
var leftskeletons = createGroup();
var upskeletons = createGroup();
var downskeletons = createGroup();
var rightpumpkins = createGroup();
var leftpumpkins = createGroup();
var uppumpkins = createGroup();
var downpumpkins = createGroup();


//list vars
var weapons = [
"Pistol", 
"TacticalPistol", 
"ScrappyRifle", 
"InfantryRifle", 
"AssaultRifle", 
"SMG", 
"DrumGun",
"Shotgun",
"Minigun",
"SniperRifle",
];                                 
var enemyhealth = [];
var sniperbullethealth = [];
var prices = [
0, 
10, 
25, 
50, 
100, 
200, 
500,
750,
1000,
1500,
];

//sprite vars
var player = createSprite(200,200);
player.setAnimation("player");
player.pause();
player.setCollider("rectangle", 0, 0, 10, 15, 0);
player.debug = false;
var weapon = createSprite(player.x, player.y);
weapon.setAnimation(weapons[cw]);
weapon.pause();

//world frame rate
World.frameRate = 60;

//camera
camera.zoom = 1.5;

//main function
function draw() {
  shtgn();
  background(rgb(97, 97, 97));
  if (keyWentDown("i")){
    inventory = 1;
  }
  if (inventory === 1){
    shop();
  }else if (health > 0){
    playermovement();
    cameraa();
    shoot();
    zombie();
    damagingenemies();
    enemiesattacking();
    if (score >= 250 && score <= 740){
      zombie();
    }
    if (score >= 750 && score <= 9990){
      skeleton();
    }
    if (score >= 2500 && score <= 4990){
      zombie();
    }
    if (score >= 5000){
      skeleton();
    }
    if (score >= 10000){
      pumpkin();
    }
    drawSprites();
    stats();
  }
  drawSprites();
}

//side functions
//player movement function
function playermovement(){
  if (keyDown("left")){
    weapon.x = player.x - 15;
    weapon.y = player.y + 3;
    player.setFrame(0);
    weapon.setFrame(0);
    weapon.visible = true;
    ft = 2;
  }
  if (keyDown("right")){
    weapon.x = player.x + 15;
    weapon.y = player.y + 3;
    player.setFrame(1);
    weapon.setFrame(1);
    weapon.visible = true;
    ft = 0;
  }
  if (keyDown("up")){
    weapon.x = player.x - 5;
    weapon.y = player.y - 6;
    player.setFrame(2);
    weapon.visible = false;
    ft = 3;
  }
  if (keyDown("down")){
    weapon.x = player.x + 5;
    weapon.y = player.y + 6;
    player.setFrame(3);
    weapon.setFrame(2);
    weapon.visible = true;
    ft = 1;
  }
}

//camera function
function cameraa(){
  camera.x = player.x;
  camera.y = player.y;
}

//shooting function
function shoot(){
  //basic value for weapon fire time
  time = time + 1;
  //not semi-automatics/automatics
  //pistol
  if (keyWentDown("space") && weapons[cw] === "Pistol" && time > 12){
    normalbullethandling();
  }
  //infantry rifle
  if (keyWentDown("space") && weapons[cw] === "InfantryRifle" && time > 10){
    normalbullethandling();
  }
  //sniper rifle
  if (keyWentDown("space") && weapons[cw] === "SniperRifle" && time > 26){
    sniperbullethandling();
  }
  //shotgun
  if (keyWentDown("space") && weapons[cw] === "Shotgun" && time > 42){
    shotgunbullethandling();
  }
  //weird piece for better bullet working
  if (time >= 40){
    shotgunbullets.destroyEach();
  }
  
  //automatic weapons / semi-automatic weapons
  if (keyDown("space")){
    //tactical pistol
    if (weapons[cw] === "TacticalPistol" && time > 18){
      normalbullethandling();
    }
    //scrappy rifle
    if (weapons[cw] === "ScrappyRifle" && time > 15){
      normalbullethandling();
    }
    //assault rifle
    if (weapons[cw] === "AssaultRifle" && time > 17){
      evenbetterbullethandling();
    }
    //smg
    if (weapons[cw] === "SMG" && time > 12){
      betterbullethandling();
    }
    //drum gun
    if (weapons[cw] === "DrumGun" && time > 11){
      betterbullethandling();
    }
    //minigun
    if (weapons[cw] === "Minigun" && time > 4){
      betterbullethandling();
    }
  }
}

//zombies function
function zombie(){
  //spawn
  zt = zt + 1;
  if (zt > randomNumber(50,200)){
    var area = randomNumber(1,4);
    if (area === 1){
      var enemyr = createSprite(player.x + 150, player.y);
      enemyr.setAnimation("zombie");
      enemyr.pause();
      enemyr.setFrame(0);
      appendItem(enemyhealth, 10 * multiplier);
      rightzombies.add(enemyr);
      zombies.add(enemyr);
      enemies.add(enemyr);
      zt = 0;
    }else if (area === 2){
      var enemyu = createSprite(player.x, player.y + 150);
      enemyu.setAnimation("zombie");
      enemyu.pause();
      enemyu.setFrame(2);
      upzombies.add(enemyu);
      zombies.add(enemyu);
      appendItem(enemyhealth, 10 * multiplier);
      enemies.add(enemyu);
      zt = 0;
    }else if (area === 3){
      var enemyl = createSprite(player.x - 150, player.y);
      enemyl.setAnimation("zombie");
      enemyl.pause();
      enemyl.setFrame(1);
      appendItem(enemyhealth, 10 * multiplier);
      leftzombies.add(enemyl);
      zombies.add(enemyl);
      enemies.add(enemyl);
      zt = 0;
    }else if (area === 4){
      var enemyd = createSprite(player.x, player.y - 150);
      enemyd.setAnimation("zombie");
      enemyd.pause();
      enemyd.setFrame(3);
      appendItem(enemyhealth, 10 * multiplier);
      downzombies.add(enemyd);
      zombies.add(enemyd);
      enemies.add(enemyd);
      zt = 0;
    }
  }
  //movement
  //zombies going up
  for (var i = 0; i < upzombies.length; i++){
    if (upzombies[i].x != player.x){
      upzombies[i].x = player.x;
    }
    if (i > upzombies.length){
      i = 0;
    }
  }
  upzombies.setVelocityYEach(-0.5);
  //zombies going down
  for (var I = 0; I < downzombies.length; I++){
    if (downzombies[I].x != player.x){
      downzombies[I].x = player.x;
    }
    if (I > downzombies.length){
      I = 0;
    }
  }
  downzombies.setVelocityYEach(0.5);
  //zombies going left
  for (var ii = 0; ii < leftzombies.length; ii++){
    if (leftzombies[ii].y != player.y){
      leftzombies[ii].y = player.y;
    }
    if (ii > leftzombies.length){
      ii = 0;
    }
  }
  leftzombies.setVelocityXEach(0.5);
  //zombies going right
  for (var II = 0; II < rightzombies.length; II++){
    if (rightzombies[II].y != player.y){
      rightzombies[II].y = player.y;
    }
    if (II > rightzombies.length){
      II = 0;
    }
  }
  rightzombies.setVelocityXEach(-0.5);
}

//skeletons function
function skeleton(){
  //spawn
  st = st + 1;
  if (st > randomNumber(75,300)){
    var area = randomNumber(1,4);
    if (area === 1){
      var enemyr = createSprite(player.x + 150, player.y);
      enemyr.setAnimation("skeleton");
      enemyr.pause();
      enemyr.setFrame(0);
      appendItem(enemyhealth, 25 * multiplier);
      rightskeletons.add(enemyr);
      skeletons.add(enemyr);
      enemies.add(enemyr);
      st = 0;
    }else if (area === 2){
      var enemyu = createSprite(player.x, player.y + 150);
      enemyu.setAnimation("skeleton");
      enemyu.pause();
      enemyu.setFrame(2);
      upskeletons.add(enemyu);
      skeletons.add(enemyu);
      appendItem(enemyhealth, 25 * multiplier);
      enemies.add(enemyu);
      st = 0;
    }else if (area === 3){
      var enemyl = createSprite(player.x - 150, player.y);
      enemyl.setAnimation("skeleton");
      enemyl.pause();
      enemyl.setFrame(1);
      appendItem(enemyhealth, 25 * multiplier);
      leftskeletons.add(enemyl);
      skeletons.add(enemyl);
      enemies.add(enemyl);
      st = 0;
    }else if (area === 4){
      var enemyd = createSprite(player.x, player.y - 150);
      enemyd.setAnimation("skeleton");
      enemyd.pause();
      enemyd.setFrame(3);
      appendItem(enemyhealth, 25 * multiplier);
      downskeletons.add(enemyd);
      skeletons.add(enemyd);
      enemies.add(enemyd);
      st = 0;
    }
  }
  //movement
  //zombies going up
  for (var i = 0; i < upskeletons.length; i++){
    if (upskeletons[i].x != player.x){
      upskeletons[i].x = player.x;
    }
    if (i > upskeletons.length){
      i = 0;
    }
  }
  upskeletons.setVelocityYEach(-0.6);
  //zombies going down
  for (var I = 0; I < downskeletons.length; I++){
    if (downskeletons[I].x != player.x){
      downskeletons[I].x = player.x;
    }
    if (I > downskeletons.length){
      I = 0;
    }
  }
  downskeletons.setVelocityYEach(0.6);
  //zombies going left
  for (var ii = 0; ii < leftskeletons.length; ii++){
    if (leftskeletons[ii].y != player.y){
      leftskeletons[ii].y = player.y;
    }
    if (ii > leftskeletons.length){
      ii = 0;
    }
  }
  leftskeletons.setVelocityXEach(0.6);
  //zombies going right
  for (var II = 0; II < rightskeletons.length; II++){
    if (rightskeletons[II].y != player.y){
      rightskeletons[II].y = player.y;
    }
    if (II > rightskeletons.length){
      II = 0;
    }
  }
  rightskeletons.setVelocityXEach(-0.6);
}

//pumpkins function
function pumpkin(){
  //spawn
  pt = pt + 1;
  if (pt > randomNumber(100,400)){
    var area = randomNumber(1,4);
    if (area === 1){
      var enemyr = createSprite(player.x + 150, player.y);
      enemyr.setAnimation("pumpkin");
      enemyr.pause();
      enemyr.setFrame(0);
      appendItem(enemyhealth, 50 * multiplier);
      rightpumpkins.add(enemyr);
      pumpkins.add(enemyr);
      enemies.add(enemyr);
      pt = 0;
    }else if (area === 2){
      var enemyu = createSprite(player.x, player.y + 150);
      enemyu.setAnimation("pumpkin");
      enemyu.pause();
      enemyu.setFrame(2);
      uppumpkins.add(enemyu);
      pumpkins.add(enemyu);
      appendItem(enemyhealth, 50 * multiplier);
      enemies.add(enemyu);
      pt = 0;
    }else if (area === 3){
      var enemyl = createSprite(player.x - 150, player.y);
      enemyl.setAnimation("pumpkin");
      enemyl.pause();
      enemyl.setFrame(1);
      appendItem(enemyhealth, 50 * multiplier);
      leftpumpkins.add(enemyl);
      pumpkins.add(enemyl);
      enemies.add(enemyl);
      pt = 0;
    }else if (area === 4){
      var enemyd = createSprite(player.x, player.y - 150);
      enemyd.setAnimation("pumpkin");
      enemyd.pause();
      enemyd.setFrame(3);
      appendItem(enemyhealth, 50 * multiplier);
      downpumpkins.add(enemyd);
      pumpkins.add(enemyd);
      enemies.add(enemyd);
      pt = 0;
    }
  }
  //movement
  //zombies going up
  for (var i = 0; i < uppumpkins.length; i++){
    if (uppumpkins[i].x != player.x){
      uppumpkins[i].x = player.x;
    }
    if (i > uppumpkins.length){
      i = 0;
    }
  }
  uppumpkins.setVelocityYEach(-0.8);
  //zombies going down
  for (var I = 0; I < downpumpkins.length; I++){
    if (downpumpkins[I].x != player.x){
      downpumpkins[I].x = player.x;
    }
    if (I > downpumpkins.length){
      I = 0;
    }
  }
  downpumpkins.setVelocityYEach(0.8);
  //zombies going left
  for (var ii = 0; ii < leftpumpkins.length; ii++){
    if (leftpumpkins[ii].y != player.y){
      leftpumpkins[ii].y = player.y;
    }
    if (ii > leftpumpkins.length){
      ii = 0;
    }
  }
  leftpumpkins.setVelocityXEach(0.8);
  //zombies going right
  for (var II = 0; II < rightpumpkins.length; II++){
    if (rightpumpkins[II].y != player.y){
      rightpumpkins[II].y = player.y;
    }
    if (II > rightskeletons.length){
      II = 0;
    }
  }
  rightpumpkins.setVelocityXEach(-0.8);
}

//function to better deal with damage
function damagingenemies(){
      if (enemies.isTouching(bullets)){
        for (var ii = 0; ii < enemies.length; ii++){
          if (normalbullets[0] != undefined){
            if (enemies[ii].isTouching(normalbullets)){
              for (var nbz = 0; nbz < normalbullets.length; nbz++){
                if (normalbullets[nbz].isTouching(enemies[ii])){
                  enemyhealth[ii] = enemyhealth[ii] - 5;
                  normalbullets[nbz].destroy();
                  if (enemyhealth[ii] <= 0){
                    removeItem(enemyhealth, ii);
                    if (zombies.contains(enemies[ii])){
                      score = score + (10 * multiplier);
                      money = money + (1 * multiplier);
                    }
                    if (skeletons.contains(enemies[ii])){
                      score = score + (20 * multiplier);
                      money = money + (2 * multiplier);
                    }
                    if (pumpkins.contains(enemies[ii])){
                      score = score + (30 * multiplier);
                      money = money + (3 * multiplier);
                    }
                    enemies[ii].destroy();
                  }
                }
              }
            }
          }
          if (betterbullets[0] != undefined){
            if (enemies[ii].isTouching(betterbullets)){
              for (var bbz = 0; bbz < betterbullets.length; bbz++){
                if (betterbullets[bbz].isTouching(enemies[ii])){
                  enemyhealth[ii] = enemyhealth[ii] - 8;
                  betterbullets[bbz].destroy();
                  if (enemyhealth[ii] <= 0){
                    removeItem(enemyhealth, ii);
                    if (zombies.contains(enemies[ii])){
                      score = score + (10 * multiplier);
                      money = money + (1 * multiplier);
                    }
                    if (skeletons.contains(enemies[ii])){
                      score = score + (20 * multiplier);
                      money = money + (2 * multiplier);
                    }
                    if (pumpkins.contains(enemies[ii])){
                      score = score + (30 * multiplier);
                      money = money + (3 * multiplier);
                    }
                    enemies[ii].destroy();
                  }
                }
              }
            }
          }
          if (evenbetterbullets[0] != undefined){
            if (enemies[ii].isTouching(evenbetterbullets)){
              for (var ebbz = 0; ebbz < evenbetterbullets.length; ebbz++){
                if (evenbetterbullets[ebbz].isTouching(enemies[ii])){
                  enemyhealth[ii] = enemyhealth[ii] - 12;
                  evenbetterbullets[ebbz].destroy();
                  if (enemyhealth[ii] <= 0){
                    removeItem(enemyhealth, ii);
                    if (zombies.contains(enemies[ii])){
                      score = score + (10 * multiplier);
                      money = money + (1 * multiplier);
                    }
                    if (skeletons.contains(enemies[ii])){
                      score = score + (20 * multiplier);
                      money = money + (2 * multiplier);
                    }
                    if (pumpkins.contains(enemies[ii])){
                      score = score + (30 * multiplier);
                      money = money + (3 * multiplier);
                    }
                    enemies[ii].destroy();
                  }
                }
              }
            }
          }
          if (sniperbullets[0] != undefined){
            if (enemies[ii].isTouching(sniperbullets)){
              for (var sbz = 0; sbz < sniperbullets.length; sbz++){
                if (sniperbullets[sbz].isTouching(enemies[ii])){
                  enemyhealth[ii] = enemyhealth[ii] - 20000000;
                  sniperbullethealth[sbz] = sniperbullethealth[sbz] - 1;
                  if (sniperbullethealth[sbz] <= 0){
                    sniperbullets[sbz].destroy();
                    removeItem(sniperbullethealth, sbz);
                  }
                  if (enemyhealth[ii] <= 0){
                    removeItem(enemyhealth, ii);
                    if (zombies.contains(enemies[ii])){
                      score = score + (10 * multiplier);
                      money = money + (1 * multiplier);
                    }
                    if (skeletons.contains(enemies[ii])){
                      score = score + (20 * multiplier);
                      money = money + (2 * multiplier);
                    }
                    if (pumpkins.contains(enemies[ii])){
                      score = score + (30 * multiplier);
                      money = money + (3 * multiplier);
                    }
                    enemies[ii].destroy();
                  }
                }
              }
            }
          }
          if (shotgunbullets[0] != undefined){
            if (enemies[ii].isTouching(shotgunbullets)){
              for (var sgbz = 0; sgbz < shotgunbullets.length; sgbz++){
                if (shotgunbullets[sgbz].isTouching(enemies[ii])){
                  enemyhealth[ii] = enemyhealth[ii] - randomNumber(8,15);
                  shotgunbullets[sgbz].destroy();
                  if (enemyhealth[ii] <= 0){
                    removeItem(enemyhealth, ii);
                    if (zombies.contains(enemies[ii])){
                      score = score + (10 * multiplier);
                      money = money + (1 * multiplier);
                    }
                    if (skeletons.contains(enemies[ii])){
                      score = score + (20 * multiplier);
                      money = money + (2 * multiplier);
                    }
                    if (pumpkins.contains(enemies[ii])){
                      score = score + (30 * multiplier);
                      money = money + (3 * multiplier);
                    }
                    enemies[ii].destroy();
                  }
                }
              }
            }
          }
        }
      }
    
  
}

//function to better  deal with enemies damaging player
function enemiesattacking(){
  if (enemies.isTouching(player)){
    if (zombies.isTouching(player)){
      for (var iii = 0; iii < zombies.length; iii++){
        if (zombies[iii].isTouching(player)){
          health = health - 5;
          zombies[iii].destroy();
        }
      }
    }
    if (skeletons.isTouching(player)){
      for (var i = 0; i < skeletons.length; i++){
        if (skeletons[i].isTouching(player)){
          health = health - 8;
          skeletons[i].destroy();
        }
      }
    }
    if (pumpkins.isTouching(player)){
      for (var ii = 0; ii < pumpkins.length; ii++){
        if (pumpkins[ii].isTouching(player)){
          health = health - 10;
          pumpkins[ii].destroy();
        }
      }
    }
  }
}

//functions to avoid repeated code in weapons
//normal bullet function
function normalbullethandling(){
  var normalbullet = createSprite(weapon.x , weapon.y);
  normalbullet.setAnimation("normalbullet");
  var angle = 0;
  if (ft === 0){
    angle = 0;
    normalbullet.rotation = 0;
  }else if (ft === 1){
    angle = 90;
    normalbullet.rotation = 90;
  }else if (ft === 2){
    angle = 180;
    normalbullet.rotation = 180;
  }else if (ft === 3){
    angle = 270;
    normalbullet.rotation = 270;
  }
  normalbullet.setSpeedAndDirection(10, angle);
  normalbullets.add(normalbullet);
  bullets.add(normalbullet);
  normalbullet.lifetime = 15;
  time = 0;
}

//better bullet function
function betterbullethandling(){
  var betterbullet = createSprite(weapon.x , weapon.y);
  betterbullet.setAnimation("betterbullet");
  var angle = 0;
  if (ft === 0){
    angle = 0;
    betterbullet.rotation = 0;
  }else if (ft === 1){
    angle = 90;
    betterbullet.rotation = 90;
  }else if (ft === 2){
    angle = 180;
    betterbullet.rotation = 180;
  }else if (ft === 3){
    angle = 270;
    betterbullet.rotation = 270;
  }
  betterbullet.setSpeedAndDirection(16, angle);
  betterbullets.add(betterbullet);
  bullets.add(betterbullet);
  betterbullet.lifetime = 10;
  time = 0;
}

//even better bullet function
function evenbetterbullethandling(){
  var evenbetterbullet = createSprite(weapon.x , weapon.y);
  evenbetterbullet.setAnimation("evenbetterbullet");
  var angle = 0;
  if (ft === 0){
    angle = 0;
    evenbetterbullet.rotation = 0;
  }else if (ft === 1){
    angle = 90;
    evenbetterbullet.rotation = 90;
  }else if (ft === 2){
    angle = 180;
    evenbetterbullet.rotation = 180;
  }else if (ft === 3){
    angle = 270;
    evenbetterbullet.rotation = 270;
  }
  evenbetterbullet.setSpeedAndDirection(22, angle);
  evenbetterbullets.add(evenbetterbullet);
  bullets.add(evenbetterbullet);
  evenbetterbullet.lifetime = 10;
  time = 0;
}

//sniper bullet function
function sniperbullethandling(){
  var sniperbullet = createSprite(weapon.x , weapon.y);
  sniperbullet.setAnimation("sniperbullet");
  var angle = 0;
  if (ft === 0){
    angle = 0;
    sniperbullet.rotation = 0;
  }else if (ft === 1){
    angle = 90;
    sniperbullet.rotation = 90;
  }else if (ft === 2){
    angle = 180;
    sniperbullet.rotation = 180;
  }else if (ft === 3){
    angle = 270;
    sniperbullet.rotation = 270;
  }
  sniperbullet.setSpeedAndDirection(7, angle);
  sniperbullets.add(sniperbullet);
  bullets.add(sniperbullet);
  sniperbullet.lifetime = 120;
  appendItem(sniperbullethealth, 10);
  time = 0;
}

//shotgun bullets function
function shotgunbullethandling(){
  var shotgunbullet = createSprite(weapon.x , weapon.y);
    shotgunbullet.setAnimation("shotgunbullet");
    var angle = 0;
    if (ft === 0){
      angle = 0;
      shotgunbullet.rotation = 0;
    }else if (ft === 1){
      angle = 90;
      shotgunbullet.rotation = 90;
    }else if (ft === 2){
      angle = 180;
      shotgunbullet.rotation = 180;
    }else if (ft === 3){
      angle = 270;
      shotgunbullet.rotation = 270;
    }
    shotgunbullet.setSpeedAndDirection(32, angle);
    shotgunbullets.add(shotgunbullet);
    bullets.add(shotgunbullet);
    shotgunbullet.lifetime = 10;
  for (var i = 0; i <= randomNumber(7,13); i++){
    var shotgunbullet = createSprite(weapon.x , weapon.y);
    shotgunbullet.setAnimation("shotgunbullet");
    var angle = 0;
    if (ft === 0){
      angle = 0;
      shotgunbullet.rotation = 0;
    }else if (ft === 1){
      angle = 90;
      shotgunbullet.rotation = 90;
    }else if (ft === 2){
      angle = 180;
      shotgunbullet.rotation = 180;
    }else if (ft === 3){
      angle = 270;
      shotgunbullet.rotation = 270;
    }
    shotgunbullet.setSpeedAndDirection(randomNumber(8,30), angle + randomNumber(-23,23));
    shotgunbullets.add(shotgunbullet);
    bullets.add(shotgunbullet);
    shotgunbullet.lifetime = 10;
  }
  time = 0;
}
//end of bullet functions

//stat display function
function stats(){
  textSize(18);
  fill("white");
  text("Health: " + Math.round(health), player.x - 120, player.y - 110);
  text("Score: " + Math.round(score), player.x - 120, player.y - 90);
  text("Coins: " + Math.round(money), player.x - 120, player.y - 70);
}

//shop display function
function shop(){
  zombies.setVelocityXEach(0);
  zombies.setVelocityYEach(0);
  skeletons.setVelocityXEach(0);
  skeletons.setVelocityYEach(0);
  pumpkins.setVelocityXEach(0);
  pumpkins.setVelocityYEach(0);
  textSize(18);
  fill("white");
  text(weapons[si] + ": " + prices[si], player.x - 120, player.y - 110);
  if (keyWentDown("right")){
    si = si + 1;
  }
  if (keyWentDown("left")){
    si = si - 1;
  }
  if (si >= weapons.length){
    si = 0;
  }
  if (si < 0){
    si = weapons.length;
  }
  if (keyWentDown("enter") && money >= prices[si]){
    cw = si;
    money = money - prices[si];
    prices[si] = 0;
  }
  text("Health Potion: " + 25, player.x - 120, player.y - 90);
  if (keyWentDown("shift") && money > 25){
    health = health + 10;
    money = money - 25;
  }
  text("Coins: " + money, player.x - 120, player.y - 70);
  if (keyWentDown("backspace")){
    inventory = 0;
    upzombies.setVelocityYEach(-0.5);
    downzombies.setVelocityYEach(0.5);
    leftzombies.setVelocityXEach(0.5);
    rightzombies.setVelocityXEach(-0.5);
    upskeletons.setVelocityYEach(-0.6);
    downskeletons.setVelocityYEach(0.6);
    leftskeletons.setVelocityXEach(0.6);
    rightskeletons.setVelocityXEach(-0.6);
    uppumpkins.setVelocityYEach(-0.8);
    downpumpkins.setVelocityYEach(0.8);
    leftpumpkins.setVelocityXEach(0.8);
    rightpumpkins.setVelocityXEach(-0.8);
    weapon.setAnimation(weapons[si]);
    weapon.pause();
  }
}












//old code pieces just in case
/*OLD zombies taking damage (it got reworked to be easier to make new bullet types);
  up 
  if (upzombies.isTouching(normalbullets)){
    for (var iiiii = 0; iiiii < upzombies.length; iiiii++){
      if (upzombies[iiiii].isTouching(normalbullets)){
        upzombieshealth[iiiii] = upzombieshealth[iiiii] - 5;
        normalbullets[0].destroy();
        if (upzombieshealth[iiiii] <= 0){
          removeItem(upzombieshealth, iiiii);
          upzombies[iiiii].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (upzombies.isTouching(betterbullets)){
    for (var b = 0; b < upzombies.length; b++){
      if (upzombies[b].isTouching(betterbullets)){
        upzombieshealth[b] = upzombieshealth[b] - 8;
        betterbullets[0].destroy();
        if (upzombieshealth[b] <= 0){
          removeItem(upzombieshealth, b);
          upzombies[b].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (upzombies.isTouching(evenbetterbullets)){
    for (var bbb = 0; bbb < upzombies.length; bbb++){
      if (upzombies[bbb].isTouching(evenbetterbullets)){
        upzombieshealth[bbb] = upzombieshealth[bbb] - 12;
        evenbetterbullets[0].destroy();
        if (upzombieshealth[bbb] <= 0){
          removeItem(upzombieshealth, bbb);
          upzombies[bbb].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  down
  if (downzombies.isTouching(normalbullets)){
    for (var IIIII = 0; IIIII < downzombies.length; IIIII++){
      if (downzombies[IIIII].isTouching(normalbullets)){
        downzombieshealth[IIIII] = downzombieshealth[IIIII] - 5;
        normalbullets[0].destroy();
        if (downzombieshealth[IIIII] <= 0){
          removeItem(downzombieshealth, IIIII);
          downzombies[IIIII].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (downzombies.isTouching(betterbullets)){
    for (var B = 0; B < downzombies.length; B++){
      if (downzombies[B].isTouching(betterbullets)){
        downzombieshealth[B] = downzombieshealth[B] - 8;
        betterbullets[0].destroy();
        if (downzombieshealth[B] <= 0){
          removeItem(downzombieshealth, B);
          downzombies[B].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (downzombies.isTouching(evenbetterbullets)){
    for (var BB = 0; BB < downzombies.length; BB++){
      if (downzombies[BB].isTouching(evenbetterbullets)){
        downzombieshealth[BB] = downzombieshealth[BB] - 12;
        evenbetterbullets[0].destroy();
        if (downzombieshealth[BB] <= 0){
          removeItem(downzombieshealth, BB);
          downzombies[BB].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  left
  if (leftzombies.isTouching(normalbullets)){
    for (var iiiiii = 0; iiiiii < leftzombies.length; iiiiii++){
      if (leftzombies[iiiiii].isTouching(normalbullets)){
        leftzombieshealth[iiiiii] = leftzombieshealth[iiiiii] - 5;
        normalbullets[0].destroy();
        if (leftzombieshealth[iiiiii] <= 0){
          removeItem(leftzombieshealth, iiiiii);
          leftzombies[iiiiii].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (leftzombies.isTouching(betterbullets)){
    for (var BBB = 0; BBB < leftzombies.length; BBB++){
      if (leftzombies[BBB].isTouching(betterbullets)){
        leftzombieshealth[BBB] = leftzombieshealth[BBB] - 8;
        betterbullets[0].destroy();
        if (leftzombieshealth[BBB] <= 0){
          removeItem(leftzombieshealth, BBB);
          leftzombies[BBB].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (leftzombies.isTouching(evenbetterbullets)){
    for (var bbbb = 0; bbbb < leftzombies.length; bbbb++){
      if (leftzombies[bbbb].isTouching(evenbetterbullets)){
        leftzombieshealth[bbbb] = leftzombieshealth[bbbb] - 12;
        evenbetterbullets[0].destroy();
        if (leftzombieshealth[bbbb] <= 0){
          removeItem(leftzombieshealth, bbbb);
          leftzombies[bbbb].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  right
  if (rightzombies.isTouching(normalbullets)){
    for (var IIIIII = 0; IIIIII < rightzombies.length; IIIIII++){
      if (rightzombies[IIIIII].isTouching(normalbullets)){
        rightzombieshealth[IIIIII] = rightzombieshealth[IIIIII] - 5;
        normalbullets[0].destroy();
        if (rightzombieshealth[IIIIII] <= 0){
          removeItem(rightzombieshealth, IIIIII);
          rightzombies[IIIIII].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (rightzombies.isTouching(betterbullets)){
    for (var BBBB = 0; BBBB < rightzombies.length; BBBB++){
      if (rightzombies[BBBB].isTouching(betterbullets)){
        rightzombieshealth[BBBB] = rightzombieshealth[BBBB] - 8;
        betterbullets[0].destroy();
        if (rightzombieshealth[BBBB] <= 0){
          removeItem(rightzombieshealth, BBBB);
          rightzombies[BBBB].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
  if (rightzombies.isTouching(evenbetterbullets)){
    for (var bbbbb = 0; bbbbb < rightzombies.length; bbbbb++){
      if (rightzombies[bbbbb].isTouching(evenbetterbullets)){
        rightzombieshealth[bbbbb] = rightzombieshealth[bbbbb] - 12;
        evenbetterbullets[0].destroy();
        if (rightzombieshealth[bbbbb] <= 0){
          removeItem(rightzombieshealth, bbbbb);
          rightzombies[bbbbb].destroy();
          score = score + 10;
          money = money + 1;
        }
      }
    }
  }
OLD bullet functionality
normal bullet
  var normalbullet = createSprite(weapon.x , weapon.y);
    normalbullet.setAnimation("normalbullet");
    var angle = 0;
    if (ft === 0){
      angle = 0;
      normalbullet.rotation = 0;
    }else if (ft === 1){
      angle = 90;
      normalbullet.rotation = 90;
    }else if (ft === 2){
      angle = 180;
      normalbullet.rotation = 180;
    }else if (ft === 3){
      angle = 270;
      normalbullet.rotation = 270;
    }
    normalbullet.setSpeedAndDirection(12, angle);
    normalbullets.add(normalbullet);
    bullets.add(normalbullet);
    normalbullet.lifetime = 15;
    time = 0;
    better bullet
    
    even better bullet
    
    other bullets were made after the rework
  */







//little secrets
//secretive multiplier
function shtgn(){
  if (weapons[cw] === "SniperRifle"){
    multiplier = 5;
  }
  else if (weapons[cw] === "Shotgun"){
    multiplier = 2;
  }
  else{
    multiplier = 1;
  }
  if (keyWentDown("h")){
    money = money + 1000;
  }
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
