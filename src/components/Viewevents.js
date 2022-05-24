import React from 'react'
import Navbar from './Navbar'

const Viewevents = () => {
    var viewlist=[
        {
            "eventName":"wedding",
            "date":5/30/2022,
            "venue":"st.george auditorium",
            "organiser":"sandeep",
            "contactNo":8964753210
        },
        {
            "eventName":"naming ceremoney",
            "date":6/7/2022,
            "venue":"town hall",
            "organiser":"arun",
            "contactNo":9964756721
        },
        {
            "eventName":"reunion",
            "date":6/2/2022,
            "venue":"town hall",
            "organiser":"saran",
            "contactNo":9884773211
        }
    ]
   
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row g-3'>
                        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                         <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Event Name</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Organiser</th>
      <th scope="col">Contact Number</th>
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
    </tr>
    })}   
  </tbody>
</table>

                        </div>

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default Viewevents