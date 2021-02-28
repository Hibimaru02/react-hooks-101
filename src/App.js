import React, { useState } from 'react';

const App = () => {
const [count, setCount] = useState(0);

const incliment = () => setCount(count + 1);
const decliment = () => setCount(count - 1);
const incliment2 = () => setCount(previousCount => previousCount + 1);
const decliment2 = () => setCount(previousCount => previousCount - 1);
const reset = () => setCount(0);
const double = () => setCount(count * 2);
const divide3 = () => setCount(previousCount =>
  previousCount % 3 === 0 ? previousCount / 3 : previousCount
);

  return (
  <>
    <div>count: {count}</div>
    <div>
      <button onClick={incliment}>+1</button>
      <button onClick={decliment}>-1</button>
    </div>
    <div>
      <button onClick={incliment2}>+1</button>
      <button onClick={decliment2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>×2</button>
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </div>
  </>
  );
}

export default App;
