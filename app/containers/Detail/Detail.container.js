import { connect } from 'react-redux';

import { Detail } from './Detail.screen';
import { requestDetailCard } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  card: state.tcgCardReducer.card
});

const mapDispatchToProps = dispatch => ({
  requestDetailCard: cardId => dispatch(requestDetailCard(cardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
