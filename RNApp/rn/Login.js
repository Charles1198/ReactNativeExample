
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
            keyboardType='phone-pad'
            style={styles.input}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.text}
          />
        </View>
        <View style={styles.viewDirectionRow}>
          <Text style={styles.textTitle}>密码:</Text>
          <TextInput
            keyboardType='name-phone-pad'
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <Button
          style={styles.button}
          title='登录'
          onPress={() => this.toLogin()}
        />
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, { height: 80 }]}
          size='large'
        />
      </View>
    );
  }

  toLogin() {
    this.state.animating = true
    // fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.state.animating = false
    //     console.log(responseJson.movies)
    //   })
    //   .catch((error) => {
    //     this.state.animating = false
    //     console.error(error);
    //   });
    if (this.state.username == '') {
      Alert.alert('请输入用户名')
      return
    }

    if (this.state.password == '') {
      Alert.alert('请输入密码')
      return
    }

    if (this.state.password != '11111111') {
      Alert.alert('密码错误')
      return
    }

    this.state.animating = true
    url = 'https://api-math-examination.bqteam.com/user/authentication'

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'login_key=' + this.state.username + '&password=mHdLVJ06deWfqr5WuM00Bw=='
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.state.animating = false
        console.log(responseJson)
        console.log('statud_code:' + responseJson.status_code)
        
        code = responseJson.status_code
        if (code == '200') {
          Alert.alert('登录成功')
        } else {
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        this.state.animating = false
        console.error(error);
      });
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

