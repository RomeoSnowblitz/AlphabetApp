/* ================= PRACTICE ================= */
function openPractice(from,mode){
 state.practiceFrom=from;
 state.practiceMode=mode;
 buildQueue();
 showScreen("practiceScreen");
 nextWord();
}
function exitPractice(){
 showScreen(state.practiceFrom==="Sounds"?"soundsScreen":"alphabetScreen");
}
function buildQueue(){
 const max=$("maxSounds").value;
 const real=$("realOnly").checked;
 state.practice.queue=WORDS.filter(w=>{
  if(real && w.enDef.toLowerCase().includes("fake")) return false;
  if(max!=="Any" && Math.abs(w.sounds)>+max) return false;
  return true;
 });
}
function nextWord(){
 if(!state.practice.queue.length){$("practiceCard").textContent="No words";return;}
 state.practice.current=state.practice.queue[Math.floor(Math.random()*state.practice.queue.length)];
 renderCard();
}
function renderCard(){
 const t=TEXT[state.lang];
 const w=state.practice.current;
 $("practiceCard").innerHTML=`
  <h2>${w.word}</h2>
  <button onclick="playWord()">${t.play}</button><br><br>
  <button onclick="reveal()">${t.reveal}</button>`;
}
function playWord(){
 state.audio.src=state.practice.current.soundFile;
 state.audio.play();
}
function reveal(){
 const t=TEXT[state.lang];
 const w=state.practice.current;
 playWord();
 $("practiceCard").innerHTML=`
  <h2>${w.word}</h2>
  <p>${state.phon==="IPA"?w.ipa:w.ce}</p>
  <p>${w.jpWord}</p>
  <p>${state.lang==="EN"?w.enDef:w.jpDef}</p>
  <button onclick="score('hard')">${t.hard}</button>
  <button onclick="score('skip')">${t.skip}</button>
  <button onclick="score('easy')">${t.easy}</button>`;
}
function score(type){
 state.practice.current.tallies[type]++;
 nextWord();
}