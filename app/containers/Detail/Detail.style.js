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
    paddingHorizontal: 20,
    marginBottom: 20
  },
  typesContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    padding: 10
  },
  typesTitle: {
    fontFamily: 'Oswald-Medium',
    fontSize: 16,
    color: '#575757',
    marginBottom: 10
  },
  infoCardContainer: {
    flexDirection: 'column'
  },
  typeCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  typesCard: type => {
    const style = {
      paddingHorizontal: 15,
      paddingVertical: 3,
      borderRadius: 100,
      elevation: 1,
      color: colors.white,
      fontFamily: 'Oswald-Regular',
      fontSize: 10
    }
    switch (type) {
      case 'Fighting':
        style.backgroundColor = '#bd5151';
        break;
      case 'Psychic':
        style.backgroundColor = '#5a8ec7';
        break;
      case 'Fairy':
        style.backgroundColor = '#c18ad4';
        break;
      case 'Lightning':
        style.backgroundColor = '#d1d084';
        break;
      case 'Darkness':
        style.backgroundColor = '#595959';
        break;
      case 'Water':
        style.backgroundColor = '#77c9c8';
        break;
      case 'Grass':
        style.backgroundColor = '#72ba79'
        break;
      case 'Fire':
        style.backgroundColor = '#e6ab3e'
        break;
      default:
        style.backgroundColor = 'skyblue';
        break;
    }
    return style;
  },
  noType: {
    fontFamily: 'Oswald-Regular',
    fontSize: 11
  },
  attackSection: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  attackContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 2,
    padding: 10
  },
  attackRow: {
    flexDirection: 'row'
  }
});

export { styles };
