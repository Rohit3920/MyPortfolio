import React from 'react'

const ProjectContent = (props) => {
    const { projectName, technologies, repository, uploadURL, contentImg, contentVideo } = props.data
    const i = props.i;

    const html = "https://www.svgrepo.com/show/303205/html-5-logo.svg"
    const css = "https://www.svgrepo.com/show/303481/css-3-logo.svg"
    const javascript = "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    const bootstrap = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
    const react = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    const vite = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
    const jQuery = "https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg"
    const json = "https://cdn-icons-png.flaticon.com/512/136/136525.png"
    const api = "https://www.svgrepo.com/show/261808/api.svg"
    const node = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    const mongoDB = "http://definelabs.com/wp-content/uploads/2016/06/MongoDB-Logo.svg_.png"
    const scss = "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"


    return (
        <div className="col-lg-3 m-0 m-sm-5 m-lg-5 border rounded">
            <h2 className="pj-name my-3 p-3 border-bottom  border-light">{projectName}</h2>
            <p className="text-muted">This project are created using </p>
            <div className="row mx-auto">
                {
                    technologies.map((tech, x) => {
                        return (
                            <div key={x} className="col-4 text-center m-auto">
                                {
                                    tech === 'html' ?
                                        <img className="pj-logo-t mt-2" src={html} alt="file not found" />
                                        : tech === 'css' ?
                                            <img className="pj-logo-t mt-2" src={css} alt="file not found" />
                                            : tech === 'javascript' ?
                                                <img className="pj-logo-t mt-2" src={javascript} alt="file not found" />
                                                : tech === 'bootstrap' ?
                                                    <img className="pj-logo-t mt-2" src={bootstrap} alt="file not found" />
                                                    : tech === 'react' ?
                                                        <img className="pj-logo-t mt-2" src={react} alt="file not found" />
                                                        : tech === 'vite' ?
                                                            <img className="pj-logo-t mt-2" src={vite} alt="file not found" />
                                                            : tech === 'jQuery' ?
                                                                <img className="pj-logo-t mt-2" src={jQuery} alt="file not found" />
                                                                : tech === 'json' ?
                                                                    <img className="pj-logo-t mt-2" src={json} alt="file not found" />
                                                                    : tech === 'api' ?
                                                                        <img className="pj-logo-t mt-2" src={api} alt="file not found" />
                                                                        : tech === 'node' ?
                                                                            <img className="pj-logo-t mt-2" src={node} alt="file not found" />
                                                                            : tech === 'mongoDB' ?
                                                                                <img className="pj-logo-t mt-2" src={mongoDB} alt="file not found" />
                                                                                : tech === 'scss' ?
                                                                                    <img className="pj-logo-t mt-2" src={scss} alt="file not found" />
                                                                                    : <></>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <hr />
            <div>
                {
                    contentImg ?
                        <div className="pj-show">
                            <div id={`carouselExampleControls-${i}`} className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        contentImg.map((item, j) => {
                                            return (
                                                j === 0 ?
                                                    <div key={j} className="carousel-item active">
                                                        <img className="d-block w-100"
                                                            src={item}
                                                            alt="slide" />
                                                    </div> :
                                                    <div key={j} className="carousel-item">
                                                        <img className="d-block w-100"
                                                            src={item}
                                                            alt="slide" />
                                                    </div>
                                            )
                                        })
                                    }
                                </div>
                                <a className="carousel-control-prev" href={`#carouselExampleControls-${i}`} role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href={`#carouselExampleControls-${i}`} role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        : contentVideo ? <video controls muted autoPlay className="pj-show">
                            <source src={contentVideo} alt="Video not Found"
                                type="video/mp4" />
                        </video>
                            :
                            <></>
                }
            </div>
            <hr />
            <div className="information pb-3">
                <label >Code :- </label><a target="_blank"
                    href={repository} rel="noreferrer">
                    {projectName} </a><br />
                <div className=''>
                    {
                        uploadURL ? <a className='published px-2' target="_blank" rel="noreferrer"
                            href={uploadURL}>Publish</a> :
                            <small target="_blank" className="round text-danger border border-danger px-2">No
                                Publish</small>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectContent
