import React from "react";
import { nanoid } from 'nanoid'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);
import './App.css'
import logo1 from "./assets/logo1.png"
import lotrHero from "./assets/outFinalH.mp4"
import arrow from "./assets/arrow_drop_down.svg"
import gilist from "./assets/giList.json"
// import sec1 from "./assets/section/sec1.jpeg"
// import sec2 from "./assets/section/sec2.png"
// import sec3 from "./assets/section/sec3.png"
// import sec4 from "./assets/section/sec4.png"



// "grid-d"

export default function App() {
  const container = React.useRef<any>();
  const grid = React.useRef<any>(aaa("grid-d"));
  const grid2 = React.useRef<any>(aaa("grid-d2"));
  const grid3 = React.useRef<any>(aaa("grid-d3"));
  const grid4 = React.useRef<any>(aaa("grid-d4"));
  const vivladiRef = React.useRef(theText("VIVALDI412", "68", "arman1", [0, 40, 65, 100, 140, 182, 230, 248, 274, 282]));
  const armanRef = React.useRef(theText("Arman", "115", "arman2", [-2.9, 58, 108, 185, 235]));

  function aaa(className: string) {
    function getRandomIntInclusive(min: number, max: number) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    let temp = [];
    let same = 0;
    let res;
    let sum;
    for (let i = 1, j = 1; i <= 60; i++) {
      temp.push(
        // @ts-ignore

        <div className={className} id={"gi" + i} key={nanoid()}><img src={gilist[j][0].url} /><p className="gip">{gilist[j][0].name}</p></div>

        // <div className={name} id={"gi" + i} key={nanoid()}></div>
      )
      res = getRandomIntInclusive(1, 30)
      if (res !== j) {
        same = res;
      }
      else if (res === j) {
        same = getRandomIntInclusive(1, (30 - res))
      }
      // console.log("j=", j, "res=", res, "same=", same)
      j++
      sum = same - j
      if (sum < 0) {
        sum = sum * -1
      }
      if (sum > 10) {
        // console.log("sum=", sum, "res=", res, "same=", same, "j=", j)
        temp.push(
          // @ts-ignore
          <div className={className} id={"gi" + (i + 60)} key={nanoid()}><img src={gilist[same][0].url} /><p className="gip">{gilist[same][0].name}</p></div>
          // <div className={name} id={"gi" + i} key={nanoid()}></div>
        )
      }
      if (j > 30) { j = 1 }
    }
    // console.log(temp.length)
    // @ts-ignore
    return temp;
  }



  let tla = gsap.timeline({ paused: true, smoothChildTiming: true });
  useGSAP(
    () => {



      let tween2 = gsap.to(".scroll2", { top: 0, opacity: 1, duration: 2, delay: "500ms" }),
        // @ts-ignore
        st2 = ScrollTrigger.create({
          trigger: ".second-section",
          start: "top center",
          end: "max",
          animation: tween2,
          toggleActions: "play reset play reset"
        });
      let tween3 = gsap.to(".scroll3", { top: 0, opacity: 1, duration: 2, delay: "500ms" }),
        // @ts-ignore
        st3 = ScrollTrigger.create({
          trigger: ".third-section",
          start: "top center",
          end: "max",
          animation: tween3,
          toggleActions: "play reset play reset"
        });

      let tl = gsap.timeline({ smoothChildTiming: true, onComplete: function () { tl.reverse(0) }, onReverseComplete: function () { tl.restart() } });
      tl.addLabel("start", 0);
      tl.clear()
      // @ts-ignore overwrite: "auto",
      tl.to(".giw1", {
        x: "-15700", duration: 360, ease: "none", overwrite: true
      }, "start")
      tl.to(".giw2", {
        x: "-15700", duration: 360, ease: "none", runBackwards: true, overwrite: true
      }, "start")
      tl.to(".giw3", {
        x: "-15700", duration: 360, ease: "none", overwrite: true
      }, "start")
      tl.to(".giw4", {
        x: "-15700", duration: 360, ease: "none", runBackwards: true, overwrite: true
      }, "start")
      // @ts-ignore
      let st4 = ScrollTrigger.create({
        trigger: ".second-bridge",
        start: "top center",
        end: "max",
        animation: tl,
        toggleActions: "resume pause resume pause"
      });
      let tween4 = gsap.to(".scroll4", { top: 0, opacity: 1, duration: 1, delay: "500ms" }),
        // @ts-ignore
        st5 = ScrollTrigger.create({
          trigger: ".fourth-section",
          start: "top center",
          end: "max",
          animation: tween4,
          toggleActions: "play reset play reset"
        });
      let tween5 = gsap.to(".insetS", { y: 0, opacity: 1, duration: 1.3, delay: 1, stagger: 0.3, ease: 'back.out', overwrite: "auto" }),
        // @ts-ignore
        st6 = ScrollTrigger.create({
          trigger: ".fourth-section",
          start: "top center",
          end: "max",
          animation: tween5,
          toggleActions: "play pause play reset"
        });
      // @ts-ignore


      // @ts-ignore
      // tla.to(".arman", { opacity: 0, y: -50, duration: 0.01 })
      // tla.to("#arman1", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "back.out", duration: 0.1, stagger: 0.1 })
      // tla.to("#arman2A", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "elastic.out(2,0.3)", duration: 2 })
      // tla.to("#arman2", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "elastic.out(2,0.3)", duration: 1, stagger: 0.2 }, ">-90%")




      tla.to("#arman1", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "back.out(7)", duration: 0.5, stagger: 0.05 })
      tla.to("#arman2A", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "back.out(10)", duration: 0.5 }, ">-70%")
      tla.to("#arman2", { fill: "#f5f5f5", stroke: "#fca211", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0),0px 0px 10px rgb(255, 217, 0)", opacity: 1, ease: "back.out(10)", duration: 0.6, stagger: 0.1 }, ">-80%")
      // 

      tla.to("#arman1", { fill: "#a5a38c", stroke: "#aa7b31", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0,0),0px 0px 10px rgb(255, 217, 0,0)", opacity: 1, duration: 6, delay: 3 })
      tla.to("#arman2A", { fill: "#a5a38c", stroke: "#aa7b31", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0,0),0px 0px 10px rgb(255, 217, 0,0)", opacity: 1, duration: 3 }, "-=5")
      tla.to("#arman2", { fill: "#a5a38c", stroke: "#aa7b31", y: 0, textShadow: "0px 0px 8px rgb(255, 217, 0,0),0px 0px 10px rgb(255, 217, 0,0)", opacity: 1, duration: 4, stagger: 0.5 }, "-=5")


    },

    { dependencies: [container], scope: container }
  );


  function theText(text: string, y: string, id: string, space: any) {
    let temp = [];
    for (let i = 0; i < text.length; i++) {
      if (id === "arman2" && i === 0) {
        // @ts-ignore
        temp.push(<a key={nanoid()} href="https://github.com/vivaldi412" target="_blank"><text id={id + 'A'} className="arman" x={40 + space[i]} y={y}>{text[i]}</text></a>)
      }
      else {
        temp.push(<a key={nanoid()} href="https://github.com/vivaldi412" target="_blank"><text id={id} className="arman" x={40 + space[i]} y={y}>{text[i]}</text></a>)
      }
    }
    return temp
  }
  function armanAnimF() {
    tla.play(0)
  }





  return (
    <div ref={container} className="main-page">
      <div className="hero">
        <div id="videoWrapper">
          <video autoPlay muted loop id="lotrHero">
            <source src={lotrHero} type="video/webm" />
          </video>
        </div>
        <div className="navbar">
          <div style={{ display: "flex" }}>
            <img id="logo" src={logo1} alt="logo" />
            <div className="navbar-item" style={{ position: "relative" }}>
              <h3>yolo</h3>
              <img style={{ position: "absolute", left: "91px", top: "25px", width: "27px" }} src={arrow} />
              <div id="drop-down">
                <div id="dp-self"></div>
                <div id="dp-item">
                  <p>Today</p>
                  <p>Tomorrow</p>
                  <p>maybe next week</p>
                </div>
              </div>
            </div>

            <div className="navbar-item"><h3>Arman</h3></div>
            <div className="navbar-item"><h3>Aragorn</h3></div>
            <div className="navbar-item"><h3>more</h3></div>
          </div>
          <div className="navbar-item"><h3>info</h3></div>
        </div>
        <div className="hero-items">
          <div id="heroh1d">
            <h1 id="heroh1" style={{ fontSize: "5.5rem" }}>LORD OF THE RINGS</h1>
          </div>
          <div id="heroh23d">
            <h1 id="heroh2" style={{ fontSize: "3.5rem" }}>“True Masterpiece”</h1>
            <h1 id="heroh3" style={{ fontSize: "2.5rem" }}>“THE BEST SHIT YOU CAN WATCH.”</h1>
          </div>
        </div>
      </div>
      <div className="bridge">
        <p id="bridge-title" >Ring Ring Ring Ring Ring </p>
        <div className="bridge-items-wrapper">
          <div className="bridge-items" >
            <div id="bi1"></div>
            <div className="bit">
              <h2>Ewoyn</h2>
              <h1>yolo yolo yolo</h1>
              <p>yolo yolo yolo yoloy yolo yolo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
              </p>
            </div>
          </div>
          <div className="bridge-items">
            <div id="bi2"></div>
            <div className="bit" style={{ color: "f5f5f5" }}>
              <h2>Ewoyn</h2>
              <h1>yolo yolo yolo</h1>
              <p>yolo yolo yolo yoloy yolo yolo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
              </p>
            </div>
          </div>
          <div className="bridge-items">
            <div id="bi3"></div>
            <div className="bit">
              <h2>Ewoyn</h2>
              <h1>yolo yolo yolo</h1>
              <p>yolo yolo yolo yoloy yolo yolo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="backgroundWrapper"></div>
        <div className="second-section-items">
          <h2 className="scroll2">JOIN THE</h2>
          <h1 className="scroll2">Battle of the FREE PEOPLES</h1>
          <div id="line"></div>
          <p>the Fellowship of the Ring and the Nine Walkers, is a group of nine representatives from the free peoples of Middle-earth: Elves, Dwarves, Men, and Hobbits; and a Wizard. The group is described in the first volume of The Lord of the Rings, itself titled The Fellowship of the Ring. The number nine is chosen, as the book's author J. R. R. Tolkien states, to match and oppose the nine Black Riders or Ringwraiths.</p>
          <div id="button"><p id="bp">Read More</p></div>
        </div>
      </div>
      <div className="third-section">
        <div className="backgroundWrapper" id="bW3"></div>
        <div className="second-section-items">
          <h2 className="scroll3">WHO WILL YOU</h2>
          <h1 className="scroll3">CHOOSE?</h1>
          <div id="line"></div>
          <p>The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.</p>
          <div id="button"><p id="bp">Read More</p></div>
        </div>
      </div>
      <div className="second-bridge">
        <div className="backgroundWrapper" style={{ backgroundColor: "black", backgroundImage: "none", opacity: "1" }}></div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <div className="gridItems" >
            <div id="gridItemsBG"></div>
            <div className="giw1">
              {grid.current}
            </div>
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            <div className="giw2">
              {grid2.current}
            </div>
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            <div className="giw3">
              {grid3.current}
            </div>
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            <div className="giw4">
              {grid4.current}
            </div>
            <div id="gridItemsBGB"></div>
          </div>
        </div>
      </div>
      <div className="fourth-section">
        <div className="backgroundWrapper" id="bW4"></div>
        <div className="second-section-items">
          <div className="insetS" id="secp1">
          </div>
          <div className="insetS" id="secp2">
          </div>
          <div className="insetS" id="secp3" >
          </div>
          <div className="insetS" id="secp4">
          </div>
          <h2 className="scroll4">JOIN THE</h2>
          <h1 className="scroll4">Battle of the FREE PEOPLES</h1>
          <div id="line"></div>
          <p>the Fellowship of the Ring and the Nine Walkers, is a group of nine representatives from the free peoples of Middle-earth: Elves, Dwarves, Men, and Hobbits; and a Wizard. The group is described in the first volume of The Lord of the Rings, itself titled The Fellowship of the Ring. The number nine is chosen, as the book's author J. R. R. Tolkien states, to match and oppose the nine Black Riders or Ringwraiths.</p>
          <div id="button"><p id="bp">Read More</p></div>
        </div>
      </div>
      <div className="end-section">
        <div className="backgroundWrapper" id="bWE"></div>
        <div className="second-section-items" id="end-section-items">
          <svg id="arman-box" onPointerEnter={armanAnimF} xmlns="http://www.w3.org/2000/svg" width="400" height="150" viewBox="0 0 400 150" fill="none">
            <g transform="translate(10,12)">
              {vivladiRef.current}
              {armanRef.current}
            </g>
          </svg>
          <div id="line" style={{ width: "30%", opacity: 0.4 }}></div>
          <p>yo</p>
          <div id="button"><p id="bp">Read More</p></div>
        </div>
      </div>
    </div >
  );
}


