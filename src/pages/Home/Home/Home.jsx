import { useLoaderData } from "react-router-dom";
import Instrauctor from "../../Instructor/Instrauctor";
import Banner from "../Banner/Banner";
import ClassCard from "../../../components/ClassCard";

const Home = () => {
    const classesData = useLoaderData();
    return (
        <div>
            <Banner />
            <h1 className='text-center font-bold text-3xl mt-10'>Popular Classes</h1>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    classesData.map(classData => <ClassCard
                        key={classData._id}
                        classData={classData}
                    ></ClassCard>)
                }
            </div>
            <h1 className='text-center font-bold text-3xl mt-10'>Popular Instructors</h1>
            <Instrauctor limit={6} />
        </div>
    );
};

export default Home;