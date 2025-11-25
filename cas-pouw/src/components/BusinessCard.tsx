import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactInfo from "./ContactInfo";
import { Mail, Business, LocationPin } from "@mui/icons-material";
import profilePic from "../assets/Cas_Pouw_square.jpg";
import headerImg from "../assets/cover.jpg";

export default function BusinessCard() {
  const name = "dr. Cas Pouw";
  const title = "Crowdflow specialist";
  /* const description =
    "I’m specialized in understanding and optimizing crowds. If you’re facing a challenge related to pedestrian flows, I’d love to explore how we can solve it together."; */
  const myEmail = "cas.pouw@proton.me";
  const myBusiness = "In development";
  const myLocation = "'s-Hertogenbosch";
  return (
    <div style={{ position: "relative", width: 345, margin: "0 auto" }}>
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
          left: 16,
          top: 90,
          zIndex: 2,
          background: "#fff",
        }}
      />
      <Card
        sx={{
          maxWidth: 345,
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
        <CardContent sx={{ paddingTop: 10 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ textAlign: "left" }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: "left" }}
          >
            {title}
          </Typography>
          {/* <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "left", marginBottom: 2 }}
          >
            {description}
          </Typography> */}
          <Box mt={4} />
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
        </CardContent>
      </Card>
    </div>
  );
}
