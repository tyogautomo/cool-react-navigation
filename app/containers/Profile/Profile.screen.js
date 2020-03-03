import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../themes/colors';

class Profile extends Component {
  onPressMenu = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  render() {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={this.onPressMenu}>
            <IconMaterial name="menu" color={colors.myGrey} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

export { Profile };
