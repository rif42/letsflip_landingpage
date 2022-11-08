import React, { useState } from "react";
import Swal from "sweetalert2";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export const DemoModal = (props) => {
  const [name, setName] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  let checkingname;
  let checkemail;
  let checkpnumber;

  function handleSubmit(e) {
    // alert('You`re connected! We will contact you!');
    Swal.fire({
      title: "Success!",
      text: "You`re connected! We will contact you!",
      icon: "success",
      confirmButtonText: "Cool",
    });
    e.preventDefault();
  }

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="fixed mb-[180vw] w-full h-[49vw] place-self-center bg-black/20 text-center flex flex-col justify-center align-middle z-50">
        <div className="flex flex-col justify-center place-self-center align-middle bg-white w-[50%] h-[45vw] rounded-3xl">
          {/* <div className="w-[10vw] h-[10vw] onClick={props.onClose} bg-red-500"></div> */}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hover:cursor-pointer absolute ml-[46%] mb-[40%] w-[3vw]"
            onClick={props.onClose}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <form
            className="w-[80%] h-[80%] place-self-center flex flex-col justify-center align-middle"
            action="https://event.getletsflip.com/api/v1/tnl/postform"
            method="POST"
            onSubmit={() => handleSubmit()}
          >
            <label
              htmlFor="status"
              className="font-montserrat text-[0.9vw] text-black place-self-center pb-[1vw]"
            >
              Status
            </label>

            <select
              onBlur={() => {
                if (document.getElementById("status").value.length === 0) {
                  document.getElementById("status").style.border =
                    "2px solid red";
                  document.getElementById("status-error").innerHTML =
                    "Choose valid country!";
                } else {
                  document.getElementById("status").style.border =
                    "2px solid #00FF0A";
                  setCountry(document.getElementById("status"));
                  document.getElementById("status-error").innerHTML = "";
                }
              }}
              className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
              id="status"
              name="status"
              placeholder="Select Your Status"
              required
            >
              <option value="" selected disabled>
                Select Your Status
              </option>
              <option value="Partner">Partner</option>
              <option value="Parents">Parents</option>
              <option value="Educator">Educator</option>
            </select>

            <label
              htmlFor="childname"
              className="font-montserrat text-[0.9vw] visited:text-[0.9vw] text-black place-self-center pt-[2vw] pb-[1vw]"
            >
              Name
            </label>
            <input
              onBlur={() => {
                checkingname = document.getElementById("childname").value;
                if (checkingname.length < 4) {
                  document.getElementById("childname").value = "";
                  document.getElementById("childname").style.border =
                    "2px solid red";
                  document.getElementById("name-error").innerHTML =
                    "Name can't be less than 4 characters";
                } //else if check if all numbers
                else if (checkingname.match(/^[0-9]+$/)) {
                  document.getElementById("childname").value = "";
                  document.getElementById("childname").style.border =
                    "2px solid red";
                  document.getElementById("name-error").innerHTML =
                    "Name can't be number";
                } else {
                  setName(checkingname);
                  document.getElementById("name-error").innerHTML = "";
                  document.getElementById("childname").style.border =
                    "2px solid #00FF0A";
                }
              }}
              id="childname"
              name="child_name"
              placeholder="Type your name"
              className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
              required
            />
            <p
              class="text-red-500 text-xs italic place-self-center font-montserrat text-[0.9vw] py-[0.5vw]"
              id="name-error"
            ></p>

            <label
              htmlFor="email"
              className="font-montserrat text-[0.9vw] text-black place-self-center py-[1vw]"
            >
              Email Address
            </label>
            <input
              onBlur={() => {
                checkemail = document.getElementById("email").value;
                if (
                  checkemail.match(
                    /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                  )
                ) {
                  setEmail(checkemail);
                  document.getElementById("email").style.border =
                    "2px solid #00FF0A";
                  document.getElementById("email-error").innerHTML = "";
                } else {
                  document.getElementById("email").style.border =
                    "2px solid red";
                  document.getElementById("email-error").innerHTML =
                    "Please enter an email address";
                }
              }}
              id="email"
              type="email"
              name="parent_email"
              placeholder="Insert Email Address"
              className="flex flex-col justify-center w-[80%] h-[2.5vw] border-[0.1vw] border-gray-500 align-middle rounded-md px-[0.5vw] text-[0.9vw] self-center text-left font-montserrat py-[0.5vw]"
              required
            />
            <p
              class="text-red-500 text-xs italic font-montserrat place-self-center text-[0.9vw] py-[0.5vw]"
              id="email-error"
            ></p>

            <label
              htmlFor="pnumber"
              className="font-montserrat text-[0.9vw] text-black place-self-center py-[1vw]"
            >
              Phone Number
            </label>
            <PhoneInput
              id="pnumber"
              placeholder="Enter phone number, example: +6281234567890"
              value={pnumber}
              onChange={setPnumber}
              className="w-[31vw] text-[1.2vw] font-montserrat place-self-center"
              onBlur={() => {
                if (isValidPhoneNumber(pnumber)) {
                  document.getElementById("pnumber").style.border =
                    "2px solid #00FF0A";
                  document.getElementById("pnumber-error").innerHTML = "";
                } else {
                  document.getElementById("pnumber").style.border =
                    "2px solid red";
                  document.getElementById("pnumber-error").innerHTML =
                    "Please enter a valid phone number";
                }
              }}
            />

            <p
              class="text-red-500 text-xs italic font-montserrat place-self-center text-[0.9vw] pb-[5vw] py-[0.5vw]"
              id="pnumber-error"
            ></p>

            <button
              className="place-self-center w-[10vw] py-[0.5vw] text-[1vw] rounded-full font-montserrat font-semibold text-white bg-orange-500"
              type="submit"
            >
              Book a Demo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DemoModal;
