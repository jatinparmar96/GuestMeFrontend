//@ts-check
import { useForm } from "react-hook-form";
import { SubmitButton } from "../../Components/SubmitButton/SubmitButton";
import { API_URL } from "../../Utils/Constants";
import {
  getSpeakerInformationFromLocalStorage,
  setSpeakerInformation,
} from "../../Utils/Utils";

export const SpeakerLoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = (
        await (
          await fetch(`${API_URL.SPEAKER_LOGIN}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        ).json()
      ).token;

      if (token === undefined) {
        return;
      }

      const result = setSpeakerInformation(token);
      if (result) {
        console.log("res: ", getSpeakerInformationFromLocalStorage());
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <label>Email:</label>
        <input type="text" {...register("email", { required: true })} />
        {errors.email?.type === "required" && "Email is required"}
        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password?.type === "required" && "Password is required"}
        <input type="submit" value="S" />
      </div>
      <div className="submitButtonContainer">
        <SubmitButton
          text="LogIn"
          onClick={handleSubmit(onSubmit)}
        ></SubmitButton>
      </div>
    </div>
  );
};
