import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgcolor="rgba(17,26,34) ">
      <Container>
        <Stack py={4}>
          <Stack pb={4} direction="row" gap={4} justifyContent="center">
            <Typography color="#ffff" component={Link} href="#">
              Consultation
            </Typography>
            <Typography color="#ffff" component={Link} href="#">
              Health Plan
            </Typography>
            <Typography color="#ffff" component={Link} href="#">
              Medicine
            </Typography>
            <Typography color="#ffff" component={Link} href="#">
              Digonistic
            </Typography>
            <Typography color="#ffff" component={Link} href="#">
              NGOs
            </Typography>
          </Stack>
          <Stack gap={4} direction="row" justifyContent="center" pb={4}>
            <Link href="#">
              <FaFacebook size={30} color="white" />{" "}
            </Link>
            <Link href="#">
              <FaTwitter size={30} color="white" />{" "}
            </Link>
            <Link href="#">
              <FaLinkedin size={30} color="white" />{" "}
            </Link>
            <Link href="#">
              <FaInstagram size={30} color="white" />{" "}
            </Link>
          </Stack>
          <Box className="border-b-[1px] border-dashed" py={1}></Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignContent="center">
          <Typography component="p" color="white">
            &copy; 2024 PH Health Care All Rights Regervs
          </Typography>
          <Typography marginTop="-16px" variant="h4"  color="white" component={Link}   href="/"  fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
          <Typography component="p" color="white">
         privecy plicy | terms and condition
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
