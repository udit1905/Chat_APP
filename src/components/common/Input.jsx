import React from "react";

function Input({name , state , setState , label = false}) {
  console.log(state)
  return <div className="flex gap-1 flex-col">
    {label && (
      <label htmlFor={name} className="text-teal-light text-lg px-1">
        {name}
      </label>
    )}
    <div>
     <input 
     type="text" 
     name={name} 
     value={state} 
     onChange={(e) => setState(e.target.value)}
     className="bg-input-background text-start focus:outline-none text-white px-5 py-4 h-10 w-full rounded-lg"
      />
    </div>
  </div>
}

export default Input;
