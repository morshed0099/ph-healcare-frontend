import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link}   href="/"  fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography  underline="none" component={Link} href="#">
            Consultation
          </Typography>
          <Typography  underline="none" component={Link} href="#">
            Health Plan
          </Typography>
          <Typography  underline="none" component={Link} href="#">
            Medicine
          </Typography>
          <Typography  underline="none" component={Link} href="#">
            Digonistic
          </Typography>
          <Typography  underline="none" component={Link} href="#">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          {" "}
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
