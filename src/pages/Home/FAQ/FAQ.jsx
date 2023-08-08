import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions (Courses)",
    rows: [
        {
            title: "What music courses does PBE provide?",
            content: `The music courses are as follows: Pop Piano Improvisation, Jazz Piano Improvisation, Pop Vocal, & Pop Piano Junior. The courses provided are for adults, teenagers and children.`,
        },
        {
            title: "What's the difference between your courses and others?",
            content:
                "The main difference from a classical training course is that we emphasize and teach improvisation techniques and skills. Although we consider the reading of music notation very important, we will never encourage our students to read and interpret, note for note, pre-arranged music scores for both hands. Pop and jazz musicians normally rely on ‘fake’ books, which consist of scores containing only the lead melody and the chords. Our teaching method will eventually equip students to independently play and improvise on any song from fake books or from any written chord progressions (in “comping” style). On the other spectrum, our course is not so simplified as to only teach our students chords, comping and not much else. It is a comprehensive learning experience that trains our students to become real musicians, who do not need to rely on fully arranged music scores, and yet can play decently and creatively.",
        },
        {
            title: "May I choose the songs I wish to learn?",
            content: `Yes, most certainly. A student is more than welcome to suggest what song he or she wants to learn during the lesson, provided that it is within his or her level of ability (the instructor’s advice should be sought regarding this). Our P.B.E.Syllabus™ is designed to be organised and structured, and yet still flexible to suit individual students’ needs. The course is also applicable to all levels and types of music. We encourage students to choose songs that they wish to play, as it is extremely important that our students remain motivated, through playing songs that they like. Students can also send us the youtube link of their songs and we can gladly transcribe the songs into simplified fake sheets for educational usage. If your chosen song is beyond your current playing ability, your instructor may decide to provide a simplified version of the song, or to defer the learning of the song to a later date. Our PBE Fake sheets library categorizes songs according to the student’s level of learning. In general, we recommend that Level 1 students limit themselves to Level 1 songs, in order to apply the basic musical concepts learnt to an actual song, without being hindered by more complex melodies.`,
        },
        {
            title: "What is your syllabus about?",
            content: <p>P.B.E.S™ is a flexible syllabus that provides for customized learning. While it is an organized and structured syllabus where you will learn about chords, chord progressions and a range of improvisation techniques, that may be applied to different songs, it allows your to learn what you prefer as well. It is unique, mainly because the syllabus is designed in such a way that it welcomes and allows students from all different levels and background to “come in” and to progressively start learning from where their current ability lies.</p>,
        },
    ],
};

const styles = {
    // bgColor: 'gray',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


const FAQ = () => {
    return (
        <div className="w-2/3 mx-auto my-8">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
};

export default FAQ;