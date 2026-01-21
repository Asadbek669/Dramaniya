const dramas = [
  {
    title: "Men bugundan insonman",
    image: "images/drama1.jpg",
    link: "https://t.me/Dramalar_robot?start=21"
  },
  {
    title: "Idolning advokati",
    image: "images/drama2.jpg",
    link: "https://t.me/Dramalar_robot?start=22"
  },
  {
    title: "Beva Pakning nikohi",
    image: "images/drama3.jpg",
    link: "https://t.me/Dramalar_robot?start=23"
  }
];

const grid = document.getElementById("dramaGrid");

dramas.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${d.image}" alt="${d.title}">
    <span>${d.title}</span>
  `;
  card.onclick = () => {
    window.location.href = d.link;
  };
  grid.appendChild(card);
});
