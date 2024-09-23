function setup() {
    createCanvas(1000, 340);  
    
}

function draw(){
    background(20);
    fill(225,0,0)
    for (var i = 2; i <= 2000; i += 5) {
        for (var x = 0; x <= 1000; x += 10) {
         square(0 + x, i, 6 - i/20, 1- - i/20)
        }    
    }
   
    fill(0,0,225)
    for (var i = 30; i <= 2000; i += 10) {
        for (var x = 5; x <= 1000; x += 10) {
         square(0 + x, i, 6 - i/20, 10- - i/17)
        }    
    }
    
    fill(0,225,0)
    for (var i = 2; i <= 2000; i += 5) {
        for (var x = 0; x <= 1000; x += 10) {
         square(0 + x, i, 6 - i/20, 10 - i/17)
        }    
    }
    
   }