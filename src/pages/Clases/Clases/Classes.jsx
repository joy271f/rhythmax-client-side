import { useLoaderData } from "react-router-dom";
import ClassCard from "../../../components/ClassCard";

const Classes = () => {
    const classesData = useLoaderData();
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                classesData.map(classData => <ClassCard
                    key={classData._id}
                    classData = {classData}
                ></ClassCard>)
            }
        </div>
    );
};

export default Classes;