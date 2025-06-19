import type { ReactElement } from "react";

export default function EducationForm(): ReactElement {
  return (
    <>
      <div>
        <label htmlFor="school">Schoo/University</label>
        <input id="school" type="text" placeholder="Enter School Name" />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input id="degree" placeholder="Enter degree" />
      </div>
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="date" />
      </div>
      <div>
        <label htmlFor="end-date">End Date</label>
        <input id="end-date" type="date" />
      </div>
    </>
  );
}
