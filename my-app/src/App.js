import React, { useEffect, useState } from "react";
import Header from "./layouts/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PromoPage from "./pages/PromoPage";
import SharePage from "./pages/SharePage";
import DownloadPage from "./pages/DownloadPage";
function App() {
    const [scrollPosition, setScrollPosition] = useState();
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const toggleClass = () => {
        const elementNav = document.getElementById("navbar__container");
        const elementNavCollapse = document.getElementById("navbar-collapse");
        if (scrollPosition > 70.5) {
            elementNav.classList.add("bg-color");
            elementNavCollapse.classList.add("bg-color");
        } else {
            elementNav.classList.remove("bg-color");
            elementNavCollapse.classList.remove("bg-color");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        toggleClass();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition > 70.5]);

    return (
        <div className="App">
            <Header />
            <HomePage />
            <PromoPage />
            <AboutPage />
            <SharePage />
            <DownloadPage />
        </div>
    );
}

export default App;
