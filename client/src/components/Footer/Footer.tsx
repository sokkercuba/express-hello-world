import { Box } from "@mui/material/";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Sokker Cuba
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        mt: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container component="main" sx={{ my: 8 }} maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Footer
          </Typography>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            La vieja escuela del Sokker Cubano! Dudas, Consultas, pregunte sin
            pena! Si desea añadir a alguien pase el link del grupo.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
