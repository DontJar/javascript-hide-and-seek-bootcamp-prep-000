function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n){
  let newRank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < newRank.length; i++) {
    newRank[i].innerHTML = parseInt(newRank[i])
}
}

function deepestChird() {
//pulls out the most deeply nested child from 'div#grand-node'
  
}