import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "70%",
        margin: "50px auto",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40vw",
          marginRight: "auto",

          "@media (max-width: 800px)": {
            m: "10px 0",
            width: "auto",
            textAlign: "center",
            alignItems: "center",
          },
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "2em", mb: "20px" }}>
          Registre-se para comprar suas verduras e vegetais direto da fazenda
        </Typography>
        <Button variant="outlined">Registrar</Button>
      </Box>

      <Box
        sx={{
          maxWidth: "400px",
          "@media (max-width: 800px)": {
            m: "20px 0",
          },
        }}
      >
        <img
          src="https://gaagrosolucoes.com.br/wp-content/uploads/2020/12/Imagem-blog-GA-ferias.jpg"
          alt=""
          style={{
            borderRadius: "50px",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
