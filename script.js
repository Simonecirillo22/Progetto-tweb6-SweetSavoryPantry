let recipes;
recipes = [
  {
    name: "Pancake",
    ingredients: ["uova", "farina", "latte"],
    link: "/recipes/pancake.html"
  },
  {
    name: "Frittata",
    ingredients: ["uova", "cipolla", "sale"],
    link: "/recipes/frittata.html"
  },
  {
    name: "Torta al cioccolato",
    ingredients: ["farina", "zucchero", "cioccolato", "uova"],
    link: "/recipes/torta_al_cioccolato.html"
  },
  {
    name: "Besciamella",
    ingredients: ["latte", "farina", "burro", "noce moscata", "sale"],
    link: "/recipes/besciamella.html"
  },
  {
    name: "Pan di Spagna",
    ingredients: ["uova", "farina", "zucchero", "1 bustina di vanillina", "sale"],
    link: "/recipes/pan_di_spagna.html"
  },
  {
    name: "Plumcake",
    ingredients: ["latte", "farina", "zucchero", "burro", "uova", "1 bustina di vanillina"],
    link: "/recipes/plumcake.html"
  },
  {
    name: "Muffin",
    ingredients: ["uova", "farina", "zucchero", "1 bustina di lievito per dolci", "sale", "burro", "latte"],
    link: "/recipes/muffin.html"
  },
  {
    name: "Pizza Margherita",
    ingredients: ["farina", "lievito", "acqua", "sale", "olio d'oliva", "pomodoro", "mozzarella"],
    link: "/recipes/pizza_margherita.html"
  },
  {
    name: "Lasagna",
    ingredients: ["sfoglie di pasta", "ragù", "besciamella", "parmigiano", "mozzarella"],
    link: "/recipes/lasagna.html"
  },
  {
    name: "Pasta alla Carbonara",
    ingredients: ["Pasta", "guanciale", "uova", "pecorino", "pepe"],
    link: "/recipes/pasta_alla_carbonara.html"
  },
  {
    name: "Ravioli Ricotta e Spinaci",
    ingredients: ["pasta fresca", "ricotta", "spinaci", "parmigiano", "noce moscata"],
    link: "/recipes/ravioli_ricotta_e_spinaci.html"
  },
  {
    name: "Risotto allo Zafferano",
    ingredients: ["riso", "brodo", "zafferano", "burro", "parmigiano"],
    link: "/recipes/risotto_allo_zafferano.html"
  },
  {
    name: "Pesto alla Genovese",
    ingredients: ["basilico", "pinoli", "aglio", "olio d'oliva", "parmigiano", "pecorino"],
    link: "/recipes/pesto_alla_genovese.html"
  },
  {
    name: "Minestrone",
    ingredients: ["verdure miste", "patate", "pomodoro", "olio d'oliva", "sale"],
    link: "/recipes/minestrone.html"
  },
  {
    name: "Polenta",
    ingredients: ["farina di mais", "acqua", "sale"],
    link: "/recipes/polenta.html"
  },
  {
    name: "Parmigiana di Melanzane",
    ingredients: ["melanzane", "pomodoro", "mozzarella", "parmigiano", "basilico"],
    link: "/recipes/parmigiana_di_melanzane.html"
  },
  {
    name: "Crepes",
    ingredients: ["farina", "uova", "latte", "burro", "sale"],
    link: "/recipes/crepes.html"
  },
  {
    name: "Zuppa di Pesce",
    ingredients: ["pesce misto", "pomodoro", "aglio", "olio d'oliva", "prezzemolo"],
    link: "/recipes/zuppa_di_pesce.html"
  },
  {
    name: "Strudel di Mele",
    ingredients: ["pasta sfoglia", "mele", "zucchero", "cannella", "uvetta"],
    link: "/recipes/strudel_di_mele.html"
  },
  {
    name: "Gnocchi di Patate",
    ingredients: ["patate", "farina", "uova", "sale"],
    link: "/recipes/gnocchi_di_patate.html"
  },
  {
    name: "Zuppa di Lenticchie",
    ingredients: ["lenticchie", "cipolla", "carota", "sedano", "pomodoro", "olio d'oliva"],
    link: "/recipes/zuppa_di_lenticchie.html"
  },
  {
    name: "Bruschette",
    ingredients: ["pane", "pomodori", "aglio", "basilico", "olio d'oliva"],
    link: "/recipes/bruschette.html"
  },
  {
    name: "Focaccia",
    ingredients: ["farina", "lievito", "acqua", "olio d'oliva", "sale", "rosmarino", "olive"],
    link: "/recipes/focaccia.html"
  },
  {
    name: "Crostata di Marmellata",
    ingredients: ["farina", "burro", "zucchero", "uova", "marmellata"],
    link: "/recipes/crostata_di_marmellata.html"
  },
  {
    name: "Caponata",
    ingredients: ["melanzane", "pomodoro", "olive", "capperi", "cipolla", "aceto"],
    link: "/recipes/caponata.html"
  },
  {
    name: "Arancini di Riso",
    ingredients: ["riso", "ragù", "piselli", "mozzarella", "pangrattato", "uova"],
    link: "/recipes/arancini_di_riso.html"
  },
  {
    name: "Polpette al Sugo",
    ingredients: ["carne macinata", "pane", "latte", "uova", "pomodoro", "parmigiano"],
    link: "/recipes/polpette_al_sugo.html"
  },
  {
    name: "Frittelle di Zucchine",
    ingredients: ["zucchine", "uova", "farina", "parmigiano", "sale", "olio per friggere"],
    link: "/recipes/frittelle_di_zucchine.html"
  },
  {
    name: "Crespelle agli Spinaci",
    ingredients: ["crepes", "spinaci", "ricotta", "parmigiano", "besciamella"],
    link: "/recipes/crespelle_agli_spinaci.html"
  },
  {
    name: "Torta di Mele",
    ingredients: ["farina", "uova", "zucchero", "burro", "mele", "lievito"],
    link: "/recipes/torta_di_mele.html"
  },
  {
    name: "Pane fatto in casa",
    ingredients: ["farina", "lievito", "acqua", "sale", "olio d'oliva"],
    link: "/recipes/pane_fatto_in_casa.html"
  },
  {
    name: "Spaghetti Aglio e Olio",
    ingredients: ["spaghetti", "aglio", "olio d'oliva", "peperoncino", "prezzemolo"],
    link: "/recipes/spaghetti_aglio_e_olio.html"
  },
  {
    name: "Crema Pasticcera",
    ingredients: ["latte", "tuorli", "zucchero", "farina", "limone", "vaniglia"],
    link: "/recipes/crema_pasticcera.html"
  },
  {
    name: "Calzone Ripieno",
    ingredients: ["pasta per pizza", "pomodoro", "mozzarella", "prosciutto cotto", "basilico"],
    link: "/recipes/calzone_ripieno.html"
  },
  {
    name: "Ciambella",
    ingredients: ["farina", "zucchero", "uova", "burro", "latte", "lievito"],
    link: "/recipes/ciambella.html"
  },
  {
    name: "Piadina Romagnola",
    ingredients: ["farina", "strutto", "acqua", "sale", "lievito"],
    link: "/recipes/piadina_romagnola.html"
  },
  {
    name: "Biscotti al Burro",
    ingredients: ["farina", "burro", "zucchero", "uova", "vaniglia"],
    link: "/recipes/biscotti_al_burro.html"
  },
  {
    name: "Pollo al Curry",
    ingredients: ["pollo", "cipolla", "curry", "latte di cocco", "olio d'oliva"],
    link: "/recipes/pollo_al_curry.html"
  },
  {
    name: "Quiche Lorraine",
    ingredients: ["pasta brisée", "pancetta", "uova", "panna", "formaggio grattugiato"],
    link: "/recipes/quiche_lorraine.html"
  },
  {
    name: "Cheesecake",
    ingredients: ["biscotti", "burro", "formaggio spalmabile", "zucchero", "panna", "gelatina"],
    link: "/recipes/cheesecake.html"
  },
  {
    name: "Cannelloni Ripieni",
    ingredients: ["cannelloni", "ricotta", "spinaci", "parmigiano", "besciamella", "pomodoro"],
    link: "/recipes/cannelloni_ripieni.html"
  },
  {
    name: "Pasta al Pesto di Noci",
    ingredients: ["pasta", "noci", "parmigiano", "aglio", "olio d'oliva"],
    link: "/recipes/pasta_al_pesto_di_noci.html"
  },
  {
    name: "Pollo alla Cacciatora",
    ingredients: ["pollo", "pomodoro", "cipolla", "carota", "vino bianco", "rosmarino"],
    link: "/recipes/pollo_alla_cacciatora.html"
  },
  {
    name: "Torta di Carote",
    ingredients: ["farina", "zucchero", "carote", "uova", "olio di semi", "lievito"],
    link: "/recipes/torta_di_carote.html"
  },
  {
    name: "Salmone al Cartoccio",
    ingredients: ["salmone", "limone", "rosmarino", "olio d'oliva", "sale"],
    link: "/recipes/salmone_al_cartoccio.html"
  },
  {
    name: "Risotto ai Funghi",
    ingredients: ["riso", "funghi", "brodo", "cipolla", "burro", "parmigiano"],
    link: "/recipes/risotto_ai_funghi.html"
  },
  {
    name: "Croissant",
    ingredients: ["farina", "zucchero", "burro", "latte", "lievito", "uova"],
    link: "/recipes/croissant.html"
  },
  {
    name: "Insalata Greca",
    ingredients: ["pomodori", "cetrioli", "olive", "feta", "cipolla", "olio d'oliva"],
    link: "/recipes/insalata_greca.html"
  },
  {
    name: "Melanzane Ripiene",
    ingredients: ["melanzane", "carne macinata", "pomodoro", "parmigiano", "cipolla"],
    link: "/recipes/melanzane_ripiene.html"
  },
  {
    name: "Gulasch",
    ingredients: ["carne di manzo", "cipolla", "paprika", "pomodoro", "patate"],
    link: "/recipes/gulasch.html"
     },
  {
    name: "Cous Cous alle Verdure",
    ingredients: ["cous cous", "zucchine", "carote", "cipolla", "pomodoro", "olio d'oliva"],
    link: "/recipes/cous_cous_alle_verdure.html"
  },
  {
    name: "Polpette di Ceci",
    ingredients: ["ceci", "prezzemolo", "aglio", "cumino", "farina"],
    link: "/recipes/polpette_di_ceci.html"
  },
  {
    name: "Insalata di Mare",
    ingredients: ["gamberi", "calamari", "polpo", "olio d'oliva", "limone", "prezzemolo"],
    link: "/recipes/insalata_di_mare.html"
  },
  {
    name: "Vellutata di Zucca",
    ingredients: ["zucca", "patate", "cipolla", "brodo", "olio d'oliva"],
    link: "/recipes/vellutata_di_zucca.html"
  },
  {
    name: "Filetto al Pepe Verde",
    ingredients: ["filetto di manzo", "panna", "pepe verde", "burro", "brandy"],
    link: "/recipes/filetto_al_pepe_verde.html"
  },
  {
    name: "Pollo al Limone",
    ingredients: ["pollo", "limone", "olio d'oliva", "rosmarino", "sale"],
    link: "/recipes/pollo_al_limone.html"
  },
  {
    name: "Risotto ai Frutti di Mare",
    ingredients: ["riso", "cozze", "vongole", "gamberi", "pomodoro", "vino bianco"],
    link: "/recipes/risotto_ai_frutti_di_mare.html"
  },
  {
    name: "Zuppa Inglese",
    ingredients: ["pan di spagna", "crema pasticcera", "alkermes", "cioccolato fondente"],
    link: "/recipes/zuppa_inglese.html"
  },
  {
    name: "Zuppa di Ceci",
    ingredients: ["ceci", "cipolla", "carota", "sedano", "olio d'oliva", "rosmarino"],
    link: "/recipes/zuppa_di_ceci.html"
  },
  {
    name: "Frittelle di Mele",
    ingredients: ["mele", "farina", "zucchero", "uova", "latte", "olio per friggere"],
    link: "/recipes/frittelle_di_mele.html"
  },
  {
    name: "Risotto ai Carciofi",
    ingredients: ["riso", "carciofi", "brodo", "cipolla", "parmigiano", "olio d'oliva"],
    link: "/recipes/risotto_ai_carciofi.html"
  },
  {
    name: "Pasta con le Sarde",
    ingredients: ["pasta", "sarde", "finocchietto", "uva passa", "pinoli", "zafferano"],
    link: "/recipes/pasta_con_le_sarde.html"
  },
  {
    name: "Patate al Forno",
    ingredients: ["patate", "olio d'oliva", "rosmarino", "aglio", "sale"],
  link:"/recipes/patate_al_forno.html"
  },
  {
    name: "Peperoni Ripieni",
    ingredients: ["peperoni", "pane", "parmigiano", "capperi", "acciughe", "olio d'oliva"],
  link: "/recipes/peperoni_ripieni.html"
  },
  {
    name: "Tagliata di Manzo",
    ingredients: ["manzo", "olio d'oliva", "rucola", "scaglie di parmigiano", "sale", "pepe"],
  link: "/recipes/taglia_manzo.html"
  },
  {
    name: "Cavolfiore Gratinato",
    ingredients: ["cavolfiore", "besciamella", "parmigiano", "burro", "sale"],
  link: "/recipes/cavolfiore_gratina.html"
  },
  {
    name: "Torta Salata agli Spinaci",
    ingredients: ["pasta sfoglia", "spinaci", "ricotta", "uova", "parmigiano"],
  link: "/recipes/torta_salata_agli_Spinaci.html"
  },
  {
    name: "Polpette di Melanzane",
    ingredients: ["melanzane", "pane", "parmigiano", "uova", "pangrattato", "sale"],
  link: "/recipes/polpette_di_melanzane.html"
  },
  {
    name: "Frittata di Zucchine",
    ingredients: ["zucchine", "uova", "parmigiano", "olio d’oliva", "sale", "pepe"],
 link: "/recipes/frittelle_di_zucchine.html."
  },
  {
    name: "Tacos di Pollo",
    ingredients: ["tortillas", "pollo", "cipolla", "peperoni", "spezie per tacos", "formaggio", "lattuga"],
  link: "/recipes/tacos_di_pollo.html"
  },
  {
    name: "Zuppa di Zucca e Lenticchie",
    ingredients: ["zucca", "lenticchie rosse", "cipolla", "carota", "brodo vegetale", "curry"],
    link: "/recipes/zuppa_di_zucca_e_lenticchie.html"
  },
  {
    name: "Costolette di Maiale al Miele",
    ingredients: ["costolette di maiale", "miele", "salsa di soia", "aglio", "zenzero"],
    link: "/recipes/costolette_di_maiale_al_miele.html"
  },
  {
    name: "Polpette di Zucchine",
    ingredients: ["zucchine", "pane grattugiato", "uova", "parmigiano", "aglio", "prezzemolo", "olio d’oliva"],
    link: "/recipes/polpette_di_zucchine.html"
  },
  {
    name: "Pasta al Salmone",
    ingredients: ["pasta", "salmone", "panna", "cipolla", "olio d’oliva", "pepe"],
    link: "/recipes/pasta_al_salmone.html"
  },
  {
    name: "Insalata di Quinoa",
    ingredients: ["quinoa", "pomodorini", "cetrioli", "avocado", "limone", "olio d’oliva", "sale", "pepe"],
    link: "/recipes/insalata_di_quinoa.html"
  },
  {
    name: "Torta Salata ai Funghi",
    ingredients: ["pasta sfoglia", "funghi", "ricotta", "parmigiano", "uova", "aglio", "prezzemolo"],
    link: "/recipes/torta_salata_ai_funghi.html"
  },
  {
    name: "Crumble di Mele",
    ingredients: ["mele", "zucchero", "burro", "farina", "cannella"],
    link: "/recipes/crumble_di_mele.html"
  },
  {
    name: "Frittelle di Verdure",
    ingredients: ["zucchine", "carote", "patate", "uova", "farina", "sale", "pepe", "olio per friggere"],
  link: "/recipes/frittelle_di_verdure.html"
  },
  {
    name: "Risotto al Radicchio",
    ingredients: ["riso", "radicchio", "brodo vegetale", "cipolla", "burro", "parmigiano"],
  link: "/recipes/risotto_al_radicchio.html"
  },
  {
    name: "Pollo al Vino Bianco",
    ingredients: ["pollo", "cipolla", "vino bianco", "rosmarino", "olio d’oliva", "sale", "pepe"],
    link: "/recipes/pollo_al_vino_bianco.html"

  },
  {
    name: "Pasta con Crema di Peperoni",
    ingredients: ["pasta", "peperoni", "cipolla", "panna", "parmigiano", "olio d’oliva"],
    link: "/recipes/pasta_con_crema_di_peperoni",

  },
  {
    name: "Crostata di Limone",
    ingredients: ["pasta frolla", "limoni", "zucchero", "burro", "uova"],
    link: "/recipes/crostata_di_limone.html"

  },
  {
    name: "Parmigiana di Zucchine",
    ingredients: ["zucchine", "mozzarella", "parmigiano", "passata di pomodoro", "olio d’oliva", "basilico"],
    link: "/recipes/parmigiana_di_zucchine.html"

  },
  {
    name: "Torta Salata al Tonno",
    ingredients: ["pasta sfoglia", "tonno", "ricotta", "uova", "olive", "capperi"],
    link: "/recipes/torta_salata_al_tonno.html"

  },
  {
    name: "Patate Duchessa",
    ingredients: ["patate", "burro", "parmigiano", "uova", "noce moscata", "sale", "pepe"],
    link: "/recipes/patate_duchessa.html"
  },
  {
    name: "Panna Cotta al Cioccolato",
    ingredients: ["panna", "cioccolato fondente", "zucchero", "gelatina"],
    link: "/recipes/panna_cotta_al_cioccolato.html"
  },
  {
    name: "Riso Venere con Gamberi e Zucchine",
    ingredients: ["riso venere", "gamberi", "zucchine", "aglio", "olio d’oliva", "limone"],
    link: "/recipes/riso_venere_con_gamberi_e_zucchine.html"
  },
  {
    name: "Focaccine al Rosmarino",
    ingredients: ["farina", "lievito", "acqua", "olio d’oliva", "sale", "rosmarino"],
    link: "/recipes/focaccine_al_rosmarino.html"
  },
  {
    name: "Cheesecake salata",
    ingredients: ["crackers salati", "burro", "formaggio spalmabile", "ricotta", "pomodori secchi", "basilico"],
    link: "/recipes/cheesecakesalata.html"
  },
  {
    name: "Penne alla Norma",
    ingredients: ["pasta", "melanzane", "pomodoro", "ricotta salata", "aglio", "basilico"],
    link: "recipes/penne_all_norma.html"
  },
  {
    name: "Torta di Pere e Cioccolato",
    ingredients: ["farina", "zucchero", "uova", "burro", "cacao", "pere", "lievito"],
    link: "/recipes/torta_di_pere_e_cioccolato.html"
  }
];


document.getElementById("generate-btn").addEventListener("click", () => {
  const userIngredients = document
    .getElementById("ingredients")
    .value.split(",")
    .map((item) => item.trim().toLowerCase());

  const matchedRecipes = recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => userIngredients.includes(ing))
  );

  const recipesList = document.getElementById("recipes");
  recipesList.innerHTML = "";

  if (matchedRecipes.length > 0) {
    matchedRecipes.forEach((recipe) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = recipe.name;
      link.href = recipe.link; // Link alla pagina della ricetta
      link.target = "_blank"; // Apre in una nuova scheda
      li.appendChild(link);
      recipesList.appendChild(li);
    });

  } else {
    recipesList.innerHTML = "<li>Nessuna ricetta trovata</li>";
  }
});