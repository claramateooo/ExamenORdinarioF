import { FunctionComponent } from "preact";

const Register: FunctionComponent = () => (
  <div class="login-container">
    <h2>Register</h2>

    <form method="POST" action="/login">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required />
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
export default Register;
