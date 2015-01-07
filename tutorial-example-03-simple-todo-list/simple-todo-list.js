var TodoList = React.createClass({
    getInitialState: function () {
        return {items: [], text: ''};
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        this.setState({ items: nextItems, text: '' });
    },
    onChange: function (e) {
        this.setState({ text: e.target.value });
    },
    render: function () {
        return (
            <div>
                <TodoListList list={ this.state.items } />
                <form onSubmit={ this.handleSubmit } >
                    <input onChange={ this.onChange } value={ this.state.text } />
                    <button>Add #{ this.state.items.length + 1 }</button>
                </form>
            </div>
            );
    }
});

var TodoListList = React.createClass({
    render: function () {
        var renderLi = function (i) {
            return(
                <li>{i}</li>
                );
        };
        return (
            <div>
                <h2>Todo({ this.props.list.length }):</h2>
                <ul>
                { this.props.list.map(renderLi) }
                </ul>
            </div>
            );
    }
});


React.render(<TodoList />, document.getElementById('content'));
React.render(<TodoList />, document.getElementById('content2'));

