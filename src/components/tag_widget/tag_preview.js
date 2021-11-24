import React from 'react';
import Styles from "./styless.module.css"
export class TagPreview extends React.Component {
  render() {
    return React.createElement('ul', {
      className: Styles.tag,
    },
      this.props.value.map(function(value, index) {
        return React.createElement('li', {
          className: Styles.tag,
          key: index
        }, value)
      })
    )
  };
}
export default TagPreview