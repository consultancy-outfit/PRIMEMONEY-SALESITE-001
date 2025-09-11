import TextFormFields from "@/components/form-fields/text-form-field";
import * as Yup from "yup";

export const contactUsFormValidationSchema = Yup?.object()?.shape({
  firstName: Yup?.string()?.trim()?.required("First name is required"),
  lastName: Yup?.string()?.trim()?.required("Last name is required"),
  email: Yup?.string()
    ?.trim()
    ?.email("Invalid email")
    ?.typeError("Invalid email")
    ?.required("Email is required"),
  phoneNumber: Yup.string()
    .trim()
    .required("Phone number is required")
    .matches(/^\+[0-9]{10,15}$/, "Enter a valid phone number"),
});

export const contactUsFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export const contactUsFormFields = [
  {
    _id: 1,
    componentProps: {
      name: "firstName",
      label: "First Name",
      // placeholder: "Enter your first name",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 2,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      // placeholder: "Enter your last name",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 3,
    componentProps: {
      name: "email",
      label: "Email",
      // placeholder: "Enter your email",
      required: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 4,
    componentProps: {
      name: "phoneNumber",
      label: "Phone Number",
      required: true,
      type: "tel",
      onInput: (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/[^0-9+]/g, "");
      },
    },
    component: TextFormFields,
    md: 12,
  },
];
