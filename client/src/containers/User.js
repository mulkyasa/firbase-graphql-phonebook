import { connect } from "react-redux";
import { deleteUser } from "../actions";
import UserItem from "../components/UserItem";

const mapDispatchToProps = (dispatch, ownProps) => ({
  delete: () => dispatch(deleteUser(ownProps.user.userName)),
});

export default connect(null, mapDispatchToProps)(UserItem);
