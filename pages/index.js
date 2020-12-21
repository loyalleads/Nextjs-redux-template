import moduleName from "redux";
import Layout from "../components/Layout";

const Index = (props) => {
  return (
    <Layout>
      <div>
        <div>
          <i className="fa fa-plus"></i> Welcome to Ignites 
        </div>
        <div>{props.bpi?.map((item) => item.id + " ")}</div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    console.log("api");
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await responce.json();

    console.log(data[0]);
    return {
      bpi: data,
    };
  } catch (err) {
    console.log({ err });
  }
};
export default Index;
