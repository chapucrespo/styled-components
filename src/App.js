import { ThemeProvider } from 'styled-components';
import ComplexTitle from './components/complex-title'
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ComplexTitle title='complex title'/>
    </ThemeProvider>
  );
}

export default App;
