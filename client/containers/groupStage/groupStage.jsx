import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupStage from '../../components/groupStage';
import { actions } from '../../actions/groupStage';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";

const GroupStageWithLoading = WithLoading(GroupStage)

class GroupStageContainer extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <GroupStageWithLoading
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading } }, props) {
  return { };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupStageContainer);