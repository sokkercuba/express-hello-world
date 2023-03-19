import axios from "axios";
import { Box } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { LoadingButton } from "@mui/lab";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../store/StoreProvider";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { setLoading, setLogin, setUsername } from "../../store/actions";

export default function SignIn() {
  const { state, dispatch } = useContext(AppContext);
  const { loading } = state;
  const [checked, setChecked] = useState(false);
  console.log("🚀 ~ loading:", loading);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setLoading(dispatch, true);
    const apiData = await axios.post("/api/v1/login", {
      login: data.get("email"),
      password: data.get("password"),
      remember: checked,
    });

    setLoading(dispatch, false);
    console.log("🚀 ~ apiData:", apiData);

    const { status, statusText, data: userData } = apiData;

    if (status === 200 && statusText === "OK") {
      setLogin(dispatch, true);
      setUsername(dispatch, userData?.data?.login || "");
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
