import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography
    } from "@mui/material"
  
    import style from './Cards.module.css'
import Carousel from "react-material-ui-carousel"
  
  const Cards = ({image,image2, title, subtitle, actions, icon }) => {
      return (
          <Card>
            <Carousel>
                <CardMedia
                    className={style.card}
                    image={image}
                    image2={image2}
                    title={title}
                    icon={icon}
                    />
            </Carousel>
                  
              <CardContent>
                  <Typography variant="h5" component='h2'>
                      {title}
                  </Typography>
                  <Typography variant="h5" component='h2'>
                      {subtitle}
                  </Typography>
              </CardContent>
              {
                  actions
                  ? (
                      <CardActions>
                          {actions}
                      </CardActions>
                  ) : null
              }
              
          </Card>
      )   
  }
  
  export default Cards