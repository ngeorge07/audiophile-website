import Link from 'next/link';

export interface IPrimaryButton {
  label: string;
  ghost: boolean;
  as: 'button' | 'a';
  className?: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  label,
  ghost,
  as,
  className,
}) => {
  return as === 'button' ? (
    <button
      className={`navigation-button py-4 px-8 ${
        ghost
          ? 'bg-transparent border border-black border-solid text-black hover:bg-black hover:text-white'
          : 'bg-accent1 text-white hover:bg-accent2'
      } ${className}`}
      onClick={() => as === 'button' && console.log('da')}
    >
      {label}
    </button>
  ) : (
    <Link href="#">
      <a
        className={`navigation-button inline-block py-4 px-8 ${
          ghost
            ? 'bg-transparent border border-black border-solid text-black hover:bg-black hover:text-white'
            : 'bg-accent1 text-white hover:bg-accent2'
        } ${className}`}
      >
        {label}
      </a>
    </Link>
  );
};

export default PrimaryButton;
