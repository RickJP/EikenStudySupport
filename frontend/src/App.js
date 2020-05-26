import React, {useState, useEffect} from 'react';

import AudioPlayer from './components/AudioPlayer';

import axios from './axios';

function App() {
  const [list, setList] = useState();


  useEffect(() => {
    const newWords = [
      {word: 'thrive', checked: false},
      {word: 'grind', checked: false},
      {word: 'confiscate', checked: false},
      {word: 'derive', checked: false},
      {word: 'detest', checked: false},
      {word: 'mock', checked: false},
      {word: 'feign', checked: false},
      {word: 'elicit', checked: false},
      {word: 'apprehend', checked: false},
    ];

    axios.get(`/studyitems`).then((res) => {
      console.log(res.data)
    });

    setList(newWords);
  }, []);

 

  const handleChecked = (id) => {
    const newList = list.map((item, index) => {
      if (index === id) {
        const updatedItem = {
          ...item,
          checked: !item.checked
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);
  };

  const Players = () => {
    return (
      <>
        <h3 className='title'>New Words</h3>
        <hr />
        <ul className='list-of-words'>
          {list && list.map((item, wordNo) => {
            return (
              <li key={wordNo}>
                <AudioPlayer
                  word={item.word}
                  wordNo={wordNo}
                  check={handleChecked}
                  isChecked={item.checked}
                  audioFile='audio/V26.mp3'
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  return <div className='App'>{Players()}</div>;
}

export default App;
