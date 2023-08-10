import { json, type V2_MetaFunction } from "@remix-run/node";

import { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import * as gtag from "~/utils/gtag.client";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({ gaTrackingId: "G-99ENRGTMW4" });
};

export default function Index() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorialll
          </a>
        </li>
        <li>
          <Link to="posts"> First Route</Link>
        </li>
        <li>
          <Link to="admin"> Second Route</Link>
        </li>
      </ul>
    </div>
  );
}
