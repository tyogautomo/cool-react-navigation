import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';
import { constant } from '../../utils/constant';

const { DIMENSIONS: { DEVICE_WIDTH } } = constant;

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.mineShaft,
    flex: 1
  },
  logo: {
    width: 538 * 0.6,
    height: 198 * 0.6,
    alignSelf: 'center',
    marginTop: 20
  },
  subTitle: {
    color: colors.white,
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 40,
    fontFamily: 'Oswald-Bold'
  },
  loadingContainer: {
    justifyContent: 'center',
    height: 300,
    alignItems: 'center'
  },
  loadingAnimation: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: colors.white
  },
  cardsContainer: {
    alignItems: 'center'
  },
  contentContainer: {
    alignContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-around',
    width: DEVICE_WIDTH
  },
  card: {
    marginBottom: 10
  },
  cardImage: {
    width: 245 / (DEVICE_WIDTH / 160),
    height: 342 / (DEVICE_WIDTH / 160),
    borderRadius: 4
  },
  cardName: {
    color: colors.myGrey,
    fontSize: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 7,
    top: -15,
    elevation: 2,
    width: (245 / (DEVICE_WIDTH / 160)) * 0.8,
    fontFamily: 'Oswald-Medium'
  },
  footerContainer: {
    marginBottom: 20,
    height: 40
  }
})

export { styles };
