import React ,{useState} from "react";
import {motion} from "framer-motion";
import {analyzeResume} from "../api/analyzeResume";
import AnalysisResult from "./AnalysisResult";

const UploadSection =()=>{
    const[resumeText ,setResumeText]=useState(" ");
    const[result,setResult]=usestate(null);
    const[loading,setloading]=usestate(false);

    const handleAnalyze=async()=>{
        if(!resume.Text.trim()) return alert("Please paste your resume text!");
        setLoading(true);
        const response=await analyzeResume(resumeText);
        setResult(response);
        setLoading(false);
    };

 
return(
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded -2xl shadow-md">
        <motion.h2
        className="text-2xl font-semibold mb-4 text-center"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
        >
            Paste Your Resume Text Below
        </motion.h2>
        <textarea
        className = "w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder = "Paste your resume content here..."
        value = {resumeText}
        onChange = {(e) => setResumeText(e,target.value)}
        /> 
        <button 
            className  = "mt-4 w-full br-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            onClick = {handleAnalyze}
            disabled = {loading}
            >
                 {loading ? "Analyzing..." : " Analyze Resume"}
        </button>
   
        {result && <AnalysisResult result = {result} /> }
         
    </div>
);
};
export default UploadSection;