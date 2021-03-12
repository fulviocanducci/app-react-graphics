import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-google-charts';

function App() {
  const refA = useRef();
  const refB = useRef();
  const [values, setValues] = useState([
    ['Age', 'Weight'],
    ['a', 12],
    ['b', 5.5],
  ]);
  const handleClick = () => {
    setValues((state) => [
      ['Age', 'Weight'],
      ['a', +refA.current.value],
      ['b', +refB.current.value],
    ]);
  };
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <div>
      <div>
        <label>
          A: <input type="text" ref={refA} />
        </label>
        <label>
          B: <input type="text" ref={refB} />
        </label>
        <button onClick={handleClick}>Change</button>
      </div>
      <Chart
        chartType="PieChart"
        data={values}
        loader={<div>Loading ...</div>}
        options={{
          title: 'My Daily Activities',
          is3D: false,
        }}
        graph_id="PieChart"
        width={'100%'}
        height={'400px'}
        legend_toggle
      />
    </div>
  );
}

export default App;
