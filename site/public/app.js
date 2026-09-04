/**
 * SmartChief Application Core
 * - Innovative Culinary Intelligence Engine (ChefEngine)
 * - Dynamic Global Flavor Synthesis & Recipe Generator
 * - Central Persistence Store (localStorage)
 * - Seamless SPA Transition Router (Spring physics & pre-caching)
 */

// ==========================================
// 1. EXPANDED INNOVATIVE RECIPE DATABASE
// ==========================================
const RECIPE_DATABASE = [
  {
    id: "paneer-butter-masala",
    title: "Royal Shahi Paneer Butter Masala",
    description: "Golden pan-seared artisanal cottage cheese simmered in a velvety makhani gravy with sun-ripened tomatoes, cashew paste, kasoori methi, and saffron butter.",
    category: "INDIAN",
    prepTime: "20 min",
    cookTime: "25 min",
    difficulty: "Medium",
    calories: "410 kcal",
    rating: 4.9,
    reviewsCount: 214,
    flavorProfile: "Rich Makhani, Aromatic Cardamom & Warm Fenugreek",
    synergyScore: "99% Match",
    chefSecret: "Gently roast kasoori methi between your palms before crumbling it into the sauce off heat to release aromatic essential oils without bitterness.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Fresh Malai Paneer cubes", amount: "400g, lightly pan-seared" },
      { name: "Ripe tomato reduction", amount: "2 cups, strained" },
      { name: "Soaked cashew cream & fresh malai", amount: "1/2 cup" },
      { name: "Cultured butter & pure desi ghee", amount: "2 tbsp each" },
      { name: "Crushed kasoori methi", amount: "1.5 tbsp" },
      { name: "Ginger-garlic confit paste", amount: "1.5 tbsp" },
      { name: "Kashmiri red chili & Garam Masala", amount: "1 tsp each" },
      { name: "Green cardamom & cinnamon quill", amount: "Whole spices" }
    ],
    instructions: [
      { step: 1, title: "Temper Whole Aromatics", text: "Melt ghee and butter in a deep heavy-bottomed kadai. Bloom cracked green cardamom, cloves, and cinnamon until fragrant." },
      { step: 2, title: "Simmer Silken Makhani", text: "Add ginger-garlic paste and strained tomato reduction. Simmer on low flame with Kashmiri chili until glistening butter separates along pan edges." },
      { step: 3, title: "Enrich with Cashew Velvet", text: "Whisk in velvety cashew cream and a touch of honey. Fold in warm seared paneer cubes and simmer gently for 4 minutes." },
      { step: 4, title: "The Royal Fenugreek Finish", text: "Rub roasted kasoori methi vigorously between palms into the steaming gravy. Crown with a swirl of fresh cream and saffron ginger juliennes." }
    ]
  },
  {
    id: "hyderabadi-biryani",
    title: "Hyderabadi Saffron Dum Chicken Biryani",
    description: "Fragrant long-grain aged basmati layered over marinated chicken cutlets, caramelized crispy onions (birista), fresh mint, and saffron-steeped golden milk.",
    category: "INDIAN",
    prepTime: "25 min",
    cookTime: "35 min",
    difficulty: "Medium",
    calories: "480 kcal",
    rating: 5.0,
    reviewsCount: 340,
    flavorProfile: "Royal Saffron, Caramelized Birista & Kewra Essence",
    synergyScore: "99% Match",
    chefSecret: "Seal the pot with dough or heavy foil during 'Dum' to lock in high-pressure steam, forcing volatile floral spices deep into every grain of rice.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Aged long-grain Basmati rice", amount: "2 cups, 70% parboiled" },
      { name: "Tender chicken fillets", amount: "500g, yogurt marinated" },
      { name: "Crispy fried onions (Birista)", amount: "1 cup, golden browned" },
      { name: "Saffron strands in warm milk", amount: "3 tbsp" },
      { name: "Fresh mint & coriander leaves", amount: "1 cup, hand-torn" },
      { name: "Pure desi ghee", amount: "3 tbsp" },
      { name: "Shahi biryani masala & whole cloves", amount: "1.5 tsp" }
    ],
    instructions: [
      { step: 1, title: "Marinate in Spiced Curd", text: "Marinate chicken in thick yogurt, ginger-garlic, Kashmiri chili, turmeric, mint, and toasted biryani masala for at least 30 minutes." },
      { step: 2, title: "Parboil Fragrant Basmati", text: "Boil basmati rice with black cardamom, star anise, and bay leaf until exactly 70% tender, then strain immediately." },
      { step: 3, title: "The Dum Layering", text: "Layer marinated meat in a heavy pot, cover with fluffy basmati, shower with fried onions, fresh mint, ghee, and saffron milk." },
      { step: 4, title: "Sealed Dum Cooking", text: "Tightly seal lid with foil. Cook on high for 5 minutes, then transfer onto a flat tawa on lowest heat for 25 minutes until aromatic steam billows." }
    ]
  },
  {
    id: "dal-makhani",
    title: "Slow-Simmered Dal Makhani Noir",
    description: "Overnight slow-simmered whole black urad lentils and kidney beans emulsified with churned white butter, vine-ripened tomatoes, and smoked charcoal dhungar aroma.",
    category: "INDIAN",
    prepTime: "15 min",
    cookTime: "40 min",
    difficulty: "Easy",
    calories: "360 kcal",
    rating: 4.9,
    reviewsCount: 198,
    flavorProfile: "Smoky Charcoal Dhungar, Creamy Urad & Butter",
    synergyScore: "97% Match",
    chefSecret: "Mash a quarter of the cooked lentils with the back of a ladle against the pot wall to create an ultra-creamy, glossy body without requiring heavy starch.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Whole black urad lentils & rajma", amount: "1.5 cups, slow-cooked" },
      { name: "Fresh tomato puree", amount: "1.5 cups" },
      { name: "Churned butter (Makhan)", amount: "3 tbsp" },
      { name: "Heavy cream", amount: "3 tbsp" },
      { name: "Ginger juliennes & garlic", amount: "2 tbsp microplaned" },
      { name: "Kasoori methi & smoked paprika", amount: "1 tsp each" }
    ],
    instructions: [
      { step: 1, title: "Gentle Lentil Simmer", text: "Simmer pre-cooked tender black lentils in fresh tomato puree and butter over low heat for 30 minutes, stirring occasionally." },
      { step: 2, title: "Back-of-Ladle Emulsion", text: "Mash lentils gently against the sides of the pan to release creamy starches until the pot turns rich, glossy, and thick." },
      { step: 3, title: "Dhungar Smoke Infusion", text: "Place a red-hot charcoal in a small steel bowl atop the dal, drizzle with ghee, cover tightly with a lid for 3 minutes for authentic wood-fired smokiness." },
      { step: 4, title: "Garnish with White Butter", text: "Fold in crushed kasoori methi, swirl with cream, and crown with a golden melting pat of butter." }
    ]
  },
  {
    id: "goan-prawn-curry",
    title: "Goan Coastal Coconut Prawn Curry",
    description: "Plump wild sea prawns simmered in freshly ground spiced coconut milk gravy with kokum tang, fragrant curry leaves, and Kashmiri red chili.",
    category: "INDIAN",
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Easy",
    calories: "370 kcal",
    rating: 4.8,
    reviewsCount: 156,
    flavorProfile: "Tropical Coconut, Kokum Tang & Blistered Curry Leaves",
    synergyScore: "98% Match",
    chefSecret: "Add wild prawns only during the final 3 minutes of simmering; overcooking makes prawns rubbery, whereas gentle poaching keeps them succulent.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Fresh wild sea prawns", amount: "400g, cleaned & deveined" },
      { name: "Freshly pressed coconut milk", amount: "1.5 cups" },
      { name: "Kokum rinds or tamarind pulp", amount: "4 pieces soaked" },
      { name: "Fresh green curry leaves", amount: "2 sprigs" },
      { name: "Ground cumin, coriander & turmeric", amount: "1 tsp each" },
      { name: "Fresh green chilies & garlic", amount: "3 slit & 4 cloves" }
    ],
    instructions: [
      { step: 1, title: "Splutter Mustard & Curry Leaves", text: "Heat coconut oil in an earthenware pot. Splutter brown mustard seeds and fresh curry leaves until crackling." },
      { step: 2, title: "Build Coconut Kokum Broth", text: "Add spiced paste and pure coconut milk. Drop in soaked kokum rinds and bring to a slow, fragrant rolling simmer." },
      { step: 3, title: "Poach the Prawns", text: "Add cleaned sea prawns into the simmering broth. Cook gently for exactly 3 to 4 minutes until they curl and turn opaque pink." },
      { step: 4, title: "Rest & Serve", text: "Rest off heat for 2 minutes to allow coconut milk to absorb prawn sweetness. Serve over steaming hot basmati rice." }
    ]
  },
  {
    id: "tuscan-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    description: "Tender pan-seared chicken cutlets smothered in a rich garlic parmesan cream reduction with sun-dried tomatoes and fresh baby spinach.",
    category: "DINNER",
    prepTime: "25 min",
    cookTime: "20 min",
    difficulty: "Medium",
    calories: "420 kcal",
    rating: 4.9,
    reviewsCount: 142,
    flavorProfile: "Rich, Creamy & Herbaceous",
    synergyScore: "98% Match",
    chefSecret: "Deglaze the pan with a splash of dry white wine or chicken broth to lift the caramelized fond before adding the heavy cream.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPmlitRZy3vPh5WfosjsoLrH1BlaL-ssz7CBtBlKzkWKEv5MmaEZpi5sRiFZkJNRYMhQWt7-AhXS_Y6dw8drUFA6KlC5csD2Vw1T-U5xwLjl75TxgVq1k35SakOUFVGMYQdIz6VYn51qzK2-FUbiZppY95vbQbm4FAzRZE08SHIVZPmftSquXuWTv5BJ3g7WX2xgVmzUSiJ36gqxI5Lf6kk96u2c1vetx2xeIf0Kur38HcDzstQwMBXFtK3BixHLKHub1ItB72",
    ingredients: [
      { name: "Chicken breast fillets", amount: "500g, sliced thin" },
      { name: "Fresh baby spinach", amount: "2 cups, packed" },
      { name: "Sun-dried tomatoes", amount: "1/2 cup, sliced" },
      { name: "Heavy cream", amount: "1 cup" },
      { name: "Aged Parmesan cheese", amount: "1/2 cup, freshly grated" },
      { name: "Garlic cloves", amount: "4 cloves, microplaned" },
      { name: "Extra virgin olive oil", amount: "2 tbsp" },
      { name: "Italian seasoning & smoked sea salt", amount: "1 tsp each" }
    ],
    instructions: [
      { step: 1, title: "Sear the Chicken", text: "Heat 1 tbsp olive oil in a deep skillet over medium-high heat. Season chicken fillets generously. Sear 4-5 minutes per side until golden brown, then rest on a warm plate." },
      { step: 2, title: "Caramelize Aromatics", text: "In the same skillet, sauté minced garlic and sun-dried tomatoes for 90 seconds until fragrant, releasing the flavorful red oils." },
      { step: 3, title: "Simmer Velvet Reduction", text: "Pour in heavy cream. Bring to a gentle bubble, then fold in grated Parmesan cheese until glossy and emulsified." },
      { step: 4, title: "Wilt Spinach & Glaze", text: "Fold in baby spinach until just wilted. Spoon hot sauce over chicken and finish with freshly cracked black pepper." }
    ]
  },
  {
    id: "salmon-poke",
    title: "Torched Ponzu Miso Salmon Bowl",
    description: "Sashimi-grade salmon lightly seared with a culinary torch, tossed in citrus ponzu, over warm sushi rice with avocado and chili crunch.",
    category: "HEALTHY",
    prepTime: "15 min",
    cookTime: "5 min",
    difficulty: "Easy",
    calories: "380 kcal",
    rating: 4.9,
    reviewsCount: 118,
    flavorProfile: "Citrus Ponzu & Umami Crunch",
    synergyScore: "99% Match",
    chefSecret: "Season your sushi rice with a touch of warm mirin and rice vinegar while still steaming for authentic restaurant texture.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL00SpdN1POUYbrsVBbJZBMTS2u4blf0zbG3JzkB6N4CkHau3Bmbpp7Z6Bq208WZpHuSJ5ZsIRjIdWbdn6BWpQstwUaKvFIiSD4YYQ_82X9f-uXG_kLN1jRMDGRny2FvlGxDEmquy0-BAU_3fvnYJcl9QIB_UadbsrRUGLX6KH7Il2CCn0o3tPO_LBziBoTOTVX3tSiPX5WQQDK8zz--djE1YbFL6hE7aLPSzCVGNOqKzKySeunDY0rR940NTuC1te365VOX73",
    ingredients: [
      { name: "Fresh Atlantic salmon", amount: "350g, diced" },
      { name: "Seasoned sushi rice", amount: "1.5 cups" },
      { name: "Hass avocado", amount: "1 ripe, sliced" },
      { name: "Citrus ponzu & white miso", amount: "2 tbsp" },
      { name: "Steamed edamame", amount: "1/2 cup" },
      { name: "Sichuan chili crunch & nori", amount: "Garnish" }
    ],
    instructions: [
      { step: 1, title: "Cube & Marinate", text: "Cube fresh salmon into uniform 1/2-inch bites. Gently toss with ponzu, sesame oil, and a touch of white miso." },
      { step: 2, title: "Foundation Rice", text: "Portion warm seasoned sushi rice into wide shallow bowls." },
      { step: 3, title: "Arrange Botanicals", text: "Arrange marinated salmon, sliced avocado, edamame, and cucumber ribbons in neat sections." },
      { step: 4, title: "Torch & Finish", text: "Lightly kiss the top of the salmon with heat, drizzle chili crunch, and garnish with roasted sesame seeds." }
    ]
  },
  {
    id: "mushroom-risotto",
    title: "Black Truffle & Wild Morel Risotto",
    description: "Slow-simmered Carnaroli rice infused with roasted morels, chanterelles, rich vegetable broth, aged pecorino, and white truffle essence.",
    category: "DINNER",
    prepTime: "30 min",
    cookTime: "25 min",
    difficulty: "Medium",
    calories: "440 kcal",
    rating: 4.8,
    reviewsCount: 89,
    flavorProfile: "Earthy, Umami & Truffle Forward",
    synergyScore: "96% Match",
    chefSecret: "Mantecatura is key: vigorously beat in cold butter and cheese off the heat to create an ultra-creamy emulsion without adding heavy cream.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqZXWGECnDTCg4Ycp1Pk1_wRGvLmxv2SxQNWQCqKCovs7FAq3LOjX95DmkIDwpZ77p06o4sPNkSOzZh01FetHutHvZBfUCkHFnvxHkGfbnLSq8WNPaji95dpCAmvcxrUqEzlF6yXgsuN8NAzSXjJjeo2kIiW4A01qnn6n7ryUJfhJNfvCeWRFlboUIqyw6VzsDtwIE0x7Oei8yo03mctzO0Bmgytf7qSnuBzain5ICT7AiAj5drRc2DXB07SUGulydDa1-jkN",
    ingredients: [
      { name: "Carnaroli or Arborio rice", amount: "1.5 cups" },
      { name: "Assorted wild mushrooms", amount: "300g, sliced" },
      { name: "Simmering vegetable broth", amount: "4 cups" },
      { name: "French shallot & garlic", amount: "2 finely minced" },
      { name: "White truffle oil", amount: "1 tsp finishing" },
      { name: "Cold European butter", amount: "2 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Caramelize Mushrooms", text: "Sauté sliced mushrooms in olive oil over high heat until deeply browned and nutty. Set aside." },
      { step: 2, title: "Toast the Grains", text: "Soften shallots in butter. Add rice and toast dry for 2 minutes until translucent at the edges." },
      { step: 3, title: "Ladle & Agitate", text: "Add warm stock one ladle at a time, stirring steadily to release starches until al dente (18 min)." },
      { step: 4, title: "The Mantecatura", text: "Remove pan from fire. Vigorously beat in cold butter, grated cheese, mushrooms, and finish with truffle oil." }
    ]
  },
  {
    id: "harissa-shakshuka",
    title: "Smoky Harissa Shakshuka with Whipped Feta",
    description: "Farm-fresh eggs poached gently in a spiced tomato reduction infused with smoky Tunisian harissa, cumin, bell peppers, and melted feta.",
    category: "BREAKFAST",
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Easy",
    calories: "320 kcal",
    rating: 4.9,
    reviewsCount: 95,
    flavorProfile: "Smoky, Piquant & Creamy",
    synergyScore: "97% Match",
    chefSecret: "Cover the skillet for the final 3 minutes so steam cooks the egg whites while leaving the yolks warm and golden runny.",
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Free-range large eggs", amount: "4 whole" },
      { name: "San Marzano crushed tomatoes", amount: "1.5 cups" },
      { name: "Smoky rose harissa paste", amount: "1.5 tbsp" },
      { name: "Red bell pepper & sweet onion", amount: "1 diced each" },
      { name: "Crumbled Greek feta", amount: "1/2 cup" },
      { name: "Fresh cilantro & toasted cumin", amount: "To garnish" }
    ],
    instructions: [
      { step: 1, title: "Sauté the Sofrito", text: "Sweat onions, bell pepper, and garlic with smoked paprika and ground cumin in olive oil until sweet and tender." },
      { step: 2, title: "Build the Rich Sauce", text: "Stir in harissa paste and crushed tomatoes. Simmer on medium-low for 8 minutes until thickened." },
      { step: 3, title: "Poach the Eggs", text: "Make small wells in the sauce. Crack fresh eggs into each well and scatter crumbled feta around them." },
      { step: 4, title: "Cover & Set", text: "Cover pan for 3-4 minutes until whites are just set and yolks remain silken. Garnish with fresh cilantro." }
    ]
  },
  {
    id: "chili-crisp-noodles",
    title: "Garlic Chili-Crisp Biang Biang Noodles",
    description: "Thick hand-pulled style ribbon noodles tossed in hot sizzling garlic oil, Sichuan pepper, scallions, aged black vinegar, and bok choy.",
    category: "QUICK",
    prepTime: "12 min",
    cookTime: "8 min",
    difficulty: "Easy",
    calories: "410 kcal",
    rating: 4.8,
    reviewsCount: 110,
    flavorProfile: "Mala Numbing, Tangy & Fragrant",
    synergyScore: "99% Match",
    chefSecret: "Pour smoking hot oil directly over raw minced garlic, chili flakes, and scallions to bloom the aromatics in 2 seconds.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Wide knife-cut wheat noodles", amount: "200g" },
      { name: "Crispy chili oil & flakes", amount: "2 tbsp" },
      { name: "Fresh garlic & scallions", amount: "5 cloves minced & 2 stalks" },
      { name: "Aged Chinese black vinegar", amount: "1.5 tbsp" },
      { name: "Baby bok choy", amount: "4 heads, halved" },
      { name: "Toasted sesame oil", amount: "1 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Boil the Noodles", text: "Boil wide noodles in salted water for 5 minutes. Blanch baby bok choy in the last 60 seconds." },
      { step: 2, title: "Layer Aromatics", text: "Place hot drained noodles in a serving bowl. Top with minced garlic, chili flakes, and sliced scallions." },
      { step: 3, title: "Hot Oil Splash", text: "Heat 2 tbsp oil until shimmering. Carefully ladle sizzling oil directly over garlic and chili flakes to release aromatics." },
      { step: 4, title: "Toss & Glaze", text: "Splash with black vinegar and soy sauce. Toss vigorously to emulsify the sauce over the ribbons." }
    ]
  },
  {
    id: "quinoa-salad",
    title: "Mediterranean Quinoa Bowl",
    category: "HEALTHY",
    prepTime: "20 min",
    cookTime: "15 min",
    difficulty: "Easy",
    calories: "340 kcal",
    rating: 4.7,
    reviewsCount: 62,
    flavorProfile: "Crisp, Zesty & Mediterranean",
    synergyScore: "95% Match",
    chefSecret: "Toss warm quinoa with lemon vinaigrette so the grains absorb maximum citrus brightness before cooling.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Fluffy cooked quinoa", amount: "1.5 cups" },
      { name: "Cherry tomatoes & Persian cucumbers", amount: "1 cup each, diced" },
      { name: "Kalamata olives", amount: "1/3 cup, pitted" },
      { name: "Crumbled feta cheese", amount: "1/2 cup" },
      { name: "Lemon-herb vinaigrette", amount: "3 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Fluff the Quinoa", text: "Allow cooked quinoa to cool to room temperature in a large mixing bowl." },
      { step: 2, title: "Chop Vegetables", text: "Dice tomatoes, crisp cucumbers, and slice kalamata olives into halves." },
      { step: 3, title: "Toss & Dress", text: "Combine vegetables and quinoa with lemon-herb vinaigrette, salt, and cracked pepper." },
      { step: 4, title: "Top with Feta", text: "Sprinkle crumbled Greek feta and fresh oregano before serving." }
    ]
  },
  {
    id: "lemon-herb-salmon",
    title: "Pan-Seared Meyer Lemon & Thyme Salmon",
    description: "Crispy-skinned Atlantic salmon basted with Meyer lemon brown butter, garlic, and fresh thyme over tender asparagus.",
    category: "HEALTHY",
    prepTime: "15 min",
    cookTime: "12 min",
    difficulty: "Medium",
    calories: "410 kcal",
    rating: 4.9,
    reviewsCount: 84,
    flavorProfile: "Nutty Brown Butter & Lemon Verbena",
    synergyScore: "98% Match",
    chefSecret: "Press the salmon fillet gently with a spatula for the first 30 seconds skin-down to prevent buckling and ensure edge-to-edge crispness.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Wild salmon fillet", amount: "400g, skin on" },
      { name: "Fresh asparagus spears", amount: "1 bunch, trimmed" },
      { name: "Meyer lemon", amount: "1 zested & juiced" },
      { name: "Grass-fed butter", amount: "2 tbsp" },
      { name: "Fresh thyme & garlic", amount: "3 sprigs & 2 crushed cloves" }
    ],
    instructions: [
      { step: 1, title: "Skin-Down Crisp", text: "Pat salmon skin dry. Place skin-down in a hot skillet with 1 tsp oil. Sear undisturbed for 5 minutes until skin is cracker-crisp." },
      { step: 2, title: "Brown Butter Arrosé", text: "Flip gently. Add butter, crushed garlic, and thyme sprigs. Spoon foaming brown butter repeatedly over the fish for 3 minutes." },
      { step: 3, title: "Flash Sauté Greens", text: "Push salmon aside, toss asparagus in the pan juices with lemon juice for 2 minutes until bright green and crisp-tender." },
      { step: 4, title: "Serve Hot", text: "Plate asparagus, top with salmon, and pour remaining lemon brown butter over the top." }
    ]
  },
  {
    id: "crispy-tofu-teriyaki",
    title: "Crispy Sesame Tofu & Ginger Bok Choy",
    description: "Golden cornstarch-crusted tofu cubes tossed in a caramelized ginger teriyaki glaze with sesame seeds and tender baby bok choy.",
    category: "HEALTHY",
    prepTime: "18 min",
    cookTime: "12 min",
    difficulty: "Easy",
    calories: "350 kcal",
    rating: 4.8,
    reviewsCount: 77,
    flavorProfile: "Sweet Ginger, Umami & Nutty Crunch",
    synergyScore: "97% Match",
    chefSecret: "Press excess moisture out of firm tofu with paper towels before tossing in cornstarch for maximum glass-like crispiness.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      { name: "Extra-firm organic tofu", amount: "400g, cubed" },
      { name: "Fresh baby bok choy", amount: "4 heads" },
      { name: "Ginger-gariyaki glaze", amount: "3 tbsp" },
      { name: "Cornstarch", amount: "2 tbsp for dusting" },
      { name: "Toasted sesame seeds & scallions", amount: "2 tbsp" }
    ],
    instructions: [
      { step: 1, title: "Crisp the Tofu", text: "Toss dry tofu cubes in cornstarch. Pan-fry in hot sesame oil until all sides are blistered golden brown." },
      { step: 2, title: "Glaze & Reduce", text: "Pour in ginger teriyaki glaze. Toss rapidly over high heat until sauce reduces to a sticky glossy coat." },
      { step: 3, title: "Steam Bok Choy", text: "Flash steam bok choy with 2 tbsp water in pan for 90 seconds until vibrant emerald." },
      { step: 4, title: "Garnish & Bowl", text: "Serve over warm rice or quinoa, showered with toasted sesame and scallion curls." }
    ]
  }
];

