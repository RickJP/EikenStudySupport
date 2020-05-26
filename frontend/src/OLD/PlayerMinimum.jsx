import React, {useEffect} from 'react';

const PlayerMinimum = () => {
  useEffect(() => {
    var myAudio = document.getElementById('the-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');

    play.onclick = playAudio;
    pause.onclick = pauseAudio;

    function playAudio() {
      myAudio.play();
    }
    function pauseAudio() {
      myAudio.pause();
    }
  });

  return (
    <audio controls>
      <source src='audio/piano.mp3' type='audio/mpeg' />

      <p>
        Your browser does not support HTML5 audio, but you can still
        <a href='audio/piano.mp3'>download the music</a>.
      </p>
    </audio>
  );
};

export default PlayerMinimum;
