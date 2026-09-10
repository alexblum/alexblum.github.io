/* ---------- Umka und das große Abenteuer ---------- */

/* --- Sky --- */
let _skyId=0;
function skyBg(sky){
  const gid='skyG'+(++_skyId);
  const g = sky==='day' ? ['#9fd8ef','#eaf9ff']
          : sky==='dusk' ? ['#f9c784','#ef8f6e']
          : ['#16213f','#0b1226'];
  return `<defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${g[0]}"/><stop offset="100%" stop-color="${g[1]}"/>
    </linearGradient>
  </defs><rect width="400" height="230" fill="url(#${gid})"/>`;
}
function sun(x=44,y=40){
  let rays='';
  for(let i=0;i<8;i++){
    const a=i/8*Math.PI*2;
    rays+=`<line x1="${(x+Math.cos(a)*19).toFixed(1)}" y1="${(y+Math.sin(a)*19).toFixed(1)}" x2="${(x+Math.cos(a)*25).toFixed(1)}" y2="${(y+Math.sin(a)*25).toFixed(1)}" stroke="#f6c667" stroke-width="2.5" stroke-linecap="round"/>`;
  }
  return `<circle cx="${x}" cy="${y}" r="15" fill="#f6c667"/>${rays}`;
}
function cloud(x,y,s=1){
  return `<g opacity=".9" transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="22" ry="10" fill="#ffffff"/>
    <ellipse cx="-14" cy="4" rx="14" ry="8" fill="#ffffff"/>
    <ellipse cx="15" cy="4" rx="15" ry="9" fill="#ffffff"/>
  </g>`;
}
function stars(n=18){
  return Array.from({length:n}).map((_,i)=>{
    const x=(i*53.7)%390+5, y=(i*37.3)%105+8, r=(i%3===0)?1.8:1.1;
    return `<circle class="star" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#fff3d0" style="animation-delay:${(i%5)*0.5}s"/>`;
  }).join('');
}
function moon(x=340,y=42){
  return `<circle cx="${x}" cy="${y}" r="26" fill="#f6c667" opacity=".25"/>
    <circle cx="${x}" cy="${y}" r="17" fill="#f6c667"/>
    <circle cx="${x-5}" cy="${y-4}" r="3" fill="#e0b355" opacity=".5"/>
    <circle cx="${x+4}" cy="${y+5}" r="2.2" fill="#e0b355" opacity=".45"/>`;
}

/* --- Ground --- */
function ground(sky, place){
  const top = sky==='night' ? '#173325' : place==='forest' ? '#2c5a3f' : '#6fae7f';
  const bot = sky==='night' ? '#0f1a33' : place==='forest' ? '#1e4531' : '#55966b';
  return `<path d="M0,172 Q100,156 200,170 T400,166 V230 H0 Z" fill="${top}"/>
          <path d="M0,194 Q120,178 230,194 T400,188 V230 H0 Z" fill="${bot}"/>`;
}
function flower(x,y,c='#e8735c'){
  return `<g><line x1="${x}" y1="${y}" x2="${x}" y2="${y-9}" stroke="#3f7d5a" stroke-width="1.5"/>
    <circle cx="${x}" cy="${y-11}" r="3.4" fill="${c}"/>
    <circle cx="${x}" cy="${y-11}" r="1.4" fill="#f6c667"/></g>`;
}

