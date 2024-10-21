const QuestionCard = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
