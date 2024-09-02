const RecommendationCard = ({ title, content }) => {
    return (
      <div className=" w-full mx-auto bg-n-2 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default RecommendationCard;
  