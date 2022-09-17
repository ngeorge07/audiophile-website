import { IPrimaryButton } from './PrimaryButton';

const solid: IPrimaryButton = {
  label: 'see product',
  ghost: false,
};

const ghost: IPrimaryButton = {
  label: 'see product',
  ghost: true,
};

export const mockPrimaryButtonProps = {
  solid,
  ghost,
};
