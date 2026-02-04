const FAQ=[
 {enQ:"What is this app?",enA:"Pronunciation practice tool.",
  jpQ:"このアプリは何ですか？",jpA:"発音練習用のアプリです。"},
 {enQ:"What are fake words?",enA:"Used only for sound practice.",
  jpQ:"偽の単語とは？",jpA:"音の練習専用です。"},
 {enQ:"Why color mode?",enA:"Shows sound structure.",
  jpQ:"カラーモードとは？",jpA:"音の構造を示します。"}
];

function openFAQ(i){
 const f=FAQ[i];
 openInfo(`<h3>${state.lang==="EN"?f.enQ:f.jpQ}</h3>
 <p>${state.lang==="EN"?f.enA:f.jpA}</p>`);
}

function toggleLang(){
 state.lang = state.lang === "EN" ? "JP" : "EN";
 renderUI();
 updateFAQButtons();
}

function togglePhon(){
 state.phon = state.phon === "IPA" ? "CE" : "IPA";
 renderUI();
 renderSounds();
}

