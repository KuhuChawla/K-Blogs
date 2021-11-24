import React from 'react';
import * as tagStyles from "./styless.module.css"
export class TagPreview extends React.Component {
  render() {
    return React.createElement('ul', {
      className: tagStyles.tags,
    },
      this.props.value.map(function(value, index) {
        return React.createElement('li', {
          className: tagStyles.tag,
          key: index
        }, value)
      })
    )
  };
}
export default TagPreview