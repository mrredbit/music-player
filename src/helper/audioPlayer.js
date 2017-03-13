import 'howler';

let audioPlayer;
let isLoadingTrack;

export default {
  loadTrack: function (url, options = {}) {
    isLoadingTrack = true;
    audioPlayer && audioPlayer.unload();
    audioPlayer = new window.Howl({
      html5: true,
      src: [url],
      onplay: () => {
        options.onPlay && options.onPlay();
        requestAnimationFrame(audioPlayer.step.bind(this));
      },
      onpause: () => {
        options.onPause && options.onPause();
      },
      onload: () => {
        options.onLoad && options.onLoad();
        isLoadingTrack = false;
      },
      onend: () => {
        if (!isLoadingTrack) {
          options.onEnd && options.onEnd();
        }
      }
    });
    audioPlayer.step = () => {
      if (audioPlayer && audioPlayer.playing()) {
        options.onStep && options.onStep(audioPlayer.seek(), audioPlayer.duration());
        requestAnimationFrame(audioPlayer.step.bind(this));
      }
    }
  },
  unload: function () {
    audioPlayer && audioPlayer.unload();
  },
  playPause: function () {
    if (!audioPlayer) return;
    if (!audioPlayer.playing()) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  },
  play: function () {
    if (!audioPlayer) return;
    if (!audioPlayer.playing()) {
      audioPlayer.play();
    }
  },
  pause: function () {
    if (!audioPlayer) return;
    if (audioPlayer.playing()) {
      audioPlayer.pause();
    }
  }
}
