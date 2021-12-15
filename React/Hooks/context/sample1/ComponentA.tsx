import * as React from 'react';
import MyFunctionalComponents from './ComponetB';
import {SampleTextContext} from "./context";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { useStyles } from '.';
function Type() {
  const classes: Record<string, string> = useStyles({})
  const [sampleText, setSampleText] = React.useState("aaaa");

  return (
  //.Providerタグで囲まれた関数コンポーネント、またはクラス内から、SampleTextContextにアクセスできる。
  <>
  <div className={classes.root}>
  <br></br>
  <SampleTextContext.Provider value={sampleText} >
  <Button variant="contained" color="primary" onClick={()=>{setSampleText(sampleText + "a")}} className={classes.button}>+ボタン</Button>
  <Button variant="contained" color="primary" onClick={()=>{setSampleText(sampleText.slice(0,-1))}} className={classes.button}>-ボタン</Button>
      <div className="App">
	
        <MyFunctionalComponents />
	
      </div>

    </SampleTextContext.Provider>
  </div>
  </>
  );
}

export default Type;
