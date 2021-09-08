import React, { useEffect, useState } from "react";
import Modal from './Modal';
import Label from './Label';

type SelectItemType = {
  label: string;
  value: number;
}

type SelectProps = {
  items: SelectItemType[];
  selected: number;
  setItem: Function;
}

const SelectItem = ({ label, value, onToggle, setItem, index }: { label: string, value: number, onToggle: Function, setItem: Function, index: number}) => {
  return (
    <button 
      className="py-4 w-full rounded-md"
      style={{
        backgroundColor: `${index % 2 === 1 ? '#f3f3f3' : 'white'}`}}
      onClick={() => {
        onToggle(false);
        setItem(value);
      }}
      >
        <Label >{label}</Label>
    </button>
  )
}

const Select = ({ items, selected, setItem }: SelectProps) => {

  const [ open, setOpen ] = useState<boolean>(false);

  useEffect(() => {
    console.log({items})
  }, [])  

  return (
    <>
    <button
      className="w-80 py-6 shadow-md rounded-md"
      onClick={() => setOpen(!open)}
      >
      <Label 
        className=" font-extrabold text-black">
          {items.find((item: SelectItemType) => item.value === selected)?.label}
      </Label>
      {(open && items?.length > 0) && 
          <Modal 
            closeCallback={setOpen}>
            <div 
              className="w-full flex-row flex-wrap px-3 pt-4"
            >
              {items?.map(({ label, value } : SelectItemType, index) => <SelectItem label={label} value={value} onToggle={setOpen} setItem={setItem} index={index}/>)}
            </div>
          </Modal>
      }
    </button>
    
    </>
    )
}


export default Select;