import React, { Component, PropTypes, cloneElement } from 'react'
import { map, orderBy, filter } from 'lodash'
import { ASC, NONE, DESC } from './Sort'
import Filter from './Filter'
import Head from './Head'
import Body from './Body'

class Table extends Component {
  constructor(props) {
    super(props)
    this.onSort = this.onSort.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      data: [],
      sortKey: "",
      sort: NONE,
      columns: []
    };
    const {data, children, header} = this.props;
    this.state.columns = map(children, "props");
    if (data) {
      this.state = {
        ...this.state,
        data: data
      };
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    })
  }
  render() {
    const {className, header, index} = this.props;
    const {sort, sortKey, columns} = this.state;
    let data = this.getData();
    return <div>
      <table className={className}>
        <Head index={index} globalHeader={header} columns={columns} sort={sort} sortKey={sortKey} onSort={this.onSort}/>
        <Body index={index} columns={columns} data={data}/>
      </table>
    </div>
  }
  onSort(k, s) {
    const {sortKey} = this.state;
    let sk = ASC;
    if (sortKey == k) {
      sk = s;
    }
    this.setState({
      sortKey: k,
      sort: sk
    });
  }
  getData() {
    const {search} = this.props;
    const {data, sortKey, sort, columns} = this.state;
    let filteredData = data;
    if (search && search.length > 0) {
      let ignoreCaseSearch = search.toLowerCase();
      let filterSet = filter(columns, (c) => c.searchkey);
      filteredData = filter(filteredData, (d) => {
        for (var i = 0; i < filterSet.length; i++) {
          let f = filterSet[i].k;
          if (d[f] && d[f].toLowerCase().indexOf(ignoreCaseSearch) !== -1) return true;
        }
        return false;
      })
    }
    if (sortKey == "" || sort == NONE || filteredData.length <= 1) {
      return filteredData;
    }
    return orderBy(filteredData, sortKey, sort == ASC ? "asc" : "desc");
  }
}

Table.displayName = "Table"

export default Table
