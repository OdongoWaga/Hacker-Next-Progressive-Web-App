import React, { Component } from "react";

class Story extends Component {
	static getInitialProps({ req, res, query }) {
		const storyId = query.id;
	}

	render() {
		return <div> Story </div>;
	}
}

export default Story;
