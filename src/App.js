import './App.css';
import {useEffect, useState} from 'react'

function App(){

  const [newConfirmed, setNewConfirmed] = useState(null);
  const [newDeath, setNewDeath] = useState(null);
  const [newRecovered, setNewRecovered] = useState(null);
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalDeath, setTotalDeath] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);

  function removeCube(){
    var x=document.getElementById("clearcube");
    x.remove();
  }

  useEffect(() => {
      fetch('https://api.covid19api.com/summary')
        .then((res) => (res.json()))
        .then((res) => (res.Global))
        .then((res) => {
          setNewConfirmed(res.NewConfirmed);
          setNewDeath(res.NewDeaths);
          setNewRecovered(res.NewRecovered);
          setTotalConfirmed(res.TotalConfirmed);
          setTotalDeath(res.TotalDeaths);
          setTotalRecovered(res.TotalRecovered);
        })
  },[]);

  return (
      <div className="App">
        <h1>Covid Status</h1><br></br><br></br>
         <p className="marquee">
           NewConfirmed : <span style={{color:"skyblue"}}>{newConfirmed}</span> |  NewDeath : <span style={{color:"red"}}>{newDeath}</span> | NewRecovered : <span style={{color:"darkgreen"}}>{newRecovered}</span> |
           TotalConfirmed : <span style={{color:"skyblue"}}>{totalConfirmed}</span> |  TotalDeath : <span style={{color:"red"}}>{totalDeath}</span> | TotalRecovered : <span style={{color:"darkgreen"}}>{totalRecovered}</span></p>
         
          <div className="status" id="clearcube">
              <div className="cross">
                <p onClick={()=>removeCube()}>[<b>X</b>]</p>
              </div>
              <div className="wrap">
                <div className="cube">
                  <div className="front">
                    <a target="_parent" href="https://www.thehindu.com/coronavirus/?utm_source=thehindu&amp;utm_medium=cube&amp;utm_campaign=corona">
                      <h3 className="c-19">Covid-19</h3>
                      <h2 className="c-num">142251</h2>
                      <span className="state">Deaths </span>
                      <h4 className="vmap"> State Tracker </h4>
                    </a>
                  </div>
                  <div className="back">
                    <a target="_parent" href="https://www.thehindu.com/topic/coronavirus/?utm_source=thehindu&amp;utm_medium=cube&amp;utm_campaign=corona">
                      <h3 className="c-white">Coronavirus</h3>
                      <h2 className="c-yell">SEE ALL REPORTS</h2>
                    </a>
                  </div>
                  <div className="left">
                    <a target="_parent" href="https://www.thehindu.com/news/national/coronavirus-india-live-updates-december-11-2020/article33304773.ece">
                      <h3 className="c-19">Covid-19</h3>
                      <h2 className="c-num">365039</h2>
                      <span className="state">Active Cases </span>
                      <h4 className="vmap">LATEST UPDATES</h4>
                    </a>
                  </div>
                  <div className="right">
                    <a target="_parent" href="https://www.thehindu.com/coronavirus/?utm_source=thehindu&amp;utm_medium=cube&amp;utm_campaign=corona">
                      <h3 className="c-19">Covid-19</h3>
                      <h2 className="c-num">9797629</h2>
                      <span className="state">Reported Cases </span>
                      <h4 className="vmap"> View Map </h4>
                    </a>
                  </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default App;
