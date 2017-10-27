function blBtn(oBoss,id,html){
    var r = document.getElementById(id);
    if(!r){
        r = document.createElement("button");
        r.id = id;
    	r.innerHTML = html; 
    	if(oBoss!=null)oBoss.appendChild(r);
    }
        r.style.backgroundColor="green";
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
        r.style.height = "2000px"; 
        r.style.backgroundColor="rgb(0,100,120)";
        r.style.display = "none";

    	r.innerHTML = html; 
    	if(oBoss!=null) oBoss.appendChild(r);
    }
    return r;
}
var blTools = blBtn(document.body,"btnRun","BlTools+"); 
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
            r.onclick = function(){alert(r.src);};
    	}
    	return r;
	}
	function _Div(oBoss,id,html){
    	var r = document.getElementById(id);
    	if(!r){
        	r = document.createElement("div");
        	r.id = id;
            r.style.position = "relative"; 
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
    j1b1.onclick=function(){
    	btnRun.style.display="none";
		blTools.style.display="block";};
	var j3 = _Div(oBoss,"j3","j3");
    var j3i1 = _Img(j3,"j3i1",  "https://user-images.githubusercontent.com/17950965/32089280-9b1df7f8-bb1b-11e7-973f-90ed3a1d9c67.jpg");
    
}
var btnRun = document.getElementById("run"); 

blTools.onclick = function(){ 
	btnRun.style.display="block";
	blTools.style.display="none";
    blTools._myJob(btnRun); 
    
}
blTools.onclick();
//v0.0.9	
//v0.0.8
//v0.0.7	*blTools.onclick
//v0.0.6 	+j3i1,_Img
//v0.0.5
//v0.0.4
//v0.0.3
//v0.0.2
//v0.0.1
//file: xdui.js
//by littleflute
//2017/10/27 9:35am bjt
