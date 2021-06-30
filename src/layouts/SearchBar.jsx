import React from "react";
import { Grid, Search } from "semantic-ui-react";

export default function SearchBar() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
        <Search size="big"  className="searchBar" placeholder="İş ara..." style={{top:"75px"}}/>
        </Grid.Column>
      </Grid>
    </div>
  );
}
