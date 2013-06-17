var block = function(patt) {
	//private
	var blockpattern = eval(patt); //where patt is the JSON definition of this block
	
	this.drawBlock = function(colorArray, quiltScale, canvasName) { // draw this blocks - accepts parameters
		
		totalWidth = blockpattern.blockBasePixHoriz * quiltScale; 
		totalHeight = blockpattern.blockBasePixVert * quiltScale;
		var myCanvas = document.getElementById(canvasName).getContext('2d');
		myCanvas.canvas.height = totalHeight;
		myCanvas.canvas.width = totalWidth;
		for (var i = 0; i <= blockpattern.fabrics.length-1; i++){					
		
				doDraw(blockpattern.fabrics[i],colorArray[i],quiltScale,myCanvas);	
				
		}
		for (var s = 0; s <= blockpattern.steps.length-1; s++){	
			var stepCanvas = document.getElementById(blockpattern.steps[s].canvasName).getContext('2d');
			totalWidth = (blockpattern.steps[s].blockBasePixHoriz) * blockpattern.steps[s].stepsScale; 
			totalHeight = (blockpattern.steps[s].blockBasePixVert) * blockpattern.steps[s].stepsScale;
			
			stepCanvas.canvas.height = totalHeight;
			stepCanvas.canvas.width = totalWidth;
			
			for (var i = 0; i <= blockpattern.steps[s].stepsFabrics.length-1; i++){					
		
					
					doDraw(blockpattern.steps[s].stepsFabrics[i],colorArray[i],blockpattern.steps[s].stepsScale,stepCanvas);	
				
			}
		}
	};
	
	function doDraw(jsonFabObj,whichColor, qScale,whichCanvas){
		
		whichCanvas.fillStyle = whichColor;
		whichCanvas.strokeStyle = whichColor;
		
		if(jsonFabObj.backgroundFab){
			whichCanvas.fillRect(0,0,totalWidth,totalHeight);
		}
		
		if(jsonFabObj.rect)
		{
			
			for (var j = 0; j <= jsonFabObj.rect.length-1; j++)//loop through rectangles
			{						
				drawRectangle(jsonFabObj.rect[j].p1 * qScale ,jsonFabObj.rect[j].p2 * qScale,qScale,qScale,whichCanvas);
			}//rect loop
		} //if rect
		
		if(jsonFabObj.diamond)
		{
			for (var j = 0; j <= jsonFabObj.diamond.length-1; j++)//loop through rectangles
			{
				drawDiamond(jsonFabObj.diamond[j].p11 * qScale ,jsonFabObj.diamond[j].p12 * qScale,
							jsonFabObj.diamond[j].p21 * qScale,jsonFabObj.diamond[j].p22 * qScale,
							jsonFabObj.diamond[j].p31 * qScale,jsonFabObj.diamond[j].p32 * qScale,
							jsonFabObj.diamond[j].p41 * qScale,jsonFabObj.diamond[j].p42 * qScale,whichCanvas
							);
			}//diamond loop
		} //if diamond
		
		if(jsonFabObj.tri)
		{
			
			for (var j = 0; j <= jsonFabObj.tri.length-1; j++)//loop through triangles
			{
				drawTriangle(jsonFabObj.tri[j].p11 * qScale, jsonFabObj.tri[j].p12 * qScale,
							jsonFabObj.tri[j].p21 * qScale, jsonFabObj.tri[j].p22 * qScale,
							jsonFabObj.tri[j].p31 * qScale, jsonFabObj.tri[j].p32 * qScale,
							whichCanvas									
							);
			}//triangle loop
		} //if triangle
		
		if(jsonFabObj.liner)
		{
			
			for (var j = 0; j <= jsonFabObj.liner.length-1; j++)//loop through lines
			{
				drawLine(jsonFabObj.liner[j].p11 * qScale, jsonFabObj.liner[j].p12 * qScale,
							jsonFabObj.liner[j].p21 * qScale, jsonFabObj.liner[j].p22 * qScale,
							whichCanvas									
							);
			}//lines loop
		} //if lines
		
	};
	
	function drawRectangle(coord1,coord2,coord3,coord4, whichCanvas)
	{		
		
		whichCanvas.fillRect(coord1,coord2,coord3,coord4);
		
	}
	
	function drawDiamond(c11,c12,c21,c22,c31,c32,c41,c42,whichCanvas)
	{
		
		whichCanvas.beginPath();
		whichCanvas.moveTo(c11,c12);		
		whichCanvas.lineTo(c21,c22);
		whichCanvas.lineTo(c31,c32);
		whichCanvas.lineTo(c41,c42);
		whichCanvas.closePath();
		whichCanvas.fill(); 
		
	}
	
	function drawTriangle(c11,c12,c21,c22,c31,c32,whichCanvas)
	{
		whichCanvas.beginPath();
		whichCanvas.moveTo(c11,c12);		
		whichCanvas.lineTo(c21,c22);
		whichCanvas.lineTo(c31,c32);
		whichCanvas.closePath();
		whichCanvas.fill(); 
		whichCanvas.stroke();
	}
	
	function drawLine(c11,c12,c21,c22,whichCanvas)
	{
		whichCanvas.beginPath();
		whichCanvas.moveTo(c11,c12);		
		whichCanvas.lineTo(c21,c22);
		whichCanvas.stroke();
	}
};

$(document).ready(function() {
	
	///offset doesn't look good on phones
	if ($(window).width() < 768){	
		$("#tuteMain").removeClass("offset1 span10 rounded").addClass("span12");
	}
	
	var colorArray = ["#cccc00", "#b1f4fa", "#063a57", "#fa7c70"];
	var curblock = new block("ohioStar");
	curblock.drawBlock(colorArray, 60, "ohioStarCanvasMain");
});