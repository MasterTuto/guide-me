import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { Resource } from "../../components";

type Props = {
  results?: SearchResult;
};

const SearchResults: React.FC<Props> = ({ results }) => {
  if (results)
    return (
      <Box>
        <Typography variant="body1">
          {results.items.length || 0} resultados para a busca
        </Typography>

        <Grid container direction="row" spacing={2} sx={{ mb: 3 }}>
          {results.items.map(({ id, ...resource }, index) => (
            <Grid item key={id} xs={2.4}>
              <Resource id={id} {...resource} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  else {
    return (
      <Box>
        <Typography variant="body1">0 resultados para a busca</Typography>

        <Grid container direction="row" spacing={2} sx={{ mb: 3 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid item key={index} xs={2.4}>
              <Stack>
                <Skeleton variant="rectangular" height="7em" />
                <Skeleton variant="text" sx={{ fontSize: "1em" }} />
                <Skeleton variant="rounded" height="8em" />
                <Skeleton variant="text" sx={{ fontSize: "1em" }} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default SearchResults;
