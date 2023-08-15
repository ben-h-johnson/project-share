// Credit to Emma Goto for methodolgy and hooks: https://www.emgoto.com/react-table-of-contents/
// adapted to MUI
import { useState, useEffect } from "react";

// Reformats headings list to set H3s as subheadings of last H2, prepares heading array
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

// Discovers all headings on page
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

// Headings links component
const Headings = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}>{heading.title}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`}>{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const TableOfContents = () => {
  const { nestedHeadings } = useHeadingsData();

  return (
      <nav>
          <Headings headings={nestedHeadings} />
      </nav>
  );
};

export default TableOfContents;