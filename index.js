function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n){
  let newRank = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < newRank.length; i++) {
    newRank[i].innerHTML = parseInt(newRank[i]) + n
}
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')}


//  let current = document.querySelectorAll('#grand-node')
//  let next = []
// while (current){
//    if ()
//  }


//  
//var nodes = document.querySelectorAll('#grand-node');
//  if(!nodes.length) return false;
//  return nodes[nodes.length-1];

//pulls out the most deeply nested child from 'div#grand-node'