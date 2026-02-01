import {Scene} from './components/Scene'
import Player from './components/Player'
import {Map} from './components/map'

const Game = () => {
  return (
    <Scene>
        <Player />
        <Map />
    </Scene>
  );
}

export default Game;