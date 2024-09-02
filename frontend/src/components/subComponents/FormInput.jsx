const FormInput = ({ id, label, name, value, onChange}) => {
  return (
    <div className="mt-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-n-15"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          id={id}
          name={name}
          placeholder="0"
          value={value === -1 ? '' : value}
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 focus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
          onChange={onChange}
          min="0"
        />
      </div>
    </div>
  );
};

export default FormInput;
