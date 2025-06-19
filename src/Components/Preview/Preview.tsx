import type { ReactElement } from "react";

export default function Preview(): ReactElement {
  return (
    <aside className="preview">
      <div className="preview-personal">
        <h1>Your Name</h1>
        <div>
          <p>your.email@example.com</p>
          <p>+91 1234567890</p>
          <p>Your Adress</p>
        </div>
      </div>
      <div className="preview-education">
        <h2>Education</h2>
        <div>
          <p>school</p>
          <p>degree</p>
          <p>start-end-date</p>
          <p>location</p>
        </div>
      </div>
      <div className="preview-experience">
        <h2>Experience</h2>
        <div>
          <p>position</p>
          <p>company</p>
          <p>start-end-date</p>
          <p>description</p>
        </div>
      </div>
    </aside>
  );
}
