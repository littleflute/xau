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
blTools.onclick = function(){
	var divBlView = blDiv(document.body,"BLVIEW","BlView_V0.0.4");
	var btnClose = blBtn(divBlView,"CloseBtn","close"); 
    btnClose.onclick = function(){
    	divBlView.style.display="none";
    }
    if(divBlView.style.display=="none"){
    	divBlView.style.display="block"; 
    } 
    
}
blTools.onclick();
var btnRun = document.getElementById("run");
btnRun.onclick = function(){
	blTools.onclick();
}
//v0.0.3
//v0.0.2
//v0.0.1
//file: xdui.js
//by littleflute
//2017/10/27 9:35am bjt
