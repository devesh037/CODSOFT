let d = document.getElementById("display");
function add(v){ d.value += v; }
function clr(){ d.value = ""; }
function del(){ d.value = d.value.slice(0,-1); }
function calc(){ d.value = eval(d.value); }
