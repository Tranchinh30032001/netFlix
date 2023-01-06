import "./feature.scss";
import { StyledButton } from "../../StyledComponent/StyledButton";
import { ArrowRight, Info } from "@material-ui/icons";

import React from "react";

function Feature() {
	return (
		<div className="feature">
			<img
				src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
				alt=""
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				harum doloribus itaque pariatur vitae. Exercitationem esse et, id
				corporis soluta, omnis dolor unde ex quos, illum fuga ab. Enim,
				assumenda?
			</p>
			<div className="list-btn">
				<StyledButton>
					{" "}
					<ArrowRight className="icon large " /> Play
				</StyledButton>
				<StyledButton>
					{" "}
					<Info className="icon" /> Info
				</StyledButton>
			</div>
		</div>
	);
}

export default Feature;
