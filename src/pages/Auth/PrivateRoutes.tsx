import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { User } from "../../types/auth";

function PrivateRoutes() {
  const { currentUser, setCurrentUser } = useAuth();
  const currUser: User = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (currentUser === undefined) {
      setCurrentUser(currUser);
    }
  }, []);
  return currUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
