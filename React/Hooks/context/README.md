# コード１

context.tsx
```typescript
import React from 'react';

export const SampleTextContext = React.createContext("aaaaa");
```

・関数コンポーネントでの利用

________________________________________________________________________________________________________________________________


関数コンポーネントで値を取得するには、コンテキストのConsumerタグを使います。


./components/MyFunctionalComponents.tsx
```tsx
import React from "react";
import { SampleTextContext } from "../contexts";

const MyFunctionalComponents = () => {
    return (
        <SampleTextContext.Consumer>
            {value => {
                return(
                    <div>{value}</div>
                )
            }}
        </SampleTextContext.Consumer>
    )
}

export default MyFunctionalComponents;
```

Consumerタグの```children```要素はコンテキストの値を受け取ってReactノードを返す関数である必要がある。


valueの値が変わると自動的に再レンダリングされる。


・クラスコンポーネントでの利用

________________________________________________________________________________________________________________________________

./components/MyClassComponent.tsx
```tsx
import React from "react";
import {SampleTextContext} from "../contexts";

export default class MyClassComponents extends React.Component<{},{text:string}>{
    static contextType = SampleTextContext;
    render(){
        return (
            <div>
               {this.context}
            </div>
        )
    }
}
```

・Providerの提供


_________________________________________________________________________________________________________________________________

コンポーネントがContextの値を読み取るには、そのコンポーネントの階層関係の親要素にあたるどこかでContextのProviderタグを呼び出す必要がある。


ここでは、上で作成した2つのコンポーネントをProviderで包んだうえでさらに、Contextの値を変更するボタンを作成してみます。

App.tsx
```tsx
import React from 'react';
import MyClassComponent from "./components/MyClassComponents";
import MyFunctionalComponent from "./components/MyFunctionalComponent";
import {SampleTextContext} from "./contexts";
function App() {
  const [sampleText, setSampleText] = React.useState("aaaa");

  return (
    <SampleTextContext.Provider value={sampleText}>
      <button onClick={()=>{setSampleText(sampleText + "a")}}>ボタン</button>
      <div className="App">
        <MyClassComponent />
        <MyFunctionalComponent />
      </div>
    </SampleTextContext.Provider>
  );
}

export default App;
```

ボタンをクリックするたびに```SampleTextContext```の値が変更される。

子要素の``````と``````は値の変更をサブスクライブし、再レンダリングされることを確認できる。

# コード２

AppContext.tsx
```tsx
mport * as React from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

```

PostInfo.tsx
```tsx
import * as React from "react";
import { AppContextConsumer } from "./AppContext";

export const PostInfo = () => (
  <AppContextConsumer>
    {appContext =>
      appContext && (
        <div>
          Name: {appContext.name} <br />
          Author: {appContext.author} <br />
          Url: {appContext.url}
        </div>
      )
    }
  </AppContextConsumer>
);
```

index.tsx
```tsx
import * as React from "react";
import { render } from "react-dom";
import { AppContextInterface, AppContextProvider } from "./AppContext";
import { PostInfo } from './PostInfo';

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com"
};

const Post = () => (
  <div>
    <h2>Post info</h2>
    <PostInfo />
  </div>
);

export const App = () => (
  <AppContextProvider value={sampleAppContext}>
    <Post />
  </AppContextProvider>
);

render(<App />, document.getElementById("root"));

```

# コード３

```tsx
interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

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
  const { dark, toggleDark } = React.useContext(ThemeContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark();
  };
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ToggleDarkMode />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```
