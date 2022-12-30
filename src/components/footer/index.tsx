import styled from "@emotion/styled";
import { Container } from "@mui/system";


const FooterContainer = styled(Container)({
  width: "100%",
  height: 50,
  borderTop: "1px solid",
})

const Footer = () => {
  return (
    <FooterContainer>
      Git Hub 
    </FooterContainer>
  );
};

export default Footer;