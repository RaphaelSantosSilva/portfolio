import { Container, Grid, Box, Typography } from '@mui/material'
import Link from 'next/link'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <Container className={style.footer} maxWidth='lg' component="footer">
            <Grid container spacing={3} justify='space-around'>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                <span className={style.buttonEmail}>Currículo</span>
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                <a  
                                    className={style.buttonEmail}
                                    target='blank'
                                    href='https://github.com/RaphaelSantosSilva'>
                                        Github
                                </a>
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                <span className={style.buttonEmail}>Linkedin</span>
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='/publish'>
                            <Typography>
                                <span className={style.buttonEmail}>E-mail</span>    
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer