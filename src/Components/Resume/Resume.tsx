import type { ReactElement } from "react";
import PersonalForm from "./Forms/PersonalForm";
import ExpandableProps from "../../ExpandableProps.tsx";
import EducationForm from "./Forms/EducationForm.tsx";

export default function Resume(): ReactElement {
  return (
    <>
      <PersonalForm />
      <ExpandableProps title="Education">
        <EducationForm />
      </ExpandableProps>
      <ExpandableProps title="Experience">
        <EducationForm />
      </ExpandableProps>
    </>
  );
}
