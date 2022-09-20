import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <div>
            <input
              name="username"
              onChange={onChangeUsername}
              placeholder="Enter ypour user name"
              type="text"
              value={username}
            />
          </div>
        </label>
      </div>
      <div>
        <label>
          Username
          <div>
            <input
              name="username"
              onChange={onChangePassword}
              placeholder="Enter ypour user name"
              type="password"
              value={password}
            />
          </div>
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
