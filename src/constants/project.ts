import { Project } from "@/types/Project";

// TODO: Add in a write-up on re-entrancy mockup

export const ProjectData: Project[] = [
  {
    title: "Staking Contract",
    description:
      "I implemented two contracts and a NextJS frontend which combined",
    actionItems: [
      "allowed users to mint an ERC-20 token with a transaction tax",
      "enforced a mandatory staking period before redemption was allowed",
      "cached events emitted by the contract using TheGraph",
    ],
    techStack: ["NextJS", "Solidity", "TheGraph"],
    link: "https://staking-contract-seven.vercel.app",
    code: "https://github.com/bthamachi/staking-contract",
  },
];
