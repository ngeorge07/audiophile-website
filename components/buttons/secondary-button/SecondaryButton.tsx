import React from 'react';

export interface ISecondaryButton {
  label: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({ label }) => {
  return <button className="navigation-button opacity-50">{label}</button>;
};

export default SecondaryButton;