const DEFAULT_SAVED_IDS = ["tuscan-chicken", "paneer-butter-masala", "salmon-poke", "hyderabadi-biryani"];

// ==========================================
// 1.5 THEME ENGINE (Light, Dark, System Default)
// ==========================================
const ThemeEngine = {
  THEME_KEY: "smartchief_theme_mode",

  init() {
    const savedTheme = localStorage.getItem(this.THEME_KEY) || localStorage.getItem("cooksmart_theme_mode") || "system";
    this.applyTheme(savedTheme, false);

    // Watch for OS system preference changes
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        const current = localStorage.getItem(this.THEME_KEY) || localStorage.getItem("cooksmart_theme_mode") || "system";
        if (current === "system") {
          this.applyTheme("system", false);
        }
      });
    }
  },

  getEffectiveTheme(mode) {
    if (mode === "system") {
      const isSystemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return isSystemDark ? "dark" : "light";
    }
    return mode;
  },

  setTheme(mode) {
    localStorage.setItem(this.THEME_KEY, mode);
    this.applyTheme(mode);
  },

  toggleTheme() {
    const currentMode = localStorage.getItem(this.THEME_KEY) || "system";
    const effective = this.getEffectiveTheme(currentMode);
    const nextMode = effective === "dark" ? "light" : "dark";
    this.setTheme(nextMode);
  },

  applyTheme(mode) {
    const effective = this.getEffectiveTheme(mode);
    const root = document.documentElement;

    if (effective === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }

    this.updateToggleUI(mode);
    if (typeof refreshBookmarkIcons === "function") {
      refreshBookmarkIcons();
    }
    if (typeof updateSaveUI === "function") {
      updateSaveUI();
    }
  },

  updateToggleUI(mode) {
    const activeMode = mode || localStorage.getItem(this.THEME_KEY) || "system";
    const effective = this.getEffectiveTheme(activeMode);
    const isDark = effective === "dark";

    // Update merged toggle buttons
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      const icon = btn.querySelector(".theme-icon");
      if (icon) {
        icon.textContent = isDark ? "dark_mode" : "light_mode";
        icon.style.color = isDark ? "#FBBF24" : "#FF6B35";
      }
      btn.setAttribute(
        "title",
        isDark ? "Current: Dark Mode (Click for Light Mode ☀️)" : "Current: Light Mode (Click for Dark Mode 🌙)"
      );
      btn.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
    });

    // Backward-compatibility for any remaining 3-button container
    document.querySelectorAll(".theme-toggle-container").forEach(container => {
      const btnLight = container.querySelector(".theme-btn-light");
      const btnDark = container.querySelector(".theme-btn-dark");
      const btnSystem = container.querySelector(".theme-btn-system");

      [btnLight, btnDark, btnSystem].forEach(b => {
        if (!b) return;
        b.classList.remove("bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30", "active");
        b.classList.add("text-text-muted");
      });

      let target = null;
      if (activeMode === "light") target = btnLight;
      else if (activeMode === "dark") target = btnDark;
      else target = btnSystem;

      if (target) {
        target.classList.add("bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30", "active");
        target.classList.remove("text-text-muted");
      }
    });
  }
};


// ==========================================
// 1.6 AUTOMATIC TIME-OF-DAY GREETING ENGINE
// ==========================================
const GreetingEngine = {
  timerId: null,

  TIME_CONFIGS: {
    morning: {
      id: "morning",
      greeting: "Good morning",
      emoji: "🌅",
      icon: "wb_sunny",
      label: "Morning",
      bannerTitle: "Morning Fuel & Breakfast Bowls",
      bannerSubtitle: "Energizing morning recipes ready in under 15 minutes."
    },
    afternoon: {
      id: "afternoon",
      greeting: "Good afternoon",
      emoji: "☀️",
      icon: "light_mode",
      label: "Afternoon",
      bannerTitle: "Midday Power Bowls & Quick Lunch",
      bannerSubtitle: "Nutritious, high-energy meals to power through your day."
    },
    evening: {
      id: "evening",
      greeting: "Good evening",
      emoji: "🌇",
      icon: "routine",
      label: "Evening",
      bannerTitle: "Golden Hour Aromas & Dinner Craft",
      bannerSubtitle: "Rich, fragrant curries & soothing comfort food for tonight."
    },
    night: {
      id: "night",
      greeting: "Good night",
      emoji: "🌙",
      icon: "bedtime",
      label: "Night",
      bannerTitle: "Late Night Comfort & Cozy Bites",
      bannerSubtitle: "Gentle, quick comfort dishes for evening cravings."
    }
  },

  init() {
    this.updateGreeting();
    // Update live greeting automatically every 30 seconds
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.updateGreeting();
    }, 30000);
  },

  getRealTimePeriod() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 21) return "evening";
    return "night";
  },

  getFormattedLiveTime() {
    const d = new Date();
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  },

  updateGreeting() {
    const greetingEl = document.getElementById("greeting-text");
    const iconEl = document.getElementById("greeting-icon");
    const clockEl = document.getElementById("current-clock");
    const bannerTitle = document.getElementById("time-banner-title");
    const bannerSub = document.getElementById("time-banner-subtitle");

    const period = this.getRealTimePeriod();
    const config = this.TIME_CONFIGS[period];
    const displayTime = this.getFormattedLiveTime();

    if (greetingEl) {
      greetingEl.innerHTML = `${config.greeting}, Chief 👋`;
    }

    if (iconEl) iconEl.textContent = config.emoji;
    if (clockEl) clockEl.textContent = `${displayTime} • Live`;

    if (bannerTitle) bannerTitle.textContent = config.bannerTitle;
    if (bannerSub) bannerSub.textContent = config.bannerSubtitle;
  },

  // Retained as harmless no-ops to prevent external caller breakages
  cycleTimeOfDay() {
    this.updateGreeting();
  },
  setTimeMode() {
    this.updateGreeting();
  }
};


