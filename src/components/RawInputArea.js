import { useRef } from 'react';
import classes from './RawInputArea.module.css';

const RawInputArea = (props) => {
    const handleFormData = (event) => {
        event.preventDefault();
        props.rawInput(textAreaRef.current.value);
    };

    const textAreaRef = useRef();
    return (
        <>
            <div contentEditable="true" className={classes.editor}></div>
        </>
    );
};

export default RawInputArea;
