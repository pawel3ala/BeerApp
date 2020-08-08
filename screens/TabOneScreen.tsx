import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const beerList = [
  {
    "id": 4,
    "name": "Pilsen Lager",
    "tagline": "Unleash the Yeast Series.",
    "first_brewed": "09/2013",
    "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
    "image_url": "https://images.punkapi.com/v2/4.png",
    "abv": 6.3,
    "ibu": 55,
    "target_fg": 1012,
    "target_og": 1060,
    "ebc": 30,
    "srm": 15,
    "ph": 4.4,
    "attenuation_level": 80,
    "volume": {
      "value": 20,
      "unit": "litres"
    },
    "boil_volume": {
      "value": 25,
      "unit": "litres"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": null
        }
      ],
      "fermentation": {
        "temp": {
          "value": 9,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Extra Pale",
          "amount": {
            "value": 4.58,
            "unit": "kilograms"
          }
        },
        {
          "name": "Caramalt",
          "amount": {
            "value": 0.25,
            "unit": "kilograms"
          }
        },
        {
          "name": "Dark Crystal",
          "amount": {
            "value": 0.06,
            "unit": "kilograms"
          }
        },
        {
          "name": "Munich",
          "amount": {
            "value": 0.25,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Centennial",
          "amount": {
            "value": 5,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        },
        {
          "name": "Amarillo",
          "amount": {
            "value": 5,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        },
        {
          "name": "Centennial",
          "amount": {
            "value": 10,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Amarillo",
          "amount": {
            "value": 10,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Centennial",
          "amount": {
            "value": 17.5,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        },
        {
          "name": "Amarillo",
          "amount": {
            "value": 17.5,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }
      ],
      "yeast": "Wyeast 2007 - Pilsen Lager™"
    },
    "food_pairing": [
      "Spicy crab cakes",
      "Spicy cucumber and carrot Thai salad",
      "Sweet filled dumplings"
    ],
    "brewers_tips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
    "contributed_by": "Ali Skinner <AliSkinner>"
  },
  {
    "id": 5,
    "name": "Avery Brown Dredge",
    "tagline": "Bloggers' Imperial Pilsner.",
    "first_brewed": "02/2011",
    "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
    "image_url": "https://images.punkapi.com/v2/5.png",
    "abv": 7.2,
    "ibu": 59,
    "target_fg": 1027,
    "target_og": 1069,
    "ebc": 10,
    "srm": 5,
    "ph": 4.4,
    "attenuation_level": 67,
    "volume": {
      "value": 20,
      "unit": "litres"
    },
    "boil_volume": {
      "value": 25,
      "unit": "litres"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 66,
            "unit": "celsius"
          },
          "duration": 70
        }
      ],
      "fermentation": {
        "temp": {
          "value": 10,
          "unit": "celsius"
        }
      },
      "twist": null
    },
    "ingredients": {
      "malt": [
        {
          "name": "Lager Malt",
          "amount": {
            "value": 6.63,
            "unit": "kilograms"
          }
        },
        {
          "name": "Wheat",
          "amount": {
            "value": 0.38,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Saaz",
          "amount": {
            "value": 60,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        },
        {
          "name": "Saaz",
          "amount": {
            "value": 60,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Saaz",
          "amount": {
            "value": 60,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }
      ],
      "yeast": "Wyeast 2007 - Pilsen Lager™"
    },
    "food_pairing": [
      "Vietnamese squid salad",
      "Chargrilled corn on the cob with paprika butter",
      "Strawberry and rhubarb pie"
    ],
    "brewers_tips": "Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.",
    "contributed_by": "Sam Mason <samjbmason>"
  },
  {
    "id": 6,
    "name": "Electric India",
    "tagline": "Vibrant Hoppy Saison.",
    "first_brewed": "05/2013",
    "description": "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
    "image_url": "https://images.punkapi.com/v2/6.png",
    "abv": 5.2,
    "ibu": 38,
    "target_fg": 1005,
    "target_og": 1045,
    "ebc": 15,
    "srm": 7.5,
    "ph": 4.4,
    "attenuation_level": 88.9,
    "volume": {
      "value": 20,
      "unit": "litres"
    },
    "boil_volume": {
      "value": 25,
      "unit": "litres"
    },
    "method": {
      "mash_temp": [
        {
          "temp": {
            "value": 65,
            "unit": "celsius"
          },
          "duration": 75
        }
      ],
      "fermentation": {
        "temp": {
          "value": 22,
          "unit": "celsius"
        }
      },
      "twist": "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins"
    },
    "ingredients": {
      "malt": [
        {
          "name": "Extra Pale",
          "amount": {
            "value": 3.63,
            "unit": "kilograms"
          }
        },
        {
          "name": "Munich",
          "amount": {
            "value": 0.13,
            "unit": "kilograms"
          }
        },
        {
          "name": "Wheat",
          "amount": {
            "value": 0.25,
            "unit": "kilograms"
          }
        }
      ],
      "hops": [
        {
          "name": "Amarillo",
          "amount": {
            "value": 2.5,
            "unit": "grams"
          },
          "add": "start",
          "attribute": "bitter"
        },
        {
          "name": "Nelson Sauvin",
          "amount": {
            "value": 5,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Amarillo",
          "amount": {
            "value": 5,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Peppercorns",
          "amount": {
            "value": 2.5,
            "unit": "grams"
          },
          "add": "middle",
          "attribute": "flavour"
        },
        {
          "name": "Nelson Sauvin",
          "amount": {
            "value": 20,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        },
        {
          "name": "Amarillo",
          "amount": {
            "value": 12.5,
            "unit": "grams"
          },
          "add": "end",
          "attribute": "flavour"
        }
      ],
      "yeast": "Wyeast 3711 - French Saison™"
    },
    "food_pairing": [
      "Mussels with a garlic and herb sauce",
      "Crab melt sandwich",
      "Shortbread cookies"
    ],
    "brewers_tips": "Source some really good heather honey to get the right spicy esters in the beer.",
    "contributed_by": "Sam Mason <samjbmason>"
  }
]



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
