import {TextInputProps} from 'react-native';

export interface TextInputFieldProps
  extends Omit<TextInputProps, 'placeholderTextColor'> {}
