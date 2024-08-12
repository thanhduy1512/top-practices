import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7T1STLq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { Icon } from '@iconify/react/dist/iconify.js';
import 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Admin/projects/top-practices/client/src/layouts/Layout.astro", void 0);

const DATA_POSTS = [
  {
    id: 1,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["react", "angular", "nest", "express"]
  },
  {
    id: 2,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["dotnet", "mongodb", "mysql", "postgresql"]
  },
  {
    id: 3,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["vue", "astro", "svelte"]
  },
  {
    id: 4,
    title: "Call Api",
    upVote: 10,
    downVote: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
    createdDate: "2022-01-01",
    category: ["vue", "astro", "svelte"]
  }
];

const Button = ({
  icon,
  color = "bg-blue-500",
  hoverColor = "hover:bg-blue-700",
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `font-bold text-white ${color} ${hoverColor} rounded flex items-center p-1`,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "mr-2", children: icon }),
        children
      ]
    }
  );
};

const iconMapping = {
  react: "logos:react",
  angular: "devicon:angularjs",
  nest: "catppuccin:nest",
  express: "devicon:express",
  dotnet: "logos:dotnet",
  mongodb: "skill-icons:mongodb",
  mysql: "vscode-icons:file-type-mysql",
  postgresql: "logos:postgresql",
  vue: "logos:vue",
  astro: "devicon:astro",
  svelte: "devicon:svelte"
};
const StackBar = ({ stacks }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: stacks.map((stack, index) => {
    const icon = iconMapping[stack];
    return icon ? /* @__PURE__ */ jsxs("div", { className: "flex items-center relative group", children: [
      /* @__PURE__ */ jsx(Icon, { icon, className: "w-8 h-8" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: stack })
    ] }, index) : null;
  }) });
};

const PostCard = ({ post }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 border-solid border-2 p-4 border-gray-300 rounded-lg", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: post.title }),
    /* @__PURE__ */ jsx("p", { className: "truncate-text", children: post.content }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: post.createdDate }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(StackBar, { stacks: post.category }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(
            Icon,
            {
              icon: "mingcute:large-arrow-up-line",
              className: "w-5 h-5 mr-2"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: post.upVote })
        ] }),
        /* @__PURE__ */ jsxs(Button, { color: "bg-red-500", hoverColor: "hover:bg-red-700", children: [
          /* @__PURE__ */ jsx(
            Icon,
            {
              icon: "mingcute:large-arrow-down-line",
              className: "w-5 h-5 mr-2"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: post.downVote })
        ] })
      ] })
    ] })
  ] });
};

const LeaderBoard = () => {
  return /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: DATA_POSTS.map((post) => /* @__PURE__ */ jsx(PostCard, { post }, post.id)) });
};

const Login = () => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "bg-gray-500 hover:bg-gray-700 text-white p-2 rounded-full",
      "aria-label": "User Avatar",
      children: /* @__PURE__ */ jsx("img", { src: "/favicon.svg", alt: "Avatar", className: "h-10 w-10 rounded-full" })
    }
  );
};

const Logo = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: "/favicon.svg", alt: "Logo", className: "h-14 w-auto" }) });
};

const Header = () => {
  return /* @__PURE__ */ jsxs("header", { className: "bg-gray-900 text-white p-4 flex items-center justify-between w-full", children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx("h1", { className: "text-gradient text-6xl", children: "Top Practices" }),
    /* @__PURE__ */ jsx(Login, {})
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Admin/projects/top-practices/client/src/components/header/Header", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LeaderBoard", LeaderBoard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Admin/projects/top-practices/client/src/components/LeaderBoard", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/Admin/projects/top-practices/client/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/projects/top-practices/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
