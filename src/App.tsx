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



function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


export default function App() {
  const container = React.useRef<any>();
  function aaa(name: string) {
    let temp = [];
    let same = 0;
    let res;
    let sum;
    for (let i = 1, j = 1; i <= 250; i++) {
      temp.push(
        // @ts-ignore
        <div className={name} id={"gi" + i} key={nanoid()}><img src={gilist[j][0].url} /><p className="gip">{gilist[j][0].name}</p></div>
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
          <div className={name} id={"gi" + i} key={nanoid()}><img src={gilist[same][0].url} /><p className="gip">{gilist[same][0].name}</p></div>
          // <div className={name} id={"gi" + i} key={nanoid()}></div>
        )
      }
      if (j > 30) { j = 1 }
    }
    // console.log(temp.length)
    return temp;
  }



  useGSAP(
    () => {

      let tween2 = gsap.to(".scroll2", { top: 0, opacity: 1, duration: 2, delay: "500ms" }),
        st2 = ScrollTrigger.create({
          trigger: ".second-section",
          start: "top center",
          end: "max",
          animation: tween2,
          toggleActions: "play reset play reset"
        });
      let tween3 = gsap.to(".scroll3", { top: 0, opacity: 1, duration: 2, delay: "500ms" }),
        st3 = ScrollTrigger.create({
          trigger: ".third-section",
          start: "top center",
          end: "max",
          animation: tween3,
          toggleActions: "play reset play reset"
        });
      let tl = gsap.timeline();
      // @ts-ignore
      tl.to(".grid-d", {
        x: "-=2000", duration: 35, repeat: -1, repeatRefresh: true, overwrite: "auto", ease: "none"
      }, 0)
      tl.to(".grid-d2", {
        x: "-=2000", duration: 40, repeat: -1, repeatRefresh: true, overwrite: "auto", ease: "none", runBackwards: true,
      }, 0)
      tl.to(".grid-d3", {
        x: "-=2000", duration: 35, repeat: -1, repeatRefresh: true, overwrite: "auto", ease: "none"
      }, 0)
      tl.to(".grid-d4", {
        x: "-=2000", duration: 40, repeat: -1, repeatRefresh: true, overwrite: "auto", ease: "none", runBackwards: true,
      }, 0)
      let st4 = ScrollTrigger.create({
        trigger: ".second-bridge",
        start: "top center",
        end: "max",
        animation: tl,
        toggleActions: "resume pause resume pause"
      });

    },
    { scope: container }
  );


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
            <h1 id="heroh1" style={{ fontSize: "7rem" }}>LORD OF THE RINGS</h1>
          </div>
          <div id="heroh23d">
            <h1 id="heroh2" style={{ fontSize: "4rem" }}>“True Masterpiece”</h1>
            <h1 id="heroh3" style={{ fontSize: "3rem" }}>“THE BEST SHIT YOU CAN WATCH.”</h1>
          </div>
          {/* <p>Aragorn</p>
          <p>Frodo</p>
          <p>THE RING</p>
          <p>THE RING</p>
          <p>THE RING</p>
          <p>THE RING</p>
          <p>THE RING</p>
          <p>THE RING</p> */}
        </div>
      </div>
      <div className="bridge">
        <p style={{ fontSize: "1.3rem", margin: "15px 15px 15px 67px" }}>Ring Ring Ring Ring Ring Ring Ring Ring Ring Ring Ring Ring Ring</p>
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
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
              </p>
            </div>
          </div>
          <div className="bridge-items">
            <div id="bi2"></div>
            <div className="bit">
              <h2>Ewoyn</h2>
              <h1>yolo yolo yolo</h1>
              <p>yolo yolo yolo yoloy yolo yolo
                yolo yolo yolo yoloy yolo yoloyo
                yolo yolo yolo yoloy yolo yoloyo
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
        <div className="backgroundWrapper" style={{ backgroundImage: "url(/src/assets/lotr216.webp)" }}></div>
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
            {aaa("grid-d")}
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            {aaa("grid-d2")}
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            {aaa("grid-d3")}
            <div id="gridItemsBGB"></div>
          </div>
          <div className="gridItems" style={{ marginTop: "5px" }}>
            <div id="gridItemsBG"></div>
            {aaa("grid-d4")}
            <div id="gridItemsBGB"></div>
          </div>
          {/* <button onClick={() => document.querySelector("#gi9 > img")}>pppppppppppp</button> */}
        </div>
      </div>
      <div className="fourth-section">
        <div className="backgroundWrapper" style={{ backgroundImage: "url(/src/assets/lotr213.webp)" }}></div>
        <h1>fourth section</h1>
      </div>
      <div className="end-section">
        <div className="backgroundWrapper" style={{ backgroundImage: "url(/src/assets/lotr214.webp)" }}></div>
        <h1>end section</h1>
      </div>
    </div >
  );
}


