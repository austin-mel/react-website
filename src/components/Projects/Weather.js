import ReactEmbedGist from "react-embed-gist";
import { useState } from "react";
import Graph from "../Projects/Weather/year-temp.png"

function Project2(){
    const [file, setFile] = useState("bash");
    const switchBashFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("bash");
        }, 500);
    }
    const switchPythonFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("python");
        }, 500);
    }
    const switchCSVFile = () => {
        setFile("");
        setTimeout(() => {
            setFile("csv");
        }, 500);
    }

    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Weather Data Analysis</h2>
                        <h4>Objective:</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                        <h4>Hypothesis:</h4>
                            <p>With global temperatures rising due to global warming, the maximum temperature recorded at different stations should trend upwards over time.</p>
                        <h4>Additional Details:</h4>
                            <p>To test my hypothesis, I have selected the 5 stations which have data recorded for the longest period of time into the past. To simplify the dataset, I have calculated the average temperature at a given station for each year. This is achieved by obtaining all 365 days of data for each given year and then calculating the median. This calculated median value is then stored in the CSV file along with the corresponding station ID and year.</p>
                        <h4>Conclusion:</h4>
                            <p>As seen in my graph, the data generally trends upwards, supporting my initial hypothesis. However, there is some erronious data graphed. I suspect the extreme dips found at certain years along the graph correspond to missing or faulty data. This can be confirmed by checking the dataset for the value under the "quality" flag for those years.</p>
                            <a href="https://github.com/awslabs/open-data-docs/tree/main/docs/noaa/noaa-ghcn" target="_blank" rel="noreferrer">Dataset Documentation</a>
                </div>
                <div class="column hlf">
                    <img alt="Weather Data Graph" src={Graph} width="800px" height="550px"></img>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
                <p>(Click to view source code)</p>
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