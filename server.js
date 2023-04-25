const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./db/connection");

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDatabase();
    
    app.listen(PORT, (error) => {
      if(error){
        console.log(error, "Server launch error");
        return;
      }
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log( "DB launch error", error);
    
  }
};

startServer();