const RecommendationCard = ({ title, content, isSelected, onClick }) => {
  return (
    <div
      className={`flex flex-col rounded-xl cursor-pointer ${
        isSelected ? "border-2 bg-white" : "border border-transparent bg-n-3"
      }`}
      onClick={onClick}
    >
      <div className={`p-4 rounded-t-xl ${isSelected ? "bg-n-5" : "bg-n-4"}`}>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className={`p-4 rounded-b-xl ${isSelected ? "bg-n-6" : "bg-n-5"}`}>
        <p className="text-base text-n-1">{content}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;