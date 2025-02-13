import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Box, Button, Stack } from '@mui/material';


function App() {
    return (
        <Box>
            <Navbar />
            <Button />

            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    );
}

export default App;
