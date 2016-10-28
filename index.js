import React, { Component } from 'react'
import { render } from 'react-dom'
import { Table, Column, ASC, DESC, NONE } from './src'

class App extends Component {
  constructor(props) {
    super(props)
    this.onFilter = this.onFilter.bind(this);
    this.state = {
      data: [],
      search: false
    }
  }
  render() {
    const {data, search} = this.state;
    return <div>
    <h1 className="active">React Table </h1>
    <Filter onFilter={this.onFilter}/>
    <Table search={search} data={data} className="table table-hover" index header={<CustomHeader/>}>
      <Column className="primary" name="NAME" k="name" searchkey datakey/>
      <Column name="THEBALANCE" k="balance"/>
      <Column name="AGE" k="age"/>
      <Column name="GENDER" k="gender" />
      <Column name="COMPANY." k="company" searchkey/>
      <Column name="EMAIL." k="email"/>
      <Column name="PHONE." k="phone"/>
      <Column name="REGISTERED." k="registered"/>
      <Column name="EDIT" k="name" header={<AlertHeader/>} body={<EditButton onClick={alert} />}/>
    </Table>
    </div>
  }
  componentDidMount() {
    let context = this;
    fetch("./data.json")
      .then(response => response.json())
      .then(data => {
        context.setState({
          data: data
        })
      })
  }
  onFilter(filterValue) {
    this.setState({
      search: filterValue
    })
  }
}

class Filter extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return <div className="row">
      <div className="col-md-12">
        <div id="datatable_filter" className="dataTables_filter">
          <label>Search:
            <input onChange={this.onChange} type="search" className="form-control input-sm"/>
          </label>
        </div>
      </div>
    </div>
  }
  onChange(e) {
    this.props.onFilter(e.target.value);
  }
}

const CustomHeader = ({name, sort}) => {
  let css = "fa fa-"
  if (sort == ASC) {
    css += "sort-amount-asc";
  } else if (sort == DESC) {
    css += "sort-amount-desc";
  }
  return <div><span>{name}</span><i className={css}></i></div>
}

const AlertHeader = ({name}) => (<span className="alert alert-success">{name}</span>)

const EditButton = ({value, onClick}) => {
  return (
    <button type="button" className="btn btn-default btn-xs" onClick={onClick.bind(null, value)}><i className="fa fa-edit"/>Edit</button>
  )
}

const rootElement = document.getElementById('app');

render(<App />,
  rootElement
);
