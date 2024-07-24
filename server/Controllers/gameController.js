const Game = require("../Models/gameSchema");
const gameController = {}
gameController.fetchGames = async (req, res) => {
    try {
        const games = await Game.find();
        if (games && games.length > 0) {
            res.status(200).json(games);
        }
        else {
            res.status(404).send('No Games Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const CreateGame = async () => {
    const game = new Game({
        name: 'Call of Duty Black Ops',
        details: 'Users top rated call of duty game, experience it and have fun',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfp8hnmmgLAP9CFPo3zxnGv0o2aYDyFGNOQ2ER8KaJYXxhFoDGEHrAN_AYb-tdAqvJCg&usqp=CAU'
    });
    const savedGame = await game.save();
    if (savedGame) {
        console.log('Game Created');
    }
}
// CreateGame();

module.exports = gameController;
