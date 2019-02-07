import React, { Component } from 'react'
import PropTypes from 'prop-types'

const isMountable = !!(typeof window !== 'undefined' && window.document);

export default class extends Component {
  static propTypes = {
    account: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { account, ...params } = this.props;

    if (!(account && isMountable)) {
      return;
    }

    window.guiddeSettings = { ...params, account };

    if (!window.Guidde) {
      (function(n,d){
        function t(){
          var t=n.createElement("script");
          t.type="text/javascript",
          t.async=!0,
          t.src="https://cdn.guidde.io/widget.js";
          var e=n.getElementsByTagName("script")[0];
          e.parentNode.insertBefore(t,e)
        }
        d.q=[],
        d.do=function(t,e){
          d.q.push({action:t,params:e})
        },
        
        window.Guidde=d, t()
      })(document,window.Guidde||{});
    }
  }

  componentWillUnmount() {
    if (!window.Guidde || !isMountable) {
      return false;
    }

    const container = document.getElementById('guidde-window-container');
    if (container) {
      container.remove();
    }

    delete window.Guidde;
    delete window.guiddeSettings;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return false;
  }
}
