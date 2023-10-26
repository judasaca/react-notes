import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/apiClient";
import userService, { User } from "../../services/user-service";

const ConnectionBackend = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setIsLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("/users/" + user.id).catch((error) => {
      setUsers(originalUsers);
      setError(error.message);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "jd" };
    setUsers([...users, newUser]);
    apiClient
      .post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]));
  };
  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p>{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(u)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ConnectionBackend;
