import { fade, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    width: "60%",
    position: "relative",
    borderRadius: "200px",
    backgroundColor: fade(theme.palette.common.white, 0.1),
    marginRight: 0,
  },
  scan: {
    width: "34%",
    position: "relative",
    borderRadius: "200px",
    backgroundColor: fade(theme.palette.common.white, 0.1),
    marginRight: "20%",
  },
  searchIcon: {
    color: "white",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputSearchBar: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "white",
    // vertical padding + font size from searchIcon
    marginRight: `calc(1em + ${theme.spacing(3.5)}px)`,
    marginLeft: "1em",
    borderBottom: "1px solid",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  inputScanBar: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "white",
    // vertical padding + font size from searchIcon
    marginRight: `calc(1em + ${theme.spacing(3.5)}px)`,
    marginLeft: "1em",
    // borderBottom: "1px solid",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default useStyles;
