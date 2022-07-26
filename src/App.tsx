import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-off-white1 dark:bg-blue3 min-h-screen flex items-center justify-center pt-10 pb-10 font-helvetica">
      <div className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-y-6 gap-x-6 grid-flow-row-dense content-center">
        {[...Array(7)].map((elt) => (
          <div className="bg-blue3 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2 overflow-y-auto">
            <ul className=" text-left text-off-white1 m-0 pl-5 pt-1 before:block before:absolute left-0 w-1 h-3 border-solid border-teal-600 relative list-none mb-2">
              <li className="font-black text-lg underline underline-offset-4 decoration-2 decoration-off-white1 text-center">
                work
              </li>
              <li>
                <a href="https://stackoverflow.com">stackoverflow</a>
              </li>
              <li>
                <a href="https://github.com">github</a>
              </li>
              <li>
                <a href="https://gist.github.com/timothypholmes">gists</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
