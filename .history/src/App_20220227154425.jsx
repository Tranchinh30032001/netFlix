import Home from "./Home/Home";
import { ThemeProvider } from "styled-components";


const theme = {
	mainColor: "#0b0b0b",
};
function App() {
	return (
		<ThemeProvider theme={theme} >
			<StyledGlobal />
			<Home />
		</ThemeProvider>
	)
}

export default App;
