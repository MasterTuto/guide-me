import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Resource } from "../../components";
import SearchResults from "./SearchResults";

import genieImage from "../../assets/img/svg/genie.svg";

import { SEMESTERS } from "../../constants/semesters";
import { RECOMMENDED } from "../../constants/recommended";
import { SEARCH_RESULTS } from "../../constants/search-results";

const SBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const SlideDownArrow = styled(ArrowDownward)`
  animation: pointdown 1.2s infinite;
  margin-bottom: 1em;

  @keyframes pointdown {
    0% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(0.7em);
    }

    70% {
      transform: translateY(0.7em);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const Home = () => {
  const inputRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  const theme = useTheme();

  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [searchQuery, setSearchQuery] = useState("");
  const [mostCommonSearches, setMostCommonSearches] = useState<string[]>([]);
  const [selectedChip, setSelectedChip] = useState("search");
  const [recommended, setRecommended] = useState<Resource[]>([]);

  useEffect(() => {
    setRecommended(RECOMMENDED);
  }, []);

  useEffect(() => {
    setMostCommonSearches([
      "dijkstra",
      "ordenação",
      "grafos",
      "laço for",
      "manchester",
      "inserção de bits",
    ]);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchQuery) {
        setSearchResult(SEARCH_RESULTS);
      } else {
        setSearchResult(undefined);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const goToSemesters = () => {
    navigate("/semesters");
  };

  const beginSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Stack sx={{ pt: 3, pb: 4, gap: 2 }}>
      <SBox>
        <Stack
          sx={{ maxWidth: "80vw", justifyContent: "center", gap: "0.3em" }}
          direction="row"
          flexWrap="wrap"
        >
          <Chip
            label="Pesquisar"
            variant={selectedChip == "search" ? "filled" : "outlined"}
            onClick={() => setSelectedChip("search")}
          />
          {SEMESTERS.map((semester) => (
            <Chip
              label={semester.name}
              size="medium"
              variant={selectedChip == semester.name ? "filled" : "outlined"}
              onClick={() => setSelectedChip(semester.name)}
            />
          ))}
        </Stack>

        <motion.div
          layout
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            zIndex: -20,
            alignItems: "center",
          }}
          animate={{
            height: searchQuery ? 0 : "18em",
            opacity: searchQuery ? 0 : 1,
          }}
        >
          <Stack direction="row">
            <img src={genieImage} style={{ maxWidth: "15vw" }} />

            <Box>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                GuideMe
              </Typography>
              <Typography variant="h4">Seus assuntos organizados</Typography>
              {selectedChip != "search" ? (
                <>
                  <br />
                  <br />
                  <Typography variant="subtitle1">
                    Digite para pesquisar em &#34;{selectedChip}&#34;
                  </Typography>
                </>
              ) : null}
            </Box>
          </Stack>

          <Typography variant="subtitle2">
            Pesquise qualquer termo, palavra-chave, semestre ou disciplina!
          </Typography>
        </motion.div>

        <TextField
          inputRef={inputRef}
          id="query"
          name="query"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          variant="standard"
          placeholder="Digite aqui para achar seu conteúdo!"
          sx={{
            width: "70%",
            input: {
              textAlign: "center!important",
            },
          }}
        />

        <Typography sx={{ textAlign: "center", display: "flex" }}>
          <Typography variant="caption" fontWeight="bold" sx={{ mr: 1 }}>
            Pesquisas mais comuns:
          </Typography>
          {mostCommonSearches.map((query) => (
            <Typography
              variant="caption"
              sx={{
                mr: 2,
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => beginSearch(query)}
            >
              {query}
            </Typography>
          ))}
        </Typography>

        <SlideDownArrow sx={{ color: theme.palette.primary.dark }} />
      </SBox>

      <AnimatePresence>
        {searchQuery === "" && (
          <motion.div
            initial={{ translateX: "-100vw", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box>
              <Typography variant="h6">❤️ Favoritos </Typography>

              <Grid container direction="row" spacing={2} sx={{ mb: 3 }}>
                {recommended.map(({ id, ...resource }, index) => (
                  <Grid item key={id} xs={2.4}>
                    <Resource id={id} {...resource} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography variant="h6">🌟 Mais populares </Typography>
              <Grid container direction="row" spacing={2}>
                {recommended.map(({ id, ...resource }, index) => (
                  <Grid item key={id} xs={2.4}>
                    <Resource id={id} {...resource} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 4 }}
              onClick={goToSemesters}
            >
              Ver todos
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchQuery === "" || (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchResults results={searchResult} />
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
};

export default Home;
