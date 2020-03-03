import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { pokeWallpaper, userPlaceholder } from '../../themes/images';
import { styles } from './DrawerCustomContent.style';
import { colors } from '../../themes//colors';

class DrawerCustomContent extends Component {
  state = {
    page: 'Profile'
  }

  onPressItem = (page) => {
    const { navigation } = this.props;
    this.setState({ page })
    navigation.navigate(page)
  };

  renderMenuLabel = (title) => {
    return (
      <Text style={{ fontFamily: 'Oswald-Medium', color: colors.myGrey }}>{title}</Text>
    );
  };

  renderMenuIcon = (page) => {
    return <IconAwesome name={page === 'Profile' ? 'user' : 'heart'} size={page === 'Profile' ? 20 : 14} color={colors.myGrey} />;
  };

  render() {
    const { page } = this.state;
    return (
      <View style={styles.drawerContent}>
        <Image source={pokeWallpaper} style={{ width: '100%', height: 150 }} />
        <ImageBackground style={styles.profilePictureContainer} source={userPlaceholder} imageStyle={styles.profileImageStyle}></ImageBackground>
        <View style={styles.menuContainer}>
          <DrawerItem
            label={({ focused }) => this.renderMenuLabel('Profile', focused)}
            onPress={() => this.onPressItem('Profile')}
            focused={page === 'Profile'}
            icon={() => this.renderMenuIcon('Profile')}
          />
          <DrawerItem
            label={({ focused }) => this.renderMenuLabel('Favorite', focused)}
            onPress={() => this.onPressItem('Favorite')}
            focused={page === 'Favorite'}
            icon={() => this.renderMenuIcon('Favorite')}
          />
        </View>
      </View>
    )
  }
}

export { DrawerCustomContent };
