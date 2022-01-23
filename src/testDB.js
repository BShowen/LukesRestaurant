const dinner = [
  {
    category: "SNACKS",
    meals: [
      {
        name: "chips & dip",
        description: "// sour cream & onion, chives 7.5"
      },
      {
        name: "beef tartare",
        description: "// egg cream, rye, watercress, pickled squash 15"
      },
      {
        name: "deviled eggs",
        description: "// bbq, funyun crunch, herbs 11"
      },
      {
        name: "brioche",
        description: "// honey butter, satsuma marmalade, sunflower seed crunch 7"
      },
      {
        name: "beet & honey",
        description: "// sunflower seed butter, blue cheese, sourdough 12"
      },
      {
        name: "chicken wings",
        description: "// green chile, agave lime pickle, cilantro 15"
      },
    ],
  },
  {
    category: "COASTAL",
    meals: [
      {
        name: "blackened fish collar",
        description: "// lime, salsa verde 15"
      },
      {
        name: "gulf shrimp",
        description: "// citrus chili butter, cilantro, crispy garlic 14"
      },
      {
        name: "blue crab fingers",
        description: "// cocktail sauce, lemon 15"
      },
      {
        name: "tripletail ceviche",
        description: "// kiwi, ginger, jalapeno 14.5"
      },
      {
        name: "oysters on the half shell",
        description: "// half dozen 18 / dozen 36"
      }
    ],
  },
  {
    category: "SOUP & SALAD",
    meals: [
      {
        name: "butternut squash soup",
        description: "// pepita-brown butter verde, aleppo 11"
      },
      {
        name: "caesar",
        description: "// parmesan, lime, anchovy, garlic bread crumb 12"
      },
      {
        name: "mixed greens",
        description: "// red onion, tomato, radish, sherry vinaigrette 10.5"
      },
      {
        name: "kale",
        description: "// buttermilk, pecan, bacon, aged cheddar, turnip 12"
      },
      {
        name: "add on",
        description: "// roasted chicken 5"
      },
    ],
  },
  {
    category: "MAIN",
    meals: [
      {
        name: "n.y. strip",
        description: "// caramelized onion, radish, bleu cheese, wilted greens, rye crouton 42"
      },
      {
        name: "flat iron steak",
        description: "// scallion salsa verde, herb fries  31"
      },
      {
        name: "acorn squash",
        description: "// pomegranate, sweet potato, brussels sprouts, pepita 24"
      },
      {
        name: "pork porterhouse",
        description: "// cabbage, potato, romanesco, mustard cream 29"
      },
      {
        name: "roasted chicken",
        description: "// root vegetable, dumpling, meyer lemon, jus 26"
      },
      {
        name: "red fish",
        description: "// pumpkin, fennel, pepita, brown butter 31.5"
      },
      {
        name: "mahi",
        description: "// broccolini, lemon vinaigrette, knobby onion, sourdough 31.5"
      },
      {
        name: "cheeseburger",
        description: "// lettuce, tomato, sweet onion pickle 17.5"
      },
    ],
  },
  {
    category: "ON THE SIDE",
    meals: [
      {
        name: "broccolini",
        description: "// sea salt, lemon, olive oil 8"
      },
      {
        name: "shishito peppers",
        description: "// apple onion jam, sage, puffed wild rice 8"
      },
      {
        name: "crispy potatoes",
        description: "// bacon, aged cheddar, garlic crema, scallion 8"
      },
      {
        name: "crispy brussels sprouts",
        description: "// cilantro, lime, agave, ricotta salata 9"
      },
    ],
  },
  {
    category: "DESSERT",
    meals: [
      {
        name: "soft serve ice cream & sorbet",
        description: "// tahitian vanilla, florida orange 6"
      },
      {
        name: "float",
        description: "// root beer or coke, tahitian vanilla 6"
      },
      {
        name: "citrus meringue",
        description: "// meyer lemon, kumquat, yuzu 9"
      },
      {
        name: "peppermint-chocolate",
        description: "// cold brew, creme fraiche, carob bean 12"
      },
      {
        name: "apple toffee cake",
        description: "// roasted white chocolate, buckwheat 10"
      },
      {
        name: "key lime semifreddo",
        description: "// chantilly, coconut-graham crumble 8"
      },

    ],
  }
];

