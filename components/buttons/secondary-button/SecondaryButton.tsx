import IconArrowRight from '../../SVGs/IconArrowRight';
export interface ISecondaryButton {
  label: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({ label }) => {
  return (
    <button className="navigation-button flex items-center gap-2 group">
      <span className="opacity-50 group-hover:opacity-100">{label}</span>{' '}
      <IconArrowRight />
    </button>
  );
};

export default SecondaryButton;
