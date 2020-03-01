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
import IconAnt from 'react-native-vector-icons/AntDesign';

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
    const { route } = this.props;
    return (
      <View>
        <Text style={styles.title}>{route.params.name}</Text>
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
    const { card } = this.props;
    return (
      <View style={styles.attackSection}>
        <View style={styles.attackContainer}>
          <Text style={styles.typesTitle}>ATTACKS / ABILITY</Text>
          <View>
            {card.attacks?.map((att, idx) => (
              <View style={styles.attackRow} key={idx}>
                <IconMaterial name="sword" color={colors.red} size={17} style={{ marginRight: 10, top: 5 }} />
                <View style={styles.attackDesc}>
                  <Text style={styles.attackName}>{att.name}</Text>
                  <Text style={styles.descriptionTitle}>Description:</Text>
                  <Text style={styles.descriptionText}>{att.text || '-'}</Text>
                  <View style={styles.damageSection}>
                    <Text style={styles.descriptionTitle}>Damage: </Text>
                    <Text style={styles.attackText}>{att.damage || '-'}</Text>
                  </View>
                  <View style={styles.damageSection}>
                    <Text style={styles.descriptionTitle}>Energy Cost: </Text>
                    <Text style={styles.energyCostText}>{att.convertedEnergyCost || '-'}</Text>
                  </View>
                </View>
              </View>
            )) ?? <Text style={styles.noType}>No Attacks</Text>}
          </View>
        </View>
      </View>
    );
  };

  renderWeakness = () => {
    const { card } = this.props;
    return (
      <View style={styles.attackSection}>
        <View style={styles.attackContainer}>
          <Text style={styles.typesTitle}>WEAKNESSES</Text>
          <View>
            {card.weaknesses?.map((weak, idx) => (
              <View style={styles.attackRow} key={idx}>
                <IconAnt name="caretdown" color={colors.purple} size={17} style={{ marginRight: 10, top: 3 }} />
                <View style={styles.attackDesc}>
                  <Text style={styles.weaknessName}>{weak.type}</Text>
                  <View style={styles.damageSection}>
                    <Text style={styles.descriptionTitle}>Value: </Text>
                    <Text style={styles.attackText}>{weak.value || '-'}</Text>
                  </View>
                </View>
              </View>
            )) ?? <Text style={styles.noType}>No Weaknesses</Text>}
          </View>
        </View>
      </View>
    );
  }

  renderResistance = () => {
    const { card } = this.props;
    return (
      <View style={styles.attackSection}>
        <View style={styles.attackContainer}>
          <Text style={styles.typesTitle}>RESISTANCE</Text>
          <View>
            {card.resistances?.map((weak, idx) => (
              <View style={styles.attackRow} key={idx}>
                <IconAwesome name="shield" color={colors.blue} size={17} style={{ marginRight: 10, top: 5 }} />
                <View style={styles.attackDesc}>
                  <Text style={styles.resistanceName}>{weak.type}</Text>
                  <View style={styles.damageSection}>
                    <Text style={styles.descriptionTitle}>Value: </Text>
                    <Text style={styles.attackText}>{weak.value || '-'}</Text>
                  </View>
                </View>
              </View>
            )) ?? <Text style={styles.noType}>No Resistance</Text>}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderCardAnimation()}
        {this.renderTitle()}
        {this.renderTypes()}
        {this.renderAttack()}
        {this.renderWeakness()}
        {this.renderResistance()}
      </ScrollView>
    );
  };
}

export { Detail };
