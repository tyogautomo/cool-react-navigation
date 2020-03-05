import { connect } from 'react-redux';

import { SearchBySubtypes } from './SearchBySubtypes.screen';
import { requestCardSubtypes, requestSearchCards } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  subtypes: state.tcgCardReducer.subtypes,
  cardsBySubtypes: state.tcgCardReducer.cardsBySubtypes,
  isLoadingSearch: state.tcgCardReducer.isLoadingSearch
});
const mapDispatchToProps = dispatch => ({
  requestCardSubtypes: () => dispatch(requestCardSubtypes()),
  requestSearchCards: (typing, type, name) => dispatch(requestSearchCards(typing, type, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBySubtypes);
