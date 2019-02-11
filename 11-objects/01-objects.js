var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };

    console.log('Episode Name:', netflix.season1.seasonInfo.episodeInfo[4].episodeName)
    let str = netflix.season1.seasonInfo.episode










    let spaceJam = {
        toonSquad: {
          human: 'Michael Jordan',
          rabbit1: 'Bugs Bunny',
          rabbit2: 'Lola Bunny',
          duck: 'Daffy Duck',
          tDevil: 'Tasmanian Devil',
          bird: 'Tweety',
          cat: 'Sylvester',
          pig: 'Porky Pig'
        },
        monstars: {
          0: 'Bupkus',
          1: 'Bang',
          2: 'Nawt',
          3: 'Pound',
          4: 'Blanko'
        },
        nbaPlayers: {
          phoenixSuns: 'Charles Barkley',
          newJerseyNets: 'Shawn Bradley',
          newYorkNicks: 'Patrick Ewing',
          charlotteHornets1: 'Larry Johnson',
          charlotteHornets2: 'Muggsy Bogues'
        }
      }
    
      console.log(Object.keys(spaceJam.nbaPlayers))
      console.log(Object.values(spaceJam.nbaPlayers))


      

      console.log(garden.vegetable)

      let x = 'vegetable';

      console.log(garden[x])






let baking = {}
baking['zucchini'] = 'better make some bread!';

console.log(baking[garden['vegatable']])





let garden = {
          vegetable: 'zucchini',
          flower: 'sun flower',
          fruit: 'grape',
          water: true,
          sun: true,
          size: 10
      };

      let key = 'water';

      Object.keys(garden).forEach(g=> {
          console.log(g)
        if (g == x){
            console.log('Yay, its', garden[x])
        }else{
            console.log("There's no water here=(")
        }
        })