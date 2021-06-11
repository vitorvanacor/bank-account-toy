import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { User } from "./User/User";
import { getUsers, postUser } from "./User/user-api";

export interface LoginProps {
  loginUser: (username: string) => void;
}

export default function Login({ loginUser }: LoginProps) {
  const queryKey = "users";
  const { data: users, isLoading } = useQuery<User[], Error>(queryKey, () =>
    getUsers()
  );

  const [username, setUsername] = useState("");
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation(
    (req: User) => postUser(req),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  return (
    <div>
      <label htmlFor="enter-username">Enter Username</label>
      <input
        id="enter-username"
        value={username}
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
        disabled={isCreating}
      />
      <button
        onClick={() => {
          mutate({ username: username });
        }}
        disabled={
          username.length <= 0 ||
          isCreating ||
          users?.some((u) => u.username === username)
        }
      >
        Create
      </button>
      <hr />
      {isLoading && <i>Fetching users...</i>}
      {users && users.length <= 0 ? "There are no users. Create one!" : null}
      {users
        ? users.map((u, index) => (
            <button key={index} onClick={() => loginUser(u.username)}>
              Enter as {u.username.toLocaleUpperCase()}
            </button>
          ))
        : null}
    </div>
  );
}
