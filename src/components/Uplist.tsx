import React from "react";
import { ListType } from "../Types/List.types";

interface Props {
  uplist: ListType;
}

const uplist: React.FC<Props> = ({ uplist }) => {
  return (
    <div className="uplist">
      <tr>
        <td> {uplist.firstName}</td>
      </tr>
      <tr>
      <td>{uplist.middleName}</td>
      </tr>
      <td>{uplist.lastName}</td>
      <td> {uplist.phoneNo}</td>
    </div>
  );
};

export default uplist;
