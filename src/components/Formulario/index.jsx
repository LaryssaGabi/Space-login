import { Box, Form, LoginBox, SubmitButton, Superior, Titulo, UserBox } from "./styler";
import Logo from '../../assets/viagem-ao-espaco.png'

function Formulario() {
    return (
        <>
            <Superior>
                <div>
                    <h1>Space Vision</h1>
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </Superior>
            <Box>
                <LoginBox>
                    <Titulo>Login</Titulo>
                    <Form>
                        <UserBox>
                            <input required type="email" placeholder=" " />
                            <label>Email</label>
                        </UserBox>
                        <UserBox>
                            <input required type="password" placeholder=" " />
                            <label>Password</label>
                        </UserBox>
                        <SubmitButton href="#">Submit</SubmitButton>
                    </Form>
                </LoginBox>
            </Box>
        </>
    );
}

export default Formulario;