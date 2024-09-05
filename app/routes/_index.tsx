import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Society of PC Building Website" },
    { name: "description", content: "SPCB at UF" },
  ];
};

export default function Index() {
  return (
    <div className="animate-fade-up m-20 rounded-md font-mono p-4 justify-center border border-grey-300">
      <h1 className="animate-fade-up text-3xl">Welcome to the Society of PC Building Website!</h1>
      <h2 className="animate-fade-up text-xl">Here are some links to help you get started on building a website on Remix! Reach out to e-board for any questions.</h2>
      <ul className="animate-fade-up list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-black underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
