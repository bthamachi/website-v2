import { Project } from "@/types/Project";

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
  {
    title: "Simulating Reentrancy",
    description:
      "I put together a few smart contracts together to showcase how reentrancy might happen",
    actionItems: [
      "Wrote up a malicious contract that used reentrancy to drain a target contract of funds",
      "wrote a modified version of the same contract that had reentrancy guards",
      "Simulated reentrancy and failed reentrancy attack using hardhat",
    ],
    techStack: ["Hardhat", "Solidity"],
    link: "articles/simulating-a-reentrancy-attack",
    code: "https://github.com/bthamachi/Reentrance-Attack",
  },
];
