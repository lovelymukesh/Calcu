import {CalcContext} from "../context/Context";
import { useContext } from "react";

function Button(props){
    const getClassName = (value) => {
        const className = {
          '=': 'equals',
          'x': 'operation',
          '-': 'operation',
          '+': 'operation',
          '/': 'operation',
        }
        return className[value]
      }
    //   const [calc, setCalc] = useState({
    //     sign: "",
    //     num: 0,
    //     res: 0
    //   });
       const { calc, setCalc } = useContext(CalcContext);

      const commaClick = () => {
        setCalc({
          ...calc,
          num: !calc.num.toString().includes('.') ? calc.num + props.value : calc.num
        });
        console.log(calc)
      }
      const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
      }
      const handleClickButton = () => {
        const numberString = props.value.toString()
    
        let numberValue;
        if(numberString === '0' && calc.num === 0) {
          numberValue = "0"
        } else {
          numberValue = Number(calc.num + numberString)
        }
    
        setCalc({
          ...calc,
          num: numberValue
        })
      }
      
      const signClick = () => {
        setCalc({
          sign: props.value,
          res: !calc.res && calc.num ? calc.num : calc.res,
          num: 0
        })
      }
      const equalsClick = () => {
        if(calc.res && calc.num) {
          const math = (a, b, sign) => {
            const result = {
              '+': (a, b) => a + b,
              '-': (a, b) => a - b,
              'x': (a, b) => a * b,
              '/': (a, b) => a / b,
            }
            return result[sign](a, b);
          }
          setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
          })
        }
      }
      const personClick = () => {
        setCalc({
          num: (calc.num / 100),
          res: (calc.res / 100),
          sign: ''
        })
      }
      const invertClick = () => {
        setCalc({
          num: calc.num ? calc.num * -1 : 0,
          res: calc.res ? calc.res * -1 : 0,
          sign: ''
        })
      }
      const handleBtnClick = () => {
    
        const results = {
          '.': commaClick,
          'C': resetClick,
          '/': signClick,
          'x': signClick,
          '-': signClick,
          '+': signClick,
          '=': equalsClick,
          '%': personClick,
          '+-': invertClick
        }
        if(results[props.value]) {
          return results[props.value]()
        } else {
          return handleClickButton()
        }
      }
    return(
        <>
       <div className="">
         <button  onClick={handleBtnClick} className={`${getClassName(props.value)} button`}>{props.value}</button>
       </div>
        </>
    )
}
export default Button;