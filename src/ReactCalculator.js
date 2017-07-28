import React, { Component } from 'react';
import InputButton from './InputButton';
import Style from './Style';

import {
    Text,
    AppRegistry,
    View,
    TouchableHighlight
} from 'react-native';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];


class ReactCalculator extends Component {
  _renderInputButtons() {
    return inputButtons.map((row) => {
      return(
        <View style={Style.inputRow} key={`${row[0]}-row`}>
          {
            row.map((val) => {
              return(<InputButton value={val} 
                                  key={`${val}-button`} 
                                  onPress={this._onInputButtonPressed.bind(this, val)} 
                                  highlight={this.state.selectedSymbol === val}/>);      
            })
          }
        </View>
      );
    });
  }

  _onClearPressed = (input) => {
    this.setState({inputValue: 0});
  }

  _handleEqual() {
    let symbol = this.state.selectedSymbol,
        inputValue = this.state.inputValue,
        previousInputValue = this.state.previousInputValue;

    if (!symbol) {
      return;
    }

    this.setState({
      previousInputValue: 0,
      inputValue: eval(previousInputValue + symbol + inputValue),
      selectedSymbol: null
    });
  }

  _onInputButtonPressed(input) {
    if (input === '.') {
      this.setState({inputValue: this.state.inputValue.toFixed(1)});
    }

    switch(typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;
    if (this.state.inputValue.toString().endsWith('.0')) {
      inputValue = inputValue / 10.0;
    } else if (this.state.inputValue.toString().indexOf('.') > -1) {
      inputValue = parseFloat(`${this.state.inputValue}${num}`);
    }
    this.setState({inputValue})
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        this._handleEqual();
        break;
    }
  }

  _display() {
    let display = this.state.inputValue;
    if (this.state.inputValue === 0) {
      display = '';
    } else if (display.toString().endsWith('.0')) {
      display = display.toString().substring(0, display.toString().length - 1);
    }
    return display;
  }

  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    };
  }

  render () {
    return (
      <View style={Style.rootContainer} >
        <View style={Style.displayContainer} >
          <View style={Style.displayContainer}>
            <Text style={Style.displayText} >
              {
                this._display()
              }
            </Text>
          </View>
        </View>

        <View style={Style.clearContainer} >
          <TouchableHighlight 
            style={Style.inputButton}
            underlayColor='#193441'
            onPress={this._onClearPressed}
          >
            <Text style={Style.clearText} >Clear</Text>
          </TouchableHighlight>
        </View>

        <View style={Style.inputContainer} >
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);