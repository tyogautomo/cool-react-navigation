import React, { Component, createRef } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, Animated } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'reanimated-bottom-sheet';
// import { Button } from 'react-native-paper';

import { colors } from '../../themes/colors';

class Profile extends Component {
  bottomSheetRef = createRef();
  offset = 0;
  state = {
    animatedOpacity: new Animated.Value(0),
    animatedPadding: new Animated.Value(0),
    animatedHeight: new Animated.Value(0),
    animatedColor: new Animated.Value(0)
  };

  onPressMenu = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  onPressButtonSheet = () => {
    this.bottomSheetRef.current.snapTo(0);
  };

  handleScroll = (event) => {
    const { animatedOpacity, animatedPadding, animatedHeight, animatedColor } = this.state;
    const currentOffsetY = event.nativeEvent.contentOffset.y;
    if (currentOffsetY > 30) {
      if (currentOffsetY > this.offset) {
        animatedOpacity.setValue(this.offset)
        animatedPadding.setValue(this.offset)
        animatedHeight.setValue(this.offset)
        animatedColor.setValue(this.offset)
      }
    }
    if (currentOffsetY < this.offset) {
      if (currentOffsetY < 91) {
        animatedOpacity.setValue(this.offset)
        animatedPadding.setValue(this.offset)
        animatedHeight.setValue(this.offset)
        animatedColor.setValue(this.offset)
      }
    }
    this.offset = currentOffsetY
  }

  renderHeaderBar = () => {
    const { animatedOpacity } = this.state;
    return (
      <>
        <Animated.View style={{
          height: 70,
          paddingVertical: 20,
          paddingHorizontal: 60,
          backgroundColor: colors.thinGray3,
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          opacity: animatedOpacity.interpolate({
            inputRange: [30, 90],
            outputRange: [0, 1]
          })
        }} >
          {/* <Text style={{ fontFamily: 'Oswald-Bold', color: colors.myGrey, fontSize: 25 }}>Profile</Text> */}
        </Animated.View>
        <View style={{ position: 'absolute', marginTop: 20, marginLeft: 20 }}>
          <TouchableOpacity onPress={this.onPressMenu}>
            <IconMaterial name="menu" color={colors.myGrey} size={30} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  renderHeaderContent = () => {
    const { animatedPadding, animatedHeight, animatedColor } = this.state;
    return (
      <Animated.View style={{
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 70,
        width: '100%',
        paddingHorizontal: animatedPadding.interpolate({
          inputRange: [30, 90],
          outputRange: [20, 0],
          extrapolate: 'clamp'
        })
      }}>
        <Animated.Image
          source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}
          resizeMode="cover"
          style={{
            width: 100,
            height: animatedHeight.interpolate({
              inputRange: [30, 90],
              outputRange: [150, 90],
              extrapolate: 'clamp'
            })
          }}
        />
        <Animated.View style={{
          paddingHorizontal: 20,
          height: 150,
          width: '100%',
          height: animatedHeight.interpolate({
            inputRange: [30, 90],
            outputRange: [150, 90],
            extrapolate: 'clamp'
          }),
          backgroundColor: animatedColor.interpolate({
            inputRange: [30, 90],
            outputRange: ['rgba(0,0,0,0)', 'rgba(170,170,170,1)'],
            extrapolate: 'clamp'
          })
        }}>
          <Text style={{ fontFamily: 'Oswald-Bold', color: colors.myGrey, fontSize: 20 }}>Man of the Earth</Text>
          <Text style={{ fontFamily: 'Oswald-Medium', color: colors.myGrey, fontSize: 14, marginBottom: 5 }}>Rating: 8.5</Text>
          <View style={{ flexDirection: 'row' }}>
            <IconAwesome name="star" color="yellow" size={14} />
            <IconAwesome name="star" color="yellow" size={14} />
            <IconAwesome name="star" color="yellow" size={14} />
            <IconAwesome name="star" color="gray" size={14} />
            <IconAwesome name="star" color="gray" size={14} />
          </View>
        </Animated.View>
      </Animated.View>
    )
  }

  renderContent = () => {
    return (
      <View style={{ backgroundColor: colors.thinGray3, height: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20, alignItems: 'center', paddingTop: 10 }}>
        <View style={{ width: 70, height: 10, backgroundColor: colors.thinGray2, borderRadius: 10 }} />
      </View>
    )
  };

  renderBottomSheet = () => {
    return (
      <View style={{ flex: 1 }}>
        <BottomSheet
          ref={this.bottomSheetRef}
          snapPoints={[300, 80, 0]}
          renderContent={this.renderContent}
          initialSnap={2}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <ScrollView onScroll={this.handleScroll} style={{ paddingHorizontal: 20 }}>
          <View style={{ height: 240 }} />
          <Text style={{ textAlign: 'justify', marginBottom: 10 }}>
            {`${'      '}`}Example text for the long page. the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page.
          </Text>
          <Text style={{ textAlign: 'justify', marginBottom: 10 }}>
            {`${'      '}`}Example text for the long page. the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page.
          </Text>
          <Text style={{ textAlign: 'justify', marginBottom: 10 }}>
            {`${'      '}`}Example text for the long page. the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page.
          </Text>
          <Text style={{ textAlign: 'justify', marginBottom: 10 }}>
            {`${'      '}`}Example text for the long page. the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page.
          </Text>
          <Text style={{ textAlign: 'justify', marginBottom: 10 }}>
            {`${'      '}`}Example text for the long page. the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page. Example text for the long page.
          </Text>
        </ScrollView>
        {this.renderHeaderBar()}
        {this.renderHeaderContent()}
      </View>
    );
  };
}

export { Profile };
