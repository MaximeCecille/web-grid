// nom : Cécille
// prénom : Maxime

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener('click',ajout)
  for (let child of document.getElementById("grid").children) 
  {
  child.addEventListener('click', () => {
    const random255 = () => Math.floor(Math.random() * 255)
    const randomColor = () => `rgba(${random255()},${random255()},${random255()},0.5`
    child.style.backgroundColor = randomColor( )
  } )
}
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function ajout() { 
  for (let i=0; i<10; i++) {
    const newDiv = document.createElement("div")
    newDiv.addEventListener('click', () => { 
      const random255 = () => Math.floor(Math.random() * 255)
      const randomColor = () => `rgba(${random255()},${random255()},${random255()},0.5`
      newDiv.style.backgroundColor = randomColor()
    }
    )
    document.getElementById("grid").appendChild(newDiv)
    
}


}
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}
