import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: colors.thinGray,
    flex: 1
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: 100
  },
  profileImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center'
  },
  menuContainer: {
    marginTop: 70,
  },
  menuCard: {
    flexDirection: 'row'
  },
  iconStyle: {
    marginRight: 10
  }
});

export { styles };
