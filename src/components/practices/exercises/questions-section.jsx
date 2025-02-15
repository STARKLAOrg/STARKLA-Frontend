
import React, { useState, useEffect } from 'react';

const QuestionsSection = ({ question, setSelectedAnswer,selectedAnswer  }) => {

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index); 
  };

  useEffect(() => {
    setSelectedAnswer(null); 
  }, [question]);
  
  const answers = question.options;

  return (
    <div className="w-full mt-7 rounded-lg p-5 bg-white">
      <h2 className="text-black font-bold text-xl">Question {question.number}</h2>
      <p className="text-black font-normal font-serif mt-6">{question.question}</p>

      <div className="mt-10">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="flex flex-row items-center border-gray-200 border-2 h-14 px-3 rounded-md mb-3"
          >
            <div
              className={`border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer ${
                selectedAnswer === index ? "bg-blue-500 border-blue-500" : "bg-white"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              {selectedAnswer === index && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
            <p className="text-black ml-4">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;
