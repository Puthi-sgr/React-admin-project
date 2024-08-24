import React, { useContext } from "react";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState, useEffect } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import admin from "../../assets/admin.jpg";

const Item = ({ activeLabel, title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem
        activeLabel={activeLabel}
        active={selected === activeLabel}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(activeLabel)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box style={{ marginRight: "10px" }}>{icon}</Box>
          <Typography style={fontStyle}>{title}</Typography>
        </Box>
      </MenuItem>
    </Link>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <Box
      sx={{
        "& .css-dip3t8": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner.item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover *": {
          color: "#868dfb !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
          transition: "ease-in-out 0.20s",
        },
        "& .ps-sidebar-root": {
          height: "100%",
        },
        "& .ps-sidebar-container": {
          height: "100%",
        },
      }}
    >
      <ProSidebar id="proSideBar" collapsed={isCollapsed} width="250px">
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={admin}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                    border: `2px solid ${colors.grey[100]}`,
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Puthi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Data Manager
                </Typography>
              </Box>
            </Box>
          )}

          <Box marginLeft={!isCollapsed ? undefined : "0"}>
            <Item
              activeLabel={languageTheme?.menu.dashboard.dashboardStatus}
              title={languageTheme?.menu.dashboard.dashboardLabel}
              to="/"
              icon={
                <HomeOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              style={fontStyle}
            >
              {languageTheme?.menu.data.dataLabel}
            </Typography>

            <Item
              activeLabel={languageTheme?.menu.data.manageTeam.manageTeamStatus}
              title={languageTheme?.menu.data.manageTeam.manageTeamLabel}
              to="/team"
              icon={
                <PeopleOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.data.contacts.contactStatus}
              title={languageTheme?.menu.data.contacts.contactsLabel}
              to="/contacts"
              icon={
                <ContactsOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.data.invoices.invoiceStatus}
              title={languageTheme?.menu.data.invoices.invoicesLabel}
              to="/invoice"
              icon={
                <ReceiptOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              style={fontStyle}
            >
              {languageTheme?.menu.pages.pagesLabel}
            </Typography>

            <Item
              activeLabel={
                languageTheme?.menu.pages.profileForm.profileFormStatus
              }
              title={languageTheme?.menu.pages.profileForm.profileFormLabel}
              to="/form"
              icon={
                <PersonOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.pages.calendar.calendarStatus}
              title={languageTheme?.menu.pages.calendar.calendarLabel}
              to="/calendar"
              icon={
                <CalendarTodayOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.pages.faq.faqStatus}
              title={languageTheme?.menu.pages.faq.faqLabel}
              to="/faq"
              icon={
                <HelpCenterOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              style={fontStyle}
            >
              {languageTheme?.menu.charts.chartsLabel}
            </Typography>

            <Item
              activeLabel={languageTheme?.menu.charts.BarChart.BarChartStatus}
              title={languageTheme?.menu.charts.BarChart.BarChartLabel}
              to="/bar"
              icon={
                <BarChartOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.charts.PieChart.PieChartStatus}
              title={languageTheme?.menu.charts.PieChart.PieChartLabel}
              to="/pie"
              icon={
                <PieChartOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={languageTheme?.menu.charts.LineChart.LineChartStatus}
              title={languageTheme?.menu.charts.LineChart.LineChartLabel}
              to="/line"
              icon={
                <TimelineOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              activeLabel={
                languageTheme?.menu.charts.GeographyChart.GeographyChartStatus
              }
              title={
                languageTheme?.menu.charts.GeographyChart.GeographyChartLabel
              }
              to="/geography"
              icon={
                <MapOutlinedIcon
                  style={{ marginRight: isCollapsed ? "1rem" : undefined }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
