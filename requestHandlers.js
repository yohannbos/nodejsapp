var exec =require("child_process").exec;

function start(response) {
  console.log("Le gestionnaire 'start' est appelé.");
  exec("ls-lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}
function upload(response) {
  console.log("Le gestionnaire 'upload' est appelé.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Bonjour Upload");
  response.end();
});
}

exports.start = start;
exports.upload = upload;
