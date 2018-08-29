import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

const Post = props => (
  <View style={styles.post}>
    <Text style={styles.titulo}>{props.titulo}</Text>
    <View style={styles.autorview}>
      <Text style={styles.autor}>{props.autor}</Text>
    </View>
    <Text style={styles.descricao}>{props.descricao}</Text>
  </View>
);

Post.defaultProps = {
  titulo: 'Título padrão',
  autor: 'Autor padrão',
  descricao: 'Descrição padrão',
};

Post.propTypes = {
  titulo: PropTypes.string,
  autor: PropTypes.string,
  descricao: PropTypes.string,
};

export default Post;
