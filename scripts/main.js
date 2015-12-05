var React = require('react');
var ReactDOM = require('react-dom');

/*
	App Component
		- This will house all the component that we render
 */
var App = React.createClass({
	render : function(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order/>
				<Inventory/>
			</div>
		)
	}
});

/*
	Header
 */
var Header = React.createClass({
	render : function(){
		return (
			<header className="top">
				<h1>
					Catch
						<span className="ofThe">
							<span className="of">of</span>
							<span className="the">The</span>
						</span>
					Day
				</h1>
				<h3 className="tagline"><span>{ this.props.tagline }</span></h3>
			</header>
		)
	}
});

/*
	Inventory
 */
var Inventory = React.createClass({
	render : function(){
		return (
			<p>Inventory</p>
		)
	}
});

/*
	Order
 */
var Order = React.createClass({
	render : function(){
		return (
			<p>Order</p>
		)
	}
});

/*
	Store Picker Component
		- This will allow us to create the <StorePicker> element in the HTML
 */
var StorePicker = React.createClass({
	render : function(){
		return (
			<form className="store-selector">
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" required/>
				<input type="Submit" />
			</form>
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('main'));