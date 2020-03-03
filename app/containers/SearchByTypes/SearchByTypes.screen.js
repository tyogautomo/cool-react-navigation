import React, { Component } from 'react';
import { View, TextInput, ScrollView, FlatList } from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown'
import { Button } from 'react-native-paper';

import { styles } from './SearchByTypes.style';
import { colors } from '../../themes/colors';

class SearchByTypes extends Component {
  state = {
    choosedType: ''
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

  onChangeText = (text) => {
    this.setState({ choosedType: text });
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
          onChangeText={this.onChangeText}
        />
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Button mode="contained">Search</Button>
        </View>
      </View>
    );
  };

  renderCardList = () => {

  }

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} inlineImageLeft="search_icon" placeholder="Charizard ..." />
          <IconAwesome name="search" size={20} color={colors.myGrey} style={{ position: 'absolute', top: 23, left: 40 }} />
        </View>
        {this.renderTypesDropdown()}
      </ScrollView>
    )
  };
}

export { SearchByTypes };
