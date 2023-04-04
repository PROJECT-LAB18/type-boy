import './App.css'

function App() {
  const tNumber:number = 1;
  const tString:string = '문자열';
  return (
    <div className="App">
      <h1>공책</h1>
      <div>
        <span>숫자 : </span>
        <span>{tNumber}</span>
      </div>
      <div>
        <span>스트링 : </span>
        <span>{tString}</span>
      </div>
    </div>
  )
}

export default App
