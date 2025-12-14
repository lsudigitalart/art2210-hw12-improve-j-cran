let jamPlay, fft, amp, level, cheeseSize, trumpetSize, cheeseImg, trumpetImg, addImage1, addImage2, addImage3, addImage4, cheeseLocation;
let randomX,randomY
let hue = 0;

function preload(){
    jamPlay=loadSound('assets/LouieZongTRAFFICJAM.mp3');
    cheeseImg=loadImage('assets/cheese.upgrade.png');
    trumpetImg=loadImage('assets/trumpet.upgrade.png');
}

function setup(){
    createCanvas(1200, 600);
    imageMode(CENTER);

    fft=new p5.FFT();
    amp = new p5.Amplitude();
    cheeseSize=0;

    jamPlay.addCue(.4,makeImage1)
    jamPlay.addCue(1.1,makeImage2)
    jamPlay.addCue(2.2,makeImage3)
    jamPlay.addCue(3.1,makeImage4)
    jamPlay.addCue(5.1,makeImage5)

}

function draw(){
    background(hue,280,180);
    hue+=0.5 // slow colour transition 

    randomX = random(0,1200);
    randomY = random(0,600);

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

    if(addImage5===true){
        image(cheeseImg,900,100,500,500);
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

function makeImage5(){
    addImage5=true
}