import React, {useEffect, useState} from "react";
import Posting from "./Posting"


const Postings = ({data, setKeywords, keywords}) => {

    const [filteredData, setfilteredData] = useState([]);

    const modifiedData = () => {
        if (keywords.length > 0) {
            const newData = filteredData.filter(d => {
                return keywords.every(key => {
                        return (
                            d.title === key ||
                            d.location === key ||
                            d.category === key ||
                            d.jobid === key
                        );
                    });
            });
            setfilteredData(newData);
        } else {
            setfilteredData(data);
        }
    };

    useEffect(() => {
        modifiedData()
    },[keywords])

    return (
        <div className="postings">
            {filteredData.map((d) => {
                return <Posting key={d.ID} data={d} setKeywords={setKeywords}/>;
            })}
        </div>
    )
}

export default Postings