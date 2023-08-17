// PROBLEM
/*
Title: "Cosmic Cryptographer"

Description:
You have been recruited by an intergalactic society of cryptographers who have discovered a mysterious extraterrestrial artifact in a distant galaxy. This ancient artifact is believed to contain encrypted knowledge that could unlock advanced technologies and shape the future of the universe. However, breaking the encryption is no easy task, as it involves deciphering complex cosmic patterns.

The artifact presents itself as a 2D grid of celestial symbols, and your mission is to implement a JavaScript function `decryptArtifact(artifactGrid)` that will decipher the encryption and reveal the hidden message encoded within.

Artifact Grid Representation:
The `artifactGrid` is a 2D array of celestial symbols, where each symbol represents a unique cosmic character. The symbols are only a representation; their true meanings are unknown. Here's an example of how the artifactGrid might look like:
```javascript
const artifactGrid = [
  ['♈', '♉', '♌', '♊'],
  ['♋', '♏', '♑', '♓'],
  ['♍', '♎', '♒', '♐'],
];
```

Challenge:
Your task is to implement the `decryptArtifact(artifactGrid)` function to decipher the cosmic message encoded within the grid. The hidden message can be extracted by traversing the grid in a specific pattern and concatenating the characters encountered.

Decryption Rules:
1. Start at the top-left corner of the grid (0, 0).
2. Move in a zigzag pattern as follows: right → down → left → down → right → down → left → down, and so on. If you reach the edge of the grid during the traversal, wrap around to the opposite edge.
3. Each cosmic character encountered during the traversal should be concatenated to the result string.
4. Continue until you reach the bottom row of the grid.

Example:
```javascript
const artifactGrid = [
  ['♈', '♉', '♌', '♊'],
  ['♋', '♏', '♑', '♓'],
  ['♍', '♎', '♒', '♐'],
];

const message = decryptArtifact(artifactGrid);
console.log(message); // Output: "AQUARIUSGEMINILEOBSCORPIO"
```

In this example, the function should follow the zigzag pattern through the artifactGrid and extract the hidden message as "AQUARIUSGEMINILEOBSCORPIO".

Note:
- The artifactGrid can have a variable size, but it will always be a rectangular grid (all rows will have the same length).
- You can assume that the artifactGrid will contain only valid celestial symbols as characters.
- The hidden message might not always form a meaningful word, but it will be a sequence of characters extracted from the grid using the traversal pattern.
*/

// SOLUTION

function decryptArtifact(artifactGrid) {
  const numRows = artifactGrid.length;
  const numCols = artifactGrid[0].length;
  let message = '';
  
  let row = 0;
  let col = 0;
  let moveDown = true;

  while (row < numRows) {
    message += artifactGrid[row][col];

    if (moveDown) {
      if (col === numCols - 1) {
        row++;
        moveDown = false;
      } else if (col === 0) {
        row++;
        moveDown = false;
      } else {
        row++;
        col--;
      }
    } else {
      if (col === numCols - 1) {
        row++;
        moveDown = true;
      } else if (col === 0) {
        row++;
        moveDown = true;
      } else {
        row++;
        col++;
      }
    }
  }

  return message;
}

// Test data
const artifactGrid = [
  ['♈', '♉', '♌', '♊'],
  ['♋', '♏', '♑', '♓'],
  ['♍', '♎', '♒', '♐'],
];

const message = decryptArtifact(artifactGrid);
console.log(message); // Output: "AQUARIUSGEMINILEOBSCORPIO"
