import { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { AppContext } from '../../store/StoreProvider'
import PlayerCard from '../../components/PlayerCard/PlayerCard'

function Squad() {
  const { state, dispatch } = useContext(AppContext)
  const { players } = state

  const data = players && players.players.length > 0 ? players.players : null

  return (
    <Grid container spacing={4}>
      {data &&
        data.map((player) => {
          const { id, info } = player

          return (
            <Grid item key={id} xs={12} sm={8} md={6} xl={4}>
              <PlayerCard {...player} />
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Squad