// ==========================================
// 2. DYNAMIC CHEF CULINARY ENGINE (AI SIMULATION)
// ==========================================
const ChefEngine = {
  // Diverse Haute-Cuisine Kitchen Baskets for "Inspire Me"
  INSPIRATION_BUNDLES: [
    { name: "Royal Shahi Kitchen", items: ["Paneer", "Tomatoes", "Garlic", "Cream", "Kasuri Methi"], mood: "INDIAN" },
    { name: "Old Delhi Chandni Chowk", items: ["Chicken Breast", "Garam Masala", "Tomatoes", "Butter", "Ginger"], mood: "INDIAN" },
    { name: "Malabar Coastal Spice", items: ["Prawns", "Coconut", "Curry Leaves", "Rice", "Chili Crisp"], mood: "INDIAN" },
    { name: "Vedic Satvik Khichdi", items: ["Basmati Rice", "Lentils", "Ghee", "Ginger", "Cumin"], mood: "INDIAN" },
    { name: "Tokyo Night Market", items: ["Salmon", "Miso", "Rice", "Avocado", "Chili Crisp"], mood: "JAPANESE" },
    { name: "Tuscan Sun & Herb", items: ["Chicken Breast", "Garlic", "Baby Spinach", "Olive Oil", "Lemon"], mood: "ITALIAN" },
    { name: "Nordic Truffle Forest", items: ["Wild Mushrooms", "Parmesan", "Rice", "Truffle Oil", "Butter"], mood: "FUSION" },
    { name: "Tunisian Dawn Shakshuka", items: ["Eggs", "Tomatoes", "Onion", "Harissa", "Feta"], mood: "MEDITERRANEAN" },
    { name: "Sichuan Street Flash", items: ["Noodles", "Garlic", "Chili Crisp", "Bok Choy", "Sesame Oil"], mood: "JAPANESE" },
    { name: "Amalfi Coast Tagliatelle", items: ["Pasta", "Meyer Lemon", "Garlic", "Parmesan", "Fresh Thyme"], mood: "ITALIAN" },
    { name: "Bangkok Wok Char", items: ["Tofu", "Ginger", "Soy Glaze", "Bok Choy", "Rice"], mood: "THAI" },
    { name: "Oaxacan Smoke & Fire", items: ["Chicken Breast", "Chipotle", "Lime", "Avocado", "Cilantro"], mood: "LATIN" },
    { name: "Bistro Pan-Jus Cut", items: ["Steak", "Garlic", "Rosemary", "Butter", "Mushrooms"], mood: "FRENCH" },
    { name: "Aegean Halloumi Bloom", items: ["Halloumi", "Honey", "Cherry Tomatoes", "Olive Oil", "Za'atar"], mood: "MEDITERRANEAN" },
    { name: "Kyoto Ponzu Tataki", items: ["Salmon", "Soy Glaze", "Cucumber", "Sesame Oil", "Avocado"], mood: "JAPANESE" },
    { name: "Provençal Velveteen", items: ["Chicken Breast", "Dijon", "Shallots", "Cream", "Baby Spinach"], mood: "FRENCH" },
    { name: "Saffron Sunrise Skillet", items: ["Eggs", "Sourdough", "Avocado", "Chili Crisp", "Lemon"], mood: "FUSION" },
    { name: "Green Goddess Harvest", items: ["Quinoa", "Cucumber", "Avocado", "Feta", "Meyer Lemon"], mood: "MEDITERRANEAN" },
    { name: "Chiang Mai Ribbon Fire", items: ["Noodles", "Lime", "Garlic", "Chili Crisp", "Scallions"], mood: "THAI" },
    { name: "Forest Confit Sourdough", items: ["Wild Mushrooms", "Garlic", "Thyme", "Sourdough", "Parmesan"], mood: "FRENCH" }
  ],

  getRandomInspiration() {
    const idx = Math.floor(Math.random() * this.INSPIRATION_BUNDLES.length);
    return this.INSPIRATION_BUNDLES[idx];
  },

  calculateSynergy(ingredients) {
    if (!ingredients || ingredients.length === 0) return 0;
    const base = 86;
    const boost = Math.min(13, ingredients.length * 3.2);
    return Math.min(99, Math.round(base + boost));
  },

  // Generates 3 unique, innovative concept variations based on ingredients, preferences & cuisine mood
  synthesizeConcepts(ingredients, preferences = {}, selectedMood = "ALL", variationSeed = null) {
    const rawSeed = variationSeed !== null ? variationSeed : Date.now();
    const normalized = (ingredients || []).map(i => i.toLowerCase().trim());

    // Categorize ingredient components
    const hasChicken = normalized.some(i => i.includes("chicken") || i.includes("poultry"));
    const hasSalmon = normalized.some(i => i.includes("salmon") || i.includes("fish") || i.includes("trout") || i.includes("tuna") || i.includes("prawn") || i.includes("shrimp"));
    const hasSteak = normalized.some(i => i.includes("steak") || i.includes("beef") || i.includes("ribeye"));
    const hasEgg = normalized.some(i => i.includes("egg"));
    const hasMushroom = normalized.some(i => i.includes("mushroom") || i.includes("truffle"));
    const hasPasta = normalized.some(i => i.includes("pasta") || i.includes("spaghetti") || i.includes("penne") || i.includes("tagliatelle"));
    const hasNoodle = normalized.some(i => i.includes("noodle") || i.includes("ramen") || i.includes("udon"));
    const hasRice = normalized.some(i => i.includes("rice") || i.includes("quinoa") || i.includes("basmati"));
    const hasPaneer = normalized.some(i => i.includes("paneer") || i.includes("cottage cheese"));
    const hasTofu = normalized.some(i => i.includes("tofu") || i.includes("paneer") || i.includes("halloumi"));
    const hasTomato = normalized.some(i => i.includes("tomato"));
    const hasLemon = normalized.some(i => i.includes("lemon") || i.includes("citrus") || i.includes("lime") || i.includes("yuzu"));
    const hasChili = normalized.some(i => i.includes("chili") || i.includes("spicy") || i.includes("harissa") || i.includes("sriracha") || i.includes("masala"));
    const hasMiso = normalized.some(i => i.includes("miso"));
    const hasCream = normalized.some(i => i.includes("cream") || i.includes("butter") || i.includes("parmesan") || i.includes("cheese") || i.includes("ghee") || i.includes("malai"));

    const isIndian = selectedMood === "INDIAN" || preferences.satvik || preferences.desiSpicy || normalized.some(i => i.includes("paneer") || i.includes("masala") || i.includes("curry") || i.includes("biryani") || i.includes("kasuri") || i.includes("dal") || i.includes("ghee") || i.includes("cumin") || i.includes("basmati") || i.includes("cardamom"));

    const isVegetarian = preferences.vegetarian || preferences.satvik || hasPaneer || normalized.some(i => i.includes("vegetarian"));
    const isLowCarb = preferences.lowCarb;
    const isHighProtein = preferences.highProtein;
    const isQuick = preferences.under30Mins;

    // Detect Hero Element
    let hero = "Artisanal Kitchen Garden";
    if (hasPaneer) hero = "Fresh Malai Paneer";
    else if (hasSalmon) hero = "Sashimi-Grade Atlantic Salmon";
    else if (hasChicken) hero = "Pan-Roasted Tender Poultry";
    else if (hasSteak) hero = "Cast-Iron Seared Prime Beef";
    else if (hasTofu) hero = "Golden Sesame-Crusted Tofu";
    else if (hasEgg) hero = "Golden Organic Farm Yolks";
    else if (hasMushroom) hero = "Caramelized Wild Morel & Shiitake";
    else if (hasPasta || hasNoodle) hero = "Hand-Pulled Silk Noodles";
    else if (ingredients.length > 0) hero = ingredients[0];

    const secondHero = ingredients[1] || "Crisp Botanicals";
    const thirdHero = ingredients[2] || "Aromatics";

    // High quality food photography archetypes
    const photos = {
      indian: [
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
      ],
      salmon: [
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDL00SpdN1POUYbrsVBbJZBMTS2u4blf0zbG3JzkB6N4CkHau3Bmbpp7Z6Bq208WZpHuSJ5ZsIRjIdWbdn6BWpQstwUaKvFIiSD4YYQ_82X9f-uXG_kLN1jRMDGRny2FvlGxDEmquy0-BAU_3fvnYJcl9QIB_UadbsrRUGLX6KH7Il2CCn0o3tPO_LBziBoTOTVX3tSiPX5WQQDK8zz--djE1YbFL6hE7aLPSzCVGNOqKzKySeunDY0rR940NTuC1te365VOX73",
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
      ],
      poultry: [
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPmlitRZy3vPh5WfosjsoLrH1BlaL-ssz7CBtBlKzkWKEv5MmaEZpi5sRiFZkJNRYMhQWt7-AhXS_Y6dw8drUFA6KlC5csD2Vw1T-U5xwLjl75TxgVq1k35SakOUFVGMYQdIz6VYn51qzK2-FUbiZppY95vbQbm4FAzRZE08SHIVZPmftSquXuWTv5BJ3g7WX2xgVmzUSiJ36gqxI5Lf6kk96u2c1vetx2xeIf0Kur38HcDzstQwMBXFtK3BixHLKHub1ItB72",
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
      ],
      skilletEgg: [
        "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      ],
      noodlesPasta: [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
      ],
      truffleForest: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqZXWGECnDTCg4Ycp1Pk1_wRGvLmxv2SxQNWQCqKCovs7FAq3LOjX95DmkIDwpZ77p06o4sPNkSOzZh01FetHutHvZBfUCkHFnvxHkGfbnLSq8WNPaji95dpCAmvcxrUqEzlF6yXgsuN8NAzSXjJjeo2kIiW4A01qnn6n7ryUJfhJNfvCeWRFlboUIqyw6VzsDtwIE0x7Oei8yo03mctzO0Bmgytf7qSnuBzain5ICT7AiAj5drRc2DXB07SUGulydDa1-jkN",
        "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80"
      ],
      tofuBowl: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
      ],
      steakRoast: [
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      ]
    };

    // Pick photos by hero
    let photoGroup = photos.tofuBowl;
    if (isIndian) photoGroup = photos.indian;
    else if (hasSalmon) photoGroup = photos.salmon;
    else if (hasChicken) photoGroup = photos.poultry;
    else if (hasSteak) photoGroup = photos.steakRoast;
    else if (hasEgg) photoGroup = photos.skilletEgg;
    else if (hasPasta || hasNoodle) photoGroup = photos.noodlesPasta;
    else if (hasMushroom) photoGroup = photos.truffleForest;

    // Dedicated Indian Haute-Cuisine Synthesis Branch
    if (isIndian) {
      const indianHero = hasPaneer ? "Malai Paneer" : hasChicken ? "Tender Spiced Murgh" : hero;
      const conceptA = {
        id: `concept-a-${rawSeed}`,
        conceptType: "Concept 1: Royal Shahi Makhani Velveteen",
        conceptBadge: "👑 Royal Shahi",
        title: `Royal Shahi ${indianHero} with Kasuri Methi & Infused Ghee`,
        description: `Velvety tomato-cashew makhani reduction gently infused with green cardamom, butter, and fragrant hand-rubbed kasoori methi. Crafted with: ${ingredients.join(", ")}.`,
        category: "INDIAN",
        prepTime: "18 min",
        cookTime: "22 min",
        difficulty: "Medium",
        calories: "430 kcal",
        rating: "5.0",
        reviewsCount: 184,
        flavorProfile: "Silky Makhani, Cardamom Sweetness & Warm Fenugreek",
        synergyScore: `${this.calculateSynergy(ingredients)}% Harmony`,
        synergyDetails: "Layered royal makhani emulsion with toasted kasoori methi aromatics and saffron ghee",
        chefSecret: "Rub dry kasoori methi between your palms before adding off the flame to unlock fragrant volatile oils without any bitterness.",
        beveragePairing: "Chilled Mango Cardamom Lassi or Spiced Kashmiri Kahwa",
        textureElement: "Toasted Silvered Almonds & Saffron Cream Drizzle",
        image: photoGroup[0 % photoGroup.length],
        ingredients: ingredients.map((ing, idx) => ({
          name: ing,
          amount: idx === 0 ? "350g, freshly prepped" : "1/2 cup, sliced"
        })).concat([
          { name: "Strained tomato & cashew reduction", amount: "1.5 cups" },
          { name: "Cultured butter & kasoori methi", amount: "2 tbsp & 1 tbsp" }
        ]),
        instructions: [
          { step: 1, title: "Bloom Whole Shahi Spices", text: `Heat ghee in a heavy pan. Splutter green cardamom and cloves, then gently sauté ${ingredients.slice(0, 2).join(" and ")}.` },
          { step: 2, title: "Simmer Velveteen Gravy", text: `Stir in rich tomato reduction and cashew velvet. Simmer on gentle flame until glistening butter separates along the edges.` },
          { step: 3, title: "Fold & Glaze", text: `Add ${indianHero}. Simmer for 4 minutes so the succulent morsels absorb the royal cardamom makhani sauce.` },
          { step: 4, title: "The Royal Fenugreek Finish", text: "Crush roasted kasoori methi into the steaming pan. Finish with a swirl of fresh cream and saffron ginger threads." }
        ]
      };

      const conceptB = {
        id: `concept-b-${rawSeed}`,
        conceptType: "Concept 2: Smoky Tandoori Tikka Hearth Roast",
        conceptBadge: "🔥 Tandoori Hearth",
        title: `Smoky Charred ${indianHero} Tikka with Mint Coriander Emulsion`,
        description: `Cast-iron blistered spiced skewers marinated in hung curd, Kashmiri deghi mirch, and mustard oil, served over micro-herb salad with pickled onions. Featuring: ${ingredients.join(", ")}.`,
        category: "INDIAN",
        prepTime: "20 min",
        cookTime: "12 min",
        difficulty: "Easy",
        calories: "380 kcal",
        rating: "4.9",
        reviewsCount: 210,
        flavorProfile: "Smoky Mustard Oil, Kashmiri Chili & Tart Chaat Masala",
        synergyScore: "99% Harmony",
        synergyDetails: "High-heat Maillard char balance against bright lime, mint, and cooling yogurt curd",
        chefSecret: "Smoking hot cast-iron contact replicates clay tandoor charring while keeping center morsels wonderfully juicy.",
        beveragePairing: "Iced Masala Chaas (Spiced Buttermilk) with Roasted Cumin",
        textureElement: "Blistered Char Crust, Crispy Pickled Shallots & Mint Chutney",
        image: photoGroup[1 % photoGroup.length],
        ingredients: ingredients.map((ing, idx) => ({
          name: ing,
          amount: idx === 0 ? "400g, bite-sized cubes" : "1/2 cup, diced"
        })).concat([
          { name: "Hung curd & Kashmiri chili marinade", amount: "3 tbsp" },
          { name: "Raw mustard oil & chaat masala", amount: "1 tbsp each" }
        ]),
        instructions: [
          { step: 1, title: "Spiced Curd Rub", text: `Coat ${indianHero} and ${secondHero} in thick spiced curd, garlic, ginger, and mustard oil for 15 minutes.` },
          { step: 2, title: "Searing Heat Char", text: "Sear on smoking cast iron skillet for 3-4 minutes per side undisturbed until blistered and smokily blackened at edges." },
          { step: 3, title: "Baste with Desi Ghee", text: "Brush lightly with melted desi ghee and sprinkle freshly ground chaat masala over the sizzling crust." },
          { step: 4, title: "Plate with Fresh Chutney", text: "Serve smoking hot alongside fresh mint-coriander chutney, lime wedges, and crisp onion rings." }
        ]
      };

      const conceptC = {
        id: `concept-c-${rawSeed}`,
        conceptType: "Concept 3: Fragrant Dum Saffron Basmati Pilaf",
        conceptBadge: "✨ Saffron Dum",
        title: `Fragrant Dum Saffron Basmati with Golden Caramelized Birista`,
        description: `Slow-steamed sealed pot of aged long-grain basmati, golden crisp onions, infused saffron milk, whole green cardamom, and fresh mint leaves. Formulated with: ${ingredients.join(", ")}.`,
        category: "INDIAN",
        prepTime: "15 min",
        cookTime: "25 min",
        difficulty: "Medium",
        calories: "420 kcal",
        rating: "4.9",
        reviewsCount: 165,
        flavorProfile: "Floral Saffron, Sweet Birista Onions & Ghee Aromatics",
        synergyScore: "98% Harmony",
        synergyDetails: "Enclosed aromatic steam infuses basmati grains with royal whole spice bouquets",
        chefSecret: "Place the sealed pot over a heavy flat iron tawa on low heat so heat spreads evenly without burning the bottom layer.",
        beveragePairing: "Masala Chai with Crushed Cardamom & Ginger",
        textureElement: "Crunchy Golden Fried Birista & Fluffy Unbroken Rice Grains",
        image: photoGroup[2 % photoGroup.length],
        ingredients: ingredients.map((ing, idx) => ({
          name: ing,
          amount: idx === 0 ? "1.5 cups aged basmati or main item" : "1/2 cup"
        })).concat([
          { name: "Saffron strands steeped in warm milk", amount: "3 tbsp" },
          { name: "Crispy fried onions & desi ghee", amount: "1/2 cup & 2 tbsp" }
        ]),
        instructions: [
          { step: 1, title: "Aromatic Tempering", text: `Bloom star anise, cardamom, and bay leaves in ghee. Lightly sauté ${ingredients.slice(0, 3).join(", ")}.` },
          { step: 2, title: "Layer Rice & Botanicals", text: "Spread fluffy parboiled basmati rice over the spiced base. Scatter golden birista onions, mint, and saffron milk." },
          { step: 3, title: "Dum Sealed Steam", text: "Seal pot tightly with a lid and steam on lowest heat for 20 minutes to trap the royal floral vapors." },
          { step: 4, title: "Gentle Fluff & Garnish", text: "Gently fluff with a flat fork to preserve long unbroken grains, drizzle warm ghee, and serve with cucumber raita." }
        ]
      };

      return [conceptA, conceptB, conceptC];
    }

    // Build Concept A: Sizzling Bistro Skillet (High Heat & Foaming Herb Butter)
    const conceptA = {
      id: `concept-a-${rawSeed}`,
      conceptType: "Concept 1: Sizzling Bistro Skillet",
      conceptBadge: "⚡ 15-Min Sizzle",
      title: hasSalmon
        ? "Crisp-Skin Meyer Lemon & Thyme Salmon with Charred Garlic Jus"
        : hasChicken
          ? "Calabrian Chili Crisp Chicken Cutlets with Preserved Lemon Herb Butter"
          : hasSteak
            ? "Cast-Iron Rosemary Butter Seared Steak with Blistered Garlic Fond"
            : hasEgg
              ? "Sizzling Chili-Crisp Fried Eggs over Charred Scallions & Sourdough"
              : hasMushroom
                ? "Blistered Garlic & Herb Wild Forest Mushrooms with Brown Butter Jus"
                : `Sizzling Golden ${hero} & ${secondHero} Pan-Roast`,
      description: `High-heat cast-iron searing builds deep Maillard browning, deglazed instantly with citrus pan juices and mounted with foaming cold herb butter. Featuring: ${ingredients.join(", ")}.`,
      category: isQuick ? "QUICK" : "DINNER",
      prepTime: "12 min",
      cookTime: "10 min",
      difficulty: "Easy",
      calories: isLowCarb ? "360 kcal" : "420 kcal",
      rating: "4.9",
      reviewsCount: 142,
      flavorProfile: "Citrus Acid Snap, Golden Fond & Herbaceous Butter",
      synergyScore: `${this.calculateSynergy(ingredients)}% Harmony`,
      synergyDetails: "Balanced rich browned fats with bright volatile citrus acids and savory aromatics",
      chefSecret: "Never move proteins during the first 3 minutes of contact with the cast iron to ensure a glassy, unbroken golden sear.",
      beveragePairing: "Crisp Mineral Sauvignon Blanc, Chilled Sancerre, or Sparkling Blood Orange Soda",
      textureElement: "Cracked Smoked Sea Salt & Blistered Cutlet Fond",
      image: photoGroup[0 % photoGroup.length],
      ingredients: ingredients.map((ing, idx) => ({
        name: ing,
        amount: idx === 0 ? "400g, trimmed" : idx === 1 ? "3 cloves or 1 bunch" : "Generous chief's pinch"
      })).concat([
        { name: "Cold European cultured butter", amount: "2 tbsp for mounting" },
        { name: "Flaky smoked sea salt & cracked pepper", amount: "To taste" }
      ]),
      instructions: [
        { step: 1, title: "High-Heat Foundation", text: `Heat a heavy skillet over medium-high heat with 1 tbsp oil. Generously season ${hero}. Sear undisturbed for 4 minutes until a deep golden crust forms.` },
        { step: 2, title: "Bloom Fresh Botanicals", text: `Flip gently. Add ${secondHero}, crushed garlic, and available pantry items (${ingredients.slice(2, 4).join(", ") || 'fresh herbs'}). Sauté for 90 seconds until intensely fragrant.` },
        { step: 3, title: "Mount the Pan-Jus", text: "Remove from direct high flame. Drop in 2 tbsp cold butter and fresh lemon juice. Vigorously spoon foaming brown butter repeatedly over ingredients." },
        { step: 4, title: "Plate with Resting Juices", text: "Transfer to warm plates, pour remaining caramelized skillet juices over the top, and finish with flaky sea salt." }
      ]
    };

    // Build Concept B: Elevated Gastronomy Entrée (Velvet Reduction & Textural Crust)
    const conceptB = {
      id: `concept-b-${rawSeed}`,
      conceptType: "Concept 2: Elevated Gastronomy Entrée",
      conceptBadge: "✨ Haute Cuisine",
      title: hasSalmon
        ? "Torched White Miso & Brown Butter Salmon with Sesame Reduction"
        : hasChicken
          ? "Pan-Seared Cutlets in Velvet Shallot & Sun-Dried Tomato Reduction"
          : hasSteak
            ? "Truffle-Infused Morel Pan-Roast with Aged Balsamic Glaze"
            : hasEgg
              ? "Smoky Harissa & Cumin Skillet Shakshuka with Whipped Feta & Mint"
              : hasMushroom
                ? "Carnaroli Risotto with Truffle Essence & Roasted Forest Shiitake"
                : `Artisan ${hero} & ${secondHero} Velvet Pan Reduction`,
      description: `A restaurant-grade composition uniting gentle aromatic sweating, a glossy reduction cloaking the plate, and a crispy contrast garnish. Crafted with: ${ingredients.join(", ")}.`,
      category: isVegetarian ? "HEALTHY" : "DINNER",
      prepTime: "20 min",
      cookTime: "18 min",
      difficulty: "Medium",
      calories: isHighProtein ? "460 kcal" : "410 kcal",
      rating: "5.0",
      reviewsCount: 168,
      flavorProfile: "Silky Umami Reduction, Confit Garlic & Aged Pecorino",
      synergyScore: "99% Harmony",
      synergyDetails: "Layered deep umami complexity paired with silky emulsion and aromatic herb bouquet",
      chefSecret: "Deglaze the pan fond with broth or white wine before introducing creams or miso to seamlessly integrate all caramelized savory sugars.",
      beveragePairing: "Medium-bodied Pinot Noir, Chilled Junmai Daiginjo Sake, or Rosemary-Infused Tonic",
      textureElement: "Toasted Herb Pangrattato & Crispy Micro-Greens",
      image: photoGroup[1 % photoGroup.length],
      ingredients: ingredients.map((ing, idx) => ({
        name: ing,
        amount: idx === 0 ? "350g, center-cut" : idx === 1 ? "1 cup, hand-torn" : "1/2 cup, prepped"
      })).concat([
        { name: "Cream reduction or white miso glaze", amount: "3 tbsp" },
        { name: "Toasted crunchy seeds or panko breadcrumbs", amount: "2 tbsp for crust" }
      ]),
      instructions: [
        { step: 1, title: "Gentle Aromatic Confit", text: `In a wide pan over low heat, sweat ${ingredients.slice(0, 2).join(" and ")} in olive oil until sweet, translucent, and deeply aromatic (approx 5 min).` },
        { step: 2, title: "Precision Cooking", text: `Introduce ${hero}. Cook gently at medium heat, basting continuously to preserve tenderness without scorching.` },
        { step: 3, title: "Build the Velvet Emulsion", text: "Stir in white miso or cream reduction with a splash of broth. Simmer for 3 minutes until sauce coats the back of a wooden spoon." },
        { step: 4, title: "The Gastronomic Finish", text: "Plate on shallow warm bowls, spoon glossy reduction around the base, and shower with toasted crunch element and fresh herbs." }
      ]
    };

    // Build Concept C: Vibrant Street Fusion (High-Voltage Wok & Citrus Crunch)
    const conceptC = {
      id: `concept-c-${rawSeed}`,
      conceptType: "Concept 3: Vibrant Global Street Fusion",
      conceptBadge: "🔥 Street Fusion",
      title: hasNoodle || hasPasta
        ? "Blistered Garlic-Ginger Scallion Noodles with Sizzling Chili Oil"
        : hasRice
          ? "Torched Kimchi & Charred Bok Choy Wok Bowl with Crispy Shallots"
          : hasTofu
            ? "Crispy Sesame Teriyaki Tofu Cubes with Blistered Ginger Greens"
            : hasEgg
              ? "Thai-Style Crispy Lace Eggs with Tamarind Chili Drizzle"
              : hasSalmon
                ? "Ponzu Citrus Torched Salmon Bowl with Avocado & Chili Crunch"
                : `Fiery Chili-Crisp ${hero} & Blistered ${secondHero} Toss`,
      description: `An electric high-voltage street dish bursting with smoking hot chili aromatics, umami glaze, and toasted sesame crunch. Formulated with: ${ingredients.join(", ")}.`,
      category: "QUICK",
      prepTime: "10 min",
      cookTime: "8 min",
      difficulty: "Easy",
      calories: "390 kcal",
      rating: "4.8",
      reviewsCount: 112,
      flavorProfile: "Mala Chili Crunch, Sweet Tamari & Piquant Acid",
      synergyScore: "98% Harmony",
      synergyDetails: "Vibrant high-contrast interplay of searing heat, sweet glaze, and crisp seeds",
      chefSecret: "Pour smoking hot oil directly over minced raw garlic and chili flakes to bloom their essential aromatic oils in just 2 seconds.",
      beveragePairing: "Crisp Japanese Lager, Smoky Mezcal Paloma, or Iced Jasmine Green Tea with Lime",
      textureElement: "Toasted Sesame Seeds, Crispy Fried Shallots & Chili Flakes",
      image: photoGroup[2 % photoGroup.length],
      ingredients: ingredients.map((ing, idx) => ({
        name: ing,
        amount: idx === 0 ? "250g, bite-sized" : "1/2 cup, sliced thin"
      })).concat([
        { name: "Crispy chili oil & toasted sesame oil", amount: "2 tbsp combined" },
        { name: "Aged black vinegar or fresh lime juice", amount: "1.5 tbsp" }
      ]),
      instructions: [
        { step: 1, title: "Wok-Flash Prep", text: `Toss ${hero} and ${ingredients.slice(1, 3).join(", ")} in high-smoke point oil over maximum flame for 3 minutes until blistered and charred at the edges.` },
        { step: 2, title: "Aromatic Hot Oil Bloom", text: "Gather minced garlic, chili flakes, and scallions in the pan center. Ladle 1 tbsp sizzling oil directly over them to bloom their aroma instantly." },
        { step: 3, title: "Glaze & Caramelize", text: "Splash with vinegar or citrus and tamari. Toss vigorously so the bubbling sauce coats every morsel in a shiny glaze." },
        { step: 4, title: "Shower with Crunch", text: "Garnish generously with toasted sesame seeds, chili crunch, and fresh cilantro leaves. Serve immediately while sizzling." }
      ]
    };

    return [conceptA, conceptB, conceptC];
  },

  // Backwards compatibility convenience helper
  synthesizeRecipe(ingredients, preferences = {}, selectedMood = "ALL") {
    const concepts = this.synthesizeConcepts(ingredients, preferences, selectedMood);
    return concepts[0];
  },

  pickImageForIngredients(ingredients = [], title = "") {
    const combined = (ingredients.join(" ") + " " + title).toLowerCase();
    const photos = {
      indian: [
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
      ],
      salmon: [
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
      ],
      poultry: [
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
      ],
      skilletEgg: [
        "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
      ],
      noodlesPasta: [
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
      ],
      truffleForest: [
        "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80"
      ],
      tofuBowl: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
      ],
      steakRoast: [
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      ]
    };

    if (combined.includes("curry") || combined.includes("paneer") || combined.includes("tikka") || combined.includes("masala") || combined.includes("biryani") || combined.includes("dal")) {
      return photos.indian[Math.floor(Math.random() * photos.indian.length)];
    }
    if (combined.includes("salmon") || combined.includes("fish") || combined.includes("tuna") || combined.includes("seafood") || combined.includes("shrimp")) {
      return photos.salmon[Math.floor(Math.random() * photos.salmon.length)];
    }
    if (combined.includes("chicken") || combined.includes("turkey") || combined.includes("poultry")) {
      return photos.poultry[Math.floor(Math.random() * photos.poultry.length)];
    }
    if (combined.includes("egg") || combined.includes("omelet") || combined.includes("frittata") || combined.includes("shakshuka")) {
      return photos.skilletEgg[Math.floor(Math.random() * photos.skilletEgg.length)];
    }
    if (combined.includes("pasta") || combined.includes("spaghetti") || combined.includes("noodle") || combined.includes("ramen")) {
      return photos.noodlesPasta[Math.floor(Math.random() * photos.noodlesPasta.length)];
    }
    if (combined.includes("steak") || combined.includes("beef") || combined.includes("lamb") || combined.includes("pork") || combined.includes("meat")) {
      return photos.steakRoast[Math.floor(Math.random() * photos.steakRoast.length)];
    }
    if (combined.includes("mushroom") || combined.includes("truffle") || combined.includes("forest")) {
      return photos.truffleForest[0];
    }
    return photos.tofuBowl[Math.floor(Math.random() * photos.tofuBowl.length)];
  }
};

