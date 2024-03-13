import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../Actions/LoginAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Login = useSelector(state => state.Login)
    const { token } = Login
   
    useEffect(() => {
        if (token) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [token])




    const [userDetails, setuserDetails] = useState({
        email: "",
        password: ""
    })





    const LoginHander = () => {
        dispatch(LoginAction(userDetails))
    }


    return <>
        <div style={{ position: 'relative', top: 0, left: 0 }}>
            <AppBar
                position="absolute"
                sx={{
                    width: { sm: `100%` },
                    ml: { sm: `100%` },
                    zIndex: 1500
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div className="d-flex align-items-center justify-content-center" style={{ width: "100%", minHeight: "clac(100vh - 64px)", paddingTop: "4rem" }}>
            <Dialog open={true}>
                <DialogTitle>Login your Account.</DialogTitle>
                <hr className="m-0" />
                <DialogContent style={{ width: "400px" }}>
                    <label className="fw-bold text-muted">Email</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })}
                    />
                    <label className="fw-bold text-muted">Password</label>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })}
                    />
                </DialogContent>
                <DialogActions className="justify-content-center">
                    <Button onClick={LoginHander} variant="contained" fullWidth>Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    </>
}