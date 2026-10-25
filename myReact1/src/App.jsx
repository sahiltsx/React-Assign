const students = [
  { id: 1, name: "Aarav Sharma", course: "Computer Science", grade: "A" },
  { id: 2, name: "Priya Verma", course: "Electronics", grade: "B" },
  { id: 3, name: "Rohan Singh", course: "Mechanical", grade: "C" },
];

function StudentCard({ student }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px", borderRadius: "8px" }}>
      <h3>{student.name}</h3>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Information</h1>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}