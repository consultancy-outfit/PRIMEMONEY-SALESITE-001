import { useFormLib } from "@/hooks/use-form-lib";
import { errorSnackbar, successSnackbar } from "@/libs/snackbar.lib";
import { useState } from "react";
import * as Yup from "yup";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { methods, handleSubmit, reset } = useFormLib({
    defaultValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email or Username is required"),
      password: Yup.string().required("Password is required"),
    }),
  });
  const onSubmit = async () => {
    setIsLoading(true);
    // const apiDataParameter = {
    //   url: API_ENDPOINTS?.ENQUIRIES,
    //   body: {
    //     name: formData?.firstName + formData?.lastName,
    //     email: formData?.email,
    //     phoneNumber: formData?.phoneNumber,
    //     query: formData?.query,
    //   },
    //   headers: {
    //     "x-api-key": API_KEY,
    //   },
    // };

    try {
      // const response: any = await postDataAPI(apiDataParameter);
      successSnackbar("Form Submitted Successfully!");
      reset?.();
    } catch {
      errorSnackbar("Invalid Credentials");
    }
    setIsLoading(false);
  };
  return { methods, onSubmit, handleSubmit, isLoading };
};
