/* ---------- Umka und das Herbstpicknick ---------- */

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
  return `<circle cx="${x}" cy="${y}" r="28" fill="#f6c667" opacity=".13"/>
    <circle cx="${x}" cy="${y}" r="15" fill="#f6c667"/>${rays}`;
}
function cloud(x,y,s=1){
  return `<g opacity=".9" transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="5" rx="25" ry="9" fill="#9bc8d5" opacity=".35"/>
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
  const top = sky==='night' ? '#173325' : place==='forest' ? '#2c5a3f' : place==='meadow' ? '#7cb98a' : '#6fae7f';
  const bot = sky==='night' ? '#0f1a33' : place==='forest' ? '#1e4531' : place==='meadow' ? '#55966b' : '#55966b';
  return `<path d="M0,172 Q100,156 200,170 T400,166 V230 H0 Z" fill="${top}"/>
          <path d="M0,194 Q120,178 230,194 T400,188 V230 H0 Z" fill="${bot}"/>
          <path d="M0,176 Q100,160 200,174 T400,170" stroke="rgba(255,255,255,.12)" stroke-width="2" fill="none"/>`;
}
function flower(x,y,c='#e8735c'){
  return `<g><line x1="${x}" y1="${y}" x2="${x}" y2="${y-9}" stroke="#3f7d5a" stroke-width="1.5"/>
    <circle cx="${x}" cy="${y-11}" r="3.4" fill="${c}"/>
    <circle cx="${x}" cy="${y-11}" r="1.4" fill="#f6c667"/></g>`;
}
function meadow(x=0,y=196){
  let g='';
  const cols=['#3f7d5a','#4c8a67','#55966b'];
  for(let i=0;i<12;i++){
    const gx=x+i*33+((i%3)*7), c=cols[i%3];
    g+=`<path d="M${gx},${y} q-4,-10 -8,-12 M${gx},${y} q0,-12 2,-15 M${gx},${y} q4,-10 8,-11"
      stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  }
  return g;
}
function bush(x=60,y=170,s=1){
  return `<g transform="translate(${x},${y}) scale(${s})">
    <circle cx="-12" cy="0" r="13" fill="#3f7d5a"/>
    <circle cx="2" cy="-6" r="15" fill="#4c8a67"/>
    <circle cx="14" cy="1" r="12" fill="#3f7d5a"/>
  </g>`;
}
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
function girl(x=120, hug=false){
  const yb = 175;
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
function bowl(x){
  return `<path d="M${x-13},174 C${x-13},184 ${x-7},188 ${x},188 C${x+7},188 ${x+13},184 ${x+13},174 Z" fill="#c85843"/>
    <ellipse cx="${x}" cy="174" rx="13" ry="5" fill="#e07a63"/>
    <ellipse cx="${x}" cy="174" rx="9.4" ry="3.3" fill="#fff6e6"/>
    <circle cx="${x-3.6}" cy="174" r="2.4" fill="#c89058"/>
    <circle cx="${x+2}" cy="175.4" r="2" fill="#b87c46"/>
    <circle cx="${x+5.4}" cy="172.8" r="1.8" fill="#c89058"/>`;
}
function carrot(x=300,y=172){
  return `<g transform="translate(${x},${y})">
    <path d="M-3,-6 L5,-6 L1.5,13 Z" fill="#ef8f3f"/>
    <path d="M-2,-2 q4,1.5 6,0 M0,3 q3,1 5,0" stroke="#d9772e" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M1,-6 q-5,-9 -11,-9 q7,-1 9,4 q-3,-10 2,-15 q5,4 2,15 q3,-8 9,-9 q-4,9 -7,10 Z" fill="#4c8a67"/>
  </g>`;
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
function heart(x,y,s=1){
  return `<g transform="translate(${x},${y}) scale(${s})" fill="#e8735c">
    <path d="M0,3 C-1,-1 -6,-1.5 -6,2 C-6,5 -2,7 0,9 C2,7 6,5 6,2 C6,-1.5 1,-1 0,3 Z"/>
  </g>`;
}

/* ---------- Figuren-Palette ---------- */
const P = {
  fur:  '#2c211b',
  furD: '#1b1411',
  furL: '#412f24',
  tan:  '#e2b878',
  tanL: '#f8e6c4',
  nose: '#2a2220',
  line: '#60492f',
  rabbit:  '#a7adba',
  rabbitD: '#8d93a2',
  rabbitL: '#e6e9f0',
  inner:   '#e6a9b6',
  pink:    '#e88ba0',
  skin:    '#f0c99b'
};

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
  return `<path d="M${x-36},${y+7}
      C${x-58},${y+6} ${x-79},${y-10} ${x-78},${y-31}
      C${x-78},${y-49} ${x-68},${y-58} ${x-58},${y-49}
      C${x-51},${y-43} ${x-61},${y-35} ${x-61},${y-25}
      C${x-61},${y-14} ${x-49},${y-5} ${x-36},${y+7} Z" fill="${P.fur}"/>
    <path d="M${x-72},${y-47} C${x-65},${y-38} ${x-70},${y-25} ${x-61},${y-14}"
      stroke="${P.furL}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M${x-66},${y-48} q-5,8 -1,15 M${x-58},${y-43} q-5,8 -1,15"
      stroke="${P.tan}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".9"/>`;
}

/* ---------- Umka: Kopf ---------- */
function umkaHead(hx, hy, mood, lookUp){
  const r = 26;
  let f = '';
  f += `<path d="M${hx+12},${hy-20} C${hx+26},${hy-16} ${hx+32},${hy+2} ${hx+26},${hy+18}
      C${hx+22},${hy+26} ${hx+14},${hy+24} ${hx+14},${hy+14}
      C${hx+14},${hy+2} ${hx+10},${hy-10} ${hx+12},${hy-20} Z" fill="${P.furD}"/>`;
  f += `<circle cx="${hx}" cy="${hy}" r="${r}" fill="${P.fur}"/>`;
  f += `<path d="M${hx-13},${hy-21} C${hx-7},${hy-27} ${hx+3},${hy-28} ${hx+10},${hy-24}"
      stroke="${P.furL}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>`;
  f += `<path d="M${hx+7},${hy-8}
      C${hx+19},${hy-15} ${hx+33},${hy-11} ${hx+35},${hy+0}
      C${hx+37},${hy+11} ${hx+27},${hy+18} ${hx+16},${hy+16}
      C${hx+9},${hy+15} ${hx+6},${hy+6} ${hx+7},${hy-8} Z" fill="${P.tanL}"/>`;
  f += `<ellipse cx="${hx+33}" cy="${hy-4}" rx="6.2" ry="5.2" fill="${P.nose}"/>
    <ellipse cx="${hx+31.4}" cy="${hy-6}" rx="2" ry="1.5" fill="#ffffff" opacity=".55"/>`;
  if(mood==='joy')        f += `<path d="M${hx+23},${hy+8} q7,7 15,2 q-1,8 -7,9 q-8,1 -8,-11 Z" fill="#8c3f4a"/>
                                 <path d="M${hx+25},${hy+12} q4,4 9,3 q-2,4 -7,4 q-3,-2 -2,-7 Z" fill="#e58a9a"/>
                                 <path d="M${hx+20},${hy+6} q6,3 13,1" stroke="${P.line}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  else if(mood==='smile') f += `<path d="M${hx+23},${hy+8} q7,7 15,3" stroke="${P.line}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  else if(mood==='think') f += `<path d="M${hx+24},${hy+10} q8,2 14,-2" stroke="${P.line}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  else if(mood==='surprise') f += `<ellipse cx="${hx+31}" cy="${hy+11}" rx="3.4" ry="4.2" fill="#8c3f4a"/>`;
  f += `<ellipse cx="${hx-3}" cy="${hy-10}" rx="9.6" ry="10.6" fill="#ffffff"/>
    <circle cx="${hx-1.4}" cy="${hy-9}" r="6.7" fill="#3a2a1c"/>
    <circle cx="${hx+0.8}" cy="${hy-13}" r="2.7" fill="#ffffff"/>
    <circle cx="${hx-4.2}" cy="${hy-6}" r="1.4" fill="#ffffff" opacity=".85"/>`;
  const browY = hy - (mood==='think'||mood==='surprise' ? 26 : 24);
  f += `<ellipse cx="${hx-5}" cy="${browY}" rx="5" ry="3.4" fill="${P.tan}" transform="rotate(-14 ${hx-5} ${browY})"/>
        <ellipse cx="${hx+13}" cy="${browY+2}" rx="4.2" ry="3" fill="${P.tan}" transform="rotate(-14 ${hx+13} ${browY+2})"/>`;
  f += `<path d="M${hx-10},${hy-26}
      C${hx-32},${hy-31} ${hx-53},${hy-18} ${hx-54},${hy+2}
      C${hx-56},${hy+18} ${hx-49},${hy+28} ${hx-43},${hy+20}
      C${hx-38},${hy+14} ${hx-42},${hy+7} ${hx-40},${hy-1}
      C${hx-37},${hy-14} ${hx-24},${hy-23} ${hx-10},${hy-26} Z" fill="${P.furD}"/>
    <path d="M${hx-12},${hy-24}
      C${hx-30},${hy-23} ${hx-44},${hy-9} ${hx-45},${hy+8}
      C${hx-46},${hy+25} ${hx-39},${hy+42} ${hx-29},${hy+47}
      C${hx-19},${hy+51} ${hx-11},${hy+41} ${hx-13},${hy+29}
      C${hx-14},${hy+17} ${hx-20},${hy+7} ${hx-17},${hy-4}
      C${hx-15},${hy-14} ${hx-10},${hy-22} ${hx-12},${hy-24} Z" fill="${P.fur}"/>
    <path d="M${hx-27},${hy-17} q-10,14 -7,31 M${hx-37},${hy-7} q-8,16 -3,31 M${hx-25},${hy+9} q-5,15 -1,29"
      stroke="${P.furL}" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9"/>
    <path d="M${hx-38},${hy+37} q-5,7 -12,5 M${hx-30},${hy+43} q-5,7 -11,7"
      stroke="${P.tan}" stroke-width="2.8" fill="none" stroke-linecap="round" opacity=".85"/>`;
  return (lookUp ? `<g transform="rotate(-13 ${hx-4} ${hy+24})">` : '<g>') + f + '</g>';
}

/* ---------- Umka (Cocker Spaniel) ---------- */
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
  return s + umkaHead(x + 44, y - (pose==='sit' ? 60 : 50), mood, lookUp);
}

