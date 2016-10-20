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


class Dashboard extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <Container>
        <Header>
          <Button onPress={this.goBack}>back</Button>
          <Title>Dashing</Title>
        </Header>

        <Content>

          <Text style={globals.welcome}>
            This is the dashboard!
          </Text>
          <Text style={globals.instructions}>
            You mioght expect some stuff here
          </Text>
        </Content>
      </Container>
    )
  }
}

export default Dashboard;
