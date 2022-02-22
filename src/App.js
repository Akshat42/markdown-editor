import RawInputArea from './components/RawInputArea';
import './App.css';
import MarkDownOutputArea from './components/MarkdownOutputArea';
import { useState } from 'react';

function App() {
    const [rawData, setRawData] = useState('');
    const handleRawInput = (data) => {
        setRawData(data);
    };

    return (
        <div className="App">
            <RawInputArea rawInput={handleRawInput}></RawInputArea>
            <MarkDownOutputArea rawInput={rawData}></MarkDownOutputArea>
        </div>
    );
}

export default App;
