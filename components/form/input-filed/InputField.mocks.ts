import { IInputField } from './InputField';

const base: IInputField = {
  label: 'Email Address',
  htmlFor: 'email',
  placeholder: 'example@email.com',
  type: 'email',
  className: '',
  pattern:
    '(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
};

export const mockInputFieldProps = {
  base,
};
