import {useEffect, useState} from "react";
import axios from "axios";

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure',
}

const restUrl = "api/speakers";

export default function useRequestRest() {
    const [data, setData] = useState();
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState('');

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                const result = await axios.get(restUrl);
                // throw "Had error";
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }

        delayFunc();
    }, []);

    function updateRecord(recordUpdated, doneCallback) {
        const originalRecords = [...data];
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.put(`${restUrl}/${recordUpdated.id}`, recordUpdated);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (e) {
                console.error("error thrown inside delayFunction", e);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    function insertRecord(record, doneCallback) {
        const originalRecords = [...data];
        const newRecords = [record, ...data];

        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.post(`${restUrl}/99999`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (e) {
                console.error("error thrown inside delayFunction", e);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    function deleteRecord(record, doneCallback) {
        const originalRecords = [...data];
        const newRecords = data.filter(function (rec) {
            return rec.id !== record.id;
        });

        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.delete(`${restUrl}/${record.id}`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (e) {
                console.error("error thrown inside delayFunction", e);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }



    // function onFavoriteToggle(id) {
    //     const speakersRecPrevious = data.find(function (rec) {
    //         return rec.id === id;
    //     });
    //     const spekerRecUpdated = {
    //         ...speakersRecPrevious,
    //         favorite: !speakersRecPrevious.favorite,
    //     }
    //     const speakersDataNew = data.map(function (rec) {
    //         return rec.id === id ? spekerRecUpdated : rec;
    //     });
    //     setData(speakersDataNew);
    // }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    }
}
