import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import ScrollReveal from 'scrollreveal';
import axios from 'axios';
const TestPage = props => {
    const { scrollYProgress } = useViewportScroll()
    const [content, setContent] = useState("dsjkfhjsdhfjkhds")
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.2, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    const contents = [
        {
            contentClass:"content-1",
            content:"Incubate."
        },
        {
            contentClass:"content-2",
            content:"Innovate."
        },
        {
            contentClass:"content-3",
            content:"Involve."
        },
        {
            contentClass:"content-4",
            content:"Image your goal."
        },
        {
            contentClass:"content-5",
            content:"motivate."
        },
        {
            contentClass:"content-5",
            content:"focus."
        },
        {
            contentClass:"content-5",
            content:"energise."
        },
        {
            contentClass:"content-5",
            content:"staminize."
        },
        {
            contentClass:"content-5",
            content:"high spirits."
        },
        {
            contentClass:"content-5",
            content:"power up."
        },
        {
            contentClass:"content-5",
            content:"get ready."
        },
    ]

    useEffect(() => {
        // const {data} = await axios.get('http://localhost:4444/upload/img')
        // setGallery(data)
        ScrollReveal().reveal(".content", { scale:8, duration:1000 })
        for(let i=0;i<contents.length;i++) {
            setTimeout(() => {
                setContent(contents[i].content)
                console.log(contents[i].content)
            }, 110*i)
        }
    }, []);
    return (
        <div className="container-fluid p-0 d-flex justify-content-center align-items-center" style={{height:"150vh"}}> 
            <motion.div className="" >
                <h1 style={{ y:yPosAnim, opacity: opacity, scale:scaleAnim}} className="content">{content}</h1>
            </motion.div>         
            
        </div>
    );
}


export default TestPage