"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/button";
import Title from "@/components/stack";
import gsap from "gsap";

export default function Resume() {

    useEffect(() => {
        gsap.from('.contact', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        })
    }, [])

    return (
        <section className="text-left space-y-6">
            <Title children={"Resume."} />
            <div className="flex text-lg">
                <p
                    key={0}
                    className="px-3 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    View or download the resume
                </p>
                <a className="text-white underline font-semibold" href="https://drive.google.com/file/d/1zYzuuXqXoPXQJcStjFKMWNRaV4WgCtHx/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <b>Download</b>
                </a>
            </div>
            <br />
            <div className="contact grid gap-4 text-lg text-gray-600">
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: 0,
                        paddingTop: '56.2225%',
                        paddingBottom: 0,
                        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                        marginTop: '1.6em',
                        marginBottom: '0.9em',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        willChange: 'transform',
                    }}
                >
                    <iframe
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 'none',
                            padding: 0,
                            margin: 0,
                        }}
                        src="https://www.canva.com/design/DAGTdmnZuF0/AtF9BS4t3v7N-Ccjg6UK5w/view?embed"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


            <Button title="go to contact" href="/Contact" />
        </section>
    )
}