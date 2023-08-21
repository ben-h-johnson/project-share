// Credit to Emma Goto for methodolgy and hooks: https://www.emgoto.com/react-table-of-contents/
// adapted to MUI
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box";

// Reformats headings list to set H3s as subheadings of last H2, prepares heading array
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H4") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H5" && nestedHeadings.length > 0) {
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
      document.querySelectorAll("h4, h5")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

// EMGOTO Headings links component
// const Headings = ({ headings }) => (
//   <ul>
//     {headings.map((heading) => (
//       <li key={heading.id}>
//         <a href={`#${heading.id}`}>{heading.title}</a>
//         {heading.items.length > 0 && (
//           <ul>
//             {heading.items.map((child) => (
//               <li key={child.id}>
//                 <a href={`#${child.id}`}>{child.title}</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// );

// Headings w/ MUI Components
// hacking the 'a' variant onto listitembutton is suitable for page anchors
// this method might not work for routing, needs testing
const MuiHeadings = ({ headings }) => (
  <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
  >
    {headings.map((heading) => (
      <Box>
        <ListItemButton key={heading.id} variant='a' href={`#${heading.id}`}>
          <ListItemText primary={heading.title} />
        </ListItemButton>
        {heading.items.length > 0 && (
          <List>
            {heading.items.map((child) => (
              <ListItemButton sx={{ pl:4 }} key={child.id} variant='a' href={`#${child.id}`}>
                <ListItemText primary={" "+child.title} />
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    ))}
  </List>
);

const TableOfContents = () => {
  const { nestedHeadings } = useHeadingsData();

  return (
      <Box>
          <MuiHeadings headings={nestedHeadings} />
      </Box>
  );
};

export default TableOfContents;