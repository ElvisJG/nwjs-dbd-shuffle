import { useLocation } from "react-router-dom";

export const useParams = () => {
  const { pathname } = useLocation();
  const removeSlash = urlString => urlString.replace(/^\/+/g, "");
  return removeSlash(pathname);
};
