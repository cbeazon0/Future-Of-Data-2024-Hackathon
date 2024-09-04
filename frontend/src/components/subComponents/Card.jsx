const Card = ({ title, value, valueColor }) => {
  return (
    <div className="flex flex-col w-56 bg-n-7 border border-white shadow-md rounded-lg p-4 max-h-24">
      <div className="flex items-center gap-x-2">
        <p className="text-sm uppercase tracking-wide text-white">{title}</p>
      </div>

      <div className="mt-1 flex items-center gap-x-2">
        <h3 className={`text-xl sm:text-3xl font-medium ${valueColor}`}>
          {value}
        </h3>
      </div>
    </div>
  );
};

export default Card;
