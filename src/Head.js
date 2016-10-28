import React, { cloneElement, isValidElement } from 'react'
import { map } from 'lodash'
import { ASC, NONE, DESC } from './Sort'

const Head = ({globalHeader, columns, onSort, sort, sortKey, index} ,) => (
  <thead>
    <tr role="row">
    {index ? <th>#</th> : null}
    {map(columns, ({name, k, className, header}) => {
    let content = name;
    let element = header || globalHeader;
    if (isValidElement(element)) {
      content = cloneElement(element, {
        ...element.props,
        name,
        k,
        sort: k == sortKey ? sort : NONE
      })
    }
    return <th key={name + ":" + k} className={className} onClick={onSort.bind(null, k, sort == 0 ? 1 : -sort)} >{content}</th>
  }, this)}
    </tr>
  </thead>
)

export default Head
