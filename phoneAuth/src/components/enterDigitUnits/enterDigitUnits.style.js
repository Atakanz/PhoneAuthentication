import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 306,
    height: 200,
    justifyContent: 'space-around',
  },
  textInputView: {
    width: 46,
    height: 46,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    alignItems: 'center',
    verticalAlign: 'center',
    backgroundColor: 'white',
  },
  timeDownText: {
    color: '#FF7D9F',
    fontSize: 14,
  },
  options: {
    width: 306,
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 76.02,
    justifyContent: 'space-between',
  },
  reSendText: {
    fontSize: 14,
    color: '#13C2E9',
  },
  buttonView: {
    position: 'absolute',
    top: 131,
  },
});
