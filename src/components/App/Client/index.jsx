import React, { memo, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { loadImage } from "@Tools/image-loader";

const PASSWORD = "1109";
const REAL_PASSWORD = "039";

function AppClient() {
  /* Global & local State */
  const [validPassword] = useState(PASSWORD);
  const [inputPassword, setInputPassword] = useState("");
  const [confirm, setIsConfirm] = useState(false);
  const [errorPop, setErrorPop] = useState("");
  /* Functions */
  const onChange = (event) => {
    setInputPassword(event.target.value);
  };
  const onConfirm = () => {
    if (validPassword === inputPassword) {
      setIsConfirm(true);
    } else {
      setErrorPop("是錯的呢 XD");
      setTimeout(() => {
        setErrorPop("");
      }, 2000);
    }
  };
  /* Main */
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: `url(${loadImage("test.jpeg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mt: 6,
          width: "600px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {confirm ? (
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" color="textPrimary">
                {`恭喜得到解鎖密碼 : ${REAL_PASSWORD}`}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  mb: 2,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "30px" }}
                  variant="h4"
                  color="textPrimary"
                >
                  請輸入魔法密碼
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "300px",
                  mb: 2,
                  position: "relative",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  fullWidth
                  value={inputPassword}
                  placeholder="輸入密碼"
                  onChange={onChange}
                />
              </Box>
              <Box sx={{ width: "300px", position: "relative" }}>
                <Button
                  fullWidth
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={onConfirm}
                  disabled={!inputPassword}
                >
                  嘗試確認
                </Button>
              </Box>
            </Box>
          )}
          {errorPop && (
            <Box
              sx={{
                mt: 2,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" color="textPrimary">
                {errorPop}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AppClient);
