import { connect } from 'react-redux';

import { Home } from './Home.screen';
import { requestTcgCard, requestPageTcgCard } from '../../redux/actions/TcgCardAction';

const mapStateToProps = state => ({
  cards: state.tcgCardReducer.cards,
  isLoadingFetchingCards: state.tcgCardReducer.isLoadingFetchingCards,
  isLoadingPage: state.tcgCardReducer.isLoadingPage
});

const mapDispatchToProps = dispatch => ({
  requestTcgCard: page => dispatch(requestTcgCard(page)),
  requestPageTcgCard: page => dispatch(requestPageTcgCard(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
