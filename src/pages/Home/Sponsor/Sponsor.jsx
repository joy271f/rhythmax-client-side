import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div className="pb-10">
            <Marquee
                speed = "70"
                autoFill
                pauseOnHover
            >
                <div className="flex justify-evenly items-center gap-10">
                    <div>
                        <img src="/sponsor/02.jpg" alt="" className="w-24 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/03.png" alt="" className="w-24 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/04.png" alt="" className="w-24 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/05.png" alt="" className="w-24 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/06.png" alt="" className="w-24 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/07.png" alt="" className="w-36 p-2" />
                    </div>
                    <div>
                        <img src="/sponsor/01.png" alt="" className="w-36 p-1" />
                    </div>
                    <div>
                        <img src="/sponsor/08.png" alt="" className="w-48 p-2" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Sponsor;