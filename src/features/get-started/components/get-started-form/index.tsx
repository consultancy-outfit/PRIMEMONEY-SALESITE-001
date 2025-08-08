"use client";
import { contactUsFormFields } from "./get-started-form.data";
import { useGetStarted } from "./use-get-started-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { Box, Container } from "@mui/material";
import { CustomText } from "@/components/text/custom-text";

const GetStartedForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useGetStarted();

  return (
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
        fontWeight="fontWeightMedium"
        color="common.dark"
        customStyles={{ textAlign: "center" }}
      >
        Begin Your Journey with Prime Money
      </HeadingText>
      <SubHeadingText
        variant="subtitle2"
        color="grey.500"
        fontWeight="fontWeightThin"
        customStyles={{ py: 2, textAlign: "center" }}
      >
        Join thousands using secure, real-time financial access. Whether you're
        a developer, fintech business, or individual — our platform helps you
        connect, innovate, and thrive.
      </SubHeadingText>
      <br />
      <Box
        sx={{
          mt: 2,
          width: "100%",
          background: "#F7F5F9",
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}
      >
        <CustomFormProvider
          methods={methods}
          onSubmit={handleSubmit(submitContactUs)}
        >
          <FormGrid formFieldsList={contactUsFormFields} size="large" />
          <br />
          <CommonLoadingButton
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            loading={isLoading}
            disabled={isLoading}
            customStyles={{
              backgroundColor: "common.dark",
              borderColor: "common.dark",
              fontSize: "18px",
              color: "common.white",
              mt: 1,
            }}
            fullWidth
          >
            {isLoading ? <CommonCircularProgress /> : "Submit"}
          </CommonLoadingButton>
        </CustomFormProvider>
      </Box>
    </Container>
  );
};

export default GetStartedForm;
