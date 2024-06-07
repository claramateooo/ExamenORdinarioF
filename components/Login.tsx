import { FunctionComponent } from "preact";

type Props = { message?: string };
const Login: FunctionComponent<Props> = ({ message }) => (
  <div class="login-container">
    <h2>Login</h2>
    {message && <p class="error-message">{message}</p>}
    <form method="POST" action="/login">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" required />
      <label for="password">Password</label>
      <input type="text" id="password" name="password" required />
    </form>
    <button type="submit">Login</button>
    <p class="register-link">
      Dont have an account?<a href="/register">Register</a>
    </p>
  </div>
);
export default Login;
