const Card = ({ title = "", value, valueColor = "text-white", link = "" }) => {
  // Determine if the card should be clickable
  const isClickable = link !== "";

  // Determine text size based on the presence of the title
  const titleClass = title ? "text-sm uppercase tracking-wide" : "";
  const valueClass = title ? "text-xl sm:text-3xl" : "text-base";

  return (
    <a
      href={isClickable ? link : undefined} // Set href if clickable, else undefined
      className={`flex flex-col ${title ? 'w-56' : 'w-auto'} bg-n-7 border border-white shadow-md rounded-lg p-4 max-h-24 ${isClickable ? 'cursor-pointer' : ''}`}
      target={isClickable ? "_blank" : undefined} // Open in a new tab if clickable
      rel={isClickable ? "noopener noreferrer" : undefined} // Security attributes if clickable
    >
      {/* Conditionally render title only if it's not an empty string */}
      {title && (
        <div className="flex items-center gap-x-2">
          <p className={`text-white ${titleClass}`}>{title}</p>
        </div>
      )}

      <div className="mt-1 flex items-center gap-x-2">
        <h3 className={`font-medium ${valueClass} ${valueColor}`}>
          {value}
        </h3>
      </div>
    </a>
  );
};

export default Card;