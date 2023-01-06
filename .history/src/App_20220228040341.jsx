import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { StyledGlobal } from "./StyledComponent/StyledGlobal";

const theme = {
	mainColor: "#0b0b0b",
};
function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyledGlobal />
			<Header />
			<Body />
		</ThemeProvider>
	);
}

export default App;
