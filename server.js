const express = require("express") // Import Express
const fs = require("fs"); // Import FileSystem
const cors = require("cors"); // Import CORS

const app = express() // Creates an Express application instance

// Middleware: Enables Express to parse JSON bodies in requests  
app.use(express.json());  
app.use(cors());

// Start the server on port 3000 

app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000"); // Console log to indicate the server is running
});


// ==================== 1. POST Request (Add Data) ====================

app.post("/canciones", (req, res) => {
    // Extract the new song data from the request body (JSON)
    const nuevaCancion = req.body;     

    // Read the current songs from "repertorio.json"
    const canciones = JSON.parse(fs.readFileSync("./repertorio.json", "utf-8"));

    // Add the new song to the array
    canciones.push(nuevaCancion);

    // Save the updated array back to "repertorio.json"
    fs.writeFileSync("./repertorio.json", JSON.stringify(canciones, null, 2));

    // Send a confirmation response to the client
    res.send("Canción agregada con éxito");

});

// ==================== 2. GET Request (Retrieve Data) ====================

// GET request to "/canciones" - Returns the list of songs stored in "repertorio.json"

app.get("/canciones",(req, res) => {
    // Read the "canciones.json" file and parse it as a JavaScript array
    const canciones = JSON.parse(fs.readFileSync("./repertorio.json", "utf-8"));

    // Send the JSON array as a response
    res.json(canciones);
});

// ==================== 3. PUT Request (Update Data) ====================

app.put("/canciones/:id", (req, res) => {
    const { id } = req.params; // Extract the song ID from the request parameters
    const cancion = req.body; // Get the updated song data from the request body

    const canciones = JSON.parse(fs.readFileSync("repertorio.json")); // Read and parse the JSON file

    const index = canciones.findIndex(p => p.id == id); // Find the index of the song with the given ID
    canciones[index] = cancion; // Update the song at the found index

    fs.writeFileSync("repertorio.json", JSON.stringify(canciones)); // Write the updated song list back to the file

    res.send("Canción modificada con éxito"); // Send confirmation response
});


// ==================== 4. DELETE Request (Delete Data) ====================

app.delete("/canciones/:id", (req, res) => {
    const { id } = req.params; // Extract the song ID from the request parameters

    const canciones = JSON.parse(fs.readFileSync("repertorio.json")); // Read and parse the JSON file

    const index = canciones.findIndex(p => p.id == id); // Find the index of the song with the given ID

    canciones.splice(index, 1); // Remove the song from the array

    fs.writeFileSync("repertorio.json", JSON.stringify(canciones)); // Write the updated song list back to the file

    res.send("Canción eliminada con éxito"); // Send confirmation response
});
