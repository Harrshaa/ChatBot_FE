import { useNavigate } from "react-router-dom";

const StudentInfoSystem = ()=>{
    const navigate = useNavigate();

    const startChatBot = ()=>{
        navigate('/chatbot');
    }

    return(
        <div className="info">
            <h3>Enter into Student Info System</h3>
            <button id="enroll-btn" className="btn" onClick={()=>startChatBot()}>Enroll Now</button>
        </div>
    );
}

export default StudentInfoSystem;