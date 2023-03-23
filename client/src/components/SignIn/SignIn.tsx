import axios from "axios";
import { Box } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../store/StoreProvider";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import {
  setError,
  setErrorMsg,
  setLoading,
  setLogin,
  setUsername,
} from "../../store/actions";
import { parseSokkerErrors } from "../../services/apiErrorHandler";

const VITE_SOKKER_URL = import.meta.env.VITE_SOKKER_URL;

export default function SignIn() {
  const { state, dispatch } = useContext(AppContext);
  const { loading } = state;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("🚀 ~ state:", state);
  }, [state]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setLoading(dispatch, true);

    await axios
      .post(`${VITE_SOKKER_URL}/api/auth/login`, {
        login: formData.get("email") as string,
        password: formData.get("password") as string,
        remember: checked,
      })
      .then((response) => {
        const { status, data } = response || null;
        console.log("🚀 ~ response:", response);

        if (status === 200 && !data?.error) {
          setLogin(dispatch, true);
        }
        if (data?.error) {
          setError(dispatch, true);
          setErrorMsg(dispatch, parseSokkerErrors(data?.error));
        }
      })
      .catch((error) => {
        console.log("🚀 ~ error:", error);
        setError(dispatch, true);
        setErrorMsg(dispatch, error?.message || error);
      });

    setLoading(dispatch, false);
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

          <LoadingButton
            fullWidth
            type="submit"
            loading={loading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
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
