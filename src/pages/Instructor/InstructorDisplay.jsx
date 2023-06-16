
const InstructorDisplay = ({ instructor }) => {
    const { name, email } = instructor;
    return (
        <div>
            <div className='text-center'>
                <img className='w-52 mx-auto border-2 border-green-400 rounded-full' src={instructor?.photoURL} alt="" />
                <div className='mt-5'>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorDisplay;