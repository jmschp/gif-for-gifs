import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const { queryApi } = this.props;
    queryApi(event.target.value);
  }

  render() {
    return (
      <input type="text" onChange={this.handleSearch} />
    );
  }
}

export default Search;
