function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis.innerHTML = parseInt(lis) + n
}
}

function deepestChird() {
//pulls out the most deeply nested child from 'div#grand-node'
  
}