class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form();
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",playerimg);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", playerimg);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket.

            if(index===player.index){
                fill("black");
                textSize(20);
                text(player.name,players[index-1].x-15,players[index-1].y+25);
                camera.position.x=width/2;
            }
        }


        // Give movements for the players using arrow keys
        if(keyIsDown(LEFT_ARROW) && player.index!==null){
            player.distance+=10;
            player.update();
        }

        if(keyIsDown(RIGHT_ARROW) && player.index!==null){
            player.distance=player.distance-10;
            player.update();
        }

        rande = random(30,960);
        rand = Math.round(random(1,5));
        // Create and spawn fruits randomly
        if(frameCount%60===0){
            rande = random(30,960);
            fruits = createSprite(rande,10,20,20);
            switch(rand){
                case 1: fruits.addImage(fruit1img);
                        break;
                case 2: fruits.addImage(fruit2img);
                        break;
                case 3: fruits.addImage(fruit3img);
                        break;
                case 4: fruits.addImage(fruit4img);
                        break;
                case 5: fruits.addImage(fruit5img);
                        break;
                default: break;
            }
            fruitGroup.add(fruits);
            fruitGroup.setVelocityEach(0,8);
        }
        
    }

    end(){
       console.log("Game Ended");
    }
}
