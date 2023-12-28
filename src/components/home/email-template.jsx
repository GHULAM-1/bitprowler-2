import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
export const Email = ({ name }) => {
  const previewText = `bitprowler team`;

  return (
    <Html style={main}>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={paragraph}>Hey {name} ,</Text>
            <Text style={paragraph}>
              Thank you for reaching out to bitprowler. We acknowledge receipt
              of your email and appreciate your interest in our services. Our
              team is currently reviewing your message and will respond as soon
              as possible. In the meantime, you can visit our website for more
              information about our firm
            </Text>
            <Text style={paragraph}>Best Regards,</Text>
            <Text style={paragraph}>team , bitprowler</Text>

            <Button style={button} href="https://www.bitprowler.com/">
              website
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
const paragraph = {
  color: "#000000",
};

const main = {
  fontSize: "24px",
  lineHeight: "1.4",
  color: "#000000",
  backgroundColor: "#ffffff",
  padding: "10px 10px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  backgroundColor: "#ffffff",

  // height: "700px",
};

const button = {
  backgroundColor: "#cc2c14",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
};

// import { Tailwind } from "@react-email/tailwind";
// import { Container } from "@react-email/container";
// import { Html } from "@react-email/html";
// import { Head } from "@react-email/head";

// const Email = ({ name }: any) => {
//   return (
//     <Tailwind
//       config={{
//         theme: {
//           screens: {
//             TABLET: "700px",
//             SMALL_LAPTOP: "1031px",
//             LAPTOP: "1515px",
//             LARGE_LAPTOP: "1925px",
//           },
//           extend: {
//             colors: {
//               brand: "#007291",
//             },
//           },
//         },
//       }}
//     >
//       <Html>
//         <Head>
//           <Container className="text-white text-[1rem] SMALL_LAPTOP:text-[3rem] bg-black">
//             <Container className=" h-full flex">{name}</Container>
//           </Container>
//         </Head>
//       </Html>
//     </Tailwind>
//   );
// };

// export { Email };
