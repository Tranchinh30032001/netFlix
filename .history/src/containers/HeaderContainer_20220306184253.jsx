import Reactfrom "react";
import Header from "../components/Header";

function HeaderContainer({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
}

export default HeaderContainer;
