var scene, car;

function init(){
	scene = new Scene();
	car = new Sprite(scene, "car.png", 50, 30);
	car.setAngle(270);
	car.setSpeed(0);
	scene.start();
}

function update(){
	scene.clear();
/*	
	if (keysDown[K_LEFT]) car.changeAngleBy(-5);	
	if (keysDown[K_RIGHT]) car.changeAngleBy(5);
	if (keysDown[K_UP]) car.changeSpeedBy(1);
	if (keysDown[K_DOWN]) car.changeSpeedBy(-1);
	
	car.update();
	
*/
}