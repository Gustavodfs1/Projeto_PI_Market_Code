import React from 'react-native';

const {StyleSheet} = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 50,
    fontWeight: '800',
    marginTop: 180,
    marginBottom: 30,
    textAlign: 'center',
  },
  logoText2: {
    fontSize: 45,
    fontWeight: '800',
    marginTop: -50,
    marginBottom: 30,
    textAlign: 'center',
    color: '#d1677a',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 15,
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#d1677a',
    borderRadius: 15,
    height: 45,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
    color: '#3897f1',
  },
});

export default styles;
