/* ---------- Umka und das große Abenteuer ---------- */

/* --- Sky --- */
function skyBg(sky){
  const g = sky==='day' ? ['#9fd8ef','#eaf9ff']
          : sky==='dusk' ? ['#f9c784','#ef8f6e']
          : ['#16213f','#0b1226'];
  return `<defs>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${g[0]}"/><stop offset="100%" stop-color="${g[1]}"/>
    </linearGradient>
  </defs><rect width="400" height="230" fill="url(#skyG)"/>`;
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
  return `<ellipse cx="${x}" cy="177" rx="12" ry="5.5" fill="#c85843"/>
    <ellipse cx="${x}" cy="175.5" rx="8.5" ry="3.5" fill="#fff6e6"/>`;
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

/* --- Katze (grau) --- */
function catInTree(x=268,y=78){
  return `<g>
    <path d="M${x-8},${y+6} q-9,3 -8,13" stroke="#9a9aa5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="${x}" cy="${y+2}" rx="8.5" ry="9" fill="#9a9aa5"/>
    <circle cx="${x+7}" cy="${y-5}" r="6" fill="#9a9aa5"/>
    <polygon points="${x+3},${y-9} ${x+5},${y-15} ${x+8},${y-10}" fill="#9a9aa5"/>
    <polygon points="${x+8},${y-10} ${x+11},${y-15} ${x+12},${y-8}" fill="#9a9aa5"/>
    <circle cx="${x+5}" cy="${y-5.5}" r="1.1" fill="#2b2a28"/>
    <circle cx="${x+9.5}" cy="${y-5.5}" r="1.1" fill="#2b2a28"/>
    <polygon points="${x+7},${y-3} ${x+8.2},${y-1.8} ${x+6},${y-1.8}" fill="#e88ba0"/>
    <path d="M${x+3},${y-1} q2,1.5 4,0" stroke="#2b2a28" stroke-width="1" fill="none" stroke-linecap="round"/>
  </g>`;
}
function catOnBack(x,y){
  return `<g>
    <path d="M${x-9},${y+4} q-8,-2 -9,-9" stroke="#9a9aa5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="${x}" cy="${y}" rx="9" ry="7" fill="#9a9aa5"/>
    <circle cx="${x+8}" cy="${y-6}" r="5.5" fill="#9a9aa5"/>
    <polygon points="${x+4},${y-10} ${x+6},${y-16} ${x+9},${y-11}" fill="#9a9aa5"/>
    <polygon points="${x+9},${y-11} ${x+12},${y-16} ${x+13},${y-9}" fill="#9a9aa5"/>
    <circle cx="${x+6}" cy="${y-6.5}" r="1" fill="#2b2a28"/>
    <circle cx="${x+10.5}" cy="${y-6.5}" r="1" fill="#2b2a28"/>
    <polygon points="${x+8},${y-4.5} ${x+9.2},${y-3.2} ${x+7},${y-3.2}" fill="#e88ba0"/>
  </g>`;
}

/* --- Umka (schwarzer Cocker Spaniel) --- */
function dog(x=170,y=162,pose='stand',mood='smile',lookUp=false){
  let body='';
  let hx,hy;
  if(pose==='stand'){
    body=`<path d="M${x-30},${y-28} q-14,-4 -12,-22" stroke="#1a1512" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="${x-41}" cy="${y-49}" r="4.5" fill="#f3e2c0"/>
      <ellipse cx="${x}" cy="${y-24}" rx="34" ry="18" fill="#1a1512"/>
      <rect x="${x-24}" y="${y-17}" width="7" height="18" rx="3" fill="#14100d"/>
      <rect x="${x-12}" y="${y-16}" width="7" height="17" rx="3" fill="#14100d"/>
      <rect x="${x+7}" y="${y-16}" width="7" height="17" rx="3" fill="#14100d"/>
      <rect x="${x+17}" y="${y-17}" width="7" height="18" rx="3" fill="#14100d"/>
      <ellipse cx="${x+20}" cy="${y-19}" rx="11" ry="9" fill="#f3e2c0" opacity=".85"/>`;
    hx=x+26; hy=y-46;
  } else { // sit
    body=`<path d="M${x-20},${y-32} q-12,-6 -10,-24" stroke="#1a1512" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="${x}" cy="${y-21}" rx="23" ry="22" fill="#1a1512"/>
      <rect x="${x+10}" y="${y-15}" width="7" height="16" rx="3" fill="#14100d"/>
      <ellipse cx="${x+16}" cy="${y-18}" rx="9" ry="11" fill="#f3e2c0" opacity=".85"/>`;
    hx=x+22; hy=y-48;
  }
  const eyeR = mood==='surprise' ? 3.4 : 2.6;
  const eyes = `<circle cx="${hx-3}" cy="${hy-2}" r="${eyeR}" fill="#fff6e6"/>
    <circle cx="${hx-3}" cy="${hy-2}" r="${(eyeR*0.55).toFixed(1)}" fill="#2b2018"/>`;
  let mouth='';
  if(mood==='smile') mouth=`<path d="M${hx+4},${hy+7} q-4,3 -9,1" stroke="#f0c99b" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  if(mood==='joy') mouth=`<path d="M${hx+3},${hy+6} q4,6 10,2" stroke="#f0c99b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M${hx+7},${hy+9} q3,4 6,1 q-3,2 -6,-1 Z" fill="#e88ba0"/>`;
  if(mood==='think') mouth=`<path d="M${hx+4},${hy+7} q-4,2 -8,0" stroke="#f0c99b" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  if(mood==='surprise') mouth=`<ellipse cx="${hx+5}" cy="${hy+8}" rx="2.5" ry="3" fill="#f0c99b" opacity=".9"/>`;
  const head=`
    <circle cx="${hx}" cy="${hy}" r="16" fill="#1a1512"/>
    <ellipse cx="${hx+7}" cy="${hy+4}" rx="8.5" ry="6.5" fill="#f3e2c0"/>
    <circle cx="${hx+13}" cy="${hy+1.5}" r="2.4" fill="#100c0a"/>
    ${eyes}${mouth}`;
  const headG = lookUp ? `<g transform="rotate(-16 ${hx} ${hy})">${head}</g>` : head;
  const ears=`
    <ellipse cx="${hx-11}" cy="${hy+7}" rx="6" ry="15" fill="#100c0a" transform="rotate(16 ${hx-11} ${hy+7})"/>
    <ellipse cx="${hx+11}" cy="${hy+8}" rx="6" ry="15" fill="#100c0a" transform="rotate(-8 ${hx+11} ${hy+8})"/>`;
  return body + headG + ears;
}

/* --- Mika (Igel, Gast aus dem ersten Buch) --- */
function mika(x=90,y=172){
  return `<g>
    <ellipse cx="${x}" cy="${y-10}" rx="15" ry="10" fill="#a6602b"/>
    <polygon points="${x-10},${y-16} ${x-13},${y-24} ${x-5},${y-19}" fill="#8a4f22"/>
    <polygon points="${x-3},${y-19} ${x-3},${y-28} ${x+4},${y-20}" fill="#8a4f22"/>
    <polygon points="${x+5},${y-18} ${x+10},${y-25} ${x+10},${y-16}" fill="#8a4f22"/>
    <circle cx="${x+12}" cy="${y-11}" r="7.5" fill="#f0c99b"/>
    <circle cx="${x+16}" cy="${y-12}" r="1.4" fill="#2b2a28"/>
    <circle cx="${x+19}" cy="${y-9}" r="1.7" fill="#2b2a28"/>
    <ellipse cx="${x+5}" cy="${y-1}" rx="3" ry="2" fill="#8a4f22"/>
    <ellipse cx="${x+14}" cy="${y-1}" rx="3" ry="2" fill="#8a4f22"/>
  </g>`;
}
function mikaBall(x=150,y=166){
  let sp='';
  for(let i=0;i<10;i++){
    const a=i/10*Math.PI*2;
    sp+=`<polygon points="${(x+Math.cos(a)*7).toFixed(1)},${(y+Math.sin(a)*7).toFixed(1)} ${(x+Math.cos(a-0.35)*9).toFixed(1)},${(y+Math.sin(a-0.35)*13).toFixed(1)} ${(x+Math.cos(a+0.35)*9).toFixed(1)},${(y+Math.sin(a+0.35)*13).toFixed(1)}" fill="#8a4f22"/>`;
  }
  return `<circle cx="${x}" cy="${y}" r="9.5" fill="#a6602b"/>${sp}`;
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
    dog:{x:180,y:168,pose:'stand',mood:'joy'}, mika:100, catBack:{x:178,y:124}, butterfly:{x:280,y:110}}),
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
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:140,
            dog:{x:190,y:172,pose:'stand',mood:'joy'}, catBack:{x:190,y:128}}),
          text:"Am Rand des Gartens steht das kleine gelbe Haus. Ein kleines Mädchen rennt heraus. „Mimi! Mimi!“" },
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:140, girlHug:true,
            dog:{x:210,y:172,pose:'stand',mood:'joy'}}),
          text:"Das Mädchen hält Mimi fest. Mimi kuschelt sich in ihre Arme. Sie miaut leise und glücklich." },
        { svg: scene({sky:'day', place:'garden', flowers:true, house:true, girl:140,
            dog:{x:210,y:172,pose:'sit',mood:'smile'}}),
          text:"Umka wedelt mit dem Schwanz. Das Mädchen streichelt Umkas schwarze, wellige Ohren: „Danke, du bist ein Held!“" }
      ]
    },
    {
      title: "Das große Fest",
      pages: [
        { svg: scene({sky:'dusk', place:'garden', flowers:true, house:true, bowl:120, biscuit:true,
            dog:{x:200,y:172,pose:'sit',mood:'joy'}}),
          text:"Am Abend lädt das Mädchen Umka in den Garten ein. Es gibt Hundefutter und eine Schale Milch für Mimi." },
        { svg: scene({sky:'dusk', place:'garden', flowers:true, house:true, bowl:100, biscuit:true, apple:320,
            mika:280, dog:{x:200,y:172,pose:'stand',mood:'joy'}}),
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
