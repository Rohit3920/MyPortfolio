import React from 'react'
import SectionHead from '../Component/SectionHead'
import EducationContent from "../Component/EducationContent"

const Education = () => {

    let educat = [
        {
            college: "Institute Of Civil & Rural Engineering, Gargoti",
            website: 'https://www.collegedekho.com/colleges/icre-gargoti',
            feild: "Computer Science Diploma",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAy0iS0AAebCIEvR13-HGYMtDn6ui-4m7ZEkMxmvjTX8E16gjMjAmu2diQ36O2cVa2Ifs&usqp=CAU",
            board: "MSBTE, Pune",
            percentage: 84.17,
            passingOfYear: 2021,
        },
        {
            college: "Vyankatrao Jr. College, Ajara-Kop",
            website: 'https://www.justdial.com/Kolhapur/Vyankatrao-Highschool-Junior-College-Ajara/0231PX231-X231-170925005903-Z7Z6_BZDET',
            std: "12th",
            feild: "Science",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItqkbZUXv_3w6-x_uwfJtXIPopZNT6y5LdxCLxxfIyc9bhX2tZgU6kXlTgQbzAXIUvyw&usqp=CAU",
            board: "HSC, Pune",
            percentage: 56.15,
            passingOfYear: 2019,
        },
        {
            college: "Ajara High-school, Ajara",
            website: 'https://directory.edugorilla.com/school/ajara-highschool-aajara-kolhapur-fee-structure-syllabus-address-admission-form-contact-number/',
            std: '10th',
            logo: 'https://i.pinimg.com/474x/f1/92/f1/f192f1d6114ac4ae2817a0c6db797fe5--building-images-silhouette-school.jpg',
            board: "SSC, Pune",
            percentage: 76.00,
            passingOfYear: 2017,
        },
    ]

    return (
        <div className='Education'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <SectionHead name="Education" />
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            {
                                educat.map((data, i) => {
                                    return (
                                        <EducationContent key={i} data={data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
