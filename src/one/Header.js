 import Function from "./Function";
 import SecondButton from './SecondButton'

import  { useState } from 'react'

function Header(){
    const [state, setState] = useState(false);
     const [state1, setState1] = useState(false);
    return (
        <div className="con">     
        <button onClick={() =>setState1(!state1) }>To see styling in class component</button> {state1 &&<SecondButton/>}
        <button onClick={() =>setState(!state) }>To see styling in functional component </button>  {state &&<Function/>}
        </div>
        
        )
}

export default Header
