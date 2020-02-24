var wrapperEle = document.body.querySelector(".wrapper");
var numberEle = document.body.querySelector(".number");

var warriorList = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true,
    attacktype:"ice"
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true,
    attacktype:"ice"
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true,
    attacktype:"fire"
  } 
]

var dragonHealth=10;
numberEle.innerHTML=dragonHealth;

function attacks(damage, type, character){
  if(type == "fire"){
    dragonHealth = dragonHealth - (damage-1);
  }else if(type == "ice"){
    dragonHealth = dragonHealth-(damage+1);
  }else{
    dragonHealth = dragonHealth - damage
  }
  numberEle.innerHTML=dragonHealth;
  if (dragonHealth<=0){
    document.body.innerHTML = "You win"
  }
  
}
  
//  function increase(num, color){
//   number=number+num; 
  
//   if dragonHealth<=0{
//     document.body.innerHTML = "You win"
//   }else{
//     document.body.innerHTML = "You lose"
//   }
// }

// attackEle.addEventListener("click", function(){
//   attacks(3, 'fire', 'bob');
// })
warriorList.forEach((warrior) => {
  var warriorButton = document.createElement('button');
  warriorButton.innerHTML = warrior.name;
  warriorButton.addEventListener("click", function(){
  attacks(warrior.damage, warrior.attacktype, warrior.name);
   
});
  wrapperEle.appendChild(warriorButton);
});