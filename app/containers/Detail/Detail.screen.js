import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { tcgBackCard } from '../../themes/images';
import { styles } from './Detail.style';

class Detail extends Component {
  componentDidMount() {
    this.initialRequest();
  };

  initialRequest = () => {
    const { route, requestDetailCard } = this.props;
    requestDetailCard(route.params?.id ?? null)
  };

  renderCardAnimation = () => {
    const bouncing = {
      from: {
        top: -30
      },
      to: {
        top: 0
      }
    }
    return (
      <Animatable.View style={styles.cardSection} animation={bouncing} iterationCount="infinite" direction="alternate">
        <ImageBackground source={tcgBackCard} style={styles.cardContainer} imageStyle={styles.cardContainer}>

        </ImageBackground>
      </Animatable.View>
    );
  };

  render() {
    return (
      <View>
        {this.renderCardAnimation()}
        <Text>test</Text>
      </View>
    );
  };
}

export { Detail };
