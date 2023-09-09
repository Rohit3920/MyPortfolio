import React from 'react'

const DirectContact = () => {
    return (
        <div className='row'>
            <div className="col-12 col-lg-6  my-5">
                <div className=" w-75 border border-info shadow  m-auto p-5 text-center hover-shadow">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <h5>Let's Talk</h5>
                    <strong>
                        +91 <a href="tel:8767100736">8767100736</a>
                    </strong>
                </div>
            </div>
            <div className="col-12 col-lg-6 my-5">
                <div className=" w-75 border border-info shadow m-auto p-5 text-center hover-shadow">
                    <i className="fa fa-envelope-open" aria-hidden="true"></i>
                    <h5>Drop a Line</h5>
                    <strong className="text-center">
                        <a
                            href="mailto:rohitnittawadekar07@gmail.com?subject = Feedback&body = Message">rohitnittawadekar07@gmail.com</a>
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default DirectContact
