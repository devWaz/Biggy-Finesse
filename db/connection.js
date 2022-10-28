import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://admin:fawaz@biggy.ufr2qzs.mongodb.net/biggy?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log("Connected to db");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected" , () => {
    console.log("db disconnected");
})

export default connect;