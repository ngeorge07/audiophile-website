import Link from 'next/link';

export interface IPrimaryButton {
  label: string;
  ghost: boolean;
  className?: string;
  as: 'button';
}

export interface IPrimaryLink {
  label: string;
  ghost: boolean;
  className?: string;
  as: 'a';
  path: string;
}

type Element = IPrimaryButton | IPrimaryLink;

const PrimaryButton: React.FC<Element> = (props) => {
  return props.as === 'button' ? (
    <button
      className={`navigation-button py-4 px-8 ${
        props.ghost
          ? 'bg-transparent border border-black border-solid text-black hover:bg-black hover:text-white'
          : 'bg-accent1 text-white hover:bg-accent2'
      } ${props.className}`}
      onClick={() => props.as === 'button' && console.log('da')}
    >
      {props.label}
    </button>
  ) : (
    <Link href={props.path}>
      <a
        className={`navigation-button inline-block py-4 px-8 ${
          props.ghost
            ? 'bg-transparent border bg-none border-black border-solid text-black hover:bg-black hover:text-white'
            : 'text-white hover:bg-accent2'
        } ${props.className}`}
      >
        {props.label}
      </a>
    </Link>
  );
};

export default PrimaryButton;
