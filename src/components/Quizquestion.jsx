import React, { useState } from 'react';

function QuizQuestion({ question, options, answer, onNextQuestion, questionNumber, totalQuestions, resetTimer }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === '') {
      alert("Please select an option before submitting.");
      return;
    }

    const isCorrect = selectedOption === answer;
    onNextQuestion(isCorrect);
    setSelectedOption('');
    resetTimer();
  };

  return (
    <div className='mx-auto md:container w-[90vw]'>
        <div className='border-dashed border-b-2 pb-5 mt-[30px] mb-[30px] border-gray-500'>
          <span className='text-4xl font-bold text-gray-300'>Question {questionNumber} </span>
          <span className='text-xl text-gray-400'> / {totalQuestions}</span>
        </div>
      <h2 className='w-full text-gray-300 gap-3 text-2xl'>{question}</h2>
      <div className='w-full text-gray-300 text-xl'>
        {options.map((option) => (
          <label htmlFor={option}>
            <div className='w-full p-3 border-2 border-gray-500 flex items-center mt-2 rounded-md' key={option}>
            <input
              className='mr-3'
              type="radio"
              id={option}
              name="quiz-radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </div>
          </label>
        ))}
      </div>
      <div className='text-center'>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-3" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
}

export default QuizQuestion;
