import { useState } from 'react';
export interface IInputField {
  label: string;
  htmlFor: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'radio';
  pattern?: string;
  className?: string;
}

const InputField: React.FC<IInputField> = ({
  label,
  htmlFor,
  placeholder,
  type,
  className,
  pattern,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      htmlFor={htmlFor}
      className={`flex flex-col gap-1 font-body text-[14px] font-bold ${className}`}
    >
      <span>{label}</span>
      <input
        onBlur={() => !isFocused && setIsFocused((prev) => !prev)}
        className={`peer border border-secondary rounded-lg py-4 pl-6 font-body font-bold focus-visible:border-accent1 focus-visible:outline-none ${
          isFocused && 'invalid:border-error invalid:border-2'
        }`}
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        pattern={pattern}
        required
      />
      <span
        className={`font-medium invisible ${
          isFocused && 'peer-invalid:visible'
        } text-error`}
      >
        Wrong input
      </span>
    </label>
  );
};

export default InputField;
