import { useState } from 'react';
import { List } from './List';

function App() {
  const [description, setDescription] = useState('before');

  const changeDescription = () => {
    setDescription('after')
  }

  return (
    <div>
      { description }
      <List title="property list" />
      <button onClick={changeDescription}>Button</button>
    </div>
  );
}

export default App;
