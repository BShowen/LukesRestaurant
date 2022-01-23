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
      }
    ],
  }
];

export { lunch, dinner }