import { Box } from '@mui/material/'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { footerItems } from '../Navigation/navItems'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.sokkercuba.com/">
        Sokker Cuba
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export function Footer() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        mt: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            {footerItems.map(({ value, path, icon }) => (
              <Link
                key={value}
                variant="body2"
                color="inherit"
                underline="hover"
                component="button"
                onClick={() => navigate(path)}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {icon}
                {value}
              </Link>
            ))}
          </Breadcrumbs>
        </Box>
        <Divider sx={{ m: '16px' }} />
        <Container maxWidth="sm">
          <Typography variant="body1">
            La vieja escuela del Sokker Cubano! Dudas, Consultas, pregunte sin
            pena! Si desea añadir a alguien pase el link del grupo.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}
