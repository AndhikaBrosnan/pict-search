import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term); //kalau bikin e.target.value error karena undefined
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          {/* Karena di panggil hanya sekali. Jadi pake tanda kurung (e) */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
