const assert=require("assert"),D=require("../src/data.js");
assert.strictEqual(D.filter(D.creators,"","","name").length,8);
assert.strictEqual(D.filter(D.creators,"ink","","name")[0].name,"Aster Vale");
assert.ok(D.filter(D.creators,"","Music","name").every(c=>c.cat==="Music"));
assert.strictEqual(D.filter(D.creators,"zzz","","name").length,0);
assert.strictEqual(D.filter(D.creators,"","","new")[0].name,"Juno Ash");
assert.strictEqual(D.validate({name:"a",desc:"b",a1:1,a2:1,a3:1}).length,0);
assert.strictEqual(D.validate({}).length,5);
console.log("all tests passed");
