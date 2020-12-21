import moduleName from "redux";
import Layout from "../components/Layout";

const Index = (props) => {
  return (
    <Layout>
      <div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Welcome to Ignites 
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {props.bpi?.map((item) => item.id + " ")}
              </div>
            </div>
          </div>
        </div>
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
