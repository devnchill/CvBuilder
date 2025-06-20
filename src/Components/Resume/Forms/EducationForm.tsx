import type { ReactElement } from "react";
import type { IFormData } from "../../../Types/formData.types";

interface EducationFormProps {
  formData: IFormData;
  handleInput: (
    key: keyof IFormData,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

export default function EducationForm({
  formData,
  handleInput,
}: EducationFormProps): ReactElement {
  return (
    <>
      <div className="input-div">
        <label htmlFor="school">School/University</label>
        <input
          id="school"
          type="text"
          placeholder="Enter School Name"
          value={formData.schoolName}
          onChange={(e) => handleInput("schoolName", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          placeholder="Enter degree"
          value={formData.degree}
          onChange={(e) => handleInput("degree", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="date"
          value={formData.eduStartDate}
          onChange={(e) => handleInput("eduStartDate", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="end-date">End Date</label>
        <input
          id="end-date"
          type="date"
          value={formData.eduEndDate}
          onChange={(e) => handleInput("eduEndDate", e)}
        />
      </div>
    </>
  );
}
