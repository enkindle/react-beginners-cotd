var React = require('react');
var ReactDOM = require('react-dom');

/*
	Store Picker Component
		- This will allow us to create the <StorePicker> element in the HTML
 */
var StorePicker = React.createClass({
	render : function(){
		return (
			<h1>Tester</h1>
		)
	}
});

ReactDOM.render(<StorePicker/>, document.getElementById('main'));