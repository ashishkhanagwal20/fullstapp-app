const Content = ({ parts }) => {
  console.log(parts[0].name);
  return (
    <>
      <p>{parts[0].name}</p>
      <p>{parts[1].name}</p>
      <p>{parts[2].name}</p>
    </>
  );
};

export default Content;
