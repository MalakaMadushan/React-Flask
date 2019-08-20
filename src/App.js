import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import LoginIn from './Login.js';
import SignUp from './SignUp.js';
import logo from './react-and-flask.png';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function App() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}><Link to="/home" style= {{ textDecoration: 'none'}} >
            Home</Link>
          </Typography>
          {/* home */}
          <Link to="/login" style= {{ textDecoration: 'none'}} ><Button>Login</Button></Link>
          <Link to="/SignUp" style= {{ textDecoration: 'none'}} ><Button >SignUp</Button></Link>
          
          
        </Toolbar>
      </AppBar>
      <Route path="/home" component={home}></Route>
      <Route path="/login" component={LoginIn}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      
    </div>
    </Router>
  );
}


function home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <img src={logo} width="500" height="350" />
    </div>
  );
}

// function SignUp() {
//   return (
//     <div className="App">
//       <h1>Welcome</h1>
//     </div>
//   );
// }

export default App;
