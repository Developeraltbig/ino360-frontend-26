import "./Content.css";
import ContentMain from "../../components/ContentMain/ContentMain";

const Content = () => {
  return (
    <div className="container-fluid" style={{ padding: "150px 50px 0px 50px" }}>
      <h5>Project ID</h5>
      <p style={{ fontSize: "16px" }}>
        <span>ProvisioDraft</span> Generate a comprehensive provisional patent
        specification
      </p>
      <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div className="main-content">
            <ContentMain />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <div>
            <h6 style={{ color: "#008CBF" }}>
              1 - Options to refine the Provisional Draft
            </h6>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Title Of Invention
              </button>
              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Fields of the Invention
              </button>
              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Summary of Invention
              </button>
              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Background of Invention
              </button>

              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Advantages Of The Invention
              </button>
              <button className="btn-stl-3 w-auto">
                <b>Regenerate - </b>Detailed Description
              </button>
            </div>
            <h6 className="mt-5" style={{ color: "#008CBF" }}>
              2- Options to add new sections
            </h6>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <button className="btn-stl-3 w-auto">Add-Embodiments</button>
              <button className="btn-stl-3 w-auto">Add-Few Claims</button>
              <button className="btn-stl-3 w-auto">Add-Key Features</button>
              <button className="btn-stl-3 w-auto">Add-Abstract</button>

              <button className="btn-stl-3 w-auto">Add-Custom Paragraph</button>
            </div>

            <h6 className="mt-5" style={{ color: "#008CBF" }}>
              3- Select your next action
            </h6>
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <button className="btn-stl-4 w-auto">VIEW PROVISIO DRAFT</button>

              <button className="btn-stl-4 w-auto">
                DOWNLOAD PROVISIO DRAFT
              </button>
              <button className="btn-stl-4 w-auto">
                GENERATE NON-PROVISIONAL DRAFT
              </button>
              <button className="btn-stl-4 w-auto">
                GENERATE FILING FORMS FOR PROVISIONAL DRAFT
              </button>
              <button className="btn-stl-4 w-auto" style={{ height: "60px" }}>
                SAVE SEARCH REPORT + PROVISIO DRAFT AND PROCEED TO DRAFTING
                NON-PROVISIONAL SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
