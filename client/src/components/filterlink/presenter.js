import { FILTERMODE } from '../../actions/types';
const mapStateToDisplayProps = ({ filter }, ownProps) => {
  const text = {
    [FILTERMODE.SHOW_ALL]: 'Show All',
    [FILTERMODE.SHOW_ACTIVE]: 'Show Active',
    [FILTERMODE.SHOW_FINISHED]: 'Show Finished',
  }[ownProps.filterMode]
  return {
    active: filter.filterMode === ownProps.filterMode,
    text
  }
}

export default mapStateToDisplayProps;