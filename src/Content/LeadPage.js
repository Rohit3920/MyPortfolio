import React from 'react'
import "../CSS/Main.css"
import TypedText from '../Component/TypedText'

const LeadPage = () => {


  return (
    <div className='leadPage'>
      <div className='color'>
      <div className='container'>
        <div className='row pt-5'>
          <div className="col-12 col-lg-6 order-lg-2 pt-5">
            <div className='pt-5'>
              <div className='bg-danger circle-1'></div>
              <div className='bg-warning circle-2'></div>
              <div className='bg-secondary circle-3'></div>
              <div className='bg-success circle-4'></div>

              <img id='profile-img' className="w-75 h-75" src='myPicture.jpg' alt="file not found" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-1 pt-5">
            <div id="profile-content" className="position-relative text-light text-left pl-5">
              <p className="text-left mt-0 pt-0 ml-4 m-0 mt-sm-5 pt-sm-4 pt-0">Hello, It's Me</p>
              <h1 className="pt-0 pt-lg-3 heading">Rohit Nittawadekar</h1>
              <h4 id="typed-text" className="text-info"><span className="text-light">And I'm  _</span>
                <TypedText />
              </h4>
              <p>This is my official portfolio website to showes all details and work experience for <br />
                <span className="text-dark font-weight-bold font-italic"> WEB DEVELOPMENT</span>
              </p>
              <a id="downloadCV" className="btn ml-5 mt-2 font-weight-bold mb-5 border border-light"
                href="ROHIT-Resume.pdf" download="Rohit Resume"
              >Download CV <i className="fa fa-download pl-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LeadPage
