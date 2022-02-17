import data from "./job_data.json";
import Postings from "./components/Postings";
import {useState} from "react";
import Header from "./components/Header";
import company_logo from "./images/comp_logo.png"

function App() {

    const  [filterKeywords, setFilterKeywords] = useState([]);

    const addFilterKeywords = (data) => {
        if (!filterKeywords.includes(data)) {
            setFilterKeywords([...filterKeywords,data])
        }
    };

    const deleteKeyword = (data) => {
        const newKeywords = filterKeywords.filter((key) => key != data);
        setFilterKeywords(newKeywords);
    }

    const clearAll = () => {
        setFilterKeywords([]);
    };

  return (
    <div>
        <div className="row">
            <div className="col-4">
                <img className="top_left" src={company_logo} alt="ChenMed"/>
            </div>
            <div className="col-3 top_middle">
                A Top Place To Work At ®
            </div>
            <div className="col">
                <div className="row top_right">
                <a href="https://careers.chenmed.com/us/en" className="col top_link"> Home Page</a>
                <a href="https://careers.chenmed.com/us/en/life-at-chenmed" className="col top_link"> Life at ChenMed </a>
                <a href="https://careers.chenmed.com/us/en/our-story" className="col top_link">   Read Our Story </a>
                <a href="https://careers.chenmed.com/us/en/jointalentcommunity?applyType=JTC" className="col top_link"> Stay Informed </a>
                <a href="https://careers.chenmed.com/us/en/events" className="col top_link"> Events </a>
                </div>

            </div>
        </div>


      <div className="header">
          <div className="slogan">
            Lead the Healthcare
          </div>
          <div className="slogan_2">
             Revolution
          </div>
          <div className="slogan_3">
              Join Us Today
          </div>
      </div>
        {
            filterKeywords.length > 0 && <Header
                keywords={filterKeywords}
                removeKeywords = {deleteKeyword}
                clearAll={clearAll}
            />
        }
        <Postings keywords={filterKeywords}
                  data = {data}
                  setKeywords={addFilterKeywords}
        />
    </div>
  );
}

export default App;
