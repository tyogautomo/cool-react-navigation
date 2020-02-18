import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './Home.style';
import { pokemonLogo, loadingAnimation } from '../../themes/images';
import { FlatList } from 'react-native-gesture-handler';

class Home extends Component {
  componentDidMount() {
    this.requestCards();
  }

  requestCards = () => {
    const { requestTcgCard } = this.props;
    requestTcgCard(1)
  };

  renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={loadingAnimation}
          style={styles.loadingAnimation}
          speed={3}
          autoPlay
          loop
        />
        <Text style={styles.loadingText}>Fetching cards ...</Text>
      </View>
    );
  };

  renderCardList = () => {
    const { cards } = this.props;

    return (
      <View style={styles.cardsContainer}>
        <FlatList
          data={cards}
          renderItem={this.renderItem}
          numColumns={3}
          keyExtractor={(item, index) => item.id}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardName}>{item.name}</Text>
      </View>
    )
  }

  itemSeparator = () => {
    return <View style={{ width: 10 }} />
  }

  render() {
    const { isLoadingFetchingCards } = this.props;
    return (
      <View style={styles.body}>
        <Image source={pokemonLogo} style={styles.logo} />
        <Text style={styles.subTitle}>The Trading Card Game</Text>
        {isLoadingFetchingCards ? this.renderLoading() : this.renderCardList()}
      </View>
    );
  };
}

export { Home };
