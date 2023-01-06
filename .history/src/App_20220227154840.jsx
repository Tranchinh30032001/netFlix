import Home from "./Home/Home";
import { ThemeProvider } from "styled-components";
import { StyledGlobal } from "./StyledComponent/StyledGlobal";
import Navbar from "./Component/Navbar";


const theme = {
	mainColor: "#0b0b0b",
};
function App() {
	return (
		<ThemeProvider theme={theme} >
			<StyledGlobal />
			<Home />
			<Navbar />
		</ThemeProvider>
	)
}

export default App;
