const fs = require("fs");
const key = fs.readFileSync("./zap-shift-d0725-firebase-adminsdk-fbsvc-ba1bd978fe.json", "utf8");
const base64 = Buffer.from(key).toString("base64");
console.log(base64);