/* ---------- Ossi das Häschen (grau) ---------- */
function ossi(x=280, y=172, s=1.35, flip=false){
  return `<g transform="translate(${x},${y}) scale(${flip?-s:s},${s})">
    <ellipse cx="6" cy="3" rx="27" ry="4" fill="#173325" opacity=".28"/>
    <ellipse cx="2" cy="-13" rx="24" ry="16" fill="${P.rabbit}"/>
    <ellipse cx="10" cy="-8" rx="13" ry="8.5" fill="#c9cdd9"/>
    <circle cx="-19" cy="-14" r="7" fill="${P.rabbitL}" stroke="${P.rabbitD}" stroke-width="1.2"/>
    <path d="M-17,-8 C-12,-13 -2,-15 6,-13" stroke="${P.rabbitD}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M-6,-4 C1,-7 12,-7 19,-3" stroke="${P.rabbitD}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".45"/>
    <rect x="10" y="-8" width="4.6" height="11" rx="2.3" fill="${P.rabbitD}"/>
    <rect x="21" y="-8" width="4.6" height="11" rx="2.3" fill="${P.rabbitD}"/>
    <ellipse cx="12.3" cy="4" rx="4.4" ry="2.2" fill="#c9cdd9"/>
    <ellipse cx="23.3" cy="4" rx="4.4" ry="2.2" fill="#c9cdd9"/>
    <rect x="-13" y="-6" width="5.2" height="12" rx="2.6" fill="${P.rabbit}"/>
    <ellipse cx="-10.4" cy="7" rx="4.8" ry="2.4" fill="#c9cdd9"/>
    <circle cx="18" cy="-29" r="11" fill="${P.rabbit}"/>
    <path d="M8.5,-35 C8.5,-49 15,-58 20,-57 C26,-56 27,-46 24,-34 C21,-28 12,-30 8.5,-35 Z" fill="${P.rabbit}"/>
    <path d="M11.5,-36 C11.5,-46 15,-52 18,-52 C21.5,-52 22,-45 20.5,-37 C19,-32 12.5,-33 11.5,-36 Z" fill="${P.inner}"/>
    <path d="M15,-37 C15,-52 22,-61 27.5,-59 C33,-57 32,-45 29,-36 C26.5,-30 17.5,-31 15,-37 Z" fill="${P.rabbit}"/>
    <path d="M18,-38 C18,-48 23,-54 25.5,-53.5 C28.5,-52.5 27.5,-45 26,-39 C24.5,-34 19,-35 18,-38 Z" fill="${P.inner}"/>
    <ellipse cx="29" cy="-24.5" rx="4.6" ry="3.4" fill="${P.rabbitL}"/>
    <circle cx="32.6" cy="-25" r="1.9" fill="#4a4e59"/>
    <path d="M33.5,-22 q-2.5,2 -5,0" stroke="#6b7080" stroke-width="1" fill="none" stroke-linecap="round"/>
    <ellipse cx="29" cy="-28.5" rx="1.4" ry="1.2" fill="${P.pink}"/>
    <circle cx="33" cy="-29.5" r=".7" fill="#ffffff" opacity=".6"/>
  </g>`;
}

