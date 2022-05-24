import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchevent = () => {
    var [date,setDate]=useState("")
    const subData=()=>{
        const data={"date":date}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} placeholder="Enter date" type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Searchevent