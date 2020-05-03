import React from 'react';
import _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BracketStage from '../../components/bracketStage';
import { actions } from '../../actions/bracketStage';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import moment from "moment";
const BracketStageWithLoading = WithLoading(BracketStage)
class BracketStageContainer extends Component {

  componentDidMount() {

      this.props.actions.fetchVotes("bracketStage");      

  }


  render() {
    return (
      <div>
        <BracketStageWithLoading
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading }, bracketStage: { votes}}, props) {

  return { votes: votes.results, user, isLoading: (isLoading || votes.isLoading) };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BracketStageContainer);