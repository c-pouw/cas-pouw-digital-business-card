import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContactInfo from "./ContactInfo";
import { Mail, Business } from "@mui/icons-material";

export default function BusinessCard() {
  const name = "Cas Pouw";
  const title = "Crowdflow specialist";
  const description =
    "I’m specialized in understanding and optimizing crowd environments. If you’re facing a challenge related to pedestrian flows, I’d love to explore how we can solve it together.";
  const myEmail = "cas.pouw@proton.me";
  const myBusiness = "In development";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ textAlign: "left" }}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", textAlign: "left", marginBottom: 2 }}
        >
          {description}
        </Typography>
        <ContactInfo title={myEmail} subheader="Email" icon={<Mail />} />
        <ContactInfo
          title={myBusiness}
          subheader="Business"
          icon={<Business />}
        />
      </CardContent>
    </Card>
  );
}
