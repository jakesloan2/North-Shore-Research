/* =========================================================
   PRODUCT CATALOGUE

   PRICES, SIZES, FLAVOURS AND LABEL TEXT BELOW ARE PLACEHOLDERS.
   Everything marked [LIKE THIS] needs replacing with the real
   figures from your supplier before you take a single order.

   STRUCTURE — the whole file is one list:

     window.PRODUCTS = [
       { ...product... },     ← comma after every product
       { ...product... }      ← except the last one
     ];                       ← list closed exactly once

   PRODUCT FIELDS
     id           unique, lowercase, no spaces — used in the page URL
     image        photo for the card and product page. Put the file in
                  images/products/ and name it after the id. If it's
                  missing the site shows images/products/placeholder.jpg.
     name         shown to customers
     category     all products use "All" — category navigation is off
     form         jar | pouch | bar | bottle (fallback artwork only)
     tint         accent colour behind the fallback artwork
     short        one line shown on the card
     description  paragraph on the product page
     badges       [] or any of: "Best seller", "New", "Batch tested"
     options      the choices a customer picks, e.g. { Size: ["1 kg"] }.
                  Everything in this range is plain, so the only choices
                  are pack size. A product with a single size still needs
                  one option and one matching variant.
     variants     one entry per combination of options, each with its
                  own sku, price and stock
     label        the legally required product information (see below)
     assurance    optional — overrides SITE.assurance in js/config.js

   ABOUT "label"
     Selling food supplements online means the ingredient list, allergens,
     nutrition per serving and the recommended daily dose have to be
     available to the customer BEFORE they buy, not just on the tub
     (Food Information Regulations 2014). Cosmetics need a full INCI
     ingredient list on the same basis. That's what this field is for —
     copy it from the supplier's label, don't write it yourself.
     Leave the field out entirely and the section doesn't appear.

   CLAIMS
     Only use health claims on the GB nutrition and health claims
     register, with their conditions of use. "Fat burner" and
     "nootropic" are fine as category names, but claims that a product
     burns fat or improves focus are not authorised — describe what's
     in it instead.
   ========================================================= */
