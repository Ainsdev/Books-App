import AddToDataBase from "../helpers/interfaces";
import { supabase } from "./clientSupaBase";

export default async function sendPersonalBooks(params: AddToDataBase) {
    const userId = supabase.auth.user()?.id
    try {
        const { data, error } = await supabase
            .from('Personal Books')
            .insert([
                {
                    user: userId,
                    type: params.type,
                    category: params.categorie,
                    title: params.name,
                    author: params.author,
                    image: params.image,
                    valoration: params.valoration,
                    links: params.links,
                    read: params.readed,
                    description: params.description,
                    date: params.date,
                },
            ])
        console.log('Completed', data, error)
    } catch (error) {
        console.log(error)
    }
}
export async function sendBooks(params: AddToDataBase) {
    const userId = supabase.auth.user()?.id
    try {
        const { data, error } = await supabase
            .from('Books')
            .insert([
                {
                    user: userId,
                    type: params.type,
                    categorie: params.categorie,
                    title: params.name,
                    author: params.author,
                    image: params.image,
                    date: params.date,
                    description: params.description,
                    valoration: params.valoration,
                    links: params.links,
                },
            ])
        console.log('Completed', data, error)
    } catch (error) {
        console.log(error)
    }
}