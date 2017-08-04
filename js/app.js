function buildButton(playSound) {
  var button = document.createElement("button");
  button.textContent = "Airhorn!";
  button.addEventListener('click', playSound);
  document.body.appendChild(button);
}

function loadAudio() {
  var context = new AudioContext();
  var request = new XMLHttpRequest();
  request.open("GET", "samples/airhorn.mp3");
  request.responseType = "arraybuffer";
  request.addEventListener('load', function() {
    context.decodeAudioData(this.response, function(buffer) {
      buildButton(function() {
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(0);
      });
    }, onSoundLoadError)
  });
  request.send();
}

function onSoundLoadError() {
  console.log("ERROR loading sounds!");
}

window.addEventListener('load', loadAudio);
