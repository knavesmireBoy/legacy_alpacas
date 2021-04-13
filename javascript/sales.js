function prepareThumbs() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("thumbnails")) return false;
  var thumbs = document.getElementById("thumbnails");
 var thumblink = thumbs.getElementsByTagName("a");
    for (var i=0; i < thumblink.length; i++) {
     thumblink[i].onclick = function(){
    return showpage(this);
     }
     }
     }

function tablePic() {
if (!document.getElementsByTagName) return false;
var table = document.getElementsByTagName("table");
if (!table[0]) return;
var tablepic = document.createElement("img");
var link = document.createElement("a");
link.appendChild(tablepic);
table[0].parentNode.insertBefore(link,table[0]);
link.onclick = function() {
    return showpicNew(this);
     }
}



function singular(thesource){// searches for an underscore on a link to an image and assumes a hybrid name to represent more than one alpaca. It'll do for now.
var pat=/(\w+)\/(\w+)\/(\S*)/;
var result=thesource.match(pat);
var pat=/[a-zA-Z]+_[a-zA-Z]+\.[a-zA-Z]+/;
if (pat.test(result[3])){
var num = "us";
}
else {
num = "me";
}
return num;
}

function showpage(whichpic) {
if (!document.getElementById("sell"))return;
var sell_me = document.getElementById("sell");
var biglink = sell_me.getElementsByTagName("a");
if (!biglink[0]) return;
var table = sell_me.getElementsByTagName("table");
for (var i=0; i < table.length; i++) {
table[i].className="hide";
}
var thumbs = document.getElementById("thumbnails");
thumbs.className = "hide";
sell_me.className = "show";
var swap_pic = biglink[0].firstChild;//Assumes one link, fix array to establish childNode is an image
var source = whichpic.getAttribute("href");
var alp_t = whichpic.firstChild.getAttribute("alt");//fix array to establish childNode is an image, sets CURRENT alt attribute.
swap_pic.setAttribute ("src", source);//sets table image
biglink[0].setAttribute("href", source);// sets link to big image on table image
var num = singular(source);
biglink[0].setAttribute("title", "Click here for a bigger picture of " + num);
var thumblink = thumbs.getElementsByTagName("a");
for (var i=0; i < thumblink.length; i++) {//assign title's to tables;
var alp_alt = (thumblink[i].firstChild.getAttribute("alt"));
table[i].setAttribute("title", alp_alt);// Assumes the order of tables and thumbnails corresponds.
if (table[i].getAttribute("title") == alp_t) table[i].className="show";
}
if (swap_pic.nodeName != "IMG") return true;
var copy = document.getElementById("copy");
var u_list = copy.getElementsByTagName("ul");
var a_list = u_list[0].getElementsByTagName("li");//convert text to link text
var sales_txt = a_list[0].firstChild.nodeValue;
a_list[0].firstChild.nodeValue = "";
var quo =  "  \xBB  ";
var sale_txt = document.createTextNode(sales_txt);
var sale_list = document.createElement("li");
var sale_link = document.createElement("a");
sale_link.setAttribute("href", "alpacas_sale.html");
sale_link.appendChild(sale_txt);
sale_list.appendChild(sale_link);
u_list[0].appendChild(sale_list);
var namelist = document.createElement("li");
var txt = document.createTextNode(alp_t);
var next_link = document.createElement("a");
next_link.setAttribute("href", source);
next_link.className = "next";
next_link.appendChild(txt);
namelist.appendChild(next_link);
u_list[0].appendChild(namelist);//create link to next Alpaca
for (var i=0; whichpic != thumblink[i]; i++);
if (sell_me.className != "show") alert("oh");

next_link.onclick = function() {
if (sell_me.className != "show") {
var allpics = document.getElementsByTagName("img");
var big_pic = allpics[allpics.length-1];//assumes last image in page
if  (i < thumblink.length -1) i++;
else (i=0);
big_pic.setAttribute("src",thumblink[i].getAttribute("href"));
var num = singular(thumblink[i].getAttribute("href"));
big_pic.setAttribute("title", "Click here for information on " + num);
var now =thumblink[i].firstChild.getAttribute("alt");
txt.nodeValue = now;
return false;
}
else {
table[i].className="hide";
if  (i < thumblink.length -1) i++;
else (i=0);
swap_pic.setAttribute("src",thumblink[i].getAttribute("href"));
biglink[0].setAttribute("href", thumblink[i].getAttribute("href"));// sets link to big imageontableimage
var num = singular(thumblink[i].getAttribute("href"));
biglink[0].setAttribute("title", "Click here for a bigger picture " + num);
table[i].className="hide";
table[i].className="show";
var now =thumblink[i].firstChild.getAttribute("alt");
txt.nodeValue = now;
return false;
}
}

next_link.onmouseover = function() {
sale_link.className = "fill";
}
next_link.onmouseout = function() {
sale_link.className = "";
}
return false;
}

function showpicNew(whichpic) {
var sale_on = document.getElementById("sell");
var link = document.createElement("a");
var viewpic = document.createElement("img");
link.appendChild(viewpic);
insertAfter(link, sale_on);//
sale_on.className = "hide";

var source = whichpic.getAttribute("href");
if (viewpic.nodeName != "IMG") return true;
 viewpic.setAttribute("src",source);
   viewpic.className = "bigpic";
     link.setAttribute("href",source);
     var num = singular(source);

link.setAttribute("title", "Click for information on " + num);

link.onclick = function() {
           viewpic.className = "hide";
           sale_on.className ="show";
           return false;
     }
return false;
}


addLoadEvent(prepareThumbs);
addLoadEvent(tablePic);


