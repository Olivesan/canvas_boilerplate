function Text(value, font, x, y, textalign, fade)
{
	this.value = value;
	this.font = font;
	this.x = x;
	this.y = y;

	this.alpha = 1;
	this.timeout = 500;

	this.Draw = function()
	{
		c.font = this.font;
		c.fillStyle = "rgba(0, 0, 0, " + this.alpha + ")";
		c.textAlign = "center";
		c.fillText(this.value, this.x, this.y);
	}

	this.Update = function()
	{
		if(fade)
		{
			if(this.timeout > 0)
				this.timeout--
			else
				this.alpha -= 0.01;
		}

		this.Draw();
	}
}