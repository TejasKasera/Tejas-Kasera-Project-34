class SuperHero {
  constructor (x,y,width,height) {
    var options = {
        restitution:1,
        friction:0.5,
        density:0.5
    }
    this.image = loadImage("heroImage.png")
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;     
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
