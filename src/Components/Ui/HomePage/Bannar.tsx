import { Container, Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

const Bannar = () => {
  return (
    <Container
      sx={{
        my: 16,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          position: "relative",
          flex: "1",
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: "-1",
          }}
        >
          <Image
            src="https://th.bing.com/th/id/OIP.hVwxvYvxyt4yMpalOZkOYAHaF7?w=216&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
            width={400}
            height={400}
          />
        </Box>
        <Stack direction="column" gap={2}>
          <Typography variant="h4" fontWeight={600} component="h1">
            Health Care Checkup
          </Typography>
          <Typography variant="h4" fontWeight={600} component="h1">
            Stray Save And Healthy
          </Typography>
          <Typography
            variant="h4"
            color="primary.main"
            fontWeight={600}
            component="h1"
          >
            For Cool Life We Are With You
          </Typography>
          <Typography width="50%" variant="h6" fontWeight={300} component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit doloremque ipsam mollitia explicabo ipsum minus autem
            quis vero? Ducimus quod, sapiente itaque quos sint reiciendis.
          </Typography>
          <Box>
            <Button>Book Appoinment</Button>
            <Button sx={{ marginLeft: "8px" }} variant="outlined">
              Contact Us
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box>right</Box>
    </Container>
  );
};

export default Bannar;
