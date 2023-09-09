import React from 'react'
import "../CSS/Main.css"

const InternshipContent = (props) => {

  const { company, training, course, startDate, endDate, duration, logoURL } = props.data
  return (
    <div id='InternshipContent' className='row border border-promary rounded my-2'>
      <div className='InternLogo col-12'>
        <img id='profile-img' className="w-100 m-2 border" src={logoURL} alt="file not found" />
      </div>

      <div className='InternContent col-12'>
        <h2>
          {company}</h2>
        <h4>{training} in <b>"{course}"</b></h4>
        <div id='duration'>
          <h6>{startDate} - {
            endDate}</h6>
          <sub>({duration})</sub>
        </div>
      </div>
    </div>
  )
}

export default InternshipContent
