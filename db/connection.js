import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL , {
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