/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View
} from 'native-base';

class MyFirstRN extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Hello</Title>
        </Header>

        <Content>

          <Text style={styles.welcome}>
            Hello World!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Button>Touch me!</Button>
        </Content>
      </Container>
    );
  }

  buttonWasPressed(event) {
    alert("hi");
    console.log("pressed");
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyFirstRN', () => MyFirstRN);
