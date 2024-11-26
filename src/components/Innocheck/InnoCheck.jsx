// import UploadPdfIno from "./UploadPdfIno";
import "../../assets/css/innoCheck.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/ContentMain/InvetionDisclosure/uploadPDF.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

// ********************
import { OrbitProgress } from "react-loading-indicators";
// ********************

const InnoCheck = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [pdfText, setPdfText] = useState("");

  const [selectedButtons, setSelectedButtons] = useState([]);
  const buttonValues = [
    "Summary Of Invention",
    "Key Features",
    "Problem Statement",
    "Solution Statement",
    "Novelty Statement",
    "Listing Of Results",
    "Relevant Excerpts",
    "Key Features vs Result Matrix",
    "Comparative Analysis",
    "Advantages Of Invention",
    "Industrial Applicability",
    "Inovators In The Field",
    "Recommendation",
  ];

  // Save Selected Buttons Pdf to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedButtons", selectedButtons);
  }, [selectedButtons]);

  const handleButtonClickNew = (value) => {
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(value)) {
        // If it's already selected, remove it from the array
        return prevSelected.filter((button) => button !== value);
      } else {
        // Otherwise, add it to the array
        return [...prevSelected, value];
      }
    });
  };

  // This effect updates the content of the paragraph with id="firstQuestion"
  useEffect(() => {
    const firstQuestionElement = document.getElementById("firstQuestion");
    if (firstQuestionElement) {
      // Combine selected button values with the current text of firstQuestion
      const currentText = firstQuestionElement.innerText;
      firstQuestionElement.innerText = `${selectedButtons.join(
        ", "
      )} ${currentText}`.trim(); // Join selected button values and append the current text
    }
  }, [selectedButtons]); // Dependency array includes selectedButtons

  // Save pdfText to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("pdfText", pdfText);
  }, [pdfText]);

  // Load pdfText from local storage when the component mounts
  useEffect(() => {
    const storedPdfText = localStorage.getItem("pdfText");
    if (storedPdfText) {
      setPdfText(storedPdfText);
    }
  }, []);

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
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAJ6hLxr058t7H7bI41aL0PNYKsLYCkOVs`,
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

  return (
    <div className="container-fluid" style={{ padding: "150px 50px 0px 50px" }}>
      <h5>InnoCheck</h5>
      <p style={{ fontSize: "16px" }}>
        Conduct a comprehensive search to assess invention's uniqueness.
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <div className="main-content">
            <div className="pdf-text-container" style={{ display: "none" }}>
              <h2 className="text-xl font-bold">PDF Text Content:</h2>
              <p id="pdfText" value={pdfText} onChange={handleChange}>
                {pdfText}
              </p>
            </div>

            <div className="cont-nit">
              <div
                className="container"
                style={{ padding: "40px 10px 30px 10px" }}
              >
                <textarea
                  className="p-3 w-100 textarea-stl"
                  rows="10"
                  cols="50"
                  placeholder="Please enter the details of your disclosure."
                ></textarea>
              </div>
              {/* <UploadPdfIno /> */}
              <div
                id="UploadPDF"
                style={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="left">
                  <input
                    style={{ width: "190px" }}
                    type="file"
                    accept=".pdf, .docx"
                    onChange={handleFileChange}
                  />
                  <button
                    className="btn-stl-4 w-auto"
                    style={{ height: "35px", width: "85px !important" }}
                    onClick={handleUpload}
                  >
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
                </div>
                <div className="right">
                  <button
                    className="btn-stl-4 w-auto"
                    onClick={() => navigate("/innoCheckNext")}
                    style={{ height: "35px" }}
                  >
                    Generate Search Report &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen p-3 flex flex-col justify-center items-center">
            
              <p id="firstQuestion" style={{ display: "none" }}>
              
                Very Important thing is that use proper html tags inside the
                answer. And give the content related to every key words in 50
                words using proper html tags. And the heading must be in bold
                letters. The answer for every heading must be very must relevent
                and should be only in 50 words for every heading. And must give
                answer using proper html tags. No extra content must be
                generated except provided headings content.
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
                <ReactQuill
                  value={answer}
                  onChange={handleChanges1}
                  modules={modules}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-12">
          <div>
            <h6 style={{ color: "#008CBF" }}>
              1 - Select contents of the Novelty Search Report
            </h6>
            <div>
              {buttonValues.map((value) => (
                <div
                  key={value}
                  style={{
                    display: "inline-block",
                    position: "relative",
                    margin: "5px",
                  }}
                >
                  <button
                    onClick={() => handleButtonClickNew(value)}
                    className="btn-stl-3 w-auto"
                    style={{
                      border: selectedButtons.includes(value)
                        ? "2px solid green"
                        : "2px solid gray",
                      margin: "5px",
                      padding: "5px",
                      cursor: "pointer",
                      position: "relative",
                      width: "auto",
                    }}
                  >
                    {value}
                    {selectedButtons.includes(value) && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the button click event
                          handleButtonClickNew(value); // Unselect the button
                        }}
                        style={{
                          position: "absolute",
                          top: "-6px",
                          right: "4px",
                          cursor: "pointer",
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        &times; {/* Cross icon */}
                      </span>
                    )}
                  </button>
                </div>
              ))}
              {/* <div>
                <h3>Selected Buttons:</h3>
                <p>{JSON.stringify(selectedButtons)}</p>
              </div> */}
            </div>
            {/* <div className="d-flex align-items-center justify-content-center flex-wrap">
              <button className="btn-stl-3 w-auto">Summary Of Invention</button>
              <button className="btn-stl-3 w-auto">Key Features</button>
              <button className="btn-stl-3 w-auto">Problem Statement</button>
              <button className="btn-stl-3 w-auto">Solution Statement</button>
              <button className="btn-stl-3 w-auto">Novelty Statement</button>
              <button className="btn-stl-3 w-auto">Listing Of Results</button>
              <button className="btn-stl-3 w-auto">Relevant Excerpts</button>
              <button className="btn-stl-3 w-auto">
                Key Features vs Result Matrix
              </button>
              <button className="btn-stl-3 w-auto">Comparative Analysis</button>
              <button className="btn-stl-3 w-auto">
                Advantages Of Invention
              </button>
              <button className="btn-stl-3 w-auto">
                Industrial Applicability
              </button>
              <button className="btn-stl-3 w-auto">
                Inovators In The Field
              </button>
              <button className="btn-stl-3 w-auto">Recommendation</button>
            </div> */}

            <h6 className="mt-5" style={{ color: "#008CBF" }}>
              2 - Select the next action
            </h6>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <button className="btn-stl-4 w-auto">VIEW SEARCH REPORT</button>

              <button className="btn-stl-4 w-auto">
                DOWNLOAD SEARCH REPORT
              </button>
              <button className="btn-stl-4 w-auto">
                SAVE SEARCH REPORT + PROCEED TO DRAFTING PROVISIONAL
                SPECIFICATION
              </button>
              <button className="btn-stl-4 w-auto">
                GENERATE PROVISIONAL DRAFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnoCheck;