/* --- Big oak tree with branch --- */
function tree(){
  return `<g>
    <path d="M294,178 C292,140 291,112 297,84 L309,84 C313,112 311,140 309,178 Z" fill="#5c3a20"/>
    <path d="M297,102 L272,90" stroke="#5c3a20" stroke-width="5" stroke-linecap="round"/>
    <path d="M308,98 L330,88" stroke="#5c3a20" stroke-width="5" stroke-linecap="round"/>
    <circle cx="300" cy="62" r="30" fill="#2f6b45"/>
    <circle cx="272" cy="86" r="19" fill="#2f6b45"/>
    <circle cx="330" cy="82" r="19" fill="#35784e"/>
    <circle cx="310" cy="52" r="16" fill="#35784e"/>
  </g>`;
}
function bush(x=60,y=170,s=1){
  return `<g transform="translate(${x},${y}) scale(${s})">
    <circle cx="-12" cy="0" r="13" fill="#3f7d5a"/>
    <circle cx="2" cy="-6" r="15" fill="#4c8a67"/>
    <circle cx="14" cy="1" r="12" fill="#3f7d5a"/>
  </g>`;
}
function fern(x=90,y=176){
  return `<g stroke="#3f7d5a" stroke-width="2" fill="none" stroke-linecap="round">
    <path d="M${x},${y} q-6,-16 -16,-20"/><path d="M${x},${y} q0,-18 -4,-26"/><path d="M${x},${y} q8,-16 16,-18"/>
  </g>`;
}
function rock(x=150,y=176){
  return `<ellipse cx="${x}" cy="${y-5}" rx="14" ry="9" fill="#8d99a6"/>
    <ellipse cx="${x-4}" cy="${y-8}" rx="6" ry="4" fill="#a7b2bd"/>`;
}
function fence(x=40,y=150){
  let p='';
  for(let i=0;i<4;i++){
    p+=`<rect x="${x+i*16}" y="${y}" width="6" height="34" rx="2" fill="#b07a45"/>`;
  }
  p+=`<rect x="${x-4}" y="${y+8}" width="60" height="4" rx="2" fill="#c89058"/>
      <rect x="${x-4}" y="${y+22}" width="60" height="4" rx="2" fill="#c89058"/>`;
  return p;
}
function house(){
  return `<g>
    <rect x="30" y="112" width="76" height="64" fill="#f2d28a"/>
    <polygon points="24,112 112,112 68,78" fill="#c85843"/>
    <rect x="58" y="140" width="20" height="36" rx="2" fill="#8a5a2b"/>
    <circle cx="74" cy="159" r="1.5" fill="#f6c667"/>
    <rect x="38" y="124" width="15" height="13" fill="#fff6e6" stroke="#8a5a2b" stroke-width="1.5"/>
    <rect x="84" y="124" width="15" height="13" fill="#fff6e6" stroke="#8a5a2b" stroke-width="1.5"/>
  </g>`;
}
function doghouse(x=50,y=176){
  return `<g>
    <rect x="${x}" y="${y-46}" width="64" height="46" fill="#7a4a2b"/>
    <polygon points="${x-6},${y-46} ${x+70},${y-46} ${x+32},${y-70}" fill="#c85843"/>
    <path d="M${x+18},${y} v-22 a14,14 0 0 1 28,0 v22 Z" fill="#241610"/>
  </g>`;
}
function girl(x=128,hug=false){
  return `<g>
    <path d="M${x-9},${y0(x)-25} L${x+9},${y0(x)-25} L${x+14},${y0(x)} L${x-14},${y0(x)} Z" fill="#e8735c"/>
    ${hug ? `<path d="M${x-8},${y0(x)-22} q-8,4 -6,12" stroke="#f0c99b" stroke-width="4" fill="none" stroke-linecap="round"/>
             <path d="M${x+8},${y0(x)-22} q8,4 6,12" stroke="#f0c99b" stroke-width="4" fill="none" stroke-linecap="round"/>` : ''}
    <circle cx="${x}" cy="${y0(x)-33}" r="8" fill="#f0c99b"/>
    <path d="M${x-8},${y0(x)-35} a8,8 0 0 1 16,0 l-3,-6 a8,6 0 0 0 -10,0 Z" fill="#6b4a2c"/>
    <circle cx="${x-4}" cy="${y0(x)-36}" r="1.8" fill="#6b4a2c"/>
    <circle cx="${x+4}" cy="${y0(x)-36}" r="1.8" fill="#6b4a2c"/>
    <circle cx="${x-3}" cy="${y0(x)-32}" r="1" fill="#2b2a28"/>
    <circle cx="${x+3}" cy="${y0(x)-32}" r="1" fill="#2b2a28"/>
    <path d="M${x-2},${y0(x)-28.5} q2,1.5 4,0" stroke="#2b2a28" stroke-width="1" fill="none" stroke-linecap="round"/>
  </g>`;
}
function y0(x){ return 175; }
function bowl(x){
  return `<path d="M${x-13},174 C${x-13},184 ${x-7},188 ${x},188 C${x+7},188 ${x+13},184 ${x+13},174 Z" fill="#c85843"/>
    <ellipse cx="${x}" cy="174" rx="13" ry="5" fill="#e07a63"/>
    <ellipse cx="${x}" cy="174" rx="9.4" ry="3.3" fill="#fff6e6"/>
    <circle cx="${x-3.6}" cy="174" r="2.4" fill="#c89058"/>
    <circle cx="${x+2}" cy="175.4" r="2" fill="#b87c46"/>
    <circle cx="${x+5.4}" cy="172.8" r="1.8" fill="#c89058"/>`;
}
function biscuit(x){
  return `<g fill="#c89058">
    <circle cx="${x}" cy="176" r="3"/><circle cx="${x+7}" cy="174" r="3"/><circle cx="${x+4}" cy="179" r="3"/>
  </g>`;
}
function apple(x){
  return `<circle cx="${x}" cy="172" r="5.5" fill="#d94f3d"/>
    <line x1="${x}" y1="166" x2="${x+2}" y2="163" stroke="#5c3a20" stroke-width="1.5"/>
    <ellipse cx="${x+4}" cy="163" rx="3" ry="1.6" fill="#3f7d5a" transform="rotate(-20 ${x+4} 163)"/>`;
}
function butterfly(x,y){
  return `<g transform="translate(${x},${y})">
    <ellipse cx="-4" cy="-2" rx="4" ry="5" fill="#f6c667" transform="rotate(-20 -4 -2)"/>
    <ellipse cx="4" cy="-2" rx="4" ry="5" fill="#e8a13c" transform="rotate(20 4 -2)"/>
    <line x1="0" y1="-6" x2="0" y2="4" stroke="#5c3a20" stroke-width="1.5"/>
  </g>`;
}
function sound(x,y){
  return `<g stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".85">
    <path d="M${x},${y-4} q6,4 0,10"/>
    <path d="M${x+8},${y-8} q9,7 0,17"/>
    <path d="M${x+16},${y-12} q12,10 0,24"/>
  </g>`;
}
function jump(x,y){
  return `<g stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8">
    <line x1="${x-10}" y1="${y+14}" x2="${x-14}" y2="${y+22}"/>
    <line x1="${x}" y1="${y+16}" x2="${x}" y2="${y+26}"/>
    <line x1="${x+10}" y1="${y+14}" x2="${x+14}" y2="${y+22}"/>
  </g>`;
}
function puff(x,y){
  return `<g fill="#ffffff" opacity=".7">
    <circle cx="${x}" cy="${y}" r="5"/><circle cx="${x+9}" cy="${y+3}" r="4"/><circle cx="${x-9}" cy="${y+3}" r="4"/>
  </g>`;
}

