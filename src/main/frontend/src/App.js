import React, {useState, useEffect, useCallback} from "react";
import './App.css';
import axios from "axios";
import Dropzone, {useDropzone} from 'react-dropzone'


const UserProfiles = () => {

    const [userProfiles, setUserProfiles] = useState([])

    const fetchUserProfiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
            console.log(res);
            setUserProfiles(res.data);
        });
    };

    useEffect(() => {
        fetchUserProfiles();
    }, []);

    return userProfiles.map((userProfile, index) => {
        return (
            <div key={index}>
                {userProfile.userProfileID ? (
                    <img
                        src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileID}/image/download`}
                    />
                ) : null}
                <br/>
                <h1>{userProfile.userName}</h1>
                <p>{userProfile.userProfileID}</p>
                <MyDropzone {...userProfile}/>
                <br/>
                <br/>

            </div>
        )
    })
};

function MyDropzone({userProfileID}) {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        console.log(file);

        const formData = new FormData();
        formData.append("file", file);

        axios.post(
            `http://localhost:8080/api/v1/user-profile/${userProfileID}/image/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then(() => {
            console.log("file uploaded successfully")
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the image here ...</p> :
                    <p>Drag 'n' drop profile image, or click to select image</p>
            }
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <UserProfiles/>
        </div>
    );
}

export default App;
