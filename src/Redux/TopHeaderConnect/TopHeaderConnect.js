// Import necessary libraries
import { connect } from 'react-redux';
import TopHeader from '../../Components/TopHeader';

// Define mapStateToProps function
const mapStateToProps = (state) => {
  return {
    username: state.user.user ? state.user.user.username : null // Assuming 'username' is a property in the user object
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(TopHeader);
