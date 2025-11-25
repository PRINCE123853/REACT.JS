import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./assets/Components/ChildA";

//create Context
const USerContext = createContext();
const ThemeContext = createContext();

//step 2 wrap all the child inside a provider
// step 3 pass value
// step 4 consumer ke andar jakar consume kar lo
function App() {
  const [user, setUser] = useState({ name: "LOVE" });
  const [theme, setTheme] = useState("light");

  return (
    <USerContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </USerContext.Provider>

    /* <>
     <USerContext.Provider  value={user}>
      <ChildA/> 
    </USerContext.Provider>
     </>  */
  );
}

export default App;
export { USerContext };
export { ThemeContext };
