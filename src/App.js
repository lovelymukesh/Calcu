
import './App.css';
import Screen from './component/Screen'
import Button from './component/Button'
import Context from "./context/Context";
function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
  return (
     <Context>
    <div className="wrapper">
          <Screen />
          <div className="buttonBox">
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
          </div>
      
    </div>
   </Context>
  );
}

export default App;
