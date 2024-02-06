"use client";
import React,{useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from "/public/github.svg";
import LinkedinIcon from "/public/linkedin.svg";
import LeetCodeIcon from "/public/leetcode.svg";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6" id="contact">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
               
                    <ul className="list-disc pl-2 text-[$ADB7BE] mb-4 max-w-md">
                        <li> If you are interested, feel free to contact me on LinkedIn or send me a message by email.</li>
                        <li>You can stop by to check out my completed projects on GitHub or check out my problem solving skills on my LeetCode.</li>
                        <li>I am willing to work anywhere in the city in person and anywhere in the world remotely.</li>
                    </ul>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/AndroidDevAngelLopez">
                        <Image src={GitHubIcon} alt="GithubIcoN"/>
                    </Link>
                    <Link href="https:/www.linkedin.com/in/angeldroid">
                        <Image src={LinkedinIcon} alt="GithubIcoN"/>
                    </Link>
                    <Link href="https://leetcode.com/AngelDroid/">
                        <Image src={LeetCodeIcon} alt="GithubIcoN"/>
                    </Link>
                </div>
            </div>
            <div>

                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                        <input type="email" name="email" id="email" required placeholder="youremail@google.com"
                               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input type="text" name="subject" id="subject" required placeholder="Just say Hi!"
                               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea name="message" id="message"
                                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                  placeholder="Hi Angel i want to hire you!..."/>
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
                    {
                      emailSubmitted && (
                          <p className="text-blue-500 text-sm mt-2"> Email sent successfully!</p>
                      )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection;