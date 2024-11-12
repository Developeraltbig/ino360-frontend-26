import React from "react";
import "../../assets/css/homeContent2.css";
import { useNavigate } from "react-router-dom";

export default function HomeContentTwo() {
  const navigate = useNavigate();

  return (
    <div className="homeContent2 container">
      <div className="upper-head-text">
        <h2 className="head-clr">
          Hello, <span style={{ color: "#38B6FF" }}>Daniel.</span>
        </h2>
        <h2 className="head-clr">What are we working on today?</h2>
      </div>

      <div>
        <div className="row">
          <div className="col-lg-20  col-md-6 col-sm-12">
            <div className="card-stl-1">
              <h5>InnoCheck</h5>
              <p className="para-stl">
                Conduct a comprehensive search to assess invention's uniqueness.
              </p>
              <div className="text-end">
                <i
                  class="bi bi-arrow-right-circle-fill err-icon-stl"
                  onClick={() => navigate("/innoCheck")}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-20  col-md-6 col-sm-12">
            <div className="card-stl-1">
              <h5>ProvisioDraft</h5>
              <p className="para-stl">
                Generate a comprehensive provisional patent specifications.
              </p>
              <div className="text-end">
                <i
                  class="bi bi-arrow-right-circle-fill err-icon-stl"
                  onClick={() => navigate("/provisioDraft")}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-20  col-md-6 col-sm-12">
            <div className="card-stl-1">
              <h5>DraftMaster</h5>
              <p className="para-stl">
                Generate a detailed non-provisional patent application. with
                description and claims.
              </p>
              <div className="text-end">
                <i class="bi bi-arrow-right-circle-fill err-icon-stl"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-20  col-md-6 col-sm-12">
            <div className="card-stl-1">
              <h5>IDS Pro</h5>
              <p className="para-stl">
                Generate an Information Disclosure Statement (IDS) compiling
                references from InnoCheck.
              </p>
              <div className="text-end">
                <i class="bi bi-arrow-right-circle-fill err-icon-stl"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-20  col-md-6 col-sm-12">
            <div className="card-stl-1">
              <h5>QuickForms</h5>
              <p className="para-stl">
                Generate accurate, ready-to-file USPTO forms.
              </p>
              <div className="text-end">
                <i class="bi bi-arrow-right-circle-fill err-icon-stl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="bottom-para para-stl-1">
          <span>-</span> Download Invention Disclosure Form (IDF) <span>-</span>
          Generate Invention Disclosure Form (IDF) from any document
          <span>-</span> Download Invention Disclosure Form (IDF)
        </p>
      </div>
    </div>
  );
}
