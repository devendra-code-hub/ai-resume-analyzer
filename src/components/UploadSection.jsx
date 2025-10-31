import React, { useState } from "react";
import { analyzeResume } from "../api/analyzeResume"; // ✅ correct import
import AnalysisResult from "./AnalysisResult";

const UploadSection = () => {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeText.trim()) return alert("Please paste your resume text first!");
    setLoading(true);
    try {
      const data = await analyzeResume(resumeText);
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="bg-white p-6 rounded-xl shadow-lg w-3/4 max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Paste Your Resume Text Below
        </h2>
        <textarea
          className="w-full border border-blue-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="8"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your resume text here..."
        ></textarea>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>

      {result && <AnalysisResult result={result} />}
    </div>
  );
};

export default UploadSection;
