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
                                Entre em contato comigo
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                Github
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='#'>
                           <Typography>
                                Linkedin
                           </Typography>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link className={style.links} href='/publish'>
                            <Typography>
                                E-mail    
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer