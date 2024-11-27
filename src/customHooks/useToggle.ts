import { useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, (value?: any) => void] => {
  const [toggle, setToggle] = useState(initialValue);

  const toggleFunction = (value?: any) => {
    if (typeof value === 'boolean') {
      setToggle(value);
    } else {
      setToggle((state) => !state);
    }
  };

  return [toggle, toggleFunction];
};

export default useToggle;
