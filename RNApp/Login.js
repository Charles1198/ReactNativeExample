
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(porps) {
    super(porps);
    this.state = {
      username: '',
      password: '',
      animating: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewDirectionRow}>
          <Text style={styles.textTitle}>用户名:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.text}
          />
        </View>
        <View style={styles.viewDirectionRow}>
          <Text style={styles.textTitle}>密码:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <Button
          style={styles.button}
          title='登录'
          onPress={() => {
            
          }}
        />
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, { height: 80 }]}
          size="large"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 44
  },
  viewDirectionRow: {
    flexDirection: 'row'
  },
  textTitle: {
    width: 80,
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    fontSize: 20
  },
  button: {
    width: 200,
    marginTop: 16
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

