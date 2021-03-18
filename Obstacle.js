 class Obstacles {
     constructor(x, y, width, height, angle) {
         var options = {isStatic: true}
         this.body = Bodies.rectangle(x, y, width, height, options)
         World.add(world, this.body)
         this.width = width
         this.height = height
         Matter.Body.setAngle(this.body, angle);
     }

     display(){
         rectMode(CENTER)
         push()
         var angle = this.body.angle
         translate(this.body.position.x, this.body.position.y)
         rotate(angle)
        
         fill("BLUE")
         rect(0, 0, this.width, this.height)
         pop()
         
     }
 }





































