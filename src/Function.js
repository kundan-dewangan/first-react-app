import React, {useState} from 'react'

export default function Function() {

   const [state, setstate] = useState("Kundan")
   const [roll, setRollNo] = useState(101);

    const clickHandler = ()=>{
        setstate("The Don");
        setRollNo(105)
    }
    return (
        <div>
            <h1 className="text-danger">Use State</h1>
            <div className="text-success">{state}</div>
            <div className="text-success">{roll}</div>
            <button type="button" onClick={clickHandler} className="btn btn-sm btn-warning">Click</button>
        </div>
    )
}
