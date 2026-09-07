/* ---------- Mika und der schüchterne Mond ---------- */

/* reusable SVG scene builder */
function scene({moon='hidden', owl=false, mouth='smile', arms=false, sparkle=false, glow=false}={}){
  const stars = Array.from({length:16}).map((_,i)=>{
    const x = (i*53.7)%390 + 5;
    const y = (i*37.3)%110 + 6;
    const r = (i%3===0)?1.8:1.1;
    const delay = (i%5)*0.5;
    return `<circle class="star" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#fff3d0" style="animation-delay:${delay}s"/>`;
  }).join('');

  let moonGroup = '';
  if(moon==='hidden'){
    moonGroup = `
      <circle cx="205" cy="55" r="30" fill="url(#moonGrad)"/>
      <circle cx="195" cy="46" r="4" fill="#e0b355" opacity=".45"/>
      <circle cx="214" cy="62" r="3" fill="#e0b355" opacity=".4"/>
      <g>
        <ellipse cx="185" cy="60" rx="46" ry="24" fill="#33456e"/>
        <ellipse cx="225" cy="52" rx="38" ry="20" fill="#3b4f7a"/>
        <ellipse cx="150" cy="58" rx="30" ry="17" fill="#2c3c62"/>
      </g>`;
  } else if(moon==='peek'){
    moonGroup = `
      <circle cx="205" cy="55" r="30" fill="url(#moonGrad)"/>
      <circle cx="195" cy="46" r="4" fill="#e0b355" opacity=".45"/>
      <circle cx="214" cy="62" r="3" fill="#e0b355" opacity=".4"/>
      ${glow? '<circle cx="205" cy="55" r="46" fill="url(#glowGrad)"/>':''}
      <g>
        <ellipse cx="150" cy="66" rx="34" ry="18" fill="#2c3c62"/>
        <ellipse cx="178" cy="72" rx="30" ry="15" fill="#33456e"/>
      </g>`;
  } else if(moon==='full'){
    moonGroup = `
      <circle cx="205" cy="52" r="52" fill="url(#glowGrad)"/>
      <circle cx="205" cy="52" r="32" fill="url(#moonGrad)"/>
      <circle cx="194" cy="42" r="4.5" fill="#e0b355" opacity=".5"/>
      <circle cx="216" cy="60" r="3.2" fill="#e0b355" opacity=".45"/>
      <circle cx="200" cy="64" r="2.4" fill="#e0b355" opacity=".4"/>`;
  }

  const owlGroup = owl ? `
    <g transform="translate(300,86)">
      <ellipse cx="0" cy="34" rx="5" ry="14" fill="#6b4a2c"/>
      <ellipse cx="0" cy="10" rx="17" ry="19" fill="#8a6134"/>
      <ellipse cx="0" cy="14" rx="12" ry="13" fill="#c79a5f"/>
      <circle cx="-6" cy="6" r="5.5" fill="#fff6e6"/>
      <circle cx="6" cy="6" r="5.5" fill="#fff6e6"/>
      <circle cx="-6" cy="6" r="2.4" fill="#2b2a28"/>
      <circle cx="6" cy="6" r="2.4" fill="#2b2a28"/>
      <polygon points="0,10 -3,15 3,15" fill="#e8a13c"/>
      <polygon points="-16,-6 -8,4 -20,6" fill="#6b4a2c"/>
      <polygon points="16,-6 8,4 20,6" fill="#6b4a2c"/>
    </g>` : '';

  let mouthPath = '';
  if(mouth==='closed') mouthPath = `<path d="M195,193 q5,3 10,0" stroke="#2b2a28" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  if(mouth==='smile') mouthPath = `<path d="M192,192 q8,7 16,0" stroke="#2b2a28" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  if(mouth==='open') mouthPath = `<ellipse cx="200" cy="195" rx="4.5" ry="5.5" fill="#7a3b2e"/>`;
  if(mouth==='laugh') mouthPath = `<path d="M188,190 q12,14 24,0 q-12,10 -24,0 Z" fill="#7a3b2e"/>`;
  if(mouth==='shout') mouthPath = `<ellipse cx="200" cy="196" rx="6" ry="8" fill="#7a3b2e"/>`;

  const armsGroup = arms ? `
    <path d="M182,168 q-14,-18 -10,-34" stroke="#c9793f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M218,168 q14,-18 10,-34" stroke="#c9793f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="171" cy="134" r="6.5" fill="#c9793f"/>
    <circle cx="229" cy="134" r="6.5" fill="#c9793f"/>
  ` : '';

  const sparkleGroup = sparkle ? `
    <path d="M240,150 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3 Z" fill="#f6c667"/>
    <path d="M160,140 l2,5 5,2 -5,2 -2,5 -2,-5 -5,-2 5,-2 Z" fill="#f6c667"/>
  ` : '';

  return `
  <svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="moonGrad" cx="35%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#fff6d8"/>
        <stop offset="100%" stop-color="#f6c667"/>
      </radialGradient>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f6c667" stop-opacity=".38"/>
        <stop offset="100%" stop-color="#f6c667" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="230" fill="transparent"/>
    ${stars}
    ${moonGroup}
    ${owlGroup}
    ${sparkleGroup}
    <path d="M0,175 Q100,150 200,172 T400,168 V230 H0 Z" fill="#182645"/>
    <path d="M0,196 Q120,178 230,196 T400,190 V230 H0 Z" fill="#0f1a33"/>
    <g fill="#173325">
      <polygon points="40,196 55,160 70,196"/>
      <polygon points="48,182 55,150 62,182"/>
      <rect x="53" y="196" width="4" height="8" fill="#5c3a20"/>
      <polygon points="330,196 344,166 358,196"/>
      <polygon points="337,184 344,158 351,184"/>
      <rect x="342" y="196" width="4" height="8" fill="#5c3a20"/>
    </g>
    <g>
      ${armsGroup}
      <ellipse cx="200" cy="180" rx="9" ry="5" fill="#173325" opacity=".5"/>
      <ellipse cx="200" cy="172" rx="30" ry="24" fill="#c9793f"/>
      <g fill="#a6602b">
        <polygon points="176,158 168,146 182,152"/>
        <polygon points="184,150 178,136 192,145"/>
        <polygon points="196,146 192,131 206,141"/>
        <polygon points="210,146 210,131 222,142"/>
        <polygon points="222,151 226,137 236,149"/>
        <polygon points="230,160 238,148 240,162"/>
      </g>
      <ellipse cx="207" cy="185" rx="15" ry="12" fill="#f0c99b"/>
      <circle cx="214" cy="181" r="2.3" fill="#2b2a28"/>
      <circle cx="219" cy="188" r="2.6" fill="#2b2a28"/>
      ${mouthPath}
      <ellipse cx="185" cy="200" rx="6" ry="4" fill="#a6602b"/>
      <ellipse cx="212" cy="203" rx="6" ry="4" fill="#a6602b"/>
    </g>
  </svg>`;
}

