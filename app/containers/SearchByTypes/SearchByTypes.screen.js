import React, { Component } from 'react';
import { View, TextInput, ScrollView, FlatList } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown'

import { styles } from './SearchByTypes.style';
import { colors } from '../../themes/colors';

class SearchByTypes extends Component {
  state = {
    choosedType: '',
    types: [
      {
        value: 'Fire',
      }, {
        value: 'Metal',
      }, {
        value: 'Water',
      }
    ]
  }

  onChoose = (type) => {
    this.setState({ choosedType: type })
  };

  onChangeText = (text) => {
    this.setState({ choosedType: text });
  };

  renderCardList = () => {

  }

  render() {
    const { types } = this.state;
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} inlineImageLeft="search_icon" placeholder="Charizard ..." />
          <IconAwesome name="search" size={20} color={colors.myGrey} style={{ position: 'absolute', top: 23, left: 40 }} />
        </View>
        <View style={styles.typesContainer}>
          <Dropdown
            label="Types"
            data={types}
            containerStyle={styles.dropdownContainer}
            onChangeText={this.onChangeText}
          />
        </View>
      </ScrollView>
    )
  };
}

export { SearchByTypes };
