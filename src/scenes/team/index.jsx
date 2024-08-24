import React, { useContext } from "react";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { Box, cardHeaderClasses, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Header } from "../../components/Header";

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);
  const teamTheme = languageTheme?.menu.data;
  const columns = [
    {
      field: "id",

      headerName: teamTheme.manageTeam.table.id,
      cellClassName: "id-column--cell",
    },
    {
      field: "name",
      headerName: teamTheme.manageTeam.table.name,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: teamTheme.manageTeam.table.email,
      flex: 1,
      cellClassName: "email-column--cell",
    },
    {
      field: "age",
      headerName: teamTheme.manageTeam.table.age,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: teamTheme.manageTeam.table.phone,
      flex: 1,
    },
    {
      field: "access",
      headerName: teamTheme.manageTeam.table.accessLevel,
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="5px"
            display="flex"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{ ml: "5px" }}
              fontFamily={fontStyle.fontFamily}
            ></Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header
        title={teamTheme.manageTeam.manageTeamTitle}
        subtitle={teamTheme.manageTeam.manageTeamSubtitle}
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .email-column--cell": {
            color: colors.blueAccent[300],
            textDecoration: "underline",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColors: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-scrollbar": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiBox-root": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0rem",
          },
          "& .MuiDataGrid-columnHeaderTitle": { fontStyle },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
