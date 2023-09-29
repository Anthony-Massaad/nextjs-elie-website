import { FC, useContext, useEffect, useState } from "react";
import { capitalize } from "lodash";
import Link from "next/link";
import { AppBooleanStateContext } from "@/providers/AppBooleanStates";

const links: { [key: string]: string } = {
  about: "#",
  contact: "#",
};

const Header: FC = () => {
  const { introFadeContent, appIsFullyLoaded } = useContext(
    AppBooleanStateContext
  );
  const [moveFromRight, setMoveFromRight] = useState(false);

  useEffect(() => {
    setMoveFromRight(introFadeContent && appIsFullyLoaded);
  }, [introFadeContent, appIsFullyLoaded]);

  return (
    <header className={`${moveFromRight ? "move-from-right" : ""}`}>
      <ul>
        {Object.entries(links).map(([name, link], index) => (
          <li key={index}>
            <Link href={link}>{capitalize(name)}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
