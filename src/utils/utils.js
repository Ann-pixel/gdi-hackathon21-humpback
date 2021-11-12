import aS from "../sounds/a.mp3";
import bS from "../sounds/b.mp3";
import cS from "../sounds/c.mp3";
import dS from "../sounds/d.mp3";
import eS from "../sounds/e.mp3";
import fS from "../sounds/f.mp3";
import gS from "../sounds/g.mp3";
import hS from "../sounds/h.mp3";
import whale from "../sounds/whale.mp3";
export function timeout(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

const a = new Audio(aS);
const b = new Audio(bS);
const c = new Audio(cS);
const d = new Audio(dS);
const e = new Audio(eS);
const f = new Audio(fS);
const g = new Audio(gS);
const h = new Audio(hS);
export const whaleSound = new Audio(whale);

export const allSounds = [a, b, c, d, e, f, g, h];
