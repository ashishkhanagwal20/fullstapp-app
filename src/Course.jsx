import Header from "./Header";
import Content from "./Content";
// import Total from "./Total";

const Course = ({ courses }) => {
  console.log("courses", courses);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          {/* <Total parts={course.parts.exercises} /> */}
        </div>
      ))}
    </div>
  );
};

export default Course;

{
  /* <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul> */
}
