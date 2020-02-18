import { connect } from 'react-redux';

import { Home } from './Home.screen';
import { requestTcgCard } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  cards: state.tcgCardReducer.cards,
  isLoadingFetchingCards: state.tcgCardReducer.isLoadingFetchingCards
});

const mapDispatchToProps = dispatch => ({
  requestTcgCard: page => dispatch(requestTcgCard(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
