import Flicking from "@egjs/react-flicking";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";

const ReviewSection = () => {
    const [rating, setRating] = useState(5)
    return (
        <div className="my-12">
            <Flicking>
                <div className="md:flex justify-evenly items-center md:gap-10 mx-auto">
                    <div className="flicking-panel md:w-3/4 px-6 py-2 rounded shadow bg-white hover:shadow-lg">
                        <h1 className="text-xl font-bold">A Harmonious Learning Journey!</h1>
                        <div className="my-2">
                            <Rating readOnly style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                        </div>
                        <p>Rythmax's music courses are an absolute delight. The instructors' passion shines through in every lesson, making learning music theory and practice engaging and enjoyable.
                        </p>
                    </div>
                    <div className="flicking-panel md:w-3/4 px-6 py-2 rounded shadow bg-white hover:shadow-lg">
                        <h1 className="text-xl font-bold">Unlock Your Musical Potential</h1>
                        <div className="my-2">
                            <Rating readOnly style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                        </div>
                        <p>Rythmax's music courses are a revelation. From novice to experienced musicians, their range of courses caters to all levels. The video lessons are clear and insightful, and the integration of hands-on activities and assessments really accelerates learning.</p>
                    </div>
                    <div className="flicking-panel md:w-3/4 px-6 py-2 rounded shadow bg-white hover:shadow-lg">
                        <h1 className="text-xl font-bold">Music Mastery Made Easy</h1>
                        <div className="my-2">
                            <Rating readOnly style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                        </div>
                        <p>Rythmax's music courses are a game-changer for anyone wanting to dive into music. The platform's intuitive interface and high-quality video content make learning a breeze. The courses are structured brilliantly, combining theory with practical application.
                        </p>
                    </div>
                </div>
            </Flicking>
        </div>
    );
};

export default ReviewSection;