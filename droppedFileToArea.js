function humanFileSize(size) {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return Math.round(100 * (size / Math.pow(1024, i))) / 100 + ' ' + ['B', 'kB', 'MB', 'GB'][i];
}

function onFileDropArea(e, callbackFn) {
  e.preventDefault();

  var reader = new FileReader();
  var dropArea = e.target;

  reader.readAsText(e.dataTransfer.files[0]);
  dropArea.innerHTML += "<br/>";
  dropArea.innerHTML += "<br/>Loading... " + e.dataTransfer.files[0].name.toString();
  var start = new Date().getTime();
  reader.onload = function (event) {
    var elapsed = new Date().setTime(new Date().getTime() - start);
    dropArea.innerHTML += " " + elapsed + "ms";
    try {
      dropArea.innerHTML += "<br/>&nbsp;Parsing... " + humanFileSize(event.target.result.length);
      start = new Date().getTime();

      var data = JSON.parse(event.target.result);
      elapsed = new Date().setTime(new Date().getTime() - start);
      dropArea.innerHTML += " " + elapsed + "ms";

      callbackFn(data);

    } catch (err) {
      dropArea.innerHTML += "<br/>&nbsp;Error: " + err;
    }
  };
};

export { onFileDropArea };