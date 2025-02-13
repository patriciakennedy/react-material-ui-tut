import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { Box, Stack } from '@mui/material';
import Testbtn from './components/Testbtn';

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
            <Testbtn />
        </div>
    );
}

export default App;
