import { useContext, useState } from 'react'
import { Box } from '@mui/material'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../store/actions'
import Logout from '@mui/icons-material/Logout'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Settings from '@mui/icons-material/Settings'
import ListItemIcon from '@mui/material/ListItemIcon'
import { AppContext } from '../../store/StoreProvider'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { handleApiRequest } from '../../services'

export default function AccountMenu() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AppContext)
  const { username } = state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    setAnchorEl(null)

    const data = await handleApiRequest('/api/auth/v1/logout', 'GET', dispatch)

    const { error, success, status } = data

    if ((error && !success) || status !== 200) return

    setLogin(dispatch, false)
  }

  return (
    <>
      <Box
        sx={{
          ml: '8px',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hello
        </Typography>
        <Tooltip title={username}>
          <IconButton
            size="small"
            aria-haspopup="true"
            onClick={handleClick}
            aria-expanded={open ? 'true' : undefined}
            aria-controls={open ? 'account-menu' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
              {username.charAt(0).toLocaleUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        open={open}
        id="account-menu"
        anchorEl={anchorEl}
        disableScrollLock={true}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={() => {
            navigate('/update')
            return handleClose
          }}
        >
          <ListItemIcon>
            <CloudDownloadIcon fontSize="small" />
          </ListItemIcon>
          Update
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
