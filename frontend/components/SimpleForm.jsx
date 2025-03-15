import { useState } from "react";
import { TbCopy } from "react-icons/tb";
export default function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue , setOutputValue] = useState("");
  const [flag , setFlag] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://link-conciser.vercel.app/" , {
      method :"POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url : inputValue
      }),
    });
    const data = await response.json();
    setOutputValue(data.id);
    setFlag(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(outputValue);
    alert("Text Copied!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Paste Your URL</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Paste here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 text-gray-700 shadow-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all font-semibold shadow-md mb-6"
          >
            Submit
          </button>
        </form>
        {flag
         &&
          <div className="flex justify-between w-full p-4 border border-gray-300 rounded-lg text-gray-700 shadow-sm">
            <p>{outputValue}</p>
            <button onClick={handleCopy} className="text-purple-600 cursor-pointer"><TbCopy/></button>
          </div>
        }
      </div>
    </div>
  );
}
