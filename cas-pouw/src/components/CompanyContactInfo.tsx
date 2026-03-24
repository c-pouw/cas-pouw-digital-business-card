import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";

interface CompanyContactInfoProps {
  companyName: string;
  functionName: string;
  email: string;
  icon?: React.ReactNode;
}

export default function CompanyContactInfo({
  companyName,
  functionName,
  email,
  icon,
}: CompanyContactInfoProps) {
  return (
    <CardHeader
      avatar={icon}
      title={companyName}
      subheader={
        <Box sx={{ fontSize: "0.875rem", overflowWrap: "break-word", wordBreak: "break-word" }}>
          <div>{functionName}</div>
          <div>{email}</div>
        </Box>
      }
      sx={{ textAlign: "left", my: 0.5, py: 0.5, mb: 2 }}
      slotProps={{
        title: { style: { fontSize: "1.1rem", fontWeight: 500 } },
      }}
    />
  );
}