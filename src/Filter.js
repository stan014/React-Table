import React, { createClass, Component, PropTypes, cloneElement } from 'react'
import { ASC, NONE, DESC } from './Sort'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return <div className="row">
      <div className="col-sm-6">
        <div className="dataTables_length hide">
          <label>Show
            <select name="datatable_length" aria-controls="datatable" className="form-control input-sm">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> entries
          </label>
        </div>
      </div>
      <div className="col-sm-6">
        <div id="datatable_filter" className="dataTables_filter">
          <label>Search:
            <input onChange={this.onChange} type="search" className="form-control input-sm" placeholder="" aria-controls="datatable"/>
          </label>
        </div>
      </div>
    </div>
  }
  onChange(e) {
    this.props.onFilter(e.target.value);
  }
}
