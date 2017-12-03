function TextButton(value, x, y, width, height, destination)
{
	this.value = value;
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.destination = destination;

	this.defaultTextColor = "#000";

	this.rectColor = "rgba(0, 0, 0, 0)";
	this.textColor = this.defaultTextColor;

	this.rectX = this.x - this.width /2;
	this.rectY = this.y - this.height /2;

	this.Update = function()
	{
		this.Draw();
	}

	this.Draw = function()
	{
		c.beginPath();
		c.fillStyle = this.rectColor;
		c.fillRect(this.rectX, this.rectY, this.width, this.height);

		c.font = "16px Helvetica";
		c.fillStyle = this.textColor;
		c.textAlign = "center";
		c.fillText(this.value, this.x + 5 , this.y + 5);
	}

	this.CheckClick = function(x, y)
	{
		if(this.IsInside(x, y))
			window.location.href = this.destination;
	}

	this.CheckMove = function(x, y)
	{
		if(this.IsInside(x, y))
		{
			this.textColor = "#AAA";
		}
		else
		{
			this.textColor = this.defaultTextColor;
		}
	}

	this.IsInside = function(x, y)
	{
		if(x > this.rectX
			&& x < this.rectX + this.width
			&& y > this.rectY
			&& y < this.rectY + this.height)
		{
			return true
		}
		else
		{
			return false;
		}
	}
}