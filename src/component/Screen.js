import {CalcContext} from "../context/Context";
import { useContext } from "react"

function Screen(){
     const { calc } = useContext(CalcContext);
    return(
        <>
       <div className="screen">
       {calc.num ? calc.num : calc.res}
       </div>
        </>
    )
}
export default Screen;

