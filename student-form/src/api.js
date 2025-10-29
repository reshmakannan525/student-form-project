// ✅ Correct BASE_URL
const BASE_URL = "http://localhost:5000";

// ✅ POST (add student)
export const addStudent = async (student) => {
  try {
    const res = await fetch(`${BASE_URL}/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    if (!res.ok) throw new Error("Failed to add student");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// ✅ GET (fetch students)
export const getStudents = async () => {
  try {
    const res = await fetch(`${BASE_URL}/students`);
    if (!res.ok) throw new Error("Failed to fetch students");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
