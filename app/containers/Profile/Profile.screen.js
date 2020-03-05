import React, { Component, createRef } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from 'reanimated-bottom-sheet';
// import { Button } from 'react-native-paper';

import { colors } from '../../themes/colors';

class Profile extends Component {
  bottomSheetRef = createRef();

  onPressMenu = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  renderHeader = () => {

  };

  onPressButtonSheet = () => {
    this.bottomSheetRef.current.snapTo(1);
  };

  renderContent = () => {
    return (
      <View style={{ backgroundColor: colors.thinGray2, height: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Testetetete</Text>
      </View>
    )
  };


  renderBottomSheet = () => {
    return (
      <View style={{ flex: 1 }}>
        <BottomSheet
          ref={this.bottomSheetRef}
          snapPoints={[450, 300, 0]}
          renderContent={this.renderContent}
          renderHeader={this.renderHeader}
          initialSnap={1}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={this.onPressMenu}>
            <IconMaterial name="menu" color={colors.myGrey} size={30} />
          </TouchableOpacity>
        </View>
        <Button title="Press" onPress={this.onPressButtonSheet} mode="contained" />
        {this.renderBottomSheet()}
        <View>
        </View>
      </View >
    );
  };
}

export { Profile };
