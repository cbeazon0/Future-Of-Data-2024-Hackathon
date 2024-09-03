const RecommendationCard = ({ title, content, isSelected, onClick }) => {
  return (
    <div
      className={`w-full mx-auto p-6 rounded-lg shadow-md cursor-pointer ${
        isSelected ? "border-2 bg-white" : "border border-transparent bg-n-3"
      }`}
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default RecommendationCard;
