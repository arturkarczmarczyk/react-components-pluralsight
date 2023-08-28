import {createContext} from "react";

export const SpeakerContext = createContext();

export default function SpeakerProvider({children, speaker, updateRecord, insertRecord, deleteRecord}) {
    return (
        <SpeakerContext.Provider
            value={
                {speaker, updateRecord, insertRecord, deleteRecord}
            }>
            {children}
        </SpeakerContext.Provider>
    );
}
