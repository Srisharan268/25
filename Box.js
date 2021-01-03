class Box{
    constructor(x,y,width,height,i){
        var options={
            isStatic: true
        };

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbin_image.png");
        this.i=i;
        World.add(world,this.body);
        
    }

    display(){
        var pos=this.body.position;
        if(this.i==true){
            imageMode(CENTER);
            image(this.image,pos.x,pos.y-110);
        }else{
            rectMode(CENTER);
            fill("white");
            rect(pos.x,pos.y,this.width,this.height);
        }
    }
}