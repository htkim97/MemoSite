gsap.from('#plus_red',{opacity:0,duration:1,y:-50, rotate:220});
gsap.from('#plus_pink',{opacity:0,duration:1,y:-50,delay:0.1, rotate:220});
gsap.from('#plus_blue',{opacity:0,duration:1,y:-50,delay:0.2, rotate:220});
gsap.from('#plus_orange',{opacity:0,duration:1,y:-50,delay:0.3, rotate:220});
gsap.from('.hr1',{opacity:0,duration:1,y:50,delay:0.7});
gsap.from('.title',{opacity:0,duration:1,x:-50,delay:1});
gsap.from('.logo',{opacity:0,ease:'bounce',duration:2,x:30});
 


// 개똥같은 박스 무한 증식 부분

const box_1_Click=()=>{
  const add_memo1=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML="  <input type='text' id='text_box1'> <button class='material-icons' id='delete_1' onclick='remove(this)'>delete</button>";
  add_memo1.appendChild(newD);
  gsap.to('#text_box1',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_1',{ease:'elastic',duration:2,y:50});
  
 
 
}

const box_2_Click=()=>{
  const add_memo2=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <input type='text' id='text_box2'> <button class='material-icons' id='delete_2' onclick='remove(this)'>delete</button>";
  add_memo2.appendChild(newD);
  gsap.to('#text_box2',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_2',{ease:'elastic',duration:2,y:50});
}

const box_3_Click=()=>{
  const add_memo3=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <input type='text' id='text_box3'> <button class='material-icons' id='delete_3' onclick='remove(this)'>delete</button> ";
  add_memo3.appendChild(newD);
  gsap.to('#text_box3',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_3',{ease:'elastic',duration:2,y:50});
}

const box_4_Click=()=>{
  const add_memo4=document.getElementById("add_memo");
  const newD=document.createElement('div');
  newD.innerHTML=" <input type='text' id='text_box4'> <button class='material-icons' id='delete_4' onclick='remove(this)'>delete</button> ";
  add_memo4.appendChild(newD);
  gsap.to('#text_box4',{ease:'elastic',duration:2,y:50});
  gsap.to('#delete_4',{ease:'elastic',duration:2,y:50});
}



// 요소 삭제 버튼
const remove = (obj) => {
  document.getElementById('add_memo').removeChild(obj.parentNode);
}


// 뿌직


// function box_1_Click(bt){
//   gsap.to('#text_box1',{duration:4,x:300,backgroundColor:'red',rotate:360,ease:'elastic'});
//   gsap.to('#text_box1',{duration:1,width:200,height:200,});
//   gsap.to('#text_box1',{duration:1,width:400,delay:1});
  
//   gsap.to('#delete_red',{duration:1,x:330,y:-90,rotate:360,opacity:0.7, color:'red',delay:1})
 


// }

// function box_2_Click(bt){
//   gsap.to('#text_box2',{duration:4,x:300,backgroundColor:'pink',rotate:360,ease:'elastic'});
//   gsap.to('#text_box2',{duration:1,width:200,height:200,});
//   gsap.to('#text_box2',{duration:1,width:400,delay:1});
//   gsap.to('#delete_pink',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'pink',delay:1})
 


// }
// function box_3_Click(bt){
//   gsap.to('#text_box3',{duration:4,x:300,backgroundColor:'blue',rotate:360,ease:'elastic'});
//   gsap.to('#text_box3',{duration:1,width:200,height:200,});
//   gsap.to('#text_box3',{duration:1,width:400,delay:1});
//   gsap.to('#delete_blue',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'blue',delay:1})
  


// }
// function box_4_Click(bt){
//   gsap.to('#text_box4',{duration:4,x:300,backgroundColor:'orange',rotate:360,ease:'elastic'});
//   gsap.to('#text_box4',{duration:1,width:200,height:200,});
//   gsap.to('#text_box4',{duration:1,width:400,delay:1});
//   gsap.to('#delete_orange',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'orange',delay:1})
  


// }


// // 뿌직2 (input 내용 초기화)

// function delete_1_click(){
//   document.getElementById("text_box1").value='';
// }
  
// function delete_2_click(){
//   document.getElementById("text_box2").value='';
// }

// function delete_3_click(){
//   document.getElementById("text_box3").value='';
// }

// function delete_4_click(){
//   document.getElementById("text_box4").value='';
// }

