"use strict";

var input = [];

if(!Array.prototype.includes){Object.defineProperty(Array.prototype,'includes',{value:function(searchElement,fromIndex){if(this==null){throw new TypeError('"this" is null or not defined')}var o=Object(this);var len=o.length>>>0;if(len===0){return false}var n=fromIndex|0;var k=Math.max(n>=0?n:len-Math.abs(n),0);function sameValueZero(x,y){return x===y||(typeof x==='number'&&typeof y==='number'&&isNaN(x)&&isNaN(y))}while(k<len){if(sameValueZero(o[k],searchElement)){return true}k+=1}return false}})}
var GraphFlagNodes=(function(undefined){var extractKeys=function(obj){var keys=[],key;for(key in obj){Object.prototype.hasOwnProperty.call(obj,key)&&keys.push(key)}return keys};var sorter=function(a,b){return parseFloat(a)-parseFloat(b)};var findPaths=function(map,start,end,infinity){infinity=infinity||Infinity;var costs={},open={'0':[start]},predecessors={},keys;const visitedVertex=[];var addToOpen=function(cost,vertex){var key=""+cost;if(!open[key]){open[key]=[]}open[key].push(vertex)};costs[start]=0;while(open){if(!(keys=extractKeys(open)).length){break}keys.sort(sorter);var key=keys[0],bucket=open[key],node=bucket.shift(),currentCost=parseFloat(key),adjacentNodes=map[node]||{};if(!bucket.length){delete open[key]}for(var vertex in adjacentNodes){if(Object.prototype.hasOwnProperty.call(adjacentNodes,vertex)){var cost=adjacentNodes[vertex],totalCost=cost+currentCost,vertexCost=costs[vertex];if((vertexCost===undefined)||(vertexCost>totalCost)){costs[vertex]=totalCost;if(!visitedVertex.includes(vertex)){addToOpen(totalCost,vertex);predecessors[vertex]=node}}}}visitedVertex.push(node)}if(costs[end]===undefined){return null}else{return predecessors}};var extractShortest=function(predecessors,end){var nodes=[],u=end;while(u!==undefined){nodes.push(u);u=predecessors[u]}nodes.reverse();return nodes};var findShortestPath=function(map,nodes){var start=nodes.shift(),end,predecessors,path=[],shortest;while(nodes.length){end=nodes.shift();predecessors=findPaths(map,start,end);if(predecessors){shortest=extractShortest(predecessors,end);if(nodes.length){path.push.apply(path,shortest.slice(0,-1))}else{return path.concat(shortest)}}else{return null}start=end}};var toArray=function(list,offset){try{return Array.prototype.slice.call(list,offset)}catch(e){var a=[];for(var i=offset||0,l=list.length;i<l;i+=1){a.push(list[i])}return a}};var GraphFlagNodes=function(map){this.map=map};GraphFlagNodes.prototype.findShortestPath=function(start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(this.map,start)}else if(arguments.length===2){return findShortestPath(this.map,[start,end])}else{return findShortestPath(this.map,toArray(arguments))}};GraphFlagNodes.findShortestPath=function(map,start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(map,start)}else if(arguments.length===3){return findShortestPath(map,[start,end])}else{return findShortestPath(map,toArray(arguments,1))}};return GraphFlagNodes})();
var Graph=(function(undefined){var extractKeys=function(obj){var keys=[],key;for(key in obj){Object.prototype.hasOwnProperty.call(obj,key)&&keys.push(key)}return keys};var sorter=function(a,b){return parseFloat(a)-parseFloat(b)};var findPaths=function(map,start,end,infinity){infinity=infinity||Infinity;var costs={},open={'0':[start]},predecessors={},keys;var addToOpen=function(cost,vertex){var key=""+cost;if(!open[key]){open[key]=[]}open[key].push(vertex)};costs[start]=0;while(open){if(!(keys=extractKeys(open)).length){break}keys.sort(sorter);var key=keys[0],bucket=open[key],node=bucket.shift(),currentCost=parseFloat(key),adjacentNodes=map[node]||{};if(!bucket.length){delete open[key]}for(var vertex in adjacentNodes){if(Object.prototype.hasOwnProperty.call(adjacentNodes,vertex)){var cost=adjacentNodes[vertex],totalCost=cost+currentCost,vertexCost=costs[vertex];if((vertexCost===undefined)||(vertexCost>totalCost)){costs[vertex]=totalCost;addToOpen(totalCost,vertex);predecessors[vertex]=node}}}}if(costs[end]===undefined){return null}else{return predecessors}};var extractShortest=function(predecessors,end){var nodes=[],u=end;while(u!==undefined){nodes.push(u);u=predecessors[u]}nodes.reverse();return nodes};var findShortestPath=function(map,nodes){var start=nodes.shift(),end,predecessors,path=[],shortest;while(nodes.length){end=nodes.shift();predecessors=findPaths(map,start,end);if(predecessors){shortest=extractShortest(predecessors,end);if(nodes.length){path.push.apply(path,shortest.slice(0,-1))}else{return path.concat(shortest)}}else{return null}start=end}};var toArray=function(list,offset){try{return Array.prototype.slice.call(list,offset)}catch(e){var a=[];for(var i=offset||0,l=list.length;i<l;i+=1){a.push(list[i])}return a}};var Graph=function(map){this.map=map};Graph.prototype.findShortestPath=function(start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(this.map,start)}else if(arguments.length===2){return findShortestPath(this.map,[start,end])}else{return findShortestPath(this.map,toArray(arguments))}};Graph.findShortestPath=function(map,start,end){if(Object.prototype.toString.call(start)==='[object Array]'){return findShortestPath(map,start)}else if(arguments.length===3){return findShortestPath(map,[start,end])}else{return findShortestPath(map,toArray(arguments,1))}};return Graph})();

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are red
readline_object.on("close", ContestResponse); 

String.prototype.i = function() {
  return parseInt(this, 10);
}

String.prototype.f = function() {
  return parseFloat(this)
}

function pr(i) {
  if (Array.isArray(i)) {
    LocalPrintArray( i ); 
  } else {
    LocalPrint( i ); 
  }
}

function ContestResponse(){
  const n = input.shift().i()
  //const m = input.shift()
  //const last = input.pop()
  //input.
  
}


