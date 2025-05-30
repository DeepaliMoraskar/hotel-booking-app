import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error("Cabins could not");
    }

    return data;
}

export async function addEditCabin(newCabin, id) {

    console.log(newCabin, id)

    const hasImagePath = typeof newCabin?.image === "string" && newCabin?.image?.startsWith(supabaseUrl);

    //https://wnwgvezaajkzmpssahrr.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

    const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = hasImagePath ? newCabin?.image :`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from('cabins');
    
    if(!id) query = query.insert([{ ...newCabin, image:imagePath }]);

    if(id) query = query.update([{ ...newCabin, image:imagePath }]).eq('id', id);
    
    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created");
    }

    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    if (storageError) {
        deleteCabin(newCabin.id);
        console.error(error);
        throw new Error("Cabin deleted because Upload failed");
    }

    return data;

}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be deleted");
    }
    return data;
}