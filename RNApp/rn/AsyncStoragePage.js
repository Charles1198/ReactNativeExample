
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  TextInput,
  Button
} from 'react-native';

export default class AsyncStoragePage extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      key: '',
      value: '',
      result: 'kjuyfgtuy'
    }
  }

  static navigationOptions = {
    title: '增删改查'
  };

  render() {
    return (
      <View >
        <View style={{ height: 40, flexDirection: 'row', alignContent: 'center' }}>
          <Text>key</Text>
          <TextInput
            style={{ width: 100, fontSize: 20 }}
            onChangeText={(key) => this.setState({ key })}
            value={this.state.key}
          />
          <Text>value</Text>
          <TextInput
            style={{ width: 100, fontSize: 20 }}
            onChangeText={(value) => this.setState({ value })}
            value={this.state.value}
          />
        </View>
        <View style={{ height: 40, flexDirection: 'row' }}>
          <View style={{ margin: 5 }}>
            <Button style={styles.button} onPress={() => this.add()} title='增加' />
          </View>
          <View style={{ margin: 5 }}>
            <Button style={styles.button} onPress={() => this.delete()} title='删除' />
          </View>
          <View style={{ margin: 5 }}>
            <Button style={styles.button} onPress={() => this.modify()} title='修改' />
          </View>
          <View style={{ margin: 5 }}>
            <Button style={styles.button} onPress={() => this.select()} title='查询' />
          </View>
          <View style={{ margin: 5 }}>
            <Button style={styles.button} onPress={() => this.clear()} title='清空' />
          </View>
        </View>
        <Text>{this.state.result}</Text>
      </View>
    );
  }

  add() {
    if (this.state.key == '' || this.state.value == '') {
      Alert.alert('请填写 key 和 value')
      return
    }

    AsyncStorage.setItem(this.state.key, this.state.value, (error) => {
      if (!error) {
        Alert.alert('保存成功')
      } else {
        Alert.alert('保存失败')
      }
    })
  }

  delete() {
    if (this.state.key == '') {
      Alert.alert('请填写 key')
      return
    }

    AsyncStorage.getAllKeys((error, keys) => {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key == this.state.key) {
          AsyncStorage.removeItem(key, (error) => {
            if (!error) {
              Alert.alert('删除成功')
            } else {
              Alert.alert('删除失败')
            }
          })
          return
        }
      }
    })

    Alert.alert('key:' + this.state.key + ' 不存在')
  }

  modify() {
    if (this.state.key == '' || this.state.value == '') {
      Alert.alert('请填写 key 和 value')
      return
    }

    AsyncStorage.getAllKeys((error, keys) => {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key == this.state.key) {
          AsyncStorage.setItem(key, this.state.value, (error) => {
            if (!error) {
              Alert.alert('修改成功')
            } else {
              Alert.alert('修改失败')
            }
          })
          return
        }
      }
    })

    Alert.alert('key:' + this.state.key + ' 不存在')
  }

  select() {
    if (this.state.key == '') {
      Alert.alert('请填写 key')
      return
    }

    AsyncStorage.getAllKeys((error, keys) => {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key == this.state.key) {
          AsyncStorage.getItem(key, (error, result) => {
            if (!error) {
              Alert.alert('key:' + this.state.key + ', value:' + result)
            } else {
              Alert.alert('查询失败')
            }
          })
          return
        }
      }
    })
    Alert.alert('key:' + this.state.key + ' 不存在')
  }

  clear() {
    AsyncStorage.clear((error) => {
      if (!error) {
        Alert.alert('清空成功')
      } else {
        Alert.alert('清空失败')
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

