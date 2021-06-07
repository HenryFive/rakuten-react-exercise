
export default function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>
      <img src={props.image} width="350" height="350"/>
    </div>
  );
}
