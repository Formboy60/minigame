class player{
    constructor(name, health, tired){
        this.name = name
        this.health = health
        this.tired = tired
        this.alive = true
    }

    patatte(playerPatatted){
        
       this.tired--
        playerPatatted.health -= Math.floor(Math.random()*(25 - 1))
        if (playerPatatted.health <= 0){
            playerPatatted.alive = false
        } 
        if(this.tired == 0){
            return
        }        
    }        
} 

    const playerRed = new player ("yass", 500, 10)
    const playerBlue = new player ("magicarpe", 800, 8)
            
           
function mortalKombat (playerRed, playerBlue){
                         
    playerRed.patatte(playerBlue)
    playerBlue.patatte(playerRed)

    if( !playerRed.alive || !playerBlue.alive){

    return {red : playerRed.alive, blue : playerBlue.alive}
        }
    else{mortalKombat(playerRed, playerBlue)}
            
}

mortalKombat(playerRed, playerBlue)


module.exports = {player, mortalKombat};
