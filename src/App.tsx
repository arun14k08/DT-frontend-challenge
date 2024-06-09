import { useEffect, useState } from "react";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import NoticeBoard from "./components/NoticeBoard";
import Hero from "./components/Hero";

const App = () => {
    const [isBoardOpen, setIsBoardOpen] = useState(false);
    const toggleBoardOpen = (ev: MouseEvent, position: string) => {
        ev.preventDefault();
        if (position === "outer" && !isBoardOpen) return;
        setIsBoardOpen(!isBoardOpen);
    };
    return (
        <div onClick={(ev) => toggleBoardOpen(ev, "outer")}>
            <header>
                <Navbar />
            </header>
            <main>
                <aside>
                    <Board isOpen={isBoardOpen} toggleOpen={toggleBoardOpen} />
                    <NoticeBoard />
                </aside>
                <section className="mx-[187px]">
                  <Hero/>
                </section>
            </main>
        </div>
    );
};

export default App;
