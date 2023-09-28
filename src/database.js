import { mongoose } from "mongoose";
export async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/prueba',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log("connected database Ok");
    } catch (error) {
        console.log(error);
        console.log("no conecta a la bd :c ");
    }
    
}