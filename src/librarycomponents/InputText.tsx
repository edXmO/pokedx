import React from 'react';

type InputTypes = {
  value: string;
  defaultValue?: string;
  onChange: Function;
  placeholder?: string;
  style?: string
}

const InputText = ({ value, onChange, defaultValue, placeholder = 'Search...', style = '' } : InputTypes) => {
  return <div className={`h-14 shadow-md rounded-xl pl-4 flex-column justify-center ${style}`}>
          <input
            name="input-lc"
            type="text"
            placeholder={`${placeholder}`}
            className="h-full w- outline-none focus:outline-none text-xl" 
            value={value} 
            onChange={(e) => onChange(e)} 
            defaultValue={defaultValue} />
        </div>
            
}

export default InputText;