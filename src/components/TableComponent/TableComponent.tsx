import React, { ReactNode } from 'react'
import Label from '../../librarycomponents/Label';
import TableItem from './TableItem';

const TableComponent = (data : any[]) => {

  const renderTable = (data : any[]) : ReactNode[] => {
    return data.map((item, index) => {
      return <TableItem />
    });
  } 

  return (
    <div>
      {data ? 
      renderTable(data)
      : 
      <div>
        <Label>No info...</Label>
      </div>}
    </div>
  )

}

export default TableComponent;