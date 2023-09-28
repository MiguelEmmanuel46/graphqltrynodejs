/*step02*///import {mascotas} from './sample';
import Mascotas from '../src/models/Mascotas'


export const resolvers = {
    Query: {
        hola: () => {
            return 'Hello world'
        },
        async mascotas() {
            return await Mascotas.find();//arroja todos
        }
    },
    Mutation: {
        async createMascota(_, { input }) {
            const nuevaMascota = Mascotas(input)
            await nuevaMascota.save()
            console.log(nuevaMascota)
            return nuevaMascota
        },
        async updateMascota(_, { _id, input }) {
            return await Mascotas.findByIdAndUpdate(_id, input, { new: true });
           // return Mascotas.findById(_id);
        },
        async deleteMascota(_, { _id }) {
            return await Mascotas.findByIdAndDelete(_id);
        }
        /*,
        async deleteMascota(_, { _id }) {
            return await Mascotas.findByIdAndDelete(_id)
        }*/
    }
}