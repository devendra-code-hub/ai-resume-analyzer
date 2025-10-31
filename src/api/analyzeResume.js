import axios from "axios";

export async function analyzeResume(text) {
  // For now, mock analysis until backend is ready
  const keywords = ["React", "Node.js", "JavaScript", "Teamwork", "Leadership"];
  const found = keywords.filter((word) => text.includes(word));

  // simulate delay
  await new Promise((r) => setTimeout(r, 1000));

  return {
    message: "Resume analyzed successfully!",
    matchedKeywords: found,
    totalKeywords: keywords.length,
    score: Math.round((found.length / keywords.length) * 100),
  };
}




















// export async function POST(req) {
//   const { text } = await req.json();

//   // Mock "analysis"
//   const keywords = ["React", "Node.js", "JavaScript", "Teamwork", "Leadership"];
//   const found = keywords.filter((word) => text.includes(word));

//   return new Response(
//     JSON.stringify({
//       message: "Resume analyzed successfully!",
//       matchedKeywords: found,
//       totalKeywords: keywords.length,
//       score: Math.round((found.length / keywords.length) * 100),
//     }),
//     { status: 200 }
//   );
// }










// // export const analyzeResume = async (text) =>{
// //   await new Promise((res) => setTimeout(res, 1500) );
// //   return {
// //     score: 82,
// //     suggestions: [
// //         "Add measurable metrics for achievements.",
// //         "Include keywords like 'React', 'Node.js', 'API Integration'.",
// //         "Enhance project descriptions with results and impact."
// //     ],
// //     keywords: ["React", "Node.js", "REST API", "Team Collaboration"]
// //   }  
// // }