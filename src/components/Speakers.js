import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import {useState} from "react";
import SpeakerFilterProvider from "../contexts/SpeakerFilterContext";

export default function Speakers() {

    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    );
}