const lunch = [
  { 
    category: "SNACKS", 
    meals: [
      { 
        name: "chips & dip", 
        description: "// sour cream & onion, chives 7.5" 
      }, 
      { 
        name: "beef tartare", 
        description: "// egg cream, rye, watercress, pickled squash 14" 
      }, 
      { 
        name: "deviled eggs",
        description: "// bbq, funyun crunch, herbs 11" 
      }, 
      { 
        name: "blue crab fingers", 
        description: "// cocktail sauce, lemon 15" 
      }, 
      { 
        name: "tripletail ceviche", 
        description: "// kiwi, ginger, jalapeno 14.5" 
      }, 
      { 
        name: "oysters on the half shell half dozen 18", 
        description: "// dozen 36" 
      }
    ], 
  },
  {
    category: "MAIN",
    meals: [
      {
        name: "celery root shawarma",
        description: "// pita, tzatziki, cucumber salad 15"
      },
      {
        name: "crispy chicken",
        description: "// green chile, cilantro, agave pickle, herb vinaigrette 16"
      },
      {
        name: "cheeseburger",
        description: "// lettuce, tomato, sweet onion pickle  17.5"
      },
      {
        name: "smokebox turkey",
        description: "// bacon, tomato, brie, sourdough, dill pickles 16"
      },
      {
        name: "rainbow trout",
        description: "// braised cabbage, lemon butter, sourdough, olive verde 22"
      },
      {
        name: "flat iron steak",
        description: "// horseradish crema, scallion, herb fries 24"
      }
    ],
  },
  {
    category: "SOUP & SALAD",
    meals: [
      {
        name: "butternut squash soup",
        description: "// pepita brown butter, aleppo 11"
      },
      {
        name: "caesar",
        description: "// parmesan, lime, anchovy, garlic bread crumb 12"
      },
      {
        name: "kale",
        description: "// buttermilk, pecan, aged cheddar, bacon, turnip 12"
      },
      {
        name: "mixed greens",
        description: "// red onion, tomato, radish, sherry vinaigrette 10.5"
      },
      {
        name: "extras",
        description: "// add roasted chicken for 5"
      }
    ],
  },
  {
    category: "ON THE SIDE",
    meals: [
      {
        name: "shishito peppers",
        description: "// apple onion jam, sage, puffed wild rice 8"
      },
      {
        name: "broccolini",
        description: "// sea salt, lemon, olive oil 8"
      },
      {
        name: "herb fries",
        description: "// thyme, rosemary, sea salt 6"
      },
      {
        name: "crispy brussels sprouts",
        description: "// cilantro, lime, agave, ricotta salata 9"
      }
    ],
  },
];

const brunch = [
  {
    category: "SNACKS",
    meals: [
      {
        name: "chips & dip",
        description: "// sour cream & onion, chive 7.5"
      },
      {
        name: "beef tartare",
        description: "// egg cream, rye, arugula, pickled turnip 14"
      },
      {
        name: "deviled eggs",
        description: "// bbq, funyun crunch, herbs 11"
      },
      {
        name: "blue crab fingers",
        description: "// cocktail sauce, lemon 15"
      },
      {
        name: "tripletail ceviche",
        description: "// kiwi, ginger, jalapeno 14.5"
      },
      {
        name: "oysters on the half shell",
        description: "// half dozen 18"
      }
    ],
  },
  {
    category: "BRUNCH",
    meals: [
      {
        name: "quiche",
        description: "// aged cheddar, mixed greens, radish, grilled onion vinaigrette 15"
      },
      {
        name: "egg soufflé",
        description: "// rock shrimp, hollandaise, fin herbs 17"
      },
      {
        name: "french toast",
        description: "// brioche, creme anglaise, apple, sesame granola, caramel 14"
      },
      {
        name: "avocado toast",
        description: "// charred brussels sprouts, fried egg vinaigrette, parmigiano-reggiano 15"
      },
      {
        name: "pierogies",
        description: "// butternut squash, miso brown butter, greens, poached egg 16"
      },
      {
        name: "brisket bowl",
        description: "// five-spice fried chicken, crispy rice, fried egg, cucumber 17"
      },
      {
        name: "cheeseburger",
        description: "// lettuce, tomato, sweet onion pickle 17.5"
      },
      {
        name: "celery root shawarma",
        description: "// pita, tzatziki, cucumber salad 15"
      },
      {
        name: "ham & cheese",
        description: "// tomato, brie, sourdough, pickles 16"
      },
      {
        name: "crispy chicken",
        description: "// green chile, cilantro, agave pickle, herb vinaigrette 16"
      },
      {
        name: "soft egg sandwich",
        description: "// folded egg, cheddar, fresno, onion jam, salad 16"
      }
    ],
  },
  {
    category: "SOUP & SALAD",
    meals: [
      {
        name: "butternut squash soup",
        description: "// pepita-brown butter verde 11"
      },
      {
        name: "caesar",
        description: "// parmesan, lime, anchovy, garlic bread crumb 12"
      },
      {
        name: "mixed greens",
        description: "// red onion, tomato, radish, sherry vinaigrette 10.5"
      },
      {
        name: "kale",
        description: "// buttermilk, pecan, bacon, aged cheddar, turnip 12"
      },
      {
        name: "extras",
        description: "// add roasted chicken for 5"
      }
    ],
  },
  {
    category: "FROM THE BAR",
    meals: [
      {
        name: "mimosa",
        description: "// sparkling, orange juice 3.5"
      },
      {
        name: "bellini",
        description: "// prosecco, spiced pear or blood orange 7"
      },
      {
        name: "red sangria",
        description: "// moulin de gassac, blood orange, lemon 6"
      },
      {
        name: "sparkling sangria",
        description: "// begonia blanca, spiced pear, lemon, bubbles 6"
      },
      {
        name: "cappelletti spritz",
        description: "// cappelletti, prosecco, soda 10"
      },
      {
        name: "spicy bloody mary",
        description: "// tito’s vodka, house jalapeno tincture, tomato 9"
      },
      {
        name: "the mule",
        description: "// tito’s vodka, fever tree ginger beer, lime 11"
      }
    ],
  },
  {
    category: "ON THE SIDE",
    meals: [
      {
        name: "extras",
        description: "// bacon 6"
      },
      {
        name: "broccolini",
        description: "// sea salt, olive oil, lemon 8"
      },
      {
        name: "shishito peppers",
        description: "// apple onion jam, sage, puffed wild rice 8"
      },
      {
        name: "loaded hash brown",
        description: "// scallion, sour cream, cheddar, bacon, jalapeno 8"
      },
      {
        name: "crispy brussels sprouts",
        description: "// cilantro, lime, agave, ricotta salata 9"
      }
    ],
  },
];

