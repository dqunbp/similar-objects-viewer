function onFileDropMap(e, callbackFn) {
  e.preventDefault();

  var reader = new FileReader();
  var dropArea = e.target;

  reader.readAsText(e.dataTransfer.files[0]);
  reader.onload = function (event) {
    try {
      var data = JSON.parse(event.target.result);
      callbackFn(data);

    } catch (err) {
      console.error('Loading file error', err)
    }
  };
};

export { onFileDropMap };