import Speaker from "./Speaker";
import {data} from "../../SpeakerData";
import {useState} from "react";

export default function SpeakersList({showSessions}) {

    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle(id) {
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const spekerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite,
        }
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? spekerRecUpdated : rec;
        });
        setSpeakersData(speakersDataNew);
    }

    return (
        <div className={"container speakers-list"}>
            <div className={"row"}>
                {speakersData.map(function (speaker) {
                    return (
                        <Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={() => {
                                onFavoriteToggle(speaker.id)
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
