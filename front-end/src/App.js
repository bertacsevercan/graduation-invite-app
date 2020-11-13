import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [postedData, setPostedData] = useState({
    name: "",
    surname: "",
    email: "",
    isComing: false
  });
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/guests");
    const datas = await response.json();
    console.log("fetch", datas);
    setData(datas);
  };

  const resetForm = () => {
    setPostedData({
      name: "",
      surname: "",
      email: "",
      isComing: false
    })
  };


  const postData = async () => {
    const res = await fetch(`http://localhost:3000/guests`, {
      method: "POST",
      body: JSON.stringify({
        name: postedData.name,
        surname: postedData.surname,
        email: postedData.email,
        isComing: postedData.isComing
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8 "
      }
    });
    const data = await res.json();
    console.log("post", data);
    setPostedData(data);
    resetForm();
  };

  useEffect(() => {
    fetchData();
  }, [postedData.id]);

  const handleChange = (e) => {
    if (e.target.id === "isComing") {
      setPostedData({
        ...postedData,
        isComing: e.target.checked
      });
    } else {
      setPostedData({
        ...postedData,
        [e.target.id]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postedData);
    postData();
  };

  return (
    <div className="App">
      <h3>You are invited to my bootcamp graduation!</h3>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={postedData.name}
          onChange={handleChange}
        />
        <br />
        <input
          id="surname"
          placeholder="Surname"
          value={postedData.surname}
          onChange={handleChange}
        />
        <br />
        <input
          id="email"
          placeholder="Email"
          type="email"
          value={postedData.email}
          onChange={handleChange}
        />
        <br />
        <label>RSVP</label>
        <input
          id="isComing"
          onChange={handleChange}
          type="checkbox"
          value={postedData.isComing}
        />
        <br />
        <button>Submit</button>
      </form>

      <div className="guests-wrapper">
        <h3>Guests</h3>
        <table className="allGuests-table">
          <thead>
            <th> Full Name </th>
            <th> Email </th>
            <th> Coming? </th>
          </thead>

          {data.map((obj, index) => (
            <tbody key={index}>
              <td>
                {obj.name}
                {" " + obj.surname}
              </td>
              <td>{obj.email}</td>
              <td>{" " + obj.isComing}</td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
