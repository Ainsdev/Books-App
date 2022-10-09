import { supabase } from "./clientSupaBase";

async function ImportSbData() {
    const { data, error } = await supabase
        .from("Books")
        .select();
    return error != null ? error : data;
}

async function importSbDataById(id: string) {
    const { data, error } = await supabase
        .from("Personal Books")
        .select('*')
        .eq("user", id);
    return error != null ? error : data;
}

async function updateSbData(id:string,read:boolean,book:string) {
    const { data, error } = await supabase
        .from("Personal Books")
        .update({ read: read })
        .match({ user: id, title: book });
    return error != null ? error : data;
}

export { ImportSbData, importSbDataById, updateSbData };