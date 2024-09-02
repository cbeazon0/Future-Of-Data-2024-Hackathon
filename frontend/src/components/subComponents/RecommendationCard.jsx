const RecommendationCard = ({ title, content }) => {
    return (
      <div className={`w-full`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default RecommendationCard;
  