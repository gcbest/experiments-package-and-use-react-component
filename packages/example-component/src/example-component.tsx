
import * as React from 'react';
import { useEffect } from 'react';

const ExampleComponent = () => {
  useEffect(() => {
    console.log('Hooks are working component');
  }, []);

  return (
    <>
      <h2>Component</h2>
    </>
  );
}

export default ExampleComponent;
