import React from "react";
import styled from "styled-components";

function Cardgroup({ title, data }) {
	console.log(title);
	return (
		<Container>
			<Cardgroup.Title>{title}</Cardgroup.Title>
		</Container>
	);
}

export default Cardgroup;
const Container = styled.div``;
