import React from 'react';
import _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../../components/profile';
import { actions } from '../../actions/profile';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
const ProfileWithLoading = WithLoading(Profile)
class ProfileContainer extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <ProfileWithLoading
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading } }, props) {
  return { user, isLoading  };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);