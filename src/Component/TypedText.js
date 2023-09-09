import { TypeAnimation } from 'react-type-animation';

const TypedText = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    "Front-End Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "Javascript Developer",
                    1000,
                    "Web Programmer",
                    1000,
                    "Website Development Learner",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "REact Developer",
                    1000,
                ]}
                speed={20}
                repeat={Infinity}
                style={{ fontWeight: '700' }}
            />
        </div>
    );
};

export default TypedText;