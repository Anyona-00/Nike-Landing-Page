import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className=" flex max-lg:flex-col max-container justify-between items-center gap-10"
      id="contact-us"
    >
      <h3 className="font-bold font-palanquin text-4xl leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
