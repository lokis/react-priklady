var Seconds = React.createClass({
  render: function() {
    return (
      <div >
          Hello world !
      </div>
    );
  }
});

var Kuk = React.createClass({
    render: function(){
        return(
            <div>
                Ahoj Svete
            </div>
            );
    }
});

React.render(<Hello/>, document.getElementById('content'));
React.render(<Kuk/>, document.getElementById('content2'));

