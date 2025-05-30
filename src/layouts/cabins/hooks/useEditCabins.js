import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import { addEditCabin } from '../../../services/apiCabins';

export default function useEditCabins() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => addEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin added");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {editCabin, isEditing}
}
