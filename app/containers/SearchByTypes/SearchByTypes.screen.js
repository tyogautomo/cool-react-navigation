import React, { Component } from 'react';
import { View, TextInput, ScrollView, FlatList, Text } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown'
import { Button } from 'react-native-paper';

import { styles } from './SearchByTypes.style';
import { colors } from '../../themes/colors';

class SearchByTypes extends Component {
  state = {
    choosedType: '',
    name: ''
  }

  componentDidMount() {
    this.initRequest();
  }

  initRequest = () => {
    const { requestCardTypes } = this.props;
    requestCardTypes();
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

    requestSearchCards('types', choosedType, name);
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
    const { types } = this.props;
    const format = types.map(type => ({ value: type }));
    const data = [{ value: 'All' }, ...format]
    return (
      <View style={styles.typesContainer}>
        <Dropdown
          label="Types"
          data={data}
          containerStyle={styles.dropdownContainer}
          onChangeText={this.onChangeTextDropdown}
        />
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Button mode="contained" onPress={this.onPressSearch}>Search</Button>
        </View>
      </View>
    );
  };

  renderCardList = () => {
    const { cardsByTypes } = this.props;
    return (
      <FlatList
        ref={ref => this.flatListRef = ref}
        data={cardsByTypes}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <Text>Halo</Text>
      </View>
    );
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

export { SearchByTypes };
