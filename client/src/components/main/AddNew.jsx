import { useState } from "react";

exportn default function NewTrack(){
    const [see, setSee] = useState(false);
    const [track, setTrack] = useState({ cat_name: ""});

    function handleSubmit(event) {
        event.preventDefault();
        //prevent default to stop data going to url
        //something that Fetches the POST endpoint
        fetch(
          "https://week-7-assignment-client.onrender.com/newtrack" ||
            "http://localhost:7430/newtrack",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(track),
          }
        );
        const data = await check.json();
        if (data.success) {
          setTrack({ cat_name: "" });
        }
        function handleChange(event) {
            setFormValues({ track, [event.target.name]: event.target.value });
          }}
return (
    <></>
)
}