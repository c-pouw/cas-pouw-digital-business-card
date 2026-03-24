import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CompanyContactInfo from "./CompanyContactInfo";
import {
  LinkedIn,
  GitHub,
  Search,
  School,
  Train,
  Science,
  Book,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import profilePic from "../assets/Cas_Pouw_square.jpg";
import headerImg from "../assets/cover.jpg";

export default function BusinessCard() {
  const name = "Dr. Cas Pouw";
  const title = "Crowdflow specialist";
  const prorailEmail = "cas.pouw@prorail.nl";
  const tueEmail = "c.a.s.pouw@tue.nl";
  return (
    <div style={{ position: "relative", width: 400, margin: "0 auto" }}>
      <img
        src={profilePic}
        alt="Profile"
        style={{
          width: 128,
          height: 128,
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          position: "absolute",
          left: 230,
          top: 60,
          zIndex: 2,
          background: "#fff",
        }}
      />
      <Card
        sx={{
          maxWidth: 400,
          backgroundColor: "#f0f0f0",
          borderRadius: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          p: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 160,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={headerImg}
            alt="Header"
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <CardContent sx={{ paddingTop: 5 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ textAlign: "left", mb: 0 }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: "left", mt: 0, mb: 2, fontWeight: 'normal' }}
          >
            {title}
          </Typography>
          <CompanyContactInfo companyName="ProRail Stations" functionName="Beleidsadviseur transferveiligheid" email={prorailEmail} icon={<Train />}/>
          <CompanyContactInfo companyName="Eindhoven University of Technology" functionName="Postdoctoraal onderzoeker" email={tueEmail} icon={<School />} />
          <Box mt={3} display="flex" justifyContent="center" gap={2}>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/caspouw/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/c-pouw"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="ResearchGate">
              <IconButton
                component="a"
                href="https://www.researchgate.net/profile/Caspar-Pouw-2"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="ResearchGate"
              >
                <Search />
              </IconButton>
            </Tooltip>
            <Tooltip title="Research Profile">
              <IconButton
                component="a"
                href="https://www.tue.nl/en/research/researchers/cas-pouw"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="Research Profile"
              >
                <Science />
              </IconButton>
            </Tooltip>
            <Tooltip title="PhD thesis">
              <IconButton
                component="a"
                href="https://research.tue.nl/en/publications/human-crowd-flows-physics-insights-from-real-life-measurements/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                aria-label="PhD thesis"
              >
                <Book />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
