/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import Post from 'components/Post';
import styles from './styles';

export default class App extends Component {

  state = {
    posts: [
      { id: 0, titulo: 'post0', autor: 'autor0', descricao: 'descricao0' },
      { id: 1, titulo: 'post1', autor: 'autor1', descricao: 'descricao1' },
      { id: 2, titulo: 'post2', autor: 'autor2', descricao: 'descricao2' },
      { id: 3, titulo: 'post3', autor: 'autor3', descricao: 'descricao3' },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>
            Go Native App!
          </Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
           <Post key={post.id} titulo={post.titulo} autor={post.autor} descricao={post.descricao} />
          ))}
          <Post />
        </ScrollView>
      </View>
    );
  }
}
