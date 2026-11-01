// searching checking
let url="https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");
url.includes("production");

// startwith /endwith
url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

// indexof lastindexof
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
