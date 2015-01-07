var Seconds = React.createClass({
    getInitialState: function () {
        var start = 0;
        if (this.props.start) start = parseInt(this.props.start);
        return { pocetSekund: start };
    },
    componentDidMount: function () {
        this.nastavTimer();
    },
    nastavTimer: function () {
        this.interval = setInterval(this.timer, 1000);
    },
    componentWillUnmount: function () {
        clearInterval(this.interval);
    },
    timer: function () {
        this.setState({ pocetSekund: this.state.pocetSekund + 1 });
    },
    render: function () {
        return (
            <div >Sekund od zacatku: { this.state.pocetSekund }</div>
            );
    }
});


React.render(<Seconds />, document.getElementById('content'));
React.render(<Seconds start="5"/>, document.getElementById('content2'));

