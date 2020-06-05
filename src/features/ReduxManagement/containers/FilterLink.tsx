import { connect } from 'react-redux';

// LOcal Dependencies
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// @ts-ignore
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

// @ts-ignore
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
