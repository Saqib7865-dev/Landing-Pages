const MailingList = () => {
  return (
    <div className="w-full p-10 md:px-32 md:py-14 bg-blue-50 relative">
      <h3 className="text-xl md:text-3xl font-bold md:font-semibold text-center">
        Beautify Your Space
      </h3>
      <p className="text-center max-w-96 mx-auto py-3 md:py-7 text-sm md:text-base">
        Sign up to receive inspiration, product updates, and special offers from
        our team.
      </p>
      <div className="inputBox mx-auto w-full flex items-center justify-center pt-3 md:pt-6 rounded">
        <input
          type="email"
          name=""
          id=""
          className="bg-white p-1 md:p-2 outline-none border border-[#054C73] border-r-0 rounded-l"
          placeholder="example@gmail.com"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-[#054C73] text-white p-1 md:p-2 cursor-pointer border border-[#054C73] rounded-r"
        />
      </div>
    </div>
  );
};

export default MailingList;
