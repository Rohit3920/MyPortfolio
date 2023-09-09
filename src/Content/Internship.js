import React from 'react'
import SectionHead from '../Component/SectionHead'
import InternshipContent from '../Component/InternshipContent'

const Internship = () => {

  let course = [
    {
      company: 'Iternship Studio',
      training: 'Course & Itenship',
      course: "Web Design",
      startDate: 'May, 2023',
      logoURL : 'https://scontent.fnag1-1.fna.fbcdn.net/v/t39.30808-1/309269334_488187956654392_4047520727446641713_n.png?stp=dst-png_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=c6021c&_nc_ohc=CmYxsQCc35wAX_TxKsN&_nc_ht=scontent.fnag1-1.fna&oh=00_AfA-b8E9TTVEQ8omHqKSL_oXubBJ1uIkMmImxAvCr6GHsw&oe=64F1AA86',
      endDate: 'Jun, 2023',
      duration: "6 weeks"
    },
    {
      company: 'Iternshala Training',
      training: 'Trainee',
      logoURL : 'https://images.yourstory.com/cs/images/companies/925769318s-1585754058054.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff',
      course: "Internship & Job Preparation",
      startDate: 'May, 2023',
      endDate: 'JUn, 2023',
      duration: "4 Weeks"
    },
    {
      company: 'Iternshala Training',
      training: 'Trainee',
      logoURL : 'https://images.yourstory.com/cs/images/companies/925769318s-1585754058054.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff',
      course: "React Js",
      startDate: 'Apr, 2023',
      endDate: 'May, 2023',
      duration: "6 weeks"
    },
    {
      company: 'Phoenix InfoTech, Gadhinglaj',
      training: 'Course & Trainee',
      logoURL : 'https://scontent.fnag1-5.fna.fbcdn.net/v/t1.18169-9/1240162_383556365105061_1193245397_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=QQIo4KHo6qUAX8AEp0R&_nc_ht=scontent.fnag1-5.fna&oh=00_AfACU2go6ba7TPy9fFl9Yxz_6xFYoN6NOlOCNaZQqWN9jQ&oe=6514F71A',
      course: "Web Development",
      startDate: 'jan, 2022',
      endDate: 'Sept, 2022',
      duration: "8 Months"
    },
    {
      company: 'Internshala Traninig',
      training: 'Trainee',
      logoURL : 'https://images.yourstory.com/cs/images/companies/925769318s-1585754058054.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff',
      course: "Android App Development",
      startDate: 'Jun, 2020',
      endDate: 'Jul, 2020',
      duration: "6 Weeks"
    },
  ];


  return (
    <div className='internship'>
      <div className='container-fluid'>
        <div className='row py-5'>
          <div className='col-12'>
            <SectionHead name="Iternship & Trainee" />
          </div>
          <div className='col-12'>
            {
              course.map((data, i) => {
                return (
                  <div key={i}>
                    <InternshipContent data={data} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
