let quiz=[
 {q:"HTML stands for?", o:["Hyper Text Markup Language","High Text ML","Home Tool ML"], a:0},
 {q:"CSS used for?", o:["Logic","Styling","Database"], a:1}
];
let i=0,score=0;

function load(){
 document.getElementById("q").innerText=quiz[i].q;
 let ops="";
 quiz[i].o.forEach((e,j)=>{
   ops+=`<input type="radio" name="op" value="${j}">${e}<br>`;
 });
 document.getElementById("options").innerHTML=ops;
}
function next(){
 let ans=document.querySelector('input[name="op"]:checked');
 if(ans && ans.value==quiz[i].a) score++;
 i++;
 if(i<quiz.length) load();
 else document.getElementById("result").innerText="Score: "+score;
}
load();
