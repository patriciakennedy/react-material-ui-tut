import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from 'react';

export const Testbtn = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
};
