import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export const globals = StyleSheet.create({
  landingContainer: {
  },
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
})
