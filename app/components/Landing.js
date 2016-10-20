import React, { Component } from 'react';
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

import { globals } from '../styles';


class Landing extends Component {
  constructor() {
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
  }
  visitDashboard() {
    this.props.navigator.push({
      name: 'Dashboard',
    });
  }
  testPress() {
    console.log("hi")
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Hello</Title>
        </Header>

        <Content>

          <Text style={globals.welcome}>
            Hello World!
          </Text>
          <Text style={globals.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={globals.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Button onPress={this.visitDashboard}>Dashing!</Button>
        </Content>
      </Container>
    )
  }
}

export default Landing;
