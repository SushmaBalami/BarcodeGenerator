import React, { useState } from 'react'
import Barcode from "react-barcode"

const Barcodegenerator = () => {
    const[text,setText]=useState();
    const[barcode,setBarcode]=useState();
    const generateBarcode=()=>{
        setBarcode(text);

    }
  return (
    <>
    <span className='row text-center badges bg-success text-white mt-3'>
        <h2>Barcode Generator</h2>

    </span>
    <div className='row mt-2'>
        <input className='col-sm-6' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='col-sm-4 mx-2 btn btn-primary' onClick={generateBarcode}>Generate Barcode</button>

    </div>
    <div className='row '>
        <Barcode value={barcode}/>
    </div>
  </>
  )
}

export default Barcodegenerator