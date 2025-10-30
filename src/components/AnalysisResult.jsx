import React from "react";
import { motion } from "framer-motion";

const AnalysisResult = ({ result }) => (
    <motion.div
    className = "mt-6 bg-gray-100 p-5 rounded-xl shadow-inner"
    initial = {{ opacity: 0 }}
    animate = {{ opacity: 1 }}
    transition = {{ duration: 0.8 }}
    >
        <h3 className = "text-lg font-semibold mb-2 text-center">Analysis Result</h3>
        <p className = "text-center text-blue-600 font-bold text-2xl">
            Score: {result.score} / 100
        </p>

        <div className = "mt-4">
            <h4 className = "font-semibold">Suggestions:</h4>
            <ul>
                {result.suggestions.map((s,i) => (
                    <li key = {i}>{s}</li>
                ))}
            </ul>
        </div>

        <div classname = "mt-4">
            <h4 className = "font-semibold">Recommended Keywords:</h4>
            <div className = "flex flex-wrap gap-2 mt-2">
                {result.keywords.map((k,i) => (
                    <span key = {i} className = "bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {k}
                    </span>
                ))}
            </div>

        </div>

    </motion.div>
);

export default AnalysisResult;