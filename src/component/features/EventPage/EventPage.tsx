import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import EventCard from "../../Module/EventCard/EventCard";
import stylees from "./EventPage.module.scss";

const EventPage = () => {
  const [progName, setProgName] = React.useState<any>("");
  const [eventDate, setEventDate] = React.useState<any>("");
  const [eventStartTime, setEventStartTime] = React.useState<any>("");
  const [eventEndTime, setEventEndTime] = React.useState<any>("");
  const [eventStatus, setEventStatus] = React.useState<any>("");
  const [imageShow, setImage] = React.useState<any>();

  const [event, setEvent] = React.useState<JSX.Element[]>([]);

  const submitEvent = () => {
    const newEvent = (
      <EventCard
        progName={progName}
        eventDate={eventDate}
        eventStartTime={eventStartTime}
        eventEndTime={eventEndTime}
        eventStatus={eventStatus}
        imageShow={imageShow}
      />
    );

    setEvent((oldEvents) => [...oldEvents, newEvent]);
  };

  const handleChange = (e: any) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImage(data.result);
    });

    data.readAsDataURL(e.target.files[0]);
  };

  console.log("image", imageShow);
  return (
    <div style={{display : 'block'}}>
      <Card
        variant="outlined"
        sx={{
          width: "400px",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "blue" }}> Event Form </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "43ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Event Name"
            variant="outlined"
            placeholder="Event Name"
            onChange={(e) => setProgName(e.target.value)}
          />
          <TextField
            label="Event Date"
            variant="outlined"
            type="date"
            onChange={(e) => setEventDate(e.target.value)}
          />
          <TextField
            label="Event Start Time"
            variant="outlined"
            type="time"
            onChange={(e) => setEventStartTime(e.target.value)}
          />
          <TextField
            label="Event End Time"
            variant="outlined"
            type="time"
            onChange={(e) => setEventEndTime(e.target.value)}
          />
           <TextField
            label="Event Status"
            variant="outlined"
            type="text"
            onChange={(e) => setEventStatus(e.target.value)}
          />
          <label
            className={stylees["lable-id"]}
            onChange={handleChange}
            htmlFor="input-file"
            style={{display: 'block',
              width: '117px',
              textAlign: 'center',
              margin: '5px 132px'}}
          >
            {" "}
            Upload Image{" "}
          </label>
          <div style={{ display: "none" }}>
            <input
              className={stylees["input-id"]}
              accept="image/png, image/jpeg, image/jpg"
              type="file"
              id="input-file"
              onChange={(e) => setImage(e.target.files)}
            />
          </div>
        </Box>

        <div style={{ textAlign: "center", margin: "5px" }}>
          <Button variant="contained" color="success" onClick={submitEvent}>
            Submit
          </Button>
        </div>
      </Card>

      

      <div style={{ display: "flex" }}>{event.map((event) => event)}</div>
    </div>
  );
};
export default EventPage;
