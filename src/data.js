(function(root){
var creators=[
{id:1,name:"Aster Vale",cat:"Illustration",tags:["ink","portrait"],added:5,hue:40},
{id:2,name:"Nova Quill",cat:"Writing",tags:["fiction","audio"],added:3,hue:290},
{id:3,name:"Marlow Finch",cat:"Photography",tags:["studio","film"],added:8,hue:200},
{id:4,name:"Juno Ash",cat:"Music",tags:["synth","ambient"],added:1,hue:340},
{id:5,name:"Cedar Lume",cat:"Illustration",tags:["watercolor"],added:7,hue:150},
{id:6,name:"Pax Orrin",cat:"Writing",tags:["essay","poetry"],added:2,hue:20},
{id:7,name:"Ivy Rook",cat:"Music",tags:["vocal","demo"],added:6,hue:260},
{id:8,name:"Sable Wren",cat:"Photography",tags:["abstract"],added:4,hue:100}];
function filter(list,q,cat,sort){
q=(q||"").trim().toLowerCase();
var r=list.filter(function(c){
return (!cat||c.cat===cat)&&(!q||(c.name+" "+c.tags.join(" ")+" "+c.cat).toLowerCase().indexOf(q)>-1)});
r.sort(sort==="new"?function(a,b){return a.added-b.added}:function(a,b){return a.name.localeCompare(b.name)});
return r}
function validate(f){var e=[];
if(!f.name||!f.name.trim())e.push("display name");
if(!f.desc||!f.desc.trim())e.push("description");
if(!f.a1)e.push("age confirmation");if(!f.a2)e.push("ownership attestation");if(!f.a3)e.push("consent attestation");
return e}
var api={creators:creators,filter:filter,validate:validate};
if(typeof module!=="undefined")module.exports=api;else root.VL=api})(this);
