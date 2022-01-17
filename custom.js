gsap.from('#plus_red',{opacity:0,duration:1,y:-50, rotate:220});
gsap.from('#plus_pink',{opacity:0,duration:1,y:-50,delay:0.1, rotate:220});
gsap.from('#plus_blue',{opacity:0,duration:1,y:-50,delay:0.2, rotate:220});
gsap.from('#plus_orange',{opacity:0,duration:1,y:-50,delay:0.3, rotate:220});



gsap.from('.hr1',{opacity:0,duration:1,y:50,delay:0.1});
gsap.from('.title',{opacity:0,duration:1,x:-50,delay:1});
gsap.from('.name',{opacity:0,duration:1,y:50,delay:1.5});

gsap.from('.logo',{opacity:0,ease:'bounce',duration:2,x:30});
gsap.from('#chat',{duration:3,opacity:0,ease:'elastic',duration:2,y:20, delay:2, });
 


// 개똥같은 박스 무한 증식 부분

const box_1_Click=()=>{
  const add_memo1=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML="  <textarea id='text_box1'></textarea> <button class='material-icons' id='delete_1' onclick='remove(this)'>delete</button><button class='material-icons' id='reset_1' onclick='reset_1(this)'>cached</button>";
  add_memo.appendChild(newD);
  gsap.to('#text_box1',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_1',{ease:'elastic',duration:2,y:50});
  gsap.to('#reset_1',{ease:'elastic',duration:2,y:50});
  
 
 
}

const box_2_Click=()=>{
  const add_memo=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <textarea id='text_box2'></textarea> <button class='material-icons' id='delete_2' onclick='remove(this)'>delete</button><button class='material-icons' id='reset_2' onclick='reset_2(this)'>cached</button>";
  add_memo.appendChild(newD);
  gsap.to('#text_box2',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_2',{ease:'elastic',duration:2,y:50});
  gsap.to('#reset_2',{ease:'elastic',duration:2,y:50});
}

const box_3_Click=()=>{
  const add_memo=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <textarea id='text_box3'></textarea> <button class='material-icons' id='delete_3' onclick='remove(this)'>delete</button><button class='material-icons' id='reset_3' onclick='reset_3(this)'>cached</button> ";
  add_memo.appendChild(newD);
  gsap.to('#text_box3',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_3',{ease:'elastic',duration:2,y:50});
  gsap.to('#reset_3',{ease:'elastic',duration:2,y:50});
}

const box_4_Click=()=>{
  const add_memo=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <textarea id='text_box4'></textarea> <button class='material-icons' id='delete_4' onclick='remove(this)'>delete</button><button class='material-icons' id='reset_4' onclick='reset_4(this)'>cached</button> ";
  add_memo.appendChild(newD);
  gsap.to('#text_box4',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_4',{ease:'elastic',duration:2,y:50});
  gsap.to('#reset_4',{ease:'elastic',duration:2,y:50});
}



// 요소 삭제 버튼
const remove = (obj) => {
  document.getElementById('add_memo').removeChild(obj.parentNode);
 
}


// 검색 버튼

function search(){
  
  console.log("응 안되 검색");
}



// 내용 리셋

function reset_1(){
  document.getElementById("text_box1").value='';
}
  
function reset_2(){
  document.getElementById("text_box2").value='';
}

function reset_3(){
  document.getElementById("text_box3").value='';
}

function reset_4(){
  document.getElementById("text_box4").value='';
}

