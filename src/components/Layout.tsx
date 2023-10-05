// import Head from "next/head";
// import { usePathname } from 'next/navigation'

// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import Prefooter from "./Prefooter";

// const Layout = (props: any) => {
//   const { children, ...customMeta } = props;
//   // const router = useRouter();
//   const pathname = usePathname()

//   const meta = {
//     title: "Halley",
//     description: `Halley is a landing page template built with Nextjs and Tailwindcss`,
//     image: "/images/seo/halley-banner.png",
//     type: "website",
//     ...customMeta,
//   };
//   return (
//     <div className="min-w-[350px] overflow-x-hidden">
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="robots" content="follow, index" />
//         <link href="/favicon.ico" rel="shortcut icon" />
//         <meta content={meta.description} name="description" />
//         <meta
//           property="og:url"
//           content={`https://halley.vercel.app${pathname}`}
//         />
//           <meta property="og:type" content="website" />
//         <meta property="og:site_name" content={meta.title} />
//         <meta property="og:description" content={meta.description} />
//         <meta property="og:title" content={meta.title} />
//         <meta property="og:image" content={meta.image} />
//       </Head>

//       <main id="skip" className="bg-green-500 dark:bg-red-500">
//         <Navbar />
//         {children}
//         <Prefooter />
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Layout;