// ==========================================
// 2B. GEMINI AI RECIPE SERVICE
// ==========================================
const GeminiChefService = {
  get apiKey() {
    return localStorage.getItem("smartchief_gemini_api_key") || window.GEMINI_API_KEY || "";
  },
  model: "gemini-2.5-flash",

  async generateRecipe(ingredients = [], preferences = {}, cuisineMood = "ALL") {
    if (!this.apiKey) {
      throw new Error("No Gemini API key configured. Set smartchief_gemini_api_key in localStorage or window.GEMINI_API_KEY.");
    }
    const ingredientListStr = ingredients.join(", ");
    const prompt = `You are an elite, Michelin-starred culinary chef and molecular gastronomist.
The user has these available ingredients in their kitchen: ${ingredientListStr}.
Additional User Dietary & Cooking Preferences:
- Quick (<30 min): ${preferences.under30Mins ? "Yes" : "No preference"}
- High Protein: ${preferences.highProtein ? "Yes" : "No preference"}
- Vegetarian: ${preferences.vegetarian ? "Yes" : "No preference"}
- Low Carb: ${preferences.lowCarb ? "Yes" : "No preference"}
- Desi/Spicy: ${preferences.desiSpicy ? "Yes" : "No preference"}
- Satvik: ${preferences.satvik ? "Yes" : "No preference"}
- Cuisine Style: ${cuisineMood}

Craft an original, unique, mouth-watering gourmet recipe featuring these ingredients.
You may assume common pantry staples (olive oil, butter/ghee, salt, pepper, garlic, basic spices).

You must respond with ONLY a valid JSON object adhering strictly to this schema:
{
  "title": "Creative Gourmet Recipe Title",
  "description": "Sensory, appetizing 2-sentence description of flavors and mouthfeel",
  "category": "DINNER",
  "cookingTime": "20 mins",
  "prepTime": "10 mins",
  "servings": "2-4 servings",
  "calories": "380 kcal",
  "difficulty": "Easy",
  "flavorProfile": "e.g. Savory, Herbaceous & Golden Fond",
  "synergyScore": "99% AI Harmony",
  "chefSecret": "A professional culinary technique that elevates this specific dish",
  "beveragePairing": "Crisp mineral wine or craft botanical pairing",
  "textureElement": "e.g. Blistered Garlic Crisps & Toasted Herb Pangrattato",
  "ingredients": [
    { "name": "Ingredient item", "amount": "Precise quantity (e.g. 250g, thinly sliced / 2 tbsp)" }
  ],
  "instructions": [
    { "step": 1, "title": "Prep & Sear", "text": "Step-by-step detailed professional culinary instruction." },
    { "step": 2, "title": "Deglaze & Simmer", "text": "Step-by-step detailed professional culinary instruction." },
    { "step": 3, "title": "Emulsify Sauce", "text": "Step-by-step detailed professional culinary instruction." },
    { "step": 4, "title": "Plate & Garnish", "text": "Step-by-step detailed professional culinary instruction." }
  ]
}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;
    const payload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7,
        maxOutputTokens: 2048
      }
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 18000);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`Gemini API error ${res.status}: ${errBody}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    let parsed;
    try {
      parsed = JSON.parse(text.trim());
    } catch (e) {
      const cleaned = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      parsed = JSON.parse(cleaned);
    }

    const recipeId = `gemini-${Date.now()}`;
    const image = ChefEngine.pickImageForIngredients(ingredients, parsed.title || "");

    const formattedRecipe = {
      id: recipeId,
      isGemini: true,
      conceptType: "Chief's Signature",
      conceptBadge: "Chief's Special",
      title: parsed.title || "Chief's Artisanal Creation",
      description: parsed.description || "A custom culinary dish crafted for your kitchen.",
      category: parsed.category || "DINNER",
      cookingTime: parsed.cookingTime || "25 mins",
      cookTime: parsed.cookingTime || "25 mins",
      prepTime: parsed.prepTime || "15 mins",
      servings: parsed.servings || "2-4 servings",
      calories: parsed.calories || "420 kcal",
      difficulty: parsed.difficulty || "Medium",
      rating: "5.0",
      reviewsCount: 1,
      flavorProfile: parsed.flavorProfile || "Artisanal & Balanced",
      synergyScore: parsed.synergyScore || "99% AI Harmony",
      chefSecret: parsed.chefSecret || "Season in layers and taste at every stage of cooking.",
      beveragePairing: parsed.beveragePairing || "Sparkling citrus water or chilled crisp wine",
      textureElement: parsed.textureElement || "Golden crust and fresh herbal crunch",
      image: image,
      ingredients: Array.isArray(parsed.ingredients) && parsed.ingredients.length > 0
        ? parsed.ingredients
        : ingredients.map(i => ({ name: i, amount: "As desired" })),
      instructions: Array.isArray(parsed.instructions) && parsed.instructions.length > 0
        ? parsed.instructions.map((inst, idx) => ({
            step: inst.step || idx + 1,
            title: inst.title || `Step ${idx + 1}`,
            text: inst.text || String(inst)
          }))
        : [
            { step: 1, title: "Mise en Place", text: `Gather and prep ${ingredients.join(", ")}.` },
            { step: 2, title: "Sauté & Simmer", text: "Cook over gentle medium heat until tender and aromatic." },
            { step: 3, title: "Finish & Serve", text: "Garnish, season to perfection, and serve hot." }
          ]
    };

    return formattedRecipe;
  }
};



