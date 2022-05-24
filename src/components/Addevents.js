import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Addevents = () => {
    var [eventname,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organiser,setOrganiser]=useState("")
    var [contactno,setContactno]=useState("")
    const subData=()=>{
        const data={"eventName":eventname,"date":date,"venue":venue,"organiser":organiser,"contactNo":contactno}
        console.log(data)
        axios.post("http://localhost:5001/api/eventadd",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Successfully added")
                }
                else
                {
                    alert("failed to add")
                }
            })
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Event Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Eneter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} placeholder="Enter Date" type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} placeholder="Enter venue" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Organiser</label>
                    <input onChange={(e)=>{setOrganiser(e.target.value)}} placeholder="Enter Orgniser" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContactno(e.target.value)}} placeholder="Enter contact number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addevents