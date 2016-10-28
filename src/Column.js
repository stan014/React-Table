import React, { Component, PropTypes, cloneElement } from 'react'
const {string} = PropTypes
import { ASC, NONE, DESC } from './Sort'

class Column extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return null
  }
}

Column.propTypes = {
  name: string,
  k: string
}
Column.displayName = "Column"
Column.defaultProps = {
  name: "",
  k: "",
}

export default Column
