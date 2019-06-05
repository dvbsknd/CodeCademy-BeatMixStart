const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

const getDrumArrayByName = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
};

const toggleDrum = (drumArrayName, index) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  }
  drums[index] = !drums[index];
};

const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  }
};

const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return;
  }
  for (let i = 0; i < drums.length; i++) {
    drums[i] = !drums[i];
  }
};

const getNeighborPads = (x, y, size) => {
  // Abort if home is not on the range
  if (x < 0 || x > size - 1 || y < 0 || y > size - 1) { 
    return [];
  }
  // Set neighbour values based on adding/subtracting from current values
  const top = [x, y + 1];
  const right = [x + 1, y];
  const bottom = [x, y - 1];
  const left = [x -1, y];
  // Remove any coordinates that are outside the boundaries
  let neighbours = [top, right, bottom, left].filter(neighbour => {
    return neighbour[0] <= size - 1 && neighbour[0] >= 0 && neighbour[1] <= size - 1 && neighbour[1] >= 0;
  });
  return neighbours;
}