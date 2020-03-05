import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';
import { constant } from '../../utils/constant';

const { DIMENSIONS: { DEVICE_WIDTH } } = constant;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 3,
    marginTop: 10
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
    width: '70%',
    padding: 0
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  cardImage: {
    width: 245 / (DEVICE_WIDTH / 160),
    height: 342 / (DEVICE_WIDTH / 160),
    borderRadius: 4
  },
  cardInfoContainer: {
    paddingHorizontal: 15
  },
  cardTitle: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 16,
    color: colors.myGrey
  },
  cardArtist: {
    fontFamily: 'Oswald-Regular',
    fontSize: 12,
    color: colors.myGrey,
  },
  typesCardContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardType: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontFamily: 'Oswald-Regular',
    fontSize: 11,
    marginRight: 7,
    color: colors.white,
    borderRadius: 20
  }
});

export { styles };
