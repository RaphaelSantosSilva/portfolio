import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import style from './Header.module.css'

const Header = () => {
    return (
    <Box>
      <AppBar className={style.header} position="static">
        <Toolbar>
          <Typography className={style.name} align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RAPHAEL SANTOS SILVA | DESENVOLVEDOR WEB FRONT END
          </Typography>
          
          <Button color="inherit">
            <a target='blank' href='https://www.linkedin.com/in/raphael-santos-silva/'>
              <img className={style.logoIcon1} src='https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png' />
            </a>
          </Button>
          
          <Button color="inherit">
            <a target='blank' href='https://github.com/RaphaelSantosSilva'>
              <img className={style.logoIcon} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
            </a>
          </Button>

          <Button color='inherit'>
            <a target='blank' href='#'>
              <img className={style.logoIcon} src='https://cdn.icon-icons.com/icons2/2992/PNG/512/whatsapp_logo_icon_187323.png'/>
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header