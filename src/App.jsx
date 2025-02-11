import { Button } from '@mui/material';

function App() {
    return (
        <div>
            <h1>Hello, Material UI!</h1>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>

            <Button variant="contained" color="secondary">
                Secondary Button
            </Button>

            {/* <Button variant="contained">Click Me</Button> */}
            {/* <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => alert('Button Clicked!')}
            >
                Click Me
            </Button> */}
        </div>
    );
}

export default App;
