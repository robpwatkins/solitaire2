import { useEffect } from 'react';

export const useOutsideClickAlerter = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        let targetName = event.target.getAttribute('class');
        if (!ref.current ||  ref.current.contains(event.target)) return;
        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    },
    [ref, handler]
  );  
}