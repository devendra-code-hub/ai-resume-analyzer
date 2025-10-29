export const analyzeResume = async (text) =>{
  await new Promise((res) => setTimeout(res, 1500) );
  return {
    score: 82,
    suggestions: [
        "Add measurable metrics for achievements.",
        "Include keywords like 'React', 'Node.js', 'API Integration'.",
        "Enhance project descriptions with results and impact."
    ],
    keywords: ["React", "Node.js", "REST API", "Team Collaboration"]
  }  
}