import * as React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function ToggleButtonsMultiple({ id }: { id: number }) {
  const [orders, setOrders] = React.useState<string[]>([])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTypes: string[]
  ) => {
    setOrders(newTypes)
  }

  return (
    <ToggleButtonGroup
      size="small"
      value={orders}
      color="success"
      sx={{ marginLeft: 'auto' }}
      onChange={handleChange}
      aria-label="orders selection"
    >
      <ToggleButton
        size="small"
        value="GK"
        aria-label="goal keeper"
        sx={{ border: 'none' }}
      >
        GK
      </ToggleButton>
      <ToggleButton
        size="small"
        value="DEF"
        aria-label="defender"
        sx={{ border: 'none' }}
      >
        DEF
      </ToggleButton>
      <ToggleButton
        size="small"
        value="MID"
        aria-label="midfielder"
        sx={{ border: 'none' }}
      >
        MID
      </ToggleButton>
      <ToggleButton
        size="small"
        value="ATT"
        aria-label="striker"
        sx={{ border: 'none' }}
      >
        ATT
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
