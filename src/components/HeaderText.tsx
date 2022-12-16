type HeaderTextProps = {
  text: string;
};

const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      I&apos;m BowTiedHamachi
    </h1>
  );
};

export default HeaderText;
