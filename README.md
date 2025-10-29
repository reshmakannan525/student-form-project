🧑‍🎓 Student Registration App

A full-stack MERN-based Student Registration System that allows students to enter their details (Name, Email, Course) and stores them securely in MongoDB.
Admins can later view all student records via the backend.

🚀 Features

✅ Student can register with name, email, and course.
✅ Data is stored in MongoDB Atlas securely.
✅ Admin can fetch and view student details.
✅ Backend built with Node.js + Express.js + Mongoose.
✅ Frontend built with React.js (modern UI and responsive).

🛠️ Tech Stack
Layer	Technology
Frontend	React.js, HTML, CSS
Backend	Node.js, Express.js
Database	MongoDB Atlas
Version Control	Git, GitHub
⚙️ Project Structure
student-form-project/
 ├── student-form/              # React Frontend
 ├── student-app-backend/       # Express + MongoDB Backend
 ├── .gitignore
 ├── README.md
 └── package.json

⚡ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/reshmakannan525/student-form-project.git
cd student-form-project

2️⃣ Setup Backend
cd student-app-backend
npm install


Create a .env file:

MONGO_URL=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/studentDB
PORT=5000


Run the backend:

node server.js

3️⃣ Setup Frontend
cd ../student-form
npm install
npm start

🧠 How It Works

Student fills out a form with their name, email, and course.

The data is sent to the Express backend API.
Admin can view stored student records via API or admin dashboard.
Backend stores the data in MongoDB Atlas.




