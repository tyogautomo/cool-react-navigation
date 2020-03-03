import { connect } from 'react-redux';

import { SearchByTypes } from './SearchByTypes.screen';
import { requestCardTypes } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  types: state.tcgCardReducer.types
});
const mapDispatchToProps = dispatch => ({
  requestCardTypes: () => dispatch(requestCardTypes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByTypes);
