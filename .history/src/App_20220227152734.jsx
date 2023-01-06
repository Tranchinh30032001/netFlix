import Home from "./Home/Home";
import { ThemeProvider } from "styled-components";


const theme = {
	mainColor: "#0b0b0b",
};
function App() {
	return <div className="App">
		<Home />
	</div>;
}

export default App;
