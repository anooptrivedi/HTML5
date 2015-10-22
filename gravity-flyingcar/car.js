/*
function Car(){
	car = new Sprite(scene, "car.png", 100, 50);
	car.setSpeed(0);
	car.hSpeed = 0;
	car.setPosition(400,600); //original position of the car
	
	car.check_Keys = function() {
		
		car.changeImage("car.png");
		
		if(keysDown[K_LEFT]){
			this.hSpeed -= 1;
		}
		
		if(keysDown[K_RIGHT]){
			this.hSpeed += 1;
		}
		
		if(keysDown[K_UP]){
			this.addVector(0, .5);
			car.changeImage("carThrust.png");
		}
		
		this.changeXby(this.hSpeed);
	}
	
	car.check_Gravity = function() {
		if(this.y > 580){
			this.setPosition(this.x, 580);
		} else {
			this.addVector(180, .1);
		}
		
	}
	
	return car;
}
*/

