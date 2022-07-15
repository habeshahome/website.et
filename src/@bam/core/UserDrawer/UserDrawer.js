import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import UserRegForm from '../UserRegForm';

const UserDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
            color="primary" 
            variant="outlined"
            onClick={toggleDrawer('right', true)}
            className="w-full "
            > Add User 
          </Button>
          
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="z-1 w-full"
          >
            <div className="z-0 relative w-full"> 
              <UserRegForm close={() => toggleDrawer(anchor, false)} className="w-full"/>
            </div> 
              
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default UserDrawer;