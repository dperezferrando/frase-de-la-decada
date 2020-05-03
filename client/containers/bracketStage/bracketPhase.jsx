import React from 'react';
import _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BracketPhase from '../../components/bracketStage/bracketPhase';
import { actions } from '../../actions/bracketPhase';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import moment from "moment";

const BracketPhaseWithLoading = WithLoading(BracketPhase)
class BracketPhaseContainer extends Component {

  componentDidMount() {

  }

  vote(match, frases) {
    this.props.actions.vote(this.props.phase, match, frases)
  }


  render() {
    return (
      <div>
        <BracketPhaseWithLoading
          {...this.props}
          vote={::this.vote}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading } }, props) {
  return { user, isLoading: (isLoading) };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BracketPhaseContainer);