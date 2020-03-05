import { connect } from 'react-redux';

import { SearchByTypes } from './SearchByTypes.screen';
import { requestCardTypes, requestSearchCards } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  types: state.tcgCardReducer.types,
  cardsByTypes: state.tcgCardReducer.cardsByTypes,
  isLoadingSearch: state.tcgCardReducer.isLoadingSearch
});
const mapDispatchToProps = dispatch => ({
  requestCardTypes: () => dispatch(requestCardTypes()),
  requestSearchCards: (typing, type, name) => dispatch(requestSearchCards(typing, type, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByTypes);
