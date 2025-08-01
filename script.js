
const planetData = {
  Mercury: {
    name: "Mercury",
    size: "4,879 km diameter",
    distance: "57.9 million km from Sun"
  },
  Venus: {
    name: "Venus",
    size: "12,104 km diameter",
    distance: "108.2 million km from Sun"
  },
  Earth: {
    name: "Earth",
    size: "12,742 km diameter",
    distance: "149.6 million km from Sun"
  },
  Mars: {
    name: "Mars",
    size: "6,779 km diameter",
    distance: "227.9 million km from Sun"
  },
 
};

function showInfo(planetName) {
  const info = planetData[planetName];
  const infoBox = document.getElementById("infoBox");

  if (info) {
    infoBox.innerHTML = `
      <h3>${info.name}</h3>
      <p><strong>Size:</strong> ${info.size}</p>
      <p><strong>Distance:</strong> ${info.distance}</p>
    `;
    infoBox.style.display = "block";
  }
}
