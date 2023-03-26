import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Box } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Navigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../store/StoreProvider";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getUserData, handleLogin } from "../../services/sokkerApiServices";

export default function SignIn() {
  const { state, dispatch } = useContext(AppContext);
  const { loggedIn } = state;
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   console.log("🚀 ~ state:", state);
  // }, [state]);

  if (loggedIn) return <Navigate to="/" />;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const result = await handleLogin(
      {
        login: formData.get("email") as string,
        password: formData.get("password") as string,
        remember: checked,
      },
      dispatch
    );

    const cookies = new Cookies();
    console.log("🚀 ~ cookies:", cookies);
    const userID = cookies.get("PHPSESSID");
    console.log("🚀 ~ userID:", userID);

    if (result) {
      await getUserData(dispatch);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            autoFocus
            id="email"
            name="email"
            margin="normal"
            label="Email Address"
            autoComplete="email"
          />
          <TextField
            required
            fullWidth
            id="password"
            margin="normal"
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
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

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="https://sokker.org/en/app/reset-password/"
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://sokker.org/en/app/register/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
