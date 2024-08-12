import { Icon } from "@iconify/react/dist/iconify.js";

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
  svelte: "devicon:svelte",
};

interface Props {
  stacks: string[];
}
const StackBar = ({ stacks }: Props) => {
  return (
    <div className="flex gap-2">
      {stacks.map((stack, index) => {
        const icon = iconMapping[stack as keyof typeof iconMapping];
        return icon ? (
          <div key={index} className="flex items-center relative group">
            <Icon icon={icon} className="w-8 h-8" />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {stack}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};
export default StackBar;