/* ---------- Buch-Definition (1. Kapitel: die alte Geschichte) ---------- */
window.STORY = {
  title: "Mika und der schüchterne Mond",
  subtitle: "Eine Gute-Nacht-Geschichte zum Lesenüben",
  emoji: "🦔",
  coverSvg: scene({moon:'peek', mouth:'smile', owl:true, glow:true, sparkle:true}),
  chapterSvg: scene({moon:'hidden', mouth:'smile', sparkle:true}),
  chapters: [
    {
      title: "Wo ist der Mond?",
      pages: [
        { svg: scene({moon:'hidden', mouth:'closed'}),
          text:"Tief im Wald, dort wo die Bäume ganz dicht beieinanderstehen, lebt ein kleiner Igel namens Mika. Jeden Abend, wenn die Sonne untergeht, setzt er sich auf seinen Lieblingshügel und wartet." },
        { svg: scene({moon:'hidden', mouth:'closed'}),
          text:"Er wartet auf den Mond, denn Mika liebt es, wenn der Himmel silbern schimmert. Doch in letzter Zeit passiert etwas Merkwürdiges: Der Mond zeigt sich einfach nicht mehr." },
        { svg: scene({moon:'hidden', mouth:'open', sparkle:true}),
          text:"„Wo steckst du nur?“, ruft Mika in die Dunkelheit. Aber außer dem Rascheln der Blätter antwortet ihm niemand." },
        { svg: scene({moon:'hidden', owl:true, mouth:'closed'}),
          text:"Am nächsten Abend fliegt die alte Waldeule vorbei, und Mika fragt sie um Rat. „Der Mond versteckt sich, weil er Angst hat, dass ihn niemand mehr schön findet“, erklärt die Eule leise." },
        { svg: scene({moon:'hidden', mouth:'laugh'}),
          text:"Mika kann das kaum glauben. Er lacht so laut, dass ein paar Blätter von den Bäumen fallen. „Das ist doch Unsinn! Ich finde den Mond wunderschön, egal wie er aussieht.“" },
        { svg: scene({moon:'hidden', mouth:'shout', arms:true, glow:true}),
          text:"Also stellt sich Mika mitten auf die Wiese, holt tief Luft und ruft aus voller Kehle: „Mond, du bist etwas ganz Besonderes! Trau dich endlich hervor!“" },
        { svg: scene({moon:'peek', mouth:'open', glow:true, sparkle:true}),
          text:"Zuerst passiert gar nichts. Doch dann, ganz langsam und vorsichtig, schiebt sich hinter einer dicken Wolke ein goldener Rand hervor." },
        { svg: scene({moon:'full', mouth:'smile', glow:true, sparkle:true}),
          text:"Je mutiger der Mond wird, desto heller leuchtet er – bis er schließlich strahlender scheint als jemals zuvor." },
        { svg: scene({moon:'full', mouth:'smile', owl:true, sparkle:true}),
          text:"Seit jener Nacht zeigt sich der Mond wieder jeden Abend. Und wenn Mika zu ihm hinaufschaut, weiß er: Manchmal braucht man nur einen guten Freund, der einem Mut zuspricht." }
      ]
    }
    /* weitere Kapitel hier ergänzen: { title: "...", pages: [ ... ] } */
  ]
};
