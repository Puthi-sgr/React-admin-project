import {Box, Icon, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens, toggleColorMode } from '../../theme';
import InputBase from '@mui/material/InputBase';
import  LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import  DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import  NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';
import  SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import  PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search'

export const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return(
            <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                backgroundColor: colors.primary[400],
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
              }}
            display="flex" justifyContent="space-between" p={2}>
                {/* SEARCH BAR */}
                <Box 
                    display="flex" 
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px">
                        <InputBase sx={{ ml: 2,  flex: 1}} placeholder = "Search" />
                        <IconButton type="button" sx = {{ p: 1}} />

                </Box>
                {/*Icon */}
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (<LightModeOutlinedIcon />)}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
    )
        
}

