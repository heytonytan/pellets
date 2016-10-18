// Ref: https://github.com/juhaelee/material-ui-io/blob/master/docs/src/app/components/mobile-tear-sheet.jsx
let React = require('react');

let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 400
    };
  },

  render() {

    let styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 200

      },

      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden'
      },

      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -5,
        width: 200
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
        <img style={styles.bottomTear} src="images/bottom-tear.svg" />
      </div>
    );
  }

});

module.exports = MobileTearSheet;