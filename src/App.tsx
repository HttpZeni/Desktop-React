import { useEffect } from "react";
import Desktop from "./views/desktop"

function App() {

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  return (
    <>
      <div className="bg-background-primary w-screen h-screen">
        <Desktop/>
      </div>
    </>
 )
}

export default App;