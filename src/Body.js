import React from 'react'
import { map } from 'lodash'
import Row from './Row'

const Body = ({columns, data, index}) => {
  const keys = map(columns, "k");
  return (
    <tbody>
  {map(data, (d, i) => {
      return <Row key={i} hasIndex={index} index={i + 1} data={d} columns={columns} even={i % 2 == 0}/>
    }, this)}
    </tbody>
  )
}

export default Body
