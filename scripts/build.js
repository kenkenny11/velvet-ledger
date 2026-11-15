const fs=require("fs");fs.rmSync("dist",{recursive:true,force:true});fs.cpSync("src","dist",{recursive:true});console.log("built to dist/ (local only, not deployed)");
