import ButtonArrowSVG from "../../../public/buttonArrowSVG";

export default function TransitionInput() {
  return (
    <>
      <form action="" className="w-full flex-col justify-center items-center">
        {/* email and name div */}
        <div className="flex flex-col w-full TABLET:flex-row TABLET:gap-[7.875rem]">
          <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:mt-[0rem] TABLET:w-[240px] SMALL_LAPTOP:w-[50%]">
            <label
              htmlFor="name"
              className="font-medium TABLET:text-Tablet-Large-Text "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none"
            />
          </div>

          <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:w-[240px] TABLET:mt-[0rem] SMALL_LAPTOP:w-[50%]">
            <label
              htmlFor="name"
              className="font-medium TABLET:text-Tablet-Large-Text"
            >
              Email
            </label>
            <input
              type="text"
              name="name"
              className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:w-[610px] TABLET:my-[3rem] TABLET:mb-[7rem] SMALL_LAPTOP:w-full">
          <label
            htmlFor="name"
            className="font-medium TABLET:text-Tablet-Large-Text"
          >
            Message
          </label>
          <input
            type="text"
            name="name"
            className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none"
          />
        </div>

        <div className="pt-[3rem] flex justify-center TABLET:justify-start  w-full TABLET:mt-[0rem]  ">
          <button className="  px-[2rem] py-[1rem]   flex gap-[0.5rem] justify-center items-center bg-themeColor rounded-[48px]  TABLET:py-[1rem] TABLET:px-[2rem]  dark:text-white text-black text-Mobile-S-Text TABLET:text-Tablet-Large-Text     SMALL_LAPTOP:bg-transparent SMALL_LAPTOP:px-0 SMALL_LAPTOP:py-0 group SMALL_LAPTOP:hover:bg-themeColor SMALL_LAPTOP:hover:px-[2rem] SMALL_LAPTOP:hover:py-[1rem]   SMALL_LAPTOP:transition-all SMALL_LAPTOP:ease-linear ">
            submit
            <ButtonArrowSVG className="dark:fill-white fill-black w-[24px] TABLET:w-[56px]"></ButtonArrowSVG>
          </button>
        </div>
      </form>
    </>
  );
}

// <div className="container  text-black flex-col justify-center items-center text-Mobile-S-Heading w-ful">
//   <form className="w-full">
//     <div className="laptop_lg:flex overflow-hidden laptop_lg:gap-[0.5rem] w-full ">
//       <div className="w-full bg-orange-500 form-group laptop_lg:w-[50%]">
//         <input
//           type="text"
//           required
//           className=" bg-red-400 border-b-black dark:border-b-white dark:text-white text-black border-4"
//         />
//         {/* <span className="highlight"></span> */}
//         {/* <span className="bar"></span> */}
//         <label className="text-black dark:text-white text-Mobile-S-Heading font-medium mb-[4%] w-full bg-green-600">
//           Name
//         </label>
//       </div>

//       <div className="form-group laptop_lg:w-[50%]">
//         <input
//           type="text"
//           required
//           className="dark:text-white text-black dark:border-b-white border-b-black border-4"
//         />
//         <span className="highlight"></span>
//         <span className="bar"></span>
//         <label className="text-black dark:text-white text-Mobile-S-Heading font-medium">
//           Email
//         </label>
//       </div>
//     </div>

//     <div className="form-group laptop_lg:mt-[3rem]">
//       <input
//         type="text"
//         required
//         bg-background
//         className="dark:text-white text-black border-b-black dark:border-b-white border-4"
//       />
//       <span className="highlight"></span>
//       <span className="bar"></span>
//       <label className="text-black dark:text-white text-Mobile-S-Heading font-medium">
//         Message
//       </label>
//     </div>

//     <div className="flex justify-center w-full">
//       <button className="flex justify-center items-center bg-primary rounded-[5rem] py-[1rem] px-[1.5rem] dark:text-white text-black text-Mobile-S-Text">
//         submit {"-->"}
//       </button>
//     </div>
//   </form>
// </div>;
