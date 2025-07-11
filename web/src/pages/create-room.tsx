import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div>
      {isLoading && <p>Loading rooms...</p>}

      {data?.map((room) => (
        <div key={room.id}>
          <p>{room.name}</p>
        </div>
      ))}   

      <Link className="underline" to="/room">
        Go to Room Page
      </Link>
    </div>
  );
}
