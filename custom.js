gsap.from('.add-memo1',{opacity:0,duration:1,y:-50});
gsap.from('.add-memo2',{opacity:0,duration:1,y:-50,delay:0.1});
gsap.from('.add-memo3',{opacity:0,duration:1,y:-50,delay:0.2});
gsap.from('.add-memo4',{opacity:0,duration:1,y:-50,delay:0.3});
gsap.from('.title',{opacity:0,duration:1,x:-50,delay:1});
gsap.from('.add-memo button',{opacity:0,duration:3,rotate:220});
gsap.from('.simpson',{opacity:0,ease:'bounce',duration:2,y:100});



function box_1_Click(bt){
  gsap.to('.text_box1',{duration:4,x:300,backgroundColor:'red',rotate:360,ease:'elastic'});
  gsap.to('.text_box1',{duration:1,width:200,height:200,});
  gsap.to('.text_box1',{duration:1,width:400,delay:1});

  


}




function box_2_Click(bt){
  gsap.to('.text_box2',{duration:4,x:300,backgroundColor:'pink',rotate:360,ease:'elastic'});
  gsap.to('.text_box2',{duration:1,width:200,height:200,});
  gsap.to('.text_box2',{duration:1,width:400,delay:1});
 


}
function box_3_Click(bt){
  gsap.to('.text_box3',{duration:4,x:300,backgroundColor:'blue',rotate:360,ease:'elastic'});
  gsap.to('.text_box3',{duration:1,width:200,height:200,});
  gsap.to('.text_box3',{duration:1,width:400,delay:1});
  


}
function box_4_Click(bt){
  gsap.to('.text_box4',{duration:4,x:300,backgroundColor:'orange',rotate:360,ease:'elastic'});
  gsap.to('.text_box4',{duration:1,width:200,height:200,});
  gsap.to('.text_box4',{duration:1,width:400,delay:1});
  


}


