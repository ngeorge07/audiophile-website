import { IPrimaryButton } from './PrimaryButton';

const solid: IPrimaryButton = {
  label: 'see product',
  ghost: false,
  as: 'button',
};

const ghost: IPrimaryButton = {
  label: 'see product',
  ghost: true,
  as: 'button',
};

export const mockPrimaryButtonProps = {
  solid,
  ghost,
};
