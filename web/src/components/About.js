// TODO:
// - move ToC to drawer or other sticky nav component to scroll with text

import TableOfContents from "./TableOfContents";
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import hikeImage from '../images/benbarelyhike.jpeg';
// import CardMedia from '@mui/material/CardMedia';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // padding: 10,
          margin: 5,
          maxWidth: 900,
        },
      },
    },
  },
});

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid xs={12} sm={9}>
          <Card>
            <CardContent>
              <Typography id="welcome" variant="h4">Welcome</Typography>
              <Typography paragraph={true} variant="body1">If you're here, it's likely I applied to work with you. Thanks taking the time to consider my application. This website is intended to demonstrate a baseline of technical ability as well as to provide some additional information about me. Currently I am taking courses on machine learning and will share any projects here. Please check back soon.</Typography>
            </CardContent>
          </Card><Card>
            <CardContent>
              <Typography variant="h4" id="aboutThisSite">About this website</Typography>
              <Typography variant="h5" id="frontEnd">Front End</Typography>
              <Typography paragraph={true} variant="body1">This website is built using React. While React is unnecessary for something this simple, it provides an extensible framework for adding application components down the road. Equally important, it provides client side routing. <Link 
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >Material UI</Link> is used for styling and components.  You can find the <Link 
                href="https://github.com/ben-h-johnson/project-share"
                target="_blank"
                rel="noopener noreferrer"
              >source code here.</Link></Typography>
              <Typography variant="h5" id="hosting">Hosting</Typography>
              <Typography paragraph={true} variant="body1">This site is hosted using Amazon Web Services (AWS) as a static website on S3. AWS Route53 was used as the DNR. AWS ACM provides the SSL cert. An AWS Cloudfront distribution is necessary to support the certificate.</Typography>
              <Typography variant="h5" id="cost">Cost</Typography>
              <Typography paragraph={true} variant="body1">$5/yr for the domain. Less than $1/mo for the R53 Hosted Zone and S3+Cloudfront traffic.</Typography>
            </CardContent>
          </Card><Card>
            <CardContent>
              <Typography variant="h4" id="aboutMe">About me</Typography>
              <Typography variant="h5" id="professionally">Professional Experience</Typography>
              <Typography paragraph={true} variant="body1">I have over 10 years of experience in customer facing technical roles within the B2B Software as a Service industry. Most of my direct experience is in solutions or in building SaaS integrations, both data (e.g. ETL) and transactional (via non-restful API services). Prior to that I served 5 years in the US Navy, working as a project engineer on control systems for the Navy Nuclear Propulsion Program. I studied Electrical Engineering at Georgia Tech.</Typography>
              <Typography variant="h5" id="certs">Active Certifications</Typography>
              <Typography paragraph={true} variant="body1">Amazon Web Services (AWS) Solutions Architect Associate - certified August 2023</Typography>
              <Typography variant="h5" id="courses">Coursework</Typography>
              <Typography paragraph={true} variant="body1">
                <Link href="https://www.udemy.com/course/deeplearning_x"
                  target="_blank"
                  rel="noopener noreferrer"
                >A deep understanding of deep learning</Link> - in progress
              </Typography>
              <Typography paragraph={true} variant="body1">
                <Link href="https://www.coursera.org/learn/generative-ai-with-llms"
                  target="_blank"
                  rel="noopener noreferrer"
                >Generative AI with Large Language Models</Link> - next course planned
              </Typography>
              <Typography paragraph={true} variant="body1">Please Note: I will likely adapt this plan to future employment</Typography>
              <Typography variant="h5" id="personally">Personal</Typography>
              <Typography paragraph={true} variant="body1">I live in Boulder, CO. I enjoy reading about and discussing a wide variety of subjects. Currently, I am spending most of this energy on professional development. I also enjoy hiking, yoga, cooking, and my dog.</Typography>
              <CardMedia
                component="img"
                image={hikeImage}
                alt="hiking with the dog"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={0} sm={3}>
          <TableOfContents />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default About