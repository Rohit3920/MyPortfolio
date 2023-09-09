import React from 'react'

const SkillContent = (props) => {

    const skl = props.data

    return (
        <div id='skillContent'>
            <ul>
                {
                    skl.map((item, i) => (
                        <li key={i} className='border rounded px-5 py-2'>{item}
                        {i%3 ===1 ? <br/>:<></>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillContent
