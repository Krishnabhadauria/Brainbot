import React, { useState } from 'react';
import { getGeminiResponse } from '../api/geminiApi';

const EnglishComponent = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askGemini = async () => {
    const result = await getGeminiResponse(`Help with English: ${question}`);
    setResponse(result);
  };

  const handleHomeClick = () => {
    // Add your home page URL here
    window.location.href = '/';
  };

  return (
    <div className="container">
      <div className="home-button" onClick={handleHomeClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <h2 className="heading">Learn English with Brain Bot</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask an English question"
        className="input-field"
      />
      <button onClick={askGemini} className="ask-button">Ask</button>
      <p className="response">AI Response: {response}</p>
    </div>
  );
};

export default EnglishComponent;