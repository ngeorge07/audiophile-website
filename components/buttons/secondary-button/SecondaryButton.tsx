import IconArrowRight from '../../SVGs/IconArrowRight';
export interface ISecondaryButton {
  label: string;
  className?: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({ label, className }) => {
  return (
    <a
      className={`navigation-button link-overlay flex items-center gap-2 group ${className}`}
    >
      <span className="opacity-50 group-hover:opacity-100">{label}</span>{' '}
      <IconArrowRight />
    </a>
  );
};

export default SecondaryButton;
