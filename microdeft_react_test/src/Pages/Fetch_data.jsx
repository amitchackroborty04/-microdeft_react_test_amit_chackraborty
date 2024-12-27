import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Card from "../Components/Card";
import axios from "axios";

const Fetch_data = () => {
  let token = localStorage.getItem("token");
  let [data,setData]=useState([])
  useEffect(() => {
    const fetfhData = async () => {
      try {
        await axios
          .get("https://react-interview.crd4lc.easypanel.host/api/course", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((data) => {
            console.log(data.data.data.data);
            setData(data.data.data.data)
          });
      } catch (error) {
        console.error(
          "Failed:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetfhData();
  }, []);
  return (
    <section>
      <Container>
        {/* use raw css  in index.css file */}
        <div className="flex gap-x-5 mt-5 flex-wrap gap-y-5 ">
          {data.map((item)=>(

          <div className="w-[32%] bg-red-100 p-4 rounded-lg shadow-lg ">
            <Card item={item} />
          </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Fetch_data;
