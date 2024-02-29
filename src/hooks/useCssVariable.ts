import { useEffect, useState } from 'react';

const useCssVariable = (key: string) => {
  const [variable, setVariable] = useState('');

  useEffect(() => {
    // Check if window object is defined (i.e., running in a browser environment)
    if (typeof window !== 'undefined') {
      const cssVariable = getComputedStyle(document.documentElement)
        .getPropertyValue(key)
        .trim();
      setVariable(cssVariable);
    }
  }, []);

  return variable;
};

export default useCssVariable;
