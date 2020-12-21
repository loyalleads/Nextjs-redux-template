import Layout from "../components/Layout";

// Redux
import { connect } from "react-redux";
import { setUser } from "../redux/actions/user";

const Weather = (props) => {
   const { user } = props;
  return (
    <Layout>
      <div className="container">
        <i className="fas fa-cloud-sun"></i>  {props?.date} {user?.name}
        </div>
        
    </Layout>
  );
};

Weather.getInitialProps = () => {
  const date = new Date().toDateString();
  return {
    date,
  };
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
