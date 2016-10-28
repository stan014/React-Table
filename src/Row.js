import React, { cloneElement, isValidElement } from 'react'
import { map } from 'lodash'

const Row = ({data, columns, even, index, hasIndex}) => (
  <tr role="row" className={even ? "evne" : "odd"}>
    {hasIndex ? <td>{index}</td> : null}
    {map(columns, ({name, k, format, custom, body}) => {
    let value = data[k];
    if (typeof (format) == "function") {
      value = format(value);
    }
    if (isValidElement(body)) {
      value = cloneElement(body, {
        ...body.props,
        value
      })
    }
    return <td key={name + ":" + k}>{value}</td>
  }, this)}
  </tr>
)

export default Row
