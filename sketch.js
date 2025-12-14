let jamPlay, fft, amp, level, cheeseSize, trumpetSize, cheeseImg, trumpetImg, addImage1, addImage2, addImage3, addImage4,cheeseLocation;
let endHeys, addHey1, addHey2, addHey3, addHey4, addHey5, addHey6,addHey7,addHey8,addHey9,addHey10;
let hue = 0;

function preload(){
    jamPlay=loadSound('assets/LouieZongTRAFFICJAM.mp3');
    cheeseImg=loadImage('assets/cheese.upgrade.png');
    trumpetImg=loadImage('assets/trumpet.upgrade.png');
}

function setup(){
    createCanvas(1200, 600);
    imageMode(CENTER);


    fft= new p5.FFT();
    amp = new p5.Amplitude();
    cheeseSize=0;

    jamPlay.addCue(.4,makeImage1)
    jamPlay.addCue(1.1,makeImage2)
    jamPlay.addCue(2.2,makeImage3)
    jamPlay.addCue(3.1,makeImage4)

    jamPlay.addCue(20.6,makeHey1) // Hey section, couldnt get for loop to randomize in the way i wanted it to
    jamPlay.addCue(20.2,makeHey2)
    jamPlay.addCue(20.3,makeHey3)
    jamPlay.addCue(20.8,makeHey4)
    jamPlay.addCue(21.2,makeHey5)
    jamPlay.addCue(21.3,makeHey6)
    jamPlay.addCue(20.8,makeHey7)
    jamPlay.addCue(20.5,makeHey8)
    jamPlay.addCue(20.4,makeHey9)
    jamPlay.addCue(20.1,makeHey10)

    jamPlay.addCue(22,makeEndHeys)
}

function draw(){
    background(hue,280,180);
    hue+=0.5 // slow colour transition 


    fill(0);
    textFont("courier new")                   
    textSize(28);
    text('Press G to start/pause',10,85);
    textSize(48)
    text('TRAFFIC JAM - Louie Zong',10,50)

    fft.analyze();
    level=amp.getLevel();               // analyzing amplitude + treble
    let treble=fft.getEnergy('treble');

    cheeseSize=map(level,0,1,0,100);  //map amp w/size
    trumpetSize=map(treble, 0, 255, 10, 150) // map treble w/size

    image(cheeseImg,width/2,height/2,cheeseSize*4,cheeseSize*4);       // making central cheese img
 

    if(addImage1===true){  //top left trumpet
        image(trumpetImg,200,200,trumpetSize*4,150);
    }

    if(addImage2===true){  // bottom left trumpet
        image(trumpetImg,200,500,trumpetSize*4,150);
    }
    
    if(addImage3===true){  // top right trumpet
        push();
        scale(-1,1);
        image(trumpetImg,-1000,200,trumpetSize*4,150);
        pop();
    }
    
    if(addImage4===true){  // bottom right trumpet
        push();
        scale(-1,1);
        image(trumpetImg,-1000,500,trumpetSize*4,150);
        pop(); 
    }

    if(addHey1===true){   // hey section
        image(cheeseImg,100,200,100,100);
    }
    
    if(addHey2===true){
        image(cheeseImg,670,390,100,100);
    }
    
    if(addHey3===true){
        image(cheeseImg,320,180,80,80);
    }
    
    if(addHey4===true){
        image(cheeseImg,780,370,100,100);
    }
    
    if(addHey5===true){
        image(cheeseImg,1110,130,120,120);
    }
    
    if(addHey6===true){
        image(cheeseImg,490,550,100,100);
    }

    if(addHey7===true){
        image(cheeseImg,1010,410,110,110);
    }
    
    if(addHey8===true){
        image(cheeseImg,800,120,100,100);
    }
    
    if(addHey9===true){
        image(cheeseImg,450,270,100,100);
    }

    if(addHey10===true){
        image(cheeseImg,180,500,100,100);
    }
    

    if(endHeys===true){  // remove hey cheeses
        addHey1 = false;
        addHey2 = false;
        addHey3 = false;
        addHey4 = false;
        addHey5 = false;
        addHey6 = false;
        addHey7 = false;
        addHey8 = false;
        addHey9 = false;
        addHey10 = false;
    }

}


function keyPressed(){  // start + pause
    if(key === 'g') {
    if(jamPlay.isPlaying()){
        jamPlay.pause();
    } else {
        jamPlay.play();
    }
    
}
}

function makeImage1(){
    addImage1=true
}
function makeImage2(){
    addImage2=true
}

function makeImage3(){
    addImage3=true
}

function makeImage4(){
    addImage4=true
}

function makeHey1(){
    addHey1=true
}

function makeHey2(){
    addHey2=true
}

function makeHey3(){
    addHey3=true
}

function makeHey4(){
    addHey4=true
}

function makeHey5(){
    addHey5=true
}

function makeHey6(){
    addHey6=true
}

function makeHey7(){
    addHey7=true
}

function makeHey8(){
    addHey8=true
}

function makeHey9(){
    addHey9=true
}

function makeHey10(){
    addHey10=true
}

function makeEndHeys(){
    endHeys=true
}
