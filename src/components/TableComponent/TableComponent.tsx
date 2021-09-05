import React, { ReactNode } from 'react'
import Label from '../../librarycomponents/Label';
import TableItem from './TableItem';

import { TableItemProps } from '../../types/types';


const TableComponent = ({ data } : { data: TableItemProps[]}) => {

  return (
    <div className="w-1/2 h-3/4 py-6 px-6">
      {data.length ? 
      data.map(({title, index}) => <TableItem title={title} index={index} />)
      : 
      <div className="flex items-center justify-center py-6 px-6 bg-gray-200 rounded-2xl">
        <Label className="font-bold text-gray-600 text-xl">No data was found. Try again.</Label>
      </div>
      }
    </div>
  )

}

export default TableComponent;