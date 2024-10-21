const Result = ({ score, totalQuestions }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-green-500">
        Quiz Completed!
      </h2>
      <p className="text-lg mt-4">
        Your Score: {score} / {totalQuestions}
      </p>
      <button
        className="mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
