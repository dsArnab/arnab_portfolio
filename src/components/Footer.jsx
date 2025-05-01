import { Grid, Typography, IconButton, Link, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography className="header" align="center" gutterBottom>
            Get in touch at:
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="contact-row">
            <IconButton
              component={Link}
              href="mailto:dasarnab205@gmail.com"
              aria-label="Email"
              size="small"
            >
              <EmailIcon />
            </IconButton>
            <Typography ml={1}>dasarnab205@gmail.com</Typography>
          </Box>

          <Box className="contact-row">
            <IconButton
              component={Link}
              href="tel:+919614195096"
              aria-label="Phone"
              size="small"
            >
              <PhoneIcon />
            </IconButton>
            <Typography ml={1}>+91 9614 195 096</Typography>
          </Box>

          <Box className="contact-row">
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/arnab-das-b473081bb"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              size="small"
            >
              <LinkedInIcon />
            </IconButton>
            <Typography ml={1}>
              linkedin.com/in/arnab-das-b473081bb
            </Typography>
          </Box>

          <Box className="contact-row">
            <IconButton
              component={Link}
              href="https://github.com/dsArnab"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              size="small"
            >
              <GitHubIcon />
            </IconButton>
            <Typography ml={1}>github.com/dsArnab</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;