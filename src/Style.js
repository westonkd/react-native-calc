import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  inputContainer: {
    flex: 7,
    backgroundColor: '#3E606F'
  },

  clearContainer: {
    backgroundColor: 'orange',
    flex: 1
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },

  clearText: {
    fontSize: 22,
    color: 'white'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  displayText: {
    color: 'white',
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  }
});

export default Style;