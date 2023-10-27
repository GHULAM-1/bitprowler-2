export default function TransitionInput() {
  return (
    <>
      <div className="container  ">
        <form>
          <div className="laptop_lg:flex overflow-hidden laptop_lg:gap-[0.5rem]">
            <div className="group laptop_lg:w-[50%]">
              <input type="text" required bg-background />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>

            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
          </div>

          <div className="group">
            <input type="text" required bg-background />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Message</label>
          </div>

          <button className="flex justify-center items-center bg-primary rounded-[5rem] py-[1rem] px-[1.5rem]">
            submit {"-->"}
          </button>
        </form>
      </div>
    </>
  );
}
