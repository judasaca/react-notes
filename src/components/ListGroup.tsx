function ListGroup() {
  const items = ["bogotá", "cali", "neiva", "manizales", "bucaramanga"];
  return (
    <>
      <h1>Lista</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
