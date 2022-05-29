import axios from 'axios'
import React, { useState } from 'react'

const Searchevent = () => {
    const deleteData=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:5001/api/delete",data).then(
            (response)=>{
                if(response.data.status=="success")
                {
                    alert("Successfully deleted")
                }
                else
                {
                    alert("Failed to delete")

                }
            })

    }
    const [data,setData]=useState([{"eventName":"","venue":"","organiser":"","contactNo":""}])
    var [date,setDate]=useState("")
    const subData=()=>{
        const data={"date":date}
        console.log(data)
        axios.post("http://localhost:5001/api/search",data).then(
            (response)=>{
               console.log(response.data)
               setData(response.data)
            })
    }
  return (
    <div>
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
            {data.map((value,key)=>{
                return <div className='row g-3'>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                       <label for="" className="form-label">Event Name</label>
                       <input value={value.eventName} type="text" className='form-control'/>
                    </div>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                       <label for="" className="form-label">Venue</label>
                       <input value={value.venue} type="text" className='form-control'/>
                    </div>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                       <label for="" className="form-label">Organiser</label>
                       <input value={value.organiser} type="text" className='form-control'/>
                    </div>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                       <label for="" className="form-label">Contact Number</label>
                       <input value={value.contactNo} type="text" className='form-control'/>
                    </div>
                    <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                        <button onClick={()=>{deleteData(value,_id)}} className='btn btn-danger'>DELETE</button>
                    </div>
                </div>

            })}
        </div>
    </div>
</div>

    </div>
  )
}

export default Searchevent