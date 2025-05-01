import { Button, Grid } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Grid container size={12} spacing={4} className="header">
      <Grid item size={8}>
        <div className="name">
          <h2>Arnab Das</h2>
          <span>Full Stack Developer | Creative Expert | Team Lead</span>
        </div>
      </Grid>

      <Grid container spacing={4}>
        <Button variant="text" sx={{ color: "#FFFFFF" }} href="/">
          Home
        </Button>

        <Button variant="text" sx={{ color: "#FFFFFF" }} href="/about">
          About
        </Button>

        <Button variant="text" sx={{ color: "#FFFFFF" }} href="/projects">
          Projects
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
