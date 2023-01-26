class Monster extends Fighter {
	constructor(name, x, y) {
		super(name, x, y);
		this.experience = 500;
	}

	getDirection() {
		return "N/S/W/E".split("/")[Math.floor(Math.random() * 4)];
	}
}

class Hind extends Monster {
	constructor(name, x, y) {
		super(name, x, y);
		this.experience = 500;
		this.image = "../../images/hind.svg";
		this.moveable = true;
	}
}
