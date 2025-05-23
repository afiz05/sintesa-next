import { useRouter } from "next/router";
import { withoutLayoutThemePath } from "Data/OthersPageData";
import { ToastContainer } from "react-toastify";
import "../../i18n";
import "../../public/assets/scss/app.scss";
import LayoutProvider from "helper/Layout/LayoutProvider";
import Layout from "../layout";
import { CustomizerProvider } from "helper/Customizer/CustomizerProvider";
import NoSsr from "utils/NoSsr";
import { MyContextProvider } from "@/auth/Contex";

const Myapp = ({ Component, pageProps }: any) => {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout>{page}</Layout>);
  const router = useRouter();
  const currentUrl = router.asPath;
  let updatedPath;
  if (currentUrl.includes("?")) {
    const tempt = currentUrl;
    updatedPath = tempt.split("?")[0];
  } else {
    updatedPath = currentUrl;
  }

  return (
    <NoSsr>
      <MyContextProvider>
        {withoutLayoutThemePath.includes(updatedPath) ? (
          <Component {...pageProps} />
        ) : (
          <CustomizerProvider>
            <LayoutProvider>
              {getLayout(<Component {...pageProps} />)}
            </LayoutProvider>
          </CustomizerProvider>
        )}
        <ToastContainer />
      </MyContextProvider>
    </NoSsr>
  );
};

export default Myapp;
