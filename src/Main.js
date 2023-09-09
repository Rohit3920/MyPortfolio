import React from 'react'
import LeadPage from './Content/LeadPage'
import AboutMe from './Content/AboutMe'
import Internship from './Content/Internship'
import Education from './Content/Education'
import SkillSet from './Content/SkillSet'
import Contact from './Content/Contact'
import Projects from './Content/Projects'

// class Main extends React.Component{
//     render(){
//         return (
//             <div className='body'>
//                 <LeadPage id="leadPage" />
//                 <AboutMe id="aboutMe" />
//             </div>
//         )
//     }
// }

const Main = () => {
    return (
        <div className='body'>
            <LeadPage id="leadPage" />
            <AboutMe id="aboutMe" />
            <Internship id="iternship"/>
            <Education id="education"/>
            <Projects id='projects'/>
            <SkillSet id="Skills"/>
            <Contact id='contactUs'/>

        </div>
    )
}

export default Main
