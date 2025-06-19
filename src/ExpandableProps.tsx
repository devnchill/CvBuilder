import { useState, type ReactElement } from "react";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableProps({
  title,
  children,
}: ExpandableSectionProps): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);
  let content;
  if (isExpanded) {
    content = (
      <>
        {children}
        <div>
          <button>Submit</button>
          <button
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div>
          <button
            onClick={() => {
              setIsExpanded(true);
            }}
          >
            Add
          </button>
        </div>
      </>
    );
  }
  return (
    <section className="section-wrapper">
      <h3>{title.toUpperCase()} Details</h3>
      {content}
    </section>
  );
}
