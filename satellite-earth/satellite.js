function Satellite(){
	satellite = new Sprite(scene, "satellite.png", 25, 25);
	satellite.setSpeed(3);
	satellite.setBoundAction(CONTINUE);
	satellite.setPosition(400,200);
	
	satellite.check_Keys = function() {
		
		if(keysDown[K_LEFT]){
			this.changeImgAngleBy(-5);
		}
		
		if(keysDown[K_RIGHT]){
			this.changeImgAngleBy(5);
		}
		
		if(keysDown[K_UP]){
			this.addVector(this.getImgAngle(), .1);
		}
	}
	
	satellite.check_Gravity = function() {
	
		EARTH_MASS = 1000;
		SATELLITE_MASS = 1;
		
		dist = satellite.distanceTo(earth);
		dir = earth.angleTo(satellite);
		force = (EARTH_MASS*SATELLITE_MASS) / (dist*dist);
		satellite.addVector(dir, force);
	}
	
	
	return satellite;
}

