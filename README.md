# 🎵 My Repertoire – Node.js & Express Application

A simple web application to manage a music repertoire. The app allows users to **add, view, edit, and delete songs** using a backend built with Node.js and Express.

## 🚀 Technologies Used

* Node.js
* Express.js
* Axios
* HTML + Bootstrap
* JSON file as a simple database

## 📂 Project Structure

DESAFIO-2-EXPRESS-MI-REPERTORIO
│
├── index.html        # Frontend user interface
├── server.js         # Express backend server
├── repertorio.json   # JSON file used as a simple database
├── package.json      # Project dependencies
└── node_modules
```

## ⚙️ Installation and Setup

1. Clone the repository:
git clone https://github.com/AleAuroraTobar/REPOSITORY_NAME.git

2. Navigate to the project folder:
cd REPOSITORY_NAME

3. Install dependencies:
npm install

4. Start the server:
node server.js

5. Open your browser and go to:
http://localhost:3000

## 📌 Features

* ➕ Add a new song
* 📋 View the list of songs
* ✏️ Edit an existing song
* ❌ Delete a song

All song data is stored in **repertorio.json**.

## 🔌 API Endpoints

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| GET    | /canciones     | Retrieve all songs |
| POST   | /canciones     | Add a new song     |
| PUT    | /canciones/:id | Update a song      |
| DELETE | /canciones/:id | Delete a song      |

## 👩‍💻 Author

Developed by **Alejandra Tobar** as part of learning backend development with Node.js and Express.
