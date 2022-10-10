import Link from 'next/link';
import IconArrowRight from '../../SVGs/IconArrowRight';
export interface ISecondaryButton {
  label: string;
  className?: string;
  path: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({
  label,
  className,
  path,
}) => {
  return (
    <Link href={`/${path}`}>
      <a
        className={`navigation-button link-overlay flex items-center gap-2 group ${className}`}
      >
        <span className="opacity-50 group-hover:opacity-100 group-hover:text-accent1">
          {label}
        </span>{' '}
        <IconArrowRight />
      </a>
    </Link>
  );
};

export default SecondaryButton;
