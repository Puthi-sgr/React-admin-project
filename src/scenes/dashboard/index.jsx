import { useContext } from "react";
import { Header } from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { StatBox } from "../../components/StatBox";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import { GeographyChart } from "../../components/GeographyChart";
import { ProgressCircles } from "../../components/ProgressCircles";

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { languageTheme } = useContext(LanguageModeContext);
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);

  const dashboardTheme = languageTheme?.menu.dashboard;

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={dashboardTheme.dashboardTitle}
          subtitle={dashboardTheme.dashboardSubtitle}
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              ...fontStyle,
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            {dashboardTheme.buttonLabel}
          </Button>
        </Box>
      </Box>

      {/* {grids and charts} */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="678"
            subtitle={dashboardTheme.dashboardSummary.emailTitle}
            progress="0.71"
            increase="+ 2%"
            icon={
              <EmailIcon
                sx={{ colors: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,245"
            subtitle={dashboardTheme.dashboardSummary.newUserTitle}
            progress="0.65"
            increase="+ 14%"
            icon={
              <PersonAddIcon
                sx={{ colors: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$31,225"
            subtitle={dashboardTheme.dashboardSummary.revenueTitle}
            progress="0.50"
            increase="+ 21%"
            icon={
              <PointOfSaleIcon
                sx={{ colors: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3,441"
            subtitle={dashboardTheme.dashboardSummary.trafficTitle}
            progress="0.30"
            increase="+ 5%"
            icon={
              <TrafficIcon
                sx={{ colors: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="500"
                color={colors.grey[100]}
                sx={fontStyle}
              >
                {dashboardTheme.financialOverview.revenueTitle}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="500"
                color={colors.greenAccent[500]}
              >
                $91,328,98
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "36px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-32px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transaction */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              colors={colors.grey[100]}
              variant="h5"
              fontWeight="600"
              sx={fontStyle}
            >
              {dashboardTheme.financialOverview.transactionTitle}
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              p="4px 8px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography
                  colors={colors.greenAccent[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography colors={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={fontStyle}>
            {dashboardTheme.saleAnalytics.campaign.campaignTitle}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
            mt="25px"
          >
            <ProgressCircles size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $67,572$
            </Typography>
            <Typography variant="h5" fontWeight="600" sx={fontStyle}>
              {dashboardTheme.saleAnalytics.campaign.campaignSubtitle}
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ ...fontStyle, p: "" }}
          >
            {dashboardTheme.saleAnalytics.salesTitle}
          </Typography>
          <Box height="100%" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ ...fontStyle, mb: "15px" }}
          >
            {dashboardTheme.saleAnalytics.geographyTitle}
          </Typography>
          <Box height="250px" mt="0px" mb="20px">
            <GeographyChart overflow="hidden" isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
