import Link from "next/link";
import Modal from "../components/modal";
const Card = (props) => {
  return (
    <div
      key={props.post.id.toString()}
      className="card order-3 p-2 bd-highlight m-2 mxw"
    >
      <Modal post={props.post} />
      <img
        src={props?.post?.url}
        className="card-img-top"
        alt={props?.post?.imgeTitle}
      ></img>
      <div
        className="card-body"
        data-bs-toggle="modal"
        data-bs-target={`#rty${props.post.id.toString()}`}
      >
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text">{props.post.body}</p>
        <p className="text-muted">{props?.post.userName}</p>
        <Link href="/">
          <a
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#rty${props.post.id.toString()}`}
          >
            Find more...
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
