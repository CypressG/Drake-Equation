/* eslint-disable no-param-reassign */
import p5 from "p5";

const [CanvasWidth, CanvasHeight] = [800, 900];
const Rstar = 1; // the average rate of star formation in our Galaxy
const fp = 0.2; // the fraction of those stars that have planets
const ne = 1; //  the average number of planets that can potentially support life per star that has planets
const fl = 1; // the fraction of planets that could support life that actually develop life at some point
const fi = 1; // the fraction of planets with life that actually go on to develop intelligent life (civilizations)
const fc = 0.2; // the fraction of civilizations that develop a technology that releases detectable signs of their existence into space
const L = 1000000; // the length of time for which such civilizations release detectable signals into space

const drakeEquation = Rstar * fp * ne * fl * fi * fc * L;

const planets = [];

const sketch = (s) => {
  function Planet() {
    this.x = Math.floor(Math.random() * CanvasWidth);
    this.y = Math.floor(Math.random() * CanvasHeight);
    this.diameter = Math.floor(Math.random() * 30);
    this.color = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    this.display = () => {
      s.fill(this.color);
      s.circle(this.x, this.y, this.diameter);
    };
  }

  s.setup = () => {
    s.createCanvas(CanvasWidth, CanvasHeight);
    for (let i = 0; i < drakeEquation; i += 1) planets.push(new Planet());
  };

  s.draw = () => {
    // Red Green Blue min - 0 max 256
    s.background(18, 35, 41);
    for (let i = 0; i < planets.length; i += 1) {
      planets[i].display();
    }
  };
};

const sketchInstance = new p5(sketch);
