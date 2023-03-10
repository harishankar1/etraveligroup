import { render, screen, cleanup } from "@testing-library/react";
import Layout from "../Layout";
import * as apicall from "../../api";
import { dummydata } from "../../Constant";
import axios from "axios";
jest.mock("../../api");
jest.mock("axios");

// componenet render
test("should render layout componenet", () => {
  render(<Layout />);
});

// mock api call
test("mock api call", async () => {  
  axios.get("https://www.google.com");
  // Does nothing, then returns undefined:
  axios.get("https://swapi.dev/api/films/?format=json", [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      created: "2014-12-10T14:23:31.880000Z",
    },
  ]);
  expect(axios.get).toHaveBeenCalledTimes(2);
  render(<Layout />);
  const element = screen.getByTestId("render-item-4");
  expect(element).toBeInTheDocument();
});
