import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

export const usePathfinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error(
      "use usePathfinding must be used wihin a PathfindingProvider"
    );
  }

  return context;
};
