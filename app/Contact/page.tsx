"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/button";
import Title from "@/components/stack";
import gsap from "gsap";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        gsap.from('.contact', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        });
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        axios.post('/api/emails',
            formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    };

    return (
        <section className="text-left space-y-6">
            <div className="text-lg">
                <Title children={"Contact."} />
                <p
                    key={0}
                    className="px-3 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    Get in touch or shoot me an email directly on perawitayasa@gmail.com
                </p>
            </div>
            <br />
            <form onSubmit={handleSubmit} method="POST" className="contact grid gap-4 text-lg text-gray-600">
                <div className="flex flex-col">
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-col">
                    <textarea
                        placeholder="Message"
                        name="message"
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white text-gray-600 border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 p-2 border border-gray-700 bg-transparent text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>


            <Button title="go back home" href="/" />
        </section>
    )
}