import React from 'react'
import SectionHead from "../Component/SectionHead"
import ProjectContent from "../Component/ProjectContent"
import '../CSS/Main.css'

const Projects = () => {
    const projectDetails = [
        {
            projectName: "NetFlix Clone",
            technologies: ['html', 'css', 'bootstrap'],
            repository: "https://github.com/Rohit3920/Netflix-clone",
            uploadURL: "",
            contentImg: "",
            contentVideo: "Netflix-Clone.mp4"
        },
        {
            projectName: "Tic-Tac-Toe in JavaScript",
            technologies: ['html', 'css', 'javascript'],
            repository: "https://github.com/Rohit3920/Tic-Toc-Toe-JavaScript",
            uploadURL: "https://tic-tac-toe.rohitnittawadek.repl.co/",
            contentImg: ["TicTocToe-JavaScript-1.png", "TicTocToe-JavaScript-2.png", "TicTocToe-JavaScript-3.png", "TicTocToe-JavaScript-4.png"],
            contentVideo: ""
        },
        {
            projectName: "E-commerce (shopping Site)",
            technologies: ['html', 'css', 'bootstrap'],
            repository: "https://github.com/Rohit3920/ShoppingSiteDesign",
            uploadURL: "https://internshipstudio-finalproject.rohitnittawadek.repl.co/",
            contentImg: "",
            contentVideo: "Shopping-Site.mp4"
        },
        {
            projectName: "Git CMD's Helper in jQuery",
            technologies: ["html", 'css', 'jQuery'],
            repository: "https://github.com/Rohit3920/CMD--Git-GitHub--Jquery",
            uploadURL: "https://replit.com/@rohitnittawadek/Git-CMDs-Helper-in-jQuery?v=1",
            contentImg: ["jquery-prjt-img-1.png", "jquery-prjt-img-2.png", "jquery-prjt-img-3.png"],
            contentVideo: ""
        },
        {
            projectName: "Tic-Tac-Toe Game",
            technologies: ['react', 'vite'],
            repository: "https://github.com/Rohit3920/tic-tac-toe-in-React",
            uploadURL: "",
            contentImg: ["TicTocToe-React-1.png", "TicTocToe-React-2.png", "TicTocToe-React-3.png"],
            contentVideo: ""
        },
        {
            projectName: "E-commerce Shopping Cart",
            technologies: ['react', 'json'],
            repository: "https://github.com/Rohit3920/Ecommerce-React-prjt-ShoppingApp",
            uploadURL: "",
            contentImg: ["E-commerce-1.png", "E-commerce-2.png", "E-commerce-3.png", "E-commerce-4.png"],
            contentVideo: ""
        },
        {
            projectName: "Img Remove Background",
            technologies: ['html', 'css', 'javascript', 'api'],
            repository: "https://github.com/Rohit3920/CodeClause--Image-Background-remover",
            uploadURL: "https://image-background-remover.rohitnittawadek.repl.co/",
            contentImg: "",
            contentVideo: "BGremover.mp4"
        },
        {
            projectName: "Face Detector",
            technologies: ['html', 'css', 'javascript', 'api'],
            repository: "https://github.com/Rohit3920/CodeClause--Image-Background-remover",
            uploadURL: "https://face-detections-using-javascript.rohitnittawadek.repl.co/",
            contentImg: ["FD1.png", "FD2.png", "FD3.png"],
            contentVideo: ""
        },
        {
            projectName: "To Do List",
            technologies: ['html', 'css', 'javascript'],
            repository: "https://github.com/Rohit3920/OctaNet-task2--To-Do-List",
            uploadURL: "https://to-do-list-in-html-css-and-javascript.rohitnittawadek.repl.co/",
            contentImg: ["ToDoList1.png", "ToDoList2.png", "ToDoList3.png"],
            contentVideo: ""
        },
        {
            projectName: "Landing Page (GYM)",
            technologies: ['html', 'css'],
            repository: "https://github.com/Rohit3920/OctaNet--LandingPage-Iron-Gym",
            uploadURL: "https://landing-pagegym.rohitnittawadek.repl.co/",
            contentImg: "",
            contentVideo: "LandingPage.mp4"
        },
        {
            projectName: "BMI Calculator",
            technologies: ['html', 'css', 'javascript', 'scss'],
            repository: "https://github.com/Rohit3920/BMI-Calculator",
            uploadURL: "https://bmi-calculator.rohitnittawadek.repl.co/",
            contentImg: ["bmi1.png", "bmi2.png", "bmi3.png"],
            contentVideo: ""
        },
    ]


    return (
        <div className='Projects'>
            <div className='container'>
                <div className='row py-0 py-md-5'>
                    <div className='col-12'>
                        <SectionHead name="My Projects" />
                    </div>
                    <div className='row'>
                        {
                            projectDetails.map((data, i) => {
                                return <ProjectContent key={i} i={i} data={data} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
