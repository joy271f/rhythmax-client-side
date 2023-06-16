
const InstructorDisplay = ({ instructor }) => {
    const { name, email } = instructor;
    return (
        <div className="border-double border-2 shadow-2xl p-12 border-pink-700 mb-8">
            <div className='text-center'>
                <div className="avatar">
                    <div className="w-36 rounded-full border-2 border-purple-600">
                        <img src={instructor?.photoURL} />
                    </div>
                </div>
                <div className='mt-5'>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorDisplay;