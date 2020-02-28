import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { tcgBackCard } from '../../themes/images';
import { styles } from './Detail.style';
import { colors } from '../../themes/colors';

class Detail extends Component {
  componentDidMount() {
    this.initialRequest();
  };

  initialRequest = () => {
    const { route, requestDetailCard } = this.props;
    requestDetailCard(route.params?.id ?? null);
  };

  renderCardAnimation = () => {
    const { card, isLoadingDetailPage } = this.props;
    const bouncing = {
      from: {
        top: -20
      },
      to: {
        top: 0
      }
    }
    return (
      <Animatable.View style={styles.cardSection} animation={bouncing} iterationCount="infinite" direction="alternate">
        <ImageBackground source={tcgBackCard} style={styles.cardContainer} imageStyle={styles.cardContainer}>
          {isLoadingDetailPage ? (
            <ActivityIndicator size="large" color={colors.white} style={{ alignSelf: 'center' }} />
          ) : (
              <Image source={{ uri: card.imageUrlHiRes }} style={styles.cardContainer} />
            )}
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