/* ---------- Figuren-Palette ---------- */
const P = {
  fur:  '#2c211b',   /* Umka Fell */
  furD: '#1b1411',   /* Schatten / ferne Beine */
  furL: '#412f24',   /* Licht */
  tan:  '#e2b878',   /* lohfarbene Abzeichen */
  tanL: '#f8e6c4',   /* Schnauze, Pfoten */
  nose: '#2a2220',
  line: '#60492f',
  cat:  '#9aa0ac',   /* Mimi */
  catD: '#7d8492',
  catL: '#c9cdd6',
  hog:  '#8a4f22',   /* Mika */
  hogD: '#6d3c19',
  skin: '#f0c99b'
};

/* ---------- Katze Mimi (sitzt auf dem Ast) ---------- */
function catInTree(x=264, y=90, s=1.05){
  return `<g transform="translate(${x},${y}) scale(${s})">
    <path d="M-6,2 C-20,6 -22,20 -16,32 C-13,38 -6,36 -8,28 C-11,18 -10,10 -2,6 Z" fill="${P.cat}"/>
    <path d="M-14,10 q-4,8 -2,16" stroke="${P.catD}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>
    <ellipse cx="-9" cy="1" rx="6" ry="3.2" fill="${P.catL}"/>
    <path d="M-11,2 C-13,-8 -8,-16 0,-16 C9,-16 13,-7 11,2 C9,6 -8,6 -11,2 Z" fill="${P.cat}"/>
    <path d="M-9,-6 q8,3 17,1" stroke="${P.catD}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".75"/>
    <path d="M-10,-1 q9,3 19,1" stroke="${P.catD}" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".6"/>
    <circle cx="1" cy="-24" r="11" fill="${P.cat}"/>
    <path d="M-8,-31 l-2,-8 l7,3 Z" fill="${P.cat}"/>
    <path d="M9,-31 l3,-8 l-7,3 Z" fill="${P.cat}"/>
    <path d="M-7,-31 l-1,-5 l4,2 Z" fill="#e6a9b6"/>
    <path d="M8,-31 l2,-5 l-4,2 Z" fill="#e6a9b6"/>
    <ellipse cx="-3.4" cy="-25" rx="3" ry="3.4" fill="#ffffff"/>
    <ellipse cx="5.4" cy="-25" rx="3" ry="3.4" fill="#ffffff"/>
    <circle cx="-3" cy="-25" r="2.1" fill="#3f4a2e"/>
    <circle cx="5.8" cy="-25" r="2.1" fill="#3f4a2e"/>
    <circle cx="-3.8" cy="-26.2" r=".8" fill="#ffffff"/>
    <circle cx="5" cy="-26.2" r=".8" fill="#ffffff"/>
    <path d="M-1.4,-20.4 l2.8,0 l-1.4,1.8 Z" fill="#e88ba0"/>
    <path d="M-2.6,-18 q2.6,2 5.2,0" stroke="#6c7280" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M-6,-20 q-6,-1.5 -8,1" stroke="#e8eaf0" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <path d="M-6,-18.6 q-6,.4 -8,2" stroke="#e8eaf0" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <path d="M8,-20 q6,-1.5 8,1" stroke="#e8eaf0" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <path d="M8,-18.6 q6,.4 8,2" stroke="#e8eaf0" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <ellipse cx="-4" cy="1.6" rx="4.2" ry="2.8" fill="${P.catL}"/>
    <ellipse cx="5" cy="1.6" rx="4.2" ry="2.8" fill="${P.catL}"/>
  </g>`;
}

/* ---------- Katze Mimi (liegt auf Umkas Rücken) ---------- */
function catOnBack(x, y, s=1){
  return `<g transform="translate(${x},${y}) scale(${s})">
    <path d="M-16,2 C-26,0 -30,-8 -26,-14 C-22,-18 -14,-16 -16,-10 C-17,-6 -14,-2 -8,0 Z" fill="${P.cat}"/>
    <ellipse cx="0" cy="0" rx="15" ry="9" fill="${P.cat}"/>
    <path d="M-8,-6 q7,4 15,3" stroke="${P.catD}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M-7,-2 q7,4 15,3" stroke="${P.catD}" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".55"/>
    <circle cx="13" cy="-8" r="9.5" fill="${P.cat}"/>
    <path d="M6,-14 l-2,-7 l6,3 Z" fill="${P.cat}"/>
    <path d="M20,-14 l2,-7 l-6,3 Z" fill="${P.cat}"/>
    <path d="M7,-14 l-1,-4 l3.4,2 Z" fill="#e6a9b6"/>
    <path d="M19,-14 l1,-4 l-3.4,2 Z" fill="#e6a9b6"/>
    <ellipse cx="9.6" cy="-9" rx="2.6" ry="3" fill="#ffffff"/>
    <ellipse cx="16.6" cy="-9" rx="2.6" ry="3" fill="#ffffff"/>
    <circle cx="10" cy="-9" r="1.9" fill="#3f4a2e"/>
    <circle cx="17" cy="-9" r="1.9" fill="#3f4a2e"/>
    <path d="M11.6,-4.6 l2.6,0 l-1.3,1.7 Z" fill="#e88ba0"/>
    <path d="M10.6,-2.4 q2.4,1.8 4.8,0" stroke="#6c7280" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <path d="M8,-4.6 q-5,-1.4 -7,.8" stroke="#e8eaf0" stroke-width=".8" fill="none" stroke-linecap="round"/>
    <path d="M19,-4.6 q5,-1.4 7,.8" stroke="#e8eaf0" stroke-width=".8" fill="none" stroke-linecap="round"/>
    <ellipse cx="-8" cy="8" rx="5" ry="3" fill="${P.catL}"/>
    <ellipse cx="6" cy="8.4" rx="5" ry="3" fill="${P.catL}"/>
  </g>`;
}

