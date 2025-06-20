import type { ReactElement } from "react";
import PersonalForm from "./Forms/PersonalForm";
import ExpandableProps from "../../ExpandableProps.tsx";
import EducationForm from "./Forms/EducationForm.tsx";
import type { IFormData } from "../../Types/formData.types";

interface ResumeProps {
  formData: IFormData;
  handleInput: (
    key: keyof IFormData,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function Resume({
  formData,
  handleInput,
}: ResumeProps): ReactElement {
  return (
    <main className="resume">
      <PersonalForm formData={formData} handleInput={handleInput} />
      <ExpandableProps title="Education">
        <EducationForm formData={formData} handleInput={handleInput} />
      </ExpandableProps>
      <ExpandableProps title="Experience">
        <EducationForm formData={formData} handleInput={handleInput} />
      </ExpandableProps>
    </main>
  );
}
