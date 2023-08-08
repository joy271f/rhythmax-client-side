import { useLoaderData } from "react-router-dom";
import Instrauctor from "../../Instructor/Instrauctor";
import Banner from "../Banner/Banner";
import ClassCard from "../../../components/ClassCard";
import Sponsor from "../Sponsor/Sponsor";
import FAQ from "../FAQ/FAQ";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import ReviewSection from "../ReviewSection/ReviewSection";
import Contact from "../Contact/Contact";

const Home = () => {
    const classesData = useLoaderData();
    return (
        <div>
            <Banner />
            <h1 className='text-center font-bold text-3xl mt-16'>Popular Classes</h1>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    classesData.map(classData => <ClassCard
                        key={classData._id}
                        classData={classData}
                    ></ClassCard>)
                }
            </div>
            <h1 className='text-center font-bold text-3xl mt-16'>Popular Instructors</h1>
            <Instrauctor limit={6} />
            <h1 className='text-center font-bold text-3xl mt-16'>Sponsors</h1>
            <Sponsor />
            <h1 className='text-center font-bold text-3xl mt-10'>FAQ</h1>
            <FAQ />
            <BecomeInstructor />
            <h1 className='text-center font-bold text-3xl mt-16'>Our Happy Clients</h1>
            <ReviewSection />
            <h1 className='text-center font-bold text-3xl mt-16'>Contact Us</h1>
            <Contact />
        </div>
    );
};

export default Home;