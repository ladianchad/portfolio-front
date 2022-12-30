import * as React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button"

interface IHeaderProps {
  onContactClick: () => void
}

const ContactButton = styled(Button)({
  position: "absolute",
  margin: 5,
  right: 0
})

const Header = (props: IHeaderProps) => {
  return (
    <React.Fragment>
      <ContactButton
        color="inherit"
        onClick={props.onContactClick}
      >Contact</ContactButton>
    </React.Fragment>
  );
};

export default Header;