/* ---------- Umka: gefiedertes Bein ---------- */
function umkaLeg(cx, top, bot, w, col, pawCol){
  const h = w/2;
  return `<path d="M${(cx-h).toFixed(1)},${top} L${(cx+h).toFixed(1)},${top}
      L${(cx+h).toFixed(1)},${(bot-15).toFixed(1)}
      C${(cx+h+4).toFixed(1)},${(bot-12).toFixed(1)} ${(cx+h+1).toFixed(1)},${(bot-7).toFixed(1)} ${(cx+h+3).toFixed(1)},${(bot-4).toFixed(1)}
      L${(cx+h+1).toFixed(1)},${(bot-2).toFixed(1)} L${(cx-h-1).toFixed(1)},${(bot-2).toFixed(1)}
      C${(cx-h-3).toFixed(1)},${(bot-7).toFixed(1)} ${(cx-h-4).toFixed(1)},${(bot-12).toFixed(1)} ${(cx-h).toFixed(1)},${(bot-15).toFixed(1)} Z"
      fill="${col}"/>`
   + (pawCol ? `<ellipse cx="${cx}" cy="${(bot-1).toFixed(1)}" rx="${(h+2.6).toFixed(1)}" ry="4.2" fill="${pawCol}"/>` : '');
}

/* ---------- Umka: buschige Rute ---------- */
function umkaTail(x,y){
  return `<path d="M${x-38},${y+4}
      C${x-58},${y+2} ${x-72},${y-14} ${x-68},${y-34}
      C${x-66},${y-46} ${x-58},${y-50} ${x-54},${y-42}
      C${x-52},${y-36} ${x-58},${y-28} ${x-56},${y-20}
      C${x-54},${y-12} ${x-46},${y-6} ${x-38},${y+4} Z" fill="${P.fur}"/>
    <path d="M${x-66},${y-38} C${x-60},${y-30} ${x-62},${y-18} ${x-54},${y-10}"
      stroke="${P.furL}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M${x-50},${y-42} q-4,6 0,10" stroke="${P.tan}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".8"/>`;
}

/* ---------- Umka: Kopf (große Augen, breites welliges Hängeohr) ---------- */
function umkaHead(hx, hy, mood, lookUp){
  const r = 26;
  let f = '';
  /* ferne Ohrspitze hinter dem Kopf */
  f += `<path d="M${hx+12},${hy-20} C${hx+26},${hy-16} ${hx+32},${hy+2} ${hx+26},${hy+18}
      C${hx+22},${hy+26} ${hx+14},${hy+24} ${hx+14},${hy+14}
      C${hx+14},${hy+2} ${hx+10},${hy-10} ${hx+12},${hy-20} Z" fill="${P.furD}"/>`;
  f += `<circle cx="${hx}" cy="${hy}" r="${r}" fill="${P.fur}"/>`;
  /* Stirn-Fell (dezent, bleibt im Kopf) */
  f += `<path d="M${hx-13},${hy-21} C${hx-7},${hy-27} ${hx+3},${hy-28} ${hx+10},${hy-24}"
      stroke="${P.furL}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>`;
  /* kurze helle Schnauze */
  f += `<path d="M${hx+7},${hy-8}
      C${hx+19},${hy-15} ${hx+33},${hy-11} ${hx+35},${hy+0}
      C${hx+37},${hy+11} ${hx+27},${hy+18} ${hx+16},${hy+16}
      C${hx+9},${hy+15} ${hx+6},${hy+6} ${hx+7},${hy-8} Z" fill="${P.tanL}"/>`;
  /* Nase */
  f += `<ellipse cx="${hx+33}" cy="${hy-4}" rx="6.2" ry="5.2" fill="${P.nose}"/>
    <ellipse cx="${hx+31.4}" cy="${hy-6}" rx="2" ry="1.5" fill="#ffffff" opacity=".55"/>`;
  /* Mund */
  if(mood==='joy')        f += `<path d="M${hx+23},${hy+8} q7,7 15,2 q-1,8 -7,9 q-8,1 -8,-11 Z" fill="#8c3f4a"/>
                                 <path d="M${hx+25},${hy+12} q4,4 9,3 q-2,4 -7,4 q-3,-2 -2,-7 Z" fill="#e58a9a"/>
                                 <path d="M${hx+20},${hy+6} q6,3 13,1" stroke="${P.line}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  else if(mood==='smile') f += `<path d="M${hx+23},${hy+8} q7,7 15,3" stroke="${P.line}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  else if(mood==='think') f += `<path d="M${hx+24},${hy+10} q8,2 14,-2" stroke="${P.line}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  else if(mood==='surprise') f += `<ellipse cx="${hx+31}" cy="${hy+11}" rx="3.4" ry="4.2" fill="#8c3f4a"/>`;
  /* Auge */
  f += `<ellipse cx="${hx-3}" cy="${hy-10}" rx="9.6" ry="10.6" fill="#ffffff"/>
    <circle cx="${hx-1.4}" cy="${hy-9}" r="6.7" fill="#3a2a1c"/>
    <circle cx="${hx+0.8}" cy="${hy-13}" r="2.7" fill="#ffffff"/>
    <circle cx="${hx-4.2}" cy="${hy-6}" r="1.4" fill="#ffffff" opacity=".85"/>`;
  /* lohfarbene Brauen-Punkte */
  const browY = hy - (mood==='think'||mood==='surprise' ? 26 : 24);
  f += `<ellipse cx="${hx-5}" cy="${browY}" rx="5" ry="3.4" fill="${P.tan}" transform="rotate(-14 ${hx-5} ${browY})"/>
        <ellipse cx="${hx+13}" cy="${browY+2}" rx="4.2" ry="3" fill="${P.tan}" transform="rotate(-14 ${hx+13} ${browY+2})"/>`;
  /* breites, welliges Hängeohr bis unter das Kinn */
  f += `<path d="M${hx-10},${hy-26}
      C${hx-28},${hy-28} ${hx-42},${hy-16} ${hx-44},${hy-2}
      C${hx-46},${hy+8} ${hx-42},${hy+14} ${hx-38},${hy+10}
      C${hx-34},${hy+6} ${hx-36},${hy+2} ${hx-35},${hy-2}
      C${hx-33},${hy-12} ${hx-24},${hy-22} ${hx-10},${hy-26} Z" fill="${P.furD}"/>
    <path d="M${hx-12},${hy-24}
      C${hx-26},${hy-22} ${hx-35},${hy-10} ${hx-36},${hy+4}
      C${hx-37},${hy+18} ${hx-33},${hy+30} ${hx-26},${hy+36}
      C${hx-19},${hy+42} ${hx-12},${hy+36} ${hx-12},${hy+26}
      C${hx-12},${hy+16} ${hx-16},${hy+6} ${hx-15},${hy-4}
      C${hx-14},${hy-14} ${hx-10},${hy-22} ${hx-12},${hy-24} Z" fill="${P.fur}"/>
    <path d="M${hx-22},${hy-16} q-8,12 -7,26" stroke="${P.furL}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".85"/>
    <path d="M${hx-31},${hy-6} q-5,14 -2,28" stroke="${P.furL}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M${hx-20},${hy+2} q-5,10 -3,22" stroke="${P.furL}" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".55"/>
    <path d="M${hx-27},${hy+32} q-4,5 -9,5" stroke="${P.tan}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"/>`;
  return (lookUp ? `<g transform="rotate(-13 ${hx-4} ${hy+24})">` : '<g>') + f + '</g>';
}

