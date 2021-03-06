import React from 'react';

class WhoAmI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 26
		};
		// this.nextYear = this.nextYear.bind(this);
		// this.nextYear = () => {
		// 	this.setState(state => ({
		// 		years: ++state.years
		// 	}));
		// };
	}

	// state = {
	// 	years: 26
	// };

	nextYear = () => {
		this.setState(state => ({
			years: ++state.years
		}));
	};


	// nextYear() {
	// 	// this.state.years++;
	// 	this.setState(state => ({
	// 		years: ++state.years
	// 	}));
	// }
	render() {
		// eslint-disable-next-line react/prop-types
		const { name, surname, link } = this.props;
		const { years } = this.state;
		return (
			<>
				<button onClick={this.nextYear} >++</button>
				<h1>My name is {name}, surname - {surname}, years = {years}</h1>
				<a href={link}>My profile</a>
			</>
		);
	}
}

const All = () => {
	return (
		<>
			<WhoAmI name="John" surname="Smith" link="facebook.com" />
			<WhoAmI name="Alex" surname="Shepard" link="vk.com" />
			<WhoAmI name="Serge" surname="Brewhawk" link="facebook.com" />
		</>
	);
};

export default All;