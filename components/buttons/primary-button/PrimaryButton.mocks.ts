import { IPrimaryButton } from './PrimaryButton';

const solid: IPrimaryButton = {
  label: 'see product',
  ghost: false,
  as: 'button',
  className: '',
};

const ghost: IPrimaryButton = {
  label: 'see product',
  ghost: true,
  as: 'button',
  className: '',
};

export const mockPrimaryButtonProps = {
  solid,
  ghost,
};
