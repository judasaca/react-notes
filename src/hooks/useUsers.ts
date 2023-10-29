import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "axios";

const useUsers = () => {
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
  return { users, error, isLoading, setUsers, setError };
};
export default useUsers;
