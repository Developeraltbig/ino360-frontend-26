import ClaimsDrafting from "./ClaimsDrafting/ClaimsDrafting";
import "./ContentMain.css";
import UploadPDF from "./InvetionDisclosure/UploadPDF";
import PatentDrafting from "./PatentDrafting/PatentDrafting";
import ProvisionalDraftingnew from "./ProvisionalDrafting/ProvisionalDrafting-new";
import SequenceListing from "./SequenceListing/SequenceListing";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <UploadPDF />
      <ProvisionalDraftingnew />
      <ClaimsDrafting />
      <SequenceListing />
      <PatentDrafting />
    </div>
  );
};

export default ContentMain;
