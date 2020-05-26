import React, {useEffect, useState, useRef} from 'react';

import './AudioPlayer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import the library
import {library} from '@fortawesome/fontawesome-svg-core';

// import your icons
import {
  faCheckSquare,
  faPlay,
  faPause,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
// import { faCode, faHighlighter } from '@fortawesome/free-regular-svg-icons';

library.add(
  faMoneyBill,
  faPlay,
  faPause,
  faCheckSquare
  // more icons go here
);

const AudioPlayer = ({word, wordNo, audioFile, check, isChecked}) => {
  const [playActive, setPlayActive] = useState(true);
  // const [buttonText, setButtonText] = useState('play');
  const [rangeEnd, setRangeEnd] = useState(0);

  const myAudio = useRef(null);
  useEffect(() => {
    myAudio.current.addEventListener('loadstart', () => {
      // console.log('Started loading');
    });
    myAudio.current.addEventListener('durationchange', () => {
      // console.log('Duration: ');
    });

    myAudio.current.addEventListener('durationchange', () => {
      // console.log('Can play');
    });

    myAudio.current.addEventListener('canplaythrough', function () {
      // console.log('Can play through');
    });

    myAudio.current.addEventListener('timeupdate', function () {
      if (rangeEnd && myAudio.current.currentTime >= rangeEnd) {
        myAudio.current.pause();
        setPlayActive(true);
      }
      console.log('TIME UPDATE');
    });

    myAudio.current.addEventListener('ended', function () {
      console.log('ENDED');
    });
  });

  const handlePlayPause = (wordNo) => {
    if (playActive) {
      myAudio.current.currentTime = wordNo.wordNo;
      setRangeEnd(wordNo.wordNo + 0.9);

      myAudio.current.play();
      setPlayActive(false);
      console.log(wordNo);
    } else {
      myAudio.current.pause();
      setPlayActive(true);
    }
  };

  return (
    <div className='row'>
      <div className='column'>
        <audio id='the-audio' ref={myAudio}>
          <source src={audioFile} type='audio/mpeg' />
          <p>
            Your browser does not support HTML5 audio, but you can still
            <a href={audioFile}>download the music</a>.
          </p>
        </audio>
        <input
          className={`${isChecked ? 'checked' : ''}`}
          type='checkbox'
          onChange={() => check(wordNo)}
        />
        {wordNo + 1}
        <button
          className={`btn ${playActive ? 'play' : 'pause'} ${isChecked ? 'checked' : ''}`}
          id='play-pause'
          disabled={isChecked}
          onClick={() => handlePlayPause({wordNo})}
        >
          {playActive && !isChecked ? (
            <FontAwesomeIcon icon={['fa', 'play']} />
          ) : !isChecked ? (
            <FontAwesomeIcon icon={['fa', 'pause']} />
          ) : (
            <FontAwesomeIcon icon={['fa', 'check-square']} />
          )}
        </button>
      </div>
      <div className={`column word ${isChecked ? 'checked' : ''}`}>{word}</div>
    </div>
  );
};

export default AudioPlayer;
