
const BecomeInstructor = () => {
    return (
        <div className="bg-slate-100 p-4 my-8">
            <div className="p-10 md:p-0 md:flex justify-between gap-10 items-center md:w-2/3 mx-auto my-12">
                <div>
                    <img src="/instructor.jpg" alt="" />
                </div>
                <div className="w-full mt-8 md:mt-0">
                    <h1 className="font-bold text-4xl">Become an instructor</h1>
                    <p className="text-xl mt-4">Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                    <button className="btn bg-pink-500 text-white my-4">Start teaching today</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;