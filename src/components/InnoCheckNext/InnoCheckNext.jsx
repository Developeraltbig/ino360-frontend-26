import React from "react";
import Navbar from "../HomePage/Navbar";
import ContentMainInno from "../ContentMain/ContentMainInno";

export default function InnoCheckNext() {
  return (
    <div>
      <Navbar />
      <div
        className="container-fluid"
        style={{ padding: "150px 50px 0px 50px" }}
      >
        <h5>InnoCheck</h5>
        <p style={{ fontSize: "16px" }}>
          Conduct a comprehensive search to assess invention's uniqueness.
        </p>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ContentMainInno />
          </div>
        </div>
      </div>
    </div>
  );
}
