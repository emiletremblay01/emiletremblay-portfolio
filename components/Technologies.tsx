"use client";
import axios from "axios";
import { getTechnologies } from "@/actions/getTechnologies";
import { useQuery } from "@tanstack/react-query";
import { tech } from "@/types";
export function Technologies({ data }: { data: tech[] | null }) {
  // const { data, error, isFetched } = useQuery({
  //   queryKey: ["technologies"],
  //   queryFn: getTechnologies,
  // });
  // console.log("ERRPRPRPR", error);
  // console.log("DATA", data);

  // const formattedData: tech[] = data?.data.documents;
  // if (error) <h1>{error.message}</h1>;
  // if (formattedData && isFetched)
  if (!data) return <div>No data</div>;
  return (
    <ul className="flex flex-wrap pt-4 font-light">
      {data.map((tech) => (
        <li
          className="flex min-w-fit basis-1/3 items-center pr-2"
          key={tech._id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className=""
          >
            <path fill="currentColor" d="m10 7l6 5l-6 5z" />
          </svg>
          <p>{tech.name}</p>
          {tech.favorite && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-1 w-3 translate-y-px text-red-500"
            >
              <path
                fill="currentColor"
                d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137"
              />
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
  return <div>No data</div>;
}
