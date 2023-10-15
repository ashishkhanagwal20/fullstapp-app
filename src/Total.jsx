const Total = ({ parts }) => {
  console.log(parts[0].exercises);
  return (
    <>
      <p>
        Total exercises are{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </>
  );
};

export default Total;
