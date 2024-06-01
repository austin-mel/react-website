import { useState } from "react";

function Project1(){
    const [file, setFile] = useState("1");
    const switchFile1 = () => {
        setFile("");
        setTimeout(() => {
            setFile("1");
        }, 500);
    };
    const switchFile2 = () => {
        setFile("");
        setTimeout(() => {
            setFile("2");
        }, 500);
    };
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Pharmaceutical Trial Portal</h2>
                    <h4>Objective:</h4>
                            <p>Build a proof of concept distributed information system with suitable user interfaces that could be used by the FDA, pharmaceutical companies, and participating health care providers to exchange study data as it is produced (i.e., in near real time) in a secure, trusted (i.e., auditable), and controlled (i.e., minimally permissive) manner. 
                            Build the information system on top of the Vendia Share platform, which supports data exchange through an immutable, cryptographically verifiable, distributed ledger and provides the primitives to control data flow (e.g., redaction).</p>
                        <h4>The Use Case:</h4>
                            <p>Pharma company “Bavaria'' is working with “Jane Hopkins Hospital”, on a phase 3 medical trial for a new antiviral medication involving ~100 patients. The trial is monitored by the FDA and focused on effectiveness.
                            Researchers at Jane Hopkins have reviewed a set of patients that they intend to include in the study. They want to use a smart contract that the other parties can read to verify the eligibility criteria. 
                            Once a patient is “accepted” per smart contract, Jane Hopkins will share their record with Bavaria and the FDA. However, they will not share any personal information on file.
                            Personal details would only be shared with the FDA, if an investigation was necessary, for example due to unexpected side effects.</p>
                            <p>With the anonymized list of eligible patients, but absent any further information, the FDA selects participants for the treatment and control group without sharing this information.
                            Every dose is marked with a tracking code and a boolean “generic” flag by Bavaria. The FDA re-labels these doses with their own code and assigns them to individual patients before sending them to Jane Hopkins. Only the FDA has visibility into the tracking code mapping. 
                            This way, neither the treating physicians at Jane Hopkins, nor the researchers at Bavaria can determine which patient is in the control and treatment group until the study is complete.
                            Throughout the study, Jane Hopkins tracks every treatment, including the tracking number and records the viral load of study participants weekly.</p>
                            <p>At the end of the study, the FDA shares the treatment/control group assignment with both Bavaria and Jane Hopkins to allow for study evaluation. 
                            At this point, Jane Hopkins also shares complete, anonymized patient records, so that Bavaria and the FDA can investigate whether certain medications or pre-existing medical conditions affected effectiveness in unexpected ways.</p>
                </div>
                <div class="column hlf">
                    <h3 class="demobtn"><a href="#test" target="_blank" rel="noreferrer">View Demo</a></h3>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
                <p>(Click to view documents/code)</p>
                <button onClick={switchFile1}>Design Requirements Doc</button> | <button onClick={switchFile2}>Use Case Models</button> | <button role="link" onClick={() => openInNewTab("https://github.com/austin-mel/pharmatrial/tree/main")}>GitHub Repository</button>
                {file === "1" ? (
                    <div>
                    <h4>Design Requirements & Project Information</h4>
                    <iframe alt="Req & Design Doc" title="Req & Design Doc" src="https://docs.google.com/document/d/e/2PACX-1vQRID_esZ3L1qCeVmSitp1NVSGdn2w1EzbF-uHO_BFrJBnAvaKVgTvHkfqOTUK1_Q2GgauYn3Db2P_G/pub?embedded=true" width="850px" height="1015px"></iframe>
                    </div>
                ) : file === "2" ? (
                    <div>
                    <h4>Use Case Models</h4>
                    <p>Lorem...</p>
                    <p>EMBED</p>
                    </div>
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Project1;