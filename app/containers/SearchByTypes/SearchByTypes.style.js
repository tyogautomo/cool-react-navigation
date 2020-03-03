import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 3
  },
  input: {
    backgroundColor: colors.thinGray,
    borderRadius: 99,
    paddingLeft: 50
  },
  typesContainer: {
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdownContainer: {
    width: '100%',
    padding: 0
  }
});

export { styles };
