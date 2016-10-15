define(['react'], function(React) {


var CommentForm = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    this.onCommentSubmit({author: author, text: text});
    this.refs.text.value = '';
    return false;
  },

  onCommentSubmit: function(comment) {
    socket.post(this.props.url, comment, function whenServerResponds(data) {
      console.log('Message posted :: ', data);
    });
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit} role="form">
        <h3><small>Tell me your thoughts...</small></h3>
        <div className="row">
          <div className="col-md-2">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" type="text" placeholder="Enter your name" ref="author" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="form-group">
              <label>Comment</label>
              <input className="form-control" placeholder="Whatcha thinkin bout?" ref="text" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success pull-right" value="Submit">Post</button>
      </form>
    );
  }

}); //CommentForm

return CommentForm;

}); //define
