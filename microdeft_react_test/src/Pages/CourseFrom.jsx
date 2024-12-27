
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [badgeText, setBadgeText] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const [instructorName, setInstructorName] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

 
    const token = localStorage.getItem("token");
   

    
    const data = {
      title,
      description,
      badge_text: badgeText,
      badge_color: badgeColor,
      instructor_name: instructorName,
    };

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data.status_message); 
       toast(response.data.status_message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
    } catch (error) {
      console.error(
        "Failed:",
        error.response ? error.response.data : error.message
      );
      toast("Data send falid", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="border rounded-xl shadow-2xl bg-red-200 mt-[50px] w-[60%] mx-auto pb-10 text-center ">
       <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <h2 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-7 uppercase">
        Wellc<span className="text-red-600">o</span>me
      </h2>
      <h3 className="text-2xl font-bold text-[#1b5fe8] font-serif text-center pt-4 uppercase">
        Cou<span className="text-red-600">rs</span>e Form
      </h3>
      <form>
        <div>
          <input
            className="w-[40%] py-3 px-4 rounded-lg outline-none mt-7 "
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </div>
        <div>
          <textarea
            className="w-[40%] py-3 px-4 rounded-lg outline-none mt-7 "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div>
          <input
            className="w-[40%] py-3 px-4 rounded-lg outline-none mt-7 "
            type="text"
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
            placeholder="Badge Text"
            required
          />
        </div>
        <div>
          <input
            className="w-[40%] py-3 px-4 rounded-lg outline-none mt-7 "
            type="text"
            value={badgeColor}
            onChange={(e) => setBadgeColor(e.target.value)}
            placeholder="Badge Color"
            required
          />
        </div>
        <div>
          <input
            className="w-[40%] py-3 px-4 rounded-lg outline-none mt-5 "
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            placeholder="Instructor Name"
            required
          />
        </div>
        <button
          onClick={handleCreate}
          className="w-[40%] py-3 px-4 rounded-lg bg-[#bea6c4] hover:bg-[#e589c2] text-xl font-medium hover:font-bold font-serif text-white duration-500 mt-5"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
