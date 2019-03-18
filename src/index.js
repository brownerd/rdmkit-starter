import rdm from "rdmkit-rdm";

if (process.env.NODE_ENV === "development") {
  var cpl = require("rdmkit-cpl");
  var mzr = require("rdmkit-mzr");
  var vrt = require("rdmkit-vrt");
  var runVert = vrt({ belowColor: "#ccc" });

  cpl();
  mzr();
}

rdm(".resize");

// Comment this out turn off the VRT grid on load
setTimeout(() => {
  runVert.belowGrid();
}, 500);

console.log("hi rdmkit");
