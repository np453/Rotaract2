import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import ScrollReveal from 'scrollreveal';
import axios from 'axios';
const TestPage = props => {
    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.2, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    useEffect(() => {
        // const {data} = await axios.get('http://localhost:4444/upload/img')
        // setGallery(data)
        
    }, []);
    return (
        <div className="container-fluid p-0 d-flex justify-content-center align-items-center" style={{height:"150vh"}}> 
            <motion.div className="" >
                
                <motion.h1 style={{ y:yPosAnim, opacity: opacity }} className="head1">This is framer motion animation1</motion.h1>
                <motion.h1 style={{ y:yPosAnim2, opacity: opacity2,}} className="head2">This is framer motion animation2</motion.h1>
                <motion.h1 style={{ y:yPosAnim3, opacity: opacity3,}} className="head3">This is framer motion animation3</motion.h1>
            </motion.div>         
            
        </div>
    );
}


export default TestPage