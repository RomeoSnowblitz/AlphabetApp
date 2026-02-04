const state={
  lang:"EN", phon:"IPA",
  practiceFrom:null, practiceMode:null,
  practice:{queue:[],current:null},
  autoReading:false, autoIndex:0,
  colorMode:false,
  audio:new Audio(),
  cefrFilter:new Set(["A1","A2","B1","B2","C1","Unlisted","Undefined"])
};