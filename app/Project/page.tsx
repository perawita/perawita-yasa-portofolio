"use client";

import React, {useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

import { Button } from "@/components/button";
import Title from "@/components/stack";
import gsap from "gsap";

export default function Project() {

    useEffect(() => {
        gsap.from('.project', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        });
    }, []);

    return (
        <section className="text-left space-y-6">
            <Title>Projects.</Title>
            <div className="flex text-lg">
                <p
                    key={0}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    Go to my github to get full information about the app
                </p>

                <a className="text-white underline font-semibold" href="https://github.com/perawita?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <b>Github</b>
                </a>
            </div>

            <div className="project h-screen w-full">
                <LayoutGrid cards={cards} />
            </div>

            <Button title="go to my resume" href="/Resume" />
        </section>
    )
}

const Skeleton = ({ Title, Description }: { Title: string; Description: string }) => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {Title}
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {Description}
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <Skeleton Title="System Informasi SPP" Description="Aplikasi berbasis web ini tujuan dibuatnya sebagai alat bantu untuk pihak adminitrasi sekolah untuk menangani pembayaran spp siswa sisiwi yang ada di sekolah tersebut." />,
        className: "md:col-span-2",
        thumbnail:
            "/project/2.png",
    },
    {
        id: 2,
        content: <Skeleton Title="Air Tejun Benang Kelambu" Description="Aplikasi ini dibuat sebagai alat bantu para turis asing maupun turis dari dalam negeri sebagai alat bantu informasi tentang Air Terjun Benang Kelambu." />,
        className: "col-span-1",
        thumbnail:
            "/project/3.png",
    },
    {
        id: 3,
        content: <Skeleton Title="Verifikasi Nomor" Description="Aplikasi ini dibuat sebagai alat bantu Admin untuk melakukan Verifikasi Nomor dari user aplikasi ini berfokus pada pengembangan Backend nya." />,
        className: "col-span-1",
        thumbnail:
            "/project/4.png",
    },
    {
        id: 4,
        content: <Skeleton Title="Analisis Data Saham" Description="Aplikasi ini dibuat sebagai alat untuk melakukan analisis terhadap saham yang ada di dunia, aplikasi ini juga terintegrasi dengan rumus Graham untuk menentukan margin of safety-nya." />,
        className: "md:col-span-2",
        thumbnail:
            "/project/1.png",
    },
    {
        id: 5,
        content: <Skeleton Title="Admin Page Verifikasi Nomor" Description="Aplikasi ini bertujuan untuk mengelola data yang dikirimkan melalu Aplikasi Verifikasi Nomor Aplikasi ini juga berfokus pada bagian Backend nya" />,
        className: "col-span-1",
        thumbnail:
            "/project/5.png",
    },
    {
        id: 6,
        content: <Skeleton Title="Portal Perpustakaan" Description="Aplikasi ini dibuat sebagai alat bantu Admin ataupun User untuk melakukan peminjaman buku bagi user dan Admin untuk mengelola data user, peminjam, maupun data buku." />,
        className: "md:col-span-2",
        thumbnail:
            "/project/6.png",
    },
    {
        id: 7,
        content: <Skeleton Title="E-commerce" Description="Aplikasi ini dibuat sebagai alat latihan saya untuk mengukur keterampilan saya membuat sebuah aplikasi yang responsive menggunakan Tailwindui." />,
        className: "md:col-span-2",
        thumbnail:
            "/project/7.png",
    },
];