
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

/**
 * ES6 方式
 */
export default class LifecycleComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("----- componentWillMount");
  }

  componentDidMount() {
    console.log("----- componentDidMount");
  }

  componentWillReciveProps(nextProps) {
    console.log("----- componentWillReciveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("----- shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("----- componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("----- componentDidUpdate");
  }

  componentWillUnmount(nextProps, nextState) {
    console.log("----- componentWillUnmount");
  }

  render() {
    console.log("----- render");
    return (
      <Text style={{backgroundColor: '#cccccc'}}>
        This is a Component named "HelloComponent"
      </Text>
    );
  }
}