/* ---------- Mika, Eichhörnchen und Picknick ---------- */
function mika(x=90,y=176,s=1,flip=false){
  const d=flip?-s:s;
  return `<g transform="translate(${x},${y}) scale(${d},${s})">
    <ellipse cx="0" cy="4" rx="25" ry="4.5" fill="#173325" opacity=".25"/>
    <ellipse cx="-9" cy="-1" rx="5.5" ry="3.4" fill="#6d3c19"/>
    <ellipse cx="11" cy="-1" rx="5.5" ry="3.4" fill="#6d3c19"/>
    <path d="M-24,-5 C-25,-16 -19,-26 -9,-29
      L-11,-38 L-4,-30 L0,-41 L5,-30 L12,-37 L13,-27
      C21,-23 25,-14 23,-6 C20,1 -16,2 -24,-5 Z" fill="#8a4f22" stroke="#603516" stroke-width="1.3"/>
    <path d="M-16,-25 l-3,-9 l7,5 M-7,-29 l1,-10 l5,9 M3,-30 l5,-9 l1,10 M12,-26 l7,-7 l-1,10"
      stroke="#5d3215" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5,-17 C13,-23 24,-21 30,-13 C35,-6 31,3 22,6 C13,8 5,2 3,-7 C2,-11 3,-14 5,-17 Z" fill="#f0c99b" stroke="#9f704a" stroke-width="1.2"/>
    <path d="M7,-15 C12,-18 17,-19 21,-17" stroke="#ddb386" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="22" cy="-10" r="2.5" fill="#2b2a28"/><circle cx="22.8" cy="-10.8" r=".8" fill="#fff"/>
    <circle cx="31" cy="-5" r="3" fill="#3b2a20"/><ellipse cx="30.2" cy="-6" rx=".9" ry=".6" fill="#fff" opacity=".55"/>
    <path d="M24,0 q3,2.5 6,0" stroke="#8a5a2b" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <circle cx="8" cy="-17" r="3" fill="#c98f62"/>
  </g>`;
}
function squirrel(x=310,y=172,s=1,flip=false,withNut=false,withApple=false){
  const d=flip?-s:s;
  return `<g transform="translate(${x},${y}) scale(${d},${s})">
    <ellipse cx="0" cy="4" rx="25" ry="4" fill="#173325" opacity=".25"/>
    <path d="M-13,-8 C-40,-12 -43,-42 -24,-48 C-5,-54 1,-31 -14,-24 C-28,-18 -25,-4 -13,-8 Z" fill="#b9652d" stroke="#8f451f" stroke-width="2"/>
    <ellipse cx="2" cy="-13" rx="17" ry="18" fill="#c87435"/><ellipse cx="8" cy="-10" rx="9" ry="12" fill="#f0c58d"/>
    <circle cx="15" cy="-34" r="12" fill="#c87435"/>
    <path d="M7,-43 L10,-57 L18,-44 Z M18,-44 L27,-55 L27,-39 Z" fill="#a95328"/>
    <ellipse cx="24" cy="-31" rx="7" ry="5" fill="#f0c58d"/><circle cx="29" cy="-32" r="2.4" fill="#39251b"/>
    <circle cx="18" cy="-37" r="2.2" fill="#282320"/><circle cx="18.8" cy="-37.8" r=".7" fill="#fff"/>
    <path d="M12,-2 L8,5 M22,-2 L24,5" stroke="#8f451f" stroke-width="4" stroke-linecap="round"/>
    ${withNut?`<ellipse cx="30" cy="-14" rx="5" ry="7" fill="#8a5a2b"/><path d="M26,-20 q4,-4 8,0" stroke="#5c3a20" stroke-width="2" fill="none"/>`:''}
    ${withApple?`<circle cx="30" cy="-14" r="8" fill="#d95842"/><path d="M29,-22 q2,-5 5,-6" stroke="#5c3a20" stroke-width="2" fill="none"/><ellipse cx="35" cy="-25" rx="4" ry="2" fill="#4c8a67" transform="rotate(-25 35 -25)"/>`:''}
  </g>`;
}
function autumn(o={}){
  let a='';
  const cols=['#e69a32','#d96b32','#f3bd3f','#b94d2e'];
  for(let i=0;i<18;i++){
    const x=(i*73)%390+5, y=o.wind?55+(i*31)%120:180+(i%3)*8, c=cols[i%4], r=(i%2?18:-14);
    a+=`<ellipse cx="${x}" cy="${y}" rx="5" ry="2.7" fill="${c}" transform="rotate(${r} ${x} ${y})"/>`;
  }
  return a;
}
function picnic(x=200,y=188,mess=false,full=false){
  return `<g><path d="M${x-72},${y-10} L${x+72},${y-10} L${x+92},${y+25} L${x-90},${y+25} Z" fill="#f4e3bd" stroke="#d65f4c" stroke-width="3"/>
    <path d="M${x-50},${y-9} l18,34 M${x},${y-9} l18,34 M${x+50},${y-9} l18,34" stroke="#d65f4c" stroke-width="2" opacity=".65"/>
    <rect x="${x-12}" y="${y-28}" width="34" height="21" rx="4" fill="#9a6032"/><path d="M${x-7},${y-28} q12,-16 24,0" stroke="#70411f" stroke-width="3" fill="none"/>
    <circle cx="${x+42}" cy="${y-14}" r="8" fill="#d95842"/><path d="M${x+40},${y-22} q4,-6 7,-1" stroke="#3f7d5a" stroke-width="2" fill="none"/>
    <path d="M${x-44},${y-20} l18,0 l-9,14 Z" fill="#f6d27a" stroke="#c58a3a"/>
    ${full?`<path d="M${x-67},${y-18} q15,-10 29,0 l-3,8 h-23 Z" fill="#d9a95f" stroke="#9a6032"/><circle cx="${x+58}" cy="${y-12}" r="7" fill="#d95842"/><circle cx="${x+70}" cy="${y-12}" r="7" fill="#c94838"/><circle cx="${x-8}" cy="${y-36}" r="3.5" fill="#923e75"/><circle cx="${x+1}" cy="${y-38}" r="3.5" fill="#923e75"/>`:''}
    ${mess?`<path d="M${x+55},${y-35} q13,-12 26,0" stroke="#fff" stroke-width="3" fill="none"/><circle cx="${x+80}" cy="${y-37}" r="3" fill="#fff"/>`:''}
  </g>`;
}
function blanketCarrier(x=330,y=145){
  return `<g><path d="M${x-35},${y-22} q35,-20 70,0 v45 q-35,13 -70,0 Z" fill="#f4e3bd" stroke="#d65f4c" stroke-width="3"/>
    <path d="M${x-16},${y-28} v58 M${x+14},${y-29} v60" stroke="#d65f4c" stroke-width="2" opacity=".6"/>
    <ellipse cx="${x-20}" cy="${y+31}" rx="6" ry="3" fill="#8d93a2"/><ellipse cx="${x+18}" cy="${y+31}" rx="6" ry="3" fill="#8d93a2"/></g>`;
}
function appleMotion(x,y){
  return `<g><circle cx="${x}" cy="${y}" r="8" fill="#d95842"/><path d="M${x-3},${y-8} q3,-6 7,-6" stroke="#5c3a20" stroke-width="2" fill="none"/><path d="M${x-28},${y+2} q8,-8 16,0" stroke="#fff" stroke-width="2" fill="none" opacity=".9"/></g>`;
}
function tracks(x=205,y=175){
  return Array.from({length:5},(_,i)=>`<ellipse cx="${x+i*18}" cy="${y-(i%2)*5}" rx="3" ry="2" fill="#6b4a2c" transform="rotate(${i%2?20:-20} ${x+i*18} ${y})"/>`).join('');
}
function oak(){
  return `<g>
    <path d="M250,184 C244,143 246,105 257,68 L278,68 C288,108 284,147 280,184 Z" fill="#6b421f"/>
    <path d="M260,105 L205,79 M275,101 L325,72 M263,82 L238,48" stroke="#6b421f" stroke-width="9" stroke-linecap="round"/>
    <circle cx="248" cy="42" r="42" fill="#7f9a3d"/><circle cx="205" cy="68" r="35" fill="#a27e32"/>
    <circle cx="300" cy="55" r="42" fill="#b66b2e"/><circle cx="338" cy="76" r="30" fill="#d18a32"/>
    <circle cx="270" cy="75" r="40" fill="#8f8f38"/><circle cx="225" cy="34" r="25" fill="#c4842f"/>
  </g>`;
}
function leaf(x,y,c='#e69a32',r=0){
  return `<ellipse cx="${x}" cy="${y}" rx="6" ry="3" fill="${c}" transform="rotate(${r} ${x} ${y})"/><path d="M${x-4},${y+2} l-5,5" stroke="#8a5a2b" stroke-width="1"/>`;
}
function napkin(x,y,hat=false){
  return hat ? `<path d="M${x-17},${y} q17,-16 34,0 l-5,12 h-24 Z" fill="#fff" stroke="#b9d3dd" stroke-width="1.5"/>`
    : `<path d="M${x-13},${y-8} q13,-8 26,0 q-8,9 -2,18 q-13,-5 -24,0 q7,-9 0,-18 Z" fill="#fff" stroke="#b9d3dd" stroke-width="1.3"/>`;
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
  if(o.meadow) s += meadow();
  if(o.flowers) s += flower(40,184) + flower(70,190,'#f6c667') + flower(250,192) + flower(350,186,'#f6c667') + flower(380,194);
  if(o.fence) s += fence(30,148);
  if(o.tree) s += tree();
  if(o.oak) s += oak();
  if(o.autumn) s += autumn({wind:o.wind});
  if(o.picnic) s += picnic(o.picnic.x||200,o.picnic.y||188,o.picnic.mess,o.picnic.full);
  if(o.blanketCarrier) s += blanketCarrier(o.blanketCarrier.x,o.blanketCarrier.y);
  if(o.appleMotion) s += appleMotion(o.appleMotion.x,o.appleMotion.y);
  if(o.tracks) s += tracks(o.tracks.x,o.tracks.y);
  if(o.bush) s += bush(o.bush.x||60, o.bush.y||176, o.bush.s||1);
  if(o.bush2) s += bush(o.bush2.x||330, o.bush2.y||178, o.bush2.s||1.2);
  if(o.house) s += house();
  if(o.doghouse) s += doghouse(46,178);
  if(o.bowl) s += bowl(o.bowl);
  if(o.carrot) s += carrot(o.carrot.x||300, o.carrot.y||172);
  if(o.butterfly) s += butterfly(o.butterflyX||270,o.butterflyY||120);
  if(o.dog) s += dog(o.dog.x, o.dog.y, o.dog.pose, o.dog.mood, o.dog.lookUp);
  if(o.girl) s += girl(o.girlX||130, o.girlHug);
  if(o.ossi) s += ossi(o.ossi.x||280, o.ossi.y||172, o.ossi.s||1.35, o.ossi.flip);
  if(o.mika) s += mika(o.mika.x||90,o.mika.y||176,o.mika.s||1,o.mika.flip);
  if(o.squirrel) s += squirrel(o.squirrel.x||310,o.squirrel.y||172,o.squirrel.s||1,o.squirrel.flip,o.squirrel.withNut,o.squirrel.withApple);
  if(o.napkin) s += napkin(o.napkin.x,o.napkin.y,o.napkin.hat);
  if(o.leaf) s += leaf(o.leaf.x,o.leaf.y,o.leaf.c,o.leaf.r);
  if(o.sound) s += sound(o.sound.x, o.sound.y);
  if(o.jumpArc) s += jump(o.jumpArc.x, o.jumpArc.y);
  if(o.heart) s += heart(o.heart.x, o.heart.y, o.heart.s||1) + heart(o.heart.x+26, o.heart.y-18, .7);
  return `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

/* ---------- Buch-Definition ---------- */
window.STORY = {
  title: "Umka und das Herbstpicknick",
  subtitle: "Ein lustiges Abenteuer mit einem neuen Freund",
  emoji: "🍂",
  coverSvg: scene({sky:'day',place:'meadow',autumn:true,picnic:{x:205,y:188},
    dog:{x:105,y:168,pose:'sit',mood:'joy'},mika:{x:215,y:174,s:1.0},ossi:{x:300,y:173,s:1.0,flip:true},squirrel:{x:355,y:171,s:.95,flip:true,withNut:true}}),
  chapterSvg: scene({sky:'day',place:'forest',tree:true,autumn:true,wind:true,
    dog:{x:175,y:169,pose:'stand',mood:'smile'},mika:{x:90,y:176,s:1.15},ossi:{x:330,y:173,s:1.05,flip:true}}),
  chapters: [
    {
      title: "Der volle Picknickkorb",
      pages: [
        {svg:scene({sky:'day',place:'garden',house:true,autumn:true,dog:{x:195,y:170,pose:'stand',mood:'joy'},mika:{x:65,y:176,s:.9},ossi:{x:350,y:173,s:.9,flip:true}}),
          text:"Der Herbst beginnt. Die Luft ist frisch, und erste Blätter werden bunt. Umka, Mika und Ossi wollen ein Picknick machen."},
        {svg:scene({sky:'day',place:'garden',fence:true,autumn:true,picnic:{x:205,y:188,full:true},dog:{x:100,y:166,pose:'sit',mood:'think'},mika:{x:315,y:175,s:1.0,flip:true},ossi:{x:375,y:173,s:.75,flip:true}}),
          text:"Sie packen Brot, Käse und Äpfel ein. Mika bringt drei Beeren mit. Eine Beere trägt er schon im Bauch."},
        {svg:scene({sky:'day',place:'forest',autumn:true,wind:true,dog:{x:145,y:169,pose:'stand',mood:'joy'},mika:{x:35,y:176,s:.85},blanketCarrier:{x:335,y:145}}),
          text:"Ossi trägt die Decke. Sie ist fast größer als er. Bei jedem Schritt ruft er: „Ich sehe nichts, aber ich komme mit!“"},
        {svg:scene({sky:'day',place:'meadow',autumn:true,oak:true,dog:{x:80,y:168,pose:'stand',mood:'smile'},mika:{x:170,y:175,s:.85},ossi:{x:220,y:173,s:.75,flip:true}}),
          text:"Unter einer großen Eiche finden sie den besten Platz. Die Sonne wärmt ihre Nasen. Über ihnen raschelt es leise."}
      ]
    },
    {
      title: "Ein frecher Dieb?",
      pages: [
        {svg:scene({sky:'day',place:'meadow',tree:true,autumn:true,picnic:{x:190,y:188},appleMotion:{x:310,y:145},dog:{x:80,y:166,pose:'sit',mood:'surprise'},mika:{x:365,y:174,s:.85,flip:true}}),
          text:"Die Freunde breiten ihr Essen aus. Plötzlich rollt ein Apfel von der Decke. Dann hüpft er einfach davon!"},
        {svg:scene({sky:'day',place:'meadow',tree:true,autumn:true,picnic:{x:190,y:188,mess:true},tracks:{x:245,y:166},dog:{x:75,y:178,pose:'stand',mood:'think'},mika:{x:205,y:174,s:.9},ossi:{x:365,y:173,s:.85,flip:true}}),
          text:"„Ein Apfeldieb!“, ruft Ossi. Umka schnuppert am Boden. Mika flüstert: „Vielleicht hat der Apfel Beine bekommen.“"},
        {svg:scene({sky:'day',place:'forest',tree:true,autumn:true,wind:true,tracks:{x:190,y:177},dog:{x:95,y:169,pose:'stand',mood:'think'},mika:{x:200,y:175,s:.9},ossi:{x:255,y:173,s:.85,flip:true},squirrel:{x:332,y:165,s:.9,flip:true,withApple:true}}),
          text:"Sie folgen kleinen Spuren zum Baum. Dort sitzt ein Eichhörnchen. Es hält den Apfel fest und schaut sehr erschrocken."},
        {svg:scene({sky:'day',place:'forest',tree:true,autumn:true,dog:{x:75,y:168,pose:'sit',mood:'smile'},mika:{x:190,y:175,s:.9},ossi:{x:260,y:173,s:.85},squirrel:{x:350,y:171,s:.9,flip:true,withApple:true}}),
          text:"„Ich heiße Flitzi“, sagt es. „Der Wind hat den Apfel zu mir gerollt. Ich wollte ihn zurückbringen, aber er war schneller als ich!“"}
      ]
    },
    {
      title: "Der wilde Blättersturm",
      pages: [
        {svg:scene({sky:'day',place:'meadow',autumn:true,picnic:{x:190,y:188,full:true},dog:{x:65,y:166,pose:'sit',mood:'joy'},mika:{x:220,y:175,s:.85},ossi:{x:285,y:173,s:.8,flip:true},squirrel:{x:360,y:171,s:.85,flip:true,withNut:true}}),
          text:"Alle lachen. Flitzi darf mitessen. Es knabbert so schnell, dass seine Backen rund wie zwei kleine Bälle werden."},
        {svg:scene({sky:'dusk',place:'meadow',autumn:true,wind:true,picnic:{x:205,y:188,mess:true},dog:{x:75,y:167,pose:'stand',mood:'surprise'},squirrel:{x:350,y:171,s:.9,flip:true},napkin:{x:119,y:87,hat:true}}),
          text:"Da pustet ein starker Windstoß über die Wiese. Die Servietten fliegen los. Eine landet auf Umkas Kopf wie ein Hut."},
        {svg:scene({sky:'dusk',place:'meadow',autumn:true,wind:true,picnic:{x:210,y:188,mess:true},dog:{x:60,y:168,pose:'stand',mood:'joy'},mika:{x:205,y:153,s:.8},ossi:{x:275,y:153,s:.78,flip:true},squirrel:{x:370,y:170,s:.7,flip:true},jumpArc:{x:275,y:125}}),
          text:"Alle jagen den Sachen hinterher. Ossi springt auf den Rand der Decke. Mika bewacht den Korb, damit er nicht wegfliegt."},
        {svg:scene({sky:'dusk',place:'forest',tree:true,autumn:true,wind:true,dog:{x:55,y:168,pose:'stand',mood:'smile'},mika:{x:160,y:175,s:.8},ossi:{x:220,y:173,s:.75},squirrel:{x:330,y:118,s:.85,flip:true},napkin:{x:355,y:116}}),
          text:"Flitzi springt hoch am Baum. Mit seinem buschigen Schwanz fängt es die letzte Serviette. „Mein Schwanz kann mehr als nur hübsch sein!“, ruft es."}
      ]
    },
    {
      title: "Vier Freunde im Herbst",
      pages: [
        {svg:scene({sky:'dusk',place:'meadow',autumn:true,picnic:{x:195,y:188,full:true},dog:{x:60,y:166,pose:'sit',mood:'smile'},mika:{x:225,y:175,s:.85},ossi:{x:290,y:173,s:.8,flip:true},squirrel:{x:365,y:170,s:.8,flip:true},napkin:{x:104,y:87,hat:true}}),
          text:"Bald liegt alles wieder auf der Decke. Nur Umkas Servietten-Hut bleibt. Er gefällt ihm nämlich sehr gut."},
        {svg:scene({sky:'dusk',place:'meadow',autumn:true,picnic:{x:195,y:188,full:true},dog:{x:60,y:166,pose:'sit',mood:'surprise'},mika:{x:220,y:175,s:.85},ossi:{x:290,y:173,s:.8,flip:true},squirrel:{x:365,y:170,s:.8,flip:true,withNut:true},sound:{x:300,y:110}}),
          text:"Zum Nachtisch teilt Flitzi seine Nüsse. Ossi probiert eine und knackt sie viel zu laut. Alle erschrecken und lachen dann noch lauter."},
        {svg:scene({sky:'dusk',place:'forest',tree:true,autumn:true,dog:{x:65,y:168,pose:'stand',mood:'smile'},mika:{x:175,y:175,s:.85},ossi:{x:250,y:173,s:.8},squirrel:{x:350,y:170,s:.9,flip:true},heart:{x:300,y:95},leaf:{x:324,y:136,c:'#e69a32',r:18}}),
          text:"„Kommst du beim nächsten Picknick wieder?“, fragt Mika. Flitzi nickt so heftig, dass ein Blatt auf seiner Nase landet."},
        {svg:scene({sky:'night',place:'meadow',autumn:true,wind:true,tree:true,dog:{x:70,y:168,pose:'stand',mood:'joy'},mika:{x:180,y:175,s:.85},ossi:{x:250,y:173,s:.8},squirrel:{x:345,y:170,s:.85,flip:true}}),
          text:"Vier Freunde gehen fröhlich nach Hause. Hinter ihnen tanzen die Blätter. Es war das lustigste Picknick im ganzen Herbst."}
      ]
    }
  ]
};
