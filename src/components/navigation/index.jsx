import { Button, Typography, Link, Divider } from "@mui/material";
import { Box } from "@mui/system";

function Navigation() {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",

        paddingLeft: "24px",

        backgroundColor: "#F3F3F3",

        "@media (max-width: 800px)": {
          flexDirection: "column",
        },
      }}
    >
      <Typography
        sx={{
          mr: "20px",
          "@media (max-width: 800px)": {
            m: "10px 0 0 0",
          },
        }}
      >
        HealthyFoods
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mr: "auto",
          "@media (max-width: 800px)": {
            m: "20px auto",
            justifyContent: "center",
          },
        }}
      >
        <Link>Home</Link>
        <Divider sx={{ borderWidth: 1, margin: "0 15px" }} />
        <Link>Contato</Link>
        <Divider sx={{ borderWidth: 1, margin: "0 15px" }} />

        <Link>Fornecedores</Link>
        <Divider sx={{ borderWidth: 1, margin: "0 15px" }} />
        <Link>Dúvidas</Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{}}>Registrar</Typography>
        <Button
          sx={{
            borderRadius: "0px",
            height: "100%",
            width: "100px",
            ml: "20px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Navigation;
