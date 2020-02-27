import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Button
} from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './Home.style';
import { pokemonLogo, loadingAnimation, tcgBackCard } from '../../themes/images';

class Home extends Component {
  state = {
    isRefreshing: false,
    page: 1
  }

  componentDidMount() {
    this.initRequestCards();
  };

  initRequestCards = async () => {
    const { requestTcgCard } = this.props;
    this.setState({ isRefreshing: true })
    await requestTcgCard(1)
    this.setState({ isRefreshing: false })
  };

  onRefresh = async () => {
    this.setState({ page: 1 });
    this.initRequestCards();
  };

  onEndReach = () => {
    const { requestPageTcgCard } = this.props;
    this.setState(prevState => ({ page: prevState.page + 1 }), async () => {
      console.log(this.state.page, 'this is page <<<<<<')
      await requestPageTcgCard(this.state.page)
    });
  }

  onPressToTop = () => {
    this.flatListRef.scrollToOffset({ animated: true, offset: 0 })
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

  renderEmptyComponent = () => {
    return (
      <View>
        <Text>Currently there is no cards.</Text>
      </View>
    );
  };

  renderHeadComponent = () => {
    return (
      <>
        <Image source={pokemonLogo} style={styles.logo} />
        <Text style={styles.subTitle}>The Trading Card Game</Text>
      </>
    );
  };

  renderFooterComponent = () => {
    const { isLoadingPage } = this.props;
    return (
      <View style={styles.footerContainer}>
        {
          isLoadingPage ? <ActivityIndicator size="small" color="white" /> : null
        }
      </View>
    );
  };

  renderCardList = () => {
    const { cards, isLoadingFetchingCards } = this.props;
    const { isRefreshing } = this.state;

    return (
      <View style={styles.cardsContainer}>
        <FlatList
          ref={ref => this.flatListRef = ref}
          data={cards}
          renderItem={this.renderItem}
          numColumns={3}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.columnWrapper}
          ListHeaderComponent={this.renderHeadComponent()}
          ListEmptyComponent={isLoadingFetchingCards ? this.renderLoading() : this.renderEmptyComponent()}
          ListFooterComponent={this.renderFooterComponent()}
          onRefresh={this.onRefresh}
          refreshing={isRefreshing}
          onEndReached={this.onEndReach}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.2}>
        <ImageBackground source={tcgBackCard} style={styles.card} imageStyle={styles.cardImage}>
          <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
          <Text style={styles.cardName}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  renderToTopButton = () => {
    return (
      <View style={{ position: 'absolute', flex: 1, bottom: 0, right: 0, padding: 10 }}>
        <Button title="Go To Top" onPress={this.onPressToTop} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.body}>
        {this.renderCardList()}
        {this.renderToTopButton()}
      </View>
    );
  };
}

export { Home };
