import React, { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Userprofile() {
  const user = useSelector((state) => state.user.Profile);
  const loading = useSelector((state) => state.user.isLoading);

  useEffect(() => {}, [user, loading]);
  if (!loading) return <>Loading</>;
  return (
    <div className="answers">
      {user[0]?.user?.map((item) => (
        <div className="answe-0">
          <p>
            <b> Name :</b> <span> {item?.Name}</span>
          </p>
          <p>
            <b> User Name:</b> <span>{item?.user_name}</span>
          </p>
          <p>
            <b> Email:</b> <span>{item?.email}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
