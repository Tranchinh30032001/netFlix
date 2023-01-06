import { ThemeProvider } from "styled-components";
import Header from "./StyledComponent/Header";
import { StyledGlobal } from "./StyledComponent/StyledGlobal";


const theme = {
	mainColor: "#0b0b0b",
};
function App() {
	return (
		<ThemeProvider theme={theme} >
			<StyledGlobal />
			 <Header />
		</ThemeProvider>
	)
}

export default App;
