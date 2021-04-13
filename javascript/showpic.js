function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("thumbnails")) return false;
 var thumbs = document.getElementById("thumbnails");
 var thumblink = thumbs.getElementsByTagName("a");
 var place = document.getElementById("placeholder");
    for (var i=0; i < thumblink.length; i++) {
     thumblink[i].onclick = function(){
    return showpic(this);
     }   
     }
     }

function showpic(whichpic) {
 var thumbs = document.getElementById("thumbnails");
 var thumblink = thumbs.getElementsByTagName("a");
document.getElementById("placeholder").className = "";
thumbs.className = "hide";
if (!document.getElementById("swap")) return true;
var swap_pic = document.getElementById("swap");
if (swap_pic.nodeName != "IMG") return true;
swap_pic.setAttribute("src",whichpic.getAttribute("href"));
for (var i=0; whichpic != thumblink[i]; i++); // discovers the location of the current link in the links array

document.getElementById("rightlink").onclick = function (){
if  (i < thumblink.length -1) i++;
else (i=0);
swap_pic.setAttribute("src",thumblink[i].getAttribute("href"));
return false;
}

document.getElementById("leftlink").onclick = function (){
if  (i > 0 || i == thumblink.length -1) i--;
else (i = thumblink.length -1);
swap_pic.setAttribute("src",thumblink[i].getAttribute("href"));
return false;
}
return false;
}
addLoadEvent(prepareGallery);