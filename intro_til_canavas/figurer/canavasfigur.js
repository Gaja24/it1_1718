var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//rekrangler
c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(150, 200, 50, 50);
c.fillStyle = 'yellow';
c.fillRect(500, 200, 100, 100);
c.fillStyle = '#ce24ff';
c.fillRect(160, 50, 100, 100);

//Linjer
c.beginPath();
c.moveTo(70, 350);
c.lineTo(350, 100);
c.lineTo(300, 300);
c.lineTo(70, 350);
c.strokeStyle = 'red';
c.fillStyle = 'rgba(0,255, 0,0.3';
c.fill();
c.stroke();

//sirkel (arc)
c.arc(300,300, 30, 0, 2*Math.PI);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0,255, 0,0.3';
c.fill();
c.stroke();

//mange sirkler

for (var i = 1; i<3; i++){
    c.beginPath();
    c.arc(150,150, 5+i*10, 0, 2*Math.PI);
    c.strokeStyle = 'blue';
    c.stroke();
}



for (var i = 1; i<10000; i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()* window.innerHeight;
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    c.beginPath();
    c.arc(x,y, 10, 0, 2*Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
    c.stroke();
}