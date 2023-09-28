const Home = () => {
  return (
    <>
      <a href="http://localhost:5173/usuarios">
        <button>Usuarios</button>
      </a>
      <a href="http://localhost:5173/usuarios/:pais">
        <button>Usuarios por pais</button>
      </a>
    </>
  );
};

export { Home };
