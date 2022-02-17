import React from "react";

const Posting = (props) => {

    const {
        ID,
        title ,
        location ,
        category,
        jobid
    } = props.data;


    let keywords = [location, category, jobid];

    return (
        <div className="posting-container">
            <div className="first">
                <div className="title">
                    {title}
                </div>
                <div className="details">
                    <span>{location}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{category}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{jobid}</span>
                </div>
            </div>

            <div className="second">
                {
                    keywords.map((key, id) =>
                        <span onClick = {() => props.setKeywords(key)}  key = {id}>
                            {key}
                        </span>
                    )
                }
            </div>
        </div>
    );
};

export default Posting