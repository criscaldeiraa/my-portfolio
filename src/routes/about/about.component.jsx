import React from "react";
import "./about.styles.css";

import {
  dataabout,
  // worktimeline,
  skills,
  services,
} from "../../content.js";

const About = () => {
  return (
      <div className="about-container">

        <div className="about-me">
          <div>
            <h1>About me</h1>
            <hr className="a-underline" />
          </div>
        </div>

        <div className="data-about">
          <div className="title-2">
            <h3>{dataabout.title}</h3>
          </div>
          <div className="data-about-info">
              <span>{dataabout.aboutme}</span>
          </div>
        </div>


        {/* <div className="data-about">
          <div className="title-2">
            <h3>Work Timline</h3>
          </div>
          <div className="data-about-info">
            <table className="table">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div> */}


        <div className="data-about">
          <div className="title-2">
            <h3>Skills</h3>
          </div>
          <div className="data-about-info skills-info">
            {skills.map((data, i) => {
              return (
                <div key={i} className="skill-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="data-about">
          <div className="title-2">
            <h3>services</h3>
          </div>
          <div className="data-about-info">
            {services.map((data, i) => {
              return (
                <div className="service_" key={i}>
                  <h4 className="service-title">{data.title}</h4>
                  <p className="service_description">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
  );
};

export default About;