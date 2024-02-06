"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from "./TabButton"
import {motion} from "framer-motion";
import {TypeAnimation} from 'react-type-animation';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Kotlin</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>MatLab</li>
                <li>SQL</li>
                <li>Latex</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>IPN ESCOM</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(
            () => {
                setTab(id);
            }
        );
    }
    return <section className="text-white lg:py-36" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    I have more than 3 years of experience working on personal Android projects, I like to ensure the
                    quality, value and scalability of the system.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Stack
                        {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education
                        {" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="place-self-center mt-4 lg:mt-0"
                    >
                    <div className="rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative">
                        <Image
                            src="/spring.svg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={100}
                            height={100}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative">
                        <Image
                            src="/pytorch.svg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={100}
                            height={100}
                        />
                    </div>
                </motion.div>
            </div>

        </div>
    </section>
}
export default AboutSection;