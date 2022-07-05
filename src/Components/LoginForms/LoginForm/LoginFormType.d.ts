import * as reactHookForm from 'react-hook-form';

export type LoginFormProps = {
  handleSubmit: reactHookForm.UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => Promise<void>;
  register: reactHookForm.UseFormRegister<FieldValues>;
  errors: any;
};
