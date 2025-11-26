import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactInfo from "./ContactInfo";
import {
  Mail,
  Business,
  LocationPin,
  LinkedIn,
  GitHub,
  Search,
  School,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import profilePic from "../assets/Cas_Pouw_square.jpg";
import headerImg from "../assets/cover.jpg";

export default function BusinessCard() {
  const name = "dr. Cas Pouw";
  const title = "Crowdflow specialist";
  const description =
    "If you’re facing a challenge related to crowd flows, I’d love to explore how we can solve it together.";
  const myEmail = "cas.pouw@proton.me";
  const myBusiness = "In development";
  const myLocation = "Eindhoven";
  return (
    <div style={{ position: "relative", width: 365, margin: "0 auto" }}>
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
          left: 200,
          top: 60,
          zIndex: 2,
          background: "#fff",
        }}
      />
      <Card
        sx={{
          maxWidth: 365,
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
            sx={{ textAlign: "left", mt: 0, mb: 3 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "left", marginBottom: 3 }}
          >
            {description}
          </Typography>
          <ContactInfo title={myEmail} subheader="Email" icon={<Mail />} />
          <ContactInfo
            title={myBusiness}
            subheader="Business"
            icon={<Business />}
          />
          <ContactInfo
            title={myLocation}
            subheader="Location"
            icon={<LocationPin />}
          />
          {/* Social Buttons Row */}
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
                <School />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
