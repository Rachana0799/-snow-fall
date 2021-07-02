class Snow {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.5,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        if (keyCode === DOWN_ARROW) {
          Matter.Body.setStatic(this.body,false); 
          }
      }
}