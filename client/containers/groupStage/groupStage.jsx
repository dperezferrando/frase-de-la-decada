import React from 'react';
import _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GroupStage from '../../components/groupStage';
import { actions } from '../../actions/groupStage';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import moment from "moment";
const GroupStageWithLoading = WithLoading(GroupStage)
const started = moment().isAfter(config.groupStage.startDate);
class GroupStageContainer extends Component {

  componentDidMount() {
    if(started){
      this.props.actions.fetchQualified();
      this.props.actions.fetchVotes("groupStage");      
    }

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
function mapStateToProps({ profile: { user, isLoading }, groupStage: { qualified: { results, isLoading: qualifiedIsLoading }, votes } }, props) {
  const groups =  _(results)
    .filter("group")
    .groupBy("group")
    .map(_.identity)
    .value()
  return { groups, user, votes: votes.results, isLoading: started && (qualifiedIsLoading || isLoading || votes.isLoading) };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupStageContainer);