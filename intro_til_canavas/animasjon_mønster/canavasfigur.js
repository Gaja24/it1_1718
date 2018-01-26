var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var fart = 0.05;
var temp = 100;

function animate() {

    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0,0,0,0.04)';
    c.fillRect(0,0, canvas.width, canvas.height);

    temp = temp + fart;

    for (var i = 0; i<100; i++){
        var x = Math.sin(temp)*200*i+canvas.width/2;
        var y = Math.cos(temp)*30*i+canvas.height/2;
        var radius = (Math.cos(temp)+1.1)*10;
        var r = 255;
        var g = 0;
        var b = 0;
        c.beginPath();
        c.arc(x,y, radius, 0, 2*Math.PI);
        c.strokeStyle = 'rgba('+ r +','+ g +','+ b +',1)';
        c.fillStyle = 'rgba('+ r +','+ g +','+ b +',0.4)';
        c.fill();
        c.stroke();
    }
}
animate();
