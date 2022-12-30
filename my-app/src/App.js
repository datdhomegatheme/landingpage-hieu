import React, { useEffect, useState } from "react";
import Header from "./layouts/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PromoPage from "./pages/PromoPage";
import SharePage from "./pages/SharePage";
function App() {
    const [scrollPosition, setScrollPosition] = useState();
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const togglerClass = () => {
        const element = document.getElementById("nav");
        if (scrollPosition > 70.5) {
            element.classList.add("bg-color");
        } else {
            element.classList.remove("bg-color");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        togglerClass();
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
        </div>
    );
}

export default App;
