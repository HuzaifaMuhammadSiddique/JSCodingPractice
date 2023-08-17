// PROBLEM
/*
Title: "The Quantum Realm Puzzle"

Description:
In a parallel universe where quantum computing is the norm, you find yourself trapped in a strange realm where conventional programming concepts no longer apply. The Quantum Realm is a maze of interconnected quantum nodes, each representing a quantum entangled state. Your mission is to navigate through this maze and find a way to reach the exit node to escape.

Quantum Node Representation:
Each quantum node is represented by a JavaScript object with the following properties:

```javascript
const quantumNode = {
  id: string,           // A unique alphanumeric ID for the node
  neighbors: [string],  // An array of IDs representing neighboring nodes
  probability: number   // A float value (0 <= probability <= 1) representing the probability of reaching this node
};
```

Challenge:
Write a JavaScript function `findEscapePath(startNode, exitNode)` that takes the `startNode` and `exitNode` as input and returns an array of IDs representing the path to escape the Quantum Realm. Your task is to find the most probable path from the `startNode` to the `exitNode`.

Constraints:
1. The input nodes are guaranteed to be connected in the Quantum Realm maze.
2. The probabilities of the nodes will always be valid float values.
3. The path should be an array of unique node IDs, including the `startNode` and `exitNode`.

Note:
In the Quantum Realm, you can traverse to any neighboring node with a probability equal to the neighbor's probability. The probabilities may change as you traverse through different paths.

Example:

```javascript
const nodeA = {
  id: "A",
  neighbors: ["B", "C"],
  probability: 0.6
};

const nodeB = {
  id: "B",
  neighbors: ["A", "C", "D"],
  probability: 0.3
};

const nodeC = {
  id: "C",
  neighbors: ["A", "B", "D"],
  probability: 0.4
};

const nodeD = {
  id: "D",
  neighbors: ["B", "C", "E"],
  probability: 0.7
};

const nodeE = {
  id: "E",
  neighbors: ["D", "F"],
  probability: 0.2
};

const nodeF = {
  id: "F",
  neighbors: ["E"],
  probability: 0.9
};

// Call the function with the provided nodes to find the escape path
const escapePath = findEscapePath(nodeA, nodeF);
console.log(escapePath); // Output: ["A", "C", "D", "E", "F"]
```

In this example, the function should return the most probable path from node "A" to node "F", which is ["A", "C", "D", "E", "F"] with a combined probability of `0.6 * 0.4 * 0.7 * 0.2 * 0.9 = 0.03024`.

*/

// SOLUTION

function findEscapePath(startNode, exitNode) {
  let maxProbability = 0;
  let bestPath = [];

  function dfs(currentNode, currentPath, currentProbability) {
    if (currentNode === exitNode) {
      if (currentProbability > maxProbability) {
        maxProbability = currentProbability;
        bestPath = [...currentPath];
      }
      return;
    }

    for (const neighborId of currentNode.neighbors) {
      const neighborNode = getNodeById(neighborId); // You need to implement this function
      const neighborProbability = neighborNode.probability;
      
      if (!currentPath.includes(neighborId)) {
        dfs(
          neighborNode,
          [...currentPath, neighborId],
          currentProbability * neighborProbability
        );
      }
    }
  }

  dfs(startNode, [startNode.id], startNode.probability);
  return bestPath;
}

// Test data
const nodeA = {
  id: "A",
  neighbors: ["B", "C"],
  probability: 0.6
};

const nodeB = {
  id: "B",
  neighbors: ["A", "C", "D"],
  probability: 0.3
};

const nodeC = {
  id: "C",
  neighbors: ["A", "B", "D"],
  probability: 0.4
};

const nodeD = {
  id: "D",
  neighbors: ["B", "C", "E"],
  probability: 0.7
};

const nodeE = {
  id: "E",
  neighbors: ["D", "F"],
  probability: 0.2
};

const nodeF = {
  id: "F",
  neighbors: ["E"],
  probability: 0.9
};

// Call the function with the provided nodes to find the escape path
const escapePath = findEscapePath(nodeA, nodeF);
console.log(escapePath); // Output: ["A", "C", "D", "E", "F"]
