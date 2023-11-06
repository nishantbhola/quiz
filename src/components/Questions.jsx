import React, { useState } from 'react';
import QuizQuestion from './Quizquestion';
import Timer from './Timer';
function Question() {
  const initialQuestions = [
      {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Jupiter",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "Who is known as the 'Father of Modern Physics'?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein",
      },
      {
        question: "Which planet is often called the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for the element gold?",
        options: ["Go", "Ge", "Au", "Ag"],
        answer: "Au",
      },
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo",
      },
      {
        question: "Which famous scientist developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O",
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
    ];


    const [resetTimer, setResetTimer] = useState(false);

    const handleTimerReset = () => {
      setResetTimer(!resetTimer);
    };
  

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className='mx-auto'>
      {quizCompleted ? (
        <div className="flex justify-center items-center h-screen">
        <div className="text-center w-[90vw]">
          <p className="text-xl text-gray-300 pb-2">Congratulations, you have completed the quiz!</p>
          <p className="text-2xl text-gray-300 pb-2">Your score: {score}/{questions.length}</p>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-3"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
      
      
      ) : (
        <div>
            <Timer onTimeExpired={handleNextQuestion} resetTimer={resetTimer} />
          <QuizQuestion
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            answer={questions[currentQuestionIndex].answer}
            onNextQuestion={handleNextQuestion}
            questionNumber={currentQuestionIndex + 1} 
            totalQuestions={questions.length}
            resetTimer={handleTimerReset} 
          />
        </div>
      )}
    </div>
  );
}

export default Question;
