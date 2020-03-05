import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown'
import { Button } from 'react-native-paper';

import { styles } from '../SearchByTypes/SearchByTypes.style';
import { colors } from '../../themes/colors';
import { tcgBackCard } from '../../themes/images';

class SearchBySubtypes extends Component {
  state = {
    choosedType: '',
    name: ''
  }

  componentDidMount() {
    this.initRequest();
  }

  initRequest = () => {
    const { requestCardSubtypes } = this.props;
    requestCardSubtypes();
  }

  onChoose = (type) => {
    this.setState({ choosedType: type })
  };

  onChangeTextDropdown = (text) => {
    this.setState({ choosedType: text });
  };

  onChangeText = (text) => {
    this.setState({ name: text })
  }

  onPressSearch = () => {
    const { requestSearchCards } = this.props;
    const { choosedType, name } = this.state;

    requestSearchCards(
      'subtype',
      choosedType === 'All' ? '' : choosedType,
      name
    );
  }

  onPressCard = ({ name, id }) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', {
      name,
      id
    })
  }

  renderSearchInput = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} inlineImageLeft="search_icon" placeholder="Charizard ..." onChangeText={this.onChangeText} />
        <IconAwesome name="search" size={20} color={colors.myGrey} style={{ position: 'absolute', top: 23, left: 40 }} />
      </View>
    );
  };

  renderTypesDropdown = () => {
    const { subtypes } = this.props;
    const format = subtypes.map(type => ({ value: type }));
    const data = [{ value: 'All' }, ...format]
    return (
      <View style={styles.typesContainer}>
        <Dropdown
          label="Subtypes"
          data={data}
          containerStyle={styles.dropdownContainer}
          itemTextStyle={{ fontFamily: 'Oswald-Regular' }}
          style={{ fontFamily: 'Oswald-Regular' }}
          onChangeText={this.onChangeTextDropdown}
        />
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Button mode="contained" onPress={this.onPressSearch}>Search</Button>
        </View>
      </View>
    );
  };

  renderCardList = () => {
    const { cardsBySubtypes, isLoadingSearch } = this.props;
    return (
      <View style={{ padding: 5 }}>
        {isLoadingSearch ? (
          <ActivityIndicator size="large" color={colors.blue} />
        ) : (
            cardsBySubtypes.map(item => this.renderItem({ item }))
          )}
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => this.onPressCard(item)} key={item.id}>
        <View style={styles.cardContainer}>
          <View>
            <ImageBackground source={tcgBackCard} style={styles.cardImage} imageStyle={styles.cardImage}>
              <Image source={{ uri: item.imageUrlHiRes }} style={styles.cardImage} />
            </ImageBackground>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardArtist}>Artist : {item.artist || '-'}</Text>
            <Text style={styles.cardArtist}>Rarerity : {item.rarity || '-'}</Text>
            <Text style={styles.cardArtist}>Series : {item.series || '-'}</Text>
            <Text style={styles.cardArtist}>Sets : {item.set || '-'}</Text>
            <View style={styles.typesCardContainer}>
              <Text style={styles.cardArtist}>Subtypes : </Text>
              {this.renderTypeCard(item.subtype)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderTypeCard = (item) => {
    return <Text style={styles.cardType}>{item}</Text>
  };

  render() {
    return (
      <ScrollView>
        {this.renderSearchInput()}
        {this.renderTypesDropdown()}
        {this.renderCardList()}
      </ScrollView>
    )
  };
}

export { SearchBySubtypes };
