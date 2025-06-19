import type { ReactElement } from "react";

export default function ExperienceForm(): ReactElement {
  return (
    <>
      <div>
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" />
      </div>
      <div>
        <label htmlFor="position-name">Position</label>
        <input type="text" id="position-name" />
      </div>
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />
      </div>
      <div>
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
    </>
  );
}
