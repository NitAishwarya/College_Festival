import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { url } from 'inspector';
import health from '../../image/p4.png'
import { red } from '@mui/material/colors';

const HomePage = ({
  setIsOnPage,
  
}:{
  setIsOnPage : React.Dispatch<React.SetStateAction<boolean>>;
}) => {

 
  return (
    <Card sx={{margin: '3px 564px', width: '370px', textAlign :'center', height : '572px', boxShadow :' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , backgroundColor : '#fc9aa4'}}>
       <Typography variant="body2" color="text.secondary" style={{textAlign :'center', backgroundColor : '#73020e'}}>
         <div style={{width : '100%' , height :'50px'}}>

         </div>
          </Typography>
      <CardActionArea >
        {/* <CardMedia
          component="img"
          height="140"
          image='healthhome.png'
          alt="family"
        /> */}
         
        <CardContent>
      
            <img src={health} width='100%'  />
          <Typography gutterBottom variant="h5" component="div" style={{textAlign :'center'}}>
           A Fest Like Never Before
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign :'center'}}>
          The greatnees of a culture can be founded in its festival
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent :'center'}}>
        <Button size="small" variant="contained" color="success" style={{padding :'5px 50px'}} onClick={()=>setIsOnPage(false)}>
          Get Started
        </Button>
      </CardActions>

      <Typography variant="body2" color="text.secondary" style={{textAlign :'center', backgroundColor : '#73020e'}}>
         <div style={{width : '100%' , height :'50px'}}>

         </div>
          </Typography>

    </Card>
  );
}

export default HomePage;