// ==========================================
// 3. PERSISTENT STORAGE
// ==========================================
const SmartChiefStore = {
  getSavedRecipes() {
    try {
      const raw = localStorage.getItem("smartchief_saved_recipes") || localStorage.getItem("cooksmart_saved_recipes");
      if (!raw) {
        localStorage.setItem("smartchief_saved_recipes", JSON.stringify(DEFAULT_SAVED_IDS));
        return DEFAULT_SAVED_IDS;
      }
      return JSON.parse(raw);
    } catch (e) {
      return DEFAULT_SAVED_IDS;
    }
  },

  isSaved(id) {
    return this.getSavedRecipes().includes(id);
  },

  toggleSave(id) {
    let saved = this.getSavedRecipes();
    let isNowSaved = false;
    if (saved.includes(id)) {
      saved = saved.filter(x => x !== id);
      isNowSaved = false;
    } else {
      saved.push(id);
      isNowSaved = true;
    }
    localStorage.setItem("smartchief_saved_recipes", JSON.stringify(saved));
    localStorage.setItem("cooksmart_saved_recipes", JSON.stringify(saved));
    return isNowSaved;
  },

  getAllRecipes() {
    try {
      const customRaw = localStorage.getItem("smartchief_custom_recipes") || localStorage.getItem("cooksmart_custom_recipes");
      const custom = customRaw ? JSON.parse(customRaw) : [];
      return [...RECIPE_DATABASE, ...custom];
    } catch (e) {
      return RECIPE_DATABASE;
    }
  },

  getRecipeById(id) {
    const all = this.getAllRecipes();
    return all.find(r => r.id === id) || RECIPE_DATABASE[0];
  },

  storeGeneratedRecipe(recipe) {
    try {
      localStorage.setItem("smartchief_active_recipe", JSON.stringify(recipe));
      localStorage.setItem("cooksmart_active_recipe", JSON.stringify(recipe));
      const customRaw = localStorage.getItem("smartchief_custom_recipes") || localStorage.getItem("cooksmart_custom_recipes");
      const custom = customRaw ? JSON.parse(customRaw) : [];
      if (!custom.some(r => r.id === recipe.id)) {
        custom.unshift(recipe);
        localStorage.setItem("smartchief_custom_recipes", JSON.stringify(custom));
        localStorage.setItem("cooksmart_custom_recipes", JSON.stringify(custom));
      }
    } catch (e) { }
  },

  storeActiveConcepts(concepts) {
    try {
      localStorage.setItem("smartchief_active_concepts", JSON.stringify(concepts));
      localStorage.setItem("smartchief_active_concept_idx", "0");
      localStorage.setItem("cooksmart_active_concepts", JSON.stringify(concepts));
      localStorage.setItem("cooksmart_active_concept_idx", "0");
      if (concepts && concepts[0]) {
        this.storeGeneratedRecipe(concepts[0]);
      }
    } catch (e) { }
  },

  getActiveConcepts() {
    try {
      const raw = localStorage.getItem("smartchief_active_concepts") || localStorage.getItem("cooksmart_active_concepts");
      if (raw) return JSON.parse(raw);
    } catch (e) { }
    return null;
  },

  setActiveConceptIndex(idx) {
    try {
      localStorage.setItem("smartchief_active_concept_idx", String(idx));
      localStorage.setItem("cooksmart_active_concept_idx", String(idx));
      const concepts = this.getActiveConcepts();
      if (concepts && concepts[idx]) {
        this.storeGeneratedRecipe(concepts[idx]);
      }
    } catch (e) { }
  },

  getActiveConceptIndex() {
    try {
      const idx = localStorage.getItem("smartchief_active_concept_idx") || localStorage.getItem("cooksmart_active_concept_idx");
      return idx !== null ? parseInt(idx, 10) : 0;
    } catch (e) {
      return 0;
    }
  },

  getActiveRecipe() {
    try {
      const raw = localStorage.getItem("smartchief_active_recipe") || localStorage.getItem("cooksmart_active_recipe");
      if (raw) return JSON.parse(raw);
    } catch (e) { }
    return RECIPE_DATABASE[0];
  },

  showToast(message, icon = "check_circle") {
    // Pop-up messages disabled per user request
    const toast = document.getElementById("smartchief-toast") || document.getElementById("cooksmart-toast");
    if (toast) toast.remove();
  }
};

const CookSmartStore = SmartChiefStore;
window.SmartChiefStore = SmartChiefStore;
window.CookSmartStore = SmartChiefStore;


// ==========================================
// 4. SMOOTH SPA TRANSITION ROUTER
// ==========================================
const PAGE_ORDER = {
  "index.html": 0,
  "ingredient-input.html": 1,
  "loading.html": 2,
  "recipe-result.html": 3,
  "saved-recipes.html": 4
};

const PAGE_CACHE = new Map();
let isTransitioning = false;

const SmartChiefRouter = {
  init() {
    this.preloadPages();

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("http") && !href.includes(window.location.host)) {
        return;
      }

      e.preventDefault();
      this.navigate(href);
    });

    window.addEventListener("popstate", () => {
      this.navigate(window.location.pathname + window.location.search, false, true);
    });

    this.initCurrentPage();
  },

  preloadPages() {
    const pages = ["index.html", "ingredient-input.html", "loading.html", "recipe-result.html", "saved-recipes.html"];
    pages.forEach(p => {
      fetch(p)
        .then(res => res.text())
        .then(html => PAGE_CACHE.set(p, html))
        .catch(() => { });
    });
  },

  getCurrentPageName() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path.endsWith(".html") ? path : (path + ".html");
  },

  async navigate(targetUrl, push = true, isPopState = false) {
    if (isTransitioning) return;
    isTransitioning = true;

    const currentPath = this.getCurrentPageName();
    const urlObj = new URL(targetUrl, window.location.href);
    const targetPath = urlObj.pathname.split("/").pop() || "index.html";

    const currentOrder = PAGE_ORDER[currentPath] ?? 0;
    const targetOrder = PAGE_ORDER[targetPath] ?? 0;
    const isForward = isPopState ? (targetOrder > currentOrder) : (targetOrder >= currentOrder);

    if (currentPath === targetPath && urlObj.search === window.location.search && !isPopState) {
      isTransitioning = false;
      return;
    }

    const viewport = document.getElementById("page-viewport");
    if (viewport) {
      viewport.classList.remove("page-enter");
      viewport.classList.add("page-exit");
    }

    await new Promise(r => setTimeout(r, 130));

    try {
      let html = PAGE_CACHE.get(targetPath);
      if (!html) {
        const res = await fetch(targetUrl);
        html = await res.text();
        PAGE_CACHE.set(targetPath, html);
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const newViewport = doc.getElementById("page-viewport");

      if (newViewport && viewport) {
        viewport.innerHTML = newViewport.innerHTML;
        document.title = doc.title;

        if (push) {
          window.history.pushState({}, doc.title, targetUrl);
        }

        window.scrollTo({ top: 0, behavior: 'instant' });
        this.updateNavActiveTab(targetPath);

        viewport.classList.remove("page-exit");
        viewport.classList.add("page-enter");

        setTimeout(() => {
          viewport.classList.remove("page-enter");
        }, 300);

        ThemeEngine.updateToggleUI();
        this.initCurrentPage();
      } else {
        window.location.href = targetUrl;
      }
    } catch (err) {
      window.location.href = targetUrl;
    } finally {
      isTransitioning = false;
    }
  },

  updateNavActiveTab(pageName) {
    const nav = document.querySelector(".glass-nav");
    if (!nav) return;

    const tabMap = {
      "index.html": 0,
      "ingredient-input.html": 1,
      "saved-recipes.html": 2
    };

    const targetIndex = tabMap[pageName] ?? -1;
    const tabs = nav.querySelectorAll(".nav-tab-item");

    tabs.forEach((tab, idx) => {
      const icon = tab.querySelector(".material-symbols-outlined");
      const pill = tab.querySelector(".nav-tab-pill");

      if (idx === targetIndex) {
        tab.classList.add("text-primary-orange", "font-bold");
        tab.classList.remove("text-text-muted");
        if (pill) pill.classList.add("bg-primary-orange/15");
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
      } else {
        tab.classList.remove("text-primary-orange", "font-bold");
        tab.classList.add("text-text-muted");
        if (pill) pill.classList.remove("bg-primary-orange/15");
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      }
    });
  },

  initCurrentPage() {
    if (window.ThemeEngine) {
      ThemeEngine.updateToggleUI();
    }
    const page = this.getCurrentPageName();
    if (page === "index.html") initHomePage();
    else if (page === "ingredient-input.html") initPantryPage();
    else if (page === "recipe-result.html") initRecipeResultPage();
    else if (page === "saved-recipes.html") initSavedRecipesPage();
  }
};

