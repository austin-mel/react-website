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
    const switchFile3 = () => {
        setFile("");
        setTimeout(() => {
            setFile("3");
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                        <h4>Hypothesis:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                        <h4>Additional Details:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
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