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
      
      {/* <td>{uplist.middleName}</td>
      
      <td>{uplist.lastName}</td>
      <td> {uplist.phoneNo}</td>
      <td>{uplist.email}</td> */}
    </div>
  );
};

export default uplist;
