import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar';
import { actions } from '../../actions/profile';
import Component from "../../utils/component"


class NavbarContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchUser();
  }

  logout() {
    this.props.actions.logout();
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} logout={() => this.logout()}/>
      </div>
    );
  }
}
function mapStateToProps({ profile: { user }}) {
    return { user };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);