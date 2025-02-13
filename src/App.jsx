import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Box, Button, Stack } from '@mui/material';
import Typebuttons from './components/Sidebar';

function App() {
    return (
        <div>
            <Box>
                <Navbar />

                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Stack>
            </Box>
        
        </div>
    );
}

export default App;
