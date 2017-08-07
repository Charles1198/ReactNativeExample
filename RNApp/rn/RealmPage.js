
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
//使用第三方库 Realm，导入方式：
//npm install --save realm
//react-native link realm
import Realm from 'realm';

const CarSchema = {
  name: 'Car',
  properties: {
    make: 'string',
    model: 'string',
  }
};

export default class RealmPage extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      
    }
  }

  static navigationOptions = {
    title: 'Realm 数据库'
  };


  render() {
    
    let realm = new Realm({ schema: [CarSchema] })
    realm.write(() => {
      realm.create('Car', {make:'BMW', model:'X1'})
    })
    
    return (
      <View>
        <Text>Count of cars in Realm:{realm.objects('Car').length}</Text>
      </View >
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

