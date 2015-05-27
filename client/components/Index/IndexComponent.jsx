import React from 'react';

var classNames = require('classnames');

export default class IndexComponent extends React.Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    var classes = classNames(['b', { c: true, d: false }]);

    return (
      <section className={classes}>
        <h2>react-webpack-boilerplate</h2>
        <ul ref="indexList" className="index-list">
          {this.props.items.map((item, index) => {
            return <li key={index}>item {item}</li>
          })}
        </ul>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};
