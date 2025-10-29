import React from "react";
import {motion} from "framer-motion";


const Navbar = () =>(
    <motion.nav
     className = "bg-blue-600 text-white py-4 text-center text-xl font-semibold shadow-md"
     initial = {{ y: -50, opacity: 0 }}
     animate = {{ y: 0, opacity: 1 }}
     transition = {{ duration: 0.6 }}
    >
        AI Resume Anlyzer
    </motion.nav>
);

export default Navbar;