const CookSmartRouter = SmartChiefRouter;
window.SmartChiefRouter = SmartChiefRouter;
window.CookSmartRouter = SmartChiefRouter;


// ==========================================
// 5. PAGE LOGIC & HANDLERS
// ==========================================

// --- Screen 1: Home Page ---
function initHomePage() {
  refreshBookmarkIcons();
}

function refreshBookmarkIcons() {
  const isLight = document.documentElement.classList.contains("light") || document.documentElement.getAttribute("data-theme") === "light";
  document.querySelectorAll(".fav-btn").forEach(btn => {
    const id = btn.getAttribute("data-recipe-id");
    const icon = btn.querySelector(".material-symbols-outlined");
    if (CookSmartStore.isSaved(id)) {
      btn.classList.add("text-primary-orange");
      btn.classList.remove("text-white", "text-slate-800");
      if (icon) {
        icon.style.fontVariationSettings = "'FILL' 1";
        icon.style.color = "#FF6B35";
      }
    } else {
      btn.classList.remove("text-primary-orange");
      if (icon) icon.style.fontVariationSettings = "'FILL' 0";
      if (isLight) {
        btn.classList.remove("text-white");
        btn.classList.add("text-slate-800");
        if (icon) icon.style.color = "#0F172A";
      } else {
        btn.classList.remove("text-slate-800");
        btn.classList.add("text-white");
        if (icon) icon.style.color = "#FFFFFF";
      }
    }
  });
}

function toggleFavorite(recipeId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const isNowSaved = CookSmartStore.toggleSave(recipeId);
  refreshBookmarkIcons();
  CookSmartStore.showToast(isNowSaved ? "Recipe saved to your collection!" : "Recipe removed from saved list", isNowSaved ? "bookmark_added" : "bookmark_remove");
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".category-btn").forEach(b => {
    b.classList.remove("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    b.classList.add("surface-card", "text-text-muted");
  });
  if (btn) {
    btn.classList.add("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    btn.classList.remove("surface-card", "text-text-muted");
  }

  const cards = document.querySelectorAll(".recipe-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (cat === "ALL" || cardCat === cat) {
      card.style.display = "";
      card.classList.add("page-fade-in");
    } else {
      card.style.display = "none";
    }
  });
}

