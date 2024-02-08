import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const EventCard = ({
  progName,
  eventDate,
  eventStartTime,
  imageShow,
  eventEndTime,
  eventStatus
}: {
  progName: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  eventStatus:string,
  imageShow: any;
}) => {
  console.log("image-EventCard", imageShow);


  return (
    <Card
      sx={{
        width: "300px",
        height: "280px",
        padding: "3px",
        display: "flex",
        margin: "25px 4px",
      }}
    >
       
     
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageShow} />
         

        <CardContent>
          <Typography variant="body2" component="div">
            <b> Event Name :</b> {progName}
          </Typography>
          <Typography variant="body2" component="div">
            <b> Event Date : </b>
            {eventDate}
          </Typography>
          <Typography variant="body2" component="div">
            <b> Event Time : </b>
            {[eventStartTime, " to ", eventEndTime]}
          </Typography>
          <Typography variant="body2" component="div">
            <b> Event Status : </b>
            {eventStatus}
          </Typography>
          <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon/>
      </IconButton>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
  <br />;
};

export default EventCard;
