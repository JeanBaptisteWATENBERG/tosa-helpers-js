"use strict";

const path = require("path")
const fs = require("fs")

function ReadlineObject() {
  this.onLine = null;
  this.onClose = null;
}

ReadlineObject.prototype.on = function(evt, f) {
  if (evt === 'line') {
    this.onLine = f;
  } else {
    this.onClose = f;
  }
}

ReadlineObject.prototype.go = function() {
  const content = fs.readFileSync(path.join(__dirname, 'sample/input2.txt'), "utf8")
  content.split("\n").map(line => this.onLine(line))
  this.onClose()
}

function LocalPrintArray(v) {
  console.dir(v)
}

function LocalPrint(v) {
  console.dir(v)
}

String.prototype.i = function() {
  return parseInt(this, 10);
}

String.prototype.f = function() {
  return parseFloat(this)
}


const readline_object = new ReadlineObject();

var input = [];

var Graph=(function(undefined){var extractKeys=function(obj){var keys=[],key;for(key in obj){Object.prototype.hasOwnProperty.call(obj,key)&&keys.push(key)}return keys};var sorter=function(a,b){return parseFloat(a)-parseFloat(b)};var findPaths=function(map,start,end,infinity){infinity=infinity||Infinity;var costs={},open={'0':[start]},predecessors={},keys;var addToOpen=function(cost,vertex){var key=""+cost;if(!open[key]){open[key]=[]}open[key].push(vertex)};costs[start]=0;while(open){if(!(keys=extractKeys(open)).length){break}keys.sort(sorter);var key=keys[0],bucket=open[key],node=bucket.shift(),currentCost=parseFloat(key),adjacentNodes=map[node]||{};if(!bucket.length){delete open[key]}for(var vertex in adjacentNodes){if(Object.prototype.hasOwnProperty.call(adjacentNodes,vertex)){var cost=adjacentNodes[vertex],totalCost=cost+currentCost,vertexCost=costs[vertex];if((vertexCost===undefined)||(vertexCost>totalCost)){costs[vertex]=totalCost;addToOpen(totalCost,vertex);predecessors[vertex]=node}}}}if(costs[end]===undefined){return null}else{return predecessors}};var extractShortest=function(predecessors,end){var nodes=[],u=end;while(u!==undefined){nodes.push(u);u=predecessors[u]}nodes.reverse();return nodes};var findShortestPath=function(map,nodes){var start=nodes.shift(),end,predecessors,path=[],shortest;while(nodes.length){end=nodes.shift();predecessors=findPaths(map,start,end);if(predecessors){shortest=extractShortest(predecessors,end);if(nodes.length){path.push.apply(path,shortest.slice(0,-1))}else{return path.concat(shortest)}}else{return null}start=end}};var toArray=function(list,offset){try{return Array.prototype.slice.call(list,offset)}catch(e){var a=[];for(var i=offset||0,l=list.length;i<l;i+=1){a.push(list[i])}return a}};var Graph=function(map){this.map=map};Graph.prototype.findShortestPath=function(start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(this.map,start)}else if(arguments.length===2){return findShortestPath(this.map,[start,end])}else{return findShortestPath(this.map,toArray(arguments))}};Graph.findShortestPath=function(map,start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(map,start)}else if(arguments.length===3){return findShortestPath(map,[start,end])}else{return findShortestPath(map,toArray(arguments,1))}};return Graph})();

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse);

readline_object.go()

function pr(i) {
  if (Array.isArray(i)) {
    LocalPrintArray( i ); 
  } else {
    LocalPrint( i ); 
  }
}

function wordsDistance(w1,w2) {
    let diff = 0;
    for (let i =0; i <w1.length;i++) {
        if (w1[i] !== w2[i]) {
            diff++
        }
    }
    return diff
}

function ContestResponse(){
  const l = input.shift().i()
  const bword = input.shift()
  const eword = input.shift()
  const n = input.shift()
  const dico = input
  
  const distances = {}
  for (const w1 of dico) {
      for (const w2 of dico) {
          if (w1 === w2) {
              continue;
          }
          if (!distances[w1]) {
              distances[w1] = {}
          }
          
          if(distances[w2] && distances[w2][w1]) {
            distances[w1][w2] = distances[w2][w1]
          } else {
            if (wordsDistance(w1,w2) == 1) {
              distances[w1][w2] = 1
            }
          }
      }
  }
  
  const graph = new Graph(distances)
  const solutions = graph.findShortestPath(bword, eword)
  
  
  
  if (solutions)
    console.log(solutions.join(" "))
  else
    console.log("IMPOSSIBLE")
}