function handleSearch(query) {
  const q = (query || "").trim().toLowerCase();
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) {
    if (q.length > 0) clearBtn.classList.remove("hidden");
    else clearBtn.classList.add("hidden");
  }

  const cards = document.querySelectorAll(".recipe-card");
  let visible = 0;
  cards.forEach(card => {
    const title = (card.getAttribute("data-title") || "").toLowerCase();
    if (title.includes(q)) {
      card.style.display = "";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  const noMsg = document.getElementById("no-recipes-msg");
  const aiSearchBtnText = document.getElementById("ai-generate-search-btn-text");
  if (noMsg) {
    if (visible === 0 && q.length > 0) {
      noMsg.classList.remove("hidden");
      if (aiSearchBtnText) {
        aiSearchBtnText.textContent = `Synthesize "${query.trim()}" with SmartChief AI`;
      }
    } else {
      noMsg.classList.add("hidden");
    }
  }
}

function searchAndGenerateRecipe(explicitQuery) {
  const input = document.getElementById("search-input");
  const q = (explicitQuery || (input ? input.value : "") || "").trim();

  let ingredients = [];
  if (q.length > 0) {
    if (q.includes(",")) {
      ingredients = q.split(",").map(s => s.trim()).filter(Boolean);
    } else {
      ingredients = [q];
    }
  } else {
    ingredients = ["Garlic", "Heirloom Tomato", "Fresh Basil", "Parmesan"];
  }

  try {
    localStorage.setItem("smartchief_pending_generation", JSON.stringify({
      ingredients: ingredients,
      preferences: {},
      cuisine: "ALL"
    }));
  } catch (e) {}

  window.location.href = "loading.html";
}
window.searchAndGenerateRecipe = searchAndGenerateRecipe;

function clearSearch() {
  const input = document.getElementById("search-input");
  if (input) {
    input.value = "";
    handleSearch("");
  }
}


// --- Screen 2: Pantry / Ingredient Input Page ---
let currentIngredients = [];

function initPantryPage() {
  updateTagsUI();
}

function updateTagsUI() {
  const container = document.getElementById("ingredient-tags");
  if (!container) return;

  const emptyHint = document.getElementById("empty-ingredients-hint");
  const badge = document.getElementById("items-badge");
  const genBtnText = document.getElementById("generate-btn-text");
  const genBtn = document.getElementById("generate-btn");
  const synergyBadge = document.getElementById("synergy-score-badge");

  const synergy = ChefEngine.calculateSynergy(currentIngredients);
  if (synergyBadge) {
    if (synergy > 0) {
      synergyBadge.textContent = `${synergy}% Synergy`;
      synergyBadge.classList.remove("hidden");
    } else {
      synergyBadge.classList.add("hidden");
    }
  }

  if (badge) badge.textContent = `${currentIngredients.length} item${currentIngredients.length === 1 ? '' : 's'}`;

  const btnLabels = document.querySelectorAll(".generate-btn-text, #generate-btn-text");
  const btnElements = document.querySelectorAll(".generate-btn, #generate-btn");
  const labelText = currentIngredients.length > 0
    ? `GENERATE RECIPES (${currentIngredients.length})`
    : `SELECT INGREDIENTS TO GENERATE`;

  btnLabels.forEach(lbl => { lbl.textContent = labelText; });

  if (currentIngredients.length === 0) {
    container.innerHTML = "";
    if (emptyHint) emptyHint.classList.remove("hidden");
    btnElements.forEach(btn => btn.classList.add("opacity-60"));
  } else {
    if (emptyHint) emptyHint.classList.add("hidden");
    btnElements.forEach(btn => btn.classList.remove("opacity-60"));
    container.innerHTML = currentIngredients.map(ing => `
      <div class="ing-tag flex items-center gap-1.5 bg-[#222731] border border-white/10 rounded-full pl-3.5 pr-1.5 py-1.5 text-xs text-text-light hover:border-primary-orange/50 transition-all">
        <span>${ing}</span>
        <button onclick="removeIngredientItem('${ing}')" class="w-5 h-5 rounded-full hover:bg-white/10 text-text-muted hover:text-red-400 flex items-center justify-center transition-colors">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    `).join("");
  }

  // Synchronize quick staples button states
  const stapleButtons = document.querySelectorAll("#staples-list .staple-btn");
  stapleButtons.forEach(btn => {
    const match = btn.getAttribute("onclick")?.match(/addStaple\(['"](.+?)['"]\)/);
    const stapleName = match ? match[1] : null;
    if (!stapleName) return;
    const isSelected = currentIngredients.some(i => i.toLowerCase() === stapleName.toLowerCase());
    const icon = btn.querySelector(".material-symbols-outlined");
    if (isSelected) {
      btn.classList.add("border-primary-orange/40", "bg-primary-orange/10", "text-text-light");
      btn.classList.remove("border-white/10", "bg-surface", "text-text-muted");
      if (icon) icon.textContent = "check";
    } else {
      btn.classList.remove("border-primary-orange/40", "bg-primary-orange/10", "text-text-light");
      btn.classList.add("border-white/10", "bg-surface", "text-text-muted");
      if (icon) icon.textContent = "add";
    }
  });
}

function addIngredientFromInput() {
  const input = document.getElementById("ingredient-input");
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  const formatted = val.charAt(0).toUpperCase() + val.slice(1);
  if (!currentIngredients.includes(formatted)) {
    currentIngredients.push(formatted);
    updateTagsUI();
    CookSmartStore.showToast(`Added ${formatted}`, 'check_circle');
  } else {
    CookSmartStore.showToast(`${formatted} is already in pantry`, 'info');
  }
  input.value = "";
}

function addStaple(name) {
  if (!currentIngredients.includes(name)) {
    currentIngredients.push(name);
    updateTagsUI();
    CookSmartStore.showToast(`Added ${name}`, 'add_circle');
  } else {
    currentIngredients = currentIngredients.filter(i => i !== name);
    updateTagsUI();
    CookSmartStore.showToast(`Removed ${name}`, 'delete');
  }
}

function removeIngredientItem(name) {
  currentIngredients = currentIngredients.filter(i => i !== name);
  updateTagsUI();
  CookSmartStore.showToast(`Removed ${name}`, 'delete');
}

function clearAllIngredients() {
  if (currentIngredients.length === 0) return;
  currentIngredients = [];
  updateTagsUI();
  CookSmartStore.showToast("All ingredients cleared", "refresh");
}

function loadChefInspiration() {
  const bundle = ChefEngine.getRandomInspiration();
  currentIngredients = [...bundle.items];
  if (bundle.mood) {
    selectCuisineMood(bundle.mood);
  }
  updateTagsUI();
  CookSmartStore.showToast(`Suggested: ${bundle.name}!`, "auto_awesome");
}

function launchSurpriseInnovation() {
  const bundle = ChefEngine.getRandomInspiration();
  CookSmartStore.showToast(`AI Chief synthesized ${bundle.name}!`, "casino");
  currentIngredients = [...bundle.items];
  const concepts = ChefEngine.synthesizeConcepts(bundle.items, {}, bundle.mood || "ALL", Date.now());
  CookSmartStore.storeActiveConcepts(concepts);
  CookSmartRouter.navigate(`recipe-result.html?recipe=${concepts[0].id}`);
}


let activeCuisineMood = "ALL";
window.activeCuisineMood = activeCuisineMood;

function selectCuisineMood(mood, btn) {
  activeCuisineMood = mood;
  window.activeCuisineMood = mood;

  document.querySelectorAll(".cuisine-pill").forEach(b => {
    b.classList.remove("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    b.classList.add("surface-card", "text-text-muted");
  });

  if (btn) {
    btn.classList.add("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    btn.classList.remove("surface-card", "text-text-muted");
  } else {
    // Find pill matching mood
    document.querySelectorAll(".cuisine-pill").forEach(b => {
      const onclickAttr = b.getAttribute("onclick") || "";
      if (onclickAttr.includes(`'${mood}'`)) {
        b.classList.add("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
        b.classList.remove("surface-card", "text-text-muted");
      }
    });
  }

  const moodNames = {
    "ALL": "Wild Fusion",
    "INDIAN": "Royal Indian Spice",
    "JAPANESE": "Tokyo Izakaya",
    "ITALIAN": "Tuscan Coast",
    "LATIN": "Smoky Latin Fire",
    "FRENCH": "Haute Bistro",
    "THAI": "Bangkok Street"
  };
  CookSmartStore.showToast(`Cuisine direction set to ${moodNames[mood] || mood}`, "tune");
}

function togglePref(btn) {
  if (!btn) return;
  const isActive = btn.classList.contains("active");
  if (isActive) {
    btn.classList.remove("active", "border-primary-orange/50", "bg-primary-orange/15", "text-primary-orange");
    btn.classList.add("border-white/10", "bg-surface", "text-text-muted");
  } else {
    btn.classList.add("active", "border-primary-orange/50", "bg-primary-orange/15", "text-primary-orange");
    btn.classList.remove("border-white/10", "bg-surface", "text-text-muted");
  }
}

let loadingTimer = null;

function cancelRecipeLoading() {
  if (loadingTimer) {
    clearInterval(loadingTimer);
    loadingTimer = null;
  }
  const overlay = document.getElementById("recipe-loading-overlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
  const btn = document.getElementById("generate-btn");
  const btnText = document.getElementById("generate-btn-text");
  if (btn) {
    btn.disabled = false;
    btn.classList.remove("opacity-80", "cursor-wait");
  }
  if (btnText && typeof currentIngredients !== "undefined") {
    btnText.textContent = currentIngredients.length > 0
      ? `GENERATE RECIPES (${currentIngredients.length})`
      : `SELECT INGREDIENTS TO GENERATE`;
  }
}
window.cancelRecipeLoading = cancelRecipeLoading;

async function triggerGenerateRecipe() {
  if (currentIngredients.length === 0) {
    CookSmartStore.showToast("Please add at least 1 ingredient!", "warning");
    return;
  }

  const btn = document.getElementById("generate-btn");
  const btnText = document.getElementById("generate-btn-text");
  const origContent = btnText ? btnText.innerHTML : `GENERATE RECIPES (${currentIngredients.length})`;

  // Read active preferences
  const activePrefs = {};
  document.querySelectorAll(".pref-btn.active").forEach(b => {
    const txt = b.textContent.toLowerCase();
    if (txt.includes("30 min")) activePrefs.under30Mins = true;
    if (txt.includes("protein")) activePrefs.highProtein = true;
    if (txt.includes("vegetarian")) activePrefs.vegetarian = true;
    if (txt.includes("carb")) activePrefs.lowCarb = true;
    if (txt.includes("satvik") || txt.includes("jain")) activePrefs.satvik = true;
    if (txt.includes("desi") || txt.includes("spicy masala")) activePrefs.desiSpicy = true;
  });

  // Store in pending generation for persistence
  try {
    localStorage.setItem("smartchief_pending_generation", JSON.stringify({
      ingredients: currentIngredients,
      preferences: activePrefs,
      cuisine: typeof activeCuisineMood !== "undefined" ? activeCuisineMood : "ALL"
    }));
  } catch (e) {}

  const overlay = document.getElementById("recipe-loading-overlay");
  if (!overlay) {
    window.location.href = "loading.html";
    return;
  }

  // Activate animated overlay
  overlay.classList.add("active");

  // Populate floating ingredient chips
  const chipsContainer = document.getElementById("overlay-loading-ingredients-chips");
  if (chipsContainer) {
    const icons = ["🧄", "🌿", "🍅", "🧀", "🧅", "🥑", "🍋", "🌶️", "🧈", "🥩", "🍗", "🥕"];
    chipsContainer.innerHTML = currentIngredients.map((ing, idx) => `
      <div class="floating-ingredient-chip" style="animation-delay: ${idx * 0.15}s;">
        <span>${icons[idx % icons.length]}</span>
        <span>${ing}</span>
      </div>
    `).join("");
  }

  const phases = [
    {
      pct: 22,
      text: "🔍 Analyzing ingredient synergy & flavor affinity...",
      thought: "Mapping volatile aromatic compounds and pantry compatibility index...",
      icon: "science"
    },
    {
      pct: 48,
      text: "🌿 Calibrating heat dynamics, herbs & global aromatics...",
      thought: "Simulating fat emulsification and aromatic blooming for maximum savoriness...",
      icon: "skillet"
    },
    {
      pct: 78,
      text: "🔥 Perfecting chief technique, texture & seasoning...",
      thought: "Balancing savory umami fond with crispy textural contrasts...",
      icon: "restaurant"
    },
    {
      pct: 95,
      text: "✨ Synthesizing master plating guide & pairing...",
      thought: "Pairing crisp acid notes and formulating final finishing touch...",
      icon: "auto_awesome"
    },
    {
      pct: 100,
      text: "🎉 Recipe Perfected! Revealing Master Guide...",
      thought: "Dish complete. Formatting ingredients, timing and step-by-step instructions...",
      icon: "check_circle"
    }
  ];

  const pctEl = document.getElementById("overlay-loading-percentage");
  const barEl = document.getElementById("overlay-loading-progress-bar");
  const statusEl = document.getElementById("overlay-loading-status-text");
  const thoughtEl = document.getElementById("overlay-chef-thought-text");
  const iconEl = document.getElementById("overlay-core-icon");

  let currentPct = 0;
  const targetDuration = 3000;
  const intervalMs = 30;
  const stepIncrement = 100 / (targetDuration / intervalMs);

  let finalRecipeId = null;

  // Background recipe preparation in parallel
  (async function() {
    try {
      const aiRecipe = await GeminiChefService.generateRecipe(currentIngredients, activePrefs, activeCuisineMood);
      const otherConcepts = ChefEngine.synthesizeConcepts(currentIngredients, activePrefs, activeCuisineMood);
      const concepts = [aiRecipe, otherConcepts[1], otherConcepts[2]];
      CookSmartStore.storeActiveConcepts(concepts);
      CookSmartStore.storeGeneratedRecipe(aiRecipe);
      finalRecipeId = aiRecipe.id;
    } catch (err) {
      console.warn("Chef AI generation fallback:", err);
      const concepts = ChefEngine.synthesizeConcepts(currentIngredients, activePrefs, activeCuisineMood);
      CookSmartStore.storeActiveConcepts(concepts);
      CookSmartStore.storeGeneratedRecipe(concepts[0]);
      finalRecipeId = concepts[0].id;
    }
  })();

  if (loadingTimer) clearInterval(loadingTimer);
  loadingTimer = setInterval(() => {
    currentPct += stepIncrement;
    if (currentPct >= 100) {
      currentPct = 100;
      clearInterval(loadingTimer);
      loadingTimer = null;
    }

    const rounded = Math.floor(currentPct);
    if (pctEl) pctEl.textContent = `${rounded}%`;
    if (barEl) barEl.style.width = `${rounded}%`;

    const currentPhase = phases.find(p => rounded <= p.pct) || phases[phases.length - 1];
    if (statusEl && statusEl.textContent !== currentPhase.text) {
      statusEl.style.opacity = "0";
      setTimeout(() => {
        statusEl.textContent = currentPhase.text;
        statusEl.style.opacity = "1";
      }, 150);
    }
    if (thoughtEl && thoughtEl.textContent !== currentPhase.thought) {
      thoughtEl.style.opacity = "0";
      setTimeout(() => {
        thoughtEl.textContent = currentPhase.thought;
        thoughtEl.style.opacity = "1";
      }, 150);
    }
    if (iconEl && currentPhase.icon) {
      iconEl.textContent = currentPhase.icon;
    }

    if (rounded === 100) {
      if (iconEl) {
        iconEl.classList.add("scale-125");
        iconEl.style.color = "#10B981";
      }
      setTimeout(() => {
        const recipeId = finalRecipeId || "tuscan-chicken";
        window.location.href = `recipe-result.html?recipe=${encodeURIComponent(recipeId)}`;
      }, 450);
    }
  }, intervalMs);
}


// --- Screen 3: Recipe Result Page ---
let currentActiveRecipe = null;
let activeStepIndex = 0;

function initRecipeResultPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipe");
  const activeConcepts = CookSmartStore.getActiveConcepts();
  const conceptIdx = CookSmartStore.getActiveConceptIndex();

  if (recipeId) {
    currentActiveRecipe = CookSmartStore.getRecipeById(recipeId);
    // If recipe is in active concepts, sync concept index
    if (activeConcepts) {
      const foundIdx = activeConcepts.findIndex(c => c.id === recipeId);
      if (foundIdx !== -1) {
        CookSmartStore.setActiveConceptIndex(foundIdx);
      }
    }
  } else if (activeConcepts && activeConcepts[conceptIdx]) {
    currentActiveRecipe = activeConcepts[conceptIdx];
  } else {
    currentActiveRecipe = CookSmartStore.getActiveRecipe();
  }

  if (!currentActiveRecipe) {
    currentActiveRecipe = RECIPE_DATABASE[0];
  }

  // Render Concept Switcher Tabs if active concepts are available
  renderConceptSwitcherTabs();

  const heroImg = document.getElementById("recipe-hero-img");
  const title = document.getElementById("recipe-title");
  const desc = document.getElementById("recipe-desc");
  const rating = document.getElementById("recipe-rating");
  const catBadge = document.getElementById("recipe-category-badge");
  const prep = document.getElementById("meta-prep");
  const cals = document.getElementById("meta-cals");
  const diff = document.getElementById("meta-diff");
  const serv = document.getElementById("meta-serv");
  const flavorPill = document.getElementById("flavor-profile-badge");
  const synergyPill = document.getElementById("synergy-score-pill");
  const secretText = document.getElementById("chef-secret-text");
  const textureBadge = document.getElementById("texture-element-badge");
  const beverageText = document.getElementById("beverage-pairing-text");
  const conceptBadge = document.getElementById("recipe-concept-badge");
  const geminiTag = document.getElementById("gemini-ai-tag");

  if (heroImg) heroImg.src = currentActiveRecipe.image || RECIPE_DATABASE[0].image;
  if (title) title.textContent = currentActiveRecipe.title;
  if (desc) desc.textContent = currentActiveRecipe.description || "A chief-crafted dish prepared with fresh ingredients and vibrant seasonings.";
  if (rating) rating.textContent = currentActiveRecipe.rating || "5.0";
  if (catBadge) catBadge.textContent = currentActiveRecipe.category || "DINNER";
  
  // Cooking time and Servings
  if (prep) prep.textContent = currentActiveRecipe.cookingTime || currentActiveRecipe.cookTime || currentActiveRecipe.prepTime || "25 min";
  if (cals) cals.textContent = currentActiveRecipe.calories || "420 kcal";
  if (diff) diff.textContent = currentActiveRecipe.difficulty || "Medium";
  if (serv) serv.textContent = currentActiveRecipe.servings || "2-4 serv";

  if (flavorPill) flavorPill.textContent = currentActiveRecipe.flavorProfile || "Artisanal & Balanced";
  if (synergyPill) synergyPill.textContent = currentActiveRecipe.synergyScore || "99% AI Harmony";
  if (secretText) secretText.textContent = currentActiveRecipe.chefSecret || "Finish with a splash of fresh citrus or herb oil to lift all savory aromas.";
  if (textureBadge) textureBadge.textContent = currentActiveRecipe.textureElement || "Crispy Pangrattato & Charred Fond";
  if (beverageText) beverageText.textContent = currentActiveRecipe.beveragePairing || "Crisp Mineral Sancerre or Sparkling Blood Orange Soda";
  if (conceptBadge && currentActiveRecipe.conceptType) conceptBadge.textContent = currentActiveRecipe.conceptType;

  // Badge toggle
  if (geminiTag) {
    geminiTag.classList.add("hidden");
    geminiTag.classList.remove("inline-flex");
  }

  // Ingredients Checklist with Quantities
  const ingList = document.getElementById("ingredients-list");
  const ingCount = document.getElementById("ingredients-count");
  if (ingCount && currentActiveRecipe.ingredients) {
    ingCount.textContent = `${currentActiveRecipe.ingredients.length} items`;
  }
  if (ingList && currentActiveRecipe.ingredients) {
    ingList.innerHTML = currentActiveRecipe.ingredients.map(ing => `
      <label class="flex items-center gap-3 p-3 surface-card rounded-xl cursor-pointer hover:border-primary-orange/40 transition-colors group">
        <input type="checkbox" onchange="toggleIngredientCheck(this)" class="ingredient-checkbox w-5 h-5 rounded border-white/20 bg-[#222731] text-primary-orange focus:ring-primary-orange focus:ring-offset-canvas"/>
        <div class="flex-1 flex justify-between items-center text-xs">
          <span class="font-medium text-text-light group-has-[:checked]:line-through group-has-[:checked]:text-text-muted transition-all">${ing.name}</span>
          <span class="text-text-muted px-2 py-0.5 rounded bg-white/5 text-[11px]">${ing.amount || 'to taste'}</span>
        </div>
      </label>
    `).join("");
  }

  // Instructions Cards (Numbered step-by-step instructions)
  const instList = document.getElementById("instructions-list");
  const stepsCount = document.getElementById("steps-count");
  if (stepsCount && currentActiveRecipe.instructions) {
    stepsCount.textContent = `${currentActiveRecipe.instructions.length} steps`;
  }
  if (instList && currentActiveRecipe.instructions) {
    instList.innerHTML = currentActiveRecipe.instructions.map((inst, idx) => `
      <div class="surface-card p-4 rounded-xl flex gap-3.5 items-start">
        <div class="w-7 h-7 rounded-full bg-primary-orange/20 text-primary-orange flex items-center justify-center font-outfit text-xs font-bold shrink-0">
          ${inst.step || idx + 1}
        </div>
        <div class="flex-1">
          <h4 class="font-outfit text-sm font-bold text-text-light leading-tight">${inst.title || `Step ${inst.step || idx + 1}`}</h4>
          <p class="text-xs text-text-muted mt-1 leading-relaxed">${inst.text}</p>
        </div>
      </div>
    `).join("");
  }

  updateSaveUI();
}

function renderConceptSwitcherTabs() {
  const container = document.getElementById("concepts-switcher-container");
  if (!container) return;

  const concepts = CookSmartStore.getActiveConcepts();
  if (!concepts || concepts.length < 2) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  const activeIdx = CookSmartStore.getActiveConceptIndex();

  const isGeminiFirst = concepts[0] && (concepts[0].isGemini || String(concepts[0].id).startsWith("gemini-"));

  const labels = [
    isGeminiFirst ? { icon: "auto_awesome", label: "1. Chief's Special" } : { icon: "bolt", label: "1. Sizzle Skillet" },
    { icon: "auto_awesome", label: "2. Gastronomy" },
    { icon: "local_fire_department", label: "3. Street Fusion" }
  ];

  container.innerHTML = concepts.map((c, i) => {
    const isActive = i === activeIdx;
    const tabMeta = labels[i] || { icon: "restaurant", label: `Concept ${i + 1}` };
    return `
      <button onclick="switchConcept(${i})" class="concept-tab flex-1 py-2 px-1.5 rounded-xl text-[11px] font-bold text-center transition-all flex items-center justify-center gap-1 ${isActive
        ? 'bg-primary-orange text-white shadow-md shadow-primary-orange/30'
        : 'text-text-muted hover:text-primary-orange hover:bg-primary-orange/10'
      }">
        <span class="material-symbols-outlined text-xs">${tabMeta.icon}</span>
        <span>${tabMeta.label}</span>
      </button>
    `;
  }).join("");
}

function switchConcept(index) {
  CookSmartStore.setActiveConceptIndex(index);
  const concepts = CookSmartStore.getActiveConcepts();
  if (concepts && concepts[index]) {
    currentActiveRecipe = concepts[index];
    initRecipeResultPage();
    CookSmartStore.showToast(`Switched to ${concepts[index].conceptType || 'Concept ' + (index + 1)}`, "auto_awesome");
  }
}

function spinNewTwist() {
  const spinBtn = document.getElementById("spin-twist-btn");
  if (spinBtn) {
    spinBtn.classList.add("animate-spin");
    setTimeout(() => spinBtn.classList.remove("animate-spin"), 600);
  }

  CookSmartStore.showToast("Synthesizing fresh innovative culinary twist...", "casino");
  const activePrefs = {};
  const concepts = ChefEngine.synthesizeConcepts(currentIngredients, activePrefs, activeCuisineMood, Date.now());
  CookSmartStore.storeActiveConcepts(concepts);
  currentActiveRecipe = concepts[0];
  initRecipeResultPage();
}

function toggleIngredientCheck(cb) {
  const label = cb.closest("label");
  if (label) {
    if (cb.checked) {
      label.classList.add("item-checked");
    } else {
      label.classList.remove("item-checked");
    }
  }
}

function updateSaveUI() {
  if (!currentActiveRecipe) return;
  const isSaved = CookSmartStore.isSaved(currentActiveRecipe.id);
  const isLight = document.documentElement.classList.contains("light") || document.documentElement.getAttribute("data-theme") === "light";

  const headerIcon = document.getElementById("header-save-icon");
  const headerBtn = document.getElementById("header-save-btn");
  const mainLabel = document.getElementById("main-save-label");
  const mainIcon = document.getElementById("main-save-icon");
  const mainBtn = document.getElementById("main-save-btn");

  if (isSaved) {
    if (headerIcon) {
      headerIcon.style.fontVariationSettings = "'FILL' 1";
      headerIcon.style.color = "#FF6B35";
    }
    if (headerBtn) {
      headerBtn.classList.add("text-primary-orange");
      headerBtn.classList.remove("text-text-light", "text-white", "text-slate-900");
    }
    if (mainIcon) {
      mainIcon.style.fontVariationSettings = "'FILL' 1";
      mainIcon.style.color = "#FFFFFF";
    }
    if (mainLabel) mainLabel.textContent = "SAVED TO YOUR RECIPES ✓";
    if (mainBtn) {
      mainBtn.classList.remove("shadow-primary-orange/30");
      mainBtn.classList.add("bg-emerald-600");
    }
  } else {
    if (headerIcon) {
      headerIcon.style.fontVariationSettings = "'FILL' 0";
      headerIcon.style.color = isLight ? "#0F172A" : "#FFFFFF";
    }
    if (headerBtn) {
      headerBtn.classList.remove("text-primary-orange");
      headerBtn.classList.add(isLight ? "text-slate-900" : "text-white");
      headerBtn.classList.remove("text-text-light");
    }
    if (mainIcon) {
      mainIcon.style.fontVariationSettings = "'FILL' 0";
      mainIcon.style.color = "#FFFFFF";
    }
    if (mainLabel) mainLabel.textContent = "SAVE RECIPE TO MY COLLECTION";
    if (mainBtn) {
      mainBtn.classList.remove("bg-emerald-600");
      mainBtn.classList.add("shadow-primary-orange/30");
    }
  }
}

function toggleSaveCurrentRecipe() {
  if (!currentActiveRecipe) return;
  const isNowSaved = CookSmartStore.toggleSave(currentActiveRecipe.id);
  updateSaveUI();
  CookSmartStore.showToast(isNowSaved ? "Recipe added to saved collection!" : "Recipe removed from saved collection", isNowSaved ? "bookmark_added" : "bookmark_remove");
}

function shareRecipe() {
  openShareModal();
}

function openShareModal() {
  if (!currentActiveRecipe) {
    if (typeof CookSmartStore !== "undefined" && CookSmartStore.getActiveRecipe) {
      currentActiveRecipe = CookSmartStore.getActiveRecipe();
    }
    if (!currentActiveRecipe && typeof RECIPE_DATABASE !== "undefined" && RECIPE_DATABASE.length > 0) {
      currentActiveRecipe = RECIPE_DATABASE[0];
    }
  }

  const modal = document.getElementById("share-modal");
  if (!modal) return;

  const titleEl = document.getElementById("share-preview-title");
  const metaEl = document.getElementById("share-preview-meta");
  const imgEl = document.getElementById("share-preview-img");
  const linkInput = document.getElementById("share-link-input");
  const nativeBtn = document.getElementById("native-share-container");

  if (titleEl) titleEl.textContent = currentActiveRecipe.title || "Gourmet Dish";
  if (metaEl) {
    const time = currentActiveRecipe.cookingTime || currentActiveRecipe.cookTime || "25 min";
    const cat = currentActiveRecipe.category || "RECIPE";
    metaEl.textContent = `${cat} • ${time}`;
  }
  if (imgEl) imgEl.src = currentActiveRecipe.image || RECIPE_DATABASE[0].image;
  if (linkInput) linkInput.value = window.location.href;

  if (nativeBtn) {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      nativeBtn.classList.remove("hidden");
    } else {
      nativeBtn.classList.add("hidden");
    }
  }

  resetCopyShareUI();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  const modal = document.getElementById("share-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

async function triggerNativeShare() {
  if (!currentActiveRecipe) return;
  const shareData = {
    title: `${currentActiveRecipe.title} | SmartChief`,
    text: `Check out this innovative recipe for ${currentActiveRecipe.title} synthesized on SmartChief!`,
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    }
  } catch (err) {
    if (err && err.name !== "AbortError") {
      console.warn("Native share error:", err);
    }
  }
}

function copyShareLink() {
  const url = window.location.href;
  const copyBtn = document.getElementById("copy-share-btn");
  const copyIcon = document.getElementById("copy-share-icon");
  const copyText = document.getElementById("copy-share-text");

  const performFeedback = () => {
    if (copyBtn) {
      copyBtn.classList.add("!bg-emerald-600", "!text-white");
    }
    if (copyIcon) copyIcon.textContent = "check";
    if (copyText) copyText.textContent = "Copied!";

    setTimeout(() => {
      resetCopyShareUI();
    }, 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(performFeedback).catch(() => {
      fallbackCopyText(url);
      performFeedback();
    });
  } else {
    fallbackCopyText(url);
    performFeedback();
  }
}

function fallbackCopyText(text) {
  const input = document.getElementById("share-link-input") || document.createElement("textarea");
  input.value = text;
  if (!input.parentNode) document.body.appendChild(input);
  input.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  if (input !== document.getElementById("share-link-input") && input.parentNode) {
    input.remove();
  }
}

function resetCopyShareUI() {
  const copyBtn = document.getElementById("copy-share-btn");
  const copyIcon = document.getElementById("copy-share-icon");
  const copyText = document.getElementById("copy-share-text");
  const copyRecipeLabel = document.getElementById("copy-recipe-text-label");

  if (copyBtn) {
    copyBtn.classList.remove("!bg-emerald-600", "!text-white");
  }
  if (copyIcon) copyIcon.textContent = "content_copy";
  if (copyText) copyText.textContent = "Copy";
  if (copyRecipeLabel) copyRecipeLabel.textContent = "Copy Ingredients & Steps as Text";
}

function copyFullRecipeText() {
  if (!currentActiveRecipe) return;
  const r = currentActiveRecipe;
  const time = r.cookingTime || r.cookTime || "25 min";
  const cals = r.calories || "420 kcal";

  let lines = [
    `🍳 ${r.title} — SmartChief Master Recipe`,
    `⏱️ Cook Time: ${time} | 🔥 Calories: ${cals}`,
    `📝 ${r.description || ""}`,
    "",
    "🛒 INGREDIENTS CHECKLIST:"
  ];

  if (r.ingredients && r.ingredients.length) {
    r.ingredients.forEach(ing => {
      lines.push(`• ${ing.name} (${ing.amount || 'to taste'})`);
    });
  }

  lines.push("");
  lines.push("👨‍🍳 STEP-BY-STEP INSTRUCTIONS:");
  if (r.instructions && r.instructions.length) {
    r.instructions.forEach((inst, idx) => {
      lines.push(`${idx + 1}. ${inst.title ? inst.title + ': ' : ''}${inst.text}`);
    });
  }

  if (r.chefSecret) {
    lines.push("");
    lines.push(`💡 Chief's Secret Technique: ${r.chefSecret}`);
  }

  lines.push("");
  lines.push(`🔗 Open Interactive Recipe on SmartChief: ${window.location.href}`);

  const fullText = lines.join("\n");
  const copyLabel = document.getElementById("copy-recipe-text-label");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText);
  } else {
    fallbackCopyText(fullText);
  }

  if (copyLabel) copyLabel.textContent = "✓ Recipe Text Copied to Clipboard!";
  setTimeout(() => {
    if (copyLabel) copyLabel.textContent = "Copy Ingredients & Steps as Text";
  }, 2500);
}

function shareVia(platform) {
  if (!currentActiveRecipe) return;
  const title = currentActiveRecipe.title;
  const url = window.location.href;
  const text = `Check out this recipe for "${title}" crafted on SmartChief:\n${url}`;

  if (platform === "whatsapp") {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  } else if (platform === "twitter") {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Making ${title} with @SmartChief AI! `)}&url=${encodeURIComponent(url)}`, "_blank");
  } else if (platform === "telegram") {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`Check out ${title} on SmartChief`)}`, "_blank");
  } else if (platform === "email") {
    window.location.href = `mailto:?subject=${encodeURIComponent(`Recipe: ${title}`)}&body=${encodeURIComponent(text)}`;
  }
}

function startCookingModal() {
  activeStepIndex = 0;
  updateCookingModalStep();
  const modal = document.getElementById("cooking-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeCookingModal() {
  const modal = document.getElementById("cooking-modal");
  if (modal) modal.classList.add("hidden");
}

function updateCookingModalStep() {
  if (!currentActiveRecipe || !currentActiveRecipe.instructions) return;
  const step = currentActiveRecipe.instructions[activeStepIndex];
  const total = currentActiveRecipe.instructions.length;

  const badge = document.getElementById("modal-step-badge");
  const title = document.getElementById("modal-step-title");
  const text = document.getElementById("modal-step-text");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");

  if (badge) badge.textContent = `Step ${activeStepIndex + 1} of ${total}`;
  if (title) title.textContent = step.title || `Step ${activeStepIndex + 1}`;
  if (text) text.textContent = step.text;
  if (prevBtn) prevBtn.disabled = activeStepIndex === 0;
  if (nextBtn) nextBtn.textContent = activeStepIndex === total - 1 ? "Finish Cooking 🎉" : "Next Step →";
}

function nextCookingStep() {
  if (!currentActiveRecipe) return;
  if (activeStepIndex < currentActiveRecipe.instructions.length - 1) {
    activeStepIndex++;
    updateCookingModalStep();
  } else {
    closeCookingModal();
    CookSmartStore.showToast("Bon Appétit! Dish completed!", "celebration");
  }
}

function prevCookingStep() {
  if (activeStepIndex > 0) {
    activeStepIndex--;
    updateCookingModalStep();
  }
}


// --- Screen 4: Saved Recipes Page ---
let savedActiveCategory = "ALL";
let savedSearchQuery = "";

function initSavedRecipesPage() {
  renderSavedGrid();
}

function renderSavedGrid() {
  const savedIds = CookSmartStore.getSavedRecipes();
  const allRecipes = CookSmartStore.getAllRecipes();
  const savedList = allRecipes.filter(r => savedIds.includes(r.id));

  const badge = document.getElementById("saved-badge");
  if (badge) badge.textContent = `${savedList.length} SAVED`;

  const filtered = savedList.filter(recipe => {
    const matchesCategory = (savedActiveCategory === "ALL") ||
      (savedActiveCategory === "FAVORITES") ||
      (savedActiveCategory === "INDIAN" && recipe.category === "INDIAN") ||
      (savedActiveCategory === "QUICK" && (parseInt(recipe.prepTime) <= 20)) ||
      (savedActiveCategory === "DINNER" && recipe.category === "DINNER") ||
      (savedActiveCategory === "HEALTHY" && recipe.category === "HEALTHY");

    const matchesSearch = !savedSearchQuery || recipe.title.toLowerCase().includes(savedSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const grid = document.getElementById("saved-recipes-grid");
  const emptyState = document.getElementById("empty-state");

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) {
      emptyState.classList.remove("hidden");
      emptyState.classList.add("flex");
    }
  } else {
    if (emptyState) {
      emptyState.classList.add("hidden");
      emptyState.classList.remove("flex");
    }

    grid.innerHTML = filtered.map(recipe => `
      <article class="surface-card rounded-2xl overflow-hidden flex flex-col relative group transition-all" id="recipe-card-${recipe.id}">
        <button onclick="removeRecipe('${recipe.id}', event)" class="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-primary-orange hover:scale-110 active:scale-90 transition-all" title="Remove from Saved">
          <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">favorite</span>
        </button>

        <a href="recipe-result.html?recipe=${recipe.id}" class="w-full h-32 block relative overflow-hidden bg-surface">
          <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          <div class="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10 text-[10px] font-bold text-white">
            <span class="material-symbols-outlined text-primary-orange text-xs" style="font-variation-settings: 'FILL' 1;">star</span>
            <span>${recipe.rating || '4.9'}</span>
          </div>
        </a>

        <div class="p-3 flex flex-col flex-1">
          <a href="recipe-result.html?recipe=${recipe.id}" class="hover:text-primary-orange transition-colors">
            <h3 class="font-outfit text-xs font-bold text-text-light leading-snug line-clamp-2">${recipe.title}</h3>
          </a>
          <div class="mt-auto pt-2.5 flex items-center justify-between text-[10px] text-text-muted border-t border-white/5">
            <div class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-xs text-primary-orange">schedule</span>
              <span>${recipe.prepTime || '25 min'}</span>
            </div>
            <div class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-xs text-primary-orange">local_fire_department</span>
              <span>${recipe.calories || '420 kcal'}</span>
            </div>
          </div>
        </div>
      </article>
    `).join("");
  }
}

function removeRecipe(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  CookSmartStore.toggleSave(id);
  CookSmartStore.showToast("Recipe removed from saved collection", "delete");
  renderSavedGrid();
}

function filterSavedCategory(cat, btn) {
  savedActiveCategory = cat;
  document.querySelectorAll(".pill-btn").forEach(b => {
    b.classList.remove("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    b.classList.add("surface-card", "text-text-muted");
  });
  if (btn) {
    btn.classList.add("active", "bg-primary-orange", "text-white", "shadow-sm", "shadow-primary-orange/30");
    btn.classList.remove("surface-card", "text-text-muted");
  }
  renderSavedGrid();
}

function toggleSearchRow() {
  const row = document.getElementById("saved-search-row");
  if (!row) return;
  row.classList.toggle("hidden");
  if (!row.classList.contains("hidden")) {
    const input = document.getElementById("filter-search-input");
    if (input) input.focus();
  }
}

function filterByQuery(query) {
  savedSearchQuery = query;
  renderSavedGrid();
}
// ==========================================
// 6. BOOTSTRAP ROUTER & EXPORTS
// ==========================================
window.SmartChiefStore = SmartChiefStore;
window.CookSmartStore = SmartChiefStore;
window.RECIPE_DATABASE = RECIPE_DATABASE;
window.ChefEngine = ChefEngine;
window.SmartChiefRouter = SmartChiefRouter;
window.CookSmartRouter = SmartChiefRouter;

window.refreshBookmarkIcons = refreshBookmarkIcons;
window.toggleFavorite = toggleFavorite;
window.filterCategory = filterCategory;
window.handleSearch = handleSearch;
window.clearSearch = clearSearch;

window.updateTagsUI = updateTagsUI;
window.addIngredientFromInput = addIngredientFromInput;
window.addStaple = addStaple;
window.removeIngredientItem = removeIngredientItem;
window.clearAllIngredients = clearAllIngredients;
window.loadChefInspiration = loadChefInspiration;
window.launchSurpriseInnovation = launchSurpriseInnovation;
window.selectCuisineMood = selectCuisineMood;
window.togglePref = togglePref;
window.triggerGenerateRecipe = triggerGenerateRecipe;
window.cancelRecipeLoading = cancelRecipeLoading;
window.searchAndGenerateRecipe = searchAndGenerateRecipe;

window.initRecipeResultPage = initRecipeResultPage;
window.switchConcept = switchConcept;
window.spinNewTwist = spinNewTwist;
window.toggleIngredientCheck = toggleIngredientCheck;
window.toggleSaveCurrentRecipe = toggleSaveCurrentRecipe;
window.shareRecipe = shareRecipe;
window.openShareModal = openShareModal;
window.closeShareModal = closeShareModal;
window.triggerNativeShare = triggerNativeShare;
window.copyShareLink = copyShareLink;
window.copyFullRecipeText = copyFullRecipeText;
window.shareVia = shareVia;
window.startCookingModal = startCookingModal;
window.closeCookingModal = closeCookingModal;
window.nextCookingStep = nextCookingStep;
window.prevCookingStep = prevCookingStep;

window.ThemeEngine = ThemeEngine;
window.GreetingEngine = GreetingEngine;

window.renderSavedGrid = renderSavedGrid;
window.removeRecipe = removeRecipe;
window.filterSavedCategory = filterSavedCategory;
window.toggleSearchRow = toggleSearchRow;
window.filterByQuery = filterByQuery;

document.addEventListener("DOMContentLoaded", () => {
  ThemeEngine.init();
  GreetingEngine.init();
  SmartChiefRouter.init();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (typeof closeShareModal === "function") closeShareModal();
    if (typeof closeCookingModal === "function") closeCookingModal();
  }
});



