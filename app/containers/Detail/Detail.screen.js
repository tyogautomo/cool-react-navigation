import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

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

  renderTitle = () => {
    const { card } = this.props;

    return (
      <View>
        <Text style={styles.title}>{card.name}</Text>
      </View>
    )
  }

  renderTypes = () => {
    const { card, isLoadingDetailPage } = this.props;
    return (
      <View style={styles.typesSection}>
        <View style={styles.typesContainer}>
          <Text style={styles.typesTitle}>INFO</Text>
          <View style={styles.infoCardContainer}>
            <View style={styles.typeCardContainer}>
              <IconAwesome name="bug" color={colors.green} size={17} style={{ marginRight: 10 }} />
              {isLoadingDetailPage ? null : (
                card.types?.map(type => (
                  <Text style={styles.typesCard(type)} key={type}>{type}</Text>
                )) ?? <Text style={styles.noType}>No types</Text>
              )}
            </View>
            <View style={styles.typeCardContainer}>
              <IconAwesome name="heart" color={colors.red} size={17} style={{ marginRight: 10 }} />
              <Text style={styles.noType}>{card.hp || 'None'}</Text>
            </View>
            <View style={styles.typeCardContainer}>
              <IconAwesome name="paint-brush" color={colors.blue} size={17} style={{ marginRight: 10 }} />
              <Text style={styles.noType}>{card.artist || 'No Artist'}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderAttack = () => {
    const { card, isLoadingDetailPage } = this.props;
    return (
      <View style={styles.attackSection}>
        <View style={styles.attackContainer}>
          <Text style={styles.typesTitle}>ATTACKS</Text>
          <View style={styles.infoCardContainer}>
            {card.attacks?.map(att => (
              <View style={styles.attackRow}>
                <IconMaterial name="sword" color={colors.red} size={17} style={{ marginRight: 10 }} />
                <View>
                  <Text>adsasd</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>adsasd</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        {this.renderCardAnimation()}
        {this.renderTitle()}
        {this.renderTypes()}
        {this.renderAttack()}
      </ScrollView>
    );
  };
}

export { Detail };
