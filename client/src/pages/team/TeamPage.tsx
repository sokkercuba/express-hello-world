import { useEffect } from "react";
import SquadPageTabs from "./PageTabs";

export default function PlayersPage() {
  //const players = usePlayersSearch();
  //console.log('players: ', players);

  useEffect(() => {
    //dispatch({ type: types.setPlayers, payload: players });
  }, []);

  return <SquadPageTabs />;
}
