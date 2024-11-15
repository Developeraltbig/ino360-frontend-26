import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactMarkdown from "react-markdown";
import "./uploadPDF.css";
import ReactQuill from "react-quill";

// ********************
import { OrbitProgress } from "react-loading-indicators";
// ********************

function UploadPDF() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [answer, setAnswer] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [generatingAnswer2, setGeneratingAnswer2] = useState(false);
  const [generatingAnswer3, setGeneratingAnswer3] = useState(false);
  const [generatingAnswer4, setGeneratingAnswer4] = useState(false);
  const [generatingAnswer5, setGeneratingAnswer5] = useState(false);
  const [pdfText, setPdfText] = useState("");

  // Load pdfText from local storage when the component mounts
  useEffect(() => {
    const storedPdfText = localStorage.getItem("pdfText");
    if (storedPdfText) {
      setPdfText(storedPdfText);
    }
  }, []);

  // Save pdfText to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("pdfText", pdfText);
  }, [pdfText]);

  // Example function to update pdfText
  const handleChange = (event) => {
    setPdfText(event.target.value);
  };

  // *************************

  // Save ClaimsText to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("answer", answer);
  }, [answer]);

  // *************************

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Generating Answer... Wait for a while...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAUrKHvLgqbCbmWzdQUBGUTcNQq35HuXRQ`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  async function generateAnswer2(e) {
    setGeneratingAnswer2(true);
    e.preventDefault();
    setAnswer2("Generating Answer... Wait for a while...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAUrKHvLgqbCbmWzdQUBGUTcNQq35HuXRQ`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question2 }] }],
        },
      });

      setAnswer2(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer2("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer2(false);
  }

  async function generateAnswer3(e) {
    setGeneratingAnswer3(true);
    e.preventDefault();
    setAnswer3("Generating Answer... Wait for a while...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAUrKHvLgqbCbmWzdQUBGUTcNQq35HuXRQ`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question3 }] }],
        },
      });

      setAnswer3(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer3("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer3(false);
  }

  async function generateAnswer4(e) {
    setGeneratingAnswer4(true);
    e.preventDefault();
    setAnswer4("Generating Answer... Wait for a while...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDHWIhQzpCDv49U4tafqu59QV6w5IIMNFY`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question4 }] }],
        },
      });

      setAnswer4(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer4("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer4(false);
  }

  async function generateAnswer5(e) {
    setGeneratingAnswer5(true);
    e.preventDefault();
    setAnswer5("Generating Answer... Wait for a while...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDHWIhQzpCDv49U4tafqu59QV6w5IIMNFY`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question5 }] }],
        },
      });

      setAnswer5(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer5("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer5(false);
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"], // Additional text formatting
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ indent: "-1" }, { indent: "+1" }], // Indentation
      [{ align: [] }], // Text alignment
      ["link", "image", "video"], // Links, Images, and Videos
      [{ color: [] }, { background: [] }], // Text and background color
      ["clean"], // Remove formatting
    ],
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChanges1 = (html) => {
    setAnswer(html);
    console.log(`This is answer One ${answer}`);
  };

  const handleChanges2 = (html) => {
    setAnswer2(html);
  };

  const handleChanges3 = (html) => {
    setAnswer3(html);
  };

  const handleChanges4 = (html) => {
    setAnswer4(html);
  };

  const handleChanges5 = (html) => {
    setAnswer5(html);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "https://ino360-backend-26.onrender.com/upload",
        formData
      );
      alert(response.data.message);

      setPdfText(response.data.text);
    } catch (error) {
      console.error(error);
      alert("Error uploading PDF");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleButtonClick = () => {
    const pdfContent = document.getElementById("pdfText").innerText;
    const questionContent = document.getElementById("firstQuestion").innerText;

    // Combine content and set it in the textarea
    setQuestion(`${pdfContent}\n${questionContent}`);
  };

  const handleButtonClick2 = () => {
    const pdfContent = document.getElementById("pdfText").innerText;
    const questionContent = document.getElementById("secondQuestion").innerText;

    // Combine content and set it in the textarea
    setQuestion2(`${pdfContent}\n${questionContent}`);
  };

  const handleButtonClick3 = () => {
    const pdfContent = document.getElementById("pdfText").innerText;
    const questionContent = document.getElementById("thirdQuestion").innerText;

    // Combine content and set it in the textarea
    setQuestion3(`${pdfContent}\n${questionContent}`);
  };

  const handleButtonClick4 = () => {
    const pdfContent = document.getElementById("pdfText").innerText;
    const questionContent = document.getElementById("fourthQuestion").innerText;

    // Combine content and set it in the textarea
    setQuestion4(`${pdfContent}\n${questionContent}`);
  };

  const handleButtonClick5 = () => {
    const pdfContent = document.getElementById("pdfText").innerText;
    const questionContent = document.getElementById("fifthQuestion").innerText;

    // Combine content and set it in the textarea
    setQuestion5(`${pdfContent}\n${questionContent}`);
  };

  return (
    <>
      {/* <div id="UploadPDF">
        <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />

        <button className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>

        {loading && (
          <OrbitProgress
            variant="spokes"
            color="#32cd32"
            size="small"
            text="Uploading "
            textColor="#bfa7a7"
          />
        )}
      </div> */}

      <div className="pdf-text-container" style={{ display: "none" }}>
        <h2 className="text-xl font-bold">PDF Text Content:</h2>
        <p id="pdfText" value={pdfText} onChange={handleChange}>
          {pdfText}
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <h3 style={{ color: "#36718b" }}>Title of the Invention</h3>
        {/* <p style={{ fontSize: "18px" }}>
          What is the tentative title for your invention?
        </p> */}
        <p id="firstQuestion" style={{ display: "none" }}>
          Provide me the title of the invention of the above provided content.
          Provided content should only contain the Title of the invention in
          bold letters and nothing else.
          <br />
          Provide me four options of title of the invention from above provided
          content & no extra content other that the titles is required. Start
          with a heading of "Title of Invention" in the first line & inside h1
          tag.
          <br />
          And provided content should only give complete answer using proper
          html tags & not even single word is written without tag. And also give
          the content with proper heading and ordered list with proper alignment
          so that it looks good. And provided text must align to the left side.
          And the provided content must be left aligned.
        </p>
        <form
          onSubmit={generateAnswer}
          className="bg-white-new w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg shadow-lg bg-white py-2 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <textarea
            id="passQuery"
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            style={{ display: "none" }}
          ></textarea>
          <button
            id="button1"
            onClick={handleButtonClick}
            type="submit"
            className="btn btn-primary w-auto"
            disabled={generatingAnswer}
          >
            Generate AI answer
          </button>
        </form>
        <div
          id="firstAnswer"
          className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg bg-white shadow-lg transition-all duration-500 transform hover:scale-105"
          style={{ overflowY: "scroll" }}
        >
          {/* <ReactMarkdown className="p-4">{answer}</ReactMarkdown> */}
          <ReactQuill
            value={answer}
            onChange={handleChanges1}
            modules={modules}
          />
        </div>
      </div>

      {/* Example structure for second question */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <h3 style={{ color: "#36718b" }}>Background of the Invention</h3>
        {/* <p style={{ fontSize: "18px" }}>
          Please indicate the occasion for making this invention. Describe the
          general problem statement and which prior art, already known to you
          that forms the starting of your invention?
        </p> */}
        <p id="secondQuestion" style={{ display: "none" }}>
          From above provided content generate detailed content for 1.Technical
          Problems faced while doing the Invention And 2. Prior Arts of the
          Invention. for drafting the patent for above invention. And provided
          content should only give complete answer using proper html tags & not
          even single word is written without tag.
          <br />
          Inside the first answer provide the content for Technical problems
          faced while doing the invention from the above provided content.
          Provided content should only contain the content related to 1.
          Specific Circumstances or Occasions Prompting the Need for This
          Invention 2. General Problems the Invention Aims to Solve 3. Domains
          or Fields Where This Invention Could Potentially Be Applied 4.
          Technical Features of the invention 5. Scientific Principles. And also
          give the content with proper heading and ordered list with proper
          alignment so that it looks good. Heading for first answer must be
          "Technical problems" and it should be in bold letters. Technical
          Problems content should be around 2500 words and very detailed.And
          also give the content with proper heading and ordered list with proper
          alignment so that it looks good. Do numbering to all the headings
          accordingly.
          <br />
          Inside the second answer the provide the content related to "Which
          prior art, already known to you that forms the starting of your
          invention? For example known patents, research articles, known
          products." from the above provided content. The most important thing
          is that provided content should also contain 10 similar researches
          data of Prior researches done in USPTO or WIPO which are very much
          similar to my invention. Provided content should only contain the
          content related to prior art and nothing else. And also give the
          content with proper heading and ordered list with proper alignment so
          that it looks good. Heading for second answer must be "Prior Arts" and
          it should be in bold letters. And also give the content with proper
          heading and ordered list with proper alignment so that it looks good.
          <br />
          Don't use images & tables.
          <br />
          And proper inline css must be used to make the UI good looking. Proper
          margin padding must be used.
          <br />
          Provided content should be very must accurate and left aligned.
        </p>
        <form
          onSubmit={generateAnswer2}
          className="bg-white-new w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg shadow-lg bg-white py-2 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <textarea
            id="passQuery"
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question2}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            style={{ display: "none" }}
          ></textarea>
          <button
            id="button2"
            onClick={handleButtonClick2}
            type="submit"
            className="btn btn-primary w-auto"
            disabled={generatingAnswer2}
          >
            Generate AI answer
          </button>
        </form>
        <div
          id="secondAnswer"
          className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg bg-white shadow-lg transition-all duration-500 transform hover:scale-105"
          style={{ overflowY: "scroll" }}
        >
          {/* <ReactMarkdown className="p-4">{answer2}</ReactMarkdown> */}
          <ReactQuill
            value={answer2}
            onChange={handleChanges2}
            modules={modules}
          />
        </div>
      </div>

      {/* Example structure for third question */}
      {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <h3 style={{ color: "#36718b" }}>Prior Art</h3>
        <p style={{ fontSize: "18px" }}>
          Which prior art, already known to you that forms the starting of your
          invention? For example known patents, research articles, known
          products.
        </p>
        <p id="thirdQuestion" style={{ display: "none" }}>
          Provide me the content for "Which prior art, already known to you that
          forms the starting of your invention? For example known patents,
          research articles, known products." from the above provided content.
          Provided content should only contain the content related to prior art
          and nothing else. And also give the content with proper heading and
          ordered list with proper alignment so that it looks good.
          <br />
          And provided content should only give complete answer using proper
          html tags & not even single word is written without tag. And also give
          the content with proper heading and ordered list with proper alignment
          so that it looks good. And the provided content must be left
          aligned.Answer must start with a heading of "Prior Art"
          <br />
          And provided content should give complete answer using proper html
          tags also in h1 tag.
        </p>
        <form
          onSubmit={generateAnswer3}
          className="bg-white-new w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg shadow-lg bg-white py-2 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <textarea
            id="passQuery"
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question3}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            style={{ display: "none" }}
          ></textarea>
          <button
            id="button3"
            onClick={handleButtonClick3}
            type="submit"
            className="btn btn-primary w-auto"
            disabled={generatingAnswer3}
          >
            Generate AI answer
          </button>
        </form>
        <div
          id="thirdAnswer"
          className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg bg-white shadow-lg transition-all duration-500 transform hover:scale-105"
          style={{ overflowY: "scroll" }}
        >
          
          <ReactQuill
            value={answer3}
            onChange={handleChanges3}
            modules={modules}
          />
        </div>
      </div> */}

      {/* Example structure for fourth question */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <h3 style={{ color: "#36718b" }}>Novelty and Objectives</h3>
        {/* <p style={{ fontSize: "18px" }}>
          What is the novel aspect of your invention and how is it solving the
          drawbacks found in existing prior art?
        </p> */}
        <p id="fourthQuestion" style={{ display: "none" }}>
          Provide me the content for "What is the novel aspect of your invention
          and how is it solving the drawbacks found in existing prior art?" from
          the above provided content. Provided content should also contain the
          content related to 1. Novel Aspects or Innovations Introduced by the
          Invention 2. Contribution to Overcoming Drawbacks or Limitations of
          Existing Solutions 3. Give a list of objectives/advantages that you
          achieve because of the novel aspects of the invention . And also give
          the content with proper heading and ordered list with proper alignment
          so that it looks good. Provided content should be more than 500 words.
          <br />
          And provided content should only give complete answer using proper
          html tags & not even single word is written without tag. And also give
          the content with proper heading and ordered list with proper alignment
          so that it looks good. And the provided content must be left aligned.
          <br />
          Answer must start with a heading of "Novelty and Objectives" also in
          h1 tag.
        </p>
        <form
          onSubmit={generateAnswer4}
          className="bg-white-new w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg shadow-lg bg-white py-2 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <textarea
            id="passQuery"
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question4}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            style={{ display: "none" }}
          ></textarea>
          <button
            id="button4"
            onClick={handleButtonClick4}
            type="submit"
            className="btn btn-primary w-auto"
            disabled={generatingAnswer4}
          >
            Generate AI answer
          </button>
        </form>
        <div
          id="fourthAnswer"
          className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg bg-white shadow-lg transition-all duration-500 transform hover:scale-105"
          style={{ overflowY: "scroll" }}
        >
          {/* <ReactMarkdown className="p-4">{answer4}</ReactMarkdown> */}
          <ReactQuill
            value={answer4}
            onChange={handleChanges4}
            modules={modules}
          />
        </div>
      </div>

      {/* Example structure for fifth question */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
        <h3 style={{ color: "#36718b" }}>Drawings/Figures</h3>
        {/* <p style={{ fontSize: "18px" }}>
          Upload the images that are required for explanation of the invention.
          Please upload, caption and label the relevant figures eg. system
          diagrams, chemical structures, CAD drawings, circuit diagrams etc. as
          black line drawings.
        </p> */}
        <p id="fifthQuestion" style={{ display: "none" }}>
          Provide me the content for "Drawings/Figures" from the above provided
          content. Provided content should only contain the content related to
          Drawings/Figures and nothing else. And also give the content with
          proper heading and ordered list with proper alignment so that it looks
          good.
          <br />
          And provided content should only give complete answer using proper
          html tags & not even single word is written without tag. And also give
          the content with proper heading and ordered list with proper alignment
          so that it looks good. And the provided content must be left aligned.
        </p>
        <form
          onSubmit={generateAnswer5}
          className="bg-white-new w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg shadow-lg bg-white py-2 px-4 transition-all duration-500 transform hover:scale-105"
        >
          <textarea
            id="passQuery"
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question5}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            style={{ display: "none" }}
          ></textarea>
          <button
            id="button5"
            onClick={handleButtonClick5}
            type="submit"
            className="btn btn-primary w-auto"
            disabled={generatingAnswer5}
          >
            Generate AI answer
          </button>
        </form>
        <div
          id="fifthAnswer"
          className="w-full md:w-3/3 lg:w-2/2 xl:w-3/3  rounded-lg bg-white shadow-lg transition-all duration-500 transform hover:scale-105"
          style={{ overflowY: "scroll" }}
        >
          {/* <ReactMarkdown className="p-4">{answer5}</ReactMarkdown> */}
          <ReactQuill
            value={answer5}
            onChange={handleChanges5}
            modules={modules}
          />
        </div>
      </div>
    </>
  );
}

export default UploadPDF;
