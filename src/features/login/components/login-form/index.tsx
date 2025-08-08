import { CommonButton } from "@/components/buttons/common-button";
import { BodyText } from "@/components/text/body-text";
import { HeadingText } from "@/components/text/heading-text";
import { Box, Container } from "@mui/material";
import { GoogleIcon } from "../../assets";
import { useLoginForm } from "../../hooks/useLoginForm";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import TextFormFields from "@/components/form-fields/text-form-field";
import Link from "next/link";
import { CustomText } from "@/components/text/custom-text";

const LoginForm = () => {
  const { methods, onSubmit, handleSubmit } = useLoginForm();
  return (
    <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingText
          variant="h4"
          color={"common.dark"}
          customStyles={{ py: 2 }}
        >
          Welcome back!
        </HeadingText>
        <CustomText
          variant="subtitle1"
          color="grey.500"
          customStyles={{ lineHeight: 2.5, mb: 5 }}
        >
          Please enter your details to get started
        </CustomText>
        <CommonButton
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
          customStyles={{
            borderRadius: 2,
            my: 2,
            opacity: 0.8,
            color: "common.dark",
          }}
        >
          Sign In with Google
        </CommonButton>
        <BodyText
          variant="body1"
          color={"common.dark"}
          fontWeight={"fontWeightBold"}
          customStyles={{ py: 2, textAlign: "center" }}
        >
          Or
        </BodyText>
        <Box
          sx={{
            mt: 2,
            width: "100%",
            background: "#F7F5F9",
            borderRadius: 2,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            md: 2,
          }}
        >
          <TextFormFields
            name="email"
            label="Email"
            required
            placeholder="Username or email"
            fullWidth
          />
          <TextFormFields
            name="password"
            label="Password"
            placeholder="Password"
            required
            fullWidth
          />
          <BodyText
            variant="body2"
            color="common.dark"
            fontWeight="fontWeightSemiBold"
            customStyles={{ textAlign: "right", mt: 2 }}
          >
            <Link href="/contact-us">Forgot password?</Link>
          </BodyText>
          <CommonButton
            variant="contained"
            customStyles={{
              backgroundColor: "common.dark",
              borderColor: "common.dark",
              fontSize: "18px",
              color: "common.white",
              mt: 2,
            }}
            primary
            fullWidth
            type="submit"
          >
            Sign in
          </CommonButton>
        </Box>
      </Container>
    </CustomFormProvider>
  );
};

export default LoginForm;
