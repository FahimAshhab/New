import * as gtag from "~/utils/gtag.client";
export default function PostRoute() {
  return (
    <div>
      Hello
      <br />
      <button
        onClick={() => {
          console.log("click");
          gtag.event({
            action: "Click Postttttttt",
            category: "Possssssssssssssssssttttttt",
            label: "Click Post Button hiiiiiiiiiii",
          });
        }}
        type="button"
      >
        click
      </button>
    </div>
  );
}
