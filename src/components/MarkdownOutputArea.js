import Markdown from 'react-remarkable';

const MarkDownOutputArea = (props) => {
    console.log(props.rawInput);
    return (
        <>
            <Markdown>{props.rawInput}</Markdown>
        </>
    );
};

export default MarkDownOutputArea;
