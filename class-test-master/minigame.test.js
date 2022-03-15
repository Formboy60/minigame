const {player} = require('./minigame.js')
const {mortalKombat} = require('./minigame.js')



    test("In blue corner : Yass, 500 hp, 10 stamina", () => {
      
        const player1 = new player('Yass',500,10)
      
        expect(player1.name).toBe('Yass')
        expect(player1.health).toBe(500)
        expect(player1.tired).toBe(10)
        });

    test("In  corner : Magicarpe, 1000 hp, 8 stamina", () => {
      
        const player2 = new player('Magicarpe',1000,8)
          
        expect(player2.name).toBe('Magicarpe')
        expect(player2.health).toBe(1000)
        expect(player2.tired).toBe(8)
        });

    test("decrease stamina", () => {
        const player1 = new player('Yass',500,10)
        const player2 = new player('Magicarpe',1000,8)
              
        expect(player1.tired).toBe(10)
        player1.patatte(player2)
        expect(player1.tired).toBe(9)
        });

    test("the death is comming", () => {
        const player1 = new player('Yass',1,10)
        const player2 = new player('Magicarpe',1000,8)
                  
        expect(player1.alive).toBe(true)
        player2.patatte(player1)
        expect(player1.alive).toBe(false)
        });
    

    test("so tired to attack", () => {
        const player1 = new player('Yass',500,2)
        const player2 = new player('Magicarpe',1000,8)
                  
        expect(player1.tired).toBe(2)
        player1.patatte(player2)
        expect(player1.tired).toBe(1)
        player1.patatte(player2)
        expect(player1.tired).toBe(0)
        });
    

    test("ready to rumble", () => {
        const playerRed = new player('Yass',50,10)
        const playerBlue = new player('Magicarpe',50,8)

        expect(playerRed.alive && playerBlue.alive).toBe(true)
        mortalKombat(playerRed, playerBlue)
        expect(playerRed.alive || playerBlue.alive).toBe(false)
        });
    


