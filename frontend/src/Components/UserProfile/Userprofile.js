import React, { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Userprofile() {
  const user = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.isLoading);
  useEffect(() => {}, [user, loading]);
  if (!loading) return <>Loading</>;
  return (
    <div className="answers">
      <div className="answe-0">
        <p>
          <b> Name :</b> <span> {user[0][0]?.Name}</span>
        </p>
        <p>
          <b> User Name:</b> <span>{user[0][0]?.user_name}</span>
        </p>
        <p>
          <b> Email:</b> <span>{user[0][0]?.email}</span>
        </p>
      </div>
    </div>
  );
}
