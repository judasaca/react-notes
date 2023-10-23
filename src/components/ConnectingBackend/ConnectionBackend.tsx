import axios, { AxiosError, CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const ConnectionBackend = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        console.log("SOLICITANDO");
        setIsLoading(true);
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(res.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ConnectionBackend;
