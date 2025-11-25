import CardHeader from "@mui/material/CardHeader";

interface ContactInfoProps {
  title: string;
  subheader: string;
  icon?: React.ReactNode;
}

export default function ContactInfo({
  title,
  subheader,
  icon,
}: ContactInfoProps) {
  return (
    <CardHeader
      avatar={icon}
      title={title}
      subheader={subheader}
      sx={{ textAlign: "left", my: 0.5, py: 0.5 }}
      slotProps={{
        title: { style: { fontSize: "1.1rem", fontWeight: 500 } },
      }}
    />
  );
}
