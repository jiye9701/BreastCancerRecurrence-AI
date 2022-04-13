import React from "react";

// Page to display information on dataset
function Info() {
    return (
        <div className="container width-800 mt-5 p-3 shadow rounded bg-white">
            <h1 className="text-center">Breast Cancer Data</h1>

            <div className="pt-2">
                <h3>Citation</h3>
                <p>
                This breast cancer domain was obtained from the University Medical Centre,
                Institute of Oncology, Ljubljana, Yugoslavia.  Thanks go to M. Zwitter and 
                M. Soklic for providing the data.
                </p>
                <p mt-2>Retrieved from: <a href="https://datahub.io/machine-learning/breast-cancer#python" target="_blank" rel="noreferrer">https://datahub.io/machine-learning/breast-cancer#python</a></p>
            </div>

            <div className="pt-2">
                <h3>Sources</h3>
                <ul>
                    <li>
                        Matjaz Zwitter &#38; Milan Soklic (physicians)
                        <br/>Institute of Oncology 
                        <br/>University Medical Center
                        <br/>Ljubljana, Yugoslavia
                    </li>
                    <li>Donors: Ming Tan and Jeff Schlimmer (Jeffrey.Schlimmer@a.gp.cs.cmu.edu)</li>
                    <li>Date: 11 July 1988</li>
                </ul>
            </div>

            <div className="pt-2">
                <h3>Data Information</h3>
                <p><b>Number of instances:</b> 286</p>
                <p><b>Number of Attributes:</b> 9 + the class attribute</p>

                <p><b>Attribute Information:</b></p>

                <ol>
                    <li><b>Class:</b> no-recurrence-events, recurrence-events</li>
                    <li><b>age:</b> 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-99.</li>
                    <li><b>menopause:</b> lt40, ge40, premeno.</li>
                    <li><b>tumor-size:</b> 0-4, 5-9, 10-14, 15-19, 20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59.</li>
                    <li><b>inv-nodes:</b> 0-2, 3-5, 6-8, 9-11, 12-14, 15-17, 18-20, 21-23, 24-26,
                                27-29, 30-32, 33-35, 36-39.</li>
                    <li><b>node-caps:</b> yes, no.</li>
                    <li><b>deg-malig:</b> 1, 2, 3.</li>
                    <li><b>breast:</b> left, right.</li>
                    <li><b>breast-quad:</b> left-up, left-low, right-up, right-low, central.</li>
                    <li><b>irradiat:</b> yes, no.</li>
                </ol>
            </div>
        </div>
    );
}

export default Info;