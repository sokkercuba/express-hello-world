import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Box } from '@mui/material/'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { Navigate } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import { handleApiRequest } from '../../services'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import { AppContext } from '../../store/StoreProvider'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import { setAll, setLogin, setUsername } from '../../store/actions'
import FormControlLabel from '@mui/material/FormControlLabel'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function SignIn() {
  const { state, dispatch } = useContext(AppContext)
  const { loggedIn } = state
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  if (loggedIn) return <Navigate to="/" />

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const data = await handleApiRequest(
      '/api/auth/v1/login',
      'POST',
      dispatch,
      {
        login: formData.get('login') as string,
        password: formData.get('password') as string
      }
    )

    const {
      error,
      status,
      user: { login }
    } = data

    if (error || status !== 200 || !login) return

    setLogin(dispatch, true)
    setUsername(dispatch, login)

    const allData = await handleApiRequest(
      `/api/v1/users/${login}`,
      'GET',
      dispatch
    )

    const {
      error: error2,
      status: status2,
      user, juniors, cweek, tsummary, players, training
    } = allData

    if (error2 || status2 !== 200) return

    setAll(dispatch, { user, juniors, cweek, tsummary, players, training })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: '100%' }}
        >
          <FormControl fullWidth>
            <TextField
              required
              fullWidth
              autoFocus
              id="login"
              name="login"
              margin="normal"
              label="Username"
              autoComplete="Username"
            />

            <TextField
              required
              fullWidth
              id="password"
              margin="normal"
              name="password"
              label="Password"
              autoComplete="password"
              type={showPassword ? 'text' : 'password'}
              sx={{ backgroundColor: 'rgb(232,240,254)' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox
                  color="primary"
                  checked={checked}
                  onChange={handleChange}
                />
              }
            />
          </FormControl>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item typography="body2">
            Don't have an account?{' '}
            <Link
              variant="body1"
              component="button"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
