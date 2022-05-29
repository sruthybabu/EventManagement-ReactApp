import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewevents = () => {
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

    var [viewlist,setViewlist]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:5001/api/eventview").then(
      (response)=>{
        console.log(response.data)
        setViewlist(response.data)
        setLoadstatus(false)

      }
    )
   
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <table className="table table-primary table-striped">
  <thead className='table-success'>
    <tr>
      <th scope="col">Event Name</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Organiser</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <td>{value.eventName}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td>
      <td>{value.contactNo}</td>
      <td><button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button></td>
    </tr>
    })}   
  </tbody>
</table>}

                        </div>

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default Viewevents