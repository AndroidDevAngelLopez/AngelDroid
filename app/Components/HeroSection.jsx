"use client";
import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion";
import {TypeAnimation} from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-gradient-to-r from-green-500 via-green-100 to-white">
                        Hello, I&apos;m{" "}
                    </h1>
                    <TypeAnimation
                        className="text-white bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold "
                        sequence={[
                            "Android",
                            1000,
                            "Spring",
                            1000,
                            "Deep Learning",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <h1 className="text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-gradient-to-r from-white via-red-500 to-red-600">
                        Developer
                    </h1>


                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        My name is Angel, I am 23 yo and im a software developer living in Mexico City. <br></br>I specialize in developing high-impact intelligent systems that meet quality and escalability standards
                    </p>

                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/AngelDroid/angeldroid.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;