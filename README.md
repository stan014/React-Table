# React Table

##Dependencies

* lodash

## Basic Usage

<pre><code>

import {Table, Column } from 'react-table'

var data = [{...},{...},...]

&lt;Table className="...." data={data}&gt;
  &lt;Column name="displayName" k={field}/&gt;
  ...
&lt;/Table&gt;

</code></pre>

For more details, please check the following:

## Table

|  Property 	| Description                                                               	| Type    	|
|:---------:	|---------------------------------------------------------------------------	|---------	|
| header    	| Custom column header component,  ` name, k, sort ` will be pass to props.  	| element 	|
| search    	| search keyword to filter data (See Column:searchkey).                  	| string  	|
| index     	| Display index column or not, default will be `false`.                     	| boolean 	|
| className 	| As className in React.                                                     	| string  	|
| data      	| the data you want to present.                                              	| array   	|

##Column

|  Property | Description                                                                                  | Type     |
|:---------:|----------------------------------------------------------------------------------------------|----------|
| name      | The text will be display in column header.                                                   | string   |
| k         | Indicates which data to access.                                                              | string   |
| className | As className in React.                                                                       | string   |
| searchkey | Indicates the value of this column will be treat as search target, default is `false`.       | boolean  |
| format    | Format the data you want to display.                                                         | function |
| header    | Indicates specific header for this column, this will overwrite the same property in `Table`. | element  |
| body      | Custom component to display data.                                                             | element  |
| custom    | Indicates `props` will pass to your body component, when you use 'body' property.             | any      |
