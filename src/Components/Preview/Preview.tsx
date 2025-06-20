import type { ReactElement } from "react";
import type { IFormData } from "../../Types/formData.types";

interface PreviewProps {
  formData: IFormData;
}

export default function Preview({ formData }: PreviewProps): ReactElement {
  return (
    <aside className="preview">
      <div className="preview-personal">
        <h1>{formData.name}</h1>
        <div>
          <p>{formData.email}</p>
          <p>{formData.phoneNumber}</p>
          <p>{formData.address}</p>
        </div>
      </div>
      <div className="preview-education">
        <h2>Education</h2>
        <div>
          <p>{formData.schoolName}</p>
          <p>{formData.degree}</p>
          <p>
            {formData.eduStartDate} to {formData.eduEndDate}
          </p>
          <p>{formData.location}</p>
        </div>
      </div>
      <div className="preview-experience">
        <h2>Experience</h2>
        <div>
          <p>{formData.position}</p>
          <p>{formData.company}</p>
          <p>
            {formData.workStartDate} to {formData.workEndDate}
          </p>
          <p>{formData.description}</p>
        </div>
      </div>
    </aside>
  );
}
