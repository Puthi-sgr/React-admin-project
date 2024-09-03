import React, { useContext } from "react";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { Header } from "../../components/Header";
import { ColorModeContext } from "../../theme";

export const Invoices = () => {
  const theme = useTheme();
  const [, , paletteMode] = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode, paletteMode);
  const { languageTheme } = useContext(LanguageModeContext);
  const invoiceTheme = languageTheme?.menu.data.invoices;
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  const columns = [
    {
      field: "id",
      headerName: invoiceTheme.table.id,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: invoiceTheme.table.name,
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: invoiceTheme.table.email,
      flex: 1,
    },
    {
      field: "cost",
      headerName: invoiceTheme.table.cost,
      flex: 1,
      renderCell: (params) => (
        <Typography
          color={colors.greenAccent[500]}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
          }}
        >
          $ {params.row.cost}
        </Typography>
      ),
    },
    {
      field: "phone",
      headerName: invoiceTheme.table.phone,
      flex: 1,
    },
    {
      field: "data",
      headerName: invoiceTheme.table.data,
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title={invoiceTheme.invoicesTitle}
        subtitle={invoiceTheme.invoicesSubtitle}
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
          "&. .MuiCheckBox-root": {
            colors: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-columnHeaderTitle": { ...fontStyle },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};
