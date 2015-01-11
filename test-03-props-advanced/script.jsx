var DefaultProps = React.createClass({
    getDefaultProps: function () {
        return {
            value: 'default value'
        };
    },
    render: function () {
        return (
            <div>{this.props.value}</div>
        );

    }
});

var TestComp = React.createClass({
    render: function () {
        return (
            <div>
                <p> Default props: </p>
                <DefaultProps value="my val" />
                <DefaultProps value="kuk" />
                <DefaultProps />
            </div>
        );
    }
});


var TestPropTypes = React.createClass({
    defaultProps: {
        str: React.PropTypes.string,
        int: React.PropTypes.number
    },
    render: function () {
        return (
            <div>{this.props.str}: {this.props.int}</div>
        );
    }
});

var TestPropTypesContainer = React.createClass({
    render: function () {
        return (
            <div>
                <TestPropTypes int="i" str="20" />
                <TestPropTypes int="i" str="aa" />
                <TestPropTypes int="20" str="aa" />
            </div>
        );
    }
});


React.render(<TestComp />, document.getElementById('def'));
React.render(<TestPropTypesContainer />, document.getElementById('content'));

