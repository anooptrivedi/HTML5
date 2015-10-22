var scene, f16;

function init(){
	scene = new Scene();
	scene.setSize(900,400);
	f16 = new Sprite(scene, "F16.png", 150, 150);
	f16.setAngle(120);
	f16.setSpeed(0);
	scene.start();
}

function update(){
	scene.clear();
/*
	if (keysDown[K_LEFT]) f16.changeAngleBy(-5);
	if (keysDown[K_RIGHT]) f16.changeAngleBy(5);
	if (keysDown[K_UP]) f16.changeSpeedBy(1);
	if (keysDown[K_DOWN]) f16.changeSpeedBy(-1);
*/
	f16.update();
}