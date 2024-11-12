import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Document, Packer, Paragraph, TextRun } from "docx";

const PatentDrafting = () => {
  const [editorContent, setEditorContent] = useState("");
  const [reloadFlag, setReloadFlag] = useState(false);

  const quillRef = React.createRef();

  useEffect(() => {
    const storedProvisionalText = localStorage.getItem("answer6");
    const storedClaimsText = localStorage.getItem("answer7");
    if (storedProvisionalText && storedClaimsText) {
      setEditorContent(`${storedProvisionalText}\n\n${storedClaimsText}`);
    }
  }, [reloadFlag]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReloadFlag((prev) => !prev); // Toggle the flag to trigger re-render
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleChange = (html) => {
    setEditorContent(html);
  };

  const handlePrint4 = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
            <html>
                <head>
                    <title>Patent Draft</title>
                    <style>
                        body { font-family: Arial, sans-serif; }
                    </style>
                </head>
                <body>${editorContent}</body>
            </html>
        `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 2000);
  };

  const handleDownload4 = () => {
    const quill = quillRef.current.getEditor();
    const textContent = quill.getText();

    const paragraphs = textContent.split("\n").map((line) => {
      return new Paragraph({
        children: [new TextRun(line)],
      });
    });

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    });

    // Pack the document and trigger download
    Packer.toBlob(doc)
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "editor-content.docx"; // Change extension to .docx
        link.click();
      })
      .catch((error) => {
        console.error("Error creating DOCX file:", error);
      });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  return (
    <div id="PatentDrafting">
      <h1 className="head-stl" style={{ color: "#36718b" }}>
        Patent Drafting
      </h1>
      <ReactQuill
        ref={quillRef}
        value={editorContent}
        onChange={handleChange}
        modules={modules}
      />
      {/* <button
        className="btn btn-success"
        onClick={handleDownload4}
        style={{
          margin: "10px",
          padding: "5px",
          width: "200px",
        }}
      >
        Download as DOCX
      </button>  */}
      <button
        className="btn btn-primary"
        onClick={handlePrint4}
        style={{
          margin: "10px",
          padding: "5px",
          width: "200px",
        }}
      >
        Print
      </button>
    </div>
  );
};

export default PatentDrafting;
