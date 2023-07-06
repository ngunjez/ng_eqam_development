import React from 'react'
import style from "../styles/Jobs.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from 'next/image';


const Jobs = () => {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.content_head}>Jobs</div>
                </div>

                <div className = {style.Rec1}>
                    <Image 
                        className = {style.bcontainer}
                        src = "/Rec1.svg"
                        width ={1278}
                        height = {74}
                        alt = "pic"
                    />
                </div>
                <div className = {style.Text2}>Please check back next time!</div>

            </div>
        </>
    )
}

export default Jobs