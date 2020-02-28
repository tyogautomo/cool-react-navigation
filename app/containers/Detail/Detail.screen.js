import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { tcgBackCard } from '../../themes/images';
import { styles } from '../Home/Home.style';

class Detail extends Component {
  componentDidMount() {
    this.initialRequest();
  };

  initialRequest = () => {
    const { route, requestDetailCard } = this.props;
    requestDetailCard(route.params?.id ?? null)
  };

  renderCardAnimation = () => {
    return (
      <View>
        <ImageBackground source={tcgBackCard} style={styles}>

        </ImageBackground>
      </View>
    )
  };

  render() {
    return (
      <View>
        {this.renderCardAnimation()}
      </View>
    );
  };
}

export { Detail };
