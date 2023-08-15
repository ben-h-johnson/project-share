import TableOfContents from "./TableOfContents"
import Grid from '@mui/material/Unstable_Grid2';

const About = () => {
  return (
    <div style={{width:"100%"}}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={8}>
          <h2 id="hello">Hello</h2>
          <h2 id="nameBen">My Name is Ben</h2>
          <h3 id="testSub">This sub heading is a test</h3>
        </Grid>
        <Grid xs={0} sm={4}>
          <TableOfContents />
        </Grid>
      </Grid>
    </div>
  )
}

export default About