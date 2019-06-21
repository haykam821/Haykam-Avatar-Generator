class HR extends React.Component {
	render() {
		return elem("div", {
			style: {
				minHeight: "0px",
				clear: "both",
				width: "100%",
				borderTop: "0.5px solid",
				borderBottom: "0.5px solid",
				borderColor: themeProp("bg"),
				height: "0px",
				marginTop: "10px",
				marginBottom: "10px",
			},
		});
	}
}