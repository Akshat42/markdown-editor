import { useRef } from 'react';

const RawInputArea = (props) => {
    const handleFormData = (event) => {
        event.preventDefault();
        props.rawInput(textAreaRef.current.value);
    };

    const textAreaRef = useRef();
    return (
        <form onSubmit={handleFormData}>
            <textarea ref={textAreaRef}></textarea>
            <button>Transform</button>
        </form>
    );
};

export default RawInputArea;
