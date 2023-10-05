'use client'
import React, { useRef } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useStore } from '@/store/store';
import { useShallow } from 'zustand/shallow'
export function CheckboxWithText({ featureContent , featureId  , isChecked}: any) {

  const toggleCheckState = useStore(state=> state.toggleCheckState)

  const checkRef = useRef<HTMLButtonElement | null>(null);

  const getId = () => {
    if (checkRef.current) {
      
      const elementId = checkRef.current.id;
      return elementId;
    }
  };

  const check = () => {
    
    const checkBoxId = getId();
    console.log(checkBoxId);
    toggleCheckState(checkBoxId)
  };

 if(isChecked){
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
      checked
        id={featureId}
        name="name"
        value="value"
        ref={checkRef}      
        onClick={() => check()}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1" 
          id="123"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {featureContent}
        </label>
      </div>
    </div>
  );
 }

 else{
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
      
        id={featureId}
        name="name"
        value="value"
        ref={checkRef}      
        onCheckedChange={() => check()}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1" 
          id="123"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {featureContent}
        </label>
      </div>
    </div>
  );
 }
}
