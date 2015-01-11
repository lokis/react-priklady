var Comp1 = React.createClass({
    render: function () {
        return (
            <div>
            <p>Comp1: <Comp2 value={this.props.value} /></p>
            <p>Comp2: <Comp2  {...this.props} /></p>
            </div>
        );

    }
});

var Comp2 = React.createClass({
    render: function () {
        return (
            <span>
            {this.props.value}
            </span>
        );
    }
});

var TestComp = React.createClass({
    render: function () {
        return (
            <div>
                <Comp1 value="my val" />
                <Comp1 value="kuk" />
                <Comp1 />
            </div>
        );
    }
});


var FancyCheckbox = React.createClass({
    render: function() {
        var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
            <div className={fancyClass} onClick={this.props.onClick}>
        {this.props.children}
            </div>
        );
    }
});


React.render(
    <TestComp />
    , document.getElementById('content'));

React.render(
    <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
    </FancyCheckbox>,
    document.getElementById('content2')
);

