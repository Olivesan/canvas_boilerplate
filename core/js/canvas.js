var canvas = document.querySelector('canvas');

console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var c = canvas.getContext('2d');

var text = [];

window.addEventListener("resize", function()
{
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	text[text.length - 1] = new Text("Jacob Barlow-Ellevsen, 2017", "10px Helvetica", innerWidth - 80, innerHeight - 10, "right", false)
});

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init()
{

	text.push(new Text("Title", "60px Helvetica", innerWidth / 2, (innerHeight / 2) - 15, "center", true));
	text.push(new Text("Subtitle 1", "20px Helvetica", innerWidth / 2, (innerHeight / 2) + 20, "center", true));
	text.push(new Text("Subtitle 2", "20px Helvetica", innerWidth / 2, (innerHeight / 2) + 40, "center", true));
	text.push(new Text("Jacob Barlow-Ellevsen, 2017", "10px Helvetica", innerWidth - 80, innerHeight - 10, "right", false));

}

function animate()
{
	requestAnimationFrame(animate);

	c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	for(var i = 0; i < text.length; i++)
		text[i].Update();
}

init();
animate();