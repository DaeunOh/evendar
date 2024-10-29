import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@constants/theme';
import { MonthlyCalendar } from '@components/Monthly';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MonthlyCalendar />
    </ThemeProvider>
  );
}

export default App;
