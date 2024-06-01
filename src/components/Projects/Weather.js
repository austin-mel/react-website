import ReactEmbedGist from "react-embed-gist";
import { useState } from "react";
import Graph from "../Projects/Weather/year-temp.png";
import { Modal } from "react-bootstrap";

function Project2(){
    const [file, setFile] = useState("bash");
    const [show, showModal] = useState(false);
    const switchBashFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("bash");
        }, 500);
    };
    const switchPythonFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("python");
        }, 500);
    };
    const switchCSVFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("csv");
        }, 500);
    };

    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Weather Data Analysis</h2>
                        <h4>Objective:</h4>
                            <p>There are 106,200 stations from around the world containing five weather measurements: precipitation total (PRCP), snowfall (SNOW), snow base depth (SNWD), max temperature (TMAX), min temperature (TMIN) for each day of the year.
                            This dataset contains data from 1750 to 2023. This totals over 106 GB of data when uncompressed. <br/>
                            Manipulate the dataset to retrieve the median of TMAX for a particular group of weather stations for all 365 days for each available year. 
                            Make a plot showing the average annual temperatures for 5 weather stations. Use parallel programming and a single pass through the data to make the data processing as fast as it can possibly be.</p>
                        <h4>Hypothesis:</h4>
                            <p>With global temperatures rising due to global warming, the maximum temperature recorded at different stations should trend upwards over time.</p>
                        <h4>Approach:</h4>
                            <p>To test my hypothesis, I have selected the 5 stations which have data recorded for the longest amount of time into the past. 
                            To simplify the dataset, I have calculated the average temperature at a given station for each year. This is achieved by obtaining all 365 days of data for each given year and then calculating the median. 
                            This calculated median value is then stored in the CSV file along with the corresponding station ID and year.</p>
                        <h4>Conclusion:</h4>
                            <p>As seen in my graph, the data trends upwards, supporting my initial hypothesis. However, there is some erronious data graphed. 
                            I suspect the extreme dips found at certain years along the graph correspond to missing or faulty data. This can be confirmed by checking the dataset for the value under the "quality" flag for those years.</p>
                            <a href="https://github.com/awslabs/open-data-docs/tree/main/docs/noaa/noaa-ghcn" target="_blank" rel="noreferrer">Dataset Documentation</a>
                </div>
                <div class="column hlf">
                    <div class="column hlf">
                        <p><b><u>Station Key:</u></b> <br/>EZE00100082 - Prague, Czechia <br/>UK000047811 - Armagh, Northern Ireland</p>
                    </div>
                    <div class="column hlf">
                        <p>ITE00100554 - Milan, Italy <br/>GM000004204 - Jena, Germany <br/>BE000006447 - Uccle, Belgium</p>
                    </div>
                        <img alt="Weather Data Graph" src={Graph} width="700px" height="450px"></img>
                        <p><small>Click image to enlarge graph.</small></p>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
                <p>(Click to view code)</p>
                <button onClick={switchBashFile}>tempovertime.sh</button> | <button onClick={switchPythonFile}>calcmedian.py</button> | <button onClick={switchCSVFile}>station-year-temp.csv</button>
                {file === "bash" ? (
                    <div>
                    <h4>Bash Script</h4>
                    <p>Searches data set for given station, retrieves the recorded maximum temperature value for each day of each year.</p>
                    <ReactEmbedGist gist="austin-mel/eed4eed177f9f5112ce4dea66d212566" file="tempovertime.sh"/>
                    </div>
                ) : file === "python" ? (
                    <div>
                    <h4>Python Script</h4>
                    <p>Calculates the median temperature for given year of given station.</p>
                    <ReactEmbedGist gist="austin-mel/eed4eed177f9f5112ce4dea66d212566" file="calcmedian.py"/>
                    </div>
                ) : file === "csv" ? (
                    <div>
                    <h4>Output CSV</h4>
                    <p>CSV file in [station],[year],[median] format for easy graphing with Pandas Library.</p>
                    <ReactEmbedGist gist="austin-mel/eed4eed177f9f5112ce4dea66d212566" file="station-year-temp.csv"/>
                    </div>
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Project2;