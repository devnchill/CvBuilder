import type { ReactElement } from "react";

export default function ExperienceForm(): ReactElement {
  return (
    <>
      <div className="input-div">
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" />
      </div>
      <div className="input-div">
        <label htmlFor="position-name">Position</label>
        <input type="text" id="position-name" />
      </div>
      <div className="input-div">
        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />
      </div>
      <div className="input-div">
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />
      </div>
      <div className="input-div">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div className="input-div">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
    </>
  );
}
