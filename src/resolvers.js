import { task } from "./sample";
import { Mascota } from "./models/Mascotas";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hola mundo con GraphQL'
        },
        tasks() {
            return task
        },
        search(root, args) {
            var result = task.filter(v => {
                return v._id == args._id
            });
            return result;

        }
    },
    Mutation:{
        createTask(_,{input}){
            input._id = task.length
            task.push(input);
            console.log(task);
            return input;
        },

        async createMascotas(_, {input}){
            const nuevaMascota = Mascota(input)
            await nuevaMascota.save();
            console.log(nuevaMascota);
           // return nuevaMascota
        }
    }
}