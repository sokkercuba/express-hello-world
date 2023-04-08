import { FormEvent, useContext, useState } from 'react'
import { Box } from '@mui/material/'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { handleApiRequest } from '../../services'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { AppContext } from '../../store/StoreProvider'
import Visibility from '@mui/icons-material/Visibility'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function SignUp() {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()
  const [error, setInputError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const login = formData.get('login') as string
    const password = formData.get('password') as string
    const confirmpassword = formData.get('confirmpassword') as string

    if (password !== confirmpassword) {
      setInputError(true)
      return
    }

    const data = await handleApiRequest(
      '/api/auth/v1/signup',
      'POST',
      dispatch,
      { login, password }
    )

    const { error, status } = data

    if (error && status !== 200) return

    enqueueSnackbar('Your user has been successfully created.', {
      variant: 'success'
    })

    navigate('/login')
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
          Sign Up
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
              type="password"
              label="Password"
              autoComplete="password"
            />

            <TextField
              required
              fullWidth
              error={error}
              margin="normal"
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              autoComplete="password"
              onFocus={() => setInputError(false)}
              type={showPassword ? 'text' : 'password'}
              sx={{ backgroundColor: 'rgb(232,240,254)' }}
              helperText={error ? 'Passwords did not match' : ''}
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
          </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Me Up
          </Button>
        </Box>
        <Grid container>
          <Grid item typography="body2">
            Already have an account?{' '}
            <Link
              variant="body1"
              component="button"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
