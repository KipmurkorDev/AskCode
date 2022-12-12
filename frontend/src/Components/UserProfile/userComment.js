import { useSelector, useDispatch} from "react-redux";
import { deleteComment } from "../Redux/Slices/userSliceProfile";
import Profile from "./Profile";
export default function UserComment() {
  const user = useSelector((state) => state.profile.Profile);
  const loading = useSelector((state) => state.profile.isLoading);
  const dispatch =useDispatch()

  if (!loading) return <>Loading</>;
  return (
    <div className="container-profile">
      <div className="user-profile-6">
        <Profile />
      </div>
      <div className="answers">
        <div className="answe-0">
          {user[3]?.map((item) => (
            <div className="user-answer">
              <div className="usercontent"> {item?.comment_descprition}</div>
              <div className="editbtn">
                <div className="btn_user">
                  <i class="fas fa-edit"></i>
                </div>
                <div className="btn_user" onClick={()=>dispatch(deleteComment(item?.comment_id))}>
                <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
