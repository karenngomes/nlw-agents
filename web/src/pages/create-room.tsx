import { Link } from "react-router-dom";

export function CreateRoom() {
  return (
    <div>
      <div>Create Room Page</div>

      <Link className="underline" to="/room">
        Go to Room Page
      </Link>
    </div>
  );
}
