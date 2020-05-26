import React from 'react';
import _ from "lodash";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../../components/home';
import { actions } from '../../actions/home';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import moment from "moment";
const HomeWithLoading = WithLoading(Home)
class HomeContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchNews();

  }


  render() {
    return (
      <div>
        <HomeWithLoading
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading }, home: { news: { results, isLoading: newsLoading } } }, props) {
  console.log("EEE", results)
  return { user, news: results, isLoading: isLoading || newsLoading };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);