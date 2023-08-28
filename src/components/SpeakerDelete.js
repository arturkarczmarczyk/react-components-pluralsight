import {SpeakerContext} from "../contexts/SpeakerContext";
import {useContext} from "react";

export default function SpeakerDelete() {
    const {speaker, deleteRecord } = useContext(SpeakerContext);

    return (
        <span className="session w-100">
            <a href="#" className="remSes">
                <i onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm(`Do you want to delete speaker: ${speaker.first} ${speaker.last}`)) {
                        deleteRecord(speaker);
                    }
                }}>-</i>
            </a>
            <span className="padL2">Delete Speaker</span>
        </span>
    );
}