const cocktailsAndBeer = [
  {
    category: "COCKTAILS",
    meals: [
      {
        name: "ghostdancer",
        description: "// jalapeno infused hornitos tequila, aloe, kiwi, pineapple 12"
      },
      {
        name: "rose all day",
        description: "// prescribed gin, lillet rose, strawberry, blood orange, lemon, bubbles 12"
      },
      {
        name: "spring awakening",
        description: "// uncle val’s, plymouth gin, lillet blanc, butterfly pea, lemongrass-honey, ginger 12"
      },
      {
        name: "white linen",
        description: "// hendrick’s gin, st-germain elderflower liqueur, white cranberry, house sour 13.5"
      },
      {
        name: "campfire amber",
        description: "// redemption rye, golden falernum, rubarbaro amaro, orange liqueur 14"
      },
      {
        name: "when pigs rye",
        description: "// WhistlePig piggyback, copper & kings apple brandy, melettie, pumpkin, maple, cinnamon 13"
      }
    ],
  },
  {
    category: "BEER",
    meals: [
      {
        name: "",
        description: "wolf shirt lager, hourglass brewing, longwood, fl 7"
      },
      {
        name: "",
        description: "vacation blood orange, wheat ale, persimmon hollow brewing, deland, fl 8.5"
      },
      {
        name: "",
        description: "z.f.g. ipa, hidden springs ale works, tampa, fl 8"
      },
      {
        name: "",
        description: "irish curse, irish red ale, hourglass brewing, longwood, fl 7.5"
      },
      {
        name: "",
        description: "classic amber amber lager, steven’s point brewery, steven’s point, wi  6"
      },
      {
        name: "",
        description: "into the dark unknown, imperial stout, infinite ale works, ocala, fl 9"
      },
      {
        name: "",
        description: "three wise guys, coffee porter, persimmon hollow brewing, deland, fl 7.5"
      }
    ],
  },
];

