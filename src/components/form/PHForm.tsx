import { FormProvider, useForm } from "react-hook-form";

export default function PHForm({ onSubmit, children, defaultValue }) {
  const formConfig: TFormConfig = {};

  const method = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
