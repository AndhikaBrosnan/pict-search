import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term }, //invoked from Children (SearchBar)
      headers: {
        Authorization: "Client-ID y6QScVCTWmRx8_y5ek8R26DOFwVCTzprUJ9tdQ78HyU",
      },
    });

    //will be run after `await` above completed
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
