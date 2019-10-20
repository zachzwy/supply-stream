import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyContext from "../../context";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { useGeocoding, useUpdateMap } from "../../customhooks";

const Form = () => {
  const { state, dispatch } = useContext(MyContext);
  const { userInputs, itemOptions } = state;
  let dataListFrom = useGeocoding(userInputs.from);
  let dataListTo = useGeocoding(userInputs.to);
  const { handleUpdateMap } = useUpdateMap(dataListFrom, dataListTo);
  dataListFrom = dataListFrom.map(place => place.place_name);
  dataListTo = dataListTo.map(place => place.place_name);
  console.log(dataListFrom);

  return (
    <div className="form">
      <form>
        <TextInput
          label="I WANT TO DELIVER FROM:"
          value={userInputs.from}
          name="from"
          onChange={e => {
            dispatch({
              type: "HANDLE_DELIVER_FROM_CHANGE",
              payload: e.target.value
            });
            handleUpdateMap(e);
            console.log(`You select pick up location: ${e.target.value}`);
            if (dataListFrom.includes(e.target.value)) {
            }
          }}
          onKeyDown={e => handleUpdateMap(e)}
          dataList={dataListFrom}
          placeholder="Pick up location..."
        />
        <TextInput
          label="I WANT TO DELIVER TO:"
          value={userInputs.to}
          name="to"
          onChange={e => {
            dispatch({
              type: "HANDLE_DELIVER_TO_CHANGE",
              payload: e.target.value
            });
            if (dataListTo.includes(e.target.value)) {
              console.log(`You select drop down location: ${e.target.value}`);
            }
          }}
          onKeyDown={e => handleUpdateMap(e)}
          dataList={dataListTo}
          placeholder="Drop off location..."
        />
        <SelectInput
          label="I WANT TO DELIVER:"
          options={[
            { value: "default", description: "Choose Your Delivery Item" },
            ...itemOptions
          ]}
        />
        <div className="add">
          ADD MORE ITEMS:<div>+</div>
        </div>
        <Link className="submit" to="/tracker">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Form;
