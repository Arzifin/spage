import * as React from 'react';
import { MenuItem, Menu, ListItemText, ListItemIcon, IconButton} from '@mui/material';
import { Create as CreateIcon, VpnKey as VpnKeyIcon, Person as PersonIcon} from '@mui/icons-material/';
import { useNavigate, Link } from 'react-router-dom';

export default function MenuLogin () {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  function handleItemClick (event, value) {
    setAnchorEl(null);
    navigate("/form");
  }



  return (
    <div>
      <IconButton 
        style={{
          //marginRight: '3vw',
          color: '#fff'
        }}
        //className={classes.tausta}
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        
      >
        <VpnKeyIcon 
          sx={{
            fontSize: { xs: 25, sm: 30, md: 35, lg: 40,}
          }}
        />
      </IconButton>
      <Menu
        disableScrollLock={true}
        id="customized-menu" 
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem 
          onClick={(e) => {
            handleItemClick(e, 1)
            
          }}
        >
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Ilmoittaudu" />
        </MenuItem>
        <MenuItem 
          onClick={(e) => {
            handleItemClick(e, 2)
          }}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Kirjaudu" />
        </MenuItem>
      </Menu>
    </div>
    
    
  );
}
