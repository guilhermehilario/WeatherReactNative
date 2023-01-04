import React from 'react';
import {Container, Icon, InputText} from './styles';

import {iconsLib} from '../../utilities';
import {TextInputFieldProps} from './types';

interface InputRootProps {
  children: React.ReactNode;
}

export function TextInputRoot({children}: InputRootProps) {
  return <Container>{children}</Container>;
}

export function TextInputIcon() {
  return <Icon source={iconsLib['Position-3D']} />;
}

export function TextInputField({...rest}: TextInputFieldProps) {
  return <InputText {...rest} />;
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Field: TextInputField,
};
