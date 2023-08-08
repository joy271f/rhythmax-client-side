
const Contact = () => {
    return (
        <div>
            <div className="p-2 w-full md:w-1/2 mx-auto mb-12 mt-4">
                <form>
                    <div className="mb-2">
                        <label className="block mb-2">Name</label>
                        <input className=" w-full px-2 py-2 bg-white border border-black mb-2 focus:outline-none " />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2">Email</label>
                        <input className=" w-full px-2 py-2 bg-white border border-black mb-2 focus:outline-none " />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2">Message</label>
                        <textarea required name="message" className=" w-full px-2 py-2 bg-white border border-black mb-2 focus:outline-none h-16 md:h-28" />
                    </div>
                    <input className="btn hover:bg-pink-500 bg-pink-400 text-white px-12" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;