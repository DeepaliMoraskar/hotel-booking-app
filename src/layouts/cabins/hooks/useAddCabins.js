import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import { addEditCabin } from '../../../services/apiCabins';

export default function useAddCabins() {
    const queryClient = useQueryClient();
    const { mutate: addCabin, isPending: isCreating } = useMutation({
        mutationFn: addEditCabin,
        onSuccess: () => {
            toast.success("New cabin added");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { addCabin, isCreating }
}
