"use client"
const { default: Default } = require("./Templates/Default")
import React from "react"
import { Box, Container, Grid, Typography } from "@mui/material"
import style from './page.module.css'
import Image from "next/image"

const Home = () => { 
  return (
    <Default>
      <Container maxWidth='md'>
        <Box className={style.box}  component='section' sx={{ flexGrow: 1 }} >
          <Grid container spacing={2} columns={16}>
            <Grid xs={8}>
              <img className={style.profile} src='https://cdn-icons-png.flaticon.com/512/5024/5024509.png'/>
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

        <div className={style.divPai}>
          <div className={style.devs}>
            <h1 className={style.titleDevs}>
                Barber Shop
            </h1>

            <img 
              src="https://t4.ftcdn.net/jpg/03/78/83/15/360_F_378831540_10ShB9tnvs2quli24qe53ljhvsL07gjz.jpg" 
              width={200} 
              height={200}
              className={style.imagem1}
            />
            
            <button className={style.button}>
              <a
                target="blank" 
                className={style.ancora} 
                href="https://github.com/RaphaelSantosSilva/Projeto-Barber-Shop">
                Acessar
              </a>
            </button>
          </div>

          <div className={style.devs}>
            <h1 className={style.titleDevs}>
                To Do List
            </h1>

            <img 
              src="https://blog.teamup.com/wp-content/uploads/2021/12/todo-header.png" 
              width={200} 
              height={200}
              className={style.imagem1}
            />
            
            <button className={style.button}>
              <a
                target="blank" 
                className={style.ancora} 
                href="https://github.com/RaphaelSantosSilva/lista-de-tarefas">
                Acessar
              </a>
            </button>
          </div>
        </div>

        <div className={style.divpai2}>
          <div className={style.devs}>
            <h1 className={style.titleDevs}>
                Pet Shop
            </h1>

            <img 
              src="https://i.pinimg.com/736x/79/2e/a4/792ea40494b7d47ab0a5692a67123ffc.jpg" 
              width={200} 
              height={200}
              className={style.imagem1}
            />
            
            <button className={style.button}>
              <a
                target="blank" 
                className={style.ancora} 
                href="https://github.com/RaphaelSantosSilva/Projeto-Pet-Shop">
                Acessar
              </a>
            </button>
          </div>

          <div className={style.devs}>
            <h1 className={style.titleDevs}>
                Página de Login
            </h1>

            <img 
              src="https://media.licdn.com/dms/image/C560BAQGTJDv2cJ7Plw/company-logo_200_200/0/1630643699365/login_logo?e=2147483647&v=beta&t=GEB-hqn_FAJ71E1UXhD9t-3SbzWFPj2LMGqDL-_5RUI" 
              width={200} 
              height={200}
              className={style.imagem1}
            />
            
            <button className={style.button}>
              <a
                target="blank" 
                className={style.ancora} 
                href="https://github.com/RaphaelSantosSilva/login">
                Acessar
              </a>
            </button>
          </div>
        </div>
      </Container>
    </Default>
  )
}

export default Home