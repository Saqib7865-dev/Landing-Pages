import ContactImg from "../assets/ContactImg1.jpg";
const Contact = () => {
  return (
    <section
      id="contact"
      className={`pt-7 md:pt-14 pb-4 md:pb-10 px-5 md:px-10 w-full`}
      style={{
        backgroundImage: `url(${ContactImg})`,
        backgroundPosition: "top 30%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="contact">
        <h2 className="text-2xl md:text-5xl uppercase font-semibold font-mono text-white">
          Got Questions? We're Here!
        </h2>
        <div className="contact-section flex items-center justify-between w-fit h-full md:space-x-10">
          <div className="left w-full max-w-[700px] my-5 md:my-10">
            <form className="form w-full h-full space-y-3 md:space-y-6">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                autoComplete="off"
                className="outline-none p-2 md:p-4 bg-white/10 backdrop-blur-md border border-white/40 text-lg rounded text-white w-full shadow font-mono"
              />
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                autoComplete="off"
                className="outline-none p-2 md:p-4 bg-white/10 backdrop-blur-md border border-white/40 text-lg rounded text-white w-full shadow font-mono"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Please leave a message"
                className="outline-none p-2 md:p-4 bg-white/10 backdrop-blur-md border border-white/40 text-lg rounded text-white w-full shadow font-mono resize-none"
                rows={8}
              ></textarea>
              <input
                type="submit"
                className="w-fit cursor-pointer p-2 rounded text-white font-mono bg-white/10 backdrop-blur-md border border-white/40"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
