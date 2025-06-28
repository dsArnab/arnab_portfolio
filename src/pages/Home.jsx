import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import profileImg from "../assets/profile.JPG";
import "./Home.css";
import { Button, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { webprojectList, eduprojectList } from "../components/Projectlist";

const Home = () => {
  const [selectedProjects, setSelectedProjects] = useState(webprojectList);

  const handleWebClick = () => {
    setSelectedProjects(webprojectList);
  };

  const handleEduClick = () => {
    setSelectedProjects(eduprojectList);
  };

  return (
    <div>
      <div className="avatar">
        <Avatar
          alt="Arnab Das"
          src={profileImg}
          sx={{ width: 180, height: 180 }}
        />
        <h2>
          Hi, I’m Arnab Das, a Full-Stack Developer with hands-on experience in
          building scalable and responsive web applications using the MERN stack.
        </h2>
      </div>

      <div className="works">
        <div className="selectedworks">
          <h2>Selected Works</h2>
        </div>
        <Grid container spacing={4} justifyContent="center" className="project-grid">
          <Grid item>
            <Button variant="text" sx={{ color: "#FFFFFF" }} onClick={handleWebClick}>
              Web Development
            </Button>
          </Grid>
          <Grid item>
            <Button variant="text" sx={{ color: "#FFFFFF" }} onClick={handleEduClick}>
              EdTech
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Render Project Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
        {selectedProjects.map((project, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 300, height: 300 }}> {/* Fixed height for all cards */}
              <CardMedia
                sx={{ height: 140 }}
                image={project.image}
                title={project.title}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;