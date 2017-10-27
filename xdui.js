function blBtn(oBoss,id,html){
    var r = document.getElementById(id);
    if(!r){
        r = document.createElement("button");
        r.id = id;
    	r.innerHTML = html; 
        r.style.backgroundColor="green";
    	if(oBoss!=null)oBoss.appendChild(r);
    }
    return r;
}
function blDiv(oBoss,id,html){
    var r = document.getElementById(id);
    if(!r){
        r = document.createElement("div");
        r.id = id;
        r.style.border = "1px solid #3d3d3d";
        r.style.position = "fixed";
        r.style.top	=0;
        r.style.width = "100%";
        r.style.height = "100%";
        r.style.backgroundColor="rgb(0,100,120)";
        r.style.display = "none";

    	r.innerHTML = html; 
    	if(oBoss!=null) oBoss.appendChild(r);
    }
    return r;
}
var blTools = blBtn(document.body,"BLTOOLS","BlTools+"); 
blTools._myJob = function(oBoss)
{
	function _Img(oBoss,id,src){
    	var r = document.getElementById(id);
    	if(!r){
        	r = document.createElement("img");
        	r.id = id;
            r.style.position = "relative";  
        	r.style.border = "1px solid #fd3d3d";   
           	r.src = src; 
    		if(oBoss!=null) oBoss.appendChild(r);
    	}
    	return r;
	}
	function _Div(oBoss,id,html){
    	var r = document.getElementById(id);
    	if(!r){
        	r = document.createElement("div");
        	r.id = id;
            r.style.position = "relative";
    		r.style.top	= "180px";
        	r.style.width = "140px";
        	r.style.border = "1px solid #3d3d3d";  
       		r.style.backgroundColor="rgb(220,100,120)";
           	r.innerHTML = html; 
    		if(oBoss!=null) oBoss.appendChild(r);
    	}
    	return r;
	}
	function _Btn(oBoss,id,html){
    	var r = document.getElementById(id);
    	if(!r){
        	r = document.createElement("button");
        	r.id = id;
            r.style.position = "relative"; 
        	r.style.width = "auto";
        	r.style.border = "1px solid #3d3d3d";  
       		r.style.backgroundColor="rgb(220,200,120)";
           	r.innerHTML = html; 
    		if(oBoss!=null) oBoss.appendChild(r);
    	}
    	return r;
	} 
	var j1 = _Div(oBoss,"j1","j1");
	var j2 = _Div(oBoss,"j2","j2");
	var j1b1 = _Btn(j2,"j1b1","j1b1");  
	var j3 = _Div(oBoss,"j3","j3");
    	var j3i1 = _Img(j3,"j3i1",  "https://user-images.githubusercontent.com/17950965/32089280-9b1df7f8-bb1b-11e7-973f-90ed3a1d9c67.jpg");
}
blTools.onclick = function(){
	var divBlView = blDiv(document.body,"BLVIEW","BlView_V0.0.4");
	var btnClose = blBtn(divBlView,"CloseBtn","close"); 
    	btnClose.style.position = "fixed";
    	btnClose.style.top	= "180px";
    	btnClose.onclick = function(){
    		divBlView.style.display="none";
    	}
    	if(divBlView.style.display=="none"){
    		divBlView.style.display="block"; 
    	}     
      	blTools._myJob(divBlView);
}
blTools.onclick();
var btnRun = document.getElementById("run");
btnRun.onclick = function(){
	blTools.onclick();
}

//v0.0.6 	+j3i1,_Img
//v0.0.5
//v0.0.4
//v0.0.3
//v0.0.2
//v0.0.1
//file: xdui.js
//by littleflute
//2017/10/27 9:35am bjt
