import { connect } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../store/actions';

import FilterList from '../components/FilterList';

const mapStateToProps = ({ visibilityFilter }) => ({
  filters: [
    { filter: VisibilityFilters.SHOW_ALL, label: 'All' },
    { filter: VisibilityFilters.SHOW_ACTIVE, label: 'Active' },
    { filter: VisibilityFilters.SHOW_COMPLETED, label: 'Completed' },
  ],
  currentFilter: visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onClickFilter: value => dispatch(setVisibilityFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