/* ---------- Umka (schwarzer Cocker Spaniel mit lohfarbenen Abzeichen) ---------- */
function dog(x=170, y=168, pose='stand', mood='smile', lookUp=false){
  const gy = y + 52;
  let s = `<ellipse cx="${x+4}" cy="${gy+3}" rx="56" ry="7" fill="#173325" opacity=".3"/>`;
  s += umkaTail(x,y);

  if(pose==='stand'){
    s += umkaLeg(x-22, y+4, gy, 11, P.furD, null) + umkaLeg(x+18, y+2, gy, 11, P.furD, null);
    s += `<path d="M${x-44},${y+16}
      C${x-56},${y+6} ${x-55},${y-24} ${x-36},${y-36}
      C${x-18},${y-47} ${x+6},${y-48} ${x+22},${y-42}
      C${x+36},${y-37} ${x+43},${y-26} ${x+44},${y-10}
      C${x+45},${y+2} ${x+40},${y+12} ${x+30},${y+16}
      L${x-24},${y+18}
      C${x-36},${y+20} ${x-44},${y+21} ${x-44},${y+16} Z" fill="${P.fur}"/>
    <path d="M${x-38},${y-30} C${x-18},${y-42} ${x+6},${y-43} ${x+22},${y-38}"
      stroke="${P.furL}" stroke-width="4.4" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M${x-24},${y+16} q6,7 12,0 q6,7 12,0 q6,7 12,0 q6,7 12,0 q6,7 12,0"
      stroke="${P.fur}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M${x+34},${y-32} C${x+46},${y-26} ${x+49},${y-8} ${x+41},${y+8}
      C${x+36},${y+18} ${x+26},${y+22} ${x+18},${y+20}
      C${x+28},${y+10} ${x+33},${y-6} ${x+31},${y-24} Z" fill="${P.tan}" opacity=".85"/>`;
    s += umkaLeg(x-34, y+6, gy+1, 12, P.fur, P.tanL) + umkaLeg(x+30, y+4, gy-1, 12, P.fur, P.tanL);
  } else {
    /* SITZEN: Brust hoch, runde Hinterhand, gerade Vorderbeine */
    s += `<path d="M${x-46},${y+34}
      C${x-62},${y+22} ${x-58},${y-14} ${x-40},${y-30}
      C${x-22},${y-46} ${x+4},${y-50} ${x+18},${y-42}
      C${x+32},${y-34} ${x+40},${y-20} ${x+40},${y-6}
      C${x+40},${y+4} ${x+38},${y+13} ${x+34},${y+18}
      L${x+14},${y+26}
      C${x+2},${y+32} ${x-24},${y+38} ${x-46},${y+34} Z" fill="${P.fur}"/>
    <path d="M${x-44},${y+30} C${x-30},${y+16} ${x-16},${y+2} ${x-2},${y-8}"
      stroke="${P.furL}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>
    <path d="M${x-34},${y-26} C${x-16},${y-40} ${x+4},${y-42} ${x+16},${y-36}"
      stroke="${P.furL}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".75"/>
    <path d="M${x+6},${y+26} q7,6 14,0 q7,6 14,0" stroke="${P.fur}" stroke-width="4"
      fill="none" stroke-linecap="round"/>
    <path d="M${x+28},${y-38} C${x+42},${y-30} ${x+46},${y-10} ${x+38},${y+8}
      C${x+32},${y+20} ${x+20},${y+24} ${x+12},${y+22}
      C${x+22},${y+10} ${x+27},${y-10} ${x+25},${y-30} Z" fill="${P.tan}" opacity=".85"/>
    <ellipse cx="${x-34}" cy="${y+35}" rx="10" ry="5" fill="${P.tan}"/>`;
    s += umkaLeg(x+16, y+10, gy-3, 10, P.furD, null);
    s += umkaLeg(x+26, y+16, gy, 12, P.fur, P.tanL);
  }
  /* Kopf höher bei Sitzpose → aufrechtere, hundigere Haltung */
  return s + umkaHead(x + 44, y - (pose==='sit' ? 60 : 50), mood, lookUp);
}

