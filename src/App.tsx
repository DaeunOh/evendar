import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@constants/theme';
import Evendar from '@components/Evendar';

const theme = createTheme(lightTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Evendar />
    </ThemeProvider>
  );
}

export default App;
