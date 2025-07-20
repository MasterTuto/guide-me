import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeChangerContext } from "../../context/ThemeChanger";

import { SEMESTERS } from "../../constants/semesters";

const Header = () => {
  const searchInputRef = useRef<HTMLInputElement>();
  const { currentTheme, setTheme } = useContext(ThemeChangerContext);
  const navigate = useNavigate();

  const [showDrawer, setShowDrawer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={() => setShowDrawer(true)}>
          <MenuIcon color="action" />
        </IconButton>

        <Link to="/" style={{ all: "unset", cursor: "pointer", flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            GuideMe
          </Typography>
        </Link>

        <Collapse in={showSearchInput}>
          <TextField
            inputRef={searchInputRef}
            value={searchQuery}
            onChange={(evt) => setSearchQuery(evt.target.value)}
            variant="filled"
            color="primary"
            sx={{ input: { backgroundColor: "#fff9" } }}
            onBlur={() => {
              if (searchQuery === "") setShowSearchInput(false);
            }}
          />
        </Collapse>

        {!showSearchInput ? (
          <Fade in={true}>
            <IconButton
              onClick={() => {
                setTimeout(() => searchInputRef.current?.focus(), 200);
                setShowSearchInput(true);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Fade>
        ) : (
          <Fade in={true}>
            <IconButton
              onClick={() => {
                setSearchQuery("");
                setShowSearchInput(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Fade>
        )}

        <IconButton
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          {currentTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <Box
          sx={{ width: 250, pl: 2, pr: 2 }}
          role="presentation"
          onClick={() => setShowDrawer(false)}
          onKeyDown={() => setShowDrawer(false)}
        >
          <List>
            {SEMESTERS.map((semester) => (
              <ListItem key={semester.id} disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/semester/${semester.id}`)}
                >
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText primary={semester.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
