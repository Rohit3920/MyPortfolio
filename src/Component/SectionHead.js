import React from 'react'
import "../CSS/Main.css"

const SectionHead = (props) => {
    return (
        <div id='sectionHead-Comp'>
            <h1 className='my-5' id='sectionHead'>{props.name}</h1>
            <span id='section-line'></span>
        </div>
    )
}

export default SectionHead
