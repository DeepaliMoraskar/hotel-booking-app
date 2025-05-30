import React, { useRef } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { Controller, useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import useAddCabins from "./hooks/useAddCabins";
import useEditCabins from "./hooks/useEditCabins";

export default function CreateCabinsForm({
  cabinUpdate = {},
  showForm,
  setShowForm,
}) {
  const fileInputRef = useRef();

  const { id: editId, ...editValues } = cabinUpdate;

  const isEdit = Boolean(editId);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: isEdit ? editValues : {},
  });

  const { addCabin, isCreating } = useAddCabins();
  
  const { editCabin, isEditing } = useEditCabins();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEdit)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // ✅ manually clear file input
            }
          },
        }
      );
    else
      addCabin(
        { ...data, image: data.image[0] },
        {
          onSuccess: (data) => {
            reset();
            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // ✅ manually clear file input
            }
          },
        }
      );
  };

  const onError = (err) => {
    console.log(err);
  };

  const checkDiscount = (value) =>
    parseInt(value) <= parseInt(getValues().regularPrice) ||
    "Discount should be less than regular price";

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"Cabin Name"} errorMsg={errors?.name?.message}>
        <Controller
          name="name"
          control={control}
          disabled={isWorking}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Input type="text" id="name" {...field} value={field.value ?? ""} />
          )}
        />
      </FormRow>
      <FormRow label={"Max Capacity"} errorMsg={errors?.maxCapacity?.message}>
        <Controller
          name="maxCapacity"
          control={control}
          rules={{
            required: "Capacity should be at least 1",
            min: { value: 1, message: "Capacity should be at least 1" },
          }}
          render={({ field }) => (
            <Input
              type="number"
              id="maxCapacity"
              disabled={isWorking}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
      </FormRow>
      <FormRow label={"Regular price"} errorMsg={errors?.regularPrice?.message}>
        <Controller
          name="regularPrice"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Input
              type="number"
              id="regularPrice"
              disabled={isWorking}
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
      </FormRow>
      <FormRow label={"Discount"} errorMsg={errors?.discount?.message}>
        <Controller
          name="discount"
          control={control}
          rules={{
            required: "This field is required",
            validate: (value) => checkDiscount(value),
          }}
          render={({ field }) => (
            <Input
              type="number"
              id="discount"
              {...field}
              disabled={isWorking}
              value={field.value ?? 0}
            />
          )}
        />
      </FormRow>
      <FormRow label={"Cabin photo"} errorMsg={errors?.image?.message}>
        <Controller
          name="image"
          control={control}
          rules={
            !isEdit && {
              required: "This field is required",
            }
          }
          render={({ field }) => (
            <FileInput
              id="image"
              accept="image/*"
              onChange={(e) => field.onChange(e.target.files)}
              ref={(el) => {
                field.ref(el);
                fileInputRef.current = el; // Store DOM ref
              }}
            />
          )}
        />
      </FormRow>
      <FormRow
        label={"Description for website"}
        errorMsg={errors?.description?.message}
      >
        <Controller
          name="description"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Textarea
              type="number"
              id="description"
              {...field}
              disabled={isWorking}
              value={field.value ?? ""}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            isEdit && setShowForm((showForm) => !showForm);
            !isEdit && reset(); // This will reset all controlled fields
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEdit ? "Edit Cabin" : "Save Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}
