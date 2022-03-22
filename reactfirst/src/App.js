import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)")
    return byFn;
  }
  // 파괴될때에도 알고싶은경우 리턴값에 결과를 출력하는 함수를 넣어준다.
  useEffect(hiFn, []);
  return <h1>Hello</h1>
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
