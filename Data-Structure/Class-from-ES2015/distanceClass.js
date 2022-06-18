class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static calcDistance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    console.log(dx, dy);
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, -3);

const distance = Point.calcDistance(p1, p2);
