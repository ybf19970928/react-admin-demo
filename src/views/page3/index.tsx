import React, { FC, useState } from 'react';
import TestBtns from './components/testbbtns'
import TestComponent from './components/testComponens'
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}
export const ThemeContext = React.createContext(themes.light)

const Page3: FC = () => {
  const [theme, setThemes ] = useState(themes.dark)
  const changeThemes = ():void => {
    if (theme.background === '#222222'){
      setThemes(themes.light)
    }else{
      setThemes(themes.dark)
    }
  }
    return (
      <>
        <ThemeContext.Provider value={theme}>
            <TestBtns />
        </ThemeContext.Provider>
        <TestComponent />
        <button onClick={changeThemes}> 切换主题 </button>
      </>
    )
}
export default Page3