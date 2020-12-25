import Layout from "../components/Layout";
import { incrementCounter } from "../redux/actions/counter";
import { connect } from "react-redux";
import Link from "next/link"
import Card from '../components/card'
import Modal from '../components/modal'
import PageTitle from "../components/PageTitle";
const Index = (props) => {
  const { counter, increment } = props;
  return (
    <Layout>
      <PageTitle title="Home" />
      <div>
        <div className="d-flex align-content-end flex-wrap">
          {props.data?.map((post) => {
            return <Card key={post.id.toString()} post={post} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    console.log("api");
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await posts.json();

    const photos = await fetch("http://jsonplaceholder.typicode.com/photos");

    const dataPhots = await photos.json();
    const users = ['Mike Holms','Stiven Sigal','Martha Hines','James Bond','Sherif Butt']
    let mergedData = [];
    
    for (let i = 0; i < data.length; i++){
      let _data = {
        userId: data[i].userId,
        userName: users[data[i].userId],
        id: data[i].id,
        title: data[i].title,
        body: data[i].body,
        albumId: dataPhots[i].albumId,
        url: dataPhots[i].url,
        thumbnailUrl: dataPhots[i].thumbnailUrl,
        imgeTitle: dataPhots[i].title,
      };
        
      mergedData = [...mergedData,_data];
    }
    
    
    return {
      data:mergedData,
      count: data.length
    };
  } catch (err) {
    console.log({ err });
  }
};

const mapStateToProps = (state) => ({
  counter: state.counterReducer,
});

const mapDispatchToProps = {
  increment: incrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
