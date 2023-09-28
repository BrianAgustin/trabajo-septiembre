import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function obtenerUsers() {
      const res = await fetch("https://randomuser.me/api/?results=3");
      const datos = await res.json();
      setUser(datos);
      localStorage.setItem("users", JSON.stringify(datos));
    }
    obtenerUsers();
  }, []);
  return (
    <div>
      <img src={user?.results.picture.large} alt="" />
    </div>
  );
};

export { Users };
