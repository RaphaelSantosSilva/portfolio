"use client"
const { default: Default } = require("./Templates/Default")
import { Box, Button, Container, Grid, Typography, Icon } from "@mui/material"
import style from './page.module.css'
import Cards from "./Cards/Cards"
import Carousel from "react-material-ui-carousel"
import HtmlIcon from '@mui/icons-material/Html'

const Home = () => {
  return (
    <Default>
      <Container maxWidth='md'>
        <Box className={style.box}  component='section' sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} columns={16}>
            <Grid xs={8}>
              <img className={style.profile} src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"/>
              <div className={style.listIcons}>
                <img className={style.icons} src="https://cdn-icons-png.flaticon.com/256/174/174854.png"/>
                <img className={style.icons} src="https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png"/>
                <img className={style.icons} src="https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png"/>
                <img className={style.icons1} src="https://cdn.sanity.io/images/3do82whm/next/db46b4cac4f279d6f29c4a10e289307d7bd2df31-1000x667.png?w=720&h=480&fit=clip&auto=format" />
                <img className={style.icons} src='https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png' />
              </div>
            </Grid>
            <Grid xs={8}>
              <Typography className={style.text}>
                Meu nome é Raphael Santos Silva, tenho 28 anos e resido em Mauá - São Paulo. Neste momento, estou em busca de minha primeira oportunidade como Desenvolvedor Front End. Recentemente, finalizei meu curso de Desenvolvedor Full Stack Javascript, possuo alguns projetos publicados desenvolvidos em aula. Minha paixão pela informática começou desde cedo quando ganhei meu primeiro computador, na época Windows 98. Meu foco principal é conseguir ingressar na área e continuar estudando, desejo realizar uma graduação em Engenharia de Software e aperfeiçoar Back End. Minhas habilidades atuais incluem:
              </Typography>
              <Box className={style.list}>
                <ul className={style.ul1}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>SASS</li>
                </ul>
                <ul className={style.ul2}>
                  <li>React JS</li>
                  <li>Next JS</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <br/> <br />
      <hr className={style.hr} />

      <Container maxWidth='md'>
        <Typography className={style.title} align="center" component='h1' variant="h2">
          Projetos desenvolvidos
        </Typography>

        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Cards
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'
                }
                title='Nome do Projeto'
                subtitle='Descrição'
                icon={HtmlIcon}

                image2={'https://fontawesome.com/social/code?f=classic&s=&v=5'}
                
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                } 
              /> 
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Cards 
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'}
                title='Nome do Projeto'
                subtitle='Descrição'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                }
              /> 
            </Grid> 

            <Grid item xs={12} sm={6} md={4}>
              <Cards 
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'}
                title='Nome do Projeto'
                subtitle='Descrição'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                }
              /> 
            </Grid> 

            <Grid item xs={12} sm={6} md={4}>
              <Cards 
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'}
                title='Nome do Projeto'
                subtitle='Descrição'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                }
              /> 
            </Grid> 

            <Grid item xs={12} sm={6} md={4}>
              <Cards 
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'}
                title='Nome do Projeto'
                subtitle='Descrição'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                }
              /> 
            </Grid> 

            <Grid item xs={12} sm={6} md={4}>
              <Cards 
                image={'https://play-lh.googleusercontent.com/EnxJKkoXzxrmA0RA0gUie0K4gvbRLrQhpflyMzwSMvCfk2FA6o9sBLzfWtG5qLzIBIc'}
                title='Nome do Projeto'
                subtitle='Descrição'
                actions={
                  <>
                    <Button size="small" color="primary">
                      Acessar
                    </Button>
                    <Button size="small" color="primary">
                      Código Fonte 
                    </Button>
                  </>
                }
              /> 
            </Grid>        
        </Grid>
      </Container>
    </Default>
  )
}

export default Home