window.PRODUCTS = [
  {
    id: "protein-capsules",
    image: "images/products/protein-capsules.jpg",
    name: "Buro Protein Capsules",          // [CONFIRM BRAND SPELLING]
    category: "All",
    form: "bottle",
    tint: "rgba(216,20,44,.45)",
    short: "Protein in capsule form. [X] capsules per bottle.",
    description: "[SUPPLIER DESCRIPTION] Protein contributes to a growth in muscle mass and to the maintenance of normal bones.",
    badges: ["Best seller"],
    options: { Size: ["[90] capsules", "[180] capsules"] },
    variants: [
      { sku: "PRO-CAP-90",  options: { Size: "[90] capsules" },  price: 24.99, stock: 40 },
      { sku: "PRO-CAP-180", options: { Size: "[180] capsules" }, price: 39.99, stock: 25 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST FROM THE SUPPLIER LABEL, ALLERGENS IN <b>BOLD</b>]",
      allergens: "[e.g. Contains milk and soy]",
      nutrition: [["Energy", "[X] kcal"], ["Protein", "[X] g"], ["Carbohydrate", "[X] g"], ["Fat", "[X] g"], ["Salt", "[X] g"]],
      serving: "[X] capsules",
      directions: "[SUPPLIER DIRECTIONS, e.g. Take X capsules daily with water.]"
    }
  },
  {
    id: "cream-of-rice",
    image: "images/products/cream-of-rice.jpg",
    name: "Cream of Rice",                  // [CONFIRM — listed as "rice of cream"]
    category: "All",
    form: "pouch",
    tint: "rgba(240,56,78,.3)",
    short: "Plain, finely milled rice porridge. [X] servings per bag.",
    description: "[SUPPLIER DESCRIPTION] A slow-cooked rice porridge used as a carbohydrate source around training.",
    badges: ["Best seller"],
    options: { Size: ["[1 kg]", "[2 kg]"] },
    variants: [
      { sku: "COR-1", options: { Size: "[1 kg]" }, price: 12.99, stock: 30 },
      { sku: "COR-2", options: { Size: "[2 kg]" }, price: 21.99, stock: 18 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST — rice is gluten-free but check the supplier's 'may contain' statement]",
      allergens: "[e.g. May contain gluten and milk]",
      nutrition: [["Energy", "[X] kcal"], ["Carbohydrate", "[X] g"], ["of which sugars", "[X] g"], ["Protein", "[X] g"], ["Fat", "[X] g"], ["Fibre", "[X] g"]],
      serving: "[X] g",
      directions: "[SUPPLIER DIRECTIONS, e.g. Mix X g with 200 ml water or milk and microwave for 90 seconds.]"
    }
  },
  {
    id: "collagen",
    image: "images/products/collagen.jpg",
    name: "Collagen",
    category: "All",
    form: "jar",
    tint: "rgba(200,200,210,.35)",
    short: "Hydrolysed collagen powder. [X] servings.",
    description: "[SUPPLIER DESCRIPTION — say what type and source, e.g. hydrolysed bovine or marine collagen peptides.]",
    badges: [],
    options: { Size: ["[300 g]", "[600 g]"] },
    variants: [
      { sku: "COL-300", options: { Size: "[300 g]" }, price: 19.99, stock: 35 },
      { sku: "COL-600", options: { Size: "[600 g]" }, price: 34.99, stock: 20 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST]",
      allergens: "[e.g. Contains fish — if marine collagen]",
      nutrition: [["Energy", "[X] kcal"], ["Protein", "[X] g"], ["Collagen peptides", "[X] g"]],
      serving: "[X] g",
      directions: "[SUPPLIER DIRECTIONS]"
    }
  },
  {
    id: "retinol",
    image: "images/products/retinol.jpg",
    name: "Retinol Serum",                  // [CONFIRM PRODUCT TYPE — serum, cream or oil]
    category: "All",
    form: "bottle",
    tint: "rgba(216,20,44,.25)",
    short: "[X]% retinol serum. [30] ml bottle.",
    // This is a cosmetic, not a food supplement — different rules apply.
    // See the note in the README before listing it.
    description: "[SUPPLIER DESCRIPTION] For external use only. Avoid the eye area. Use sunscreen during the day.",
    badges: ["New"],
    options: { Size: ["[30] ml"] },
    variants: [
      { sku: "RET-30", options: { Size: "[30] ml" }, price: 22.99, stock: 30 }
    ],
    label: {
      ingredients: "[FULL INCI INGREDIENT LIST — cosmetics must show INCI names, in descending order of weight]",
      allergens: "[Any of the 26 declarable fragrance allergens present]",
      nutrition: [],
      serving: "",
      directions: "[SUPPLIER DIRECTIONS, e.g. Apply a small amount to clean skin in the evening. Patch test before first use.]"
    }
  },
  {
    id: "fat-burner",
    image: "images/products/fat-burner.jpg",
    name: "Fat Burner",
    category: "All",
    form: "bottle",
    tint: "rgba(240,56,78,.35)",
    short: "[X] capsules. Contains caffeine.",
    // Keep the wording factual: list what's in it and how much.
    // There are no authorised GB health claims for fat loss.
    description: "[SUPPLIER DESCRIPTION — list the active ingredients and the amount of each per serving. Contains caffeine: not recommended for children or pregnant or breastfeeding women.]",
    badges: [],
    options: { Size: ["[60] capsules"] },
    variants: [
      { sku: "FAT-60", options: { Size: "[60] capsules" }, price: 21.99, stock: 40 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST WITH AMOUNTS PER SERVING]",
      allergens: "[e.g. None of the 14 major allergens]",
      nutrition: [["Caffeine", "[X] mg"], ["[Active 2]", "[X] mg"], ["[Active 3]", "[X] mg"]],
      serving: "[X] capsules",
      directions: "[SUPPLIER DIRECTIONS. Do not exceed the stated dose.]"
    }
  },
  {
    id: "nootropic",
    image: "images/products/nootropic.jpg",
    name: "Nootropic",
    category: "All",
    form: "bottle",
    tint: "rgba(120,120,130,.35)",
    short: "[X] capsules. [X] servings.",
    // As above — describe the contents, not the effect.
    description: "[SUPPLIER DESCRIPTION — list the active ingredients and the amount of each per serving.]",
    badges: [],
    options: { Size: ["[60] capsules"] },
    variants: [
      { sku: "NOO-60", options: { Size: "[60] capsules" }, price: 24.99, stock: 30 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST WITH AMOUNTS PER SERVING]",
      allergens: "[e.g. None of the 14 major allergens]",
      nutrition: [["[Active 1]", "[X] mg"], ["[Active 2]", "[X] mg"]],
      serving: "[X] capsules",
      directions: "[SUPPLIER DIRECTIONS]"
    }
  },
  {
    id: "water",
    image: "images/products/water.jpg",
    name: "[WATER — CONFIRM WHAT THIS IS]",
    category: "All",
    form: "bottle",
    tint: "rgba(160,160,170,.35)",
    short: "[SHORT LINE]",
    description: "[TELL ME WHAT THIS PRODUCT IS AND I'LL FILL THIS IN — flavoured water, electrolyte water, a water bottle, or something else.]",
    badges: [],
    options: { Size: ["[500 ml]"] },
    variants: [
      { sku: "WAT-500", options: { Size: "[500 ml]" }, price: 1.99, stock: 100 }
    ]
  },
  {
    id: "recovery-capsules",
    image: "images/products/recovery-capsules.jpg",
    name: "Recovery Capsules",
    category: "All",
    form: "bottle",
    tint: "rgba(216,20,44,.3)",
    short: "[X] capsules. [X] servings.",
    description: "[SUPPLIER DESCRIPTION — list the active ingredients and the amount of each per serving.]",
    badges: [],
    options: { Size: ["[90] capsules"] },
    variants: [
      { sku: "REC-90", options: { Size: "[90] capsules" }, price: 19.99, stock: 35 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST WITH AMOUNTS PER SERVING]",
      allergens: "[e.g. None of the 14 major allergens]",
      nutrition: [["[Active 1]", "[X] mg"], ["[Active 2]", "[X] mg"]],
      serving: "[X] capsules",
      directions: "[SUPPLIER DIRECTIONS]"
    }
  },
  {
    id: "energy-gels",
    image: "images/products/energy-gels.jpg",
    name: "Energy Gels",
    category: "All",
    form: "bar",
    tint: "rgba(240,56,78,.25)",
    short: "Box of [12]. [X] g carbohydrate per gel.",
    description: "[SUPPLIER DESCRIPTION] A fast carbohydrate source for use during training or endurance events.",
    badges: ["New"],
    options: { Pack: ["Single", "Box of [12]"] },
    variants: [
      { sku: "GEL-1",  options: { Pack: "Single" },      price: 1.99,  stock: 200 },
      { sku: "GEL-12", options: { Pack: "Box of [12]" }, price: 21.99, stock: 30 }
    ],
    label: {
      ingredients: "[FULL INGREDIENT LIST]",
      allergens: "[e.g. None of the 14 major allergens]",
      nutrition: [["Energy", "[X] kcal"], ["Carbohydrate", "[X] g"], ["of which sugars", "[X] g"], ["Sodium", "[X] mg"]],
      serving: "One gel ([X] g)",
      directions: "[SUPPLIER DIRECTIONS]"
    }
  }
];

/* Category navigation is switched off, so this stays empty.
   Leave it here — the code expects the variable to exist. */
window.CATEGORIES = [];
