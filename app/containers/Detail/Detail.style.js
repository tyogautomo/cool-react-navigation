import { StyleSheet } from 'react-native';

import { constant } from '../../utils/constant';
import { colors } from '../../themes/colors';

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
  },
  title: {
    fontFamily: 'TradeWinds-Regular',
    color: colors.white,
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10
  },
  typesSection: {
    paddingHorizontal: 20
  },
  typesContainer: {
    width: '100%',
    height: 100,
    backgroundColor: colors.white
  }
});

export { styles };
