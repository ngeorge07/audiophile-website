export interface IPrimaryButton {
  label: string;
  ghost: boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ label, ghost }) => {
  return (
    <button
      onClick={() => console.log('Da')}
      className={`navigation-button w-40 h-12 ${
        ghost
          ? 'bg-transparent border border-black border-solid text-black'
          : 'bg-accent1 text-white'
      }`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
