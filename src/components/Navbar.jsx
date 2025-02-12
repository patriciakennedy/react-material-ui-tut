import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    CodeChick
                </Typography>
                <CodeIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
