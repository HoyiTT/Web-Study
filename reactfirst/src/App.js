import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange= (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);
// useEffect는 한 번만 실행되기를 원할떄 사용함
useEffect(() => {
  console.log("i run when 'keyword' changes");
}, [keyword]);

useEffect(() => {
  console.log("i run when 'counter' changes");
}, [counter]);

useEffect(() => {
  console.log("i run when keyword & counter changes");
}, [keyword, counter]);
  //2번째 인자로 배열에 원하는 키워드(변수)를 넣어주면 해당 변수가 변화 할 때에만 실행하게끔 해줌


  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
