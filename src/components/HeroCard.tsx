import HeaderText from "./HeaderText";
import SmartLink from "./SmartLink";

const HeroCard = () => {
  return (
    <div>
      <div>
        <HeaderText text="I'm Bow Tied Hamachi" />
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;m an anon dev that does full-stack development. I’m a
            software engineer in real-life and in my spare time I enjoy working
            on interesting projects. I’m currently exploring an interest in
            smart contract auditing.
          </p>
          <p className="font-extrabold">I&apos;m avaliable for hire.</p>
          <p>
            For any inquiries regarding contracting/hiring, please dm me on
            twitter
            <SmartLink
              name={"@bowtiedhamachi"}
              href="https://twitter.com/BowTiedHamachi"
            >
              <span className="mx-0.5 underline">@BowTiedHamachi</span>
            </SmartLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
