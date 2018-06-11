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
//  return document.querySelector('#grand-node div div div div')}
// I dont like this solution.  Feels like cheating.


let current = document.getElementById('grand-node')
let next = current.children[0]
while (next) {
    current = next
    next = current.children[0]
  }
  return current
}