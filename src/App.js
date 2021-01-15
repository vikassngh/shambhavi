import React,{useEffect,useState} from 'react';
import MainPage from "./mainpage";
import Player from "./Components/audioPlayer";

export default function App() {
    const [songs] = useState([
        {
            title: "MMMH",
            src: "/mmmh.mp3"
        },
        {
            title: "DYNAMITE",
            src: "/Dynamite.mp3"
        },
        {
            title: "LEVITATING",
            src: "/levitating.mp3"
        },
        {
            title: "NO MAKEUP",
            src: "/NOMAKEUP.mp3"
        },
        {
            title: "LIFE GOES ON",
            src: "/LIFEGOESON.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <div className="container" >
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
            <MainPage/>
        </div>
    )
}
