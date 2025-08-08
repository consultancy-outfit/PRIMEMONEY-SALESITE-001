"use client";

import { contactUsFormFields } from "./contact-form.data";
import { useContactUs } from "./use-contact-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { Box, Grid } from "@mui/material";
import { HeadingText } from "@/components/text/heading-text";
import { CustomText } from "@/components/text/custom-text";

const ContactForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useContactUs();

  return (
    <Grid container p={2} spacing={2}>
      <Grid size={{ lg: 6, xs: 12 }}>
        <HeadingText variant="h3">Send Us a Message</HeadingText>
        <CustomText
          variant="subtitle2"
          color={"grey.500"}
          customStyles={{
            width: { md: "75%", xs: "100%" },
          }}
        >
          Have a technical question, media inquiry, or want a demo? Fill out the
          form and we’ll be in touch.
        </CustomText>
        <Box display={"flex"} gap={4} py={6}>
          <Box>
            <CustomText
              variant="subtitle1"
              color={"common.dark"}
              fontWeight={"fontWeightBold"}
            >
              Email
            </CustomText>
            <CustomText variant="subtitle2" color={"grey.500"}>
              Info@primemoney.co.uk
            </CustomText>
          </Box>
          <Box>
            <CustomText
              variant="subtitle1"
              color={"common.dark"}
              fontWeight={"fontWeightBold"}
            >
              Phone
            </CustomText>
            <CustomText variant="subtitle2" color={"grey.500"}>
              +44 (0) 20 814 95431
            </CustomText>
          </Box>
        </Box>
        <Box>
          <CustomText
            variant="subtitle1"
            color={"common.dark"}
            fontWeight={"fontWeightBold"}
          >
            Office Address
          </CustomText>
          <CustomText variant="subtitle2" color={"grey.500"}>
            Ground Floor Suite 13 Lanark Square, London E14 9QD
          </CustomText>
        </Box>
      </Grid>
      <Grid
        size={{ lg: 6, xs: 12 }}
        sx={{
          background: "#F7F5F9",
          borderRadius: 2,
          p: 2,
        }}
      >
        <CustomFormProvider
          methods={methods}
          onSubmit={handleSubmit(submitContactUs)}
        >
          <FormGrid formFieldsList={contactUsFormFields} size="large" />
          <br />
          <Box display={"flex"} justifyContent={"flex-end"}>
            <CommonLoadingButton
              variant="contained"
              type="submit"
              size="large"
              loading={isLoading}
              disabled={isLoading}
              onClick={() => handleSubmit(submitContactUs)}
              customStyles={{
                backgroundColor: "common.dark",
                borderColor: "common.dark",
                fontSize: "18px",
                color: "common.white",
              }}
            >
              {isLoading ? <CommonCircularProgress /> : "Submit "}
            </CommonLoadingButton>
          </Box>
        </CustomFormProvider>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