/* ---------- Mika der Igel ---------- */
function mika(x=90, y=176, s=1){
  return `<g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="-11" cy="-2" rx="4.6" ry="3" fill="${P.hogD}"/>
    <ellipse cx="9" cy="-2" rx="4.6" ry="3" fill="${P.hogD}"/>
    <path d="M-20,-4 C-22,-14 -16,-22 -8,-24 L-9,-32 L-4,-25 L-1,-34 L4,-25 L9,-31 L11,-23
             C19,-22 23,-13 21,-4 C18,2 -14,2 -20,-4 Z" fill="${P.hog}"/>
    <path d="M-11,-24 l-2,-7 l6,4 Z" fill="${P.hogD}"/>
    <path d="M-3,-25 l-1,-9 l5,6 Z" fill="${P.hogD}"/>
    <path d="M6,-25 l3,-7 l1,8 Z" fill="${P.hogD}"/>
    <path d="M14,-6 C20,-10 26,-8 27,-2 C28,3 22,6 16,5 C12,4 12,-3 14,-6 Z" fill="${P.skin}"/>
    <circle cx="25" cy="-3.4" r="2.4" fill="#3b2a20"/>
    <circle cx="20.6" cy="-5.6" r="2" fill="#2b2a28"/>
    <circle cx="21.2" cy="-6.4" r=".7" fill="#ffffff"/>
    <path d="M18,-1 q3,2.4 6,.6" stroke="#8a5a2b" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <circle cx="13" cy="-8.5" r="2.6" fill="${P.skin}"/>
  </g>`;
}
function mikaBall(x=150,y=166){
  let sp='';
  for(let i=0;i<10;i++){
    const a=i/10*Math.PI*2;
    sp+=`<polygon points="${(x+Math.cos(a)*7).toFixed(1)},${(y+Math.sin(a)*7).toFixed(1)} ${(x+Math.cos(a-0.35)*9).toFixed(1)},${(y+Math.sin(a-0.35)*13).toFixed(1)} ${(x+Math.cos(a+0.35)*9).toFixed(1)},${(y+Math.sin(a+0.35)*13).toFixed(1)}" fill="${P.hogD}"/>`;
  }
  return `<circle cx="${x}" cy="${y}" r="9.5" fill="${P.hog}"/>${sp}`;
}

/* ---------- Das Mädchen ---------- */
function girl(x=120, hug=false){
  const yb = 175;             /* Bodenlinie */
  return `<g transform="translate(${x},${yb})">
    <rect x="-6" y="-13" width="5" height="13" rx="2.5" fill="${P.skin}"/>
    <rect x="2" y="-13" width="5" height="13" rx="2.5" fill="${P.skin}"/>
    <ellipse cx="-3.5" cy="-1" rx="4" ry="2.4" fill="#8a5a2b"/>
    <ellipse cx="4.5" cy="-1" rx="4" ry="2.4" fill="#8a5a2b"/>
    <path d="M-8,-30 L8,-30 L14,-12 L-14,-12 Z" fill="#e8735c"/>
    <rect x="-9" y="-32" width="18" height="4" rx="2" fill="#f6e3bd"/>
    ${hug
      ? `<path d="M-8,-28 C-17,-25 -19,-18 -15,-13" stroke="${P.skin}" stroke-width="4.6" fill="none" stroke-linecap="round"/>
         <path d="M8,-28 C17,-25 19,-18 15,-13" stroke="${P.skin}" stroke-width="4.6" fill="none" stroke-linecap="round"/>`
      : `<path d="M-8,-28 C-14,-24 -16,-19 -15,-15" stroke="${P.skin}" stroke-width="4.4" fill="none" stroke-linecap="round"/>
         <path d="M8,-28 C14,-24 16,-19 15,-15" stroke="${P.skin}" stroke-width="4.4" fill="none" stroke-linecap="round"/>`}
    <circle cx="0" cy="-41" r="10.5" fill="${P.skin}"/>
    <path d="M-10.5,-43 C-11,-52 -4,-55 0,-55 C5,-55 11,-52 10.5,-43 C7,-48 3,-49 0,-49 C-3,-49 -7,-48 -10.5,-43 Z" fill="#6b4a2c"/>
    <circle cx="-11" cy="-38" r="4.6" fill="#6b4a2c"/>
    <circle cx="11" cy="-38" r="4.6" fill="#6b4a2c"/>
    <circle cx="-12.6" cy="-34.6" r="1.8" fill="#e8735c"/>
    <circle cx="12.6" cy="-34.6" r="1.8" fill="#e8735c"/>
    <circle cx="-3.6" cy="-42" r="1.5" fill="#2b2a28"/>
    <circle cx="3.6" cy="-42" r="1.5" fill="#2b2a28"/>
    <circle cx="-3" cy="-42.6" r=".5" fill="#ffffff"/>
    <circle cx="4.2" cy="-42.6" r=".5" fill="#ffffff"/>
    <path d="M-2.6,-37.4 q2.6,2.4 5.2,0" stroke="#8a5a2b" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <circle cx="-6.6" cy="-38.6" r="1.9" fill="#efa0a0" opacity=".55"/>
    <circle cx="6.6" cy="-38.6" r="1.9" fill="#efa0a0" opacity=".55"/>
  </g>`;
}

