import { useForm, Controller } from "react-hook-form";

const ControlledForm = () => {
    const { control } = useForm();
  return (
   <Controller
      name="username"
      control={control}
      render={({ field }) => (
        <input {...field} />
      )}
    />
  )
}

export default ControlledForm
