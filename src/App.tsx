import { startTransition, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathsRouter } from "./PathsRouter";
import { Transition } from "react-transition-group";
import Nav from "./components/Nav/Nav";
import SignUp from "./components/Popup/SignUp";
import PriceTable from "./components/Popup/PriceTable";
import "./App.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/scss/effect-coverflow";

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // Пользователь использует темную тему
  document.documentElement.classList.add("dark");
  document.documentElement.dataset.theme = "dark";
} else {
  // Пользователь использует светлую тему
  document.documentElement.classList.remove("dark");
  document.documentElement.dataset.theme = "light";
}

function App() {
  const location = useLocation();
  const [className, setClassName] = useState("");

  const sign = useSelector(
    (state: { popup: { reception: boolean } }) => state.popup.reception
  );

  const priceTable = useSelector(
    (state: { popup: { priceTable: boolean } }) => state.popup.priceTable
  );

  useEffect(() => {
    startTransition(() => {
      setClassName(
        `${
          location.pathname === "/adi-ved-react-/employees"
            ? ""
            : "sm:container oldmb:px-1 sm:mx-auto sm:px-2"
        }`
      );
    });
  }, [location.pathname]);

  return (
    <div className="App">
      <div>
        <header className="md:mx-3 xl:mx-6">
          <Nav />
        </header>
      </div>
      <Transition key={location.pathname} timeout={250} classnames="fade">
        <div className="text-black transition-colors duration-1000 dark:text-white">
          <div className={className}>
            <div>
              <PathsRouter />
            </div>
            {sign ? <SignUp /> : null}
            {priceTable ? <PriceTable /> : null}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default App;
