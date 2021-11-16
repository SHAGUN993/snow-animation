class Snow  {
    constructor(x,y){
        var options={
          friction : 0.01 ,
          density: 0.2,
          restitution:0.1 
        }

        this.body = Bodies.circle(x,y,5,options)
        this.radius = 5;
        var img
       var rand = Math.round(random(1,2))
       if(rand ===1){
        img = "snow4.webp"
       }
       else{img = "snow5.webp"}
       this.image = loadImage(img)
       World.add(world,this.body)
    }

     showSnow(){
     imageMode(CENTER) 
     image(this.image,this.body.position.x,this.body.position.y,10,10)
    }

}