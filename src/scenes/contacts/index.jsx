import React, { useContext } from "react";
import { Box, Grid, Toolbar, Typography, useTheme } from "@mui/material";
import { LanguageModeContext } from "../../languageTheme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { Header } from "../../components/Header";

export const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const contactTheme = languageTheme?.menu.data.contacts;

  const columns = [
    {
      field: "id",
      headerName: contactTheme.table.id,
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: contactTheme.table.registrarId,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: contactTheme.table.email,
      flex: 1,
    },
    {
      field: "age",
      headerName: contactTheme.table.age,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: contactTheme.table.phone,
      flex: 1,
    },
    {
      field: "address",
      headerName: contactTheme.table.address,
      flex: 1,
    },
    {
      field: "city",
      headerName: contactTheme.table.city,
      flex: 1,
    },
    {
      field: "zipCode",
      header: contactTheme.table.zipCode,
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title={contactTheme.contactTitle}
        subtitle={contactTheme.contactSubtitle}
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
          "& .email-column-cell": {
            color: colors.blueAccent[200],
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};
