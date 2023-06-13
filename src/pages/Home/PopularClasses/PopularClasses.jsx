
const PopularClasses = () => {
    const arr = ['', '', '', '', '', '']
    return (
        <div>
            <h1 className="uppercase text-4xl text-center mt-16 text-pink-700">Explore Popular Classes</h1>
            <div className="grid md:grid-cols-3 gap-10 my-12">
                {/* card start*/}
                {
                    arr.map(() => <>
                        <div className="card w-96 bg-base-100 shadow-2xl">
                            <figure><img src="/classImg.jpg" alt="class image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Basic English Speaking and Grammar</h2>
                                <div className="flex">
                                    <p className="font-semibold text-pink-600">Available seats : 200</p>
                                    <p className="font-semibold mb-4 text-pink-700 ml-24">Price: $84</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 font-bold">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                            <span>MX</span>
                                        </div>
                                    </div>
                                    <p>Joy Chandra Das</p>
                                    <button className="btn btn-sm bg-pink-600 text-white">Details</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }

                {/* card end */}
            </div>
        </div>
    );
};

export default PopularClasses;