const wine = [
  {
    category: "WHITE WINE - NEW WORLD",
    meals: [
      {
        name: "",
        description: "sauvignon blanc leefield station, marlborough"
      },
      {
        name: "",
        description: "sauvignon blanc realm cellars “fidelio”, napa valley 2020"
      },
      {
        name: "",
        description: "riesling grosset, polish hill, clare valley, south australia 2020"
      },
      {
        name: "",
        description: "pinot gris montinore estate, willamette valley"
      },
      {
        name: "",
        description: "semillon l’ecole no 41 , columbia valley"
      },
      {
        name: "",
        description: "semillon blend riccitelli, las compuertas, mendoza 2017"
      },
      {
        name: "",
        description: "chardonnay bulletin place, barossa valley"
      },
      {
        name: "",
        description: "chardonnay talley, arroyo grande valley, central coast"
      },
      {
        name: "",
        description: "chardonnay peay vineyards, sonoma coast 2018"
      },
      {
        name: "",
        description: "chardonnay stony hill, napa valley 2013"
      },
      {
        name: "",
        description: "rose wölffer estate, long island, new york"
      }
    ],
  },
  {
    category: "RED WINE - NEW WORLD",
    meals: [
      {
        name: "",
        description: "pinot noir grochau cellars “commuter cuvée”, willamette valley"
      },
      {
        name: "",
        description: "pinot noir crossbarn by paul hobbs, sonoma county"
      },
      {
        name: "",
        description: "pinot noir mac forbes, yarra valley, victoria"
      },
      {
        name: "",
        description: "pinot noir cristom, louise vineyard, eola-amity hills 2005"
      },
      {
        name: "",
        description: "pinot noir sea smoke “ten”, sta. rita hills, santa barbara 2018"
      },
      {
        name: "",
        description: "merlot blend northstar, columbia valley"
      },
      {
        name: "",
        description: "merlot smith devereux “ibex”, st. helena, napa valley 2017"
      },
      {
        name: "",
        description: "cabernet franc the inquisitor, stellenbosch"
      },
      {
        name: "",
        description: "malbec zuccardi, valle de uco, mendoza"
      },
      {
        name: "",
        description: "red blend horseshoes & handgrenades, maison noir wines"
      },
      {
        name: "",
        description: "red blend l’ecole no 41 “perigee”, walla walla valley 2016"
      },
      {
        name: "",
        description: "syrah blend l’aventure “optimus”, paso robles 2018"
      },
      {
        name: "",
        description: "cabernet sauvignon · cabernet franc s, p & l, sonoma county"
      },
      {
        name: "",
        description: "cabernet sauvignon haras de pirque “hussonet”, maipo valley"
      },
      {
        name: "",
        description: "cabernet sauvignon blend chappellet mountain cuvée, napa"
      },
      {
        name: "",
        description: "cabernet sauvignon house of cards “cab is king”, napa valley"
      },
      {
        name: "",
        description: "cabernet sauvignon blend joel gott “gott”, napa valley 2015"
      },
      {
        name: "",
        description: "cabernet sauvignon ghost block, oakville, napa valley 2017"
      },
      {
        name: "",
        description: "zinfandel mount peak “rattlesnake”, sonoma county 2016"
      },
      {
        name: "",
        description: "greanche blend saxum “james berry vineyard”, paso robles 2018"
      }
    ],
  },
  {
    category: "WHITE WINE - OLD WORLD",
    meals: [
      {
        name: "",
        description: "albariño senda verde, rías baixas"
      },
      {
        name: "",
        description: "gruner veltliner stadt krems, kremstal"
      },
      {
        name: "",
        description: "sauvignon blanc jean francois merieau, touraine, loire"
      },
      {
        name: "",
        description: "chardonnay domaine perraud, mâcon-villages, burgundy"
      },
      {
        name: "",
        description: "pinot grigio tiefenbrunner, alto-adige"
      },
      {
        name: "",
        description: "white blend castello della sala, orvieto classico, umbria"
      },
      {
        name: "",
        description: "riesling august kesseler, kabinett, rheingau"
      },
      {
        name: "",
        description: "viura blend cvne “monopole clásico”, rioja"
      },
      {
        name: "",
        description: "rose la fête, côtes de provence"
      }
    ],
  },
  {
    category: "RED WINE - OLD WORLD",
    meals: [
      {
        name: "",
        description: "pinot noir dom. michel magnien, chambolle-musigny, burgundy 2017"
      },
      {
        name: "",
        description: "barbera d’asti ratti “battaglione”, piemonte"
      },
      {
        name: "",
        description: "red blend moulin de gassac, languedoc"
      },
      {
        name: "",
        description: "cabernet franc paul buisse, chinon, loire valley"
      },
      {
        name: "",
        description: "tempranillo carlos serres, crianza, rioja"
      },
      {
        name: "",
        description: "grenache blend chateau de saint cosme, gigondas 2018"
      },
      {
        name: "",
        description: "garnacha com tu, monstant 2017"
      },
      {
        name: "",
        description: "merlot blend chateau malmaison, moulis-en-medoc 2011"
      }
    ],
  },
  {
    category: "BUBBLES",
    meals: [
      {
        name: "",
        description: "brut chevalier du grand robert, crémant de bordeaux"
      },
      {
        name: "",
        description: "prosecco benaccetto, italy"
      },
      {
        name: "",
        description: "rose jeio by bisol, veneto"
      },
      {
        name: "",
        description: "moscato d'asti vietti “cascinetta”, piedmont (375ml)"
      },
      {
        name: "",
        description: "riesling blend pét-nat, sonser “hasta la vizsla”, alsace 2018"
      },
      {
        name: "",
        description: "brut nicolas feuillatte, champagne"
      },
      {
        name: "",
        description: "blanc de blancs delamotte, champagne"
      },
      {
        name: "",
        description: "xarel·lo raventós i blanc “manuel”, conca del riu anoia 2012"
      },
      {
        name: "",
        description: "blanc de noirs sea smoke ” sea spray”, sta. rita hills 2016"
      },
      {
        name: "",
        description: "brut rose g.h. mumm “cordon”, champagne"
      }
    ],
  },
];

export { lunch, dinner, brunch, cocktailsAndBeer, wine }