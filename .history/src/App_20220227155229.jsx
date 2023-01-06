import Home from "./Home/Home";
import { ThemeProvider } from "styled-components";
import { StyledGlobal } from "./StyledComponent/StyledGlobal";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";


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
