import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@constants/theme';
import Evendar from '@components/Evendar';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Evendar />
    </ThemeProvider>
  );
}

export default App;
