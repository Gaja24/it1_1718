var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var fart = 0.05;
var temp = 100;
var musX = canvas.width/2;
var musY = canvas.height/2;

c.canvas.addEventListener('mousemove', function (e) {
    musX = e.clientX;
    musy = e.clientY;


});


function animate() {
    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0,0,0,0.1)';
    c.fillRect(0,0, canvas.width, canvas.height);

    temp = temp + fart;

    for (var i = 0; i<1000; i++){
        var x = Math.sin(temp+i*temp/25)*100*i+musX;
        var y = Math.cos(temp+i*temp/25)*20*i+musy;
        var radius = 5;
        var r = 555;
        var g = Math.round(Math.random()*i*50*Math.log(50*i));
        var b = Math.round(Math.random()*i*fart);
        c.beginPath();
        c.arc(x,y, radius, 0, 2*Math.PI);
        c.strokeStyle = 'rgba('+ r +','+ g +','+ b +',1)';
        c.fillStyle = 'rgba('+ r +','+ g +','+ b +',0.4)';
        c.fill();
        c.stroke();
    }
}
animate();
