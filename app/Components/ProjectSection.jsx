"use client";
import React, {useState} from 'react'
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const projectsData = [{
    id: 1,
    title: "KetNote",
    description: "With KetNote you can create your notes and stories " +
        "(this is a note with only title and image) and share with Instagram, now includes Gemini support"
        + " that implements generative AI and can generate titles or descriptions for your notes or stories.",
    image: "/AngelDroid/images/Projects/ketnote.png",
    gitUrl: "https://github.com/AndroidDevAngelLopez/KetNote",
    previewUrl: "/",
    tag: ["All", "Android"]
}, // {
    //     id: 2,
    //     title: "React Portfolio website",
    //     description: "Project 1 description",
    //     image: "/images/projects/image2.jpg",
    //     gitUrl: "/",
    //     previewUrl: "/",
    //     tag: ["All", "Android"]
    // },
    // {
    //     id: 3,
    //     title: "React Portfolio website",
    //     description: "Project 1 description",
    //     image: "/images/projects/image3.jpg",
    //     gitUrl: "/",
    //     previewUrl: "/",
    //     tag: ["All", "Spring"]
    // },
    // {
    //     id: 4,
    //     title: "React Portfolio website",
    //     description: "Project 1 description",
    //     image: "/images/projects/image4.jpg",
    //     gitUrl: "/",
    //     previewUrl: "/",
    //     tag: ["All", "Deep Learning"]
    // }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag)
    };
    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    return (<>
            <section id="projects" className="lg:py-24">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag onClick={handleTagChange} name={"All"} isSelected={tag === "All"}/>
                    <ProjectTag onClick={handleTagChange} name={"Spring"} isSelected={tag === "Spring"}/>
                    <ProjectTag onClick={handleTagChange} name={"Android"} isSelected={tag === "Android"}/>
                    <ProjectTag onClick={handleTagChange} name={"Deep Learning"} isSelected={tag === "Deep Learning"}/>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map((project) => <ProjectCard
                    key={project.id} imgUrl={project.image} title={project.title} description={project.description}
                    gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>
            </section>
        </>)
}

export default ProjectSection;