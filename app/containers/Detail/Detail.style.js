import { StyleSheet } from 'react-native';

import { constant } from '../../utils/constant';

const { DIMENSIONS: { DEVICE_WIDTH } } = constant;

const styles = StyleSheet.create({
  cardSection: {
    alignItems: 'center',
    marginTop: 50
  },
  cardContainer: {
    width: 245 / (DEVICE_WIDTH / 250),
    height: 342 / (DEVICE_WIDTH / 250),
    borderRadius: 7,
    justifyContent: 'center'
  }
});

export { styles };
