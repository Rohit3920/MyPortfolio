import React from 'react'
import "../CSS/Main.css"


const EducationContent = (props) => {

    const { college, website, feild, board, percentage, passingOfYear, std, logo } = props.data
    return (
        <div id='educationContent' className='col-8 border rounded my-3 mx-auto py-4'>
            <div className='container'>
            <div className='row'>
            <div className='col-12 col-lg-2 eduLogo' >
            <img id='profile-img' className="w-100" src={logo} alt="file not found" />
            </div>
                <div className='col-12 col-lg-7'>
                    <h4>
                        <a href={website} target="_blank" rel="noreferrer">{college}</a>
                    </h4>
                    <h6>Board of <b>"{board}"</b></h6>

                </div>
                <div className='col-12 col-lg-3'>
                    <p>
                        Till {passingOfYear} - Passed <b>{std}  {feild}</b> <br /> {percentage}%
                    </p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default EducationContent


// <div id='educationContent' className='col-12 col-md-4 border rounded py-3'>
//             <div className='m-2'>
//                 <h4>
//                     <a href={website} target="_blank" rel="noreferrer">{college}</a>
//                 </h4>
//                 <h6>
//                     Till {passingOfYear} - Passed {std}  {feild} - {percentage}%
//                 </h6>
//                 <h6>Board of <b>"{board}"</b></h6>
//             </div>
//         </div>