/* ---------- Szene-Assembler ---------- */
function scene(o={}){
  const sky = o.sky || 'day';
  const place = o.place || 'garden';
  let s = skyBg(sky);
  if(sky==='day') s += sun() + (o.cloud===false ? '' : cloud(320,42));
  if(sky==='dusk') s += cloud(70,40,0.9) + cloud(330,36,1.1);
  if(sky==='night') s += stars() + moon();
  s += ground(sky, place);

  if(o.flowers) s += flower(40,184) + flower(70,190,'#f6c667') + flower(250,192) + flower(350,186,'#f6c667') + flower(380,194);
  if(o.fence) s += fence(30,148);
  if(o.tree) s += tree();
  if(o.bushes) s += bush(56,176,1) + bush(330,178,1.2);
  if(o.fern) s += fern(92,180);
  if(o.rock) s += rock(150,182);
  if(o.house) s += house();
  if(o.doghouse) s += doghouse(46,178);
  if(o.bowl) s += bowl(o.bowl) + (o.biscuit ? biscuit(o.bowl+20) : '');
  if(o.apple) s += apple(o.apple) + apple(o.apple+12);
  if(o.girl) s += girl(o.girlX||130, o.girlHug);
  if(o.mika) s += mika(o.mika, o.mikaY||176);
  if(o.mikaBall) s += mikaBall(o.mikaBall, o.mikaBallY||170);
  if(o.butterfly) s += butterfly(o.butterflyX||270,o.butterflyY||120);
  if(o.catTree) s += catInTree();
  if(o.dog) s += dog(o.dog.x, o.dog.y, o.dog.pose, o.dog.mood, o.dog.lookUp);
  if(o.catBack) s += catOnBack(o.catBack.x, o.catBack.y);
  if(o.sound) s += sound(o.sound.x, o.sound.y);
  if(o.jumpArc) s += jump(o.jumpArc.x, o.jumpArc.y);
  if(o.puff) s += puff(o.puff.x, o.puff.y);

  return `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

/* ---------- Buch-Definition ---------- */
window.STORY = {
  title: "Umka und das große Abenteuer",
  subtitle: "Ein spannender Waldspaziergang zum Lesenüben",
  emoji: "🐶",
  coverSvg: scene({sky:'day', place:'garden', flowers:true, fence:true, bushes:true,
    dog:{x:180,y:168,pose:'stand',mood:'joy'}, mika:100, catBack:{x:166,y:125}, butterfly:{x:280,y:110}}),
  chapterSvg: scene({sky:'day', place:'forest', bushes:true, dog:{x:190,y:166,pose:'sit',mood:'smile'}}),
  chapters: [
    {
      title: "Das geheimnisvolle Geräusch",
      pages: [
        { svg: scene({sky:'day', place:'garden', flowers:true, fence:true, doghouse:true,
            dog:{x:200,y:170,pose:'stand',mood:'smile'}}),
          text:"In einem kleinen Garten auf einer grünen Wiese lebt ein Hund namens Umka. Umka ist ein schwarzer Cocker Spaniel. Er hat lange, wellige Ohren." },
        { svg: scene({sky:'day', place:'garden', flowers:true, fence:true, doghouse:true,
            dog:{x:200,y:170,pose:'stand',mood:'joy'}, butterfly:{x:300,y:120}}),
          text:"Umka ist sehr fröhlich. Er schnüffelt den Wind, lauscht den Vögeln und wedelt den ganzen Tag mit dem Schwanz." },
        { svg: scene({sky:'day', place:'garden', flowers:true, fence:true, doghouse:true,
            dog:{x:200,y:170,pose:'stand',mood:'think'}, sound:{x:280,y:120}}),
          text:"Eines Morgens hört Umka ein komisches Geräusch: „Miau! Miau!“ Das Geräusch ist dünn und klein. Umka steht still." },
        { svg: scene({sky:'day', place:'garden', flowers:true, fence:true, doghouse:true,
            dog:{x:200,y:170,pose:'stand',mood:'surprise'}, sound:{x:300,y:130}}),
          text:"Umka neigt den Kopf. Er schnüffelt hin und her. Woher kommt das Geräusch nur?" },
        { svg: scene({sky:'day', place:'forest', bushes:true,
            dog:{x:190,y:172,pose:'stand',mood:'smile'}}),
          text:"Umka folgt dem Geräusch über einen kleinen Hügel. Er geht und geht – hinein in den dunkelgrünen Wald." }
      ]
    },
    {
      title: "Hoch oben im Baum",
      pages: [
        { svg: scene({sky:'day', place:'forest', bushes:true,
            dog:{x:190,y:172,pose:'stand',mood:'smile'}, sound:{x:320,y:100}}),
          text:"Im Wald ist das Geräusch lauter: „Miau, miau, miau!“ Umka geht weiter. Seine schwarzen Ohren baumeln hin und her." },
        { svg: scene({sky:'day', place:'forest', bushes:true, fern:true, rock:true,
            dog:{x:220,y:174,pose:'stand',mood:'think'}}),
          text:"Umka schnüffelt unter ein Farne. Nichts. Hinter einen Baumstumpf. Nichts. Unter einen Stein. Nichts." },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true,
            dog:{x:170,y:172,pose:'stand',mood:'surprise',lookUp:true}}),
          text:"Dann schaut Umka nach oben. Hoch oben in einer alten Eiche sitzt eine kleine graue Katze. Sie sieht sehr traurig aus." },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true,
            dog:{x:170,y:172,pose:'stand',mood:'smile',lookUp:true}, butterfly:{x:250,y:130}}),
          text:"Die Katze ist verloren. Sie ist dem Schmetterling hinterher geklettert. Jetzt kann sie nicht mehr runter." },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true,
            dog:{x:170,y:172,pose:'sit',mood:'think',lookUp:true}}),
          text:"„Ich helfe dir“, sagt Umka. Aber wie kommt man von so einem hohen Baum runter?" }
      ]
    },
    {
      title: "Mika hat eine Idee",
      pages: [
        { svg: scene({sky:'day', place:'forest', bushes:true, mika:70,
            dog:{x:210,y:172,pose:'stand',mood:'joy'}}),
          text:"Aus dem Busch tönt eine vertraute Stimme: „Ich helfe!“ Umka wedelt fröhlich. Es ist Mika der Igel!" },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true, mika:70,
            dog:{x:190,y:172,pose:'stand',mood:'smile',lookUp:true}}),
          text:"Mika ist Umkas alter Freund. Zusammen blicken sie zur Katze hinauf. „Miau“, sagt das Kätzchen leise." },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true, rock:true, mikaBall:150,
            dog:{x:240,y:172,pose:'stand',mood:'think',lookUp:true}}),
          text:"Mika macht sich klein und rollt sich unter einen Stein. „Die Katze muss auf mich springen“, erklärt Mika. „Ich bin weich wie ein Kissen.“" },
        { svg: scene({sky:'day', place:'forest', tree:true, catTree:true,
            dog:{x:170,y:172,pose:'stand',mood:'joy'}, sound:{x:250,y:140}}),
          text:"Umka bellt sanft: „Hey! Hey! Hab keine Angst. Ich bin eine schwarze Decke – weich und groß!“" },
        { svg: scene({sky:'day', place:'forest', tree:true, jumpArc:{x:268,y:60},
            dog:{x:170,y:172,pose:'stand',mood:'surprise',lookUp:true}}),
          text:"Das Kätzchen zögert. Dann springt es mit aller Macht. Whoops!" }
      ]
    },
    {
      title: "Die große Rettung",
      pages: [
        { svg: scene({sky:'day', place:'forest', tree:true, puff:{x:170,y:120},
            dog:{x:170,y:168,pose:'stand',mood:'joy'}, catBack:{x:170,y:124}}),
          text:"Puff! Das Kätzchen landet genau auf Umkas weichem Rücken. Umka wackelt nicht einmal. Er ist sehr stolz." },
        { svg: scene({sky:'day', place:'garden', flowers:true, fence:true,
            dog:{x:190,y:170,pose:'stand',mood:'smile'}, catBack:{x:190,y:126}}),
          text:"Sehr vorsichtig trägt Umka die Katze auf dem Rücken – wie einen kleinen Rucksack. Sie wandern über den Hügel zurück." },
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:118,
            dog:{x:206,y:172,pose:'stand',mood:'joy'}, catBack:{x:186,y:128}}),
          text:"Am Rand des Gartens steht das kleine gelbe Haus. Ein kleines Mädchen rennt heraus. „Mimi! Mimi!“" },
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:118, girlHug:true,
            dog:{x:214,y:172,pose:'stand',mood:'joy'}}),
          text:"Das Mädchen hält Mimi fest. Mimi kuschelt sich in ihre Arme. Sie miaut leise und glücklich." },
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:118,
            dog:{x:212,y:172,pose:'sit',mood:'smile'}}),
          text:"Umka wedelt mit dem Schwanz. Das Mädchen streichelt Umkas schwarze, wellige Ohren: „Danke, du bist ein Held!“" }
      ]
    },
    {
      title: "Das große Fest",
      pages: [
        { svg: scene({sky:'dusk', place:'garden', flowers:true, house:true, bowl:312, biscuit:true,
            dog:{x:190,y:172,pose:'sit',mood:'joy'}}),
          text:"Am Abend lädt das Mädchen Umka in den Garten ein. Es gibt Hundefutter und eine Schale Milch für Mimi." },
        { svg: scene({sky:'dusk', place:'garden', flowers:true, house:true, bowl:96, biscuit:true, apple:330,
            mika:300, dog:{x:190,y:172,pose:'stand',mood:'joy'}}),
          text:"Mika kommt auch mit, mit ein paar Äpfeln. „Ein starkes Team rettet die Welt“, sagt der kleine Igel." },
        { svg: scene({sky:'dusk', place:'garden', flowers:true, fence:true, doghouse:true,
            dog:{x:200,y:172,pose:'sit',mood:'smile'}}),
          text:"Umka denkt nach. Neugierig sein ist gut. Aber noch besser ist: Freunden helfen." },
        { svg: scene({sky:'night', place:'garden', doghouse:true,
            dog:{x:230,y:174,pose:'sit',mood:'smile'}}),
          text:"In dieser Nacht schläft Umka gut. Der Mond scheint durch das kleine Fenster der Hütte." },
        { svg: scene({sky:'night', place:'forest', bushes:true, mika:90,
            dog:{x:220,y:174,pose:'sit',mood:'smile'}}),
          text:"Und wenn Umka träumt, dann träumt er von einer grauen Katze, einem kleinen Igel und einem großen Abenteuer. Ende… fürs erste. 🌙" }
      ]
    }
  ]
};
