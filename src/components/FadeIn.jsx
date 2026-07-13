import { motion } from "motion/react"
import { fadeIn } from "../animations/variants"

function FadeIn({children}){
    return(
        <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}>
            {children}
        </motion.div>
    )
}

export default FadeIn