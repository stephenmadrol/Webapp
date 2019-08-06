import React from 'react';
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import Button from '@enact/moonstone/Button';

const propTypes = {
  transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
  };

  const SpeechText = ({
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  }) => {
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    return (
      <div>
      <Button>Speak</Button><Button onClick={resetTranscript}>Reset</Button>
        <div className = "GetText">{transcript}</div>
      </div>
    );
  };
  SpeechText.propTypes = propTypes;
export default SpeechRecognition(SpeechText);