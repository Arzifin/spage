import * as React from 'react';
import { Box, Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { PhotoCameraBack as PhotoCameraBackIcon, Create as CreateIcon, 
  MenuBook as MenuBookIcon, Menu as MenuIcon, Info as InfoIcon, Hotel as HotelIcon,
  Navigation as NavitationIcon, School as SchoolIcon, Phone as PhoneIcon, Home as HomeIcon,
} from '@mui/icons-material';
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import "./MenuCustom.css";

export default function MenuCustom() {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //console.log('I was triggered')
  };

  const handleMenuItemClick = (value) => {
    
    //console.log(value);
    /*let id = event.target.id;*/
    //console.log("menin", event.target.id);
    if (value === "info") {
      //console.log("toimin");
        scroller.scrollTo('info-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            //offset: - (Math.round(window.innerHeight / 100) * 75),
        });
    }
    else if (value === 'ilmo') {
        scroller.scrollTo('ilmo-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    else if (value === 'kpp') {
        scroller.scrollTo('kpp-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }
    else if (value === 'majo') {
      scroller.scrollTo('majo-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'valo') {
      scroller.scrollTo('valo-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'tied') {
      scroller.scrollTo('tied-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'yhteys') {
      scroller.scrollTo('yhteys-kortti', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    else if (value === 'koti') {
      scroller.scrollTo('uloinLaatikko', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
      });
    }
    setAnchorEl(null);
}
    

  const handleClose = () => {
    setAnchorEl(null);
    //setOpen(!isOpen);
  };


  return (
    // Muutettu valikko, jossa voi kustomisoida ikonin valikkoalkion viereen
    <Box
      sx={{
        //marginLeft: '0.05vh',
      }}
    >
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          color: '#fff',
          //paddingLeft: '3vw',
        }}
      >
        <MenuIcon
          sx={{
            fontSize: {
              xs: '8.5vw',
              sm: '6.5vw',
              md: '3.5vw',
              lg: '3vw',
            },
            color: '#fff'
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
          id="koti"
          onClick={()=>handleMenuItemClick("koti")}
        >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Otsikko"
          />
        </MenuItem>
        <MenuItem
          id="info"
          onClick={()=>handleMenuItemClick("info")}
        >
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Kuvat"
          />
        </MenuItem>
        <MenuItem
          id="ilmo"
          onClick={()=>handleMenuItemClick("ilmo")}
        >
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Ilmoittautuminen"
          />
        </MenuItem>
        <MenuItem
          id="kpp"
          onClick={()=>handleMenuItemClick("kpp")}
        >
          <ListItemIcon>
            <NavitationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Kuinka pääsen perille"
          />
        </MenuItem>
        <MenuItem
          id="majo"
          onClick={()=>handleMenuItemClick("majo")}
        >
          <ListItemIcon>
            <HotelIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Majoitus"
          />
        </MenuItem>
        <MenuItem
          id="valo"
          onClick={()=>handleMenuItemClick("valo")}
        >
          <ListItemIcon>
            <PhotoCameraBackIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Valokuvat"
          />
        </MenuItem>
        <MenuItem
          id="tied"
          onClick={()=>handleMenuItemClick("tied")}
        >
          <ListItemIcon>
            <SchoolIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Tiedoksi"
          />
        </MenuItem>
        <MenuItem
          id="yhteys"
          onClick={()=>handleMenuItemClick("yhteys")}
        >
          <ListItemIcon>
            <PhoneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Yhteystiedot"
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}
