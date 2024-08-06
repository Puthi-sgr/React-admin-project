import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  MenuItemFR,
} from "react-pro-sidebar";
import { useState, useMemo } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { AddBox, MenuBookOutlined } from "@mui/icons-material";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box style={{ marginRight: "10px" }}>{icon}</Box>
          <Typography>{title}</Typography>
        </Box>
      </MenuItem>
    </Link>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
            {/*Active side bar */}
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

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
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

          {/*Menu item */}

          <Box marginLeft={!isCollapsed ? undefined : "0"}>
            <Item
              title="Dashboard"
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
            >
              Data
            </Typography>

            <Item
              title="Manage team"
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
              title="Contacts Information"
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
              title="Invoice Balances"
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
            >
              Pages
            </Typography>

            <Item
              title="Profile Form"
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
              title="Calendar"
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
              title={"FAQ"}
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
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
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
              title="Pie Chart"
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
              title="Line Chart"
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
              title="Geography Chart"
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
