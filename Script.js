let selectedProgram = 'instream';
let lastReport = null;

const programs = {
  instream: {
    name: 'In-Stream Ads',
    icon: '🎬',
    criteria: [
      { id: 'followers',   name: 'Abonnés minimum',       required: 10000,  unit: 'abonnés',  weight: 25, info: 'La page doit avoir au moins 10 000 abonnés.' },
      { id: 'views',       name: 'Vues vidéo (60 jours)',  required: 600000, unit: 'vues',     weight: 25, info: '600 000 minutes de visionnage total sur 60 jours.' },
      { id: 'videos',      name: 'Vidéos actives',         required: 5,      unit: 'vidéos',   weight: 15, info: 'Au moins 5 vidéos publiées et actives.' },
      { id: 'age',         name: 'Âge de la page',         required: 30,     unit: 'jours',    weight: 10, info: 'La page doit exister depuis au moins 30 jours.' },
      { id: 'standards',   name: 'Standards partenaires',  required: true,   unit: '',         weight: 15, info: 'Respecter les Politiques de monétisation des partenaires Meta.' },
      { id: 'country',     name: 'Pays éligible',          required: true,   unit: '',         weight: 10, info: 'In-Stream Ads disponible dans certains pays uniquement.' },
    ]
  },
  // ... Ajoute ici le reste de tes données programs et tes fonctions analyze(), selectProg(), etc.
};

function selectProg(el, prog) {
  document.querySelectorAll('.prog-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedProgram = prog;
}

// Assure-toi de bien fermer toutes tes fonctions.
