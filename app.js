// 🔹 Protection anti-injection HTML
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m];
  });
}

// 🔹 Produits avec images
const produits = [
  { nom: "Ajax citron", image: "https://actif-service.github.io/Commande-Produits/images/Ajax%20citron.jpg" },
  { nom: "Glass 2000 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Glass%202000%201%20litre.jpg" },
  { nom: "Sani-day 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Sani-day%201%20litre.jpg" },
  { nom: "Detarsan 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Detarsan_1litre.jpg" },
  { nom: "Dreft 1 litre", image: "https://actif-service.github.io/Commande-Produits/images/Dreft%201%20litre.jpg" },
  { nom: "WC Gel avec Javel", image: "https://actif-service.github.io/Commande-Produits/images/WC%20Gel%20avec%20Javel.jpg" },
  { nom: "Gant de ménage Taille S", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20S.jpg" },
  { nom: "Gant de ménage Taille M", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20M.jpg" },
  { nom: "Gant de ménage Taille L", image: "https://actif-service.github.io/Commande-Produits/images/Gand%20de%20ménage%20Taille%20L.jpg" },
  { nom: "Lavette micro fibre", image: "https://actif-service.github.io/Commande-Produits/images/Lavette%20micro%20fibre.jpg" },
  { nom: "Torchon Micro fibre 50 x 70cm", image: "https://actif-service.github.io/Commande-Produits/images/Torchon%20Micro%20fibre%2050%20x%2070cm.jpg" },
  { nom: "Ballot - 48 rouleaux papier WC", image: "https://actif-service.github.io/Commande-Produits/images/Ballot%20-%2048%20rouleaux%20papier%20WC.jpg" },
  { nom: "Papier Zig Zag", image: "https://actif-service.github.io/Commande-Produits/images/Papier%20Zig%20Zag.jpg" },
  { nom: "Maxi Jumbo Papernet", image: "https://actif-service.github.io/Commande-Produits/images/Maxi%20Jumbo%20Papernet.jpg" },
  { nom: "Papier Toilette Mini Jumbo", image: "https://actif-service.github.io/Commande-Produits/images/Papier%20Toilette%20Mini%20Jumbo.jpg" },
  { nom: "Brosse coco 30 cm", image: "https://actif-service.github.io/Commande-Produits/images/Brosse%20coco%2030%20cm.jpg" },
  { nom: "Brosse de rue + manche", image: "https://actif-service.github.io/Commande-Produits/images/Brosse%20de%20rue%20+%20manche.jpg" },
  { nom: "Raclette Sol 45 cm", image: "https://actif-service.github.io/Commande-Produits/images/Raclette%20Sol%2045%20cm.jpg" },
  { nom: "Ramassette + brosse", image: "https://actif-service.github.io/Commande-Produits/images/Ramassette%20+%20brosse.jpg" },
  { nom: "Sacs poubelle bleus 70 x 110cm", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20bleus%2070%20x%20110cm.jpg" },
  { nom: "Sacs poubelle jaunes 70 x 110cm", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20jaunes%2070%20x%20110cm.jpg" },
  { nom: "Sacs poubelle noirs 70 x 110cm 50µ", image: "https://actif-service.github.io/Commande-Produits/images/Sacs%20poubelle%20noirs%2070%20x%20110cm%2050µ.jpg" },
  { nom: "Tête de Loup", image: "https://actif-service.github.io/Commande-Produits/images/Tête%20de%20Loup.jpg" },
  { nom: "Cube urinoir Nicols", image: "https://actif-service.github.io/Commande-Produits/images/Cube_urinoir_Nicols.jpg" },
  { nom: "Eau de javel 5 litres", image: "https://actif-service.github.io/Commande-Produits/images/Eau%20de%20javel%205%20litres.jpg" },
  { nom: "Vinaigre 1,5 litres", image: "https://actif-service.github.io/Commande-Produits/images/Vinaigre%201,5litres.jpg" },
  { nom: "Sac aspirateur Aero 8", image: "https://actif-service.github.io/Commande-Produits/images/sac%20aspirateur%20Aero%208.jpg" },
  { nom: "Sac aspirateur Vento 8", image: "https://actif-service.github.io/Commande-Produits/images/sac%20aspirateur%20Vento%208.jpg" },
];

const produitsContainer = document.getElementById("produits");

// 🔹 Affichage produits
produits.forEach(p => {
  const div = document.createElement("div");
  div.className = "produit";

  div.innerHTML = `
    <div class="img-container">
      <img src="${p.image}" alt="${p.nom}">
    </div>
    <span>${p.nom}</span>
    <div class="quantite-container">
      <button class="moins" type="button" aria-label="Diminuer quantité">-</button>
      <input type="number" min="0" value="0" class="quantite" data-nom="${p.nom}">
      <button class="plus" type="button" aria-label="Augmenter quantité">+</button>
    </div>
  `;

  produitsContainer.appendChild(div);

  const input = div.querySelector(".quantite");

  div.querySelector(".plus").addEventListener("click", () => {
    input.value = (parseInt(input.value) || 0) + 1;
  });

  div.querySelector(".moins").addEventListener("click", () => {
    input.value = Math.max(0, (parseInt(input.value) || 0) - 1);
  });
});

// 🔹 Zone autre demande
const autreDiv = document.createElement("div");
autreDiv.className = "form-group";
autreDiv.innerHTML = `
  <label for="autre">Besoin d'autre chose :</label>
  <textarea id="autre" placeholder="Ajoutez un produit ou commentaire"></textarea>
`;
produitsContainer.appendChild(autreDiv);

// 🔹 Envoi EmailJS
document.getElementById("formCommande").addEventListener("submit", function(e) {
  e.preventDefault();

  const societe = escapeHTML(document.getElementById("societe").value.trim());
  const chantier = escapeHTML(document.getElementById("chantier").value.trim());
  const nom = escapeHTML(document.getElementById("nom").value.trim());
  const autre = escapeHTML(document.getElementById("autre").value.trim());

  if (!societe || !chantier || !nom) {
    return alert("Veuillez remplir Société, Chantier et Votre nom");
  }

  let hasCommande = false;
  document.querySelectorAll(".quantite").forEach(input => {
    if (Number(input.value) > 0) hasCommande = true;
  });

  if (!hasCommande && !autre) {
    return alert("Veuillez sélectionner au moins un produit ou ajouter une demande.");
  }

  const now = new Date();
  const dateStr = now.toLocaleString("fr-FR");

  // 🔹 Texte commande HTML
  let texteCommande = `
  <div style="font-family:Arial,sans-serif; background-color:#f2f2f2; padding:15px;">
    <div style="text-align:center; margin-bottom:20px;">
      <img src="https://actif-service.github.io/Commande-Produits/images/logo.jpg"
           alt="Actif Service"
           width="180"
           style="display:block; margin:0 auto;">
    </div>

    <div style="background-color:#1976d2; color:white; padding:12px; text-align:center; font-size:20px; font-weight:bold;">
      Nouvelle commande produits
    </div>

    <!-- Ligne 1 : Société / Date -->
    <table style="width:100%; background-color:#e6e6e6; margin-top:10px; border-collapse:collapse; font-family:Arial,sans-serif;">
      <tr>
        <td style="text-align:left; font-size:14px; padding:6px 10px;">
          Société : ${societe}
        </td>
        <td style="text-align:right; font-size:14px; padding:6px 10px;">
          Date : <strong>${dateStr}</strong>
        </td>
      </tr>
    </table>

    <!-- Ligne 2 : Chantier en encadré -->
    <div style="margin-top:8px; background:#d9eaff; border:1px solid #1976d2; border-radius:4px; padding:12px; font-size:20px; font-weight:bold; text-align:center;">
      Chantier : ${chantier}
    </div>

    <!-- Nom du demandeur -->
    <p style="background:#e6e6e6; margin:4px 0; padding:6px 12px; font-size:14px;">
      Nom : ${nom}
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top:15px;">
      <tr style="background-color:#1976d2; color:white;">
        <th style="padding:6px; border:1px solid #ccc; text-align:left;">Produit</th>
        <th style="padding:6px; border:1px solid #ccc; text-align:center;">Quantité</th>
      </tr>
  `;

  let index = 0;
  document.querySelectorAll(".quantite").forEach(input => {
    const qte = Number(input.value);
    if (qte > 0) {
      const background = index % 2 === 0 ? "#ffffff" : "#bbdefb";

      texteCommande += `
        <tr style="background-color:${background};">
          <td style="padding:6px 10px; border:1px solid #ccc;">
            ${escapeHTML(input.dataset.nom)}
          </td>
          <td style="padding:6px; border:1px solid #ccc; text-align:center;">
            ${qte}
          </td>
        </tr>
      `;
      index++;
    }
  });

  if (autre) {
    texteCommande += `
      <tr>
        <td colspan="2" style="padding:8px; border:1px solid #ccc; background:#fff8e1;">
          <strong>Autre demande :</strong> ${autre}
        </td>
      </tr>
    `;
  }

  texteCommande += "</table></div>";

  emailjs.send("service_kt6gmbs", "template_53rynh4", {
    societe,
    chantier,
    nom,
    commande: texteCommande
  }).then(() => {
    alert("Commande envoyée avec succès !");
    document.getElementById("formCommande").reset();
    document.querySelectorAll(".quantite").forEach(input => input.value = 0);
  }).catch(() => {
    alert("Erreur lors de l'envoi.");
  });

});

