import { Icon } from "@iconify/react/dist/iconify.js";
import Tooltip from "../ui/Tooltip";

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
  stacks?: string[];
}
const StackBar = ({ stacks }: Props) => {
  return (
    <div className="flex gap-2">
      {stacks?.map((stack, index) => {
        const icon =
          iconMapping[stack?.toLowerCase() as keyof typeof iconMapping];
        return icon ? (
          <div key={index}>
            <Tooltip tooltipText={stack ?? ""}>
              <Icon icon={icon} className="w-8 h-8" />
            </Tooltip>
          </div>
        ) : null;
      })}
    </div>
  );
};
export default StackBar;
