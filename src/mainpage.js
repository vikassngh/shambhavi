import React from "react";
import "./App.scss";
import Particles from "react-particles-js";

function play() {
    const myVideo = document.getElementById("myVideo");
    const myAudio = document.getElementById("myAudio");
    myAudio.pause();
    myVideo.play();
    myVideo.loop="true";
}
function stop() {
    const myVideo = document.getElementById("myVideo");
    const myAudio = document.getElementById("myAudio");
    myAudio.play();
    myVideo.pause();
}

class MainPage extends React.Component{
    render(){
        return(
            <div className="container">
                <Particles
                    canvasClassName="example"
                    height="260vh"
                    width="98%"
                    params={{
                        particles: {
                            number: {
                                value: 400,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#8a0494"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 10,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 500,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 2
                            },
                            move: {
                                enable: true,
                                speed: 10,
                                direction: "bottom",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 0.5
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 4,
                                    duration: 0.3,
                                    opacity: 1,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.1
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
                <main className="main">
                    <div className="photo">
                        <img src={"/shaam/1.jpg"} style={{height:"29.5rem",width:"20rem",padding:"1rem 1rem 0 1rem"}}/>
                        <div className="hash">#20yearsyoung</div>
                    </div>
                    <div className="text">
                        <div>생일 축하 해요 </div>
                        <div>Happy 20th Birthday!</div>
                    </div>
                </main>
                <div className="quoteText">
                    You have to get older,but you don’t have to grow up.
                </div>
                <div className="page2">
                    <ul>
                        <li>
                            <img src="/shaam/8.jpg" alt="Landscape"/>
                        </li>
                        <li>
                            <img src="/shaam/2.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                YOU
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/4.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                DON'T
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/9.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                HAVE
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/6.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                TO
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/3.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                CHANGE
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/7.jpg" alt="Landscape"/>
                        </li>
                        <li>
                            <img src="/shaam/5.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                A
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/10.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                THING,
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/11.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                THE
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/13.jpg" alt="Landscape"/>
                        </li>
                        <li>
                            <img src="/shaam/12.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                WORLD
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/14.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                COULD
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/15.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                CHANGE
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/16.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                IT'S
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/22.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                HEART.
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/18.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                NO
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/19.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                SCARS
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/20.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                TO
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/17.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                YOUR
                            </div>
                        </li>
                        <li>
                            <img src="/shaam/21.jpg" alt="Landscape"/>
                            <div className="imgHash">
                                BEAUTIFUL!
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="page3">
                    <img src={"/happy.gif"} alt="Landscape"/>
                </div>
                <div className="page4">
                    <div className="quoteText">
                        Work hard & Eat lots of cake.
                    </div>
                    <div>
                        <img src={"/cake.gif"} alt="Landscape"/>
                        <img src={"/cake.gif"} alt="Landscape"/>
                    </div>
                </div>
                <div className="page5">
                    <div className="quoteText">
                        Forget the past; look forward to the future,the best things are yet to come.
                    </div>
                    <div className="container2">
                        <div className="card">
                            <img src="/shaam/katy1.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <img src="/shaam/kid2.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <video id="myVideo" src={"/shaam/didi.mp4"} style={{height:"100%",width:"100%",padding:" 1rem 1rem 0 1rem"}} onMouseEnter={play} onMouseLeave={stop} />
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <img src="/shaam/24.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <img src="/shaam/yash2.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <img src="/shaam/yash.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                        <div className="card">
                            <img src="/shaam/aryan.jpg" alt="Landscape"/>
                            <div className="card__head">blah blah</div>
                        </div>
                    </div>
                </div>
                <div className="page6">
                    <div className="quoteText">
                        And  JUNGOO Loves You, Too <img src={'/right.png'} className="emoji" alt="Landscape"/><img src={'/left.png'} alt="Landscape" className="emoji"/>
                    </div>
                    <div className="jungoo">
                        <div className="jungoo1">
                            <img src={"/jungoo3.jpg"} alt="Landscape" style={{height:"83%",width:"100%",padding:"1rem 1rem 0 1rem"}}/>
                            <div className="hash" >Even if we have hard times, it matters a lot when we are happy.</div>
                        </div>
                        <img src={"/purpleyou.png"} />
                        <div className="jungoo2">
                            <img src={"/jungoo4.jpg"} alt="Landscape" style={{height:"83%",width:"100%",padding:"1rem 1rem 0 1rem"}}/>
                            <div className="hash">I PURPLE YOU</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage;
