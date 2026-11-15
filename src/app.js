(function(){
var D=window.VL,$=function(i){return document.getElementById(i)};
function tile(c){var d=document.createElement("article");d.className="tile card";
var p=document.createElement("div");p.className="ph";p.style.background="hsl("+c.hue+",45%,65%)";p.textContent=c.name.split(" ").map(function(w){return w[0]}).join("");p.setAttribute("aria-hidden","true");
var h=document.createElement("h3");h.textContent=c.name;
var t=document.createElement("div");t.className="tag";t.textContent=c.cat+" · "+c.tags.join(", ")+" · placeholder";
d.append(p,h,t);return d}
function fill(el,list){el.replaceChildren.apply(el,list.map(tile))}
fill($("creator-grid"),D.creators.slice(0,4));
var cats=[];D.creators.forEach(function(c){if(cats.indexOf(c.cat)<0)cats.push(c.cat)});
cats.forEach(function(c){var o=document.createElement("option");o.value=o.textContent=c;$("cat").appendChild(o)});
function run(){var r=D.filter(D.creators,$("q").value,$("cat").value,$("sort").value);fill($("explore-grid"),r);$("count").textContent=r.length+" placeholder result"+(r.length===1?"":"s")}
$("filters").addEventListener("submit",function(e){e.preventDefault()});
["q","cat","sort"].forEach(function(i){$(i).addEventListener("input",run)});run();
$("submit-form").addEventListener("submit",function(e){e.preventDefault();
var err=D.validate({name:$("s-name").value,desc:$("s-desc").value,a1:$("a1").checked,a2:$("a2").checked,a3:$("a3").checked});
$("s-msg").textContent=err.length?"Missing: "+err.join(", ")+".":"Form looks complete. Nothing was sent or stored; this is a demo."});
$("gate-demo").onclick=function(){$("gate").hidden=false;$("gate-close").focus()};
$("gate-close").onclick=function(){$("gate").hidden=true};
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("gate").hidden=true});
var m=document.querySelector(".menu"),n=$("nav");
m.onclick=function(){var o=n.classList.toggle("open");m.setAttribute("aria-expanded",o)};
n.addEventListener("click",function(){n.classList.remove("open");m.setAttribute("aria-expanded",false)});
})();
