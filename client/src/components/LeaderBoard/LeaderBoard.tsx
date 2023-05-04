/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { handleApiRequest } from '../../services'
import { AppContext } from '../../store/StoreProvider'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { parseName, parsePositions } from '../../utils/parsePlayerData'
import { getImgUrl } from '../../utils/getImgUrl'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}))

function LeaderBoard() {
  const { dispatch } = useContext(AppContext)
  const [podium, setPodium] = useState<any[]>([])
  const [editions, setEditions] = useState<any[]>([])
  const [editionShown, setEditionShown] = useState(null)

  const players = useMemo(() => {
    const edition = editions.find((edit) => edit.id === editionShown)
    const playerData = Object.keys(edition?.groups || {}).map((key) => [
      key,
      edition.groups[key]
    ])
    const parsedData = parsePositions(playerData)
    const firstPart = parsedData.slice(0, 3)
    const secondPart = parsedData.slice(3)
    setPodium(firstPart)

    return secondPart
  }, [editionShown])

  useEffect(() => {
    const loadEditions = async () => {
      const data = await handleApiRequest('/api/v1/xtreme', 'GET', dispatch)

      const { error, status, ...editionsData } = data
      if (error || status !== 200) return

      const edata = Object.values(editionsData)
      const edition: any = data[0]

      setEditions(edata)
      setEditionShown(edition.id)
    }

    loadEditions()
  }, [])

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {players?.length && podium?.length ? (
        <>
          <Stack
            width="100%"
            direction="row"
            marginBottom={6}
            justifyContent="center"
          >
            <Stack
              gap={2}
              direction="row"
              maxHeight="160px"
              borderRadius="12px"
              position="relative"
            >
              <Item
                key="silver"
                elevation={12}
                sx={{
                  gap: '6px',
                  width: '132px',
                  height: '115px',
                  display: 'flex',
                  alignSelf: 'end',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Avatar
                  alt={`${podium[1].name}`}
                  src={getImgUrl(
                    `https://api.multiavatar.com/${podium[1].id}.png`
                  )}
                  sx={{
                    position: 'absolute',
                    top: '2px',
                    width: 56,
                    height: 56
                  }}
                />
                <Stack p={1} marginTop="auto">
                  <Typography variant="subtitle2" gutterBottom>
                    {podium[1].name}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight="700"
                    color="#03a9f4"
                  >
                    {podium[1].score}
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    {parseName(podium[1].team)}
                  </Typography>
                </Stack>
              </Item>
              <Item
                key="gold"
                elevation={24}
                sx={{
                  gap: '6px',
                  width: '132px',
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  borderRadius: '30px 30px 4px 4px'
                }}
              >
                <Avatar
                  alt={`${podium[0].name}`}
                  src={getImgUrl(
                    `https://api.multiavatar.com/${podium[0].id}.png`
                  )}
                  sx={{
                    width: 64,
                    height: 64,
                    top: '-50px',
                    position: 'absolute'
                  }}
                />
                <Stack
                  p={1}
                  mt="20px"
                  height="100%"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" gutterBottom>
                    {podium[0].name}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    fontWeight="700"
                    color="#fcb434"
                  >
                    {podium[0].score}
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    {parseName(podium[0].team)}
                  </Typography>
                </Stack>
              </Item>
              <Item
                key="bronze"
                elevation={6}
                sx={{
                  gap: '6px',
                  width: '132px',
                  height: '96px',
                  display: 'flex',
                  alignSelf: 'end',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Avatar
                  alt={`${podium[2].name}`}
                  src={getImgUrl(
                    `https://api.multiavatar.com/${podium[2].id}.png`
                  )}
                  sx={{
                    position: 'absolute',
                    top: '26px',
                    width: 48,
                    height: 48
                  }}
                />
                <Stack marginTop="auto">
                  <Typography variant="subtitle2" gutterBottom>
                    {podium[2].name}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    color="#a17652"
                    gutterBottom
                  >
                    {podium[2].score}
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    {parseName(podium[2].team)}
                  </Typography>
                </Stack>
              </Item>
            </Stack>
          </Stack>

          <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
            {(players || []).map((playerData: any) => {
              const { id, name, team, score, iconData } = playerData

              return (
                <Item
                  key={id}
                  sx={{ display: 'flex', gap: '8px' }}
                  elevation={3}
                >
                  <Avatar
                    alt={`${name}`}
                    src={getImgUrl(`https://api.multiavatar.com/${id}.png`)}
                  />

                  <Stack width="100%">
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="subtitle2" gutterBottom>
                        {name}
                      </Typography>

                      <Stack
                        direction="row"
                        justifyContent="center"
                        minWidth="30px"
                      >
                        <Typography variant="subtitle2" gutterBottom>
                          {score}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="caption" gutterBottom>
                        {team}
                      </Typography>

                      <Stack
                        direction="row"
                        justifyContent="center"
                        minWidth="30px"
                      >
                        {!iconData.down ? (
                          <ArrowDropUpIcon color={iconData.color} />
                        ) : (
                          <ArrowDropDownIcon color={iconData.color} />
                        )}
                      </Stack>
                    </Stack>
                  </Stack>
                </Item>
              )
            })}
          </Stack>
        </>
      ) : (
        <Stack width="100%" alignItems="center">
          <Stack sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Stack>
        </Stack>
      )}
    </Container>
  )
}

export default LeaderBoard
