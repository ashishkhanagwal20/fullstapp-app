const Content = ({ parts }) => {
  console.log("parts", parts);
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {console.log(part)}
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
