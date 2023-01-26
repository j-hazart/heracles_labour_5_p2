class Bush extends Tile {
  constructor(x, y) {
    super(x, y)
    this.image = "./images/bush.png";
    this.crossable = false;
  }
  isCrossable(monster) {
    if (monster instanceof Hind) {
      return true;
    } else {
      return this.crossable;
    }
  }
}