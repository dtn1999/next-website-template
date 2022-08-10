import React from "react";
import cn from "classnames";
import Spinner from "./Spinner";

interface Props {
    typename: string;
    componentProps?: any;
}

const ComponentSwitcher: React.FC<Props> = React.memo(({typename, componentProps}) => {
  switch(typename) {
    case "Spinner":
        return <Spinner {...componentProps} />;
  }

  return <div className={cn("")}> index </div>;
});
export default ComponentSwitcher;
