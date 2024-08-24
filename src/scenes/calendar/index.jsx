import React, { useState, useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { Header } from "../../components/Header";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import { tokens } from "../../theme";

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  const calendarTheme = languageTheme?.menu.pages.calendar;
  const handleDateClick = (selected) => {
    console.log(selected);
    const title = prompt("please enter a new title for you event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }; //this function will handle the situation when you click some kind of date

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  }; //will trigger when click on an event
  return (
    <Box m="20px">
      <Header
        title={calendarTheme.calendarTitle}
        subtitle={calendarTheme.calendarSubtitle}
      />
      <Box display="flex" justifyContent="space-between">
        {/* {Calendar sidebar} */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5" sx={fontStyle}>
            {calendarTheme.event}
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={<Typography>{event.title}</Typography>}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectMirror={true}
            dayMaxEvents={true}
            selectable={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1", title: "All-day event", date: "2024-08-14" },
              { id: "2", title: "All-day event", date: "2024-08-01" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
