const quantidade = 12;
const folhas = [
  "/imagens/folha1.png",
  "/imagens/folha2.png",
  "/imagens/folha3.png"
];

for (let i = 0; i < quantidade; i++) {
  const folha = document.createElement("img");
  folha.src = folhas[Math.floor(Math.random() * folhas.length)];
  folha.classList.add("folha-animada");

  folha.style.left = Math.random() * 100 + "vw";
  folha.style.animationDuration = 10 + Math.random() * 10 + "s";
  folha.style.animationDelay = Math.random() * 5 + "s";
  folha.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(folha);
}
