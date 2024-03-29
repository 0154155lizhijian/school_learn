import React, { Component } from 'react';
import { connect } from '../../redux';

class Button extends Component {
  changeContext = (type) => {
    const { dispatch } = this.props;
    dispatch({
      type: type,
      payload: `我是修改后的${type}`
    })
  }
  render() {
    return (
      <div className="button">
        <div className="btn" onClick={() => this.changeContext('HEAD')}>{this.props.headBtn}</div>
        <div className="btn" onClick={() => this.changeContext('BODY')}>{this.props.bodyBtn}</div>
      </div>
    );
  }
}

export default connect(Button);