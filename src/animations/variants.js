/*Fade In */
export const fadeIn = {
    hidden: { 
        opacity: 0
    },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

/*Card */
export const cardVariant = {
    hidden: { 
        opacity: 0, 
        scale: 0.85
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
            duration: 0.4, 
            ease: "easeOut" 
        }
    },
    hover: {
        y: -8,
        scale: 1.03,
        transition: { 
            duration: 0.2
        }
    }
}

/*Staggerred Children */
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

/*Carousel */
export const slideFromLeft = {
    hidden: { 
        opacity: 0, 
        x: -60
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 0.5, 
            ease: "easeOut" 
        }
    }
}

/*Bookmark */
export const bookmarkFloat = {
    initial: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotate: 0
    },
    animate: { 
        opacity: 0,
        y: -40,
        scale: 1.5,
        rotate: 15,
        transition: { 
            duration: 0.6, 
            ease: "easeOut" 
        }
    }
}