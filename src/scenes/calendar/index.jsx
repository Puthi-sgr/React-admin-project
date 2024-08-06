import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Header } from "../../components/Header";
import FullCalendar, {formatDate} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import { tokens } from "../../theme";
export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for you event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselected();

    if(title){
        calendarApi.addEvent({
            id: `${selected.start}`
        })
    }
  }; //this function will handle the situation when you click some kind of date
  return (
    <Box m="20px">
      <Header
        title={"Calendar"}
        subtitle={"View you calendar date and make schedules"}
      />
    </Box>
  );
};
