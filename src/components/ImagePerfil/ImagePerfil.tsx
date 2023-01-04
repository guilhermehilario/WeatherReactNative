import React from 'react';
import {PerfilImage} from './styles';

const image = require('../../../assets/img/Foto.png');

export function ImagePerfil() {
  return <PerfilImage source={image} />;
}
