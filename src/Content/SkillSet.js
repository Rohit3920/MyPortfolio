import React from 'react'
import '../CSS/Main.css'
import SectionHead from '../Component/SectionHead'
import SkillContent from '../Component/SkillContent'

const SkillSet = () => {

    const skillList = ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap4', 'jQuery', 'SASS', 'React Js', 'MongoDB','Node Js', 'Express Js', 'MySQL', 'MS Access', 'Git & GitHub', 'PhotoShop', 'Corel', 'Illustrator']

    return (
        <div id='skillSet'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <SectionHead name='Technical Skills' />
                    </div>
                    <div className='col-12'>
                        <SkillContent data={skillList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSet
