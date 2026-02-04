


/* ================= LANGUAGE MAP ================= */
const TEXT={
 EN:{
  title:"Alphabet App",sounds:"Sounds",vocab:"Vocabulary",
  reading:"Reading",dict:"Dictionary",
  practice:"Practice",speaking:"Speaking",listening:"Listening",both:"Both",
  max:"Max Sounds",real:"Real Words Only",any:"Any",
  play:"Play",reveal:"Reveal",
  hard:"Hard",skip:"Skipped",easy:"Easy",
  stories:"Stories",
  storyA:"Story A",storyB:"Story B",storyC:"Story C",
  colorOn:"Color Mode: ON",colorOff:"Color Mode: OFF",
  auto:"Auto Read",paused:"Pause",
  search:"Search…"
 },
 JP:{
  title:"アルファベットアプリ",sounds:"音",vocab:"語彙",
  reading:"読み物",dict:"辞書",
  practice:"練習",speaking:"スピーキング",listening:"リスニング",both:"両方",
  max:"最大音数",real:"実在語のみ",any:"任意",
  play:"再生",reveal:"表示",
  hard:"難しい",skip:"スキップ",easy:"簡単",
  stories:"物語",
  storyA:"物語A",storyB:"物語B",storyC:"物語C",
  colorOn:"カラーモード：オン",colorOff:"カラーモード：オフ",
  auto:"自動再生",paused:"一時停止",
  search:"検索…"
 }
};

/* ================= DICTIONARY ================= */


function renderDictionary(){
 $("dictList").innerHTML="";
 const q=$("dictSearch").value.toLowerCase();
 WORDS.forEach(w=>{
  if(!state.cefrFilter.has(w.cefr)) return;
  if(q && !w.word.includes(q)) return;
  const d=document.createElement("div");
  d.innerHTML=`
   <button onclick="event.stopPropagation();playSound('${w.soundFile}')">🔊</button>
   <b>${w.word}</b> | ${w.cefr} | ${state.phon==="IPA"?w.ipa:w.ce} | ${w.jpWord}
   | ${TEXT[state.lang].hard}:${w.tallies.hard}
   ${TEXT[state.lang].skip}:${w.tallies.skip}
   ${TEXT[state.lang].easy}:${w.tallies.easy}`;
  d.onclick=()=>openInfo(`<h2>${w.word}</h2>
   <button onclick="playSound('${w.soundFile}')">🔊</button>
   <p>${state.phon==="IPA"?w.ipa:w.ce}</p>
   <p>${w.jpWord}</p>
   <p>${state.lang==="EN"?w.enDef:w.jpDef}</p>`);
  $("dictList").appendChild(d);
 });
}