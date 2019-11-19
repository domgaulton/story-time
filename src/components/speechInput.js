import React, { useState } from 'react';

function SpeechInput() {
  const [soundFX, set_soundFX] = useState('');

  const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.interimResults = true;
  // recognition.maxAlternatives = 10;
  recognition.continuous = true;

  recognition.addEventListener('result', e => {
    console.log(e);
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      // p.textContent = poopScript;
      // if (e.results[0].isFinal) {
      //   p = document.createElement('p');
      //   words.appendChild(p);
      // }
      console.log(transcript);
      transcript.includes("Fire");
      set_soundFX('Fire');
  });
  recognition.addEventListener('end', recognition.start);

  recognition.start();

  return (
    <div className="speech">
      Speech recognised: {soundFX}
    </div>
  );
}

export default SpeechInput;
