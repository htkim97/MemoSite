gsap.from('.add-memo1',{opacity:0,duration:1,y:-50});
gsap.from('.add-memo2',{opacity:0,duration:1,y:-50,delay:0.1});
gsap.from('.add-memo3',{opacity:0,duration:1,y:-50,delay:0.2});
gsap.from('.add-memo4',{opacity:0,duration:1,y:-50,delay:0.3});
gsap.from('.hr1',{opacity:0,duration:1,y:50,delay:0.7});
gsap.from('.title',{opacity:0,duration:1,x:-50,delay:1});
gsap.from('.add-memo button',{opacity:0,duration:3,rotate:220});
gsap.from('.simpson',{opacity:0,ease:'bounce',duration:2,y:100});




// 박스 클릭

function box_1_Click(bt){
  gsap.to('#text_box1',{duration:4,x:300,backgroundColor:'red',rotate:360,ease:'elastic'});
  gsap.to('#text_box1',{duration:1,width:200,height:200,});
  gsap.to('#text_box1',{duration:1,width:400,delay:1});
  gsap.to('#delete_red',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'red',delay:1})

  


}

function box_2_Click(bt){
  gsap.to('#text_box2',{duration:4,x:300,backgroundColor:'pink',rotate:360,ease:'elastic'});
  gsap.to('#text_box2',{duration:1,width:200,height:200,});
  gsap.to('#text_box2',{duration:1,width:400,delay:1});
  gsap.to('#delete_pink',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'pink',delay:1})
 


}
function box_3_Click(bt){
  gsap.to('#text_box3',{duration:4,x:300,backgroundColor:'blue',rotate:360,ease:'elastic'});
  gsap.to('#text_box3',{duration:1,width:200,height:200,});
  gsap.to('#text_box3',{duration:1,width:400,delay:1});
  gsap.to('#delete_blue',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'blue',delay:1})
  


}
function box_4_Click(bt){
  gsap.to('#text_box4',{duration:4,x:300,backgroundColor:'orange',rotate:360,ease:'elastic'});
  gsap.to('#text_box4',{duration:1,width:200,height:200,});
  gsap.to('#text_box4',{duration:1,width:400,delay:1});
  gsap.to('#delete_orange',{duration:1,x:330,y:-60,rotate:360,opacity:0.7, color:'orange',delay:1})
  


}


// 요소 삭제

function delete_1_click(){
  document.getElementById("text_box1").value='';
}
  
function delete_2_click(){
  document.getElementById("text_box2").value='';
}

function delete_3_click(){
  document.getElementById("text_box3").value='';
}

function delete_4_click(){
  document.getElementById("text_box4").value='';
}



