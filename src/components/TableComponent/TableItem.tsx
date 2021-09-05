import React from 'react';
import Label from '../../librarycomponents/Label';
import { TableItemProps } from '../../types/types';


const TableItem = ( { title, index } : TableItemProps ) => {
  return (
    <div className="group h-12 w-full flex flex-row items-center my-2 rounded-2xl shadow-md bg-white hover:shadow-lg hover:bg-gray-100 translate-y-4 cursor-pointer transition-all duration-75 ease-in-out">
      <div className="flex items-center justify-center w-12 h-full rounded-tl-md rounded-bl-md  bg-gray-200 group-hover:bg-gray-700 group-hover:border-gray-700 border-r-2 border-gray-300 transition-all duration-75 ease-in-out">
        <Label className="text-xl font-bold group-hover:text-white transition-all duration-75 ease-in-out">{index + 1}</Label>
      </div>
      <Label className="text-black pl-4">{title}</Label>
    </div>
  )
}

export default TableItem;