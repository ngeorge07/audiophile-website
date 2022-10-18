export interface IInputField {
  label: string;
  htmlFor: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'radio';
  className?: string;
}

const InputField: React.FC<IInputField> = ({
  label,
  htmlFor,
  placeholder,
  type,
  className,
}) => {
  return (
    <p className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={htmlFor} className="font-body text-[14px] font-bold">
        {label}
      </label>
      <input
        className="border border-secondary rounded-lg py-4 pl-6 font-body font-bold focus-visible:border-accent1   focus-visible:outline-none"
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        required
      />
    </p>
  );
};

export default InputField;
