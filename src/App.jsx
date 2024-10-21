// import React, { useState } from "react";
// import questions from "./utils/questions";
// import QuestionCard from "./components/QuestionCard";
// import Result from "./components/Result";
// import "./App.css";

// const App = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question
//   const [score, setScore] = useState(0); // Track score
//   const [isQuizFinished, setIsQuizFinished] = useState(false); // Check if quiz is done

//   // Handle user's answer and move to the next question
//   const handleAnswer = (selectedOption) => {
//     const correctAnswer = questions[currentQuestion].answer;
//     if (selectedOption === correctAnswer) {
//       setScore((prevScore) => prevScore + 1); // Increment score if correct
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion); // Move to next question
//     } else {
//       setIsQuizFinished(true); // Quiz completed
//     }
//   };

//   return (
//     <div className="App">
//       <h1>MCQ Game App</h1>
//       {!isQuizFinished ? (
//         <QuestionCard
//           question={questions[currentQuestion].question}
//           options={questions[currentQuestion].options}
//           onAnswer={handleAnswer}
//         />
//       ) : (
//         <Result score={score} totalQuestions={questions.length} />
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import './index.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-700 flex items-center justify-center p-5">

      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          MCQ Game App
        </h1>
        {!isQuizFinished ? (
          <QuestionCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
        ) : (
          <Result score={score} totalQuestions={questions.length} />
        )}
      </div>
    </div>
  );
};

export default App;
