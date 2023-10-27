export default function TransitionInput() {
  return (
    <>
      <div className="container  text-black">
        <form>
          <div className="laptop_lg:flex overflow-hidden laptop_lg:gap-[0.5rem]">
            <div className="group laptop_lg:w-[50%]">
              <input
                type="text"
                required
                bg-background
                className="border-b-black dark:border-b-white dark:text-white text-black border-4"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black dark:text-white">Name</label>
            </div>

            <div className="group laptop_lg:w-[50%]">
              <input
                type="text"
                required
                className="dark:text-white text-black dark:border-b-white border-b-black border-4"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="text-black dark:text-white ">Email</label>
            </div>
          </div>

          <div className="group laptop_lg:mt-[3rem]">
            <input
              type="text"
              required
              bg-background
              className="dark:text-white text-black border-b-black dark:border-b-white border-4"
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="text-black dark:text-white">Message</label>
          </div>

          <button className="flex justify-center items-center bg-primary rounded-[5rem] py-[1rem] px-[1.5rem] dark:text-white text-black">
            submit {"-->"}
          </button>
        </form>
      </div>
    </>
  );
}
