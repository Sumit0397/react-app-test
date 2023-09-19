import React, { useState } from 'react';
import Output from './Output';

function Greeting() {
  const [text , setText] = useState(false);

  const textChangeHandler = () => {
    setText(true);
  }


  return (
    <div>
      <h2>Hello World!</h2>
      {!text && <Output>It's good to see you!</Output>}
      {text && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting
