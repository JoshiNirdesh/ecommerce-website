import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


useContext
const App = () => {
  const name = useContext(ThemeContext);

  return (

    <div>
      {name}
    </div>
  )
}

export default App
