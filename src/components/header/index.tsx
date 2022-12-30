import * as React from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button'

const ContactButton = styled(Button)({
  color: 'black',
  position: 'absolute',
  margin: 5,
  right: 0
})

const Header = () => {
  return (
    <React.Fragment>
      <ContactButton>Contact</ContactButton>
    </React.Fragment>
  );
};

export default Header;