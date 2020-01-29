import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Qualifiers from '../../components/qualifiers';
import { actions } from '../../actions/qualifiers';
import Component from "../../utils/component"


class QualifiersContainer extends Component {

  componentDidMount() {
  }


  render() {
    return (
      <div>
        <Qualifiers 
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state, props) {
    return {  };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QualifiersContainer);