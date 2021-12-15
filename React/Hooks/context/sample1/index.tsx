import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Type from './ComponentA'
import { makeStyles, Theme, StyleRules } from "@material-ui/core/styles";
interface IThemeContext {
	dark: boolean;
	toggleDark?: () => void;
  }
  const defaultState = {
	dark: false,
  };
  export const useStyles = makeStyles((theme: Theme) => ({
	root: { 
		textAlign:'center'
    },
	button:{
		marginRight:100,
		marginLeft:100
	}
}))
  const ThemeContext = React.createContext<IThemeContext>(defaultState);
  
  const ThemeProvider: React.FC = ({ children }) => {
	const [dark, setDark] = React.useState(defaultState.dark);
  
	const toggleDark = () => {
	  setDark(!dark);
	};

	return (
	  <ThemeContext.Provider
		value={{
		  dark,
		  toggleDark,
		}}
	  >
		{children}
	  </ThemeContext.Provider>
	);
  };
  
  const ToggleDarkMode = () => {
	const classes: Record<string, string> = useStyles({})
	const { dark, toggleDark } = React.useContext(ThemeContext);
	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	  e.preventDefault();
	  toggleDark();
	};
	if(dark==false){
		return (
			<>
			<div className={classes.root}>
			  <h1 >{dark ? "🌙" : "🌞"}</h1>
			  <button onClick={handleOnClick} className={classes.root}>To dark mode</button>
			</div>
			</>
		  );
	}else{
		return (
			<>
			<div className={classes.root}>
			  <h1>{dark ? "🌙" : "🌞"}</h1>
			  <button onClick={handleOnClick}>To light mode</button>
			</div>
			</>
		  );
	}
  };
  
  const App = () => {
	return (
		<>
		<ThemeProvider>
		<ToggleDarkMode />
	  </ThemeProvider>
	  <Type />
		</>
	);
  };
ReactDOM.render(
	<App />,
	document.getElementById("root")
	);
